import { chromium } from "playwright";
import Blog from "../models/blogs.model.js";
const scrapper = async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Scrape popular posts from Hashnode
  await page.goto("https://hashnode.com/featured", {
    waitUntil: "networkidle",
  });

  //solve the timeout issue
  await page.waitForSelector(".css-1abv9a9 .css-1yrl49b a", {
    timeout: 60000,
  });

  const hashnodeLinks = await page.$$eval(
    ".css-1abv9a9 .css-1yrl49b a",
    (elements) => elements.map((el) => el.href)
  );

  //get all links from database
  const dbLinks = await Blog.find({});

  //filter out the links that are already in the database
  const filteredLinks = hashnodeLinks.filter((link) => {
    return !dbLinks.some((dbLink) => dbLink.url === link);
  });

  for (const link of filteredLinks) {
    console.log("Going into: " + link);
    await page.goto(link);
    const url = await page.url();
    const title = await page.$eval(".css-1k5pqev", (el) => el.textContent);
    const image = await page.$eval(".css-2179a6", (el) => el.src);
    const date = await page.$eval(".css-z70pxu", (el) => el.textContent);
    const read_time = await page.$eval(
      ".css-22f6v2 ",
      (el) => el.textContent
    );
    const user_name = await page.$eval(
      ".css-1d1xwb0 a",
      (el) => el.textContent
    );

    const user_image = await page.$eval(".css-1yapcyz", (el) => el.src);

    //make the object
    const blog = {
      title,
      image,
      date,
      read_time,
      source: "Hashnode",
      createdAt: new Date().toISOString(),
      user_name,
      user_image,
      url,
    };

    //save to db
    try {
      const newBlog = new Blog(blog);
      await newBlog.save();
      console.log("Saved to db");
    } catch (error) {
      console.log(error);
    }
  }

  // Scrape popular posts from Dev.to
  await page.goto("https://dev.to/top/week", { waitUntil: "networkidle" });

  const devtoLinks = await page.$$eval(
    ".crayons-story__indention .crayons-story__title a",
    (elements) => elements.map((el) => el.href)
  );
  for (const link of devtoLinks) {
    await page.goto(link);
    const url = await page.url();
    const title = await page.$eval(
      ".crayons-article__header__meta h1",
      (el) => el.textContent
    );
    const image = await page.$eval(
      ".crayons-article__cover__image",
      (el) => el.src
    );
    const date = await page.$eval(".date-no-year", (el) => el.textContent);
    const user_name = await page.$eval(".crayons-link", (el) => el.textContent);
    const user_image = await page.$eval(
      ".radius-full .align-middle",
      (el) => el.src
    );

    //make the object
    const blog = {
      title,
      image,
      date,
      read_time: "",
      source: "Dev.to",
      createdAt: new Date().toISOString(),
      user_name,
      user_image,
      url,
    };

    //save to db
    try {
      const newBlog = new Blog(blog);
      await newBlog.save();
    } catch (error) {
      console.log(error);
    }
  }
};
export default scrapper;

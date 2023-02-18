import puppeteer from "puppeteer";

const pageURL = "https://hashnode.com";

const scrapper = async (pageURL) => {
  let dataObject = {};
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto(pageURL);
    // get the featured post from hashnode
    const data = await page.evaluate(() => {
      const featuredPost = document.querySelector(".featured-post");
      return featuredPost;
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  browser.close();
  return dataObject;
};

scrapper(pageURL).then((data) => console.log(data));

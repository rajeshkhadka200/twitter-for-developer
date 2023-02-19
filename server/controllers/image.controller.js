export const postImage = async (req, res) => {
  try {
    console.log(req.files);
    const { image } = req.files;
    const filename = Date.now() + image.name.replace(/\s/g, "");
    const url = `${req.protocol}://${req.get("host")}/uploads/${filename}`;

    await image.mv("uploads/" + filename, function (err) {
      if (err) {
        throw err;
      }
    });
    return res.status(200).json({
      url,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
      message: "unable to upload image",
    });
  }
};

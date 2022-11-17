const uploadImage = async (req, res, next) => {

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send('No files were uploaded.');
  // }
  if (req.files && Object.keys(req.files).length !== 0) {
    await Promise.all(
      Object.keys(req.files).map(async (key) => {
        return new Promise(async (resolve) => {
          const file = req.files[key]
          const suffixUrl = `/assets/imgs/${Date.now()}-driving-${file.name}`
          const path = `${__dirname}/../client/public${suffixUrl}`
          await file.mv(path, (err) => {
            if (err) {
              return res.status(500).send(err);
            }
            else {
              req.body[key] = suffixUrl
              resolve(true);
            }
          });
        })
      }))
    next()
  }
  else{
    next()
  }
}
// const resizeImages = async (req, res, next) => {
//   if (!req.files) return next();

//   req.body.images = [];
//   await Promise.all(
//     req.files.map(async file => {
//       const filename = file.originalname.replace(/\..+$/, "");
//       const newFilename = `bezkoder-${filename}-${Date.now()}.jpeg`;

//       await sharp(file.buffer)
//         .resize(640, 320)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(`upload/${newFilename}`);

//       req.body.images.push(newFilename);
//     })
//   );
// next()
// };

module.exports = {
  uploadImage,
};
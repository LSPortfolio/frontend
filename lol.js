// https://wallpapershome.com/images/wallpapers/norway-3840x2160-5k-4k-wallpaper-fjord-mountains-river-sky-5657.jpg

const cloudinary = require('cloudinary');

cloudinary.config({ cloud_name: '', api_key: '', api_secret: '' });

cloudinary.uploader.upload(`https://wallpapershome.com/images/wallpapers/norway-3840x2160-5k-4k-wallpaper-fjord-mountains-river-sky-5657.jpg`, (err, result) => {
    console.log(result.url);
});
const wallpaper = require('wallpaper');

wallpaper.set('Windows10Evil.gif').then(() => {
	console.log('upgrade to windows 10');
});

wallpaper.get().then(imagePath => {
	console.log(imagePath);
	//=> '/Users/sindresorhus/Windows10Evil.gif'
});

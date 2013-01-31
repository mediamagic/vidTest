var ffmpeg = require('fluent-ffmpeg');
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log('starting');
	var proc = new ffmpeg({source: __dirname + '/../public/input.avi', timeout: 600})
		.withVideoCodec('libx264')
		.toFormat('mp4')
		.withAudioChannels(2)
		.withSize('640x640')
		.applyAutopadding(true, 'white')
		.saveToFile(__dirname + '/../public/output.mp4', function(stdout, stderr){
			if (stderr) {
				// 	return console.log(stderr)
				console.log('<<----------------------------------->>');
				console.log('<<----------------------------------->>');
				console.log('############file converted#############');
				console.log('<<----------------------------------->>');
				console.log('<<----------------------------------->>');
			}
		});
	res.render('index', { title: 'Express' });
};
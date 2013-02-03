var ffmpeg = require('fluent-ffmpeg');
var Metalib = require('fluent-ffmpeg').Metadata;
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log('starting');
	var proc = new ffmpeg({source: __dirname + '/../public/input1.avi', timeout: 600})
		.withVideoCodec('libx264')
		.toFormat('mp4')
		.withAudioChannels(2)
		.withSize('640x640')
		.applyAutopadding(true, 'white')
		.saveToFile(__dirname + '/../public/output.mp4', function(stdout, stderr){
			if (stderr)
				console.log('stderr received')
			if (stdout)
				console.log('stdout received')
			console.log('done');
		});
	var proc2 = new ffmpeg({source: __dirname + '/../public/input1.avi', timeout: 600})
		.withSize('120x120')
		.takeScreenshots({
				count: 2,
				timemarks: [ '0.5', '1' ]
		}, __dirname + '/../public/', function(err, filenames) {
		    console.log(filenames);
		    console.log('screenshots were saved');
 		 });
	res.render('index', { title: 'Express' });
};
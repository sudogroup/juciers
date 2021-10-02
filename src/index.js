import client from "./client";

var CHANNEL_NAME = 'mohad12211';



const obs = new OBSWebSocket();
obs.connect({ address: 'localhost:4444' }).then(() => {

	obs.send('GetSceneList', {}).then((res) => {
		console.log(res);
	});
	console.log(`Obs up`);
}).catch(err => {
	console.log(err);
});
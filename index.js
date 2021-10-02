const CHANNEL_NAME = "Mutlaq_777"

const tmi = require('tmi.js');
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

const client = new tmi.Client({
	channels: [ CHANNEL_NAME ]
});
client.connect();

obs.connect({ address: 'localhost:4444' ,password:'password'}).then(() => {
        console.log(`Obs up`);
    }).catch(err => {
        console.log(err);
    });
    obs.on('error', err => {
        console.error('socket error:', err);
    });

client.on('message', (channel, tags, message, self) => {
    if(message.includes('!chat')){
        obs.send('SetCurrentScene', { 'scene-name': "End"});
    }
    if(message.includes('!mohad')){
        obs.send('GetSceneList').then(data => {
            console.log('Using promises:', data);
        });
    }    
});

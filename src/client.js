const client = new tmi.Client({
	options: { debug: false },
	connection: {
		reconnect: true,
		secure: true
	},
	channels: [CHANNEL_NAME]
});

client.connect().then(() => {
	client.on("chat", (channel, flags, message, self) => {

		console.log(message);

	});
});


export default client;
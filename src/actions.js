client.on("message", (channel, tags, message, self) => {
    // behaviors
    if (message.includes("!s1")) {
        obs.send("SetCurrentScene", { "scene-name": "Scene" });
    }
    if (message.includes("!s2")) {
        obs.send("SetCurrentScene", { "scene-name": "Blurred" });
    }
});

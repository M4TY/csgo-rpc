const http = require('http');
const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
})
const CSGameState = new (require('cs-gamestate'))(3000, '127.0.0.1');

const d = new Date();

rpc.on("ready", () => {
    var details = "In Menu"

        var presence = {
            details: details,
            largeImageKey: "csgo",
            largeImageText: "Counter-Strike Globa Offensive"
        };
        rpc.setActivity(presence)
    console.log("rpc active");
})

function updatePresence(data) {

    playerState = data.player.state
    if (playerState
        && Object.keys(playerState).length === 0
        && Object.getPrototypeOf(playerState) === Object.prototype) {
        var details = "In Menu"

        var presence = {
            details: details,
            largeImageKey: "csgo",
            largeImageText: "Counter-Strike Globa Offensive"
        };
        rpc.setActivity(presence)
    } else {
        var currentScore = "22";
        if (data.player.team === "T") {
            currentScore = `${ data.map.team_t.score }-${ data.map.team_ct.score }`;
        } else {
            currentScore = `${ data.map.team_ct.score }-${ data.map.team_t.score }`;
        }

        if (data.map.phase === "warmup") {
            currentScore = "Warmup"
        }

        var mode = data.map.mode
        const gamemode = mode.charAt(0).toUpperCase() + mode.slice(1);
        var map = data.map.name

        var details = `Playing ${ gamemode } on ${ map }`

        var presence = {
            details: details,
            state: currentScore,
            largeImageKey: map,
            smallImageKey: "csgo"
        };
    }
    rpc.setActivity(presence)


}
CSGameState.on('<update>', data => {
    // updateRPC(data)
    updatePresence(data)
});

rpc.login({
    clientId: "907279883846164541"
})

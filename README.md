# Counter-Strike Global Offensive
> Enhance your game with Discord rich presence

- [Counter-Strike Global Offensive](#counter-strike-global-offensive)
- [Installation](#installation)
  - [1.1 - Config file](#11---config-file)
  - [1.2 - Install dependencies](#12---install-dependencies)
  - [1.3 - Start the server](#13---start-the-server)

# Installation

## 1.1 - Config file


> 1) Navigate into
```
D:\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg\gamestate_integration_consolesample.cfg
```

> Paste this sample config
```
"Console Sample v.1"
{
 "uri" "http://127.0.0.1:3000"
 "timeout" "5.0"
 "buffer"  "0.1"
 "throttle" "0.5"
 "heartbeat" "60.0"
 "auth"
 {
   "token" "CCWJu64ZV3JHDT8hZc"
 }
 "output"
 {
   "precision_time" "3"
   "precision_position" "1"
   "precision_vector" "3"
 }
 "data"
 {
   "provider"            "1"      // general info about client being listened to: game name, appid, client steamid, etc.
   "map"                 "1"      // map, gamemode, and current match phase ('warmup', 'intermission', 'gameover', 'live') and current score
   "round"               "1"      // round phase ('freezetime', 'over', 'live'), bomb state ('planted', 'exploded', 'defused'), and round winner (if any)
   "player_id"           "1"      // player name, clan tag, observer slot (ie key to press to observe this player) and team
   "player_state"        "1"      // player state for this current round such as health, armor, kills this round, etc.
   "player_weapons"      "1"      // output equipped weapons.
   "player_match_stats"  "1"      // player stats this match such as kill, assists, score, deaths and MVPs
 }
}
```

## 1.2 - Install dependencies
```
npm install
```
## 1.3 - Start the server
> cd into the root and run
```
node .
```

import time

import pyautogui as b

a= ["10 second ninja x", "7 days to die", "accounting+", "adam's venture origins", "age of steel: recharge", "aim lab",
    "akin", "amnesia: a machine for pigs", "amnesia: the dark descent", "among us", "among us vr", "aperture desk job",
    "ark: survival evolved", "ark: survival of the fittest", "assetto corsa", "battlefield 1", "battlefield 4",
    "battlefield hardline", "battlefield v", "beamng.drive", "beat saber", "besiege", "blade & sorcery", "blocksworld",
    "bloons td 6", "bloons td battles 2", "bone lab", "boneworks", "borderlands 2", "borderlands: the pre-sequel",
    "broforce", "call of duty 4: modern warfare",
    "call of duty: modern warfare 2 (2009)", "call of duty: modern warfare 3", "capcom arcade 2nd stadium",
    "castle miner z", "cities skylines", "clue/cluedo: the classic mystery game", "counter-strike",
    "counter-strike: condition zero",
    "counter-strike: global offensive", "counter-strike: source", "crab game", "cube runner", "day of defeat",
    "day of defeat: source",
    "dc universe online", "dead by daylight", "dead rising 2", "deathmatch classic", "destiny 2", "destiny or fate",
    "dirt rally", "don't starve", "don't starve together", "drawful 2", "drones, the human condition",
    "enter the gungeon", "the escapists 2", "fallout shelter", "fibbage xl", "five nights at freaddy's", "the forest",
    "fps chess", "friday the 13th: the game", "gang beast", "garfield kart", "garfield kart - furious racing",
    "garry's mod", "gene shift auto",
    "genital jousting", "geometry dash", "goat simulator", "golf it!", "golf with your friends", "grand theft auto v",
    "grip: combat racing", "half dead 3", "half-life", "half-life 2", "half-life 2: deathmatch",
    "half-life 2: episode one", "half-life 2: episode two",
    "half-life 2: lost coast", "half-life: alyx", "half-life: blue shift", "half-life deathmatch: source",
    "half-life: opposing force", "half-life: source", "hand simulator", "hasbros's battleship", "human: fall flat",
    "hungry flame", " hunie pop", " i am bread", "interkosmos", "jagged alliance gold", "jurassic world evolution",
    "just cause 2", "just cause 3", "just cause 4", "kao the kangaroo: round 2", "keep talking and nobody explodes",
    "kerbal space program", "killing floor", "killing floor 2", "kitchen simulator 2",
    "left 4 dead", "left 4 dead 2", "lego batman: the videogame", "lego batman: dc super heros",
    "lego batman: beyond gotham", "lego city undercover", "lego dc super-villains", "lego marvel super heroes",
    "lego marvel super heroes 2", "lego marvel's avengers", "the lego ninjago movie video game",
    "lego star wars: the complete saga", "the long drive", "microsoft flight simulator x: steam edition",
    "minion masters", "mr. dubstep", "multiversus", "neverout", "nickelodeon all-star brawl", "nvidiaâ® vr funhouse",
    "octodad: dadliest catch", "oxygen not included", "payday 2", " people playground", "phasmophobia",
    "planet coaster", "plants vs. zombies garden warfare 2: deluxe edition", "portal", "portal 2", "portal reloaded",
    "portal with rtx",
    "powerwash simulator", "project maze", "quiplash", "raft", "ricochet", "rocket league", "rounds",
    "rusty lake hotel",
    "saints row: the third", "school of dragons: how to train your dragon", "sea of thieves",
    "sega mego drive & genesis classics", "shellshock live", "shadow bandit", "sinking simulator", "slapshot",
    "snake pass", "spin rush", "splitgate", "spongebob squarepants: battle for bikini bottom - rehydrated", "spore",
    "stardew valley", "stick fight: the game", "surgen simulator", "tabletop simulator",
    "team fortress classic", "team fortress 2", "teardown", "terraria", "the game of life 2",
    "the henry stickmin collection", "the jackbox party pack", "the jackbox party pack 2",
    "the jackbox party pack 3", "the jackbox party pack 4", "the jackbox party pack 5", "the jackbox party pack 6",
    "the jackbox party pack 7", "the lab", "the sims 3", "titanfall 2",
    "titan quest anniversary edition", "tmodloader", "tom clanc's rainbow six siege", "town of salem",
    "toy tinker simulator", "trackmania turbo", "turbo dismount", "ultimate chicken horse", "ultimate custom night",
    "ultimate epic battle simulator", "uno",
    "vector velocity", "viscera cleanup detail", "vrchat", "walking simulator", "wanda", "war thunder", "warframe",
    "war thunder", "wheely", "who's your daddy?!", "wobbledogs", "world of tanks blitz", "worms w.m.d."
    "you don't know jack headrush",
    "you don't know jack movies", "you don't know jack sports", "you don't know jack television",
    "you don't know jack vol. 1 xl", "you don't know jack vol. 2",
    "you don't know jack vol. 3", "you don't know jack vol. 4 the ride", "z"]
b.hotkey("super")
b.typewrite("steam")
b.press("enter")
b.moveTo(216, 46, duration=.2)
b.click()
for i in a:
    b.moveTo(123,181,duration=.2)
    b.click()
    b.typewrite(i)
    b.press("enter")
    b.moveTo(101,237,duration=.2)
    b.click()
    b.moveTo(221,178,duration=.2)
    b.click()
    time.sleep(2)
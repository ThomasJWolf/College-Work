#Game picker
#This program will help people pick games
#Thomas Wolf
#11/15/19

from datetime import date
today = date.today()
print("Hello user, todays date is",today,", The date this was created was 2019-11-15 so all of the games are from this date and before")
playstation_3={"Minecraft":19.99,"Grand Theft Auto V":9.99,"The Last of Us":9.99,"Uncharted 3: Drakes Deception":9.99,"Uncharted 2: Among Thieves":9.99,"Metal Gear Solid 4: Guns of the Patriots":19.99,"Batman: Arkham City":19.99,"God of War":9.99,"MotorStorm":9.99,"Heavy Rain":9.99,"LittleBigPlanet":19.99,"Final Fantasy XIII":19.99,"Fight Night Champion":9.99,"Skate 3":19.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Elder Scrolls V: Skyrim":29.99,"Don't Starve":14.99,"Terraria":14.99}
playstation_4={"Minecraft":19.99,"Rocket League":19.99,"Terraria":19.99,"Shellshock Live":6.99,"Grand Theft Auto V":14.99,"The Last of Us Remastered":19.99,"God of War":19.99,"Heavy Rain":29.99,"Uncharted 4: A Thief’s End":19.99,"Horizon Zero Dawn":19.99,"Gran Turismo Sport":19.99,"NBA 2K19":59.99,"Madden NFL 19":39.99,"MLB The Show 19":29.99,"NHL 19":39.99,"Red Dead Redemption 2":59.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Witcher 3: Wild Hunt":39.99,"What Remains of Edith Finch":19.99,"Fallout 4":29.99,"Assassin's Creed Odyssey":59.99,"Stardew Valley":14.99,"The Elder Scrolls V: Skyrim":29.99,"Kerbal Space Program":39.99,"Don't Starve":14.99,"Don't Starve Together":14.99,"Sims 4":39.99}
xbox_360={"Grand Theft Auto V":19.99,"Batman: Arkham City":19.99,"Final Fantasy XIII":15.99,"Fight Night Champion":19.99,"Skate 3":19.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Elder Scrolls V: Skyrim":29.99,"Minecraft":19.99}
xbox_one={"Minecraft":19.99,"Rocket League":19.99,"Terraria":19.99,"Shellshock Live":6.99,"Grand Theft Auto V":29.99,"NBA 2K19":59.99,"Madden NFL 19":39.99,"NHL 19":39.99,"Red Dead Redemption 2":59.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Witcher 3: Wild Hunt":39.99,"What Remains of Edith Finch":19.99,"Fallout 4":29.99,"Assassin's Creed Odyssey":59.99,"Stardew Valley":14.99,"The Elder Scrolls V: Skyrim":29.99,"Kerbal Space Program":39.99,"Don't Starve":14.99,"Don't Starve Together":14.99,"Sims 4":39.99}
nintendo3ds={"Minecraft":29.99,"Terraria":19.99,"The Legend of Zelda: A Link Between Worlds":19.99,"Fire Emblem: Awakening":39.99,"Pokémon Sun":39.99,"Pokémon Moon":39.99,"Animal Crossing: New Leaf":19.99,"Luigi's Mansion: Dark Moon":19.99,"Monster Hunter 4 Ultimate":29.99,"Captain Toad: Treasure Tracker":39.99}
nintendo_switch={"Minecraft":29.99,"Rocket League":19.99,"Super Smash Bros. Ultimate":59.99,"Terraria":29.99,"Mario Kart 8 Deluxe":59.99,"Super Mario Odyssey":59.99,"The Legend of Zelda: Breath of the Wild":59.99,"New Super Mario Bros U Deluxe":59.99,"Super Mario Maker 2":59.99,"The Legend of Zelda: Link's Awakening":59.99,"Mario Tennis Aces":59.99,"Kirby Star Allies":59.99,"Fire Emblem: Three Houses":59.99,"Donkey Kong Country: Tropical Freeze":59.99,"Arms":59.99,"Xenoblade Chronicles 2":59.99,"Captain Toad: Treasure Tracker":39.99,"Pokkén Tournament DX":59.99,"NBA 2K19":59.99,"The Witcher 3: Wild Hunt — Complete Edition":39.99,"What Remains of Edith Finch":19.99,"Stardew Valley":14.99,"The Elder Scrolls V: Skyrim":29.99,"Don't Starve":19.99,"Yoshi's Crafted World":59.99}
pc_list={"Minecraft":19.99,"Rocket League":19.99,"Terraria":9.99,"Shellshock Live":6.99,"Sims 3":19.99,"Grand Theft Auto V":29.99,"Batman: Arkham City":19.99,"Final Fantasy XIII":15.99,"NBA 2K19":59.99,"Madden NFL 19":39.99,"Red Dead Redemption 2":59.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Witcher 3: Wild Hunt":39.99,"What Remains of Edith Finch":19.99,"Fallout 4":29.99,"Assassin's Creed Odyssey":59.99,"Stardew Valley":14.99,"Garry's Mod":9.99,"The Elder Scrolls V: Skyrim":29.99,"Kerbal Space Program":39.99,"Don't Starve":9.99,"Don't Starve Together":14.99,"Sims 4":39.99}

playstation_3_set=set({"Minecraft":19.99,"Grand Theft Auto V":9.99,"The Last of Us":9.99,"Uncharted 3: Drakes Deception":9.99,"Uncharted 2: Among Thieves":9.99,"Metal Gear Solid 4: Guns of the Patriots":19.99,"Batman: Arkham City":19.99,"God of War":9.99,"MotorStorm":9.99,"Heavy Rain":9.99,"LittleBigPlanet":19.99,"Final Fantasy XIII":19.99,"Fight Night Champion":9.99,"Skate 3":19.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Elder Scrolls V: Skyrim":29.99,"Don't Starve":14.99,"Terraria":14.99})
playstation_4_set=set({"Minecraft":19.99,"Rocket League":19.99,"Terraria":19.99,"Shellshock Live":6.99,"Grand Theft Auto V":14.99,"The Last of Us Remastered":19.99,"God of War":19.99,"Heavy Rain":29.99,"Uncharted 4: A Thief’s End":19.99,"Horizon Zero Dawn":19.99,"Gran Turismo Sport":19.99,"NBA 2K19":59.99,"Madden NFL 19":39.99,"MLB The Show 19":29.99,"NHL 19":39.99,"Red Dead Redemption 2":59.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Witcher 3: Wild Hunt":39.99,"What Remains of Edith Finch":19.99,"Fallout 4":29.99,"Assassin's Creed Odyssey":59.99,"Stardew Valley":14.99,"The Elder Scrolls V: Skyrim":29.99,"Kerbal Space Program":39.99,"Don't Starve":14.99,"Don't Starve Together":14.99,"Sims 4":39.99})
xbox_360_set=set({"Grand Theft Auto V":19.99,"Batman: Arkham City":19.99,"Final Fantasy XIII":15.99,"Fight Night Champion":19.99,"Skate 3":19.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Elder Scrolls V: Skyrim":29.99,"Minecraft":19.99})
xbox_one_set=set({"Minecraft":19.99,"Rocket League":19.99,"Terraria":19.99,"Shellshock Live":6.99,"Grand Theft Auto V":29.99,"NBA 2K19":59.99,"Madden NFL 19":39.99,"NHL 19":39.99,"Red Dead Redemption 2":59.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Witcher 3: Wild Hunt":39.99,"What Remains of Edith Finch":19.99,"Fallout 4":29.99,"Assassin's Creed Odyssey":59.99,"Stardew Valley":14.99,"The Elder Scrolls V: Skyrim":29.99,"Kerbal Space Program":39.99,"Don't Starve":14.99,"Don't Starve Together":14.99,"Sims 4":39.99})
nintendo3ds_set=set({"Minecraft":29.99,"Terraria":19.99,"The Legend of Zelda: A Link Between Worlds":19.99,"Fire Emblem: Awakening":39.99,"Pokémon Sun":39.99,"Pokémon Moon":39.99,"Animal Crossing: New Leaf":19.99,"Luigi's Mansion: Dark Moon":19.99,"Monster Hunter 4 Ultimate":29.99,"Captain Toad: Treasure Tracker":39.99,})
nintendo_switch_set=set({"Minecraft":29.99,"Rocket League":19.99,"Super Smash Bros. Ultimate":59.99,"Terraria":29.99,"Mario Kart 8 Deluxe":59.99,"Super Mario Odyssey":59.99,"The Legend of Zelda: Breath of the Wild":59.99,"New Super Mario Bros U Deluxe":59.99,"Super Mario Maker 2":59.99,"The Legend of Zelda: Link's Awakening":59.99,"Mario Tennis Aces":59.99,"Kirby Star Allies":59.99,"Fire Emblem: Three Houses":59.99,"Donkey Kong Country: Tropical Freeze":59.99,"Arms":59.99,"Xenoblade Chronicles 2":59.99,"Captain Toad: Treasure Tracker":39.99,"Pokkén Tournament DX":59.99,"NBA 2K19":59.99,"The Witcher 3: Wild Hunt — Complete Edition":39.99,"What Remains of Edith Finch":19.99,"Stardew Valley":14.99,"The Elder Scrolls V: Skyrim":29.99,"Don't Starve":19.99,"Yoshi's Crafted World":59.99})
pc_list_set=set({"Minecraft":19.99,"Rocket League":19.99,"Terraria":9.99,"Shellshock Live":6.99,"Sims 3":19.99,"Grand Theft Auto V":29.99,"Batman: Arkham City":19.99,"Final Fantasy XIII":15.99,"NBA 2K19":59.99,"Madden NFL 19":39.99,"Red Dead Redemption 2":59.99,"Metal Gear Solid 5: The Phantom Pain":19.99,"The Witcher 3: Wild Hunt":39.99,"What Remains of Edith Finch":19.99,"Fallout 4":29.99,"Assassin's Creed Odyssey":59.99,"Stardew Valley":14.99,"Garry's Mod":9.99,"The Elder Scrolls V: Skyrim":29.99,"Kerbal Space Program":39.99,"Don't Starve":9.99,"Don't Starve Together":14.99,"Sims 4":39.99})

adventure=("adventure","Minecraft","Terraria","Grand Theft Auto V","The Last of Us","Uncharted 3: Drake's Deception","Uncharted 2: Among Thieves","Metal Gear Solid 4: Guns of the Patriots","Batman: Arkham City","God of War","Uncharted 4: A Thief's End","Marvel's Spider-Man","Horizon Zero Dawn","Final Fantasy XIII","Super Mario Odyssey","The Legend of Zelda: Breath of the Wild","Kirby Star Allies","Xenoblade Chronicles 2","The Legend of Zelda: A Link Between Worlds","Fire Emblem: Awakening","Pokémon Sun","Pokémon Moon","Luigi's Mansion: Dark Moon","Monster Hunter 4 Ultimate","Red Dead Redemption 2","Metal Gear Solid 5: The Phantom Pain","The Witcher 3: Wild Hunt","What Remains of Edith Finch","Fallout 4","Assassin's Creed Odyssey","Stardew Valley","The Elder Scrolls V: Skyrim","Kerbal Space Program","Don't Starve","Don't Starve Together")
sports=("sports","Rocket League","NBA 2K19","Fight Night Champion","Madden NFL 19","MLB The Show 19","NHL 19","Skate 3","Mario Tennis Aces")
survival=("survival","Minecraft","Terraria","Stardew Valley","Don't Starve","Don't Starve Together")
racing=("racing","Rocket League","MotorStorm","Gran Turismo Sport","Mario Kart 8 Deluxe","Grand Theft Auto V")
fighting=("fighting","Super Smash Bros. Ultimate","Fight Night Champion","Arms","Pokkén Tournament DX")
open_world=("open world","Minecraft","Terraria","Skate 3","Super Mario Odyssey","Animal Crossing: New Leaf","Red Dead Redemption 2","The Witcher 3: Wild Hunt","Fallout 4","Assassin's Creed Odyssey","Stardew Valley","The Elder Scrolls V: Skyrim","Kerbal Space Program","Don't Starve","Don't Starve Together")
sandbox=("sandbox","Minecraft","Super Mario Maker 2","Garry's Mod","Kerbal Space Program","Don't Starve","Don't Starve Together","The Elder Scrolls V: Skyrim","Grand Theft Auto V","Fallout 4","The Witcher 3: Wild Hunt")
simulation=("simulation","Sims 3","Sims 4","Animal Crossing: New Leaf","Stardew Valley","Garry's Mod","Kerbal Space Program","Don't Starve","Don't Starve Together")
action=("action","Grand Theft Auto V","The Last of Us","Uncharted 3: Drake's Deception","Uncharted 2: Among Thieves","Metal Gear Solid 4: Guns of the Patriots","Batman: Arkham City","God of War","LittleBigPlanet","Uncharted 4: A Thief's End","Marvel's Spider-Man","Horizon Zero Dawn","Final Fantasy XIII","Super Mario Odyssey","The Legend of Zelda: Breath of the Wild","Kirby Star Allies","Xenoblade Chronicles 2","Captain Toad: Treasure Tracker","The Legend of Zelda: A Link Between Worlds","Fire Emblem: Awakening","Luigi's Mansion: Dark Moon","Monster Hunter 4 Ultimate","Red Dead Redemption 2","Metal Gear Solid 5: The Phantom Pain","The Witcher 3: Wild Hunt","Fallout 4","Assassin's Creed Odyssey","The Elder Scrolls V: Skyrim","Don't Starve","Don't Starve Together","Shellshock Live")
platformer=("platformer","Uncharted 3: Drake's Deception","Uncharted 2: Among Thieves","Metal Gear Solid 4: Guns of the Patriots","LittleBigPlanet","Uncharted 4: A Thief's End","Super Mario Odyssey","New Super Mario Bros U Deluxe","Super Mario Maker 2","Kirby Star Allies","Donkey Kong Country: Tropical Freeze","Captain Toad: Treasure Tracker","Yoshi's Crafted World")
stealth=("stealth","Metal Gear Solid 4: Guns of the Patriots","Metal Gear Solid 5: The Phantom Pain","Assassin's Creed Odyssey","The Elder Scrolls V: Skyrim")
rpg=("rpg","Final Fantasy XIII","Horizon Zero Dawn","The Legend of Zelda: Breath of the Wild","Fire Emblem: Three Houses","Xenoblade Chronicles 2","Fire Emblem: Awakening","Pokémon Sun","Pokémon Moon","Monster Hunter 4 Ultimate" ,"The Witcher 3: Wild Hunt","Fallout 4","Assassin's Creed Odyssey","Stardew Valley","The Elder Scrolls V: Skyrim")
all_genre=["adventure","sports","survival","racing","fighting","open world","sandbox","simulation","action","platformer","stealth","rpg","all games"]
global console
global console2
console=[]
console2=[]
adventure_set=set([])
sports_set=set([])
survival_set=set([])
racing_set=set([])
fighting_set=set([])
open_world_set=set([])
sandbox_set=set([])
simulation_set=set([])
action_set=set([])
platformer_set=set([])
stealth_set=set([])
rpg_set=set([])

go_again=0

def main():
    system=int(input("\nWhat brand are you geting a game for?\n1. Playstation (45 games)\n2. Microsoft (28 games)\n3. Nintendo (35 games)\n4. PC (23 games)\n5. Quit"))
    if system==1:
        playstation()
    if system==2:
        miscrosoft()
    if system==3:
        nintendo()
    if system==4:
        pc()
    if system==5:
        quit


def playstation():
    playstations=int(input("\nWhat system are you getting a game for?\n1. Playstation 3 (18 games)\n2. Playstation 4 (27 games)\n3. None"))
    global console
    global console2
    if playstations==1:
        console=playstation_3_set
        console2=playstation_3
        compare()
    elif playstations==2:
        console=playstation_4_set
        console2=playstation_4
        compare()
    else:
        main()

def miscrosoft():
    xboxs=int(input("\nWhat system are you getting a game for?\n1. Xbox 360 (8 games)\n2. Xbox One (20 games)\n3. None"))
    global console
    global console2
    if xboxs==1:
        console=xbox_360_set
        console2=xbox_360
        compare()
    elif xboxs==2:
        console=xbox_one_set
        console2=xbox_one
        compare()
    else:
        main()

def nintendo():
    nintendos=int(input("\nWhat system are you getting a game for?\n1. 3DS (10 games)\n2. Nintendo Switch (25 games)\n3. None"))
    global console
    global console2
    if nintendos==1:
        console=nintendo3ds_set
        console2=nintendo3ds
        compare()
    elif nintendos==2:
        console=nintendo_switch_set
        console2=nintendo_switch
        compare()
    else:
        main()

def pc():
    global console
    global console2
    console=pc_list_set
    console2=pc_list
    compare()

def compare():
    global console
    global console2
    adventure_set=set([])
    sports_set=set([])
    survival_set=set([])
    racing_set=set([])
    fighting_set=set([])
    open_world_set=set([])
    sandbox_set=set([])
    simulation_set=set([])
    action_set=set([])
    platformer_set=set([])
    stealth_set=set([])
    rpg_set=set([])
    games=set([])
    adventure_num=0
    sports_num=0
    survival_num=0
    racing_num=0
    fighting_num=0
    open_world_num=0
    sandbox_num=0
    simulation_num=0
    action_num=0
    platformer_num=0
    stealth_num=0
    rpg_num=0
    game_list=[]
    for i in adventure:
        if i in console:
            adventure_num+=1

    for i in  sports:
        if i in console:
             sports_num+=1

    for i in survival:
        if i in console:
            survival_num+=1

    for i in racing:
        if i in console:
            racing_num+=1

    for i in fighting:
        if i in console:
            fighting_num+=1

    for i in open_world:
        if i in console:
            open_world_num+=1

    for i in sandbox:
        if i in console:
            sandbox_num+=1

    for i in simulation:
        if i in console:
            simulation_num+=1

    for i in action:
        if i in console:
            action_num+=1

    for i in platformer:
        if i in console:
            platformer_num+=1

    for i in stealth:
        if i in console:
            stealth_num+=1

    for i in rpg:
        if i in console:
            rpg_num+=1

    console_num=len(console)       
    print("\nThese are your genre options (numbers for selected console):\nAdventure (",adventure_num,")\nSports (",sports_num,")\nSurvival (",survival_num,")\nRacing (",racing_num,")\nFighting (",fighting_num,")\nOpen world (",open_world_num,")\nSandbox (",sandbox_num,")\nSimulation (",simulation_num,")\nAction (",action_num,")\nPlatformer (",platformer_num,")\nStealth (",stealth_num,")\nRPG (",rpg_num,")\nAll games (",console_num,")")
    repeat=int(input("How many would you like to enter?\n(The more genres you enter the less games you will get)"))
    for i in range(repeat):
        game_list_get=input("\nWhat is the genre you want?")
        game_list_get=game_list_get.lower()
        if game_list_get in all_genre:
            if game_list_get in adventure:
                adventure_set=set(adventure)

            elif game_list_get in sports:
                sports_set=set(sports)
                
            elif game_list_get in survival:
                survival_set=set(survival)

            elif game_list_get in racing:
                racing_set=set(racing)
                
            elif game_list_get in fighting:
                fighting_set=set(fighting)

            elif game_list_get in open_world:
                open_world_set=set(open_world)
                
            elif game_list_get in sandbox:
                sandbox_set=set(sandbox)
                
            elif game_list_get in simulation:
                simulation_set=set(simulation)

            elif game_list_get in action:
                action_set=set(action)

            elif game_list_get in platformer:
                platformer_set=set(platformer)

            elif game_list_get in stealth:
                stealth_set=set(stealth)

            elif game_list_get in rpg:
                rpg_set=set(rpg)

            elif game_list_get=='all games':
                console=console
                 

                
            else:
                print("\nERROR, genre not avalible")
            game_list.append(game_list_get)
        else:
            print("\nERROR, genre not avalible")
            compare()

    count=0
    if adventure_set ==set():
        count+=1
    else:
        console=console & adventure_set

    if sports_set ==set():
        count+=1
    else:
        console=console & sports_set

    if survival_set ==set():
        count+=1
    else:
        console=console & survival_set

    if racing_set ==set():
        count+=1
    else:
        console=console & racing_set

    if fighting_set ==set():
        count+=1
    else:
        console=console & fighting_set

    if open_world_set ==set():
        count+=1
    else:
        console=console & open_world_set

    if sandbox_set ==set():
        count+=1
    else:
        console=console & sandbox_set

    if simulation_set ==set():
        count+=1
    else:
        console=console & simulation_set

    if action_set ==set():
        count+=1
    else:
        console=console & action_set

    if platformer_set ==set():
        count+=1
    else:
        console=console & platformer_set

    if stealth_set ==set():
        count+=1
    else:
        console=console & stealth_set

    if rpg_set ==set():
        count+=1
    else:
        console=console & rpg_set

    if game_list_get=='all games':
        console=console

    colsole=str(console)
    console_str=[]

    print("\nThere are",len(console),"games you can get")
    print()

    file=open('Games.csv','w')
    file.write('Game'+',Price'+'\n')
    for i in console:
        if console==set():
            print("\nERROR: There are no games with those genres on this console")
        else:
            console_list=[i]
            console_list=str(i)
            file.write(console_list)
            print(console_list,end=": ")
            console3=(console2.get(console_list,"Did not work"))
            console4=str(console3)
            file.write(','+console4+'\n')
            print(console3)
            print()
    file.close()
    go_again=input("Would you like to go again?(yes or no)")
    go_again=go_again.lower()
    if go_again=='yes':
        main()
    print("Thank you for using my program")

main()

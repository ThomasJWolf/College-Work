def main():
    games=[]
    fp = open("games.txt", "r")
    for line in fp:
        game=fp.readline().strip()
        if "play" in game:
            go=False
        elif game=="":
            go=False
        elif "B" in game:
            go=False
        elif "Links" in game:
            go=False
        elif "Review" in game:
            go = False
        elif "installed" in game:
            go = False
        elif "Stats" in game:
            go = False
        elif "record" in game:
            go = False
        else:
            go=True
        if go==True:
            game = game.lower()
            games.append(game)



    fp.close()
    print(games)

if __name__ == "__main__":
    main()

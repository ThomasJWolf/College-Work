# Thomas Wolf
# World Series List Maker
# 1/11/23

import os
import validate

def main():
    if os.path.exists("WorldSeriesWinners.txt"):
        fp = open("WorldSeriesWinners.txt", "r")
        winners=fp.readlines()
        for i in range(len(winners)):
            winners[i]=winners[i].strip()
        fp.close()
    else:
        print("error")

    # team=input("enter your team")
    # if team in winners:
    #     print("Your team has one the world series")
    #     wins = winners.count(team)
    #     print("Your team has one {} times".format(wins))
    # else:
    #     print("Your team sucks")

    print("The first 5 winners are:")
    for i in winners[:5]:
        print("\t",i)
    print("The last 10 winners are")
    for i in winners[-10:]:
        print("\t",i)
    print("The winners every 5 years are:")
    for i in winners[0::5]:
        print("\t",i)

if __name__ == "__main__":
    main()
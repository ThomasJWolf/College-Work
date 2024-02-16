# Thomas Wolf
# Combine text files
# 2/22/23

import os
import pickle
import re
import validate

def main():
    winners = []
    if os.path.exists("WorldSeries.txt"):
        with open("WorldSeries.txt", "r") as fp:
            winners = fp.read().splitlines()
    else:
        print("error")

    team_winners = team_wins(winners)
    pickle_it("team.dat", team_winners)
    team_winners = unpickle_it("team.dat")
    year_winners = year_wins(winners)
    pickle_it("year.dat", year_winners)
    year_winners = unpickle_it("year.dat")
    year_wins_input(year_winners,team_winners)

def team_wins(winners):
    team_winners = {}
    for team in winners:
        if team in team_winners.keys():
            team_winners[team] += 1
        else:
            if "World Series Not" not in team:
                team_winners[team] = 1
    print(team_winners)
    return team_winners

def year_wins(winners):
    cur_year = 1903
    year_winners = {}
    for team in winners:
        year_winners[cur_year] = team
        cur_year += 1
    print(year_winners)
    return year_winners

def year_wins_input(year_winners,team_winners):
    print(year_winners)
    print(team_winners)
    try:
        win = 0
        year = validate.int_range(1903,2009,"Enter a year between 1993 and 2009","No")
        if year in year_winners.keys():
            win = year_winners[year]
        if "World Series Not" not in win:
            print("In the year {} the {} won {} times".format(year,win,team_winners[win]))
        else:
            print("No one played this year")
    except:
        print("Somebody, not me, messed this up")


def pickle_it(file_name, item):
    fp = open(file_name, "wb")
    pickle.dump(item, fp)
    fp.close()


def unpickle_it(file_name):
    fp = open(file_name, "rb")
    item = pickle.load(fp)
    fp.close()
    return item


if __name__ == "__main__":
    main()
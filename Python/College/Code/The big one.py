# Thomas Wolf
# Combine text files
# 2/22/23

import os
import re

def main():

    if os.path.exists("text.txt"):
        fp = open("text.txt", "r")
        henery = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    if os.path.exists("WorldSeriesWinners.txt"):
        fp = open("WorldSeriesWinners.txt", "r")
        winners = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    henery = king(henery)
    winners = world(winners)
    amalgamation(henery, winners)

def king(henery):
    all_words = set({})
    for i in henery:
        i = re.sub(r"[^\w\s]", '', i)
        i = i.split(" ")
        for y in i:
            all_words.add(y)
    return all_words


def world(winners):
    all_words = set({})
    for i in winners:
        i = re.sub(r"[^\w\s]", '', i)
        i = i.split(" ")
        for y in i:
            all_words.add(y)
    return all_words


def amalgamation(henery, winners):
    fancy = henery | winners
    print("All unique words: ")
    print(*fancy, sep=", ")

    fancy = henery & winners
    print("All similar words: ")
    print(*fancy, sep=", ")

    fancy = henery - winners
    print("Words in the first file: ")
    print(*fancy, sep=", ")

    fancy = winners - henery
    print("Words in the second file: ")
    print(*fancy, sep=", ")

    fancy = henery ^ winners
    print("Words in neather of them: ")
    print(*fancy, sep=", ")

    print("Are they disjointed?")
    print(henery.isdisjoint(winners))



if __name__ == "__main__":
    main()

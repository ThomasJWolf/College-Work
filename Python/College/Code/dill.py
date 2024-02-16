# Thomas Wolf
# Combine text files pickle
# 3/1/23

import os
import pickle
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

    dict_henery = king(henery)
    dict_winners = world(winners)
    pickle_it("henery.dat", dict_henery)
    henery = unpickle_it("henery.dat")
    pickle_it("winners.dat", dict_winners)
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


def pickle_it(file_name, item):
    fp = open(file_name, "wb")
    pickle.dump(file_name, item)
    fp.close()


def unpickle_it(file_name):
    fp = open(file_name, "wb")
    item = pickle.load(fp)
    fp.close()
    return item


def read_in(file_name):
    fp = open("text.txt", "r")
    set_item = fp.read().lower().splitlines()
    fp.close()
    return set_item


def write_out(file_name, item):
    fp = open(file_name, "w")
    for i in item:
        fp.write(i)
    fp.close()


if __name__ == "__main__":
    main()
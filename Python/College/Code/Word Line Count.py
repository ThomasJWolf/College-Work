# Thomas Wolf
# Word Line Count
# 2/27/23

import os
import re


def main():
    if os.path.exists("text.txt"):
        fp = open("text.txt", "r")
        sentence = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    all_words = {}
    for index in range(len(sentence)):
        i = sentence[index]
        i = re.sub(r"[^\w\s]", '', i)
        i = i.split(" ")
        for y in i:
            if y in all_words.keys():
                if index not in all_words[y]:
                    all_words[y].append(index)
            else:
                all_words[y] = [index]

    words_list = sorted(all_words.keys())

    for i in words_list:
        print(i, end=": ")
        for y in all_words[i]:
            print(y, end=", ")
        print("")


if __name__ == "__main__":
    main()

# Thomas Wolf
# Word Set
# 2/22/23

import os
import re

def main():

    if os.path.exists("text.txt"):
        fp = open("text.txt", "r")
        sentence = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    all_words = set({})
    for i in sentence:
        i = re.sub(r"[^\w\s]", '', i)
        i = i.split(" ")
        for y in i:
            all_words.add(y)

    print(*all_words)
    for i in all_words:
        print(i, end=", ")

if __name__ == "__main__":
    main()

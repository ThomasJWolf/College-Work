# Thomas Wolf
# Sort Word
# 2/22/23

import os
import csv
import re

def main():

    if os.path.exists("text.txt"):
        fp = open("text.txt", "r")
        sentence = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    all_words = {}
    for i in sentence:
        i = re.sub(r"[^\w\s]", '', i)
        i = i.split(" ")
        for y in i:
            if y in all_words.keys():
                all_words[y] += 1
            else:
                all_words[y] = 1
    words_list = sorted(all_words.keys())

    with open('word_sort.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        for i in range(len(all_words)):
            writer.writerow([words_list[i],all_words[words_list[i]]])

if __name__ == "__main__":
    main()

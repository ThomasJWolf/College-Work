# Thomas Wolf
# Word Frequencies
# 3/20/23

import os  # Imports the os and re module
import re


def main():
    if os.path.exists("text.txt"):  # Checks to see if text exists and appends it to sentence
        fp = open("text.txt", "r")
        sentence = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    all_words = {}  # Sets all_words to an empty dict
    for index in range(len(sentence)):  # Iterates over the length of sentence as index
        i = sentence[index]  # Sets i to sentence with the index of index
        i = re.sub(r"[^\w\s]", '', i)  # Removes all of the special characters
        i = i.split(" ")  # Splits up the string into a list based on the spaces
        for y in i:  # Iterates over i as y
            if y in all_words.keys():  # If y is in the keys of all_words
                all_words[y] += 1  # Adds 1 to the value
            else:  # Else
                all_words[y] = 1  # Creates a key value pair and sets it to 1

    words_list = sorted(all_words.keys())  # Makes a list of dict keys sorted

    for i in words_list:  # Iterates over words_list as i
        print("{}: {}".format(i,all_words[i]))  # Prints the key and then the value


if __name__ == "__main__":
    main()
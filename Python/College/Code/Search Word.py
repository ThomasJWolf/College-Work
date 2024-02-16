# Thomas Wolf
# Search Word
# 2/6/23

import os
import validate

def main():

    if os.path.exists("text.txt"):
        fp = open("text.txt", "r")
        sentence = fp.read().lower().splitlines()
        fp.close()
    else:
        print("error")

    word = validate.alpha_check("Please enter a search word\n:","Tag-Team Shit")

    total = 0
    amount = 0

    for i in sentence:
        if word in i:
            total+=1
        length = 1
        for index in i:
            if index == " ":
                length+=1
        amount+=length

    print('The word "{}" is in the list {} times\n'.format(word,total))
    print("The average number of words in the list are: {}".format(amount/len(sentence)))

if __name__ == "__main__":
    main()

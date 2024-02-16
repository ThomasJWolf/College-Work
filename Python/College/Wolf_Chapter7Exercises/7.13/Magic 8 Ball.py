# Thomas Wolf
# Magic 8 Ball
# 1/22/23

import os
import random
import validate

def main():
    eight_ball = []
    if os.path.exists("8_ball_responses.txt"):  # Imports the text file
        fp = open("8_ball_responses.txt", "r")
        eight_ball = fp.read().splitlines()  # Adds the lines in the file to eight_ball list
        fp.close()
    else:
        print("error")

    again = True
    while again == True:
        question = input("What is your question?\n: ")
        shake = random.randint(0, 11)
        print(eight_ball[shake])
        again = validate.yes("Would you like to go again? (Y/N)\n: ")


if __name__ == "__main__":
    main()

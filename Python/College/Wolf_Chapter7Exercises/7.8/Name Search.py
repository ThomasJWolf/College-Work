# Thomas Wolf
# Name Search
# 1/24/23

import os
import validate


def main():
    boy_names = []
    girl_names = []
    if os.path.exists("BoyNames.txt") and os.path.exists("GirlNames.txt"):  # Imports the text files
        fp = open("BoyNames.txt", "r")
        temp = fp.read().splitlines()  # Adds the lines in the file to temp then boy_names list
        boy_names = list(map(str.lower, temp))
        fp.close()
        fp = open("GirlNames.txt", "r")
        temp = fp.read().splitlines()  # Adds the lines in the file to temp then girl_names list
        girl_names = list(map(str.lower, temp))
        fp.close()
    else:
        print("error")

    gender = validate.int_range(1, 3, "What would you like to search?\n 1. Boys\n 2. Girls\n 3. Both\n : ",
                                "Please only enter 1-3\n")
    # Prompts the user for what gender name they want to check for

    if gender == 1:  # Calls the corresponding function based on gender
        boys(boy_names)
    elif gender == 2:
        girls(girl_names)
    else:
        boys(boy_names)
        girls(girl_names)


def boys(boy_names):
    # Gets the name the user wants to check and checks to see if it is in the list and prints it
    name = validate.alpha_check("What name do you want to check for in boys?\n: ", "Please only put letters\n")
    name = name.lower()
    if name in boy_names:
        print("{} is in the list".format(name))
    else:
        print("{} is not in the list".format(name))


def girls(girl_names):
    # Gets the name the user wants to check and checks to see if it is in the list and prints it
    name = validate.alpha_check("What name do you want to check for in girls?\n: ", "Please only put letters\n")
    name = name.lower()
    if name in girl_names:
        print("{} is in the list".format(name))
    else:
        print("{} is not in the list".format(name))

if __name__ == "__main__":
    main()

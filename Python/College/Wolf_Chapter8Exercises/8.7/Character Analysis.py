# Thomas Wolf
# 2/19/23
# Character Analysis

import os  # Import the os module

def main():
    if os.path.exists("text.txt"):  # Checks if the text file exists, and adds it to the list sentence
        fp = open("text.txt", "r")
        sentence = fp.read().splitlines()
        fp.close()
    else:
        print("error")

    # Sets upper, lower, digit, and space to 0
    upper = 0
    lower = 0
    digit = 0
    space = 0

    for i in sentence:  # Iterates over the length of sentence as i
        for y in i:  # Iterates over the length of i as y
            if y.isupper():  # If y is uppercase
                upper += 1  # Add 1 to upper
            if y.islower():  # If y is lowercase
                lower += 1  # Add 1 to lower
            if y.isascii():  # If y is a digit
                digit += 1  # Add 1 to digit
            if y.isspace():  # If y is a whitespace
                space += 1  # Add 1 to space

    # Outputs upper, lower, digit, and space
    print("There are {} upper-case letters".format(upper))
    print("There are {} lower-case letters". format(lower))
    print("There are {} digits". format(digit))
    print("There are {} spaces".format(space))


if __name__ == "__main__":
    main()

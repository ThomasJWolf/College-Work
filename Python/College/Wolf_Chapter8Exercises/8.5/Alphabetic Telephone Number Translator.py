# Thomas Wolf
# 2/19/28
# Alphabetic Telephone Number Translator

import validate  # Imports my validate function

# Creates a global nested list called NUMBERS to store the conversion data
NUMBERS = [[[0], 1], [["A", "B", "C"], 2], [["D", "E", "F"], 3], [["G", "H", "I"], 4], [["J", "K", "L"], 5], [["M", "N", "O"], 6], [["P", "Q", "R", "S"], 7], [["T", "U", "V"], 8], [["W", "X", "Y", "Z"], 9]]


def main():
    while True:  # User enters data and the program validates that the phone number is only letters, numbers, or dashes and the input is 12 characters long
        phone = validate.all_num_exceptions(["-"], "Please enter your phone number (XXX-XXX-XXXX)\n:", "Please enter as shown\n").upper()
        if len(phone) == 12:
            break

    translate = ""  # Sets translate to an empty string
    for i in range(len(phone)):  # Iterates over the length of phone as i
        for y in range(len(NUMBERS)):  # Iterates over the length of NUMBERS as y
            for z in range(len(NUMBERS[y][0])):  # Iterates over the length of the index of 0 in y in NUMBERS as z
                if phone[i] == NUMBERS[y][0][z]:  # If the index of i in phone is equal to the index of z in 0 in y in NUMBERS
                    temp = NUMBERS[y][1]  # Sets temp to the index of 1 in y in NUMBERS
                    translate += str(temp)  # Adds the value in temp as a string to translate
        if phone[i].isnumeric():  # If the index of i in phone is a number
            translate += str(phone[i])  # Adds the string value of the index i in phone as a string to translate
        elif phone[i] == "-":  # Else if the index of i in phone is a dash
            translate += phone[i]  # Adds the value of the index i in phone as a string to translate

    print("\nThe phone number is: {}".format(translate))  # Outputs the translated phone number


if __name__ == "__main__":
    main()

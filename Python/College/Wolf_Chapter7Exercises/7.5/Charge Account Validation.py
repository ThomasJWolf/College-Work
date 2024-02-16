# Thomas Wolf
# Charge Account Validation
# 1/19/23

import os
import validate

def main():
    account_number = []
    if os.path.exists("charge_accounts.txt"):  # Imports the text file
        fp = open("charge_accounts.txt", "r")
        account_number = fp.read().splitlines()  # Adds the lines in the file to account_number list
        fp.close()
    else:
        print("error")

    numbers = validate.int_length(7,"Enter the numbers\n:", "Please enter 7 numbers\n")  # Gets user input and validates it is a digit number
    numbers = str(numbers)

    if numbers in account_number: # Checks to see if the numbers are in the list
        print("Your number is in the registry")
    else:
        print("Your number is not in the registry")

if __name__ == "__main__":
    main()


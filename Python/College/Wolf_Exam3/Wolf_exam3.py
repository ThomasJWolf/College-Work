# Thomas Wolf
# Numbers and Names
# 3/22/23

from tabulate import tabulate  # Imports the tabulates and pickle modules and my validate function
import validate


def main():
    global numbers  # Sets numbers to a global variable
    numbers = {274939: "Computer", 293057: "Phone", 392048: "Tablet", 385939: "Watch"}

    choice = repeat()  # Calls repeat and sets the return to choice
    while True:  # While the loop is true
        if choice == 1:  # If choice is equal to 1
            add_numbers()  # Calls add_numbers
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 2:  # If choice is equal to 2
            search_numbers()  # Calls search_numbers
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 3:  # If choice is equal to 3
            view_numbers()  # Calls view_numbers
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 4:  # If choice is equal to 4
            delete_numbers()  # Calls delete_numbers
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 5:  # If choice is equal to 5
            update_numbers()  # Calls update_numbers
            choice = repeat()  # Calls repeat and sets the return to choice
        else:  # If else
            break  # Breaks the loop


def repeat():
    choice = validate.int_range(1, 6, "\nWhat would you like to do?\n 1. Add to product\n 2. Search product\n 3. View all products\n 4. Delete product\n 5. Change product\n 6. Quit\n:", "Please only enter 1 though 6\n")  # Asks the user what they would like to do, only accepting inputs 1 though 5
    return choice  # Returns choice


def add_numbers():
    number = validate.pos_int("What Number would you like to add?\n:", "Please only enter positive numbers")  # Sets number to an number the user enters using validate, only takes positive numbers
    name = validate.alpha_check_exceptions([" "], "Enter the name\n:", "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
    numbers[number] = name  # Adds number and name to numbers as a key value pair


def search_numbers():
    number = validate.pos_int("What Number would you like to search?\n:", "Please only enter positive numbers")  # Sets number to an number the user enters using validate, only takes positive numbers
    if number in numbers:  # If name is in numbers
        table = [[str(number), numbers[number]]]  # Sets table to the names of numbers
        print(tabulate(table, tablefmt='fancy_grid'))  # Prints the searched values as a table
    else:  # If else
        print("That product is not in the database")  # Prints that the product is not in the database


def view_numbers():
    table = [*numbers.items()]  # Sets table to the names of numbers and splats them
    print(tabulate(table, tablefmt='fancy_grid', headers=["Numbers", "Names"]))  # Prints the values with a header in a table


def delete_numbers():
    number = validate.pos_int("What Number would you like to remove?\n:", "Please only enter positive numbers")  # Sets number to an number the user enters using validate, only takes positive numbers
    if number in numbers:  # If number is in numbers
        del numbers[number]  # Deletes the key value pair of number in numbers
    else:  # If else
        print("That product is not in the database")  # Prints that the product is not in the database


def update_numbers():
    number = validate.pos_int("What Number would you like to update?\n:", "Please only enter positive numbers")  # Sets number to an number the user enters using validate, only takes positive numbers
    if number in numbers:  # If number is in numbers
        name = validate.alpha_check_exceptions([" "], "Enter the name\n:", "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
        numbers[number] = name  # Updates the value in the key value pair of number in numbers
    else:  # If else
        print("That product is not in the database")  # Prints that the product is not in the database


if __name__ == "__main__":
    main()

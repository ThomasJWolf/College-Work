# Thomas Wolf
# Name and Email Addresses
# 3/20/23

from tabulate import tabulate  # Imports the tabulates and pickle modules and my validate function
import pickle
import validate
import os


def main():
    global emails  # Sets emails to a global variable
    if os.path.exists("emails.dat"):  # Checks to see if emails.dat exists and appends it to emails
        fp = open("emails.dat", "rb")
        emails = pickle.load(fp)
        fp.close()

    choice = repeat()  # Calls repeat and sets the return to choice
    while True:  # While the loop is true
        if choice == 1:  # If choice is equal to 1
            view_emails()  # Calls view_emails
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 2:  # If choice is equal to 2
            add_emails()  # Calls add_emails
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 3:  # If choice is equal to 3
            update_emails()  # Calls update_emails
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 4:  # If choice is equal to 4
            delete_emails()  # Calls delete_emails
            choice = repeat()  # Calls repeat and sets the return to choice
        else:  # If else
            print(emails)
            fp = open("emails.dat", "wb")  # Writes the dict emails to a file called emails.dat as binary
            pickle.dump(emails, fp)
            fp.close()
            break  # Breaks the loop


def repeat():
    choice = validate.int_range(1, 5, "\nWhat would you like to do?\n 1. View Emails\n 2. Add to Emails\n 3. Change Emails\n 4. Delete Emails\n 5. Quit\n:", "Please only enter 1 though 5\n")  # Asks the user what they would like to do, only accepting inputs 1 though 5
    return choice  # Returns choice


def view_emails():
    print()
    table = [*emails.items()]  # Sets table to the names of emails and splats them
    print(tabulate(table, tablefmt='fancy_grid',
                   headers=["Names", "Emails"]))  # Prints the values with a header in a table


def add_emails():
    name = validate.alpha_check_exceptions([" "], "Enter the name\n:",
                                           "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
    email = validate.alpha_check_exceptions([".", "@"], "What Email would you like to add?\n:", "Please only enter letters, ., and @")  # Sets email to an email the user enters using validate, only takes letters, period, and @
    emails[name] = email  # Adds name and email to emails as a key value pair


def update_emails():
    name = validate.alpha_check_exceptions([" "], "Enter the name\n:", "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
    if name in emails:  # If name is in emails
        email = validate.alpha_check_exceptions([".", "@"], "What Email would you like to change?\n:", "Please only enter letters, ., and @")  # Sets email to an email the user enters using validate, only takes letters, period, and @
        emails[name] = email  # Updates the value in the key value pair of name in emails
    else:  # If else
        print("That email is not in the database")  # Prints that the name is not in the database


def delete_emails():
    name = validate.alpha_check_exceptions([" "], "Enter the name\n:", "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
    if name in emails:  # If name is in emails
        del emails[name]  # Deletes the key value pair of name in emails
    else:  # If else
        print("That email is not in the database")  # Prints that the name is not in the database


if __name__ == "__main__":
    main()

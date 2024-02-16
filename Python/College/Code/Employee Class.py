# Thomas Wolf
# Employee Class
# 3/29/23

import validate_no_input as validate2
from tabulate import tabulate  # Imports the tabulates and pickle modules and my validate function
import pickle
import validate
import os

class Employee:
    __name = ""
    __id = -1
    __dept = ""
    __title = ""

    def __init__(self, name, id, dept, title):
        self.set_name(name)
        self.set_id(id)
        self.set_dept(dept)
        self.set_title(title)

    def __str__(self):
        return "{}: {} - {}, {} ".format(
            self.__name, self.__id, self.__dept, self.__title
        )

    def set_name(self, name):
        name = validate2.alpha_check_exceptions([" "], name, "stupid")
        self.__name = name

    def set_id(self, id):
        id = validate2.pos_int(id, "stupid")
        self.__id = id

    def set_dept(self, dept):
        dept = validate2.alpha_check_exceptions([" "], dept, "stupid")
        self.__dept = dept

    def set_title(self, title):
        title = validate2.alpha_check_exceptions([" "], title, "stupid")
        self.__title = title

    def add_id(self, ids):
        ids_dict = Employee
        id = validate.int_range(0, 10000, "Enter the new employe ID", "how could you do this")
        if id not in ids:
            name = validate.alpha_check_exceptions([" "], "Enter the new name", "no")
            dept = validate.alpha_check_exceptions([" ", "-"], "Enter dept name", "no")
            title = validate.alpha_check_exceptions([" ", "-"], "Enter title name", "no")

            ids_dict[id].set_id()
            ids_dict[id].set_name()
            ids_dict[id].set_dept()
            ids_dict[id].set_title()

            ids[id] = ids_dict
            print(ids)

        else:
            print("ID in system already")

    def update_id(self, ids):
        id = validate.int_range(0, 10000, "Enter the new employe ID", "how could you do this")
        if id not in ids:
            name = validate.alpha_check_exceptions([" "], "Enter the new name", "no")
            dept = validate.alpha_check_exceptions([" ", "-"], "Enter dept name", "no")
            title = validate.alpha_check_exceptions([" ", "-"], "Enter title name", "no")
        else:
            print("ID in system already")

    def get_name(self):
        return self.__name

    def get_id(self):
        return self.__id

    def get_dept(self):
        return self.__dept

    def get_title(self):
        return self.__title

def main():
    global ids  # Sets ids to a global variable
    # ids = {382837: Employee("Thomas", 382837, "Programmer", "God")}
    if os.path.exists("ids.dat"):  # Checks to see if ids.dat exists and appends it to ids
        fp = open("ids.dat", "rb")
        ids = pickle.load(fp)
        fp.close()
    else:
        ids

    choice = repeat()  # Calls repeat and sets the return to choice
    while True:  # While the loop is true
        if choice == 1:  # If choice is equal to 1
            lookup_ids()  # Calls lookup_ids
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 2:  # If choice is equal to 2
            add_ids()  # Calls add_ids
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 3:  # If choice is equal to 3
            update_ids()  # Calls update_ids
            choice = repeat()  # Calls repeat and sets the return to choice
        elif choice == 4:  # If choice is equal to 4
            delete_ids()  # Calls delete_ids
            choice = repeat()  # Calls repeat and sets the return to choice
        else:  # If else
            fp = open("ids.dat", "wb")  # Writes the dict ids to a file called ids.dat as binary
            pickle.dump(ids, fp)
            fp.close()
            break  # Breaks the loop


def repeat():
    choice = validate.int_range(1, 5, "\nWhat would you like to do?\n 1. Lookup Ids\n 2. Add to Ids\n 3. Change Ids\n 4. Delete Ids\n 5. Quit\n:", "Please only enter 1 though 5\n")  # Asks the user what they would like to do, only accepting inputs 1 though 5
    return choice  # Returns choice


def lookup_ids():
    if ids == "":
        print("There is nothing in the dictonary")
    else:
        id = validate.pos_int("What ID do you want to lookup?\n:", "Only positive numbers")
        if id in ids:
            print(ids[id])
        else:
            print("The id is not here")


def add_ids():

    id = validate.pos_int("Enter the id\n:","Please only enter numbers")
    ids[id] = Employee.set_id()
    print(ids[id])


def update_ids():
    name = validate.alpha_check_exceptions([" "], "Enter the name\n:", "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
    if name in ids:  # If name is in ids
        id = validate.alpha_check_exceptions([".", "@"], "What Email would you like to change?\n:", "Please only enter letters, ., and @")  # Sets id to an id the user enters using validate, only takes letters, period, and @
        ids[name] = id  # Updates the value in the key value pair of name in ids
    else:  # If else
        print("That id is not in the database")  # Prints that the name is not in the database


def delete_ids():
    name = validate.alpha_check_exceptions([" "], "Enter the name\n:", "Please only enter letters and spaces")  # Sets name to a name the user enters using validate, only takes letters and spaces
    if name in ids:  # If name is in ids
        del ids[name]  # Deletes the key value pair of name in ids
    else:  # If else
        print("That id is not in the database")  # Prints that the name is not in the database



if __name__ == "__main__":
    main()
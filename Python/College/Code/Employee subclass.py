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
    __emp_number = -1

    def __init__(self, name, emp_number):
        self.set_name(name)
        self.set_id(emp_number)

    def __str__(self):
        return "{}: {} ".format(
            self.__name, self.__emp_number
        )

    def set_name(self, name):
        name = validate2.alpha_check_exceptions([" "], name, "stupid")
        self.__name = name

    def set_emp_number(self, emp_number):
        emp_number = validate2.pos_int(emp_number, "stupid")
        self.__emp_number = emp_number

    def get_id(self):
        return self.__id

    def get_emp_number(self):
        return self.__emp_number

class ProductionWorker(Employee):
    def __init__(self, name, emp_number, shift, hourly_pay):
        self.set_name(name)
        self.set_id(emp_number)


def main():
    pass

if __name__ == "__main__":
    main()
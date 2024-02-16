# Thomas Wolf
# Class Info
# 3/27/23

import validate


def main():
    p1 = Info("Thomas", "nope", 18, 1234567890)
    p2 = Info("Gavin", "prick", 69, 5555555555)
    p3 = Info("Satan", "Hell", 999, 1234567890)
    user = validate.int_range(1, 4, "What user are you?\n1. P1\n2. P2\n3. P3\n4. Quit\n: ", "stupid")
    if user == 1:
        print(*p1.get_info())
        user = validate.int_range(1, 4, "What user are you?\n1. P1\n2. P2\n3. P3\n4. Quit\n: ", "stupid")
    elif user == 2:
        print(*p2.get_info())
        p2.set_address("IsAPrick")
        user = validate.int_range(1, 4, "What user are you?\n1. P1\n2. P2\n3. P3\n4. Quit\n: ", "stupid")
    elif user == 3:
        print(*p3.get_info())
        user = validate.int_range(1, 4, "What user are you?\n1. P1\n2. P2\n3. P3\n4. Quit\n: ", "stupid")


class Info:
    name = ""
    address = ""
    age = 0
    phone_number = ""

    def __init__(self, name, address, age, phone_number):
        self.__name = name
        self.__address = address
        self.__age = age
        self.__phone_number = phone_number

    def set_name(self, name):
        name = validate.alpha_check_exceptions([" ", "Please enter the name to change\n:", "stupid"])
        self.__name = name

    def set_address(self, address):
        address = validate.alpha_check_exceptions([" "], "Please enter the name to change\n:", "stupid")
        self.__address = address

    def set_age(self, age):
        age = validate.int_range(0, 200, "Please enter the name to change\n:", "stupid")
        self.__age = age

    def set_phone_number(self, phone_number):
        phone_number = validate.int_length(10, "Please enter the name to change\n:", "stupid")
        self.__phone_number = phone_number

    def get_info(self):
        return self.__name, self.__address, self.__age, self.__phone_number




if __name__ == "__main__":
    main()

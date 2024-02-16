# Thomas Wolf
# Patient Charges
# 4/16/23

import validate_no_input as validate
import datetime

def main():
    patient = Patient(["Walter", "Hartwell", "White"], ["308 Negra Arroyo Lane", "Albuquerque", "New Mexico", 87104], 5051930809, ["Jesse Pinkman", 5051483369])
    procedure_1 = Procedure("Physical Exam", datetime.date.today(), "Dr. Irvine", 250.00)
    procedure_2 = Procedure("X-ray", datetime.date.today(), "Dr. Jamison", 500.00)
    procedure_3 = Procedure("Blood Test", datetime.date.today(), "Dr. Smith", 200.00)
    total = procedure_1.get_price() + procedure_2.get_price() + procedure_3.get_price()
    print("{}{}{}{}\nTotal Price: {}".format(patient.__str__(), procedure_1.__str__(), procedure_2.__str__(), procedure_3.__str__(), total))


class Patient:  # Creates RetailItem class

    """
    Defines Patient

    Initialisations:
        name[first_name, middle_name, last_name],
        address[address, city, state, zip_code],
        phone,
        emergency[name, phone]

    Setters:
        name[first_name, middle_name, last_name],
        address[address, city, state, zip_code],
        phone,
        emergency[name, phone]

    Getters:
        name[first_name, middle_name, last_name],
        address[address, city, state, zip_code],
        phone,
        emergency[name, phone]

    Utility:
        __str__ prints:
            name[first_name, middle_name, last_name],
            address[address, city, state, zip_code],
            phone,
            emergency[name, phone]
    """

    ###################
    # Initialisations #
    ###################

    def __init__(self, name, address, phone, emergency):
        self.__set_name(name)
        self.__set_address(address)
        self.__set_phone(phone)
        self.__set_emergency(emergency)

    def __str__(self):
        # Prints name, address, phone, and emergency
        try:
            return "Name: {} {} {}\nAddress: {}\nCity: {}\nState: {}\nZip Code: {}\nPhone Number: {}\nEmergency Name: {}\nEmergency Phone: {}\n".format(
                self.__name[0],
                self.__name[1],
                self.__name[2],
                self.__address[0],
                self.__address[1],
                self.__address[2],
                self.__address[3],
                self.__phone,
                self.__emergency[0],
                self.__emergency[1]
            )
        except:
            return "Data was inputted incorrectly"


    ###########
    # Setters #
    ###########

    def __set_name(self, name):
        try:
            # Validates that first, middle, and last name are only letters
            if not validate.alpha_check(name[0]):
                name[0] = "X"
            if not validate.alpha_check(name[1]):
                name[1] = "X"
            if not validate.alpha_check(name[2]):
                name[2] = "X"
            self.__name = [name[0], name[1], name[2]]
        except:
            pass


    def __set_address(self, address):
        try:
            # Takes only letters, numbers, spaces, '.', ',', and '-'
            if not validate.all_num_exceptions([" ", ",", ".", "-"], address[0]):
                address[0] = "X"
            # Takes only letters, spaces, and -
            if not validate.alpha_check_exceptions([" ", "-"], address[1]):
                address[1] = "X"
            # Takes only letters and spaces
            if not validate.alpha_check_exceptions([" "], address[2]):
                address[2] = "X"
            # Takes only a 5-digit number
            if not validate.int_range(10000, 99999, address[3]):
                address[3] = "X"
            self.__address = [address[0], address[1], address[2], address[3]]
        except:
            pass

    def __set_phone(self, phone):
        try:
            # Only takes a 10-digit number
            if validate.int_range(1000000000, 9999999999, phone):
                self.__phone = phone
        except:
            pass

    def __set_emergency(self, emergency):
        try:
            # Takes only letters and spaces
            if not validate.alpha_check_exceptions([" "], emergency[0]):
                emergency[0] = "X"
            # Only takes a 10-digit number
            if not validate.int_range(1000000000, 9999999999, emergency[1]):
                emergency[1] = "X"
            self.__emergency = [emergency[0], emergency[1]]
        except:
            pass

    ###########
    # Getters #
    ###########

    def get_name(self):
        return self.__name[0], self.__name[1], self.__name[2]

    def get_address(self):
        return self.__address[0], self.__address[1], self.__address[2], self.__address[3]

    def get_phone(self):
        return self.__phone

    def get_emergency(self):
        return self.__emergency

class Procedure:

    """
    Defines Procedure

    Initialisations:
        procedure,
        date,
        practitioner,
        price

    Setters:
        procedure,
        date,
        practitioner,
        price

    Getters:
        procedure,
        date,
        practitioner,
        price

    Utility:
        __str__ prints:
            procedure,
            date,
            practitioner,
            price
    """

    ###################
    # Initialisations #
    ###################

    def __init__(self, procedure, date, practitioner, price):
        self.__set_procedure(procedure)
        self.__set_date(date)
        self.__set_practitioner(practitioner)
        self.__set_price(price)

    def __str__(self):
        # Prints procedure, date, practitioner, and price
        try:
            return "\nProcedure: {}\nDate of Procedure: {}\nPractitioner: {}\nPrice: {}\n".format(
                self.__procedure,
                self.__date,
                self.__practitioner,
                self.__price,
            )
        except:
            return "Data was inputted incorrectly"


    ###########
    # Setters #
    ###########

    def __set_procedure(self, procedure):
        try:
            # Only takes letters, spaces, and dashes
            if validate.alpha_check_exceptions([" ", "-"], procedure):
                self.__procedure = procedure
        except:
            pass

    def __set_date(self, date):
        try:
            # Takes only numbers and /
            date = str(date)
            if validate.digits_exceptions(["-"], date):
                self.__date = date
        except:
            pass

    def __set_practitioner(self, practitioner):
        try:
            # Only takes letters, spaces and '.'
            if validate.alpha_check_exceptions([" ", "."], practitioner):
                self.__practitioner = practitioner
        except:
            pass

    def __set_price(self, price):
        try:
            # Takes only positive floats
            if validate.pos_float(price):
                self.__price = price
        except:
            pass

    ###########
    # Getters #
    ###########

    def get_procedure(self):
        return self.__procedure

    def get_date(self):
        return self.__date

    def get_practitioner(self):
        return self.__practitioner

    def get_price(self):
        return self.__price

if __name__ == "__main__":
    main()
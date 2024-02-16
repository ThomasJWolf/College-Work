# Thomas Wolf
# RetailItem Class
# 4/16/23

import validate_no_input as validate  # Imports file validate_no_input as validate


def main():
    i1 = RetailItem("Jacket", 12, 59.95)  # Sets i1, i2, and i3 to a RetailItem instance
    i2 = RetailItem("Designer Jeans", 40, 34.95)
    i3 = RetailItem("Fulp Shirt", 20, 24.95)
    print("{}\n{}\n{}".format(i1.__str__(), i2.__str__(), i3.__str__()))  # Prints i1, i2, and i3


class RetailItem:  # Creates RetailItem class
    """
    Defines RetailItem

    Initialisations:
        description,
        inventory,
        price

    Setters:
        description,
        inventory,
        price

    Getters:
        description,
        inventory,
        price

    Utility:
        __str__ prints:
            description,
            inventory,
            price
    """

    ###################
    # Initialisations #
    ###################

    def __init__(self, description, inventory, price):
        self.__set_description(description)
        self.__set_inventory(inventory)
        self.__set_price(price)

    def __str__(self):
        try:
            # Prints description, inventory, and price
            return "{} {} {}".format(
                self.__description,
                self.__inventory,
                self.__price,
            )
        except:
            return "Data was inputted incorrectly"

    ###########
    # Setters #
    ###########

    def __set_description(self, description):
        # Validates that description is only letters or spaces
        if validate.alpha_check_exceptions([" "], description):
            self.__description = description

    def __set_inventory(self, inventory):
        # Validates that description is only positive integers
        if validate.pos_int(inventory):
            self.__inventory = inventory

    def __set_price(self, price):
        # Validates that description is only positive floats
        if validate.pos_float(price):
            self.__price = price

    ###########
    # Getters #
    ###########

    def get_description(self):
        return self.__description

    def get_inventory(self):
        return self.__inventory

    def get_price(self):
        return self.__price


if __name__ == "__main__":
    main()

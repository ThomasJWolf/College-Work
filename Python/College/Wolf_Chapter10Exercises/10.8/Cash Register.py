# Thomas Wolf
# Cash Register
# 4/16/22

import validate
import retailItem_Class


def main():
    # Creates a CashRegister instance called bag
    bag = CashRegister()
    while True:
        # Menu
        choice = validate.int_range(1, 5, "\n1. Add item to bag\n2. Get the total\n3. Show all items\n4. Empty bag\n5. Quit\n:", "Number not in range, please only 1-5 ")
        if choice == 1:
            bag.purchase_item()
        elif choice == 2:
            print("Total price:", bag.get_total())
        elif choice == 3:
            bag.show_items()
        elif choice == 4:
            bag.clear()
        else:
            pass


class CashRegister:  # Creates CashRegister class
    """
    Defines RetailItem

    Initialisations:
        bag

    Getters:
        get_total

    Utility:
        purchase_item,
        show_items,
        clear
    """

    ###################
    # Initialisations #
    ###################

    def __init__(self):

        self.__bag = []

    ###########
    # Getters #
    ###########

    def get_total(self):
        total = 0
        for item in self.__bag:
            total += item.get_price()
        return total

    ############
    # Utilitys #
    ############

    def purchase_item(self):
        # Validates that description is only letters or spaces
        description = validate.alpha_check("Enter the item description\n:", "Please only enter letters or spaces")
        inventory = validate.pos_int("Enter inventory number\n:", "Please enter only positive integers")
        price = validate.pos_float("Please enter the item price\n:", "Please enter only positive floats")
        self.__bag.append(retailItem_Class.RetailItem(description, inventory, price))

    def show_items(self):
        # Prints the info
        print("Item, Number, Price")
        for item in self.__bag:
            item = str(item)
            item = item.split()
            for i in item:
                print(i, end=", ")

    def clear(self):
        # Clears all items from the list
        self.__bag.clear()


if __name__ == "__main__":
    main()

# Thomas Wolf
# 10/19/22
# Pennies for Pay

def main():
    money = 1
    # validates the user input
    valid = False
    days = 0
    while not (valid):
        days = input("How many days")
        # Check to make sure input is numeric and > 0
        if days.isnumeric():
            if int(days) > 0:
                days = int(days)
                valid = True
            else:
                print("Please enter a valid number\n")
        else:
            print("Invalid Data Type, be better\n")
    # Print the headers
    print("Days\t Money")
    for i in range(days):
        # Sets a variable to money set to change format
        money_divided = money / 100
        # Makes money_str a string of money_divided
        money_str = str(money_divided)
        # Adds a $ in front of money_str
        money_str = "$" + money_str
        # Prints the day plus the money for that day
        print(i + 1, "\t\t", money_str)
        # Doubles the money
        money *= 2


if __name__ == "__main__":
    main()

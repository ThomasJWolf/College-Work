# Thomas Wolf
# Monthly Sales Tax
# 11/16/22

# imports needed functions
import validate

# sets global variables
C_TAX = 0.025
S_TAX = 0.05


def main():
    # uses validate function to validate price
    price = validate.pos_float("What is the price of the item: ", "Please enter a positive number")
    # calls county_tax and state_tax function
    c_tax = county_tax(price)
    s_tax = state_tax(price)
    # takes the tax and multiplies it by 100, so it rounds up correctly and then divides it by 100
    c_tax = ((c_tax * 100).__ceil__()) / 100
    s_tax = ((s_tax * 100).__ceil__()) / 100
    # calculates total tax
    total = c_tax + s_tax
    # prints the county tax, state tax, and the total of both
    print("The county tax is ${}".format(c_tax))
    print("The state tax is ${}".format(s_tax))
    print("The total tax is ${0:.2f}".format(total))


# calculates the county tax
def county_tax(price):
    c_tax = price * C_TAX
    return c_tax


# calculates the state tax
def state_tax(price):
    s_tax = price * S_TAX
    return s_tax


if __name__ == "__main__":
    main()

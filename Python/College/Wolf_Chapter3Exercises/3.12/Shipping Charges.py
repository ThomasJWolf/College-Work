# Thomas Wolf
# 9/28/22
# Calculate shipping charges

# Defines constants
RATE_PER_POUND = [1.50, 3.00, 4.00, 4.75]
POUND_PER_RATE = [2, 6, 10]


def main():
    # Gets weight
    weight = float(input("How much does the package weigh?"))
    rate_per_pound = 0
    # Finds what the rate per pound should be based on pound per rate
    if weight <= POUND_PER_RATE[0]:
        rate_per_pound = 0
    elif weight > POUND_PER_RATE[0] and weight <= POUND_PER_RATE[1]:
        rate_per_pound = 1
    elif weight > POUND_PER_RATE[1] and weight <= POUND_PER_RATE[2]:
        rate_per_pound = 2
    elif weight > POUND_PER_RATE[2]:
        rate_per_pound = 3
    else:
        print("Please input a valid number")
    # Gets the total based on the key value in the list and display result
    total = weight * RATE_PER_POUND[rate_per_pound]
    print("Your total for a package that is {} pounds is {}".format(weight, total))


if __name__ == "__main__":
    main()

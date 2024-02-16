# Thomas Wolf
# Property Tax
# 11/14/22

# imports needed functions
import validate

def main():
    # uses validate function to validate value
    value = validate.pos_float("Please enter your property value: ","Please enter a positive number")
    # calculates the property assessment value
    assessment_value = value * .6
    # makes a counter to loop over every $100
    counter = assessment_value / 100
    counter = int(counter)
    property_tax = 0
    # adds 72 cents to property tax for the value of counter, witch is every 100 in assessment_value
    for i in range(counter):
        property_tax += .72
    # prints assessment value and property tax rounded to .00
    print("The assessment value is ${:.2f}".format(assessment_value))
    print("The property tax is ${:.2f}".format(property_tax))

if __name__ == "__main__":
    main()

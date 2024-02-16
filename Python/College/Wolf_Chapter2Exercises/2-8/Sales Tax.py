# Thomas Wolf
# 9/7/22
# Tip, Tax, and Total



sales_tax= 7
def main(sales_tax):
    item=float(input("What is the price if your food?\n"))  # asks the user what the price of the food is
    sales_calc=item/(100/sales_tax)
    print("Your total with no tax is", (format(item, '.2f')))  # displays the item with no tax
    print("Your tax is", (format(sales_calc, '.2f')))  # displays the item with the state tax
    print("Your total with tax is", (format(sales_calc+item, '.2f')))  # displays the item with the county tax
    tip=float(input("\nWhat percent tip would you like to give? (only numbers)\n"))
    tip_calc=(sales_calc+item)/(100/tip)
    print("Your grand total with tax and tip is", (format(tip_calc+sales_calc+item, '.2f')))  # displays the item with the grand total

if __name__=='__main__':
    main(sales_tax)
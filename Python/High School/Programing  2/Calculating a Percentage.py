#Calculating a Percentage
#Electronic receipting for customer
#Thomas Wolf
#8/28/19
#Sources:NONE

print("Press enter to use the program")
begin=input()
while begin==begin:
    item_number=int(input("Enter number of items:"))
    loop_num=1
    subtotal=0
    while loop_num<=item_number:
        item_price=float(input("Enter price of item:"))
        sales_tax=item_price*.20
        sale_price=item_price-sales_tax
        print("Sale price: ",format(sale_price,'.2f'),sep='$')
        subtotal=subtotal+sale_price
        loop_num=loop_num+1

    print("***** SALES RECEIPT *****")
    tax=subtotal*.08
    grand_total=subtotal+tax
    print("Subtotal: ",format(subtotal,'.2f'),sep='$')
    print("The tax is ",format(tax,'.2f'),sep='$')
    print("The final total is ",format(grand_total,'.2f'),sep='$')

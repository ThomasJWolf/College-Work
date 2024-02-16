#Thomas Wolf
#10/18/2018
#Total Purchase

item1=float(input("How much is your first item?"))#askes the price of the first item
item2=float(input("How much is your second item?"))#askes the price of the second item
item3=float(input("How much is your third item?"))#askes the price of the third item
item4=float(input("How much is your forth item?"))#askes the price of the forth item
item5=float(input("How much is your fifth item?"))#askes the price of the fifth item
TotalNoTax=float(item1+item2+item3+item4+item5)#adds the prices of all 5 items
TotalTax=float(TotalNoTax/0.7)#divides the prices of all the items by 0.7 and the 0.7 is the tax
print("Your total without tax is",(format(TotalNoTax,'.2f')))#displays the total without tax
print("Your total is ",(format(TotalTax,'.2f')))#displays the total with tax

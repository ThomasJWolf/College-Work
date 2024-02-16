#Thomas Wolf
#10/19/2018
#Sales Tax

item=float(input("What is the price if your item"))#askes the user what the price of the item is
state_tax1=(item*0.05)#findes the state tax
county_tax1=(item*0.025)#findes the county tax
total_tax1=(item*0.075)#findes the total tax
state_tax2=(item+state_tax1)#adds the state tax to the item
county_tax2=(item+county_tax1)#adds the county tax to the item
total_tax2=(item+total_tax1)#adds the total tax to the item
print("Your total with no tax is",(format(item,'.2f')))#displays the item with no tax
print("Your total with state tax is",(format(state_tax2,'.2f')))#displays the item with the state tax
print("Your total with county tax is",(format(county_tax2,'.2f')))#displays the item with the county tax
print("Your total with all taxes is",(format(total_tax2,'.2f')))#displays the item with the total tax

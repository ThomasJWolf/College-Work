#Enrichment Program: Total Sales
#Use a loop to calculate the total sales for the week and display the result.
#Thomas Wolf
#9/9/19
#Sorces: NONE

sales_list=[1550.35, 2500.48, 96.78, 15.25]
total=0
for i in sales_list:#i is every item in the list
    total=total+i
print('Total Sales:',total,sep='$')

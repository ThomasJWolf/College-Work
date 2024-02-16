#Shipping Prices
#this program will determine the shipping prices for a given items weight
#Thomas Wolf
#3/19/2021

items=int(input("Enter the number of items"))
total=0
for i in range(items):
    price=0
    while price==0:
        #collecting data
        ship=input("Hello, what shipping would you like? Standard (S) or Express (E)?")
        weight=float(input("What is the weight of the package in pounds?"))

        #standard or express
        if ship=="S":#or if ship=="S" or ship=="s"
            if weight<=4:#determines the cost per weight
                price=weight*1.05
            elif weight>4 and weight<=8:
                price=weight*0.95
            elif weight>8 and weight<=15:
                price=weight*0.85
            elif weight>15:
                price=weight*0.80
            else:
                print("There was an error, please try again")
m
        elif ship=="s":
            if weight<=4:
                price=weight*1.05
            elif weight>4 and weight<=8:
                price=weight*0.95
            elif weight>8 and weight<=15:
                price=weight*0.85
            elif weight>15:
                price=weight*0.80
            else:
                print("There was an error, please try again")
                
        elif ship=="E":
            if weight<=2:
                price=weight*3.25
            elif weight>2 and weight<=5:
                price=weight*2.95
            elif weight>5 and weight<=10:
                price=weight*2.75
            elif weight>10:
                price=weight*2.55
            else:
                print("There was an error, please try again")

        elif ship=="e":
            if weight<=2:
                price=weight*3.25
            elif weight>2 and weight<=5:
                price=weight*2.95
            elif weight>5 and weight<=10:
                price=weight*2.75
            elif weight>10:
                price=weight*2.55
            else:
                print("There was an error, please try again")
                
        else:
            print("You have entered an invalid shipping option, please only use S or E")
    print("Your shipping price is",price)#format.     format(cost,'2f'))
    total+=price
print("Total is",total)

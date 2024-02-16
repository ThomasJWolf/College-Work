def main():
    ship=input("Do you need to ship a package? 'Y' or 'N'")
    while ship=="Y" or ship=="y":
        ship_type=input("Enter 'S' for Standard Shipping, Enter ' E' for Express Shipping:")
        weight=float(input("Enter the weight for the package to be shipped:"))
        if ship_type=="S" or ship_type=="s":
            total=standard_ship(weight)
        elif ship_type=="E" or ship_type=="e":
            total=express_ship(weight)
        print("Total Shipping Cost:",total)
        ship=input("Do you need to ship another package? 'Y' or 'N'")
    
def standard_ship(weight):
    total=0
    if weight<=4:
        rate=1.05
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    elif weight>4 and weight<=8:
        rate=.95
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    elif weight>8 and weight<=15:
        rate=.85
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    else:
        rate=.80
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    total+=cost
    return total

def express_ship(weight):
    total=0
    if weight<=2:
        rate=3.25
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    elif weight>2 and weight<=5:
        rate=2.95
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    elif weight>5 and weight<=10:
        rate=2.75
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    else:
        rate=2.55
        cost=weight*rate
        print("Cost to Ship:",format(cost,'.2f'))
    total+=cost
    return total

main()

        

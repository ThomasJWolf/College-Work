#ThomasWolf
#1/18/2019
#Final Exam Practace 2

again=("y")
while again=="y":
    tax=.11
    name=input("What is your name?")
    car_name=input("What is the make and modle of the car that you want?")
    date=int(input("What is today's date?(mm/dd/yy)"))
    num_days=int(input("How many days are you going to rent this car?"))
    if num_days>5:
        rental_cost=20.00
    elif num_days<=5:
        rental_cost=30.00
    total_cost=num_days*rental_cost
    total_tax=total_cost*tax
    grand_total=total_tax+total_cost
    print("The Owners name is",name)
    print("The disierd car is",car_name)
    print("The date of purchace is",date)
    print("The number of days the car is rented if",num_days)
    print("The base cost of renting is",total_cost)
    print("The Total with tax is",total_tax)
    print("The grand total is", grand_total)
    again=input("Would you like another resavation? y or n")
print("Thank you for renting")

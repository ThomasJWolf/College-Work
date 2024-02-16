#Test Practice: Lists & Tuples
#
#Thomas Wolf
#9/17/19
#Sorces: NONE


#FALED

go='no'
while go=='no':
    pizza=['Cheese','Peperoni','Everything','Just dough and sause']
    print("Here are your choices")
    for i in pizza:
        print(i)
    fav1=int(input("Which kind of pizza is your favorite? 1-4"))
    fav2=int(input("Which kind of pizza is your 2nd favorite? 1-4"))
    fav3=int(input("Which kind of pizza is your 3rd favorite? 1-4"))
    fav4=int(input("Which kind of pizza is your least favorite? 1-4"))
    fav1-=1
    fav2-=1
    fav3-=1
    fav4-=1
    fav12=fav1-1
    fav22=fav2-1
    fav32=fav3-1
    fav42=fav4-1
    fav1=pizza[fav
    fav_pizza=[]
    fav_pizza.append(fav1)
    fav_pizza.append(fav2)
    fav_pizza.append(fav3)
    fav_pizza.append(fav4)
    print("Your new order is",fav_pizza)
    go=str(input("is this correct? yes or no"))

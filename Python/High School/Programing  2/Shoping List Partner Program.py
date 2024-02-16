#Shoping List Partner Program.
#Make an automated shopping list
#Thomas Wolf and Daniel Heningeon
#9/12/19
#Sorces: NONE

cart=[]
price=[]
print("Welcome to the Virtual Shopping list program!")
answer='yes'
while answer=='yes':
    items=int(input("How many items do you want on the list?"))
    for i in range(items):
        addition=str(input("What is the item you want to add?"))
        prices=float(input("What is the price of the item?"))
        print("---------------------")
        print(addition)
        print(prices)
        print("---------------------")
        cart.append(addition)
        price.append(prices)
    print("Items:")
    for i in cart:
        print(i)
    print("---------------------")
    print("Price:")
    for i in price:
        print(i)
    len_num=len(cart)
    print("You purchesed",len_num,"items today")
    print("---------------------")
    index=int(input("Where in the list do you want to see?"))
    print("---------------------")
    index-=1
    print("The item is",cart[index])
    print("---------------------")
    print("The most expensive item you purchesed today is",max(price))
    print("The least expensive item you purchesed today is",min(price))
    print("---------------------")
    answer=str(input("Do you want to run the program again? yes or no"))
    print("---------------------")
print("Thank you for using my program")


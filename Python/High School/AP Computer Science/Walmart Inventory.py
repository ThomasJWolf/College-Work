#Walmart Inventory
#4/19/21


def main():
    cart={}
    repeat='yes'
    items_ID={1:"Cheese",2:"Milk",3:"Eggs",4:"Bread",5:"Juice"}
    items_price={"Cheese":2,"Milk":3,"Eggs":2.50,"Bread":1.50,"Juice":5}
    while repeat=='YES' or repeat=='Yes' or repeat=='yes' or repeat=='Y' or repeat=='y':
        CustOrEmp=input("Welcome to Walmart! Are you a customer (C) or an employee (E)?\n:")
        if CustOrEmp=='c' or CustOrEmp=='C':
            customer(items_ID,items_price)
            repeat=input("\nWould you like to do more?\n:")
        elif CustOrEmp=='e' or CustOrEmp=='E':
            employee(items_ID,items_price)
            repeat=input("\nWould you like to do more?\n:")
        else:
            print("\nYou have entered an invalid letter, please only use C or E\n")
    print("\n--------------------------------------------\nThank you for shopping at Walmart!\n--------------------------------------------")
        
            
def customer(items_ID,items_price):
    cart={}
    total=0
    run=False
    while run!=True:
        try:
            item=int(input("\nHello customer! What would you like to do?\n1. Serch by item ID \n2. Serch by item name\n:"))
            run=True
        except:
            print("\nOnly enter numbers")
    if item==1:
        print("\nHere is what we have in stock:")
        for i in (items_ID):
            print(i,items_ID.get(i),items_price.get(items_ID.get(i)))
        cart_more='yes'
        while cart_more=='YES' or cart_more=='Yes' or cart_more=='yes' or cart_more=='Y' or cart_more=='y':
            run=False
            while run!=True:
                try:
                    amount=int(input("\nHow many items do you want to add to your cart?\n:"))
                    run=True
                except:
                    print("\nOnly enter numbers")
                num=1
            while amount!=0:
                print("\nWhat do you want for item ",num,"?",sep='')
                run=False
                while run!=True:
                    try:
                        item_ID=int(input(":"))
                        run=True
                    except:
                        print("\nOnly enter numbers")
                if item_ID in items_ID:
                    cart.update({items_ID.get(item_ID):items_price.get(items_ID.get(item_ID))})
                    total+=items_price.get(items_ID.get(item_ID))
                    print("\nYour current cart is:")
                    for i in (cart):
                        print(i,cart.get(i))
                    print("\nYour current total is ",total,sep="$")
                    num+=1
                    amount-=1
                else:
                    print("\nItem not in inventory")
            cart_more=input("\nDo you want to add more to your cart?\n:")
        print("You have bought:")
        for i in cart:
            print(i)
        print("Your total is ",total,sep="$")

                
    elif item==2:
        print("\nHere is what we have in stock:")
        for i in (items_price):
            print(i,items_price.get(i))
        cart_more='yes'
        while cart_more=='YES' or cart_more=='Yes' or cart_more=='yes' or cart_more=='Y' or cart_more=='y':
            run=False
            while run!=True:
                try:
                    amount=int(input("\nHow many items do you want to add to your cart?\n:"))
                    run=True
                except:
                    print("\nOnly enter numbers")
                num=1
            while amount!=0:
                print("\nWhat do you want for item ",num,"?",sep='')
                item_name=input(":")
                if item_name in items_price:
                    cart.update({item_name:items_price.get(item_name)})
                    total+=items_price.get(item_name)
                    print("\nYour current cart is:")
                    for i in (cart):
                        print(i,cart.get(i))
                    num+=1
                    amount-=1
                else:
                    print("Item not in inventory")
                print("\nYour current total is ",total,sep="$")
            cart_more=input("\nDo you want to add more to your cart?\n:")
            print("You have bought:")
            for i in cart:
                print(i)
            print("Your total is ",total,sep="$")

    else:
        print("\nYou have entered an invaled number")
        customer(items_ID,items_price)
        
        
    
def employee(items_ID,items_price):
     run=False
     while run!=True:
         try:
            item=int(input("\nHello employee! What would you like to do?\n1. Add to inventory \n2. Remove from inventory?\n:"))
            run=True
         except:
             print("\nOnly enter numbers")
     if item==1:
         print("\nHere is the stock:")
         for i in (items_ID):
            print(i,items_ID.get(i),items_price.get(items_ID.get(i)))
         repeat2='yes'
         while repeat2=='YES' or repeat2=='Yes' or repeat2=='yes' or repeat2=='Y' or repeat2=='y':
            add=input("\nWhat item are you adding?\n:")
            run=False
            while run!=True:
                try:
                    price=int(input("What is the price?\n:"))
                    run=True
                except:
                    print("\nOnly enter numbers")
            items_ID.update({len(items_ID)+1:add})
            items_price.update({add:price})
            for i in (items_ID):
                print(i,items_ID.get(i),items_price.get(items_ID.get(i)))
            print("\n------------------------\nAdded successfully\n------------------------")
            repeat2=input("\nWould you like to add more?\n:")
     elif item==2:
         print("\nHere is the stock:")
         for i in (items_ID):
            print(i,items_ID.get(i),items_price.get(items_ID.get(i)))
         repeat2='yes'
         while repeat2=='YES' or repeat2=='Yes' or repeat2=='yes' or repeat2=='Y' or repeat2=='y':
             run=False
             while run!=True:
                 try:
                     ID=float(input("\nEnter the ID of the item\n:"))
                     run=True
                 except:
                     print("\nOnly enter numbers")
             name=input("\nEnter the name of the item\n:")
             if ID in items_ID and name in items_price:
                 stop=input("\nAre you sure you want to deleat this item, it cannot be undone!\n:")
                 if stop=='YES' or stop=='Yes' or stop=='yes' or stop=='Y' or stop=='y':
                     items_ID.pop(ID)
                     items_price.pop(name)
                     for i in (items_ID):
                        print(i,items_ID.get(i),items_price.get(items_ID.get(i)))
                     print("\n--------------------------\nRemoved successfully\n--------------------------")
                     repeat2=input("\nWould you like to remove more?\n:")
     else:
         print("\nYou have entered an invaled number")
         employee(items_ID,items_price)

main()

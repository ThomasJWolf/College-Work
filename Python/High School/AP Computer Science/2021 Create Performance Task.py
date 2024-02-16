#2021 Create Performance Task

def main():
    cart1={}
    cart2={}
    cart3={}
    cart4={}
    cart5={}
    Four_Guys={'Hamburger':8.05,'Cheeseburger':8.75,'Bacon Burger':9.15,'Bacon Cheeseburger':9.85,'Hot Dog':5.55
               ,'Grilled Cheese Sandwich':4.95,'Little Fries':3.69,'Regular Fries':4.79,'Large Fries':6.09,'Chocolate Milkshake':4.00}
    Driftplanks={'Deep Sea Bloomer':8.95,"Captain's Platter":23.95,'Deckhand Special':17.95,'Mahi Spilane':19.95,'Chicken Strip Dinner':11.95
                 ,'Bacon Cheddar Burger':11.95,"Woody's Chicken Sandwich":10.95,'1/2 Rack of Ribs & Shrimp':22.95,'Filet Mignon':22.95
                 ,'12oz Rib-Eye':21.95,'Mushroom Marsala Sirloin':16.95,'Fried Cheesecake':5.95,"Chocolate Peanut Butter Reese's Pie":6.95,'Fried Mac & Cheese':6.95}
    MacDonals={'Big Mac':4.11,'Quarter Pounder with Cheese':3.90,'Double Quarter Pounder with Cheese':4.93,'Bacon Clubhouse Burger':4.62
               ,'Buttermilk Crispy Chicken':4.52,'Filet-O-Fish':3.90,'Chicken McNuggets 10 Pc':4.62,'French Fries Large':1.95,'McFlurry':2.46,'Sundae':1.33,'McRib':3.80}
    repeat='yes'
    while repeat=='yes' or repeat=='y':
        CorD=input("\nHello! Welcome to Door Eats! Are you a customer (C) or a driver (D)?\n:")
        CorD=CorD.lower()
        if CorD=='c':
            customer(cart1,cart2,cart3,cart4,cart5,Four_Guys,Driftplanks,MacDonals)
            repeat=input("\nWould you like do more?\n:")
            repeat=repeat.lower()
        elif CorD=='d':
            driver(cart1,cart2,cart3,cart4,cart5)
            repeat=input("\nWould you like do more?\n:")
            repeat=repeat.lower()
        else:
            print("\nInvalid, please only put C or D")
    print("\nThank you for using Door Eats!")
            

def customer(cart1,cart2,cart3,cart4,cart5,Four_Guys,Driftplanks,MacDonals):
    total=0
    repeat='yes'
    while repeat=='yes' or repeat=='y':
        run=False
        while run!=True:
            try:
                rest=int(input("\nWhich resterant do you want to order from?\n1. Four Guys\n2. Driftplanks\n3. MacDonals\n:"))
                try:
                    if rest==1 or rest==2 or rest==3:
                        run=True
                except:
                    print("\nOnly enter 1-3")
            except:
                print("\nOnly enter 1-3")
            if rest==1:
                menu=Four_Guys
            elif rest==2:
                menu=Driftplanks
            elif rest==3:
                menu=MacDonals
            else:
                print('Invalid resterant')
        run=False
        while run!=True:
            try:
                cart_pick=int(input("\nHello customer, which order slot do you want to fill? 1-5\n:"))
                run=True
            except:
                print("\nOnly enter 1-5")
        
        if cart_pick==1:
            if bool(cart1)==False:
                total=0
                print("\nHere is what we have on the menu:")
                for i in menu:
                    print(i,menu.get(i))
                repeat='yes'
                while repeat=='yes' or repeat=='y':
                    run=False
                    while run!=True:
                        try:
                            order_num=int(input("\nHow many items do you want to order?\n:"))
                            run=True
                        except:
                            print("\nOnly enter numbers")
                    for i in range(order_num):
                        print("\nWhat do you want for item ",i+1,"?",sep='')
                        order=input(":")
                        if order in menu:
                            cart1.update({order:menu.get(order)})
                        else:
                            print("This item is not on the menu")
                    repeat=input("\nWould you like to add more to this order? It can not be changed once placed\n:")
                print('\nYour complete order is:')
                for i in cart1:
                    print(i,cart1.get(i))
                    total+=cart1.get(i)
                print("\nAnd your total is",format(total,'.2f'))
            else:
                print("\nThis order slot is filled")
                
                
        elif cart_pick==2:
            if bool(cart2)==False:
                total=0
                print("\nHere is what we have on the menu:")
                for i in menu:
                    print(i,menu.get(i))
                repeat='yes'
                while repeat=='yes' or repeat=='y':
                    run=False
                    while run!=True:
                        try:
                            order_num=int(input("\nHow many items do you want to order?\n:"))
                            run=True
                        except:
                            print("\nOnly enter numbers")
                    for i in range(order_num):
                        print("\nWhat do you want for item ",i+1,"?",sep='')
                        order=input(":")
                        if order in menu:
                            cart2.update({order:menu.get(order)})
                        else:
                            print("This item is not on the menu")
                    repeat=input("\nWould you like to add more to this order?\n:")
                print('')
                for i in cart2:
                    print(i,cart2.get(i))
                    total+=cart2.get(i)
                print("\nAnd your total is",format(total,'.2f'))
            else:
                print("\nThis order slot is filled")
                
        elif cart_pick==3:
            if bool(cart3)==False:
                total=0
                print("\nHere is what we have on the menu:")
                for i in menu:
                    print(i,menu.get(i))
                repeat='yes'
                while repeat=='yes' or repeat=='y':
                    run=False
                    while run!=True:
                        try:
                            order_num=int(input("\nHow many items do you want to order?\n:"))
                            run=True
                        except:
                            print("\nOnly enter numbers")
                    for i in range(order_num):
                        print("\nWhat do you want for item ",i+1,"?",sep='')
                        order=input(":")
                        if order in menu:
                            cart3.update({order:menu.get(order)})
                        else:
                            print("This item is not on the menu")
                    repeat=input("\nWould you like to add more to this order?\n:")
                print('')
                for i in cart3:
                    print(i,cart3.get(i))
                    total+=cart3.get(i)
                print("\nAnd your total is",format(total,'.2f'))
            else:
                print("\nThis order slot is filled")

        elif cart_pick==4:
            if bool(cart4)==False:
                total=0
                print("\nHere is what we have on the menu:")
                for i in menu:
                    print(i,menu.get(i))
                repeat='yes'
                while repeat=='yes' or repeat=='y':
                    run=False
                    while run!=True:
                        try:
                            order_num=int(input("\nHow many items do you want to order?\n:"))
                            run=True
                        except:
                            print("\nOnly enter numbers")
                    for i in range(order_num):
                        print("\nWhat do you want for item ",i+1,"?",sep='')
                        order=input(":")
                        if order in menu:
                            cart4.update({order:menu.get(order)})
                        else:
                            print("This item is not on the menu")
                    repeat=input("\nWould you like to add more to this order?\n:")
                print('')
                for i in cart4:
                    print(i,cart4.get(i))
                    total+=cart4.get(i)
                print("\nAnd your total is",format(total,'.2f'))
            else:
                print("\nThis order slot is filled")
                
        elif cart_pick==5:
            if bool(cart5)==False:
                total=0
                print("\nHere is what we have on the menu:")
                for i in menu:
                    print(i,menu.get(i))
                repeat='yes'
                while repeat=='yes' or repeat=='y':
                    run=False
                    while run!=True:
                        try:
                            order_num=int(input("\nHow many items do you want to order?\n:"))
                            run=True
                        except:
                            print("\nOnly enter numbers")
                    for i in range(order_num):
                        print("\nWhat do you want for item ",i+1,"?",sep='')
                        order=input(":")
                        if order in menu:
                            cart5.update({order:menu.get(order)})
                        else:
                            print("This item is not on the menu")
                    repeat=input("\nWould you like to add more to this order?\n:")
                print('')
                for i in cart5:
                    print(i,cart5.get(i))
                    total+=cart5.get(i)
                print("\nAnd your total is",format(total,'.2f'))
            else:
                print("\nThis order slot is filled")

        else:
            print("Please only enter 1-5")

def driver(cart1,cart2,cart3,cart4,cart5):
    repeat='yes'
    while repeat=='yes' or repeat=='y':
        run=False
        while run!=True:
            try:
                cart_pick=int(input("\nHello driver, which order are you picking up? 1-5\n:"))
                run=True
            except:
                print("\nOnly enter 1-5")
        
        if cart_pick==1:
            if bool(cart1)==False:
                print("There is no order in this cart")
            else:
                total=0
                print("\nThe order is")
                for i in cart1:
                    print(i,cart1.get(i))
                    total+=cart1.get(i)
                print("\nThe total is",format(total,'.2f'))
                repeat=input("\nWould you like to get another order?\n:")
                
        elif cart_pick==2:
            if bool(cart2)==False:
                print("There is no order in this cart")
            else:
                total=0
                print("\nThe order is")
                for i in cart2:
                    print(i,cart2.get(i))
                    total+=cart2.get(i)
                print("\nThe total is",format(total,'.2f'))
                repeat=input("\nWould you like to get another order?\n:")
                    
        elif cart_pick==3:
            if bool(cart3)==False:
                print("There is no order in this cart")
            else:
                total=0
                total=0
                print("\nThe order is")
                for i in cart3:
                    print(i,cart3.get(i))
                    total+=cart3.get(i)
                print("\nThe total is",format(total,'.2f'))
                repeat=input("\nWould you like to get another order?\n:")
            
        elif cart_pick==4:
            if bool(cart4)==False:
                print("There is no order in this cart")
            else:
                total=0
                print("\nThe order is")
                for i in cart4:
                    print(i,cart4.get(i))
                    total+=cart4.get(i)
                print("\nThe total is",format(total,'.2f'))
                repeat=input("\nWould you like to get another order?\n:")

        elif cart_pick==5:
            if bool(cart5)==False:
                print("There is no order in this cart")
            else:
                total=0
                print("\nThe order is")
                for i in cart5:
                    print(i,cart5.get(i))
                    total+=cart5.get(i)
                print("\nThe total is",format(total,'.2f'))
                repeat=input("\nWould you like to get another order?\n:")
                
        else:
            print("Please only enter 1-5")
            
main()

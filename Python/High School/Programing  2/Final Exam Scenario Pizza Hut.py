#Final Exam Scenario: Pizza Hut
#Thomas Wolf
#1/14/20
#Souces : None


def main():
    write()
    read()

def write():
    file=open('pizza hut order.txt','w')
    pizzas={"small":8.00,"medium":12.00,"large":15.00,"x large":18.00}
    total=0

    #personal info for customer
    delivery_method=input("Pick Up or delivery?")
    file.write("Delivery Method:"+delivery_method+'\n')
    
    phone=input("Enter Phone Number:")
    file.write("Phone Number:"+phone+'\n')
    
    name=input("Enter First and Last Name")
    file.write("Name:"+name+'\n')
    
    address=input("Enter Address:")
    file.write("Address:"+address+'\n')
    
    num_pizzas=int(input("Enter number of pizzas to order:"))
    file.write("Number of Pizzas:"+str(num_pizzas)+'\n')

    #loop for pizza info
    for i in pizzas.keys():
        print(i,end=', ')

    for i in range(num_pizzas):
        size=input("\nEnter Size")
        file.write("Size:"+size+'\n')
        size=size.lower
        
        sauce=input("Enter sauce:")
        file.write("Sauce:"+sauce+'\n')
        
        num_toppings=int(input("Enter number of toppings:"))
        
        for i in range(num_toppings):
            toppings=input("Enter topping:")
            file.write("Toppings:"+toppings+'\n')
        if size in pizzas:
            price=pizzas.get(size)
            total+=price
    total=format(total,'.2f')
    file.write("Total Price:"+str(total)+'\n')
    file.close

def read():
    file=open('pizza hut order.txt','r')
    line=file.readline()
    line=line.rstrip('\n')
    while line!='':
        print(line)
        line=file.readline()
        line=file.readline()
        line=line.rstrip('\n')




main()

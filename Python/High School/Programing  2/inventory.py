#inventory
#
#Thomas Wolf
#10/2/19
#Sourses: NONE

def main():
    coice=int(input("What would you like to do?\n\t1.Write\n\t2.Read\n\t3.Quit"))
    if coice==1:
        write()
        main()
    elif coice==2:
        read()
        main()
    else:
        quit

def write():
    file=open('g_inventory.txt','w')
    file.write("Welcome to S T O R E\n")
    file.write("--------------------\n")
    num_items=int(input("How many items need to be inventoried?"))
    for i in range(num_items):
        item=input("Enter name of inventory item")
        file.write(item+'\n')
        price=float(input("Enter price of item"))
        price=str(price)
        file.write(price+'\n')
        quanity=int(input("ENter quanity of item"))
        quanity=str(quanity)
        file.write(quanity+'\n')
    print("succsess")
    file.close()

def read():
    file=open('g_inventory.txt','r')
    line=file.readline()
    while line!='':
        line=line.rstrip('\n')
        print(line)
        line=file.readline()
    file.close()
        
main()

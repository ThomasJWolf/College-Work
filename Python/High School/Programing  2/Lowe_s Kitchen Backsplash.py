#Lowe's Kitchen Backsplash
#Thomas Wolf
#1/15/20

price={"subway tiles":1.25,"glass mosaic tiles":2.25,"marble tiles":3.50}


def main():
    write()
    read()

def write():
    file=open("Lowe's Kitchen Backsplash orders.txt",'w')
    ammount_total=0
    total=0
    sub_total=0
    customers=int(input("How many customers are being entered? "))
    for i in range(customers):
        file.write("Customer "+str(i+1)+':\n')
        phone=input("\nEnter phone number: ")
        file.write("Phone Number: "+phone+'\n')
        name=input("Enter name: ")
        file.write("Name: "+name+'\n')
        address=input("Enter address: ")
        file.write("Address: "+address+'\n')
        backsplashs=int(input("How many backsplashs are being entered? "))
        for i in price.keys():
            print(i,end=', ')
        for i in range(backsplashs):
            back_type=input("Whay type of backsplash do you want? ")
            file.write("\nBacksplash Type: "+back_type+'\n')
            tile=price.get(back_type)
            ammount=float(input("How many sq ft of this tile do you want? "))
            file.write("Ammount of sq ft: "+str(ammount)+'\n')
            ammount_total+=ammount
            ammount_times=ammount*tile
            file.write("Price of sq ft :"+str(ammount_times)+'\n')
            file.write("Cost of installation: "+str(ammount)+'\n')
            sub_total=ammount_times+ammount
            file.write("Sub total: "+str(sub_total)+'\n')
            total+=sub_total
    file.write("\nTotal without tax: "+str(total)+'\n')
    total_tax=(total*.08)+total
    file.write("Total: "+str(total_tax)+'\n')
    file.close()

def read():
    file=open("Lowe's Kitchen Backsplash orders.txt",'r')
    line=file.readline()
    line=line.rstrip()
    print(line)
    for i in file:
        print(i,end='')
        line=file.readline()
        line=line.rstrip()
        print(line)
    
main()

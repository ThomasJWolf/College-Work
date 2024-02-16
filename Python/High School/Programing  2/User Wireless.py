#User Wireless
#
#Thomas Wolf
#12/9/19

import Wireless

def main():
    phone=make_list
    print("Here is the data you entered")
    display_list(phone)
    
def make_list():
    phone_list=[]

    num_phone=int(input("Enter number of phones in inventory"))
    for i in range(num_phone):
        man=input("Enter name of manufacturer:")
        mod=input("Enter the model number:")
        r_price=float(input("Enter the retail price:"))

        #name of file followed be name of class
        phone=Wireless.Inventory(man,mod,r_price)
        phone_list.append(phone)
        return phone_list

def display_list(phone_list):
    print(phone_list)
    for i in phone_list:
        print()
        print("Manufacturer: ",i.get_name())
        print("Model Number: ",i.get_model())
        print("Retail Price: ",format(i.get_price(),',.2f'),sep='')

main()

#Birthday Lookup
#Enter birthdays, look up birthdays, remove birthday, menues
#Thomas Wolf
#10/31/19
#Sources: NONE

birthdays={}
def main():
    choice=int(input("What would you like to do?\n\t1. Enter Birthday\n\t2. Look-up Birthday\n\t3. Remove Birthday\n\t4. Print Birthdays\n\t5. Quit"))
    if choice==1:
        enter()
        main()
    elif choice==2:
        lookup()
        main()
    elif choice==3:
        remove()
        main()
    elif choice==4:
        print_bdays()
        main()
    else:
        quit

def enter():
    global num_bdays
    num_bdays=int(input("how many birthdays would you like to enter?"))
    for i in range(num_bdays):
        name=input("Enter name")
        dob=input("Enter Date of Birth")
        birthdays[name]=dob
    print("Data successfully stored")
    print(birthdays)

def lookup():
    name=input("Enter name of person you would like to find:")
    if name in birthdays:
        print(name,"birthday is",birthdays.get(name))
    else:
        add=input("Do you want to add theis person?")
        add=add.lower()
        if add=='yes':
            enter()
        else:
            print("Value not found")
    print(birthdays)

def remove():
    name=input("Enter name of person you would like to remove:")
    if name in birthdays:
        birthdays.pop(name)
    else:
        print(name,"not fount in data")
    print(birthdays)

def print_bdays():
    file=open('list_of_birthdays.csv','w')
    file.write('Name,Birthdays'+'\n')
    key=birthdays.keys()
    for key in birthdays.keys():
        file.write('\n')
        file.write(key+','+birthdays[key])
        file.write(',')
    file.close()

main()

#Employee Records
#Bang
#Thomas Wolf
#9/26/19
#Sourse: NONE

#Bang Energy Drinks

def main():
    print("Welcome to Bang Energy Drinks")
    while True:
        choice=int(input("What would you like to do?\n1.Define New Employees\n2.Read Records\n3.Add Aditional Employees"))
        if choice==1:
            emp_info()
        elif choice==2:
            read_emp_info()
        elif choice==3:
            add_new_records()
        else:
            break
        quit

def emp_info():
    num_emp=int(input("Enter number of employee records to create:"))
    emp_file=open('employee_data.txt','w')
    for i in range(1,num_emp+1):
        print("Enter data for Employee #",i,sep='')
        
        #getting employee infomation
        name=input("Name:")
        id_num=input("ID Number:")
        dept=input("Department:")

        #Write the data to the file
        emp_file.write(name+'\n')
        emp_file.write(id_num+'\n')
        emp_file.write(dept+'\n'+'\n')

        #display a blank line
        print()

    #close the file
    emp_file.close()
    print("Succsess")


def read_emp_info():
    emp_file=open('employee_data.txt','r')
    name=emp_file.readline()
    while name!='':
        #reading each field
        id_num=emp_file.readline()
        dept=emp_file.readline()

        #strip new lines from the fields
        name=name.rstrip('\n')
        id_num=id_num.rstrip('\n')
        dept=dept.rstrip('\n')

        #print each record
        print("Name:",name)
        print("ID",id_num)
        print("Department",dept)
        print()

        name=emp_file.readline()        
    emp_file.close()

def add_new_records():
    num_emp=int(input("Enter number of employee records to create:"))
    emp_file=open('employee_data.txt','a')
    for i in range(1,num_emp+1):
        print("Enter data for Employee #",i,sep='')
        
        #getting employee infomation
        name=input("Name:")
        id_num=input("ID Number:")
        dept=input("Department:")

        #Write the data to the file
        emp_file.write(name+'\n')
        emp_file.write(id_num+'\n')
        emp_file.write(dept+'\n'+'\n')

        #display a blank line
        print()

    #close the file
    emp_file.close()
    

main()

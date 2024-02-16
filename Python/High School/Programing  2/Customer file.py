#Customer file
#files
#Thomas Wolf
#9/20/19
#Sorces: NONE

def write():
    customer_file=open('customers.txt','w')
    customer_file.write("Names of employes\n")
    customer_file.write("-----------------------------\n")
    for num in range(3):
        name=input("Enter your name")
        customer_file.write('\t'+name+'\n')
    customer_file.close()
    print("Customer data successfully writen")
def read():
    customer_file=open('customers.txt','r')
    line1=customer_file.readline()
    line2=customer_file.readline()
    line3=customer_file.readline()
    line1=line1.rstrip('\n')
    line2=line2.rstrip('\n')
    line3=line3.rstrip('\n')
    customer_file.close()
    print(line1)
    print(line2)
    print(line3)

def easy_read():
    customer_file=open('customers.txt','r')
    line1=customer_file.readline()
    line1=line1.rstrip('\n')
    while line1 != '':
        print(line1)
        line1=customer_file.readline()
        line1=line1.rstrip('\n')

    customer_file.close()

write()
easy_read()

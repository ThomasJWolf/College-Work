#Coffee Records
#A series of programs that she can use to manage inventory
#Thomas Wolf
#9/27/19
#Sourse: NONE

def main():
    write()
    read()

def write():
    file=open('Coffee Records.txt','w')
    file.write("Coffee Records:\n"+'\n')
    coffee_num=int(input("How many types of coffee:"))
    for i in range(coffee_num):
        name=input("Coffee name:")
        amount=float(input("Coffee amount"))
        amount=str(amount)
        file.write(name+'\n'+amount+'\n'+'\n')
        print('')
    file.close()

def read():
    file=open('Coffee Records.txt','r')
    line=''
    all_coffee=[]
    line=file.readline()
    while line!='':
        line=line.rstrip()
        all_coffee.append(line)
        line=file.readline()
    for i in all_coffee:
        print(i)
    file.close()

main()

#Random Number Reader/Writer
#Write a program that writes a series of numbers to a file.
#Thomas Wolf
#10/3/19
#Sourses: NONE

import random

def main():
    try:
        chose=int(input("\nWhich operation would you like to preform?\n1.Write\n2.Read\n3.Quit:"))
        if chose==1:
            write()
            main()
        elif chose==2:
            read()
            main()
        else:
            quit
    except ValueError:
        print("\nERROR, please put a valid number in")
        main()

def write():
    try:
        file=open('random_nums.txt','w')
        rand_repeat=int(input("\nHow many random numbers do you want?:"))
        for i in range(rand_repeat):
            ran=random.randint(1,501)
            ran=str(ran)
            file.write(ran+'\n')
        file.close()
    except ValueError:
        print("\nERROR, please put a valid number in")
        main()
        
def read():
    file=open('random_nums.txt','r')
    amount=[]
    total=0
    line=file.readline()
    while line!='':
        line=line.rstrip('\n')
        line=int(line)
        amount.append(line)
        line=file.readline()
    file.close()
    print()
    total=sum(amount)
    print("The total of the random numbers is",total)
    print("The number of random numbers is",len(amount))

main()


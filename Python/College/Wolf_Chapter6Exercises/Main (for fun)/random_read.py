# Thomas Wolf
# Random Read
# 11/28/22


def main():
    # calls read
    read()

def read():
    # opens random_nums.txt
    file=open('random_nums.txt','r')
    amount=[]
    line=file.readline()
    # counts every number in the list and totals them up
    while line!='':
        line=line.rstrip('\n')
        line=int(line)
        amount.append(line)
        line=file.readline()
    file.close()
    total=sum(amount)
    # prints the total of the numbers and the total amount of number
    print("\nThe total of the random numbers is",total)
    print("The number of random numbers is",len(amount))

if __name__ == "__main__":
    main()
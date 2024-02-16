#Lottery Number Generator
#Design a program that generates random numbers and utilizes a function to house the entire program.
#Thomas Wolf
#8/29/19
#Sources:NONE

import random
def main():
    print("Number\tLottery Number")
    print("----------------------")
    for i in range(7):
        lottery_num=random.randint(0,9)
        print(i+1,':','\t',lottery_num)
        print("----------------------")
main()

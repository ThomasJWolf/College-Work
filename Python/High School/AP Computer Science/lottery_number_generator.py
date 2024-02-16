#Imports the modules necessary for this program
import random
import time

#defines the lists
place=['first','second','third','fourth','fifth','sixth','seventh']
lottery_nums=[]
player_nums=[]
correct_nums=['None']
incorrect_nums=[]

#generates the lottery numbers
def lottery_generation():
    for i in range(7):
        lottery_num=random.randint(0,56)
        if lottery_num in lottery_nums:
            lottery_num=random.randint(0,56)
            lottery_nums.append(lottery_num)
        else:
            lottery_nums.append(lottery_num)

#welcomes the user and asks for their lottery numbers
def user_numbers():
    print("===========================================================")
    print("Hello user and welcome to the Lottery Simulator")
    time.sleep(2)
    print("Please insert 7 numbers (one at a time) from 0-56")
    time.sleep(.5)
    index=0
    for i in range(7):
        player_num=int(input("Please insert your "+place[index]+" choice"))
        if player_num in player_nums:
            player_num=int(input("Please insert another number, the one you just entered is already in the list"))
            if player_num>56:
                time.sleep(1)
                print("ERROR, please insert a number from 0 to 56")
                time.sleep(1)
                player_num=int(input("Please insert your "+place[index]+" choice"))
            else:
                player_nums.append(player_num)
        else:
            if player_num>56:
                time.sleep(1)
                print("ERROR, please insert a number from 0 to 56")
                time.sleep(1)
                player_num=int(input("Please insert your "+place[index]+" choice"))
            else:
                player_nums.append(player_num)
        index+=1
        time.sleep(1)
    print("===========================================================")

#sorts the lists 
def sort_lists():
    lottery_nums.sort()
    player_nums.sort()
    print()
    time.sleep(1)

#displays the lottery number
def display_lottery():
    print("===========================================================")
    print("The lottery numbers are:")
    index=0
    for i in lottery_nums:
        print(lottery_nums[index])
        index+=1
        time.sleep(1)
    print("===========================================================")

#displays the numbers the user chose
def display_player_numbers():
    print()
    print("===========================================================")
    print("The numbers you chose are:")
    index=0
    for i in player_nums:
        print(player_nums[index])
        index+=1
        time.sleep(1)
    print("===========================================================")

#prints the user's results and what they won
def results():
    total=0
    incorrect_nums=lottery_nums.copy()
    print()
    print("===========================================================")
    print("Your results:")
    print()
    time.sleep(1)
    index=0
    for i in range(7):
        if lottery_nums[index]==player_nums[0]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        elif lottery_nums[index]==player_nums[1]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        elif lottery_nums[index]==player_nums[2]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        elif lottery_nums[index]==player_nums[3]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        elif lottery_nums[index]==player_nums[4]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        elif lottery_nums[index]==player_nums[5]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        elif lottery_nums[index]==player_nums[6]:
            correct_nums.append(lottery_nums[index])
            if 'None' in correct_nums:
                correct_nums.remove('None')
            incorrect_nums.remove(lottery_nums[index])
            index+=1
            total+=1
        else:
            index+=1
    time.sleep(2)
    print("You matched these numbers:")
    index=0
    for i in correct_nums:
        print(correct_nums[index])
        index+=1
        time.sleep(.5)
    time.sleep(1)
    print()
    print("You did not match these numbers:")
    index=0
    for i in incorrect_nums:
        print(incorrect_nums[index])
        index+=1
        time.sleep(.5)
    time.sleep(1)
    print()
    if total==1:
        print("You won $4 by matching 1 number")
    elif total==2:
        print("You won $6 by matching 2 numbers")
    elif total==3:
        print("You won $7 by matching 3 numbers")
    elif total==4:
        print("You won $100 by matching 4 numbers")
    elif total==5:
        print("You won $50,000 by matching 5 numbers")
    elif total==6:
        print("You won $1,000,000 by matching 6 numbers")
    elif total==7:
        print("You won the jackpot of $530,203,100 by mathcing all 7 numbers")
    else:
        print("You won no money because you matched 0 numbers")
    print("===========================================================")

#defines the main function
def main():
    lottery_generation()
    user_numbers()
    sort_lists()
    display_lottery()
    display_player_numbers()
    results()

#calls the main function
main()

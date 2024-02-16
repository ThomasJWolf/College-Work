#Virtual Coin Toss
#
#Thomas Wolf
#12/3/19

##Add cose to ask user how many times thay want to flip the coin

import time
import coin


def main():
    my_coin=coin.Coin()
    
    print("Welcome")
    print()
    print("It is",my_coin.get_sideup())
    time.sleep(1.5)
    my_coin.flip()
    print()
    print("New is",my_coin.get_sideup())

again='yes'
while again=='yes':
    repeat=int(input("How many times do you want to flip the coin"))
    for i in range(repeat):
        main()
    again=input("Do you want to go again?")
##    again=again.lower

#Coin flip(classes)
#
#Thomas Wolf
#12/3/19

import time
import coin

enter=int(input("How mant time?"))
    
def main():
    my_coin=coin.Coin()
    my_coin2=coin.Coin()
    my_coin3=coin.Coin()
    print("Welcome")
    print()
    print("It is",my_coin.get_sideup())
    print("It is",my_coin2.get_sideup())
    print("It is",my_coin3.get_sideup())
    for i in range(enter):
        time.sleep(1.5)
        my_coin.flip()
        my_coin2.flip()
        my_coin3.flip()
        print()
        print("New is",my_coin.get_sideup())
        print("New is",my_coin2.get_sideup())
        print("New is",my_coin3.get_sideup())
    

main()

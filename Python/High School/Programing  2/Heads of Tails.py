#Heads of Tails
#Thomas Wolf
#8/29/19
#Sources:NONE

import random
times=int(input("How many times would you like to play?"))
print('-----')
for num in range(times):
    def main():
        h_or_t=random.randint(0,2)
        if h_or_t==0:
            heads()
        else:
            tails()

    def heads():
        print("Heads")
        print('-----')

    def tails():
        print("Tails")
        print('-----')

    main()

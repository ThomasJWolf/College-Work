# Thomas Wolf
# Random Write
# 11/28/22

# imports needed functions
import validate
import random

def main():
    # calls write
    write()

def write():
    # opens random_nums.txt
    file=open('random_nums.txt','w')
    rand_repeat=validate.pos_int("How many random numbers do you want?:","Please enter a positive whole number")
    # writes a random number to a file for the value in rand_repeat
    for i in range(rand_repeat):
        ran=random.randint(1,501)
        file.write("{}\n".format(ran))
    file.close()

if __name__ == "__main__":
    main()
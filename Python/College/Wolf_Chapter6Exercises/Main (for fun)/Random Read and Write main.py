# Thomas Wolf
# Random main
# 11/28/22

# imports needed functions
import validate
import random_read
import random_write

def main():
    # calls write or read based on chose
    chose=1
    while chose==1 or chose==2:
        chose = validate.pos_int("\nWhich operation would you like to preform?\n1.Write\n2.Read\n3.Quit:","Please enter a positive whole number")
        if chose==1:
            random_write.write()

        elif chose==2:
            random_read.read()

        else:
            quit

if __name__ == "__main__":
    main()
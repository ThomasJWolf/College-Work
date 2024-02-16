#Basic Calculator done
#Thomas Wolf
#3/29/21


def main():
    what=0
    while what!=5:
        what=int(input("What would you like to do? \n1.Add\n2.Subtract\n3.Multiply\n4.Divide\n5.Stop\nPlease put the number corisponding to the operation: "))
        if what==5:
            print("\nThank you for using my calculator program!")
            exit
        else:
            num1=float(input("Enter number 1: "))
            num2=float(input("Enter number 2: "))
            if what==1:
                add(num1, num2)
            elif what==2:
                subtract(num1, num2)
            elif what==3:
                multiply(num1, num2)
            elif what==4:
                divide(num1, num2)
            else:
                print("\nYou entered an invalid number\n")


def add(num1, num2):
    total=num1+num2
    print("\nYour answer is",format(total,'.2f'))
    print('\n')


def subtract(num1, num2):
    total=num1-num2
    print("Your answer is",format(total,'.2f'))
    print('\n')


def multiply(num1, num2):
    total=num1*num2
    print("Your answer is",format(total,'.2f'))
    print('\n')


def divide(num1, num2):
    total=num1/num2
    print("Your answer is",format(total,'.2f'))
    print('\n')

main()
    

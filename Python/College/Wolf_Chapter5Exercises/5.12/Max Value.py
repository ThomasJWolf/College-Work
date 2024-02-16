# Thomas Wolf
# Max Value
# 11/16/22

# imports needed functions
import validate

def main():
    # uses validate function to validate int1 and int2
    int1=validate.integer("Enter value 1: ","Enter only whole numbers")
    int2=validate.integer("Enter value 2: ","Enter only whole numbers")
    # calls max with variables int1 and int2
    bigger=max(int1,int2)
    print(bigger)

# a function that compares int1 and int2 and returns the result
def max(int1,int2):
    if int1>int2:
        return int1
    elif int1<int2:
        return int2
    elif int1==int2:
        return "The numbers are the same"
    else:
        return "ERROR"

if __name__ == "__main__":
    main()
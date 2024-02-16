#def
#
#Thomas Wolf
#3/23/21

def main():
    choice=int(input("Would you like to run the program 1. Yes 2. No"))
    if choice==1:
        collect_info()

def collect_info():
    name=input("Wnter your name")
    age=int(input("Enter your age"))

main()

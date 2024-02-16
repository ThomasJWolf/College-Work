#Functions Practice
#Thomas Wolf
#8/29/19
#Sources:NONE

def main():
    start()
    if user_entry==1:
        begin()
    elif user_entry==2:
        retrieve()
    else:
        end()

def start():
    print('Welcome to my game!')
    print('1. Begin\n2. Retrieve Game\n3. End')
    global user_entry
    user_entry=int(input("Enter your selection"))

def begin():
    print("Welcom to level 1!")

def retrieve():
    print("Which game do you want to play?")

def end():
    quit()

main()

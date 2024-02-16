#Functions

def main():
    chose=int(input("\nWhich grade would you like to look at?\n1.Grade 1\n2.Grade 2\n3.Grade 3\n4. Quit:"))
    if chose==1:
        grade1()
        main()
    elif chose==2:
        grade2()
        main()
    elif chose==3:
        grade3()
        main()
    else:
        quit

def grade1():
    print(85)

def grade2():
    print(100)

def grade3():
    print(94)

main()

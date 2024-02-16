#Extract Characters from a String
#write code that generates system login names for students.
#Thomas Wolf
#10/7/19
#Sources: NONE

correct='no'
while correct=='no':
    first=input("What is your first name?")
    while not first.isalpha():
        print("ERROR: Only letters")
        first=input("What is your first name?")

    last=input("What is your last name?")
    while not last.isalpha():
        print("ERROR: Only letters")
        last=input("What is your last name?")

    ID=input("What is your ID number")
    while not ID.isalnum():
        print("ERROR: No Special Characters")
        ID=input("What is your ID number")

    first3=first[0:3]
    last3=last[0:3]
    ID3=ID[-3:-1]+ID[-1]

    login=first3+last3+ID3

    print("Student Login:",login)

    correct=input("is this correct?yes or no")
    if correct.isalpha():
            correct=correct.lower()
    else:
        print("N O")
        correct=input("is your information correct?yes or no")

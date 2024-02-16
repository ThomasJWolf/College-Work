#Validating the Characters in a Password
#
#Thomas Wolf
#10/10/19
#Sourses: NONE

up=False
low=False
digit=False
characters=False
valed=True
while valed==True:
    password=input("Enter password")
    up=False
    low=False
    digit=False
    characters=False
    for i in (password):
        if i.isupper():
            up=True
        else:
            pass
        if i.islower():
            low=True
        else:
            pass
        if i.isdigit():
            digit=True
        else:
            pass
    ammount=len(password)
    while ammount>=7:
        characters=True
    if up==False:
        print("You need at least 1 uppercase letter")
    if low==False:
        print("You need at least 1 lowercase letter")
    if digit==False:
        print("You need at least 1 number")
    if characters==False:
        print("You need at least 7 characters")

#Dictionaries
#
#Thomas Wolf
#10/29/19
#Sorurces: NONE

value=2

if value==1:
    dict_1={'Thomas':10,'MMMMM':1,'Bruh':2,'a':3,'b':4}
    print(dict_1['Thomas'])

    if 'Thomasssss' in dict_1:
        print(dict_1['Thomas'])
    else:
        print("Bruh he is not in there")

    if 'Dude' not in dict_1:
        print("He gone")
    else:
        print("He here")

    name_enter=input("Enter name")
    if name_enter in dict_1:
        print(dict_1[name_enter])
    else:
        print("nope")

if value==2:
    dict_1={'Thomas':10,'MMMMM':1,'Bruh':2,'a':3,'b':4}

    lookup=input("Enter person")
    if lookup in dict_1:
        print(dict_1[lookup],"is this person")
    else:
        print("Not here")
        add=input("add perhaps?")
        add=add.lower()
        if add=='yes':
            value=int(input("Enter the grade"))
            dict_1[lookup]=value
            print("I T   I S   D O N E")
        else:
            print("I T   I S   N O T   D O N E")
    print()
    print(dict_1)
    remove=input("Remove")
    remove=remove.lower()
    if remove=='yes':
        name_remove=input("Enter person and they go bye bye")
        del dict_1[name_remove]
        print(dict_1)
    print()
    print("Thank")

#Thomas Wolf
#11/1/2018
#Age Classifier

age=int(input("How old are you?"))#askes the user how old thay are
if age<=1:#detect if they are an infant
    print("You are an infant")#if they are an infant it says thay are an infant
elif age>=2 and age<13:#detect if they are a child
    print("You are a child")#if they are a child it says thay are a child
elif age>=13 and age<20:#detect if they are a teenager
    print("You are a teenager")#if they are a teenager it says thay are a teenager
else:#detect if they are an adult
    print("You are an adult")#if they are a adult it says thay are a adult

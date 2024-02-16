#Enrichment Program: IN and NOT IN Listss
#Create a list that has a series of 10 different ages.
#Thomas Wolf
#9/11/19
#Sorces: NONE

go='yes'
age_list=[1,15,99,40,18,54,57,24,45,13800000000]
while go=='yes':
    age=int(input("What is your age"))
    if age in age_list:
        print("Your age is in the list")
    if age not in age_list:
        print("Your age is not in the list")
        add=str(input("Would you like to add your age? yes or no"))
        if add=='yes':
            age_list.append(age)
        for i in age_list:
            print(i)
    go=str(input("Would you like to go again? yes or no"))
print("Thank you for using my program")

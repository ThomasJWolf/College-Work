#Enrichment Program Initials
#
#Thomas Wolf
#10/4/19
#Sourses: NONE

correct='no'
while correct=='no':
    first=input("Please enter your first name")
    middle=input("Please enter your middle name")
    last=input("Please enter your last name")
    print()
    
    firsts=first.upper()
    middles=middle.upper()
    lasts=last.upper()
    
    firsts=firsts[0]
    middles=middles[0]
    lasts=lasts[0]

    print("Original Entry:",first,middle,last)
    print(firsts,middles,lasts,'',sep='.')
    print()
    
    correct=input("is your information correct?yes or no")
    if correct.isalpha():
        correct=correct.lower()
    else:
        print("N O")
        correct=input("is your information correct?yes or no")

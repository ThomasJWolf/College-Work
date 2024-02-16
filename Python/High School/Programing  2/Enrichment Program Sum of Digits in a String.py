#Enrichment Program: Sum of Digits in a String
#
#Thomas Wolf
#10/17/19
#Sources: NONE

string_nums=input("Enter numbers with no spaces")
accu=0
for i in string_nums:
    i=int(i)
    accu+=i
print("The total of the string is:",accu)

#Assinments
#
#Thomas Wolf
#3/23/21

total=0
num_grade=int(input("How many assinments do you have?"))
count=num_grade
count2=1
while count!=0:
    print("What grade did you get on assinment",count2)
    grade=float(input(" "))
    total+=grade
    count-=1
    count2+=1
avg=total/num_grade
print("your total is",format(avg,'.2f'))

#Assinments
#
#Thomas Wolf
#3/23/21

total=0
num_grade=int(input("How many assinments do you have?"))
for i in range(num_grade):
    i+=1
    print("What grade did you get on assinment",i)
    grade=float(input(" "))
    total+=grade
avg=total/num_grade
print("your total is",format(avg,'.2f'))

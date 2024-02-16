#Using CSV Files in Python
#To write data from a survey to a CSV file
#Thomas Wolf
#10/15/19
#Sources:

file=open('Computer Programing 2 Survey.csv','w')
file.write('NAME'+',AGE'+',GRADE'+',GENDER'+',Q1'+',Q2'+',Q3'+',Q4'+',Q5'+',Q6'+',Q7'+',Q8'+'\n')
name_list=[]
age_list=[]
grade_list=[]
gender_list=[]
q1_list=[]
q2_list=[]
q3_list=[]
q4_list=[]
q5_list=[]
q6_list=[]
q7_list=[]
q8_list=[]

print("Enter information:")
repeat=int(input("-----Number of Surveys:"))

for i in range(repeat):
    name=input("Enter name:")
    age=int(input("Enter age:"))
    grade=int(input("Enter grade:"))
    gender=input("Enter gender:")
    print("-----Enter Y or N")
    q1=input("Enter Question 1:")
    q2=input("Enter Question 2:")
    q3=input("Enter Question 3:")
    q4=input("Enter Question 4:")
    q5=input("Enter Question 5:")
    q6=input("Enter Question 6:")
    q7=input("Enter Question 7:")
    q8=input("Enter Question 8:")
    print()
    
    name_list.append(name)
    
    age=str(age)
    age_list.append(age)
    
    grade=str(grade)
    grade_list.append(grade)
    
    gender_list.append(gender)
    q1_list.append(q1)
    q2_list.append(q2)
    q3_list.append(q3)
    q4_list.append(q4)
    q5_list.append(q5)
    q6_list.append(q6)
    q7_list.append(q7)
    q8_list.append(q8)
    
for i in range(0,i+1):
    file.write(name_list[i]+','+age_list[i]+','+grade_list[i]+','+gender_list[i]+','+q1_list[i]+','+q2_list[i]+','+q3_list[i]+','+q4_list[i]+','+q5_list[i]+','+q6_list[i]+','+q7_list[i]+','+q8_list[i]+'\n')
file.close()
        
print('Name:',name_list)
print('Age:',age_list)
print('Grade:',grade_list)
print('Gender:',gender_list)
print('Question 1:',q1_list)
print('Question 2:',q2_list)
print('Question 3:',q3_list)
print('Question 4:',q4_list)
print('Question 5:',q5_list)
print('Question 6:',q6_list)
print('Question 7:',q7_list)
print('Question 8:',q8_list)

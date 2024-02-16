#Driver’s License Exam
#Your program should store these correct answers in a list.
#Thomas Wolf
#9/20/19
#Sorces: NONE

answers=['A','C','A','A','D','B','C','A','C','B','A','D','C','A','D','C','B','B','D','A']
grade=0
grades=[]
bad_grades=[]

inputed=str(input("What is your answer for number 1? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)
    

inputed=str(input("What is your answer for number 2? UPERCASE"))
num='C'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 3? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 4? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 5? UPERCASE"))
num='D'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)
inputed=str(input("What is your answer for number 6? UPERCASE"))
num='B'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 7? UPERCASE"))
num='C'
if inputed==num:
    grade+=1

inputed=str(input("What is your answer for number 8? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 9? UPERCASE"))
num='C'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 10? UPERCASE"))
num='B'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 11? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 12? UPERCASE"))
num='D'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 13? UPERCASE"))
num='C'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 14? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 15? UPERCASE"))
num='D'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 16? UPERCASE"))
num='C'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 17? UPERCASE"))
num='B'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)
inputed=str(input("What is your answer for number 18? UPERCASE"))
num='B'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)
inputed=str(input("What is your answer for number 19? UPERCASE"))
num='D'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)

inputed=str(input("What is your answer for number 20? UPERCASE"))
num='A'
if inputed==num:
    grade+=1
    grades.append(inputed)
else:
    bad_grades.append(inputed)
print(grades)
print(bad_grades)
print(grade)
if grade>=15:
    print("You passed")
else:
    print("You failed")

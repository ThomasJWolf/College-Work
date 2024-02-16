#Driver’s License Exam
#Your program should store these correct answers in a list.
#Thomas Wolf
#9/20/19
#Sorces: NONE

file=open("answerss.txt",'w')
answers=['A','C','A','A','D','B','C','A','C','B','A','D','C','A','D','C','B','B','D','A']
correct=0
wrong=0
correct_list=[]
wrong_list=[]
for i in range(20):
    user_answers=input("What is your answer?")
    if answers[i]==user_answers:
        correct+=1
        correct_list.append(user_answers)
    if answers[i]!=user_answers:
        wrong+=1
        wrong_list.append(user_answers)
print(correct)
print(wrong)
file.write(wrong_list+'\n')
if wrong<=14:
    file.write("You failed")
file.close()

#Enrichment Program: Processing a list
#A program that will read a student’s test scores as input and calculate the average with the lowest score dropped.
#Thomas Wolf
#9/16/19
#Sorces: NONE

#original test scores
score_total=[]
total=0

#gathering number of test
test_num=int(input("How many test have you had?"))

#collecting grades and adding to the list and total
for i in range(test_num):
    score=float(input("What is your grade for this test?"))
    score_total.append(score)
    total+=score

#Creating new list
new_test_scores=score_total

#Storing old scores
score_total_tup=tuple(score_total)

#removing low test scores finding avarage
min_num=min(new_test_scores)
new_test_scores.remove(min_num)
total-=min_num
student_avarage=total/len(new_test_scores)
print("Students Avarage:",format(student_avarage,'.2f'))
print("Original Scores",score_total_tup)

#Algerbra 1 and Programing 1
#Thomas Wolf
#8/27/19

student_algerbra_1=str(input("Did you take Algerbra 1? yes or no"))
student_programing_1=str(input("Did you take Programing 1? yes or no"))

student_algerbra_1=student_algerbra_1.lower()
if student_algerbra_1=='yes':
    if student_programing_1=='yes':
        print("You can take Programing 2")
    else:
        print("You cannot take Programing 2. You need Programing 1")
else:
    print("You cannot take Programing 2. You need Algerbra 1")

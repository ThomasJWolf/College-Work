#Enrichment Program: Course Information w/ Dictionaries
#Write a program that creates a dictionary containing course numbers and room numbers of the rooms where the courses meet,the names of the instructors that teach each course, and the meeting times of each course.
#Thomas Wolf
#11/4/19

look='yes'
while look=='yes':
    info={'CS101':[3004,'Haynes','8:00am'],'CS102':[4501,'Revis','9:00am'],'CS103':[6755,'Buck','10:00am'],'NT110':[1244,'Hamby','11:00am'],'CM241':[1411,'Smith','12:00pm']}
    course=input("Enter course")
    if course in info:
        print(info[course])
        look=input("Would you want to lookup another class?")
        look=look.lower()
        
    else:
        print("Function not found")
        add=input("Would you like to add the course?")
        add=add.lower()
        while add=='yes':
            name=input("Enter course name")
            room=int(input("Enter room number"))
            instructor=input("Enter instructor name")
            time=input("Enter the meeting time")
            info[name]=[room,instructor,time]
            print(info[name])
            add=input("Would you like to add another course?")
            add=add.lower()
        look=input("Would you want to lookup another class?")
        look=look.lower()

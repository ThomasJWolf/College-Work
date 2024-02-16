#Chapter 9 Dictionaries and Sets
#
#Thomas Wolf
#11/21/19

import pickle

hallway_teacher={'E-239':'Revis','F-240':'Buck','E-241':'Phillips','F-242':'Jones','E-243':"O'Dell",'F-246':'Smalls','E-245':'Hudacko','F-244':'Rice','E-250':'Schmaus','F-248':'Donner'}
hallway_subject={'E-239':'Computer Science','F-240':'Marine Science','E-241':'Special Education','F-242':'Social Studies','E-243':'Social Studies','F-246':'Social Studies','E-245':'Social Studies','F-244':'Social Studies','E-250':'Social Studies','F-248':'Social Studies'}

def main():
    chose=int(input("What would you like to do?\n1. Look up classroom\n2. Modify teacher\n3. Delete classroom\n4. Add classroom\n5. Quit"))
    if chose==1:
        room_num()
        main()
    elif chose==2:
        teacher()
        main()
    elif chose==3:
        delete()
        main()
    elif chose==4:
        add()
        main()
    else:
        end()
        quit

def room_num():
    classroom=input("What classroom number would you like to look up? EX) A-123")
    print()
    classroom=classroom.upper()
    if classroom in hallway_teacher:
        print("The Teacher and subject for room number",classroom,"is",hallway_teacher[classroom],"and",hallway_subject[classroom])
        print()
    else:
        again=input("ERROR: Classroom number not found, do you want to try again? yes or no")
        print()
        again=again.lower()
        if again=='yes':
            room_num()
        else:
            main()

def teacher():
    classroom=input("What classroom would you like change the teacher in? EX) A-123")
    print()
    classroom=classroom.upper()
    if classroom in hallway_teacher:
        change=input("What would you like to rename the teacher?")
        hallway_teacher[classroom]=change
        print("The Teacher and subject for room number",classroom,"is now",hallway_teacher[classroom],"and",hallway_subject[classroom])
        print()
    else:
        again=input("ERROR: Classroom number not found, do you want to try again? yes or no")
        print()
        again=again.lower()
        if again=='yes':
            teacher()
        else:
            main()

def delete():
    classroom=input("What classroom number would you like delete? EX) A-123")
    classroom=classroom.upper()
    if classroom in hallway_teacher:
        del hallway_teacher[classroom]
        del hallway_subject[classroom]
        print("It had been deleted")
        print()
    else:
        again=input("ERROR: Classroom number not found, do you want to try again? yes or no")
        print()
        again=again.lower()
        if again=='yes':
            delete()
        else:
            main()

def add():
    classroom=input("What classroom number would you like add? EX) A-123")
    add_teacher=input("What is the name of the teacher you want to add?")
    add_subject=input("What is the name of the subjust you want to add?")
    print()
    hallway_teacher[classroom]=add_teacher
    hallway_subject[classroom]=add_subject
    print("It is done")

def end():
    file=open('Chapter 9 Dictionaries and Sets File.dat','wb')
    pickle.dump(hallway_teacher,file)
    pickle.dump(hallway_subject,file)
    file.close()
    quit

main()

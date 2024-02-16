#SJH Parking
#Thomas Wolf
#4/29/21

#This program only works partly

def main():
    run=0
    under_spots=249
    senior_spots=0
    name=''
    classes=''
    grade={}
    under_parking={}
    senior_parking={}
    repeat='yes'
    while repeat=='yes' or repeat=='y':
        choice=int(input("What would you like to do?\n1. Student parking registration\n2. See Underclassmen parking\n3. See Senior parking\n4. Administrator\n5. Quit\n:"))
        if choice==1:
            registration(grade,under_parking,senior_parking,under_spots,senior_spots,run)
            repeat=input("\nWould you like to go again?\n:")
            repeat=repeat.lower()
        elif choice==2:
            underclassmen(name,classes,grade,under_parking,under_spots,run)
            repeat=input("\nWould you like to go again?\n:")
            repeat=repeat.lower()
        elif choice==3:
            senior(name,classes,grade,senior_parking,senior_spots)
            repeat=input("\nWould you like to go again?\n:")
            repeat=repeat.lower()
        elif choice==4:
            administrator(grade,under_parking,senior_parking,under_spots,senior_spots)
            repeat=input("\nWould you like to go again?\n:")
            repeat=repeat.lower()
        else:
            quit

def registration(grade,under_parking,senior_parking,under_spots,senior_spots,run):
    temp_under=under_spots
    repeat='yes'
    while repeat=='yes' or repeat=='y':
        student=int(input("How many students are you entering?"))
        for i in range(student):
            print(run)
            under_spots+=run
            print("\nWhat is student ",i+1,"'s grade?",sep='')
            classes=int(input(':'))
            name=input("\nWhat is the students name?\n:")
            if classes==9 or classes==10 or classes==11:
                underclassmen(name,classes,grade,under_parking,under_spots,run)
                name=''
                classes=''
            elif classes==12:
                underclassmen(name,classes,grade,senior_parking)
                name=''
                classes=''

                

def underclassmen(name,classes,grade,under_parking,under_spots,run):
    if name=='':
        if under_spots<250:
            print("\nThere are",250-under_spots,"spots left in the underclassmen parking lot\n")
        else:
            print("There are no parking spots left for underclassmen\n")
    else:
        if under_spots<250:
            print("\nThere are",250-under_spots,"spots left in the underclassmen parking lot\n")
            num=input("Would you like to add this student to the parking lot for $30? yes or no\n:")
            num=num.lower()
            if num=='yes' or num=='y':
                grade.update({name:classes})
                under_parking.update({name:30})
                under_spots+=1
                run+=1
                print("\nDone\n")
        else:
            print("There are no parking spots left for underclassmen")
            repeat='no'
    return(name,classes,under_spots,run)
    

main()

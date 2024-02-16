#Tardys and Absences
#ThomasWolf
#4/26/21

def main():
    tardys={'Alex':2,'Jake':6,'Matt':4}
    absences={'Alex':4,'Jake':3,'Matt':8}
    grades={'Alex':12,'Jake':12,'Matt':11}
    repeat='yes'
    while repeat=='YES' or repeat=='Yes' or repeat=='yes' or repeat=='Y' or repeat=='y':
        choice=int(input("\nWhat would you like to do?\n1. Add students\n2. See tardys\n3. See absences\n4. Quit\n:"))
        if choice==1:
            data_collection(absences,tardys,grades)
            repeat=input("\nWould you like to go again?\n:")
        elif choice==2:
            tardy(absences,tardys,grades)
            repeat=input("\nWould you like to go again?")
        elif choice==3:
            absence(absences,tardys,grades)
            repeat=input("\nWould you like to go again?")
        else:
            print("Thnak you for using my program")
            quit

def data_collection(absences,tardys,grades):
    repeat='yes'
    while repeat=='YES' or repeat=='Yes' or repeat=='yes' or repeat=='Y' or repeat=='y':
        if bool(tardys):
            print("\nHere is who is currently in the database")
            print("Name\t\tGrade\t\tTardys\t\tAbsences")
            for i in tardys:
                print(i,'\t\t',grades.get(i),'\t\t',tardys.get(i),'\t\t',absences.get(i),sep='')
        else:
            print("\nThere seems to be nobody in the database yet")
        kids=int(input("\nHow many kids do you want to add?\n:"))
        for i in range(kids):
            name=input("\nWho would you like to add?\n:")
            temp_grade=int(input("\nEnter what grade there in\n:"))
            temp_tardy=int(input("\nEnter how many tardys they have\n:"))
            temp_absence=int(input("\nEnter how many absences they have\n:"))
            tardys.update({name:temp_tardy})
            absences.update({name:temp_absence})
            grades.update({name:temp_grade})
        print("Name\t\tGrade\t\tTardys\t\tAbsences")
        for i in tardys:
            print(i,'\t\t',grades.get(i),'\t\t',tardys.get(i),'\t\t',absences.get(i),sep='')
        repeat=input("\nWould you like to add more?\n:")

def tardy(absences,tardys,grades):
    repeat='yes'
    while repeat=='YES' or repeat=='Yes' or repeat=='yes' or repeat=='Y' or repeat=='y':
        if bool(tardys):
            filler=0
        else:
            data_collection(absences,tardys)
        print("\nHere are all of the kids\n:")
        for i in tardys:
            print(i)
            if tardys.get(i)>=5:
                print(i,"has more than 5 tardys")
        kids=int(input("\nHow many kids do you want to see?\n:"))
        while kids!=0:
            select=input("\nWhich kid's tardys do you want to see?\n:")
            if select in tardys:
                print("\n",select," is in ",grades.get(select),"th grade and has ",tardys.get(select)," tardys",sep="")
                kids-=1
            else:
                print("That kid is not in the database")
        repeat=input("\nWould you like to see more?\n:")

def absence(absences,tardys,grades):
    repeat='yes'
    while repeat=='YES' or repeat=='Yes' or repeat=='yes' or repeat=='Y' or repeat=='y':
        if bool(absences):
            filler=0
        else:
            data_collection(absences,tardys)
        print("\nHere are all of the kids\n:")
        for i in absences:
            print(i)
            if absences.get(i)>=5:
                print(i,"has more than 5 absences")
        kids=int(input("\nHow many kids do you want to see?\n:"))
        while kids!=0:
            select=input("\nWhich kid's absences do you want to see?\n:")
            if select in absences:
                print("\n",select," is in ",grades.get(select),"th grade and has ",absences.get(select)," absences",sep="")
                kids-=1
            else:
                print("That kid is not in the database")
        repeat=input("\nWould you like to see more?\n:")

    

main()

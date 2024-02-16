#Lists Practice 3
#Lists Practice 3
#Thomas Wolf
#9/10/19
#Sorces: NONE

which_test=5
if which_test==1:
    num1=list(range(0,5))

    nums=[0,1,2,3,4]
    print(nums)
    nums[4]=6
    print(nums)

    nums2=list(range(5,15,3))
    print(nums2)

    nums+=nums2 #+= is equal to x=x+y
    print(nums)
    
if which_test==2:
    boys=['john','james','joey']
    girls=['sarah','susan','salad']
    all_names=boys+girls
    print(all_names)

    middle_students=all_names[2:4]
    print(middle_students)

if which_test==3:
    days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saderday']
    weekend=days[0:7:6]
    weekdays=days[1:6]
    middays=days[2:5] 
    print(weekend)
    print(weekdays)
    print(middays)

    print(days[2:])
    print(days[:5])

if which_test==4:
    boys=['john','james','joey']
    girls=['sarah','susan','salad']
    all_names=boys+girls

    if 'salad' in all_names:
        print('salad is present')
    else:
        print('salad be gone')
    
    if 'tommy' in all_names:
        print('tommy is present')
    else:
        print('tommy be gone')

if which_test==5:
    boys=['john','james','joey']
    girls=['sarah','susan','salad']
    all_names=boys+girls

    user=input("Enter the name of the child you are looking for")
    if user in all_names:
        print(user,'is present')
    else:
        print(user,'has been gone')
    

#Lists Method Practace
#Lists Method Practace
#Thomas Wolf
#9/10/19
#Sorces: NONE

teams=['Patriots','Steelers','Raiders','Cowboys']
user_entry=input("Which team are you looking for?")
if user_entry not in teams:
    teams.append(user_entry)
    print(user_entry,"successfully added")
for i in teams:
    print(i)

new_team=input("Which team would you like to add?")
location=int(input("Whith location would you like to add the team?"))
teams.insert(location-1,new_team)
for i in teams:
    print(i)

teams.sort()
print(teams)

teams.reverse()
print(teams)

remove=input("Which team would you like to remove?")
if remove in teams:
    teams.remove(remove)
    print(teams)
else:
    print(remove,"not in list")

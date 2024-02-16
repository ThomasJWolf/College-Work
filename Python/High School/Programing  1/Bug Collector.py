#Thomas Wolf
#11/28/2018
#Bug Collector

days=int(input("How many days have you collected bugs for?"))
total=0
for i in range(days):
    bugs=int(input("How many bugs have you collected today?"))
    total=total+bugs
print("you have collected",total,"bugs in",days,"days")

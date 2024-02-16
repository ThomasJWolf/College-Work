#Thomas Wolf
#11/26/2018
#Restaurant Waiter

num_days=int(input("Enter the number of days you worked"))
total=0
for i in range(num_days):
    tips=float(input("How much mney in tips did you make today?"))
    total=total+tips
print("You have collected",total,"dollers in",num_days,"days")

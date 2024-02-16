#Enrichment Program: Rainfall Statistics
#Design a program that lets the user enter the total rainfall for each of the 12 months into a list. 
#Thomas Wolf
#9/11/19
#Sorces: NONE

rain_list=[]
months=12
total=0
index=0
month_num=1
for i in range(months):
    rain=float(input("How much rainfall is in month"))
    rain_list.append(rain)
    total+=rain
print("Month\tAmount of rainfall")
print("*************************")
month_num=1
for i in rain_list:
    print(month_num,'\t',rain_list[index])
    index+=1
    month_num+=1
rain_list.sort()
print("Total Rainfall:",total)
print("Lowest Rainfall:",min(rain_list))
print("Highest Rainfall:",max(rain_list))
print("Average Rainfall:",format(total/12),'2f')



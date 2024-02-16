#Enrichment Program: Number Analysis Program
#Design a program with a series of 20 random numbers.
#Thomas Wolf
#9/13/19
#Sorces: NONE

import random
random_nums=[random.randint(0,1000) for i in range(5)]
print(random_nums)
print("Lowest number in list",min(random_nums))
print("Hightst number in list",max(random_nums))
print("The total is",sum(random_nums))

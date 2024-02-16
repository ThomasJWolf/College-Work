#Thomas Wolf
#12/7/2018
#random

#random integer between specified values/arguments
import random
#random integer (randint)
num1=random.randint(1,50)
print("The random number is",num1)
#ranom range (series)
num2=random.randrange(1,50,3)
print("The random number is",num2)
#random float number without arguments will always be 0.0 1.0
num3=random.random()
print("The random number is",num3)
#random floar numbers with arguments
num4=random.uniform(2.5,25.5)
print("The random number is",num4)

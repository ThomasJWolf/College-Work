import random
#random integer
num1=(random.randint(1,50))
print(num1)

#random integer within a range
num2=random.randrange(0,50,2)
print(num2)

#random float can specify arguments
num3=random.uniform(1,50)
print(num3)

#random float cannot specify arguemts
num4=random.random()
print(num4)

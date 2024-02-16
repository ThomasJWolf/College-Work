#Thomas Wolf
#10/26/2018
#if statement practace

name=input("What is your name?")
age=int(input("What is your age?"))
if name=="Thomas Wolf":
    print("same name")
else:
    print("lame name")



age=int(input("What is your age?"))
if age==14:
    print("same age")
if age<14:
    print("younger")
if age>14:
    print("older")



num_cars=int(input("How many cars have you sold this month?"))
sales_volume=float(input("What is the volume for cars this month"))
if num_cars>=5 and sales_volume>= 50000:
    print("Good job, get 5,000")
else:
    print("YOU FALED YOU BAD")
if sales_volume >=21000 and sales_volume<= 75000:
    print("YOU GET 10,000 MOR DOLALRS")

#Thomas Wolf
#10/29/2018
#if statement practace contunued

print(format(12345.6789,',.2f'))
print(format(12345.6789,'.2%'))

t1=float(input("What was your grade on test1?"))
t2=float(input("What was your grade on test2?"))
t3=float(input("What was your grade on test3?"))
avarage=((t1+t2+t3)/3)
print=("Your avarage is",format(avarage,'.2f'))
if avarage>=90:
    print("You earned an A")
elif avarage>=80 and avarage<89:
    print("You earned an B")
elif avarage>=70 and avarage<79:
    print("You earned an C")
elif avarage>=60 and avarage<69:
    print("You earned an D")
else:
    print("YOU FAILED")

temperature=float(input("What is the temperature?"))
if temperature < 20 and minutes > 12:
    print("The temperature is in the danger zone.")
if temperature < 20 or minutes > 100:
              print("The temperature is too extreme.")
if not(temperature> 100):
              print("The temperature is below the maximum")



#Enrichment Program: Rental Information Collection
#Thomas Wolf
#8/26/19
#Sources: NONE
#Program should display each segment of information back to the user

name=str(input("Enter name:"))
age=int(input("Enter age:"))
address=input("Enter address(street, city, state, zip):")
phone=str(input("Enter phone number(xxx-xxx-xxxx):"))
bed=int(input("Enter number of bedrooms:"))
bath=float(input("Enter number of bathrooms:"))
cost_per_night=float(input("Enter desired cost per night:"))
num_nights=int(input("Enter number of nights to stay:"))

print("Name:",name)
print("Age:",age)
print("Address:",address)
print("Phone:",phone)
print("Bed:",bed)
print("Bath:",bath)
print("Cost per Night:",cost_per_night)
print("Number of Nights:",num_nights)


subtotal=cost_per_night*num_nights
tax=subtotal*.09
total=subtotal+tax

print("Estimate of Stay")
print("**********")
print("Subtotal:",subtotal)
print("Tax:",tax)
print("Total:",total)

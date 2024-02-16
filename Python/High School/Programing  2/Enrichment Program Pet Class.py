#Enrichment Program: Pet Class
#Thomas Wolf
#12/11/19

import Pet
pet_list=[]
num_pet=int(input("Enter how many pets are you entering?"))
for i in range(num_pet):
    name=input("Enter the name of the pet") 
    animal=input("Enter the type of pet")
    age=input("Enter the pet's age")


    pet=Pet.Pets(name,animal,age)
    pet_list.append(pet)
for i in pet_list:
    print()
    print("Name: ",i.get_name())
    print("Animal Type: ",i.get_animal_type())
    print("Age: ",i.get_age())
    print()

#
#Thomas Wolf
#4/16/21

def main():
    workers={}
    get_info(workers)
    calculate(workers)

def get_info(workers):
    count=int(input("how many employes do you want to input?"))
    for i in range(count):
        print("What is the name of worker number",i+1)
        person=input()
        wage=float(input("What is their hourly wage?"))
        workers.update({person:wage})

def calculate(workers):
    again='yes'
    while again=="yes" or again=="Yes" or again=="y" or again=="Y":
        worker_calc=input("Which employe do you want to calculate pay for?")
        if worker_calc in workers:
            hours=float(input("How many hours did they work?"))
            pay=(workers.get(worker_calc))*hours
            print("The pay for",worker_calc,"is",pay)
        else:
            print("This worker is not in the system")
        again=input("Would you like to calculate another employe?")

main()

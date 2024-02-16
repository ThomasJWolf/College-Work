#Thomas Wolf
#12/11/2018
#Automobile Costs

def main():
    monthly()
    annual()

def monthly():
    Loan_Payment=float(input("What are your monthy expenses for Loan Payment ?"))
    Insurance=float(input("What are your monthy expenses for Insurance ?"))
    Gas=float(input("What are your monthy expenses for Gas ?"))
    Oil=float(input("What are your monthy expenses for Oil ?"))
    Tires=float(input("What are your monthy expenses for Tires ?"))
    Maintenance=float(input("What are your monthy expenses for Maintenance ?"))
    monthly_total=Loan_Payment+Insurance+Gas+Oil+Tires+Maintenance
    print("Your monthly cost is",monthly_total)

def annual(monthly_total):
    annual_total=monthly_total*12
    print("Your annual total is",annual_total)

main()

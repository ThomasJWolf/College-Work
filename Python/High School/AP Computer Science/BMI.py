#BMI
#Thomas Wolf
#3/30/21

def main():
    total=0
    cont='yes'
    while cont=='yes':
        w=float(input("Enter whight in pounds"))
        h=float(input("Enter hight in inches"))
        result,bmi_list=calc(w,h)
        BMI(result)
        cont=input("Do you have another calculation to preform?")

        for i in bmi_list:
            total=total+i
        ave_bmi=total/len(bmi_list)
        print("Avarage BMI for all calculations:",format(ave_bmi,'.2f'))

def calc(w,h):
    bmi_list=[]
    result=w*703/h**2
    bmi_list.append(result)
    return result,bmi_list


def BMI(result):
    if result<18.5:
        print("Your BMI is",format(result,'.2f'),"you are underweight")
    elif result>=18.5 and result<=25:
        print("Your BMI is",format(result,'.2f'),"you are optimal")
    elif result>25:
        print("Your BMI is",format(result,'.2f'),"you are overweight")

main()

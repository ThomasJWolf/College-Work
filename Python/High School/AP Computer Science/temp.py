#temp
#Thomas Wolf
#4/12/21

from statistics import mean

def main():
    temp_list=[]
    collect(temp_list)
    calc(temp_list)


def collect(temp_list):
    days=int(input('How many days pf spring break did you have?'))
    for i in range(days):
        print("What was the temp for day",i+1)
        temp=float(input())
        temp_list.append(temp)
    return temp_list


def calc(temp_list):
    print("The lowest temp was",min(temp_list))
    print("The highest temp was",max(temp_list))
    print("The avarage temp was",mean(temp_list))

main()
    
    
        
    

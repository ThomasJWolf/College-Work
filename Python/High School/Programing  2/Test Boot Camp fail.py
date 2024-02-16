#Test Boot Camp
#Test
#Thomas Wolf
#8/30/19
#Sources:NONE

import random
expence_total=0
expence_name=''
expence_name_indent=''
expence_num=int(input("How many expences do you have?"))
for i in range(expence_num):
    expence_name=''
    expence=str(input("What is the expence?"))
    expence_cost=float(input("How much did the expence cost?"))
    expence_total=expence_total+expence_cost
    
    #expence_name=expence_name+expence
    #expence_name_indent=expence_name_indent+expence_name
    #indent='\t'
    #expence_name_indent=expence_name_indent+indent
    #expence_cost_collect=expence_cost+indent
    print("-------------")
#print(expence_name_indent)
#print("-------------")
#print(expence_cost_collect)

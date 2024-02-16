#Numbers to strings for files
#Numbers to strings for files
#Thomas Wolf
#9/24/19
#Sorses: NONE

def write():
    file=open('weight.txt','w')
    num_weights=5
    for i in range(num_weights):
        weight=float(input("Enter your weigh in pounds"))
        weight=format(weight,'.1f')
        weight=str(weight)
        file.write(weight+'\n')
    file.close()

def read():
    file=open('weight.txt','r')
    weights=[]
    line=file.readline()
    #line=line.rstrip()
    #line=float(line)
    #weights.append(line)
    while line!='':
        line=line.rstrip('\n')
        line=float(line)
        weights.append(line)
        line=file.readline()
    file.close()
    #del weights[-1]
    #weights=float9i0 for i in weights]
    avarage=sum(weights)/len(weights)
    print("Avarage Weights of All Patients:",avarage)
    file.close()

write()
read()

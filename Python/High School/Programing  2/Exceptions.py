#Exceptions
#
#Thomas Wolf
#10/1/19
#Source: NONE

try:
    file=open('numbers.txt','r')
    nums=[]
    line=file.readline()
    while line!='':
        line=line.rstrip('\n')
        line=float(line)
        nums.append(line)
        line=file.readline()
except FileNotFoundError:
    print("File Not Found")

except ValueError:
    print("Info in file can not be read")

except NameError:
    print("file name not found")

else:
    avarage=sum(nums)/len(nums)
    print("Avarage:",avarage)
    file.close()

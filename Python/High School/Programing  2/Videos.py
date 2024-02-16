#Videos
#
#Thomas Wolf
#9/25/19
#Sorces: NONE

def write():
    file=open('Videos.txt','w')
    video_nums=int(input("How many videos are in the project?"))
##    file.write("Video runtimes:"+'\n')
##    file.write('--------------'+'\n')
    for i in range(video_nums):
##        name=input("What is the name of the video?")
        length=float(input("What is the length of the video in minutes?"))
        length=str(length)
        file.write(length+'\n')
    file.close()

def read():
    file=open('Videos.txt','r')
    amount=[]
    line=file.readline()
    while line!='':
        line=line.rstrip('\n')
        line=float(line)
        amount.append(line)
        line=file.readline()
    file.close()
    print(amount)
    avarage=sum(amount)/len(amount)
    print("There are",len(amount),"videos")
    print("The total amout of time is",sum(amount))
    print("Avarage Length of All Videos is:",avarage)
    
write()
read()

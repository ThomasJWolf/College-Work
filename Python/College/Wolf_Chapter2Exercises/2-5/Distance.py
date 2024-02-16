#Thomas Wolf
#9/7/22
#Distance calculator

def main():
    speed=float(input("Enter your speed\n"))#sets speed
    time1=float(input("Enter your first time\n"))#sets the times
    time2=float(input("Enter your second time\n"))
    time3=float(input("Enter your third time\n"))

    print("If you go {} miles per hour for {} hours you will go {} miles".format(speed,time1,speed*time1))#Displays the distance for the times
    print("If you go {} miles per hour for {} hours you will go {} miles".format(speed,time1,speed*time2))
    print("If you go {} miles per hour for {} hours you will go {} miles".format(speed,time1,speed*time3))

if __name__=='__main__':
    main()

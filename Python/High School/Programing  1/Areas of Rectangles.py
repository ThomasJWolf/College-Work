#Thomas Wolf
#11/1/2018
#Areas of Rectangles

length1=float(input("What is the length of the first rectangle?"))#asks the user the length of rectangle 1
width1=float(input("What is the width of the first rectangle?"))#asks the user the width of rectangle 1
length2=float(input("What is the length of the second rectangle?"))#asks the user the length of rectangle 2
width2=float(input("What is the width of the second rectangle?"))#asks the user the width of rectangle 2
rec1=(length1*width1)#Multiplys the first rectangles length and width
rec2=(length2*width2)#Multiplys the second rectangles length and width
if rec1>rec2:#checks if rectangle 1 is bigger than rectangle 2
    print("rectangle 1 is bigger")#if rectangle 1 is bigger is displays that rectangle 1 is bigger
elif rec1<rec2:#checks if rectangle 2 is bigger than rectangle 1
    print("rectangle 2 is bigger")#if rectangle 2 is bigger is displays that rectangle 2 is bigger
elif rec1==rec2:#checks to see if both rectangle are equal
    print("They are equal")#if both rectangles are the same it displays both rectangles are the same
else:#checks if there is an error
    print("ERROR")#if there is an error it displays that there is an error

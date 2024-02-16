#Thomas Wolf
#10/30/2018
#Roulette Wheel Colors

pocket=int(input("What is your pocket number in the range of 0-36?"))
if pocket==0:
    print("Your pocket is green")
elif pocket==1 or pocket==3 or pocket==5 or pocket==7 or pocket==9 or pocket==12 or pocket==14 or pocket==16 or pocket==18 or pocket==19 or pocket==21 or pocket==23 or pocket==25 or pocket==27 or pocket==30 or pocket==32 or pocket==34 or pocket==36:
    print("Your pocket is red")
elif pocket==2 or pocket==4 or pocket==6 or pocket==8 or pocket==10 or pocket==11 or pocket==13 or pocket==15 or pocket==17 or pocket==20 or pocket==22 or pocket==24 or pocket==26 or pocket==28 or pocket==29 or pocket==31 or pocket==33 or pocket==35:
    print("Your pocket is black")
elif pocket>36 or pocket<0:
    print("INVALED NUMBER")

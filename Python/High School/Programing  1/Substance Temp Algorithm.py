#Thomas Wolf
#11/15/2018
#Substance Temp Algorithm

import time
temp=float(input("What is the temperature?"))
while temp>102.5:
    print("Turn down the thermostat and wait 5 minutes then check the temp again")
    time.sleep(15)
    temp=float(input("What is the temperature?"))
print("The temperature is acceptable, check again after 15 min")
    

#Thomas Wolf
#12/7/2018
#Random Nummber Guessing Game

import random#imports the random modual
guess=0#sets the variable "guess" value to 0
total=0#sets the variable "total" value to 0
num=1#sets the variable "num" value to 1
try_again="continue"#sets the variable "try_again" to the string value "continue"
while try_again!=("end" or "End" or "END"):#detects if the variable "try_again" has the string value "end" or "End" or "END" and if so the program will end
    total=0#sets the variable "total" value to 0
    guess=11#sets the variable "guess" value to 11
    while guess!=num:#detects if the variable "guess" and "num" have the same numerical value
        guess=int(input("What is your guess?"))#asks the user to enter there guess
        num=random.randint(1,10)#generates a random number between 1-9
        total=total+1#adds 1 to the variable"total"
        if guess>num:#calculates if the variable "guess" is grater than the variable "num" and if so the if statement will commence
                  print("Your guess is too high, please try again")#prints the statement ""Your guess is too high, please try again""
        elif guess<num:#calculates if the variable "guess" is less than the variable "num" and if so the if statement will commence
                  print("Your guess is too low, please try again")#prints the statement ""Your guess is too low, please try again""
        elif guess==num:#calculates if the variable "guess" is equil too the variable "num" and if so the if statement will commence
                  print("You are correct!, your total number of guess's are",total)#prints the statement ""You are correct!, your total number of guess's are",total"
    try_again=input("Play again or end?")#if the user imputs anything but "end" the program will restart

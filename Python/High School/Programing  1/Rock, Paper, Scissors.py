#Thomas Wolf
#12/12/2018
#Rock, Paper, Scissors

import random
guess=1
shoot=1
while shoot==guess:
    shoot=random.randint(1,3)
    guess=int(input("Rock(1), Paper(2), or Scissors(3)?"))
    if shoot!=guess:
        if shoot==1 and guess==2:
            print("The computer guessed rock and you guessed paper so you win!")
        elif shoot==1 and guess==3:
            print("The computer guessed rock and you guessed scissors so the computer wins!")
        elif shoot==2 and guess==1:
            print("The computer guessed paper and you guessed rock so the computer wins!")
        elif shoot==2 and guess==3:
            print("The computer guessed paper and you guessed scissors so you win!")
        elif shoot==3 and guess==1:
            print("The computer guessed scissors and you guessed rock so you win!")
        elif shoot==3 and guess==2:
            print("The computer guessed scissors and you guessed paper so the computer win!")
    elif shoot==guess:
        print("The compurt and you have both guessed the same, try again")
    if shoot==guess:
        shoot=1
    else:
        guess=int(input("Would you like to play again? Yes(1) or No(2)"))
        shoot=1

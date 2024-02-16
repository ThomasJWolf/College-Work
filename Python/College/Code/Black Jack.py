# Thomas Wolf
# Black Jack
# 3/1/23

import random
import validate

def main():
    deck = reset_deck()
    hand_1 = {}
    hand_2 = {}
    for i in range(2):
        value = hand_1
        hand_1 = deal_cards(value, deck)
        value = hand_2
        hand_2 = deal_cards(value, deck)

    total1 = 0
    again = [True, True]
    for i in hand_1:
        total1 += hand_1[i]
    print("Player 1, your total is: {}".format(total1))
    again[0] = validate.yes("Player 1, Do you want to draw another card?\n")

    while again[0] == True:
        total1 = 0
        value = hand_1
        hand_1 = deal_cards(value, deck)
        for i in hand_1:
            total1 += hand_1[i]
        print("Player 1, your total is: {}".format(total1))
        if total1 > 21:
            print("You busted!")
            break
        else:
            again[1] = validate.yes("Player 2, Do you want to draw another card?\n")


    total2 = 0
    for i in hand_2:
        total2 += hand_2[i]
    print("Player 2, your total is: {}".format(total2))
    again[1] = validate.yes("Player 2, Do you want to draw another card?\n")

    while again[1] == True:
        total2 = 0
        value = hand_2
        hand_2 = deal_cards(value, deck)
        for i in hand_2:
            total2 += hand_2[i]
        print("Player 2, your total is: {}".format(total2))
        if total2 > 21:
            print("You busted!")
            break
        else:
            again[1] = validate.yes("Player 2, Do you want to draw another card?\n")

    if total1 == total2:
        print("Its a tie!")
    elif total1 < 22 or total1 > (total2 < 22):
        print("Player 1 Wins!")
    elif total2 < 22 or total2 > (total1 < 22):
        print("Player 2 Wins!")
    elif total1 > 21 and total2 > 21:
        print("You Both Lose!")
    else:
        print("H")


def reset_deck():
    deck = {
        "Ace of Spades": 1, "2 of Spades": 2, "3 of Spades": 3, "4 of Spades": 4,
        "5 of Spades": 5, "6 of Spades": 6, "7 of Spades": 7, "8 of Spades": 8,
        "9 of Spades": 9, "10 of Spades": 10, "Jack of Spades": 10, "Queen of Spades": 10,
        "King of Spades": 10,
        "Ace of Hearts": 1, "2 of Hearts": 2, "3 of Hearts": 3, "4 of Hearts": 4,
        "5 of Hearts": 5, "6 of Hearts": 6, "7 of Hearts": 7, "8 of Hearts": 8,
        "9 of Hearts": 9, "10 of Hearts": 10, "Jack of Hearts": 10, "Queen of Hearts": 10,
        "King of Hearts": 10,
        "Ace of Clubs": 1, "2 of Clubs": 2, "3 of Clubs": 3, "4 of Clubs": 4,
        "5 of Clubs": 5, "6 of Clubs": 6, "7 of Clubs": 7, "8 of Clubs": 8,
        "9 of Clubs": 9, "10 of Clubs": 10, "Jack of Clubs": 10, "Queen of Clubs": 10,
        "King of Clubs": 10,
        "Ace of Diamonds": 1, "2 of Diamonds": 2, "3 of Diamonds": 3, "4 of Diamonds": 4,
        "5 of Diamonds": 5, "6 of Diamonds": 6, "7 of Diamonds": 7, "8 of Diamonds": 8,
        "9 of Diamonds": 9, "10 of Diamonds": 10, "Jack of Diamonds": 10, "Queen of Diamonds": 10,
        "King of Diamonds": 10
    }

    return deck

def draw_cards(deck,temp):
    total = []
    ace = ["Ace of Spades", "Ace of Hearts", "Ace of Diamonds", "Ace of Clubs"]
    hand = temp
    key = list(deck.keys())
    index = random.randint(0, len(key)-1)
    card = key[index]
    for i in ace:
        if i == card:
            while True:
                ace_value = validate.pos_int("Do you want {} to be 1 or 11?:\n".format(i),"")
                if ace_value == 1:
                    hand[card] = 1
                    total.append(True)
                    break
                elif ace_value == 11:
                    hand[card] = 11
                    total.append(True)
                    break
                else:
                    print("Only 1 or 11")
                    total.append(False)

    if True not in total:
        hand[card] = (deck[card])
    del deck[key[index]]
    return hand

def deal_cards(value, deck):
    hand_value = value
    temp = hand_value
    value = draw_cards(deck,temp)
    print(hand_value)



    return value




if __name__ == "__main__":
    main()
# Thomas Wolf
# Dice
# 3/27/23


import random


class Dice:

    def __init__(self, sides, num_dice):
        self.sides = sides
        self.num_dice = num_dice
        self.dice_list = [1] * num_dice

    def set_sides(self, sides):
        if sides > 1:
            self.sides = sides

    def set_num_dice(self, num_dice):
        if num_dice > 0:
            self.num_dice = num_dice

    def toss(self):
        for i in range(self.num_dice):
            value = random.randint(1, self.sides)
            self.dice_list.append(value)

    def get_dice_list(self):
        return self.dice_list


def main():
    my_dice = Dice(20, 12)
    my_dice.toss()
    print(my_dice.get_dice_list())


if __name__ == "__main__":
    main()

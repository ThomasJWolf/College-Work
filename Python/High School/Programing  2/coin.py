#Coin flip(classes)
#
#Thomas Wolf
#12/3/19

import random
import time

class Coin:
    def __init__(self):
        self.sideup='Heads'

    def flip(self):
        if random.randint(0,1)==0:
            self.sideup='Heads'
        else:
            self.sideup='Tails'

    def get_sideup(self):
        return self.sideup

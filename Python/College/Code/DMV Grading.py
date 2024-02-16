# Thomas Wolf
#
#

import random

def main():
    list=[]
    for i in range(20):
        rand=random.randint(1,4)
        if rand==1:
            grade="A"
        elif rand==2:
            grade="B"
        elif rand==3:
            grade="C"
        elif rand==4:
            grade="D"
        list.append(grade)
    print(list)
    tuple=('B', 'C', 'B', 'A', 'C', 'A', 'D', 'D', 'A', 'D', 'B', 'D', 'D', 'C', 'A', 'B', 'C', 'A', 'C', 'C')
    score=0


if __name__ == "__main__":
    main()
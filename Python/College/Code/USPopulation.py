# Thomas Wolf
# US Population
# 1/18/23

import os
def main():
    if os.path.exists("USPopulation.txt"):
        fp = open("USPopulation.txt", "r")
        population = fp.readlines()
        for index in range(len(population)):
            population[index] = int(population[index])
        fp.close()

        changes=[]
        for index in range(1, len(population)):
            changes.append(population[index] - population[index-1])

        print("The average change is: {}".format(sum(changes)/len(changes)))
        print("The lowest change is in {} and is: {}".format((changes.index(min(changes))+1951),min(changes)))
        print("The highest change is in {} and is: {}".format((changes.index(max(changes))+1951),max(changes)))

    else:
        print("error")

if __name__ == "__main__":
    main()


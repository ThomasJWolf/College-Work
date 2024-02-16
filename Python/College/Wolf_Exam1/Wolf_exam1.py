# Thomas Wolf
# Exam 1
# 1/30/23

import os

def main():
    if os.path.exists("productsales.txt"):
        fp = open("productsales.txt", "r")
        sales = fp.readlines()
        for index in range(len(sales)):
            sales[index] = int(sales[index])
        fp.close()
        display(sales)
    else:
        print("error")


def display(sales):
    print("The total sales are: ${}".format(sum(sales)))
    print("The average sales are: ${}".format(sum(sales)/len(sales)))
    print("The lowest sales are: ${}".format(min(sales)))
    print("The highest sales are: ${}".format(max(sales)))





if __name__ == "__main__":
    main()

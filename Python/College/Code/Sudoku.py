# Thomas Wolf
# Sudoku
# 1/23/23

def main():
    square = [[4, 9, 2], [3, 5, 7], [8, 1, 6]]
    works = []
    num_rows = 3
    num_cols = 3
    works.append(rows(square, num_rows, num_cols))
    works.append(cols(square, num_rows, num_cols))
    works.append(diagonal1(square, num_rows, num_cols))
    works.append(diagonal2(square, num_rows, num_cols))

    if False not in works:
        print("The puzzle is correct")
    else:
        print("The puzzle is wrong")


def rows(square, num_rows, num_cols):
    for row in range(num_rows):
        add = 0
        for col in range(num_cols):
            add += square[row][col]
        if add == 15:
            print("Row {} is correct with {}".format(row + 1, add))
            works = True
            return works
        else:
            print("Row {} is not correct with {}".format(row + 1, add))
            works = False
            return works


def cols(square, num_rows, num_cols):
    for col in range(num_cols):
        add = 0
        for row in range(num_rows):
            add += square[col][row]
        if add == 15:
            print("Column {} is correct with {}".format(col + 1, add))
            works = True
            return works
        else:
            print("Column {} is not correct with {}".format(col + 1, add))
            works = False
            return works


def diagonal1(square, num_rows, num_cols):
    add = 0
    for index in range(num_rows):
        add += square[index][index]
    if add == 15:
        print("Diagonal 1 is correct with {}".format(add))
        works = True
        return works
    else:
        print("Diagonal 1 is not correct with {}".format(add))
        works = False
        return works


def diagonal2(square, num_rows, num_cols):
    add = 0
    for index in range(num_rows):
        add += square[index][(index * -1) - 1]
    if add == 15:
        print("Diagonal 2 is correct with {}".format(add))
        works = True
        return works
    else:
        print("Diagonal 2 is not correct with {}".format(add))
        works = False
        return works


if __name__ == "__main__":
    main()

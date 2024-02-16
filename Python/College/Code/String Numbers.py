# Thomas Wolf
# String Numbers
# 2/1/23

import validate

def main():
    numbers = validate.int_str("Enter a bunch of numbers with no spaces\n:","ERROR")
    total = 0

    for i in numbers:
        total += int(i)

    print("The sum of numbers: {}".format(total))
    print(list(numbers))
    numbers = map(int, numbers)
    print(list(numbers))

if __name__ == "__main__":
    main()
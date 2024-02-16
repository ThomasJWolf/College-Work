# Thomas Wolf
#
#

def main():
    numbers = []
    for index in range(20):
        while True:
            try:
                numbers.append(float(input("Enter number: ")))
                break
            except:
                print("invalid")
    print("Total of all numbers: {}".format(sum(numbers)))
    print("Average of all numbers: {}".format(sum(numbers)/len(numbers)))
    print("Smallest number: {}".format(min(numbers)))
    print("Largest number: {}".format(max(numbers)))

if __name__ == "__main__":
    main()
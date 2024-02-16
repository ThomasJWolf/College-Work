# Thomas Wolf
# 9/21/22
# Age Classifier

def main():
    # Gets age value from user
    age = int(input("What is their age?"))

    # Displays age name based on age value
    if 0 <= age <= 1:
        print("They are an infant")
    elif 1 < age < 13:
        print("They are a child")
    elif 13 <= age < 20:
        print("They are a teenager")
    elif age >= 20:
        print("They are an adult")
    # if invalid value give an error
    else:
        print("-------------------------------\nERROR: Please enter a valid age\n-------------------------------")


if __name__ == '__main__':
    main()

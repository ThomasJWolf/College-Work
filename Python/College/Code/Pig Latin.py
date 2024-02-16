# Thomas Wolf
# 2/13/23
# Pig Latin

import validate

def main():
    temp = ""
    words = []
    sentence = validate.alpha_check_exceptions([" "],"Input a sentence\n:","Only letters and spaces").upper()
    suffix = validate.alpha_check("Enter a suffix\n:","Only letters").upper()
    sentence += " "

    for i in sentence:
        if i == " ":
            words.append(temp)
            temp = ""
        else:
            temp += i
    pig = to_pig(words,suffix)
    from_pig(pig)


def to_pig(words,suffix):
    pig = []
    for i in words:
        if len(i) == 1:
            pig.append(i + suffix)
        else:
            pig.append(i[1:] + i[0] + suffix)

    for i in pig:
        print(i, end=" ")
    print("")
    return (pig)

def from_pig(pig):
    words = []
    for i in pig:
        if len(i) == 3:
            words.append(i[:-2])
        else:
            words.append(i[-3] + i[:-3])
    for i in words:
        print(i, end=" ")

if __name__ == "__main__":
    main()
# Thomas Wolf
# 2/8/23
# No Spaces

import validate

def main():
    my_method()

def my_method():
    temp = ""
    words = []
    sentence = validate.alpha_check_exceptions(["."],"Input a sentence with no spaces and each letter capitalized\n:","No spaces and every words starts capitalized")
    for i in sentence:
        if i.isupper() == True:
            words.append(temp)
            temp = i
        else:
            temp += i
    words.append(temp)
    words.pop(0)
    print(words)

    for i in range(len(words)):
        if i == 0:
            print(words[0],end=" ")
        else:
            print(words[i].lower(),end=" ")

def better_method():
    out = ""
    sentence = validate.alpha_check_exceptions(["."],"Input a sentence with no spaces and each letter capitalized\n:","No spaces and every words starts capitalized")
    for i in sentence:
        if i.isupper() and out != "":
            out = " "
            out += i.lower()
        else:
            out += i
    print(out)

if __name__ == "__main__":
    main()
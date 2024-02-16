# Thomas Wolf
# Morse Code
# 2/1/23

import validate

def main():
    full_name = input("Enter your name\n:")
    spaces = []
    for index in range(len(full_name)):
        if full_name[index] == " " or full_name[index] == "-" :
            spaces.append(index)
    length = len(spaces)+2
    print(spaces)
    initals = []
    for index in range(length):
        print(index, "brds")
        if index == 0:
            name_part = full_name[:spaces[index]]
            initals.append(name_part[0])

        elif index == len(spaces)-1:
            name_part = full_name[spaces[index]+1:]
            initals.append(name_part[0])

        elif index == len(spaces)-2:
            name_part = full_name[spaces[index-1]+1:spaces[index]]
            print(name_part)
            initals.append(name_part[0])

        else:
            name_part = full_name[spaces[index]+1:spaces[index+1]]
            print(name_part)
            initals.append(name_part[0])

    print(initals)


    first = full_name[:spaces[0]]
    middle = full_name[spaces[0]+1:spaces[1]]
    last = full_name[spaces[1]+1:]

    print("Initals: {}.{}.{}.".format(first[0],middle[0],last[0]))

if __name__ == "__main__":
    main()
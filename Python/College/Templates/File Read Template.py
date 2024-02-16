import os
import validate
# def main():
#     first=validate.alpha_check("What is your first name?","Error")
#     last=validate.alpha_check("What is your last name?","Error")
#
#     if os.path.exists("{}_{}.txt".format(last,first)):
#         fp = open("{}_{}.txt".format(last, first), "r")
#         print(fp.readline().strip())
#         print(fp.readline().strip())
#         fp.close()
#     else:
#         print("error")
#
# if __name__ == "__main__":
#     main()

def main():

    if os.path.exists(".txt"):
        fp = open(".txt", "r")
        print(fp.read().splitlines())
        fp.close()
    else:
        print("error")

if __name__ == "__main__":
    main()


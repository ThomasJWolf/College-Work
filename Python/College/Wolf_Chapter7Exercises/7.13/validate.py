# Thomas Wolf
# Validate functions
# 11/7/22

# def main():
#     temp=validate.pos_int("","Error")

def alpha_check(prompt, error):
    while True:
        response = input(prompt)
        if response.isalpha():
            return response
        else:
            print(error)


def integer(prompt, error):
    while True:
        try:
            response = int(input(prompt))
            return response
        except:
            print(error)


def pos_int(prompt, error):
    while True:
        try:
            response = int(input(prompt))
            if int(response) >= 0:
                return response
            else:
                print(error)
        except:
            print(error)


def int_range(range_1, range_2, prompt, error):
    while True:
        try:
            response = int(input(prompt))
            if range_1 <= int(response) <= range_2:
                return response
            else:
                print(error)
        except:
            print(error)

def int_length(length_1, prompt, error):
    while True:
        try:
            response = int(input(prompt))
            if len(str(response)) == length_1:
                return response
            else:
                print(error)
        except:
            print(error)


def floating_point(prompt, error):
    while True:
        try:
            response = float(input(prompt))
            return response
        except:
            print(error)


def pos_float(prompt, error):
    while True:
        try:
            response = float(input(prompt))
            if float(response) >= 0:
                return response
            else:
                print(error)
        except:
            print(error)


def float_range(range_1, range_2, prompt, error):
    while True:
        try:
            response = float(input(prompt))
            if range_1 <= float(response) <= range_2:
                return response
            else:
                print(error)
        except:
            print(error)


def yes(prompt):
    while True:
        try:
            response = input(prompt)
            response.lower()
            if response == "yes" or response == "y":
                return True
            else:
                return False
        except:
            return False


def no(prompt):
    while True:
        try:
            response = input(prompt)
            response.lower()
            if response == "no" or response == "n":
                return False
            else:
                return True
        except:
            return True

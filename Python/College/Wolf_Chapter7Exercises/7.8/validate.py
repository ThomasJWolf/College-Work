# Thomas Wolf
# Validate functions
# 11/7/22

# def main():
#     temp=validate.pos_int("","")


# - - - - - - - - - - - - - - - - - - - - - - - - - alpha/string - - - - - - - - - - - - - - - - - - - - - - - - -
def alpha_check(prompt, error):  # Returns only letters
    while True:
        response = input(prompt)
        if response.isalpha():
            return response
        else:
            print(error)


def alpha_length(length_1, prompt, error):  # Returns letters with the provided length
    while True:
        try:
            response = input(prompt)
            if response.isalpha() and len(response) == length_1:
                return response
            else:
                print(error)
        except:
            print(error)


def str_length(length_1, prompt, error):  # Returns a string with the provided length
    while True:
        try:
            response = input(prompt)
            if len(response) == length_1:
                return response
            else:
                print(error)
        except:
            print(error)
# - - - - - - - - - - - - - - - - - - - - - - - - - alpha/string - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - integers - - - - - - - - - - - - - - - - - - - - - - - - -
def integer(prompt, error):  # Returns an integer
    while True:
        try:
            response = int(input(prompt))
            return response
        except:
            print(error)


def pos_int(prompt, error):  # Returns an positive integer
    while True:
        try:
            response = int(input(prompt))
            if int(response) >= 0:
                return response
            else:
                print(error)
        except:
            print(error)


def int_range(range_1, range_2, prompt, error):  # Returns an integer in the provided range
    while True:
        try:
            response = int(input(prompt))
            if range_1 <= int(response) <= range_2:
                return response
            else:
                print(error)
        except:
            print(error)


def int_length(length_1, prompt, error):  # Returns an integer with the provided length
    while True:
        try:
            response = int(input(prompt))
            if len(response) == length_1:
                return response
            else:
                print(error)
        except:
            print(error)
# - - - - - - - - - - - - - - - - - - - - - - - - - integers - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - floats - - - - - - - - - - - - - - - - - - - - - - - - -
def floating_point(prompt, error):  # Returns a float
    while True:
        try:
            response = float(input(prompt))
            return response
        except:
            print(error)


def pos_float(prompt, error):  # Returns a positive float
    while True:
        try:
            response = float(input(prompt))
            if float(response) >= 0:
                return response
            else:
                print(error)
        except:
            print(error)


def float_range(range_1, range_2, prompt, error):  # Returns a float within the provided range
    while True:
        try:
            response = float(input(prompt))
            if range_1 <= float(response) <= range_2:
                return response
            else:
                print(error)
        except:
            print(error)
# - - - - - - - - - - - - - - - - - - - - - - - - - floats - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - yes/no - - - - - - - - - - - - - - - - - - - - - - - - -
def yes(prompt):  # Returns True if y or yes otherwise returns False
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


def no(prompt):  # Returns False if n or no otherwise returns True
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
# - - - - - - - - - - - - - - - - - - - - - - - - - yes/no - - - - - - - - - - - - - - - - - - - - - - - - -
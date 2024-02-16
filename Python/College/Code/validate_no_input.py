# Thomas Wolf
# Validate functions
# 11/7/22

# def main():
#     temp=validate.pos_int("","")


# - - - - - - - - - - - - - - - - - - - - - - - - - alpha/string - - - - - - - - - - - - - - - - - - - - - - - - -
def alpha_check(prompt):  # Returns only letters
    response = (prompt)
    if response.isalpha():
        return response
    else:
        pass


def alpha_check_exceptions(exceptions, prompt):  # Returns letters and the provided excepted characters
    back = []
    response = (prompt)
    for i in response:
        if i.isalpha() or i in exceptions:
            back.append(True)
        else:
            back.append(False)
    if False not in back:
        return response
    else:
        pass

def alnum_check_exceptions(exceptions, prompt):  # Returns letters and the provided excepted characters
    back = []
    response = (prompt)
    for i in response:
        if i.isalnum() or i in exceptions:
            back.append(True)
        else:
            back.append(False)
    if False not in back:
        return response
    else:
        pass


def alpha_length(length_1, prompt):  # Returns letters with the provided length
    try:
        response = (prompt)
        if response.isalpha() and len(response) == length_1:
            return response
        else:
            pass
    except:
        pass


def str_length(length_1, prompt):  # Returns a string with the provided length
    try:
        response = (prompt)
        if len(response) == length_1:
            return response
        else:
            pass
    except:
        pass


def int_str(prompt):  # Returns letters with the provided length
    try:
        response = (prompt)
        if int(response):
            return response
        else:
            pass
    except:
        pass


# - - - - - - - - - - - - - - - - - - - - - - - - - alpha/string - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - All Numbers/Letters - - - - - - - - - - - - - - - - - - - - - - - - -
def all_num_check(prompt):  # Returns only letters
    response = (prompt)
    if response.isalnum():
        return response
    else:
        pass


def all_num_exceptions(exceptions, prompt):  # Returns letters and the provided excepted characters
    back = []
    response = prompt
    for i in response:
        if i.isalnum() or i in exceptions:
            back.append(True)
        else:
            back.append(False)
    if False not in back:
        return response
    else:
        pass


# - - - - - - - - - - - - - - - - - - - - - - - - - All Numbers/Letters - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - integers - - - - - - - - - - - - - - - - - - - - - - - - -
def integer(prompt):  # Returns an integer
    try:
        response = int((prompt))
        return response
    except:
        pass


def pos_int(prompt):  # Returns an positive integer
    try:
        response = int((prompt))
        if int(response) >= 0:
            return response
        else:
            pass
    except:
        pass


def int_range(range_1, range_2, prompt):  # Returns an integer in the provided range
    try:
        response = int((prompt))
        if range_1 <= int(response) <= range_2:
            return response
        else:
            pass
    except:
        pass


def int_length(length_1, prompt):  # Returns an integer with the provided length
    try:
        response = int((prompt))
        if len(response) == length_1:
            return response
        else:
            pass
    except:
        pass


def int_exceptions(exceptions, prompt):  # Returns integers and the provided excepted characters
    back = []
    response = (prompt)
    for i in response:
        if i.isnumeric():
            try:
                a = int(i)
                back.append(True)
            except:
                back.append(False)
        elif i in exceptions:
            back.append(True)
        else:
            back.append(False)
    if False not in back:
        return response
    else:
        pass


# - - - - - - - - - - - - - - - - - - - - - - - - - integers - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - floats - - - - - - - - - - - - - - - - - - - - - - - - -
def floating_point(prompt):  # Returns a float
    try:
        response = float((prompt))
        return response
    except:
        pass


def pos_float(prompt):  # Returns a positive float
    try:
        response = float((prompt))
        if float(response) >= 0:
            return response
        else:
            pass
    except:
        pass


def float_range(range_1, range_2, prompt):  # Returns a float within the provided range
    try:
        response = float((prompt))
        if range_1 <= float(response) <= range_2:
            return response
        else:
            pass
    except:
        pass


def float_exceptions(exceptions, prompt):  # Returns integers and the provided excepted characters
    back = []
    response = (prompt)
    for i in response:
        if i.isnumeric():
            try:
                a = float(i)
                back.append(True)
            except:
                back.append(False)
        elif i in exceptions:
            back.append(True)
        else:
            back.append(False)
    if False not in back:
        return response
    else:
        pass

# - - - - - - - - - - - - - - - - - - - - - - - - - floats - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - digits - - - - - - - - - - - - - - - - - - - - - - - - -

def digits(prompt):  # Returns a digits
    try:
        response = (prompt)
        if response.isdigit():
            return response
        else:
            pass
    except:
        pass


def digits_exceptions(exceptions, prompt):  # Returns digits and the provided excepted characters
    back = []
    response = (prompt)
    for i in response:
        if i.isdigit():
            back.append(True)
        elif i in exceptions:
            back.append(True)
        else:
            back.append(False)
    if False not in back:
        return response
    else:
        pass


# - - - - - - - - - - - - - - - - - - - - - - - - - digits - - - - - - - - - - - - - - - - - - - - - - - - -

# - - - - - - - - - - - - - - - - - - - - - - - - - yes/no - - - - - - - - - - - - - - - - - - - - - - - - -
def yes(prompt):  # Returns True if y or yes otherwise returns False
    try:
        response = prompt
        response.lower()
        if response == "yes" or response == "y":
            return True
        else:
            return False
    except:
        return False


def no(prompt):  # Returns False if n or no otherwise returns True
    try:
        response = (prompt)
        response.lower()
        if response == "no" or response == "n":
            return False
        else:
            return True
    except:
        return True


# - - - - - - - - - - - - - - - - - - - - - - - - - yes/no - - - - - - - - - - - - - - - - - - - - - - - - -


# - - - - - - - - - - - - - - - - - - - - - - - - - Misc - - - - - - - - - - - - - - - - - - - - - - - - -

def length(length_1, prompt):  # the provided length
    try:
        response = (prompt)
        if len(response) == length_1:
            return response
        else:
            pass
    except:
        pass

# - - - - - - - - - - - - - - - - - - - - - - - - - Misc - - - - - - - - - - - - - - - - - - - - - - - - -

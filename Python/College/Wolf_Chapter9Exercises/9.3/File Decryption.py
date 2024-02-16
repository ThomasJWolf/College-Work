# Thomas Wolf
# File Decryption
# 3/20/23

import os  # Imports the os

TRANSLATE_DICT = {' ': '/', 'A': '!', 'B': '@',
                  'C': '#', 'D': '$', 'E': '%',
                  'F': '^', 'G': '&', 'H': '*',
                  'I': '(', 'J': ')', 'K': '-',
                  'L': '_', 'M': '=', 'N': '+',
                  'O': '[', 'P': ']', 'Q': '{',
                  'R': '}', 'S': '|', 'T': ';',
                  'U': ':', 'V': '"', 'W': ',',
                  'X': '<', 'Y': '.', 'Z': '>',
                  'a': '1', 'b': '2', 'c': '3',
                  'd': '4', 'e': '5', 'f': '6',
                  'g': '7', 'h': '8', 'i': '9',
                  'j': '0', 'k': 'a', 'l': 'b',
                  'm': 'c', 'n': 'd', 'o': 'e',
                  'p': 'f', 'q': 'g', 'r': 'h',
                  's': 'i', 't': 'j', 'u': 'k',
                  'v': 'l', 'w': 'm', 'x': 'n',
                  'y': 'o', 'z': 'p', '1': 'A',
                  '2': 'B', '3': 'C', '4': 'D',
                  '5': 'E', '6': 'F', '7': 'G',
                  '8': 'H', '9': 'I', '0': 'J',
                  ',': 'K', '.': 'L', '?': 'M',
                  '/': 'N', '-': 'O', '(': 'P',
                  ')': 'Q',"'": 'R', '!': "S",
                  ':': 'T','"': 'U'}

# Defines the translation dictionary

def main():
    if os.path.exists("text1.txt"):  # Checks to see if text1 exists and appends it to encrypt list
        fp = open("text1.txt", "r")
        encrypt = fp.read().splitlines()
        fp.close()
    else:
        print("error")

    encrypt_to_text(encrypt)  # Calls encrypt_to_text with encrypt


def encrypt_to_text(encrypt):
    temp_text = ""  # Sets temp_text and text_string to an empty string and text_list to an empty list
    text_string = ""
    text_list = []
    for text in encrypt:  # Iterates over every line in encrypt as text
        for i in text:  # Iterates over every character in text as i
            for key, val in TRANSLATE_DICT.items():  # Iterates over the items in TRANSLATE_DICT as key and val
                if val == i:  # If val is equal to i
                    temp_text = key  # Sets temp_text to key
                    break  # Break out of the loop
            text_string += temp_text  # Adds the value of temp_text to text_string
            temp_text = ""  # Sets temp_text to an empty string
        text_list.append(text_string)  # Appends text_string to text_list
        text_string = ""   # Sets temp_string to an empty string
    for i in text_list:  # Iterates over every character in text_list as i
        print(i)  # Prints every decrypted line

if __name__ == "__main__":
    main()

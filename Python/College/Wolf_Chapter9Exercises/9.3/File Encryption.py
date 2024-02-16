# Thomas Wolf
# File Encryption
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
    if os.path.exists("text.txt"):  # Checks to see if text exists and appends it to text
        fp = open("text.txt", "r")
        text = fp.read().splitlines()
        fp.close()
    else:
        print("error")

    text_to_encrypt(text)  # Calls text_to_encrypt with text


def text_to_encrypt(text):
    encrypt_list = []  # Sets encrypt_list to an empty list
    for i in text:  # Iterates over every line in text as i
        encrypt_string = ""  # Sets encrypt_string to an empty string
        for y in i:  # Iterates over every character in i as y
            encrypt_string += TRANSLATE_DICT[y]  # Adds the value of TRANSLATE_DICT with the index of y to encrypt_string
        encrypt_list.append(encrypt_string)  # Appends encrypt_string to encrypt_list
    fp = open("text1.txt", "w")  # Opens text1 as write
    for i in encrypt_list:  # Iterates over encrypt_list as i
        fp.write(i)  # Writes i to the file
        fp.write("\n")  # Adds a new line to the end of i
    fp.close()  # Closes the file

if __name__ == "__main__":
    main()

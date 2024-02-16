# Thomas Wolf
# Morse Code
# 2/1/23

MORSE_CODE_DICT = { ' ':'/','A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'}

def main():
    response = input("Enter a message to translate")
    response = response.upper()
    morse = text_to_morse(response)
    morse_to_text(morse)

def text_to_morse(response):
    morse_string = ""
    for text in response:
        try:
            morse_string += MORSE_CODE_DICT[text]
            morse_string += " "
        except:
            print("Bro you stupid as hell")
    print(morse_string)
    return morse_string

def morse_to_text(morse):
    temp_text = ""
    text_string = ""
    for text in morse:
        if text != " ":
            temp_text += text
        else:
            try:
                for key, val in MORSE_CODE_DICT.items():
                    if val == temp_text:
                        temp_text = key
                        break
                text_string += temp_text
                temp_text = ""
            except:
                print("Bro you stupid as hell")
    print(text_string)

    return text_string


if __name__ == "__main__":
    main()
# Thomas Wolf
# A program that takes an input name of a steam game and starts it (configured to my pc at 1440p
# 12/14/22
import time
from pynput.mouse import Listener
import pyautogui as ui

def main():
    y = 0
    i = 0
    tt = time.time()
    while True:
        t = time.time()
        t = t - tt
        if t != i:
            i = t
            i = round(i,3)
            print(i)
            # if (i % (1800 + y)) == 0:
            #     food()
            #     y += 15
            if (i % 900) == 0:
                gold()


# def location_picker():
#     location = []
#     repeat=True
#     while repeat==True:
#         with Listener(on_move=on_move, on_click=on_click, on_scroll=on_scroll) as listener:
#             if ui.click:
#                 location.append(ui.position())
#                 print(1)
#             elif ui.rightClick():
#                 repeat=False
#                 print(2)
#     print(location)

# def game_picker_voice(text):
#     game=text
#     if game in game_list:
#         return game
#     else:
#         return alt_text.alt_text(game)
#
#
# def text_1080p(game):
#     print(game)
#
def gold():
    ui.moveTo(1148, 767, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(968, 308, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1707, 777, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1324, 536, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(504, 567, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1636, 342, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1291, 910, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1305, 164, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()

def gold2():
    ui.moveTo(1148, 767, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1027, 537, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1707, 777, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1324, 536, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(504, 567, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()
    ui.moveTo(1636, 342, duration=.5)
    ui.click()
    ui.moveTo(1750, 1272, duration=.5)
    ui.click()

def food():
    ui.moveTo(785, 638, duration=.5)
    ui.click()
    ui.moveTo(543, 496, duration=.5)
    ui.click()
    ui.moveTo(973, 525, duration=.5)
    ui.click()
    ui.moveTo(775, 432, duration=.5)
    ui.click()
    ui.moveTo(543, 307, duration=.5)
    ui.click()
    ui.moveTo(749, 761, duration=.5)
    ui.click()
    ui.moveTo(1301, 1272, duration=.5)
    ui.click()
    ui.moveTo(2419, 189, duration=.5)
    ui.click()

if __name__ == "__main__":
    main()

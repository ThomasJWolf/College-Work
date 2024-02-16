# Thomas Wolf
#
#

from vosk import Model, KaldiRecognizer
import pyaudio
import steam_starter
import sys

model: Model = Model(r"E:\Programming\Personal Projects\Desktop Assistant\vosk-model-en-us-0.22")
recognizer = KaldiRecognizer(model, 16000)

print("   Start    ")


def main():
    mic_input_keyword()

def mic_input():
    mic = pyaudio.PyAudio()
    stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
    stream.start_stream()
    while True:
        try:
            data = stream.read(4096)
            if recognizer.AcceptWaveform(data):
                text = recognizer.Result()
                text = text.replace("the", "")
                text = text[14:-3]
                text = text.lower()
                text = text.replace(" ", "")
                return text
        except Exception as e:
            print(e)
            print("It crashed :-(")
            mic = pyaudio.PyAudio()
            stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
            stream.start_stream()

def mic_input_keyword():
    while True:
        text=mic_input()
        if text=="okpython" or text=="okaypython":
            ok_python()
        if text=="exit" or text=="quit":
            raise sys.exit()

def ok_python():
    print("What would you like to do?")
    mic = pyaudio.PyAudio()
    stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
    stream.start_stream()

    while True:
        text=mic_input()
        if text=="steam" or text=="games" or text=="steamgames":
            steam_games()
            return
        elif text=="test2" or text=="testtwo":
            test2()
            return
        elif text=="exit" or text=="quit":
            return
        else:
            print("Please enter a valid command")

def steam_games():
    print("What game would you like to launch")
    mic = pyaudio.PyAudio()
    stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
    stream.start_stream()
    while True:
        try:
            text=mic_input()
            if text == "quit" or text == "exit":
                return
            game=steam_starter.game_picker_voice(text)
            if game==None:
                print("Please enter a valid game")
            elif game!="":
                steam_starter.voice_1080p(game)
                return
            else:
                print("Please enter a valid game")
        except Exception as e:
            print(e)
            print("Please enter a valid game")

def test2():
    print("test2")

#def mic_input(recognizer):
#    while True:
#        try:
#            data = stream.read(4096)
#            if recognizer.AcceptWaveform(data):
#                text = recognizer.Result()
#                print(text)
#                print(text[14:-3])
#        except:
#            print("It crashed :-(")
#            mic = pyaudio.PyAudio()
#            stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
#            stream.start_stream()


if __name__ == "__main__":
    main()
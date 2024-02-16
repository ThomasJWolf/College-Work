from vosk import Model, KaldiRecognizer
import pyaudio

#Absolute path by adding 'r'
model: Model = Model(r"G:\Programming Logic and Design (CPT-168-C02)\Personal Projects\Desktop "
                     r"Assistant\vosk-model-en-us-0.22")
recognizer = KaldiRecognizer(model, 16000)

mic = pyaudio.PyAudio()
stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
stream.start_stream()
print("   Start    ")

while True:
    try:
        data = stream.read(4096)
        if recognizer.AcceptWaveform(data):
            text = recognizer.Result()
            print(text)
            print(text.replace("the", ""))
            print(text[14:-3])
    except:
        print("It crashed :-(")
        mic = pyaudio.PyAudio()
        stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
        stream.start_stream()
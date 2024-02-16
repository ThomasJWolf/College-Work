# Thomas Wolf
# Favorite Songs
# 4/12/23

import tkinter as t
import tkinter.messagebox


class MyGui:
    def __init__(self):
        self.main_window = t.Tk()
        self.main_window.title("Favorite Songs")

        self.top_frame = t.Frame(self.main_window)
        self.bottom_frame = t.Frame(self.main_window)

        self.main_label = t.Label(self.top_frame, text="Favorite Songs")
        self.song1_button = t.Button(self.bottom_frame, text="Song 1", command=self.button1_func)
        self.song2_button = t.Button(self.bottom_frame, text="Song 2", command=self.button2_func)
        self.song3_button = t.Button(self.bottom_frame, text="Song 3", command=self.button3_func)
        self.quit = t.Button(self.bottom_frame, text="Quit", command=self.main_window.destroy)

        self.main_label.pack()
        self.song1_button.pack(side="top")
        self.song2_button.pack(side="top")
        self.song3_button.pack(side="top")
        self.quit.pack(side="bottom")

        self.top_frame.pack(side="top")
        self.bottom_frame.pack(side="bottom")

        t.mainloop()

    def button1_func(self):
        t.messagebox.showinfo("Worlds Smallest Violin", "Worlds Smallest Violin\nAJR\nAlt-Pop\n2021")

    def button2_func(self):
        t.messagebox.showinfo("F", "G\nH\nI\nJ")

    def button3_func(self):
        t.messagebox.showinfo("K", "L\nM\nN\nO")


MyGui()

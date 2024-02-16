# Thomas Wolf
# Celebrity Gui
# 4/12/23

import tkinter as t
import tkinter.messagebox


class MyGui:
    def __init__(self):
        self.main_window = t.Tk()
        self.main_window.title("Celebrity Gui")

        self.top_frame = t.Frame(self.main_window)
        self.bottom_frame = t.Frame(self.main_window)

        self.main_label = t.Label(self.top_frame, text="Brittany Spears")
        self.show_info_button = t.Button(self.bottom_frame, text="Show Info", command=self.button1_func)
        self.button2 = t.Button(self.bottom_frame, text="Quit", command=self.main_window.destroy)

        self.main_label.pack()
        self.show_info_button.pack(side="left")
        self.button2.pack(side="left")

        self.top_frame.pack()
        self.bottom_frame.pack()

        t.mainloop()

    def button1_func(self):
        t.messagebox.showinfo("Brittany Spears", "Brittany Spears\nAge: 41\nIt's Brittany Bitch!\n★★★★☆")


MyGui()

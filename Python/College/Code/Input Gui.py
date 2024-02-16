# Thomas Wolf
# Input Gui
# 4/12/23

import tkinter as t
import tkinter.messagebox


class MyGui:
    def __init__(self):
        self.main_window = t.Tk()
        self.main_window.title("Favorite Songs")

        self.label1 = t.Button(self.main_window, text="Enter age")
        self.age = t.Entry(self.main_window, width=20)
        self.quit = t.Button(self.main_window, text="Quit", command=self.main_window.destroy)

        self.submit_button = t.Button(self.main_window, text="Submit", command=self.button1_func)

        self.age_input = t.StringVar()



        self.label1.pack()
        self.age.pack()
        self.age_input.pack()
        self.quit.pack(side="bottom")

        t.mainloop()

    def button1_func(self):
        age = self.age.get()
        if int(age) <= 0:
            t.messagebox.showwarning("Response", "Age cannot be less than 0")
        else:
            self.age_input = age


MyGui()

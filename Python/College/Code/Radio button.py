# Thomas Wolf
# C to F Gui
# 4/17/23

import tkinter as t
import tkinter.messagebox as tm


class MyGui:
    def __init__(self):
        # Create the GUI
        self.main_window = t.Tk()
        self.main_window.title("C to F")
        self.main_window.geometry("300x100")

        # Create the frames
        self.first_frame = t.Frame(self.main_window)
        self.second_frame = t.Frame(self.main_window)
        self.third_frame = t.Frame(self.main_window)

        # Build first frame
        self.rb_value = t.IntVar()
        self.rb_value.set(1)

        self.rb1 = t.Radiobutton(self.first_frame, text="Option 1", variable=self.rb_value, value=1)
        self.rb2 = t.Radiobutton(self.first_frame, text="Option 2", variable=self.rb_value, value=2)
        self.rb3 = t.Radiobutton(self.first_frame, text="Option 3", variable=self.rb_value, value=3)

        self.rb1.pack(side="left")
        self.rb2.pack(side="left")
        self.rb3.pack(side="left")

        # Packs each frame
        self.first_frame.pack()
        self.second_frame.pack()
        self.third_frame.pack()

        t.mainloop()


    def calc_fahrenheit(self):
        try:
            c = float(self.celsius_entry.get())
        except ValueError:
            tm.showerror("Invalid Input", "Invalid Entry for Celsius!")
            return
        f = 9/5 * c + 32
        self.fahrenheit_label.config(text=f"{f:.2f}")




my_mpg = MyGui()

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
        self.c_label = t.Label(self.first_frame, text="Celsius: ")
        self.c_enter = t.Entry(self.first_frame, width=10)

        self.c_label.pack(side="left")
        self.c_enter.pack(side="left")

        # Build second frame
        self.convert_button = t.Button(self.second_frame, text="Convert", command=self.calc_mpg)
        self.quit = t.Button(self.second_frame, text="Quit", command=self.main_window.destroy)

        self.convert_button.pack(side="left")
        self.quit.pack(side="left")

        # Build third frame
        self.out_label = t.Label(self.third_frame, text="Fahrenheit: ")
        self.f_value = t.StringVar()
        self.f_output = t.Label(self.third_frame, textvariable=self.f_value)

        self.out_label.pack(side="left")
        self.f_output.pack(side="left")

        # Packs each frame

        self.first_frame.pack()
        self.second_frame.pack()
        self.third_frame.pack()

        t.mainloop()

    def calc_mpg(self):
        try:
            c = float(self.c_enter.get())
        except:
            tm.showerror("Invalid Input", "Invalid Entry for Celsius!")
            return
        f = (9/5 * c) +32
        f_string = "{:.3f}".format(f)
        self.f_value.set((str(f_string)))




my_mpg = MyGui()

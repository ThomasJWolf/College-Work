# Thomas Wolf
# MPG Gui
# 4/17/23

import tkinter as t
import tkinter.messagebox as tm



class MyGui:
    def __init__(self):
        # Create the GUI
        self.main_window = t.Tk()
        self.main_window.title("Favorite Songs")
        self.main_window.geometry("300x100")

        # Create the frames
        self.first_frame = t.Frame(self.main_window)
        self.first_frame1 = t.Frame(self.first_frame)
        self.first_frame2 = t.Frame(self.first_frame)
        self.second_frame = t.Frame(self.main_window)
        self.third_frame = t.Frame(self.main_window)

        # Build first frame
        self.miles_label = t.Label(self.first_frame1, text="Miles Driven:")
        self.miles_enter = t.Entry(self.first_frame1, width=10)
        self.gallons_label = t.Label(self.first_frame2, text="Gallons Used:")
        self.gallons_enter = t.Entry(self.first_frame2, width=10)

        self.miles_label.pack(side="left")
        self.miles_enter.pack(side="left")
        self.gallons_label.pack(side="left")
        self.gallons_enter.pack(side="left")
        self.first_frame1.pack()
        self.first_frame2.pack()

        # Build second frame
        self.calc_button = t.Button(self.second_frame, text="Calculate MPG", command=self.calc_mpg)
        self.quit = t.Button(self.second_frame, text="Quit", command=self.main_window.destroy)

        self.calc_button.pack(side="left")
        self.quit.pack(side="left")

        # Build third frame
        self.out_label = t.Label(self.third_frame, text="MPG: ")
        self.mpg_value = t.StringVar()
        self.mpg_output = t.Label(self.third_frame, textvariable=self.mpg_value)

        self.out_label.pack(side="left")
        self.mpg_output.pack(side="left")

        # Packs each frame

        self.first_frame.pack()
        self.second_frame.pack()
        self.third_frame.pack()

        t.mainloop()

    def calc_mpg(self):
        try:
            miles = int(self.miles_enter.get())
        except:
            tm.showerror("Invalid Input", "Invalid Entry for Miles!")
            return
        try:
            gallons = float(self.gallons_enter.get())
        except:
            tm.showerror("Invalid Input", "Invalid Entry for Gallons!")
            return
        mpg = miles/gallons
        mpg_string = "{:.3f}".format(mpg)
        self.mpg_value.set((str(mpg_string)))




my_mpg = MyGui()

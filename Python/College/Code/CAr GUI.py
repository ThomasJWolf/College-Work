# Thomas Wolf
# Car Gui
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
        self.top_frame = t.Frame(self.main_window)
        self.middle_frame = t.Frame(self.main_window)
        self.bottom_frame = t.Frame(self.main_window)

        # Build top frame
        self.service_choices = []
        self.service_prices = [30, 20, 40, 100, 35, 200, 20]
        for i in range(7):
            self.temp = t.IntVar()
            self.temp.set(0)
            self.service_choices.append(self.temp)

        self.cb1 = t.Checkbutton(self.top_frame, text="Oil Change - $30.00", variable=self.service_choices[0])
        self.cb2 = t.Checkbutton(self.top_frame, text="Lube Job - $20.00", variable=self.service_choices[1])
        self.cb3 = t.Checkbutton(self.top_frame, text="Radiator Flush - $40.00", variable=self.service_choices[2])
        self.cb4 = t.Checkbutton(self.top_frame, text="Transmission Flush - $100.00", variable=self.service_choices[3])
        self.cb5 = t.Checkbutton(self.top_frame, text="Inspection - $35.00", variable=self.service_choices[4])
        self.cb6 = t.Checkbutton(self.top_frame, text="Muffler Replacement - $200.00", variable=self.service_choices[5])
        self.cb7 = t.Checkbutton(self.top_frame, text="Tire Rotation - $20.00", variable=self.service_choices[6])

        self.cb1.pack()
        self.cb2.pack()
        self.cb3.pack()
        self.cb4.pack()
        self.cb5.pack()
        self.cb6.pack()
        self.cb7.pack()


        # Builds the middle frame
        self.calc_button = t.Button(self.middle_frame, text="Calculate", command=self.calc_total)
        self.clear_button = t.Button(self.middle_frame, text="Clear", command=self.clear_all)
        self.quit_button = t.Button(self.middle_frame, text="Quit", command=self.main_window.destroy)

        self.calc_button.pack(side="left")
        self.clear_button.pack(side="left")
        self.quit_button.pack(side="left")

        # Build the third frame
        self.total_desc = t.Label(self.bottom_frame, text="Total Charge")
        self.total_var = t.StringVar
        self.total_label = t.Label(self.bottom_frame, text="Total Charge")

        self.total_desc.pack()
        self.total_label.pack()


        # Packs each frame

        self.top_frame.pack()
        self.middle_frame.pack()
        self.bottom_frame.pack()

        t.mainloop()

    def calc_total(self):
        total = 0
        for i in range(len(self.service_choices)):
            if self.service_choices[i].get() == 1:
                total += self.service_prices[i]

        

    def clear_all(self):
        for item in self.service_choices:
            item.set(0)


my_mpg = MyGui()

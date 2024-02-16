# Thomas Wolf
# Long-Distance Calls
# 4/17/23

import tkinter as t
import tkinter.messagebox as tm


class MyGui:
    def __init__(self):
        # Defines the main window with the title "Long-Distance Calls" and the size of 400x200 pixels
        self.main_window = t.Tk()
        self.main_window.title("Long-Distance Calls")
        self.main_window.geometry("400x200")

        # Creates frames one though four with 2 sub-frames on the first
        self.first_frame = t.Frame(self.main_window)
        self.first_frame1 = t.Frame(self.first_frame)
        self.first_frame2 = t.Frame(self.first_frame)
        self.second_frame = t.Frame(self.main_window)
        self.third_frame = t.Frame(self.main_window)
        self.forth_frame = t.Frame(self.main_window)

        # Build first frame
        # Sets rb_value to 0
        self.rb_value = t.IntVar()
        self.rb_value.set(0)

        # Defines 4 labels in first_frame1
        self.rate_category = t.Label(self.first_frame1, text="Rate Category")
        self.daytime_label = t.Label(self.first_frame1, text="Daytime (6:00 a.m. through 5:59 p.m.)")
        self.evening_label = t.Label(self.first_frame1, text="Evening (6:00 p.m. through 11:59 p.m.)")
        self.off_peak_label = t.Label(self.first_frame1, text="Off-Peak (midnight through 5:59 a.m.)")

        # Defines a label and 3 radio buttons
        self.rate_per_minute = t.Label(self.first_frame2, text="Rate per Minute")
        self.daytime_radio = t.Radiobutton(self.first_frame2, text="$0.07", variable=self.rb_value, value=1)
        self.evening_radio = t.Radiobutton(self.first_frame2, text="$0.12", variable=self.rb_value, value=2)
        self.off_peak_radio = t.Radiobutton(self.first_frame2, text="$0.05", variable=self.rb_value, value=3)

        # Packs everything in first_frame1 and first_frame1 with it to the left side
        self.rate_category.pack()
        self.daytime_label.pack()
        self.evening_label.pack()
        self.off_peak_label.pack()
        self.first_frame1.pack(side="left")

        # Packs everything in first_frame2 and first_frame2 with it to the left side
        self.rate_per_minute.pack()
        self.daytime_radio.pack()
        self.evening_radio.pack()
        self.off_peak_radio.pack()
        self.first_frame2.pack(side="left")

        # Build second frame
        # Defines a label and an entry variable time_enter
        self.time_label = t.Label(self.second_frame, text="Time: ")
        self.time_enter = t.Entry(self.second_frame, width=10)

        # Packs everything in second_frame to the left side
        self.time_label.pack(side="left")
        self.time_enter.pack(side="left")

        # Build third frame
        # Defines a button that points to the charge function and a button that quits the program
        self.convert_button = t.Button(self.third_frame, text="Calculate", command=self.charge)
        self.quit = t.Button(self.third_frame, text="Quit", command=self.main_window.destroy)

        # Packs everything in third_frame to the left side
        self.convert_button.pack(side="left")
        self.quit.pack(side="left")

        # Build fourth frame
        # Defines p_value as a string and 2 labels
        self.out_label = t.Label(self.forth_frame, text="Price: ")
        self.p_value = t.StringVar()
        self.p_output = t.Label(self.forth_frame, textvariable=self.p_value)

        # Packs everything in fourth_frame to the left side
        self.out_label.pack(side="left")
        self.p_output.pack(side="left")

        # Packs each frame
        self.first_frame.pack()
        self.second_frame.pack()
        self.third_frame.pack()
        self.forth_frame.pack()

        # Loops the program
        t.mainloop()

    def charge(self):
        # If rb_value is equal to 1 then rb_value is equal to .07
        if self.rb_value.get() == 1:
            rb_value = .07
        # If rb_value is equal to 2 then rb_value is equal to .12
        elif self.rb_value.get() == 2:
            rb_value = .12
        # If rb_value is equal to 3 then rb_value is equal to .05
        elif self.rb_value.get() == 3:
            rb_value = .05
        # Try setting time_enter as a float to p
        try:
            p = float(self.time_enter.get())
        # Except print a error as a separate message box
        except ValueError:
            tm.showerror("Invalid Input", "Invalid Entry for time!")
            return
        # Price is p times rb_value
        price = p * rb_value
        # Sets p_value to a 0.00 formatted price
        self.p_value.set("{:.2f}".format(price))


my_price = MyGui()

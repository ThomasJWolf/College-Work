# Thomas Wolf
# Name and Address
# 4/28/23

import tkinter as t


class MyGui:
    def __init__(self):
        # Defines the main window with the title "Info" and the size of 200x100 pixels
        self.main_window = t.Tk()
        self.main_window.title("Info")
        self.main_window.geometry("200x100")

        # Defines top_frame and bottom_frame
        self.top_frame = t.Frame(self.main_window)
        self.bottom_frame = t.Frame(self.main_window)

        # Defines a label in top_frame that prints 3 empty lines
        self.info_label = t.Label(self.top_frame, text="\n\n")
        # Defines a button in bottom_frame that points to the button1_func function
        self.show_info_button = t.Button(self.bottom_frame, text="Show Info", command=self.button1_func)
        # Defines a button in bottom_frame that quits the program
        self.button2 = t.Button(self.bottom_frame, text="Quit", command=self.main_window.destroy)

        # Packs the label and two buttons, with the buttons set to the left
        self.info_label.pack()
        self.show_info_button.pack(side="left")
        self.button2.pack(side="left")

        # Packs top_frame and bottom_frame
        self.top_frame.pack()
        self.bottom_frame.pack()

        # Loops the program
        t.mainloop()

    def button1_func(self):
        # Unpacks the label, reassigns it with 3 lines of data, and repacks it
        self.info_label.pack_forget()
        self.info_label = t.Label(self.top_frame, text="Steven Marcus\n274 Baily Drive\nWaynesville, NC 27999")
        self.info_label.pack()


MyGui()

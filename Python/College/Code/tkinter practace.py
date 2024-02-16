# Thomas Wolf
# Tkinter Practice
# 4/12/23

import tkinter
import tkinter.messagebox


class MyGui:
    def __init__(self):
        self.main_window = tkinter.Tk()
        self.main_window.title("Fulp Industries")

        self.top_frame = tkinter.Frame(self.main_window)
        self.bottom_frame = tkinter.Frame(self.main_window)

        self.number = 10

        self.label1 = tkinter.Label(self.top_frame, text="First")
        self.button1 = tkinter.Button(self.bottom_frame, text="Click Me!", command=lambda: self.button1_func(self.number))
        self.button2 = tkinter.Button(self.bottom_frame, text="Quit", command=self.main_window.destroy)

        self.label1.pack()
        self.button1.pack(side="left")
        self.button2.pack(side="left")

        self.top_frame.pack()
        self.bottom_frame.pack()

        tkinter.mainloop()

    def button1_func(self, number):
        for i in range(number):
            tkinter.messagebox.showinfo("Response", "You clicked the button")


# class MyGui:
#     def __init__(self):
#         self.main_window = tkinter.Tk()
#         self.main_window.title("Fulp Industries")
#
#         self.top_frame = tkinter.Frame(self.main_window)
#         self.middle_frame = tkinter.Frame(self.main_window)
#         self.bottom_frame = tkinter.Frame(self.main_window)
#
#         self.label1 = tkinter.Label(self.top_frame, text="First")
#         self.label2 = tkinter.Label(self.top_frame, text="Second")
#         self.label3 = tkinter.Label(self.middle_frame, text="Third")
#         self.label4 = tkinter.Label(self.middle_frame, text="Fourth")
#         self.label5 = tkinter.Label(self.bottom_frame, text="Fifth")
#         self.label6 = tkinter.Label(self.bottom_frame, text="Sixth")
#
#         self.label1.pack()
#         self.label2.pack()
#         self.label3.pack()
#         self.label4.pack()
#         self.label5.pack()
#         self.label6.pack()
#
#         self.top_frame.pack()
#         self.middle_frame.pack()
#         self.bottom_frame.pack()
#
#         tkinter.mainloop()
MyGui()

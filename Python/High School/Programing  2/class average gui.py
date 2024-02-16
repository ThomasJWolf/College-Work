#class average gui
#Thomas Wolf
#1/8/20
#lobster fight

import tkinter
import tkinter.messagebox

class Average:
    def __init__(self):
        self.main_window=tkinter.Tk()

        self.q1=tkinter.Frame(self.main_window)
        self.q2=tkinter.Frame(self.main_window)
        self.exam=tkinter.Frame(self.main_window)
        self.class_average=tkinter.Frame(self.main_window)
        self.button_frame=tkinter.Frame(self.main_window)

        #q1
        self.q1_label=tkinter.Label(self.q1,text='Enter grade for quarter 1:')
        self.q1_entry=tkinter.Entry(self.q1,width=10)
        self.q1_label.pack(side='left')
        self.q1_entry.pack(side='left')

        #q2
        self.q2_label=tkinter.Label(self.q2,text='Enter grade for quarter 2:')
        self.q2_entry=tkinter.Entry(self.q2,width=10)
        self.q2_label.pack(side='left')
        self.q2_entry.pack(side='left')

        #exam
        self.exam_label=tkinter.Label(self.exam,text='Enter grade for Exam:')
        self.exam_entry=tkinter.Entry(self.exam,width=10)
        self.exam_label.pack(side='left')
        self.exam_entry.pack(side='left')

        #calculate the actual average
        self.result_label=tkinter.Label(self.class_average,text='class Average:')
        self.avg=tkinter.StringVar()
        self.average_label=tkinter.Label(self.class_average,textvariable=self.avg)
        self.result_label.pack(side='left')
        self.average_label.pack(side='left')

        #buttons
        self.calculate=tkinter.Button(self.button_frame,text='Average',command=self.calc_average)
        self.quit=tkinter.Button(self.button_frame,text='Quit',command=self.button_frame.destroy)
        self.calculate.pack(side='left')
        self.quit.pack(side='left')

        #packing frames
        self.q1.pack()
        self.q2.pack()
        self.exam.pack()
        self.class_average.pack()
        self.button_frame.pack()

        #start main frame
        tkinter.mainloop()

    def calc_average(self):
        self.q1=float(self.q1_entry.get())
        self.q2=float(self.q2_entry.get())
        self.exam=float(self.exam_entry.get())

        self.class_average=(self.q1*.4)+(self.q1*.4)+(self.exam*.2)
        self.avg.set(self.class_average)

test_avg=Average()

















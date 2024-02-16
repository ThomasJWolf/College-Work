#GUI Practace
#Thomas Wolf
#1/7/20

import tkinter #used at tk
import tkinter.messagebox

class MyGUI:
    #displaying an empty window
    def __init__(self):
        self.main_window=tkinter.Tk()

        #create the frame
        self.top_frame=tkinter.Frame(self.main_window)
        self.bottom_frame=tkinter.Frame(self.main_window)

        #creare widgets for the Frames
        self.prompt_label=tkinter.Label(self.top_frame,text='Enter your name:')
        self.name_entry=tkinter.Entry(self.top_frame,width=10)

        
        #create a label(writing text)
##        self.label=tkinter.Label(self.main_window,text="Yeet")
##        self.label2=tkinter.Label(self.main_window,text="Bruh")

########        self.label=tkinter.Label(self.main_window,text="----------------------------------------------------------------")
########        self.label2=tkinter.Label(self.main_window,text="----------------------------------------------------------------")
########        self.label3=tkinter.Label(self.main_window,text="|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
########        self.label4=tkinter.Label(self.main_window,text="|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")


        #pack the label
        self.prompt_label.pack(side='top')
        self.name_entry.pack(side='top')

########        self.label.pack(side='left')
########        self.label2.pack(side='right')
########        self.label3.pack(side='top')
########        self.label4.pack(side='bottom')

        #button
        self.button=tkinter.Button(self.main_window,text='Greet',command=self.greet)
        self.button2=tkinter.Button(self.main_window,text='Quit',command=self.main_window.destroy)

        self.button.pack(side='left')
        self.button2.pack(side='left')

        self.top_frame.pack()
        self.botton_frame.pack()

        tkinter.mainloop()

    def greet(self):
        name=str(self.name_entry.get())
        for i in range(10000):
            tkinter.messagebox.showinfo('You are doomed','( ͡° ͜ʖ ͡°) '+name+' ( ͡° ͜ʖ ͡°)')


my_gui=MyGUI()


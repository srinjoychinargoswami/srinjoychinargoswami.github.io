# We are using tkinter GUI for this software at the moment 
from tkinter import * 

root = Tk() # Our Work space will be known as root
root.title('SMART Assay Analysis Software')


myLabel1 = Label(root, text="This is the SMART Assay Bulk Analysis Software")
myLabel2 = Label(root, text="Please follow the instructions of this software in order to use correctly")

# The Function and the mathematics of the how the program should work is below
def smart(): 
	genomicentryvalue = int(genomicentry.get())
	subgenomicentryvalue = int(subgenomicentry.get())
	RPNentryvalue = int(RPNentry.get())
	delta = ((subgenomicentryvalue - genomicentryvalue) - RPNentryvalue)
	fold = (2 ** -delta)
	
	if RPNentryvalue > 38: 
		result.config(text="Invalid Run due to RNAse P CT values")
	elif RPNentryvalue <= 38 and genomicentryvalue <= 23: 
		result.config(text="Sample is positive for actively replicating SARS-CoV-2 Virus")
	elif genomicentryvalue >= 40: 
		result.config(text="Sample is Negative for SARS-CoV-2")
	elif genomicentryvalue >= 35: 
		result.config(text="Sample is negative for for actively replicating SARS-CoV-2 Virus. Sample is Positive for presence of SARS-CoV-2 Virus")
	elif genomicentryvalue >=36 and genomicentryvalue <= 40: 
		result.config(text="Sample is Negative for activley replicating SARS-CoV-2 Virus")
	elif (genomicentryvalue > 23 and genomicentryvalue <=35) and (fold >= 523823): 
		result.config(text="Sample is positive for actively replicating SARS-CoV-2 Virus") 
	elif fold < 523823: 
		result.config(text="Sample is Negative for activley replicating SARS-CoV-2 Virus. Sample is Positive for presence of SARS-CoV-2 Virus")


	
genomicLabel = Label(root, text="Genomic")
genomicentry = Entry(root, width=50)

subgenomicLabel = Label(root, text="Subgenomic")
subgenomicentry = Entry(root, width=50)
RPNlabel = Label(root, text="RNAsp")
RPNentry = Entry(root, width=50)

myLabel1.grid(row=0, column=0)
myLabel2.grid(row=1, column=0)


genomicLabel.grid(row=2,column=0)
genomicentry.grid(row=2, column=2)
subgenomicLabel.grid(row=3,column=0)
subgenomicentry.grid(row=3, column=2)
RPNlabel.grid(row=4, column=0)
RPNentry.grid(row=4, column=2)

SubmitButton = Button(root, text="Submit", command=smart)

SubmitButton.grid(row=10, column=20)
result = Label(root, text='')

result.grid(row=10, column=4)
# Grid Placement needs to be worked on to make a better design


root.mainloop()

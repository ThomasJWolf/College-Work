#Enrichment Program: Capital Quiz
#
#Thomas Wolf
#11/6/19


capitals={'alabama':'montgomery','alaska':'juneau','arizona':'phoenix','arkansas':'little rock','california':'sacramento','colorado':'denver','connecticut':'hartford','delaware':'dover','florida':'tallahassee','georgia':'atlanta','hawaii':'honolulu','idaho':'boise','illinois':'springfield','indiana':'indianapolis','iowa':'des moines','kansas':'topeka','kentucky':'frankfort','louisiana':'baton rouge','maine':'augusta','maryland':'annapolis','massachusetts':'boston','michigan':'lansing','minnesota':'saint paul','mississippi':'jackson','missouri':'jefferson city','montana':'helena','nebraska':'lincoln','nevada':'carson city','new hampshire':'concord','new jersey':'trenton','new mexico':'santa fe','new york':'albany','north carolina':'raleigh','north dakota':'bismarck','ohio':'columbus','oklahoma':'oklahoma city','oregon':'salem','pennsylvania':'harrisburg','rhode island':'providence','south carolina':'columbia','south dakota':'pierre','tennessee':'nashville','texas':'austin','utah':'salt lake city','vermont':'montpelier','virginia':'richmond','washington':'olympia','west virginia':'charleston','wisconsin':'madison','wyoming':'cheyenne'}
name=input("What is your name?")
age=int(input("What is your age"))
grade=int(input("What is your age"))
repeat='yes'
while repeat=='yes':
    correct=0
    incorrect=0
    total=50
    repeat2=int(input("How many times would you like to repeat the program?"))
    for i in range(repeat2):
        for i in capitals.keys():
            print("What is the Capital of",i)
            guess=input('')
            guess=guess.lower()
            print(i)               
            if guess==capitals[i]:
                correct+=1
            else:
                incorrect+=1
            
        correctt=(correct/total)*100
        incorrectt=(incorrect/total)*100
        print(correctt,' is the percentage you got right',sep='%')
        print(incorrect,' is the percentage you got wrong',sep='%')
        correct=0
        incorrect=0
    repeat=input("Would you like to go again?")
    repeat=repeat.lower()
print("Thank you for playing!")

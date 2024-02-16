#Enrichment Program: Sets with Sports Teams
#
#Thomas Wolf
#11/14/19

import pickle
file=open('sports_sets.dat','wb')

#names of students
baseball_set=set(['Addison','Jackson','Carmen','Jodi','Sampson','Tom'])
basketball_set=set(['Eva','Carmen','Alicia','Sarah','Tony','Tom','Trey'])

pickle.dump(baseball_set,file)
pickle.dump(basketball_set,file)

#utilizing sets
intersection=baseball_set & basketball_set
union=baseball_set | basketball_set
diff_1=baseball_set - basketball_set
diff_2=basketball_set - baseball_set
sym_diff=basketball_set ^ baseball_set

#display information necessary
print("Names of studints in both sports:")
print(intersection)
print()
print("Names of studints who play ether sport:")
print(union)
print()
print("Names of studints who play Basketball not Baseball:")
print(diff_1)
print()
print("Names of studints who play Baseball not Basketball:")
print(diff_2)
print()
print("Names of studints who play one sport:")
print(sym_diff)
print()

file.close()

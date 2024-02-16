#Hangman in Python w/out GUI
#
#Thomas Wolf
#10/22/19
#Sources: NONE
#This program ia broken and i dont know why
word_list=[]
word=input("Enter the word")

for i in range(len(word)):
    word_list.append('_')
guess6=6
wrong=0
while guess6>0:
    word_str=''
    while word!=word_str:
        guess=input("Enter Letter")
        for i in range(len(word)):
            print(i)
            if word[i]==guess:
                word_list.remove(word_list[i])
                word_list.insert(i,guess)
                wrong+=1
            print(word_list)
##        if wrong==0 and i==len(word):
##            guess6-=1
##            wrong=0
##            print(guess6)
##        for i in range(len(word_list)):
##            if word_str[i]==isalpha():
##                ii=word_list[i]
##                word_str.remove(word_str[i])
##                word_str=word_str+ii
##        print(word_str)

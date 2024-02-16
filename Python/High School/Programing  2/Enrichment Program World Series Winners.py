#Enrichment Program: World Series Winners
#
#Thomas Wolf
#11/18/19

file=open('WorldSeries.txt','r')
world_series_years={}
year=1903
complete=[]
wsy=file.readline()
while wsy!='':
    wsy=wsy.rstrip('\n')
    world_series_years[year]=wsy
    year+=1
    complete.append(wsy)
    wsy=file.readline()
file.close()

file=open('WorldSeries.txt','r')
winner=set([])
won=file.readline()
while won!='':
    won=won.rstrip('\n')
    winner2=set([won])
    winner=winner | winner2
    won=file.readline()
file.close()

winner=list(winner)
winner.sort()
winners={}

for i in winner:
    winners[i]=0
for i in complete:
    if i in complete:
        winners[i]+=1
    else:
        winners=1

    
team=input("What year would you like to lookup?")
print(world_series_years)

if team in world_series_years.keys():
    
    team_win=world_series_years[team]
    print(team_win)
print("In",team,"the",world_series_years[team],"team won, they also won",team_win,"times")



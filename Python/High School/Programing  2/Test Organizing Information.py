#Test: Organizing Information
#Asks user for movies and puts them in list
#Thomas Wolf
#9/18/19
#Sorces: NONE

all_movies=[]
again='yes'
while again=='yes':
    movie_amount=int(input("How many movies would you like to list?:"))
    print()#adds space between lines
    for i in range(movie_amount):
        movie=str(input("What moive would you like to add?:"))#asks for movie
        print()
        while movie in all_movies:
            print("That movie is in the list, please input a diffrent movie")#if the movie is in list
            movie=str(input("What moive would you like to add?:"))
        all_movies.append(movie)
    again=str(input("Do you have any more movies to add? yes or no:"))#asks if user has more movies
    print()
print("All of the moives:")
for i in (sorted(all_movies)):#prints moives in an alphabetical table
    print(i)


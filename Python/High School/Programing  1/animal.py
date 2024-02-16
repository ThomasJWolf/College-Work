#Thomas Wolf
#11/8/2018
#Turtle practace
import turtle
#square
turtle.bgcolor('black')
turtle.shape('turtle')
turtle.color('blue')
turtle.forward(150)
turtle.left(90)
turtle.color('red')
turtle.forward(150)
turtle.left(90)
turtle.color('yellow')
turtle.forward(150)
turtle.left(90)
turtle.color('green')
turtle.forward(150)
turtle.left(90)
turtle.penup()

#triangle
turtle.goto(-200,0)
turtle.pendown()
turtle.color('blue')
turtle.forward(150)
turtle.color('red')
turtle.left(120)
turtle.forward(150)
turtle.left(120)
turtle.color('green')
turtle.forward(150)
turtle.left(120)
turtle.penup()

#circle
turtle.goto(-200,100)
turtle.pendown()
turtle.circle(50)
turtle.penup()
turtle.goto(-200,300)
turtle.pendown()

for num in range(120):
    turtle.color('blue')
    turtle.left(1)
    turtle.forward(1)
    turtle.color('red')
    turtle.left(1)
    turtle.forward(1)
    turtle.color('green')
    turtle.left(1)
    turtle.forward(1)

#car
#Thomas Wolf
#12/17/19

class Car:
    def __init__(self,year_model,make,speed,accelerate,brake):
        self.__year_model=year_model
        self.__make=make
        self.__speed=speed
        self.__accelerate=accelerate
        self.__brake=brake

    def set_year_model(self,year_model):
        self.__year_model=year_model

    def set_make(self,make):
        self.__make=make

    def set_speed(self,speed):
        self.__speed=speed

    def set_accelerate(self,accelerate):
        self.__accelerate=accelerate

    def set_brake(self,brake):
        self.__brake=brake

    def get_year_model(self):
        return self.__year_model
    
    def get_make(self):
        return self.__make

    def get_speed(self):
        return self.__speed

    def accelerate(speed):
        speed+=5

    def brake(speed):
        speed-=5

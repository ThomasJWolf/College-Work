# Thomas Wolf
# Car Class
# 3/29/23

import validate_no_input as validate


def main():
    p1 = Car(2010, "Honda", "Acura TSX")
    print(p1.__str__())
    for i in range(5):
        p1.accelerate(5)
    print(p1.__str__())
    for i in range(5):
        p1.brake(5)
    print(p1.__str__())

class Car:
    __year = 0
    __make = ""
    __model = ""
    __speed = 0

    def __init__(self, year, make, model):
        self.set_year(year)
        self.set_make(make)
        self.set_model(model)

    def __str__(self):
        return "{} {} {} is going {} mph".format(
            self.__year, self.__make, self.__model, self.__speed
        )

    def set_year(self, year):
        year = validate.int_range(1885, 2024, year, "stupid")
        self.__year = year

    def set_make(self, make):
        make = validate.alpha_check_exceptions([" "], make, "stupid")
        self.__make = make

    def set_model(self, model):
        model = validate.alnum_check_exceptions([" "], model, "stupid")
        self.__model = model

    def set_speed(self, speed):
        speed = validate.int_range(0, 200, speed, "stupid")
        self.__speed = speed

    def get_year(self):
        return self.__year

    def get_make(self):
        return self.__make

    def get_model(self):
        return self.__model

    def get_speed(self):
        return self.__speed

    def accelerate(self, speed):
        self.__speed += speed

    def brake(self, speed):
        self.__speed -= speed

if __name__ == "__main__":
    main()
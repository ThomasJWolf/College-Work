#Wireless
#
#Thomas Wolf
#12/5/19

class Inventory:
    def __init__(self,name,model,price):
        self.__name=name
        self.__model=model
        self.__price=price

    def set_name(self,name):
        self.__name=name

    def set_model(self,model):
        self.__model=model

    def set_price(self,price):
        self.__price=price

    def get_name(self):
        return self.__name

    def get_model(self):
        return self.__model

    def get_price(self):
        return self.__price

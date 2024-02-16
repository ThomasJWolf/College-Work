#Joe's Shop
#Thomas Wolf
#12/12/19

class Customer:
    def __init__(self,name,phone,address):
        self.__name=name
        self.__phone=phone
        self.__address=address

    def set_name(self,name):
        self.__name=name

    def set_phone(self,phone):
        self.__phone=phone
        
    def set_address(self,address):
        self.__address=address
        
    def get_name(self):
        return self.__name

    def get_phone(self):
        return self.__phone
    
    def get_address(self):
        return self.__address


class Car:
    def __init__(self,year,model,make):
        self.__year=year
        self.__model=model
        self.__make=make

    def set_year(self,year):
        self.__year=year

    def set_model(self,model):
        self.__model=model
        
    def set_make(self,make):
        self.__make=make

    def get_year(self):
        return self.__year
    
    def get_model(self):
        return self.__model
        
    def get_make(self):
        return self.__make

tax_rate=0.09
class Quote:
     def __init__(self,pcharge,lcharge):
        self.__pcharge=pcharge
        self.__lcharge=lcharge

     def set_parts_charge(self,pcharge):
        self.__parts_charge=pcharge

     def set_labor_charge(self,lcharge):
        self.__labor_charge=lcharge

     def get_parts_charge(self):
        return self.__parts_charge

     def get_labor_charge(self):
        return self.__labor_charge

     def get_tax(self):
        return __parts_charge * tax_rate

     def get_total(self):
        return __parts_charge + __labor_charge + (__parts_charge * tax_rate)
        











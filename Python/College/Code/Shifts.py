# Thomas Wolf
# Shifts
# 4/5/23



class Employee:
    def __init__(self, name, emp_number):
        self.name = name
        self.__emp_number = emp_number

    def set_name(self, name):
        if name.replace(" ", "").isalpha():
            self.name = name

    def __set_emp_number(self, emp_number):
        self.__emp_number = emp_number

    def get_name(self):
        return self.name

    def get_emp_number(self):
        return self.__emp_number

class ProductionWorker(Employee):

    def __init__(self, name, emp_number, shift, hourly_pay):
        Employee.__init__(self, name, emp_number)
        self.__shift = shift
        self.__hourly_pay = hourly_pay

    def __str__(self):
        if self.__shift == 1:
            shift = "Day"
        else:
            shift = "Night"

        return "{}: {}, Shift: {}, Pay: {}".format(
            self.get_emp_number(),
            self.name,
            shift,
            self.__hourly_pay
        )

    def set_shift(self, shift):
        if shift in [1,2]:
            self.__shift = shift

    def set_hourly_pay(self, hourly_pay):
        if hourly_pay > 0:
            self.__hourly_pay = hourly_pay

    def get_shift(self):
        return self.__shift

    def get_hourly_pay(self):
        return self.__hourly_pay


class ShiftSupervisor(Employee):

    def __init__(self, name, emp_number, salary, bonus):
        Employee.__init__(self, name, emp_number)
        self.__salary = salary
        self.__bonus = bonus

    def __str__(self):
        return "{}: {}, Salary: {}, Bonus: {}".format(
            self.get_emp_number(),
            self.name,
            self.__salary,
            self.__bonus
        )

    def set_salary(self, salary):
        if 0 < salary < 10000:
            self.__salary = salary

    def set_bonus(self, bonus):
        if bonus > 0:
            self.__bonus = bonus

    def get_salary(self):
        return self.__salary

    def get_bonus(self):
        return self.__bonus


def main():
    p1 = ShiftSupervisor("Thomas", 42, 80000, 1000)
    print(p1)

if __name__ == "__main__":
    main()
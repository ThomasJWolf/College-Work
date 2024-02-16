# Thomas Wolf
#
#

import os
import validate
from tabulate import tabulate

def main():
    directory = "Cars"
    cars = []
    for filename in os.listdir(directory):
        f = os.path.join(directory, filename)
        if os.path.isfile(f):
            fp = open(f, "r")
            info = (fp.read().splitlines())
            fp.close()
            add = 1000
            detailed_info = [[],[],[],[],[],[],[],[],[],[],[]]
            extra_stuff = ["Highlighted Features", "Convenience Features", "Suspension/Handling", "Entertainment Features", "Seats And Trim", "Powertrain", "Body Exterior", "Specs And Dimensions", "Lighting, Visibility And Instrumentation", "Safety And Security"]
            for i in info:
                if i in extra_stuff:
                    if i == extra_stuff[0]:
                        add = extra_stuff.index(i)
                    else:
                        detailed_info[add].pop(-1)
                        add = extra_stuff.index(i)
                if add != 1000:
                    detailed_info[add].append(i)
            cars.append(
                Car(info[0], info[1], info[2], info[3], info[4], info[5], info[6], info[7], info[8], info[9], info[10],
                    info[11], info[12], info[13], info[14], info[15], detailed_info[0], detailed_info[1], detailed_info[2],
                    detailed_info[3], detailed_info[4], detailed_info[5], detailed_info[6], detailed_info[7],
                    detailed_info[8], detailed_info[9], detailed_info[10]))

        else:
            print("error")
            print("error")
    for i in range(len(cars)):
        print(cars[i].get_main())

    sort(cars)

def sort(cars):
    amount = validate.pos_int("How many filters?","Bro you made this, how are you this stupid?")
    for i in range(amount):
        enter = validate.int_range(1,10,"What would you like to sort by\n1. Price\n2. Year\n3. Brand\n4. Name\n5. Odometer\n6. mpg\n7. body\n8. Drivetrain\n9. Engine\n10. More\n:","Bro you made this, how are you this stupid?")
        sort = []
        if enter == 1:
            for i in range(len(cars)):
                temp = cars[i].get_price()
                temp = int(temp)
                sort.append([temp, i])
            sort.sort()
            print(sort)

        elif enter == 2:
            for i in range(len(cars)):
                temp = cars[i].get_year_model()
                temp = int(temp)
                sort.append([temp, i])
            sort.sort()
            print(sort)

        elif enter == 3:
            for i in range(len(cars)):
                sort.append([cars[i].get_make(), i])
            sort.sort()
            print(sort)

        elif enter == 4:
            for i in range(len(cars)):
                sort.append([cars[i].get_name(), i])
            sort.sort()
            print(sort)

        elif enter == 5:
            for i in range(len(cars)):
                temp = cars[i].get_odometer()
                temp = int(temp)
                sort.append([temp, i])
            sort.sort()
            print(sort)

        elif enter == 6:
            for i in range(len(cars)):
                sort.append([cars[i].get_fule(), i])
            sort.sort()
            print(sort)

        elif enter == 7:
            for i in range(len(cars)):
                sort.append([cars[i].get_body(), i])
            sort.sort()
            print(sort)

        elif enter == 8:
            for i in range(len(cars)):
                sort.append([cars[i].get_drivetrain(), i])
            sort.sort()
            print(sort)

        elif enter == 9:
            for i in range(len(cars)):
                sort.append([cars[i].get_engine(), i])
            sort.sort()
            print(sort)

        else:
            more_sort(cars)



        year = ["Year"]
        make = ["Brand"]
        name = ["Name"]
        price = ["Price"]
        odometer = ["Odometer"]
        mpg = ["MPG"]
        body = ["Body"]
        drivetrain = ["Drivetrain"]
        engine = ["Engine"]

        for i in range(len(cars)):
            year.append(cars[sort[i][1]].get_year_model())
            make.append(cars[sort[i][1]].get_make())
            name.append(cars[sort[i][1]].get_name())
            price.append((cars[sort[i][1]].get_price()))
            odometer.append((cars[sort[i][1]].get_odometer()))
            mpg.append(cars[sort[i][1]].get_fule())
            body.append(cars[sort[i][1]].get_body())
            drivetrain.append(cars[sort[i][1]].get_drivetrain())
            engine.append(cars[sort[i][1]].get_engine())

        table = [year, make, name, price, odometer, mpg, body, drivetrain, engine]
        print(tabulate(table, tablefmt='fancy_grid'))

def more_sort(cars):
    enter = validate.int_range(1, 11,
                               "What would you like to sort by\n1. Highlighted Features\n2. Convenience Features\n3. Suspension/Handling\n4. Entertainment Features\n5. Seats And Trim\n6. Powertrain\n7. Off-Road Capability\n8. Body Exterior\n9. Specs And Dimensions\n10. Lighting, Visibility And Instrumentation\n11. Safety And Security\n:",
                               "Bro you made this, how are you this stupid?")
    sort = []
    if enter == 1:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_highlighted_features())

    elif enter == 2:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_convenience_features())

    elif enter == 3:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_suspension_handling())

    elif enter == 4:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_entertainment_features())

    elif enter == 5:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_seats_and_trim())

    elif enter == 6:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_powertrain())

    elif enter == 7:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_off_road_Capability())

    elif enter == 8:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_body_exterior())

    elif enter == 9:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_specs_and_dimensions())

    elif enter == 10:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_lighting_visibility_and_instrumentation())

    elif enter == 11:
        for i in range(len(cars)):
            print(cars[i].get_name(), end="\t")
            print(cars[i].get_safety_and_security())

    quit()

class Car(object):
    def __init__(self, year_model, make, name, price, exterior_color, interior_color, odometer, body, seating, fule,
                 transmission, drivetrain, engine, vin, stock_number, link, highlighted_features, convenience_features,
                 suspension_handling, entertainment_features, seats_and_trim, powertrain, off_road_Capability, body_exterior,
                 specs_and_dimensions, lighting_visibility_and_instrumentation, safety_and_security):
        self.__price = price
        self.__year_model = year_model
        self.__make = make
        self.__name = name
        self.__exterior_color = exterior_color
        self.__interior_color = interior_color
        self.__odometer = odometer
        self.__body = body
        self.__seating = seating
        self.__fule = fule
        self.__transmission = transmission
        self.__drivetrain = drivetrain
        self.__engine = engine
        self.__vin = vin
        self.__stock_number = stock_number
        self.__link = link
        self.__highlighted_features = highlighted_features
        self.__convenience_features = convenience_features
        self.__suspension_handling = suspension_handling
        self.__entertainment_features = entertainment_features
        self.__seats_and_trim = seats_and_trim
        self.__powertrain = powertrain
        self.__off_road_Capability = off_road_Capability
        self.__body_exterior = body_exterior
        self.__specs_and_dimensions = specs_and_dimensions
        self.__lighting_visibility_and_instrumentation = lighting_visibility_and_instrumentation
        self.__safety_and_security = safety_and_security

    def get_year_model(self):
        return self.__year_model

    def get_make(self):
        return self.__make

    def get_name(self):
        return self.__name

    def get_price(self):
        return self.__price

    def get_exterior_color(self):
        return self.__exterior_color

    def get_interior_color(self):
        return self.__interior_color

    def get_odometer(self):
        return self.__odometer

    def get_body(self):
        return self.__body

    def get_seating(self):
        return self.__seating

    def get_fule(self):
        return self.__fule

    def get_transmission(self):
        return self.__transmission

    def get_drivetrain(self):
        return self.__drivetrain

    def get_engine(self):
        return self.__engine

    def get_vin(self):
        return self.__vin

    def get_stock_number(self):
        return self.__stock_number

    def get_link(self):
        return self.__link

    def get_highlighted_features(self):
        return self.__highlighted_features

    def get_convenience_features(self):
        return self.__convenience_features

    def get_suspension_handling(self):
        return self.__suspension_handling

    def get_entertainment_features(self):
        return self.__entertainment_features

    def get_seats_and_trim(self):
        return self.__seats_and_trim

    def get_powertrain(self):
        return self.__powertrain

    def get_off_road_Capability(self):
        return self.__off_road_Capability

    def get_body_exterior(self):
        return self.__body_exterior

    def get_specs_and_dimensions(self):
        return self.__specs_and_dimensions

    def get_lighting_visibility_and_instrumentation(self):
        return self.__lighting_visibility_and_instrumentation

    def get_safety_and_security(self):
        return self.__safety_and_security

    def get_main(self):
        return self.__price, self.__year_model, self.__make, self.__name, self.__exterior_color , self.__interior_color, self.__odometer, self.__body, self.__seating, self.__fule, self.__transmission, self.__drivetrain, self.__engine, self.__vin, self.__stock_number, self.__link, self.__highlighted_features

if __name__ == "__main__":
    main()


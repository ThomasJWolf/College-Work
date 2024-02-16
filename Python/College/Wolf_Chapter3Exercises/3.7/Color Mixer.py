# Thomas Wolf
# 9/21/22
# Color Mixer

# Defines the global dicts for the colors and there mixes
COLOR_DICT={"red":"a","blue":"b","yellow":"c"}
COLOR_MIX_DICT={"ab":"purple","ac":"orange","bc":"green","ba":"purple","ca":"orange","cb":"green"}
def main(COLOR_DICT, COLOR_MIX_DICT):
    # Inputs colors from user
    color1=input("Enter primary color 1\n")
    color2=input("Enter primary color 2\n")
    # Makes strings lowercase
    color1=color1.lower()
    color2=color2.lower()
    # A value to get out of the loop
    no_error = 0
    # Sets up a loop so an error will not occur is an invalid value is entered
    while no_error==0:
        try:
            # Adds the string value for the two colors defined in the dictionary together
            mix=COLOR_DICT[color1]+COLOR_DICT[color2]
            no_error = 1
        except KeyError:
            # Prompt the user to re-enter the colors if invalid
            print("Please enter valid primary colors")
            color1 = input("Enter primary color 1\n")
            color2 = input("Enter primary color 2\n")
            color1 = color1.lower()
            color2 = color2.lower()
    # Prints the value in COLOR_MIX_DICT from the key mix
    print("Your color mix is {}".format(COLOR_MIX_DICT[mix]))


if __name__ == "__main__":
    main(COLOR_DICT,COLOR_MIX_DICT)
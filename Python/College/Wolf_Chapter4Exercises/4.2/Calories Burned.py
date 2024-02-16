# Thomas Wolf
# 10/19/22
# Calories Burned

def main():
    # Defines what cal_burned is
    cal_burned=4.2
    # Loops a range from 10 to 30 with an interval of 5
    for i in range(10,31,5):
        # Caclulates and prints what cal_bruned is times 10, 15, 20, 25, and 30
        cal_burned_per_minute=cal_burned*i
        print("You have burned {} calories in {} minutes".format(cal_burned_per_minute,i))

if __name__ == "__main__":
    main()
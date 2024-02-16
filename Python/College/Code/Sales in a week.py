# Thomas Wolf
# Sales in a week
# 1/9/23

import validate


def main():
    week_days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
    weekly_sales = []
    day = 0
    while day != 7:
        weekly_sales.append(validate.pos_float("How much did you make on day {}?".format(week_days[day]), "Not a valid"))
        day += 1
    total = 0
    for sales in weekly_sales:
        total += sales
    print("Total Weakly Sales: ${:.2f}".format(total))


if __name__ == "__main__":
    main()

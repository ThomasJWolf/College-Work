# Thomas Wolf
# Rainfall in a year
# 1/9/23

import validate


def main():
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    monthy_rainfall = []
    month = 0
    while month < len(months):
        monthy_rainfall.append(validate.pos_float("How much rain fell in {}?".format(months[month]), "Not a valid"))
        month += 1
    total = 0
    max = 0
    min = 999999999999
    max_month = 0
    min_month = 0
    count=0
    for rain in monthy_rainfall:
        total += rain
        if rain > max:
            max = rain
            max_month=months[count]
        if rain < min:
            min = rain
            min_month = months[count]
        count += 1
    print("Total Monthly Rainfall: {:.2f}".format(total))
    print("Average Monthly Rainfall: {:.2f}".format(total/len(months)))
    print("Maximum Monthly Rainfall in {}: {:.2f}".format(max_month, max))
    print('Minimum Monthly Rainfall in {}: {:.2f}'.format(min_month, min))

if __name__ == "__main__":
    main()

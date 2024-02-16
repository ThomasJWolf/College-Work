# Thomas Wolf
# 2/13/23
# Gas Prices

import os  # Imports the os, calendar, and csv modules
import calendar
import csv


def main():
    bulk = []  # Sets bulk to an empty list
    if os.path.exists("GasPrices.txt"):  # Imports all lines in GasPrices to the list bulk
        fp = open("GasPrices.txt", "r")
        bulk = (fp.read().splitlines())
        fp.close()
    else:
        print("error")

    date_and_prices = (conversion(bulk))  # Calls the conversion function with the variable bulk
    average_price_per_year(date_and_prices)  # Calls the average_price_per_year function with the variable date_and_prices
    average_price_per_month(date_and_prices)  # Calls the average_price_per_month function with the variable date_and_prices
    date_and_prices.pop(-1)  # Gets rid of the last value in the list, it was only there for a sorting error
    highest_and_lowest_prices_per_year(date_and_prices)  # Calls the highest_and_lowest_prices_per_year function with the variable date_and_prices
    date_and_prices.pop(-1)  # Gets rid of the last value in the list, it was only there for a sorting error
    lowest_to_highest_list(date_and_prices)  # Calls the lowest_to_highest_list function with the variable date_and_prices
    highest_to_lowest_list(date_and_prices)  # Calls the highest_to_lowest_list function with the variable date_and_prices


def conversion(bulk):
    date_and_prices = []  # Sets date_and_prices to an empty list
    for i in range(len(bulk)):  # Appends the month, day, year, and price into date_and_prices as a list making a nested list
        date_and_prices.append([])
        date_and_prices[i].append(int(bulk[i][0:2]))
        date_and_prices[i].append(int(bulk[i][3:5]))
        date_and_prices[i].append(int(bulk[i][6:10]))
        date_and_prices[i].append(float(bulk[i][11:]))

    return date_and_prices  # Returns date_and_prices to main


def average_price_per_year(date_and_prices):
    current_year = 0  # sets current_year, year, and count to 0 and year_average to an empty list
    year_average = []
    year = 0
    count = 0
    date_and_prices.append([0, 0, 0, 0])
    for i in range(len(date_and_prices)):  # Iterates over the length of date_and_prices
        if year != 0:  # Checks to see if the year variable is not 0
            if date_and_prices[i][2] == current_year:  # If in the nested list year in date_and_prices is equal to current_year
                year += date_and_prices[i][3]  # Appends the price in the nested list to the year list
                count += 1  # Adds 1 to count

            else:
                current_year = date_and_prices[i][2]  # Reassigns current year to the new year in the nested list in date_and_prices
                year_average.append(year / count)  # Finds the average of year by dividing it by count
                year = 0  # Sets year and count to 0
                count = 0
        else:
            current_year = date_and_prices[i][2]  # Assigns current_year to the year in the nested list in date_and_prices
            year = date_and_prices[i][3]  # Sets the price in the nested list to the year list
            count += 1  # Adds 1 to count

    print("The average price per year:")  # Prints a header and the average for each year with the year and a new line
    for i in range(len(year_average)):
        print("\t{} was ${:.2f}".format(i + 1993, year_average[i]))
    print("")


def average_price_per_month(date_and_prices):
    current_month = 0  # sets current_month, month, and count to 0 and month_average to an empty list
    month_average = []
    month = 0
    count = 0
    date_and_prices.sort(key=lambda x: x[0])  # Sorts date_and_prices by the first index in each nested list, witch is the month
    date_and_prices.append([0, 0, 0, 0])  # Appends a nested list to the end of date_and_prices because the sort is short by 1
    for i in range(len(date_and_prices)):  # Iterates over the length of date_and_prices
        if month != 0:  # Checks to see if the month variable is not 0
            if date_and_prices[i][0] == current_month:  # If in the nested list month in date_and_prices is equal to current_month
                month += date_and_prices[i][3]  # Appends the price in the nested list to the month list
                count += 1  # Adds 1 to count
            else:
                current_month = date_and_prices[i][2]  # Reassigns current month to the new month in the nested list in date_and_prices
                month_average.append(month / count)  # Finds the average of month by dividing it by count
                month = 0  # Sets month and count to 0
                count = 0
        else:
            current_month = date_and_prices[i][0]  # Assigns current_month to the month in the nested list in date_and_prices
            month = date_and_prices[i][3]  # Sets the price in the nested list to the month list
            count += 1  # Adds 1 to count

    print("The average price per month:")  # Prints a header and the average for each month with the month and a new line
    for i in range(len(month_average)):
        print("\t{} was ${:.2f}".format(calendar.month_name[i + 1], month_average[i]))
    print("")


def highest_and_lowest_prices_per_year(date_and_prices):
    current_year = 0  # sets current_year 0 and year_unsort, year_min, and year_max to an empty list
    year_unsort = []
    year_min = []
    year_max = []
    date_and_prices.sort(key=lambda x: x[2])  # Sorts date_and_prices by the third index in each nested list, witch is the year
    date_and_prices.append([0, 0, 0, 0])  # Appends a nested list to the end of date_and_prices because the sort is short by 1
    for i in range(len(date_and_prices)):  # Iterates over the length of date_and_prices
        if year_unsort != []:  # Checks to see if the year_unsort list is not empty
            if date_and_prices[i][2] == current_year:  # If in the nested list year in date_and_prices is equal to current_year
                year_unsort.append(date_and_prices[i])
            else:
                current_year = date_and_prices[i][2]
                year_unsort.sort(key=lambda x: x[3])
                year_min.append(year_unsort[0])
                year_max.append(year_unsort[-1])
                year_unsort = []
        else:
            current_year = date_and_prices[i][2]
            year_unsort.append(date_and_prices[i])

    print("The lowest to highest price:")
    for i in range(len(year_min)):
        print("\t{} was ${:.2f}".format(i + 1993, year_min[i][3]))
    print("")

    print("The lowest to highest price:")
    for i in range(len(year_max)):
        print("\t{} was ${:.2f}".format(i + 1993, year_min[i][3]))
    print("")


def lowest_to_highest_list(date_and_prices):
    date_and_prices.sort(key=lambda x: x[3])
    with open('low_to_high.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Month", "Day", "Year", "Price"])
        for i in range(len(date_and_prices)):
            writer.writerow(
                [date_and_prices[i][0], date_and_prices[i][1], date_and_prices[i][2], date_and_prices[i][3]])


def highest_to_lowest_list(date_and_prices):
    date_and_prices.reverse()
    with open('high_to_low.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Month", "Day", "Year", "Price"])
        for i in range(len(date_and_prices)):
            writer.writerow(
                [date_and_prices[i][0], date_and_prices[i][1], date_and_prices[i][2], date_and_prices[i][3]])


if __name__ == "__main__":
    main()

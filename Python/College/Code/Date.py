# Thomas Wolf
#
#

from datetime import datetime

def main():
    date_resp = input("Enter a date (mm/dd/yyyy)\n:")
    datetime_print(date_resp)
    date_print(date_resp)

def datetime_print(date_resp):
    datetime_str = datetime.strptime(date_resp, "%m/%d/%Y")
    print(datetime_str.strftime("%B %e, %Y"))

def date_print(date_resp):
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November', 'December']

    date_parts = date_resp.split("/")

    print("{} {}, {}".format(months[int(date_parts[0])-1],date_parts[1],date_parts[2]))


if __name__ == "__main__":
    main()
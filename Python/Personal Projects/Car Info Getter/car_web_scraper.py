# Thomas Wolf
# Car Web Scraper
# 2/23/23

from urllib.request import urlopen

def main():
    url = "https://www.eastcoastcars.net/bargain-inventory/index.htm"
    page = urlopen(url)
    html_bytes = page.read()
    html = html_bytes.decode("utf-8")
    print(html)


if __name__ == "__main__":
    main()
#Thomas Wolf
#9/7/22
#Stock Transaction Program


def main():
    #calculates the price of the shares
    shares=int(input("How many shares of Acme Software did you buy?\n"))  # user inputs ammount of shares
    share_price=float(input("How much did you pay per share?\n"))  # user inputs amount per share
    commission=float(input("How much intrest is the broker taking?\n"))  # user inputs broker intrest
    shares_buy_price=shares*share_price  # total buy price
    commission_buy_price=shares_buy_price/(100/commission)  # brokers pay for the buy
    share_increase=share_price/(100/6.875)  # share increase in value
    shares_sell_price=shares*(share_price+share_increase)  # what the shares sold for
    commission_sell_price=shares_sell_price/(100/commission)  #brokers cut of the sell
    subtotal=shares_sell_price-shares_buy_price #total before the broker
    total=shares_sell_price-shares_buy_price-commission_sell_price-commission_buy_price  # price after the broker

    # prints all of the prices
    print("You paid {} dollars for all of your shares".format(shares_buy_price))
    print("You paid the commissioner {} dollars when you bought the stock".format(commission_buy_price))
    print("You sold the stock for {} dollars".format(shares_sell_price))
    print("You paid the commissioner {} dollars when you sold the stock".format(commission_sell_price))
    print("You made a gross profit of {} dollars, with the broker fees it is {} dollars".format(subtotal, total))
    #displayes message based on profit or not
    if total>=1:
        print("\nYou made money! :-)")
    else:
        print("\nYou lost money! :-(")

if __name__ == '__main__':#calls main
    main()
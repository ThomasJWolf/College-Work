# Thomas Wolf
# 10/24/22
# Ocean Levels

def main():
    # current ocean level
    ocean=97
    # prints headers
    print("Year\t Ocean Level (in mm)")
    # adds 1.6 to the ocean level each year
    for i in range(25):
        print(i+1,"\t\t","%.1f" % (ocean))
        ocean+=1.6

if __name__ == "__main__":
    main()

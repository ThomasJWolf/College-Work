import validate
def main():

    fp=open(".txt","w")
    fp.write("first,last,temp\n")
    fp.write("{},{},{}\n".format(first,last,temp))
    fp.close()

if __name__ == "__main__":
    main()


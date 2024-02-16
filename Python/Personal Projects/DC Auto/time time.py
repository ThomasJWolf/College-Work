import time
tt = time.time()
i = 0
while True:
    t = time.time()
    if t != i:
        i = t
        print(i - tt)
    # if (t % 5) == 0:
    #     print("even")
    #     time.sleep(1)
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
import random
import time

song_list=["WV3d7_TgGZQ","7TzHkku2KgU","KrXJu-6ZcAQ"]
song_time_list=[179,221,177]

repeat_song=[]
repeat=len(song_list)
while repeat!=0:
    options = ChromeOptions()
    driver = webdriver.Chrome(options=options)
    i=random.randint(0,2)
    while i in repeat_song:
        i = random.randint(0, 2)
    repeat_song.append(i)
    print(i)
    driver.get('https://music.youtube.com/watch?v={}'.format(song_list[i]))
    driver.maximize_window()
    action = ActionChains(driver)
    action.move_by_offset(0,0).click().perform()
    time.sleep(song_time_list[i])
    repeat-=1


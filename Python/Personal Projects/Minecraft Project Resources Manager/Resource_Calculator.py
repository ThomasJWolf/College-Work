# Thomas Wolf
# Resource Calculator
# 1/30/23

import os
import validate

def main():
    full_list = []
    if os.path.exists("Resources.txt"):
        fp = open("Resources.txt", "r")
        full_list = fp.read().splitlines()
        fp.close()
    else:
        print("error")

    resource_names = []
    resources = []

    for index in range(len(full_list)):
        if index % 2 == 0:
            resource_names.append(full_list[index])
        else:
            resources.append(full_list[index])

    for index in range(len(resources)):
        resources[index] = int(resources[index])

    craftable = ["Oak Plank","Oak Stair","Spruce Stair","Glass","Campfire","Stone","Path Block","Farmland","Barrel"
        ,"Hay","Composter","Trap Door","Sign","Bed","Painting","Bell","Culdrin","Chest","Spruce Trap Door","Oak Fence"
        ,"Oak Door","Lantern","Flower Pot","Bookshelf","Enchantment Table","Water Bucket","Red Carpet","Grey Carpet","Yellow Carpet"]

    item_list(resource_names,resources,craftable)

    if os.path.exists("Gathered_Items.txt"):
        gathered()
    else:
        no_gathered()

def item_list(resource_names,resources,craftable):
    gathered_resources = resources
    for index in range(len(resource_names)):
        if resource_names[index] in craftable:
            if resource_names[index] == "Oak Plank":
                dex = resource_names.index("Oak Plank")
                for amount in range(resources[dex]):
                    print(amount)
                    gathered_resources[dex+1]
    print(resources)
    print(gathered_resources)




def gathered():
    a=1


def no_gathered():
    a=1


if __name__ == "__main__":
    main()


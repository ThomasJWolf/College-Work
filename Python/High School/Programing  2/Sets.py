#Sets
#
#Thomas Wolf
#11/13/19


chose=13


if chose==1:
    myset=set(['a','b','c'])
    print(myset)

elif chose==2:
    myset=set('aaabc')
    print(myset)

elif chose==3:
#    myset=set('one','two','three') Wrong
    myset=set(['one','two','three']) #Right
    print(myset)

elif chose==4:
    myset=set()
    
    myset.add(5)
    myset.add(12)
    myset.add(3)
    
elif chose==5:
    myset=set([1,2,3,4])
    myset2=set([5,6,7,8])
    
    myset.update(myset2)
    print(myset)
    print(myset2)

elif chose==5:
    myset=set([1,2,3,4])
    myset2=set([5,6,7,8])
    
    myset.remove(3)
    print(myset)

elif chose==6:
    myset=set([1,2,3,4])
    myset2=set([5,6,7,8])
    
    for value in myset:
        print(value)
        
    if 1 in myset:
        print("Value is there")

elif chose==7:
    myset=set([1,2,3,4])
    myset2=set([5,6,7,8])

    myset3=myset.union(myset2)#Same as |
    print(myset3)

elif chose==8:
    myset=set([1,2,3,4])
    myset2=set([5,6,7,8])

    myset3=myset | myset2#Same as union
    print(myset3)

elif chose==9:
    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    myset3=myset.intersection(myset2)#Same as &
    print(myset3)

elif chose==10:
    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    myset3=myset & myset2#Same as intersection
    print(myset3)

elif chose==11:
    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    myset3=myset.difference(myset2)#Same as -
    print(myset3)

elif chose==12:
    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    myset3=myset - myset2#Same as difference
    print(myset3)

elif chose==13:
    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    myset3=myset.symmetric_difference(myset2)#Same as ^
    print(myset3)

elif chose==14:
    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    myset3=myset ^ myset2#Same as symmetric_difference
    print(myset3)

elif chose==15:
    mysetA=set([1,2,3,4])
    mysetB=set([4,6,7,8])

    mysetC=mysetA.issubset(mysetB)#Same as <=
    print(mysetC)

elif chose==16:
    mysetA=set([1,2,3,4])
    mysetB=set([4,6,7,8])

    mysetC=mysetA <= mysetB#Same as issubset
    print(mysetC)

elif chose==17:
    mysetA=set([1,2,3,4])
    mysetB=set([4,6,7,8])

    mysetC=mysetA.issuperset(mysetB)#Same as >=
    print(mysetC)

elif chose==18:
    mysetA=set([1,2,3,4])
    mysetB=set([4,6,7,8])

    mysetC=mysetA >= mysetB#Same as issuperset
    print(mysetC)

elif chose==19:
    import pickle

    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    file=open('picklefile.dat','wb')
    pb=pickle.dump(myset,file)

    file.close()

elif chose==20:
    import pickle

    myset=set([1,2,3,4])
    myset2=set([4,6,7,8])

    file=open('picklefile.dat','rb')
    pb=pickle.load(file)

    print(pb)

    file.close()

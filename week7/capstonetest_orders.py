#Call the list
#Add an item to the list
#Add multiple items to the list
#Remove the first item from the list
#Remove the last item from the list
#Remove a specific item from the list

import pytest
from orders import Equipment

def testCanAddEquipment{}:
    order=Equipment('Bam  Salon Kit') #calling  the class or list itself
    order.addEquipment('Bam salon Kit')# the list which is a add function
    assert order.addSupplies('Hair Mask')==['Hot tools', 'Computer', 'Chair',]#the names are going to a list ['']
}


removeItem=(part)=>{
        var found=this.list.findIndex(item=> item==part)
        if (found>=0){
        this.list=this.list.filter((item,index)=>index!==found)
        return this.list
        }else{
            return"not found"
        }

        #add item to a list
        #

        class List:
        def __init__(self):
        self.list=[]
    def addItem(self,item):
        self.list.append(item)
    def addTuple(self,*item):
        
        self.list.append(item)
    def addDictionary(self,*item):
        
        dict ={}  
        property=[]
        count=0
        for i in item:
         
            count+=1
            property.append(i)
            if count ==2:
              
                dict[property[0]]= property[1]
                count=0
                property=[]
        self.list.append(dict)         
    def turnToTuple(self):
        listToTuple=tuple(self.list)
        self.list=listToTuple
                
           
                
datalist = List()
datalist.addItem(1)
datalist.addItem("Hello")
datalist.addTuple(2, 4, "hello")
datalist.addDictionary("firstItem","secondItem","thirdItem","forthItem","fifthItem","sixthItem")
datalist.turnToTuple()
print(datalist.list)
# datalist.addDictionary(""){
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# })

# datalist.additem  (2, 4, "hello")
# print(type(tupleItem))
def my_function(num):
        if num ==1:
            print("1")


        elif num ==2:
            print("2")        


        elif num ==3:
            print("Pespi")


        elif num ==5:
            print("Coke")

        elif num % 3 ==0 and num % 5 ==0:
            print("PepsiCoke")   

        elif num % 3 ==0:
            print("Pepsi")   

        elif num % 5 ==0:
            print("Coke")    

        
my_function(1)
my_function(2)
my_function(3)
my_function(5)
my_function(6)
my_function(10)
my_function(15)
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

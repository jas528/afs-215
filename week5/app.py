
#Search the list for a single instance of a string
#Evaluate all items in the list
#Create a class and create functions that can accomplish the following:
#Hint: creating a state within your class using def __init__ can make your list easier to manage.

#ou will need to use pytest.fixure at some point in your development. Be sure comment out the original code and write the new code beneath it. Show how you refactored from the original code you wrote.


from http.client import FOUND
from pickle import FALSE


class List:
    def __init__(self):
        self.list=[]
    def addItem(self,item):
        self.list.append(item)
    
        
    def single(self,item):
        
        
        found=False
        for i in self.list:
         
            
            if i == item:
                found =True
              
                     
        return found
    
    def evaluate(self):           
        newList=[]
        for str in self.list:
            result =eval(str)
            newList.append(result)
        self.list=newList
         #Eval("1+1")  returns 2
                #map()
datalist = List()

datalist.addItem("1+1")
datalist.addItem("2+2",)
print(datalist.single("1+1"))
datalist.evaluate()

print(datalist.list)
#Call the list
#Add an item to the list
#Add multiple items to the list
#Remove the first item from the list
#Remove the last item from the list
#Remove a specific item from the list

import pytest
from items import Supplies

def testCanAddSupplies{}:
    order=Supplies('Bam Kit') #call the class
    assert order.addSupplies('Hair Mask')==['Hot Oil', 'Hair Cream', 'Bonding Spray',]# the list

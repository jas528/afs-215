# Use the TDD process for the assignment along with the assert keyword.

# Can Call on PepsiCoke()
# Get “1” to print when passed a 1
# Get “2” to print when passed a 2
# Get “Pepsi” to print when passed a 3
# Get “Coke” to print when passed a 5
# Get “Pepsi” when passed a 6(a multiple of 3)
# Get “Coke” when passed a 10(a multiple of 5)
# Get “PepsiCoke” when passed a 15(a multiple of 3 and 5)


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
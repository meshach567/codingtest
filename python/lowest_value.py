# Algorithm: Find The Lowest Value in an Array
# Create a variable 'minVal' and set it equal to the first value of the array. step 1
# Go through every element in the array. step 2
# If the current element has a lower value than 'minVal', update 'minVal' to this value. step 3
# After looking at all the elements in the array, the 'minVal' variable now contains the lowest value. step 4

my_array = [7, 12, 9, 4, 11]

min_val = my_array[0]

for i in my_array:
     if i < min_val:
        min_val = i 
        
        
print('Lowest Value', min_val)
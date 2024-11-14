# How it works:
# Choose a value in the array to be the pivot element.
# Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
# Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values
# Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element

# An array with values to sort.
# A quickSort method that calls itself (recursion) if the sub-array has a size larger than 1.
# A partition method that receives a sub-array, moves values around, swaps the pivot element into the sub-array and returns the index where the 
# next split in sub-arrays happens.
#

def partition(array, low, high):
    pivot = array[high]
    i = low - 1
    
    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]
            
    array[i + 1], array[high] = array[high], array[i + 1]
    return i + 1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1
        
    if low < high:
        pivot_index = partition(array, low, high)
        quicksort(array, low, pivot_index - 1)
        quicksort(array, pivot_index + 1, high)
        
my_array = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(my_array)
print("Sorted array:", my_array)
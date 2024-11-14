# An array with values to sort.
# A 'countingSort' method that receives an array of integers.
# An array inside the method to keep count of the values
# A loop inside the method that counts and removes values, by incrementing elements in the counting array.
# A loop inside the method that recreates the array by using the counting array, so that the elements appear in the right order

def countingSort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    
    while len(arr) > 0:
        num  = arr.pop(0)
        count[num] += 1
     
    for i in range(len(count)):
        while count[i] > 0:
            arr.append(i)
            count[i] -= 1
            
    return arr


unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]
sortedArr = countingSort(unsortedArr)
print("Sorted array:", sortedArr)   
    
    
# Bubble Sort Implementation To implement the Bubble Sort algorithm in a programming language, we need:
# An array with values to sort.
# An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
# An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.
#
my_array = [64, 30, 10, 15, 70, 40, 5]
n = len(my_array)

for i in range(n -1):
    for j in range(n - i - 1):
        if my_array[j] > my_array[j + 1]:
            my_array[j], my_array[j + 1] = my_array[j + 1], my_array[j]
            
            
print('Sorted Array:', my_array)
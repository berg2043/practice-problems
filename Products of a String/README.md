## Problem

Create a function that takes in an integer. This integer represents a 
sequence of integers from 1 to n. The function should return an array of 
pairs from the sequence whose product is equal to the sum of the sequence 
less the two numbers that were multiplied together.

The function takes the parameter: n (n is always strictly greater than 0) and 
returns an array (depending on the language) of the form: `[[a, b], ...]` 
with all [a, b] which are the possible removed numbers in the sequence 1 to n.
[[a, b], ...] or ...will be sorted in increasing order of the "a".

The function returns an empty array if no possible numbers are found.

## Examples 

removeNb(26) should return [[15, 21], [21, 15]]
# MongoDB $inc Operator: Handling Negative Counts

This repository demonstrates a common error when using the `$inc` operator in MongoDB to decrement a counter.  The example shows how to avoid negative values in the counter.

## Bug Description
Incorrect usage of the `$inc` operator can lead to negative counter values. If no condition is added to check for a minimum value, then the `$inc` operator will continue to decrement the value below zero.

## Solution
The solution involves adding a conditional check within the update operation. If the condition is not met, the value will not be updated.
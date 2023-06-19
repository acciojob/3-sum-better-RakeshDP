function threeSum(arr, target) {
// write your code here
  // Sort the array in ascending order
   arr.sort();

  let closestSum = Infinity; // Variable to store the closest sum to the target

  // Iterate through the array, leaving room for at least two more elements
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer for the element to the right of i
    let right = arr.length - 1; // Pointer for the last element in the array

    // Use two pointers to find the closest sum to the target
    while (left < r ight) {
      const sum = arr[i] + arr[left] + arr[right]; // Calculate the sum of the three elements

      // Check if the current sum is closer to the target than the previously closest sum
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum; // Update the closest sum
      }

      // Adjust the pointers based on the comparison between the sum and the target
      if (sum < target) {
        left++; // Move the left pointer to the right
      } else {
        right--; // Move the right pointer to the left
      }
    }
  }

  return closestSum; // Return the closest sum found
}

module.exports = threeSum;

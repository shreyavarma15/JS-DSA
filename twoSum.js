//Given an array of integer nums and an integer
//return an array of indices of 2 nums from array that add up to the target value
//Input: arr = [2,4,6,8], target = 6 ==> Output: [0,1]
//Input: arr = [0,1,7,2,5], target = 9 ==> Output: [2,3]

function findSum1(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log("sum", arr[i] + arr[j]);

      if (arr[i] + arr[j] === target) {
        res.push([i, j]);
      }
    }
  }
  return res;
}

// console.log(findSum1([2, 4, 6, 8], 10));

//More optimised solution
function findSum(arr, target) {
  let obj = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("obj[target - arr[i]]", obj[target - arr[i]]);

    if (obj[target - arr[i]] >= 0) {
      res.push([obj[target - arr[i]], i]);
    } else {
      obj[arr[i]] = i;
    }
  }
  return res;
}

console.log(findSum([2, 4, 6, 8], 10));

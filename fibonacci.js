//Fibonacci series- 0,1,1,2,3,5,8,13,21,34,55,89...
// F(0) => 0 , F(1) ==> 1
// F(n) ==> F(n-1) + F(n-2), for n>1
//n=3 ==> Output:2 i.e return the number which is at the n index
//n=8 ==> Output:5

function fibnonacci(n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

console.log(fibnonacci(5));

//With Recursion

function fibnonacci2(n) {
  if (n <= 1) return n;

  return fibnonacci2(n - 1) + fibnonacci2(n - 2);
}

console.log(fibnonacci2(5));
//5-1 = 4 = fibnonacci2(4) ==> fibnonacci2(3) + fibnonacci2(2)
//fibnonacci2(3) ==> fibnonacci2(2) + fibnonacci2(1)
//fibnonacci2(2) ==> fibnonacci2(1) + fibnonacci2(0)

//fibnonacci2(2) = 1+0 = 1
// fibnonacci2(3) = 1+1 = 2
//fibnonacci2(4) = 1+2 = 3

//5-2 = 3 = fibnonacci2(3) ==> fibnonacci2(2) + fibnonacci2(1)
//fibnonacci2(2) = fibnonacci2(1) + fibnonacci2(0) = 1+0 = 1
//fibnonacci2(3) = 1+1 = 2

//fibnonacci2(5) = 3+2 = 5

console.log(fibnonacci2(7));

// fibnonacci2(7) = fibnonacci2(6) + fibnonacci(5)
//  fibnonacci2(6) = fibnonacci2(5) + fibnonacci2(4)
//  fibnonacci2(5) = 5
//    fibnonacci2(4) = fibnonacci2(3) + fibnonacci2(2)
//      fibnonacci2(3) = fibnonacci2(2) + fibnonacci2(1)
//         fibnonacci2(2) = fibnonacci2(1) + fibnonacci2(0) = 1+0 = 1
//fibnonacci2(3) = 1 + 1 = 2
// fibnonacci2(4) = 2+1 = 3
// fibnonacci2(6) = 5 + 3= 8
// Thus fibnonacci2(7) = 8+5 = 13

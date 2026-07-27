// ===============================
// Bit Manipulation Cheat Sheet
// ===============================

// --------------------------------
// 1. AND (&)
// --------------------------------
let a = 5; // 0101
let b = 3; // 0011

console.log("AND (&)");
console.log(`${a} & ${b} =`, a & b); // 1
console.log();


// --------------------------------
// 2. OR (|)
// --------------------------------
let c = 5; // 0101
let d = 3; // 0011

console.log("OR (|)");
console.log(`${c} | ${d} =`, c | d); // 7
console.log();


// --------------------------------
// 3. XOR (^)
// --------------------------------
let e = 5; // 0101
let f = 3; // 0011

console.log("XOR (^)");
console.log(`${e} ^ ${f} =`, e ^ f); // 6
console.log();


// --------------------------------
// 4. NOT (~)
// --------------------------------
let g = 5;

console.log("NOT (~)");
console.log(`~${g} =`, ~g); // -6
console.log();


// --------------------------------
// 5. Left Shift (<<)
// Multiply by 2^n
// --------------------------------
let h = 5;

console.log("LEFT SHIFT (<<)");
console.log(`${h} << 1 =`, h << 1); // 10
console.log(`${h} << 2 =`, h << 2); // 20
console.log();


// --------------------------------
// 6. Right Shift (>>
// Divide by 2^n
// --------------------------------
let i = 20;

console.log("RIGHT SHIFT (>>)");
console.log(`${i} >> 1 =`, i >> 1); // 10
console.log(`${i} >> 2 =`, i >> 2); // 5
console.log();


// --------------------------------
// 7. Check if ith bit is set
// --------------------------------
let n = 10; // 1010
let bit = 1;

console.log("CHECK BIT");
console.log(
  `Is bit ${bit} set in ${n}?`,
  (n & (1 << bit)) !== 0
);
console.log();


// --------------------------------
// 8. Set ith bit
// --------------------------------
let num1 = 8; //1000

console.log("SET BIT");
console.log("Before:", num1);
num1 = num1 | (1 << 1);
console.log("After :", num1); //10
console.log();


// --------------------------------
// 9. Clear ith bit
// --------------------------------
let num2 = 10; //1010

console.log("CLEAR BIT");
console.log("Before:", num2);
num2 = num2 & ~(1 << 1);
console.log("After :", num2); //8
console.log();


// --------------------------------
// 10. Toggle ith bit
// --------------------------------
let num3 = 10; //1010

console.log("TOGGLE BIT");
console.log("Before:", num3);
num3 = num3 ^ (1 << 1);
console.log("After :", num3); //8

num3 = num3 ^ (1 << 1);
console.log("Again :", num3); //10
console.log();


// --------------------------------
// 11. Check Power of Two
// --------------------------------
function isPowerOfTwo(x) {
  return x > 0 && (x & (x - 1)) === 0;
}

console.log("POWER OF TWO");
console.log("16:", isPowerOfTwo(16));
console.log("18:", isPowerOfTwo(18));
console.log();


// --------------------------------
// 12. Count Set Bits
// --------------------------------
function countSetBits(x) {
  let count = 0;

  while (x > 0) {
    count += x & 1;
    x >>= 1;
  }

  return count;
}

console.log("COUNT SET BITS");
console.log("13:", countSetBits(13)); //3
console.log("15:", countSetBits(15)); //4
console.log();


// --------------------------------
// 13. Find Single Number
// Every element appears twice except one
// --------------------------------
function singleNumber(nums) {
  let ans = 0;

  for (const num of nums) {
    ans ^= num;
  }

  return ans;
}

console.log("SINGLE NUMBER");
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log();


// --------------------------------
// 14. Remove Lowest Set Bit
// --------------------------------
let num4 = 12; //1100

console.log("REMOVE LOWEST SET BIT");
console.log("Before:", num4);
console.log("After :", num4 & (num4 - 1)); //8
console.log();


// --------------------------------
// 15. Get Lowest Set Bit
// --------------------------------
let num5 = 12; //1100

console.log("GET LOWEST SET BIT");
console.log(num5 & -num5); //4
console.log();


// --------------------------------
// 16. Check Odd / Even
// --------------------------------
function isOdd(x) {
  return (x & 1) === 1;
}

console.log("ODD / EVEN");
console.log("7 is odd?", isOdd(7));
console.log("10 is odd?", isOdd(10));
console.log();
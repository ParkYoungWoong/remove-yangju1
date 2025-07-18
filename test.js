const nums = [6, 2, 1, 8];

// 배열.filter()
const newNums1 = nums.filter(function (num) {
  return num < 3;
});
console.log(newNums1); // [2, 1]

// for 반복문
const newNums2 = [];
for (let i = 0; i < nums.length; i += 1) {
  const num = nums[i];
  if (num < 3) {
    newNums2.push(num);
  }
}
console.log(newNums2); // [2, 1]

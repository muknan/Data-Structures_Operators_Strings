'use strict';

/*
const twoSums = function (nums, target) {
  let lookup = {};
  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let potKey = target - nums[i];
    if (lookup[potKey] && lookup[potKey] !== i) {
      return [i, lookup[potKey]];
    }
  }
};

console.log(twoSums([3, 2, 3], 6));

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const validParen = function (s) {
  const stack = [];
  let i = 0;
  const paren = `{} () []`;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];
    let p = open + close;
    if (paren.includes(p)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(validParen('(())'));

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode(-Infinity);
  let prev = dummy;

  while(l1 && l2){
      if(l1.val<=l2.val)
      {
          prev.next = l1;
          prev = l1;
          l1 = l1.next;
      }
      else{
          prev.next = l2;
          prev = l2;
          l2 = l2.next;
      }
  }

  if(!l1) prev.next = l2;
  if(!l2) prev.next = l1;

  return dummy.next;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const maxProfit = function(prices) {
  let sellIdx =  prices.length-1;
  let profit = 0;

  for(let buyIdx = prices.length-1;buyIdx>=0;buyIdx--){
      let sellVal = prices[sellIdx];
      let buyVal = prices[buyIdx];
      if(buyVal-sellVal>=0)
      {
          sellIdx = buyIdx;
      }
      else{
          let price = sellVal - buyVal;
          profit = Math.max(profit,price);
      }
  }
  return profit;
};


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  let r = str.length - 1;
  let l = 0;
  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome('ab_a'));


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

var invertTree = function(root) {
  if(root === null) return null;
  
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const isAnagram = function (s, t) {
  const map = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = ++map[s[i]] || 1;
  }

  for (const key of t) {
    if (map[key]) {
      map[key]--;
    } else return false;
  }
  return true;
};
console.log(isAnagram('anagram', 'nagaram'));


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const binarySearch = function (arr, t) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    let m = arr[mid];
    if (t === m) {
      return mid;
    }
    if (t < m) {
      e = mid - 1;
    }
    if (t > m) {
      s = mid + 1;
    }
  }
  return -1;
};
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

var floodFill = function (image, sr, sc, color) {
  const orig = image[sr][sc];

  function rec(image, sr, sc) {
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== orig ||
      image[sr][sc] === color
    ) {
      return image;
    }

    image[sr][sc] = color;
    rec(image, sr + 1, sc);
    rec(image, sr - 1, sc);
    rec(image, sr, sc + 1);
    rec(image, sr, sc - 1);
    return image;
  }
  return rec(image, sr, sc);
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const lowestCommonAncestor = function (root, p, q) {
  let result = null;

  function dfs(node) {
    if (node === null) return false;

    let left = dfs(node.left);
    let right = dfs(node.right);

    let cur = node === p || node === q;

    if (left + right + cur >= 2) result = node;

    return left || right || cur;
  }
  dfs(root);
  return result;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const isBalanced = function (root) {
  if (root === null) return true;
  return height(root) !== -1;
};

function height(node) {
  if (node === null) return 0;
  let left = height(node.left);
  let right = height(node.right);
  let bf = Math.abs(left - right);

  if (bf > 1 || left === -1 || right === -1) return -1;
  return 1 + Math.max(left, right);
}


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(val) {
    this.pushStack.push(val);
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

var solution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  };
};



//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const canConstruct = function (n, m) {
  const map = {};
  for (let i of m) {
    map[i] = ++map[i] || 1;
  }
  for (let i of n) {
    if (!map[i]) {
      return false;
    }
    map[i]--;
  }
  return true;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //  
//////////////////////////////////////////////////

const climbStairs = function (n) {
  let dp = [1, 2];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

var longestPalindrome = function(s) {
  const map = new Map();
  let len = 0;

  for (let i of s){
      let n = 0;
      if(map.has(i)){
          n = map.get(i);
          if(n%2) len+=2;
      }
      map.set(i,n+1);
  }  
  return s.length>len?len+1:len; 
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const reverseList = function (head) {
  let prev = null;
  let n;
  let cur = head;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const majorityElement = function (nums) {
  const n = nums.length - 1;
  const map = {};

  for (const i of nums) {
    map[i] = ++map[i] || 1;
  }

  for (const [key, value] of Object.entries(map)) {
    if (map[key] > n / 2) {
      return key;
    }
  }
};
majorityElement([2, 2, 1, 1, 1, 2, 2]);

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const addBinary = function (a, b) {
  let carry = 0;
  let sum;
  let l1 = a.length - 1;
  let l2 = b.length - 1;
  let res = '';

  while (l1 >= 0 || l2 >= 0) {
    sum = (Number(a[l1]) || 0) + (Number(b[l2]) || 0) + carry;
    res = (sum % 2) + res;
    carry = sum > 1 ? 1 : 0;
    l1--;
    l2--;
  }
  if (carry) res = '1' + res;
  return res;
};
console.log(addBinary('1010', '1011'));

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let max = 0;

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    max = Math.max(left + right, max);

    return Math.max(left, right) + 1;
  }
  dfs(root);
  return max;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const middleNode = function (head) {
  let s = head;
  let f = head;

  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }
  return s;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const containsDuplicate = function (nums) {
  // Using Sets
  let uni = [...new Set(nums)];
  return !(uni.length === nums.length);

  //Using hashmaps
  const map = {};
  for (const i of nums) {
    map[i] = ++map[i] || 1;
    if (map[i] > 1) return true;
  }
  return false;
};
console.log(containsDuplicate([1, 1, 2, 3, 4]));


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const canAttend = function (i) {
  if (i.length < 2) return true;
  i.sort((a, b) => a[0] - b[0]);

  // 2nd element (end time) of first tuple of sorted array
  let end = i[0][1];

  for (let x = 1; x < i.length; x++) {
    if (end > i[x][0]) return false;
    if (end < i[x][1]) end = i[x][1];
  }
  return true;
};
console.log(
  canAttend([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const romanToInt = function (s) {
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];

    if (symbols[curr] < symbols[next]) total -= symbols[curr];
    else total += symbols[curr];
  }
  return total;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const backspaceCompare = function (s, t) {
  const back = function (str) {
    const res = [];
    for (const i of str) {
      if (i === '#') {
        res.pop();
      } else {
        res.push(i);
      }
    }
    return res.join();
  };
  return back(s) === back(t);
};
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));


//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++)
    res.push(Number(i).toString(2).replace(/0/g, '').length);
  return res;
};
countBits(5);

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const isSameTree = function(p, q) {

    if(p===null&&q===null) return true;
    if(p===null||q===null) return false;

    if(p.val === q.val){
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
    return false;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const hammingWeight = function (n) {
  let count = 0;

  while (n != 0) {
    let one = n & 1;
    if (one === 1) count++;
    n = n >>> 1;
  }
  return count;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let pr = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(pr) != 0) {
      pr = pr.substring(0, pr.length - 1);
    }
  }
  return pr;
};
longestCommonPrefix(['flower', 'flow', 'flight']);

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const singleNumber = function (nums) {
  let res = 0;
  for (const i of nums) {
    res ^= i;
  }
  return res;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const rev = function (head) {
  let cur = head;
  let prev = null;
  let next;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

var isPalindrome = function (head) {
  let sp = head;
  let s = head;
  let f = head;
  let len = 0;

  while (f && f.next) {
    f = f.next.next;
    s = s.next;
    len++;
  }

  let mid = rev(s);

  while (len) {
    len--;
    if (mid.val !== sp.val) return false;
    mid = mid.next;
    sp = sp.next;
  }
  return true;
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const moveZeroes = function (nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[n] = nums[i];
      n++;
    }
  }
  for (let i = n; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
moveZeroes([0, 1, 0, 3, 12]);

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

var isSymmetric = function (root) {
  const dfs = (l, r) => {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false;

    return dfs(l.left, r.right) && dfs(l.right, r.left);
  };
  return dfs(root.left, root.right);
};

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const missingNumber = function (nums) {
  // let map = {};
  // const n = nums.length;
  // for (const i of nums) {
  //   map[i] = ++map[i] || 1;
  // }
  // for (let i = 0; i <= n; i++) {
  //   if (!map[i]) return i;
  // }
  // return -1;

  let n = nums.length;
  let nSum = (n * (n + 1)) / 2; // Sum on n digits from 0 to n equation

  const sum = nums.reduce((a, s) => (s += a), 0);

  return nSum - sum;
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
*/

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

const isPalindrome = function (x) {
  let rev = 0;
  if (x < 0) return false;

  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + (i % 10);
  }

  return rev === x;
};
isPalindrome(123);

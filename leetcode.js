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
*/

//////////////////////////////////////////////////
// --------------- Next problem --------------- //
//////////////////////////////////////////////////

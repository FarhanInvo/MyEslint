const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  const set = new Set(); // use a set to keep track of the letters in the current window
  let maxSubstringLength = 0;

  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      // check if new window is longer than the longest window
      maxSubstringLength = Math.max(maxSubstringLength, set.size);
      right++; // increase window to the right
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }

  return maxSubstringLength;
};
console.log(lengthOfLongestSubstring("farhankhan"));

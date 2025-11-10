function longestSubsequence(nums, diff) {
  const dp = new Map();
  let maxLen = 0;

  for (const num of nums) {
    const prev = dp.get(num - diff) || 0;
    dp.set(num, prev + 1);
    maxLen = Math.max(maxLen, dp.get(num));
  }

  return maxLen;
}
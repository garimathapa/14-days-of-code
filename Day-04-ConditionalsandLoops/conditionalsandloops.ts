function longestSubsequence(nums: number[], diff: number): number {
  const dp: Map<number, number> = new Map();
  let maxLen = 0;

  for (const num of nums) {
    const prev = dp.get(num - diff) ?? 0;
    dp.set(num, prev + 1);
    maxLen = Math.max(maxLen, dp.get(num)!);
  }

  return maxLen;
}

// Sample Problem
// Valid Anagram: Given two strings s and t, return true if t is an anagram of s.

// Example:
// Input: s = "anagram", t = "nagaram"

// Output: true

const isAnagarm = (s, t) => {
  if (s.length != t.length) return false;

  const freq = {};
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (const ch of t) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;
};

let s = "anagram";
let t = "nagaram";

console.log(isAnagarm(s, t));

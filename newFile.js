// 1) Sum To Zero
function addToZero(arr) {
    const numSet = new Set();

    for (const num of arr) {
        if (numSet.has(-num)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}
// Runtime: O(n)

// 2) Unique Characters
function hasUniqueChars(word) {
    const charSet = new Set();

    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}
// Runtime: O(n)

// 3) Pangram Sentence
function isPangram(sentence) {
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');

    for (const char of sentence.toLowerCase()) {
        alphabetSet.delete(char);
    }

    return alphabetSet.size === 0;
}
// Runtime: O(n)

// 4) Longest Word
function findLongestWord(words) {
    let longestLength = 0;

    for (const word of words) {
        longestLength = Math.max(longestLength, word.length);
    }

    return longestLength;
}
// Runtime: O(n)

// addToZero: O(n) - It uses a Set to store elements from the input array. The space complexity is directly proportional to the size of the input array, hence O(n).

// hasUniqueChars: O(n) - It uses a Set to store unique characters from the input word. The space complexity is directly proportional to the size of the input word, hence O(n).

// isPangram: O(1) - It uses a Set with constant size (26) to store the English alphabet. The space complexity is constant regardless of the size of the input sentence.

// findLongestWord: O(1) - It only uses a few constant variables (such as longestLength), not dependent on the input size. The space complexity is constant regardless of the size of the input list of words.





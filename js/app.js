{
    // 8 - misol
    // function twoSum(nums, target) {
    //     const map = new Map();
    //     for (let i = 0; i < nums.length; i++) {
    //         const complement = target - nums[i];
    //         if (map.has(complement)) {
    //             return [map.get(complement), i]; // Return the indices
    //         }
    //         map.set(nums[i], i);
    //     }
    //     return [];
    // }
    
    // console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
    
}

{
    // 9 - misol
    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];
    // }
    
    // console.log(removeDuplicates([1, 3, 2, 3])); // Output: [1, 3, 2]
    
}

{
    // 10 - misol
    // function getLevel(n) {
    //     const result = [];
    //     let power = 1;
    //     while (power <= n) {
    //         result.push(power);
    //         power *= 2;
    //     }
    //     return result;
    // }
    
    // console.log(getLevel(4));  // Output: [2, 4, 8, 16]
    // console.log(getLevel(5));  // Output: [2, 4, 8, 16, 32]
    
}

{
    // 11 - misol
    // const sumDigits = (num) => num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

    // console.log(sumDigits(123));  // Output: 6

}

{
    // 12 - misol
    // const sumArrayDigits = (arr) => {
    //     const sum = arr.reduce((acc, num) => acc + num, 0);
    //     return sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    // };
    
    // console.log(sumArrayDigits([2, 3, 21])); // Output: 6 (since 2 + 3 + 21 = 26, and 2 + 6 = 8)
    
}

{
    // 13 - misol
    // function isPalindrome(str) {
    //     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Clean string
    //     return cleaned === cleaned.split('').reverse().join('');
    // }
    
    // console.log(isPalindrome('madam'));  // Output: true
    // console.log(isPalindrome('racecar')); // Output: true
    // console.log(isPalindrome('hello'));   // Output: false
    
}

{
    // 14 - misol
    // const obj = { a: 1, b: 22 };
    // const sumValues = (obj) => Object.values(obj).reduce((acc, val) => acc + val, 0);

    // console.log(sumValues(obj));  // Output: 23

}

{
    // 15 - misol
    // function startsWithVowel(str) {
    //     str = str.trim(); // Trim spaces
    //     return /^[aeiouAEIOU]/.test(str); // Regex to check first letter
    // }
    
    // console.log(startsWithVowel(" apple")); // Output: true
    // console.log(startsWithVowel(" banana")); // Output: false
    
}

{
    // 16 - misol
    // function getInitialOdds(n) {
    //     const result = [];
    //     for (let i = 1; i <= n; i += 2) {
    //         result.push(i);
    //     }
    //     return result;
    // }
    
    // console.log(getInitialOdds(3)); // Output: [1, 3]
    
}

{
    // 17 - misol
    // function mergeTwoLists(list1, list2) {
    //     return [...list1, ...list2];  // Using spread operator
    // }
    
    // console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));  // Output: [1, 2, 4, 1, 3, 4]
    
}

{
    // 18 - misol
    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];  // Using Set to remove duplicates
    // }
    
    // console.log(removeDuplicates([1, 2, 3, 3, 2, 1]));  // Output: [1, 2, 3]
    
}

{
    // 19 - misol
    // function reverseNumber(x) {
    //     return parseInt(x.toString().split('').reverse().join(''), 10);
    // }
    
    // console.log(reverseNumber(123));  // Output: 321
    
}

{
    // 20 - misol
    // function findMiddle(arr) {
    //     const middleIndex = Math.floor(arr.length / 2);
    //     return arr.length % 2 === 0 ? (arr[middleIndex - 1] + arr[middleIndex]) / 2 : arr[middleIndex];
    // }
    
    // console.log(findMiddle([1, 2, 3, 4, 5]));  // Output: 3
    // console.log(findMiddle([1, 2, 3, 4]));    // Output: 2.5
    
}

{
    // 21 - misol
    // function isPrime(n) {
    //     if (n <= 1) return false;
    //     for (let i = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i === 0) return false;
    //     }
    //     return true;
    // }
    
    // console.log(isPrime(7));  // Output: true
    // console.log(isPrime(10)); // Output: false
    
}

{
    // 22 - misol
    // function powerOfNumber(base, exponent) {
    //     return Math.pow(base, exponent);
    // }
    
    // console.log(powerOfNumber(8, 3));  // Output: 512
    
}

{
    // 23 - misol
    // function isPerfectNumber(num) {
    //     let sum = 0;
    //     for (let i = 1; i < num; i++) {
    //         if (num % i === 0) {
    //             sum += i;
    //         }
    //     }
    //     return sum === num;
    // }
    
    // console.log(isPerfectNumber(6));   // Output: true (6 = 1 + 2 + 3)
    // console.log(isPerfectNumber(28));  // Output: true (28 = 1 + 2 + 4 + 7 + 14)
    
}

{
    // 24 - misol
    // function countFactors(n) {
    //     let count = 0;
    //     for (let i = 1; i <= n; i++) {
    //         if (n % i === 0) {
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    
    // console.log(countFactors(12));  // Output: 6 (1, 2, 3, 4, 6, 12)
    
}

{
    // 25 - misol
    // function countLettersInWords(str) {
    //     return str.split(' ').map(word => word.length);
    // }
    
    // console.log(countLettersInWords("hello world"));  // Output: [5, 5]
    
}

{
    // 26 - misol
    // function shortestWord(str) {
    //     const words = str.split(' ');
    //     return words.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
    // }
    
    // console.log(shortestWord("find the shortest word"));  // Output: "the"
    
}

{
    // 27 - misol
    // function checkStringOrNumber(input) {
    //     return typeof input === 'string' ? 'string' : 0;
    // }
    
    // console.log(checkStringOrNumber("hello"));  // Output: "string"
    // console.log(checkStringOrNumber(123));      // Output: 0
    
}

{
    // 28 - misol
    // function reverseString(str) {
    //     return str.split('').reverse().join('');
    // }
    
    // console.log(reverseString("hello"));  // Output: "olleh"
    
}

{
    // 29 - misol
    // function countDigitsInString(str) {
    //     return (str.match(/\d/g) || []).length;  // Use regex to match digits
    // }
    
    // console.log(countDigitsInString("abc123def456"));  // Output: 6
    
}

{
    // 30 - misol
    // function reverseNumber(num) {
    //     return parseInt(num.toString().split('').reverse().join(''), 10);
    // }
    
    // console.log(reverseNumber(12345));  // Output: 54321
    
}


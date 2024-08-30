//Check if a word is a anagram
//a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.
//Input: s = "anagram" , t = "nagarma" ==> Output: true
//Input: s = "rat" , t = "car" ==> Output: false

function anagram1(s, t) {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");

  return str1 == str2;
}

anagram1("ice", "cie");

//More optimised solution

function anagram(s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
    return true;
  }
}

console.log(anagram("tara", "rata"));

function hidePhone(phoneNumber) {
  const trimmedNumber = phoneNumber.trim();
  const hiddenNumber = trimmedNumber.slice(0, -2) + "xx";
  return hiddenNumber;
}
const phone = "+996 555 123 123";
console.log(hidePhone(phone));

function charCount(str, char) {
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) {
      count++;
    }
  }

  return count;
}
console.log(charCount("Abrakadabra", "a"));
console.log(charCount("hello", "z"));

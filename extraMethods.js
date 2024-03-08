// function capitalizeSentence(sentence) {
//   // Your implementation here
//   const words = sentence.split(" ");
//   const capitalizedWords = [];
//   //captitalise the first letter of each word
//   words.forEach((element) => {
//     const capitalizedWord = element.charAt(0).toUpperCase() + element.slice(1);
//     capitalizedWords.push(capitalizedWord);
//   });
//   // join the captilised words into a sentence
//   const capitalizedSentence = capitalizedWords.join(" ");
//   return capitalizedSentence;
// }

// const sentence = "Hello World how are you ?";
// const result = capitalizedSentence(sentence);
// console.log(result);

// // method 2
// // use map to capitalize the first letter of the sentence

// function capitalizedSentence(sentence) {
//   const words = sentence.split(" ");
//   const capitalizedWords = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   const capitalizedSentence = capitalizedWords.join(" ");
//   return capitalizedSentence;
// }

// calculate new index of the elements in the array
// how many rotations required?
// return new array
// function rotateArray(array, numRotations) {
//   const newArray = [];
//   const effectiveRotations = numRotations % array.length();
//   array.forEach((element, index) => {
//     const new_index = (index + effectiveRotations) % array.length();
//     newArray[new_index] = element;
//   });
//   return newArray;
//   // Your implementation here
// }

// ? for each method
// function check(arr, target) {
//   // Your implementation here
//   const l = arr.length;
//   for (let i = 0; i < l - 1; ++i) {
//     for (let j = i + 1; j < l; ++j) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
function analyzeMarks(marks) {
  const markValues = Object.values(marks);
  if (markValues.length === 0) {
    return [0, 0, 0];
  }

  const sum = markValues.reduce((total, mark) => total + mark, 0);
  const avg = Math.round(((sum / markValues.length) * 100) / 100);

  let highest = markValues[0];
  let lowest = markValues[0];
  for (const currentMark of markValues) {
    if (currentMark > highest) {
      highest = currentMark;
    }
    if (currentMark < lowest) {
      lowest = currentMark;
    }
  }
  return [lowest, highest, avg];
}

const studentMarks = {
  math: 90,
  english: 85,
  science: 78,
  history: 92,
};

const result = analyzeMarks(studentMarks);

console.log("Lowest:", result[0]);
console.log("Highest:", result[1]);
console.log("Average:", result[2]);

import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTwoSum = `function twoSum() {
    // Your code here
}`;

//check if the user has the correct code
const handlerTwoSum = (fn: any) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];
    const targets = [9, 6, 6];
    const outputs = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];
    //loop through the inputs and check if the user's function returns the correct output
    for (let i = 0; i < nums.length; i++) {
      //result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Two sum handler function error");
    throw new Error(error);
  }
};

export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: `Given an array of integers <code>nums</code> and an integer{" "}
  <code>target</code>, return
  <em>
    indices of the two numbers such that they add up to
  </em>{" "}
  <code>target</code>`,
  examples: [
    {
      id: 1,
      inputText: "[2,7,11,15], target=9",
      outputText: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "[3,2,4], target=6",
      outputText: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: "[3,3], target=6",
      outputText: "[0,1]",
    },
  ],
  constraints: `<li class="mt-2">
  <code>2 ≤ nums.length ≤ 10</code>
</li>

<li class="mt-2">
  <code>-10 ≤ nums[i] ≤ 10</code>
</li>
<li class="mt-2">
  <code>-10 ≤ target ≤ 10</code>
</li>
<li class="mt-2 text-sm">
  <strong>Only one valid answer exists.</strong>
</li>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum()",
};

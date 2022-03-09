import { numbersArraySchema, stringsArraySchema } from ".";

describe("testing array of numbers", () => {
  it("[] is an empty array", async () => {
    const arr: never[] = [];
    const isValid = await numbersArraySchema.isValid(arr);
    expect(isValid).toBe(false);
  });
  it("[1, 2] is an array of numbers", async () => {
    const arr = [1, 2];
    const isValid = await numbersArraySchema.isValid(arr);
    expect(isValid).toBe(true);
  });
  it("['one', 'two'] is an array of string", async () => {
    const arr = ["one", "two"];
    const isValid = await numbersArraySchema.isValid(arr);
    expect(isValid).toBe(false);
  });
  it("[101, 12] is an array of numbers that has number out of range", async () => {
    const arr = [101, 12];
    const isValid = await numbersArraySchema.isValid(arr);
    expect(isValid).toBe(false);
  });
});

// test array of strings
describe("testing array of strings(only alphabets)", () => {
  it("['one', 'two'] is an array of strings", async () => {
    const arr = ["one", "two"];
    const isValid = await stringsArraySchema.isValid(arr);
    expect(isValid).toBe(true);
  });
  it("[1, 2] is not an array of strings", async () => {
    const arr = [1, 2];
    const isValid = await stringsArraySchema.isValid(arr);
    expect(isValid).toBe(false);
  });
  it("[101, 12] is not an array of strings", async () => {
    const numbers = ["101", 12];
    const isValid = await stringsArraySchema.isValid(numbers);
    expect(isValid).toBe(false);
  });
});

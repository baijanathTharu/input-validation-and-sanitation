import {
  negativeNumberSchema,
  numberInRangeSchema,
  positiveNumberSchema,
} from ".";

describe("testing positive number schema", () => {
  it('"abc" is an invalid number', async () => {
    const isValid = await positiveNumberSchema.isValid({ number: "abc" });
    expect(isValid).toBeFalsy();
  });
  it("2 is a positive number", async () => {
    const isValid = await positiveNumberSchema.isValid({ number: 2 });
    expect(isValid).toBeTruthy();
  });
  it("2.25 is a positive number", async () => {
    const isValid = await positiveNumberSchema.isValid({ number: 2.25 });
    expect(isValid).toBeTruthy();
  });

  it("-2 is a negative number", async () => {
    const isValid = await positiveNumberSchema.isValid({ number: -2 });
    expect(isValid).toBeFalsy();
  });
  it("-2.25 is a negative number", async () => {
    const isValid = await positiveNumberSchema.isValid({ number: -2.25 });
    expect(isValid).toBeFalsy();
  });
});

describe("testing negative number schema", () => {
  it("2 is a positive number", async () => {
    const isValid = await negativeNumberSchema.isValid({ number: 2 });
    expect(isValid).toBeFalsy();
  });

  it("-2 is a negative number", async () => {
    const isValid = await negativeNumberSchema.isValid({ number: -2 });
    expect(isValid).toBeTruthy();
  });
});

describe("testing number in a range schema", () => {
  it("0 is in between 0 and 10", async () => {
    const isValid = await numberInRangeSchema.isValid({ number: 0 });
    expect(isValid).toBeTruthy();
  });
  it("10 is in between 0 and 10", async () => {
    const isValid = await numberInRangeSchema.isValid({ number: 10 });
    expect(isValid).toBeTruthy();
  });
  it("2 is in between 0 and 10", async () => {
    const isValid = await numberInRangeSchema.isValid({ number: 2 });
    expect(isValid).toBeTruthy();
  });
  it("-2 is not in between 0 and 10", async () => {
    const isValid = await numberInRangeSchema.isValid({ number: -2 });
    expect(isValid).toBeFalsy();
  });
  it("12 is in between 0 and 12", async () => {
    const isValid = await numberInRangeSchema.isValid({ number: 12 });
    expect(isValid).toBeFalsy();
  });
});

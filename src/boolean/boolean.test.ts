import { booleanSchema } from ".";

describe("testing boolean", () => {
  it("true is a valid boolean", async () => {
    const isValid = await booleanSchema.isValid({
      value: true,
    });
    expect(isValid).toBe(true);
  });
  it("false is a valid boolean", async () => {
    const isValid = await booleanSchema.isValid({
      value: false,
    });
    expect(isValid).toBe(true);
  });

  it("null is an invalid boolean", async () => {
    const isValid = await booleanSchema.isValid({
      value: null,
    });
    expect(isValid).toBe(false);
  });
  it("undefined is an invalid boolean", async () => {
    const isValid = await booleanSchema.isValid({
      value: undefined,
    });
    expect(isValid).toBe(false);
  });
  it("string is an invalid boolean", async () => {
    const isValid = await booleanSchema.isValid({
      value: "string",
    });
    expect(isValid).toBe(false);
  });
});

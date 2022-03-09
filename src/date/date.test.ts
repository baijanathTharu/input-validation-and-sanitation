import { dateSchema } from ".";

describe("testing date schem", () => {
  it("2022/03/09 is a valid date", async () => {
    const isValid = await dateSchema.isValid({
      date: "2022/03/09",
    });
    expect(isValid).toBe(true);
  });
  it("12/03/2022 is out of range", async () => {
    const isValid = await dateSchema.isValid({
      date: "2022/03/12",
    });
    expect(isValid).toBe(false);
  });
  it("2022-03-08T00:00:00.000Z is a valid date", async () => {
    const isValid = await dateSchema.isValid({
      date: "2022-03-08T00:00:00.000Z",
    });
    expect(isValid).toBe(true);
  });
  it("2022-03-09T09:33:10.694Z is out of range", async () => {
    const isValid = await dateSchema.isValid({
      date: "2022-03-09T09:33:10.694Z",
    });
    expect(isValid).toBe(false);
  });
});

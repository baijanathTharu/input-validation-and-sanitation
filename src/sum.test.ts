import { sum } from "./index";

describe("testing sum", () => {
  it("should return 5 when adding 2 and 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

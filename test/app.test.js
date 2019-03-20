const createApp = require("../lib/app");

describe("createApp()", () => {
  it("is Function", () => {
    expect(createApp).toBeInstanceOf(Function);
  });
});
  
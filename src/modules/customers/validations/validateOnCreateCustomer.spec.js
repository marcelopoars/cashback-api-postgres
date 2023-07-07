const { validateOnCreateCustomer } = require(".");

describe(":: modules :: customers :: validations :: validateOnCreateCustomer", () => {
  it("should throw an error if any field is empty", () => {
    expect(() => validateOnCreateCustomer(null, "123", "foo", "123")).toThrow(
      "All fields are required"
    );
  });

  it("should not throw an error if all validations pass", () => {
    expect(() =>
      validateOnCreateCustomer(
        "Maria",
        "999.999.999-99",
        "Porto Alegre",
        "(99)99999-9999"
      )
    ).not.toThrow();
  });
});

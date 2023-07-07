const { validateOnCreateUser } = require("./");

describe(":: modules :: users :: validations :: validateOnCreateUser", () => {
  it("should throw an error if any field is empty", () => {
    expect(() =>
      validateOnCreateUser({
        name: "Maria",
        email: "marial@email.com",
        password: "1234",
        confirm_password: "",
      })
    ).toThrow("All fields are required");
  });

  it("should throw an error if passwords do not match", () => {
    expect(() =>
      validateOnCreateUser({
        name: "Maria",
        email: "marial@email.com",
        password: "1234",
        confirm_password: "123456",
      })
    ).toThrow("Passwords do not match");
  });

  it("should not throw an error if all validations pass", () => {
    expect(() =>
      validateOnCreateUser({
        name: "Maria",
        email: "marial@email.com",
        password: "1234",
        confirm_password: "1234",
      })
    ).not.toThrow();
  });
});

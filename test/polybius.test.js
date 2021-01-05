const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("Should return 42 for i/j", () => {
    const actual = polybius("johnny");
    expect(actual).to.equal("424332333345");
  })

  it("should return i/j for 42 when decoding", () => {
    const actual = polybius("424332333345", false);
    expect(actual).to.equal("(i/j)ohnny");
  })

  it("should return the same result regardless of case", () => {
    const actual = polybius("Johnny");
    expect(actual).to.equal("424332333345");
  })

  it("should maintain non-alphabet characters and spaces", () => {
    //const actual = polybius("Johnny Johnny");
    //expect(actual).to.equal('424332333345 424332333345');

    const actualDecode = polybius("424332333345 424332333345", false);
    expect(actualDecode).to.equal("(i/j)ohnny (i/j)ohnny");
  })

  it("should return false if the decode input string's length is odd", () => {
    const actual = polybius("42433233334 424332333345", false);
    expect(actual).to.equal(false);
  })
})
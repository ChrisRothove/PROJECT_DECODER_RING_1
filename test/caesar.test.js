const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift is zero, > 25, < -25, or missing", () => {
    const actualZero = caesar("caesar", 0,);
    expect(actualZero).to.equal(false);

    const actualMoreThan25 = caesar("caesar", 27);
    expect(actualMoreThan25).to.equal(false);

    const actualLessThanN25 = caesar("caesar", -28);
    expect(actualLessThanN25).to.equal(false);
    
    const actualMissing = caesar("caesar");
    expect(actualMissing).to.equal(false);

    const actualZeroDecode = caesar("caesar", 0, false);
    expect(actualZeroDecode).to.equal(false);

    const actualMoreThan25Decode = caesar("caesar", 27, false);
    expect(actualMoreThan25Decode).to.equal(false);

    const actualLessThanN25Decode = caesar("caesar", -28, false);
    expect(actualLessThanN25Decode).to.equal(false);
    
    const actualMissingDecode = caesar("caesar", false);
    expect(actualMissingDecode).to.equal(false);
  })

  it("Should ignore capitol letters", () => {
    const actual = caesar("Caesar", 1);
    expect(actual).to.equal("dbftbs");

    const actualDecode = caesar("DBFtbs", 1, false);
    expect(actualDecode).to.equal("caesar");
  })

  it("should keep non-letters intact when encoding/decoding", () => {
    const actualDecode = caesar("dbftbs!", 1, false);
    expect(actualDecode).to.equal("caesar!");

    const actualEncode = caesar("caesar!", 1)
    expect(actualEncode).to.equal("dbftbs!");
  })

  it("should wrap from end of alphabet to beginning", () => {
    const actualPositive = caesar("xyz", 3);
    expect(actualPositive).to.equal("abc");

    const actualNegative = caesar("abc", -3);
    expect(actualNegative).to.equal("xyz")
  })

  it("should successfully encode using a negative shift number", () => {
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal("qefkhcri")

    const actualDecode = caesar("qefkhcri", -3, false);
    expect(actualDecode).to.equal("thinkful");
  })
})
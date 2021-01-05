const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("Should return false if the length of the sub alph isn't 26", () => {
    const actual = substitution("Sub", "agsklupf");
    expect(actual).to.equal(false);
  })

  it("Should successfully translate using substitution alph", () => {
    const actual = substitution("substitute", "bcdefghijklmnopqrstuvwxyza");
    expect(actual).to.equal("tvctujuvuf");
    
    const actualReverse = substitution("tvctujuvuf", "bcdefghijklmnopqrstuvwxyza", false);
    expect(actualReverse).to.equal("substitute");
  })

  it("Should ignore special characters and capitals when encoding", () => {
    const actual = substitution("My Substitute!", "bcdefghijklmnopqrstuvwxyza");
    expect(actual).to.equal("nz tvctujuvuf!");
  })

  it("should also ignore spaces when decoding", () => {
    const actual = substitution("nz tvctujuvuf", "bcdefghijklmnopqrstuvwxyza", false);
    expect(actual).to.equal("my substitute");
  })

  it("should return false if letters repeat in the sub alph", () => {
    const actual = substitution("substitute", "bcdefghijklmnopqrstuvwxyzb");
    expect(actual).to.equal(false);
  })

  it("should return lowercase letters even if there are uppercase letters in the substitute alphabet", () => {
    const actual = substitution("substitute", "BCDEFGHIJKLMNOPQRSTUVWXYZA");
    expect(actual).to.equal("tvctujuvuf");
  })
})
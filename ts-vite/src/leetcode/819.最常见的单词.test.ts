import { mostCommonWord } from "./819.最常见的单词";

describe("819.最常见的单词", () => {
    it("test", () => {
        expect(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toEqual("ball");
        expect(mostCommonWord("a.", [])).toEqual("a");
        expect(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"])).toEqual("ball");
        expect(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])).toEqual("b");
        expect(mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toEqual("ball");
    });
});
import {
  agoraTokenUrl,
  awtTokenUrl,
  estimateExamples,
  serviceAreas,
  tokenFacts,
  tokenId,
  tokenIdShort,
} from "@/lib/awt";

describe("AWT content", () => {
  it("keeps the public token offer measurable", () => {
    expect(tokenFacts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ value: "1 AWT = 1 hour" }),
        expect.objectContaining({ value: "2.5M XEC / hour" }),
        expect.objectContaining({ value: "65% off my standard rate" }),
      ]),
    );
    expect(tokenFacts).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "Standard rate" }),
        expect.objectContaining({ label: "Weekly cap" }),
        expect.objectContaining({ label: "Monthly block" }),
      ]),
    );
    expect(tokenId).toHaveLength(64);
    expect(tokenIdShort).toBe("4d428e29...c7ab1bb0");
    expect(awtTokenUrl).toContain(tokenId);
    expect(agoraTokenUrl).toContain(tokenId);
    expect(serviceAreas.length).toBeGreaterThanOrEqual(7);
    expect(estimateExamples).toHaveLength(4);
  });
});

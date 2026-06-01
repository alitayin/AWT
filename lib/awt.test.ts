import { estimateExamples, serviceAreas, tokenFacts } from "@/lib/awt";

describe("AWT content", () => {
  it("keeps the public token offer measurable", () => {
    expect(tokenFacts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ value: "1 AWT = 1 hour" }),
        expect.objectContaining({ value: "2.5M XEC / hour" }),
        expect.objectContaining({ value: "50% of my standard rate" }),
        expect.objectContaining({ value: "50 AWT" }),
        expect.objectContaining({ value: "200 AWT" }),
      ]),
    );
    expect(serviceAreas.length).toBeGreaterThanOrEqual(7);
    expect(estimateExamples).toHaveLength(4);
  });
});

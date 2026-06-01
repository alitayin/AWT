import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TokenReadinessBoard } from "@/components/token-readiness-board";
import { defaultReadinessItems } from "@/lib/project-contract";

describe("TokenReadinessBoard", () => {
  it("switches lanes and reveals the verification checklist", async () => {
    const user = userEvent.setup();

    render(<TokenReadinessBoard items={defaultReadinessItems} />);

    expect(
      screen.getByRole("region", { name: "Initialization control board" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Claude and agent entrypoints"),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Verification" }));

    expect(screen.getByText("Unit test checkpoint")).toBeInTheDocument();
    expect(
      screen.queryByText("Claude and agent entrypoints"),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show checklist" }));

    expect(screen.getByTestId("verification-checklist")).toHaveTextContent(
      "pnpm test:e2e",
    );
  });
});

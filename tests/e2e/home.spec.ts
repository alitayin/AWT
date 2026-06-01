import { expect, test } from "@playwright/test";

test("shows the initialized harness board and checklist", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "AlitaToken starts with a strict delivery harness.",
    }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Verification" }).click();
  await expect(page.getByText("Unit test checkpoint")).toBeVisible();

  await page.getByRole("button", { name: "Show checklist" }).click();
  await expect(page.getByTestId("verification-checklist")).toContainText(
    "pnpm test:e2e",
  );
});

import { expect, test } from "@playwright/test";

test("shows the AWT intro page and theme toggle", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Alita Work Token", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("1 AWT = 1 hour").first()).toBeVisible();
  await expect(page.getByText("2.5M XEC / hour").first()).toBeVisible();
  await expect(page.getByText("50% of my standard rate").first()).toBeVisible();
  await expect(page.getByText("50 AWT").first()).toBeVisible();
  await expect(page.getByText("200 AWT").first()).toBeVisible();
  await expect(page.getByText("What you can buy")).toBeVisible();
  await expect(page.getByAltText("Alita profile")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "t.me/alitayin" }),
  ).toHaveAttribute("href", /t\.me\/alitayin/);
  await expect(
    page.getByRole("link", { name: "Cashtab token" }),
  ).toHaveAttribute("href", /cashtab\.com/);

  await page.getByRole("button", { name: "Switch to dark mode" }).click();

  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(
    page.getByRole("button", { name: "Switch to light mode" }),
  ).toBeVisible();
});

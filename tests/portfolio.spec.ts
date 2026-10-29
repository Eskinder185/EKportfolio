import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("search, category intersections and empty-state recovery", async ({
  page,
}) => {
  await page.goto("/#projects");
  await expect(page.getByRole("article")).toHaveCount(10);
  await page
    .getByRole("searchbox", { name: "Search projects" })
    .fill("typescript");
  await expect(page.getByRole("article")).toHaveCount(4);
  await page
    .getByRole("button", { name: "Cloud & security", exact: true })
    .click();
  await expect(page.getByRole("article")).toHaveCount(0);
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  await expect(page.getByRole("article")).toHaveCount(10);
  await page.getByRole("button", { name: "AI", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Pirate Intelligent Agent" }),
  ).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(1);
});

test("shareable project routes, history and unavailable demos", async ({
  page,
}) => {
  await page.goto("/#project/johnnycloud");
  await expect(
    page.getByRole("heading", { name: "JohnnyCloud", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Live demo unavailable", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View repository" }),
  ).toHaveAttribute("href", "https://github.com/Eskinder185/JohnnyCloud");
  await page.getByRole("link", { name: "All projects", exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await page.goBack();
  await expect(page).toHaveURL(/#project\/johnnycloud$/);
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "JohnnyCloud", exact: true }),
  ).toBeVisible();
  await page.goto("/#project/unknown");
  await expect(
    page.getByRole("heading", { name: "Project not found" }),
  ).toBeVisible();
});

test("theme persists and skill selection works by keyboard", async ({
  page,
}) => {
  await page.goto("/#skills");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  const skill = page.getByRole("button", { name: /Frontend/ });
  await skill.focus();
  await page.keyboard.press("Enter");
  await expect(skill).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("link", { name: "Explore related work: CodeRush" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("navigation, focus, contact links and mobile menu", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(
      page.getByRole("button", { name: "Close menu" }),
    ).toHaveAttribute("aria-expanded", "true");
  }
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Connect" })
    .click();
  await expect(page.locator("main")).toBeFocused();
  await expect(
    page.getByRole("link", { name: "eskinderkassahun25@gmail.com" }),
  ).toHaveAttribute("href", "mailto:eskinderkassahun25@gmail.com");
  if (testInfo.project.name === "mobile") {
    await expect(
      page.getByRole("button", { name: "Open menu" }),
    ).toHaveAttribute("aria-expanded", "false");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Open menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  }
});

test("reduced motion and narrow layouts remain usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(
    await page
      .locator(".orbit-two")
      .evaluate((e) => getComputedStyle(e).animationName),
  ).toBe("none");
  for (const route of [
    "home",
    "projects",
    "skills",
    "journey",
    "contact",
    "project/johnnycloud",
  ]) {
    await page.goto("/#" + route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

for (const theme of ["dark", "light"]) {
  test(`accessible primary pages in ${theme} theme`, async ({ page }) => {
    await page.goto("/");
    await page.evaluate((t) => localStorage.setItem("ek-theme", t), theme);
    await page.reload();
    for (const route of [
      "home",
      "projects",
      "skills",
      "journey",
      "contact",
      "project/coderush",
      "project/johnnycloud",
    ]) {
      await page.goto("/#" + route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(
        result.violations,
        JSON.stringify(
          result.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
          null,
          2,
        ),
      ).toEqual([]);
    }
  });
}

test("retained pages still load", async ({ page }) => {
  for (const route of ["about", "experience", "case-studies", "books"]) {
    await page.goto("/#" + route);
    await expect(page.locator(".legacy-content h1")).toBeVisible();
  }
});

import { expect, test } from "@playwright/test";

test.describe("accueil Ouest Web Calvados", () => {
  test("présente une offre locale claire et responsive", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveTitle(/Ouest Web Calvados/);

    const heading = page.getByRole("heading", {
      level: 1,
      name: "Votre métier mérite un site qui donne envie de vous contacter localement.",
    });
    await expect(heading).toBeVisible();
    await expect(page.getByText("Deux sites déjà publiés dans le Calvados")).toBeVisible();
    await expect(page.getByRole("link", { name: "Voir les offres" })).toHaveAttribute("href", "#tarifs");

    const styles = await heading.evaluate((element) => {
      const headingStyle = getComputedStyle(element);
      const actionStyle = getComputedStyle(document.querySelector(".primary-cta")!);
      return {
        family: headingStyle.fontFamily,
        size: Number.parseFloat(headingStyle.fontSize),
        weight: Number.parseInt(headingStyle.fontWeight, 10),
        actionBackground: actionStyle.backgroundColor,
      };
    });
    expect(styles.family).toContain("Archivo");
    expect(styles.size).toBeGreaterThanOrEqual(40);
    expect(styles.weight).toBeGreaterThanOrEqual(700);
    expect(styles.actionBackground).toBe("rgb(19, 19, 19)");
    expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
    expect(consoleErrors).toEqual([]);
  });

  test("relie les réalisations, les services, les tarifs et le contact", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { level: 3, name: "Vire et son Grenier" })).toBeAttached();
    await expect(page.getByRole("heading", { level: 3, name: "Maroquinerie Terracotta" })).toBeAttached();
    await expect(page.locator("#realisations").getByRole("link", { name: "Voir le site Vire et son Grenier" })).toHaveAttribute("href", "https://vireetsongrenier.org/");

    await page.getByRole("button", { name: "SEO local" }).click();
    await expect(page.getByText(/Les pages, titres et contenus sont structurés/)).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Un seul interlocuteur, quatre étapes" })).toBeAttached();
    await expect(page.getByRole("heading", { level: 3, name: "Site vitrine", exact: true })).toBeAttached();
    await expect(page.getByText("400 €", { exact: true })).toBeAttached();
    await expect(page.getByText("500 €", { exact: true })).toBeAttached();
    await expect(page.getByText("Google Ads")).toHaveCount(0);

    const contact = page.locator("#contact");
    await contact.scrollIntoViewIfNeeded();
    await expect(contact.getByRole("link", { name: /levavasseur\.contactpro@gmail\.com/i })).toHaveAttribute("href", "mailto:levavasseur.contactpro@gmail.com");
    await expect(contact.getByRole("link", { name: /06 46 60 50 30/ })).toHaveAttribute("href", "tel:+33646605030");
    await expect(contact.getByLabel("Votre nom")).toBeVisible();
    await expect(contact.getByRole("button", { name: /Envoyer ma demande/ })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
  });
});

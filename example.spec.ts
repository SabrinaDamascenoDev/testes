import { test, expect } from '@playwright/test';

test.describe('Página Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('deve exibir os metadados e elementos principais corretamente', async ({ page }) => {
    await expect(page).toHaveTitle('Home');

    await expect(
      page.getByRole('heading', {
        name: 'Home',
      })
    ).toBeVisible();

    await expect(
      page.locator('#form-link')
    ).toBeVisible();
  });
  
  test('deve redirecionar para a página de formulário ao clicar no link', async ({
    page,
  }) => {
    await page.click('#form-link');

    await expect(page).toHaveTitle('Form');
  });
});

test.describe('Página Formulário', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/form');
  });

  test('deve exibir os metadados e componentes do formulário corretamente', async ({
    page,
  }) => {
    await expect(page).toHaveTitle('Form');

    await expect(
      page.getByRole('heading', {
        name: 'Form',
      })
    ).toBeVisible();

    await expect(
      page.getByPlaceholder('Enter item')
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Add' })
    ).toBeVisible();
  });

  test('deve iniciar com a lista de itens vazia', async ({ page }) => {
    const itemsList = page.getByTestId('items-list');

    await expect(itemsList).toBeEmpty();
  });

  test('deve adicionar um novo item à lista', async ({ page }) => {
    // const input = page.getByPlaceholder('Enter item');
    // await input.fill('Sabrina');
    // await page.getByRole('button', { name: 'Add' }).click();

    await page.fill("#item-input", "Sabrina")
    await page.click("#submit-button")

    const item = page.getByTestId('item').first();

    await expect(item).toHaveText('Sabrina');

    await expect(page.locator("#item-input")).toBeEmpty();
  });
});
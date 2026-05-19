# 🚀 Laboratório Prático: Automatizando Testes E2E com Playwright

Neste repositório, mostramos que testes E2E (End-to-End) não são apenas “cliques automáticos no navegador”. Eles são ferramentas fundamentais para garantir que a experiência do usuário funcione corretamente antes da aplicação chegar em produção.

Utilizando o Playwright, conseguimos simular interações reais no navegador, validando fluxos completos da aplicação frontend.

---

# 📚 Como Analisar um Fluxo para Testes E2E

Antes de escrever qualquer teste, o primeiro passo é entender o comportamento esperado da aplicação.

Vamos analisar um dos cenários do projeto:

```ts
test.describe('Página Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('deve exibir os metadados e elementos principais corretamente', async ({ page }) => {
    await expect(page).toHaveTitle('React App');

    await expect(
      page.getByRole('heading', {
        name: 'Home',
      })
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Form' })
    ).toBeVisible();
  });
});
```

Ao observar esse teste, percebemos que estamos validando:

- Se a aplicação carregou corretamente.
- Se os elementos principais estão visíveis.
- Se a navegação inicial está funcionando.

---

# ✅ Cenários Testados

## 1. Renderização da Página

Garantimos que:

- O título da página está correto.
- Os headings principais aparecem.
- Os links importantes estão disponíveis.

Exemplo:

```ts
await expect(page).toHaveTitle('React App');
```

---

## 2. Navegação Entre Rotas

Uma aplicação frontend precisa garantir que o usuário consiga navegar corretamente entre páginas.

Fluxo validado:

```ts
await page.getByRole('link', { name: 'Form' }).click();

await expect(page).toHaveTitle('Form');
```

Esse teste verifica:

- O clique no link.
- A mudança de rota.
- O carregamento correto da página.

---

## 3. Interação com Formulários

Também validamos comportamentos reais do usuário:

```ts
await input.fill('Sabrina');

await page.getByRole('button', { name: 'Add' }).click();
```

Aqui garantimos:

- Digitação no input.
- Clique no botão.
- Atualização dinâmica da interface.

---

## 4. Estado Inicial da Aplicação

Antes de qualquer ação do usuário, a aplicação deve iniciar corretamente.

Exemplo:

```ts
const itemsList = page.getByTestId('items-list');

await expect(itemsList).toBeEmpty();
```

Esse tipo de teste evita inconsistências visuais e dados incorretos.


# 📂 Estrutura e Boas Práticas

## Estrutura de Pastas

```bash
tests/
```

ou

```bash
e2e/
```

---

## Nomeação Profissional

Os testes seguem uma nomenclatura descritiva:

❌ Ruim:

```ts
test('teste 1')
```

✅ Profissional:

```ts
test('deve adicionar um novo item à lista')
```

---

## Seletores Semânticos

O Playwright incentiva o uso de seletores acessíveis:

```ts
page.getByRole()
page.getByPlaceholder()
page.getByTestId()
```

Isso torna os testes:

- Mais legíveis.
- Mais próximos da experiência real do usuário.
- Menos frágeis.

---

# ⚙️ Como Rodar o Projeto

## 1. Instale as dependências

```bash
npm install
```

ou

```bash
pnpm install
```

---

## 2. Instale o Playwright

```bash
npx playwright install
```

---

## 3. Execute os testes

Modo padrão:

```bash
npx playwright test
```

Modo UI:

```bash
npx playwright test --ui
```

Modo debug:

```bash
npx playwright test --debug
```

---

# 🧪 O Que Esses Testes Garantem?

✅ Renderização correta da aplicação  
✅ Navegação entre páginas  
✅ Interação com formulários  
✅ Atualização dinâmica da interface  
✅ Fluxos reais do usuário  
✅ Maior confiança em deploys

---

# 🚀 Tecnologias Utilizadas

- Playwright
- React
- TypeScript

---

# 💡 Conclusão

Testes E2E vão muito além de validar componentes.

Eles garantem que a experiência completa do usuário continue funcionando mesmo após mudanças no sistema.

Além disso:

- Reduzem bugs em produção.
- Aumentam a confiança no deploy.
- Documentam fluxos críticos da aplicação.
- Melhoram a qualidade do frontend.


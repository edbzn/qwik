import { expect, test } from '@playwright/test';
import { assertPage, linkNavigate, load, locator } from './util.js';

test('Qwik City Page', async ({ context, javaScriptEnabled }) => {
  const ctx = await load(context, javaScriptEnabled, '/');

  /***********  Docs: home  ***********/
  await linkNavigate(ctx, '[data-test-link="docs-home"]');
  await assertPage(ctx, {
    pathname: '/docs',
    title: 'Docs: Welcome! - Qwik',
    layoutHierarchy: ['root', 'docs'],
    h1: 'Welcome to the Docs!',
    activeHeaderLink: 'Docs',
  });

  let menuHeader = locator(ctx, `[data-test-menu-header="0"]`);
  expect(await menuHeader.innerText()).toBe('Introduction');

  let breadcrumb0 = locator(ctx, `[data-test-breadcrumb="0"]`);
  if (await breadcrumb0.isVisible()) {
    expect(true, `Breadcrumb selector ${breadcrumb0} found`).toBe(false);
  }

  /***********  Docs: overview  ***********/
  await linkNavigate(ctx, '[data-test-menu-link="/docs/overview"]');
  await assertPage(ctx, {
    pathname: '/docs/overview',
    title: 'Docs: Overview - Qwik',
    layoutHierarchy: ['root', 'docs'],
    h1: 'Overview',
    activeHeaderLink: 'Docs',
  });

  menuHeader = locator(ctx, `[data-test-menu-header="0"]`);
  expect(await menuHeader.innerText()).toBe('Introduction');

  breadcrumb0 = locator(ctx, `[data-test-breadcrumb="0"]`);
  expect(await breadcrumb0.innerText()).toBe('Introduction');

  let breadcrumb1 = locator(ctx, `[data-test-breadcrumb="1"]`);
  expect(await breadcrumb1.innerText()).toBe('Overview');

  /***********  Docs: getting-started  ***********/
  await linkNavigate(ctx, '[data-test-menu-link="/docs/getting-started"]');
  await assertPage(ctx, {
    pathname: '/docs/getting-started',
    title: 'Docs: Getting Started - Qwik',
    layoutHierarchy: ['root', 'docs'],
    h1: 'Getting Started',
    activeHeaderLink: 'Docs',
  });

  menuHeader = locator(ctx, `[data-test-menu-header="0"]`);
  expect(await menuHeader.innerText()).toBe('Introduction');

  breadcrumb0 = locator(ctx, `[data-test-breadcrumb="0"]`);
  expect(await breadcrumb0.innerText()).toBe('Introduction');

  breadcrumb1 = locator(ctx, `[data-test-breadcrumb="1"]`);
  expect(await breadcrumb1.innerText()).toBe('Getting Started');

  /***********  Docs: components/basics  ***********/
  await linkNavigate(ctx, '[data-test-menu-link="/docs/components/basics"]');
  await assertPage(ctx, {
    pathname: '/docs/components/basics',
    title: 'Docs: components basics - Qwik',
    layoutHierarchy: ['root', 'docs'],
    h1: 'Docs: components basics',
    activeHeaderLink: 'Docs',
  });

  menuHeader = locator(ctx, `[data-test-menu-header="0"]`);
  expect(await menuHeader.innerText()).toBe('Introduction');

  breadcrumb0 = locator(ctx, `[data-test-breadcrumb="0"]`);
  expect(await breadcrumb0.innerText()).toBe('Components');

  breadcrumb1 = locator(ctx, `[data-test-breadcrumb="1"]`);
  expect(await breadcrumb1.innerText()).toBe('Basics');

  /***********  Docs: components/listeners  ***********/
  await linkNavigate(ctx, '[data-test-menu-link="/docs/components/listeners"]');
  await assertPage(ctx, {
    pathname: '/docs/components/listeners',
    title: 'Docs: components listeners - Qwik',
    layoutHierarchy: ['root', 'docs'],
    h1: 'Docs: components listeners',
    activeHeaderLink: 'Docs',
  });

  menuHeader = locator(ctx, `[data-test-menu-header="0"]`);
  expect(await menuHeader.innerText()).toBe('Introduction');

  breadcrumb0 = locator(ctx, `[data-test-breadcrumb="0"]`);
  expect(await breadcrumb0.innerText()).toBe('Components');

  breadcrumb1 = locator(ctx, `[data-test-breadcrumb="1"]`);
  expect(await breadcrumb1.innerText()).toBe('Listeners');
});

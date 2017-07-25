import { Test8Page } from './app.po';

describe('test8 App', () => {
  let page: Test8Page;

  beforeEach(() => {
    page = new Test8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

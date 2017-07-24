import { QuickStartPage } from './app.po';

describe('quick-start App', () => {
  let page: QuickStartPage;

  beforeEach(() => {
    page = new QuickStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

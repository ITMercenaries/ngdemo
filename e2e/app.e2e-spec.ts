import { AppPage } from './app.po';

describe('asgdemo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ng5 Demo ASG');
  });
});

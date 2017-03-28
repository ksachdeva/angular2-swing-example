import { Angular2SwingExampleCliPage } from './app.po';

describe('angular2-swing-example-cli App', () => {
  let page: Angular2SwingExampleCliPage;

  beforeEach(() => {
    page = new Angular2SwingExampleCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

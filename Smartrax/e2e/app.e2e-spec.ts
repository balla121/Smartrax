import { SmartraxPage } from './app.po';

describe('smartrax App', () => {
  let page: SmartraxPage;

  beforeEach(() => {
    page = new SmartraxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

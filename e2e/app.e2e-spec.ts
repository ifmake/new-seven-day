import { NewSevenDayPage } from './app.po';

describe('new-seven-day App', function() {
  let page: NewSevenDayPage;

  beforeEach(() => {
    page = new NewSevenDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

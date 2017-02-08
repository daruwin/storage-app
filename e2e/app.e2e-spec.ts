import { StorageAppPage } from './app.po';

describe('storage-app App', function() {
  let page: StorageAppPage;

  beforeEach(() => {
    page = new StorageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

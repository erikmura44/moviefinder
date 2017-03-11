import { MoviefinderPage } from './app.po';

describe('moviefinder App', function() {
  let page: MoviefinderPage;

  beforeEach(() => {
    page = new MoviefinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

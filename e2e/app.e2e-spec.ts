import { MetabolicPathwaysPage } from './app.po';

describe('metabolic-pathways App', () => {
  let page: MetabolicPathwaysPage;

  beforeEach(() => {
    page = new MetabolicPathwaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

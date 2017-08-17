import { ConversorDeMoedasPage } from './app.po';

describe('conversor-de-moedas App', () => {
  let page: ConversorDeMoedasPage;

  beforeEach(() => {
    page = new ConversorDeMoedasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my!');
  });
});

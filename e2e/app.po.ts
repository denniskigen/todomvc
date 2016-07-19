export class TodomvcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todomvc-app h1')).getText();
  }
}

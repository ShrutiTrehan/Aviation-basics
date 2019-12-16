import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getBrandName() {
    return element(by.css('.navbar-brand')).getText();
  }

  getCapabilityListCount() {
    return element.all(by.css('#navbar > ul > li')).count();
  }
}

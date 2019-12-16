import { browser, logging } from 'protractor';
import { AppPage } from '../pages/app.po';

describe('Airline Reservation System navigation bar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display company name in the navigation bar', () => {
    page.navigateTo();
    expect(page.getBrandName()).toEqual('YCOMPANY');
  });

  it('should display 4 capabilities', () => {
    expect(page.getCapabilityListCount()).toEqual(4);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

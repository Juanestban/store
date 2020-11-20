import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class ProductOrderUpdatePage {
  pageTitle: ElementFinder = element(by.id('storeApp.productOrder.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  placedDateInput: ElementFinder = element(by.css('input#product-order-placedDate'));
  statusSelect: ElementFinder = element(by.css('select#product-order-status'));
  codeInput: ElementFinder = element(by.css('input#product-order-code'));
  customerSelect: ElementFinder = element(by.css('select#product-order-customer'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setPlacedDateInput(placedDate) {
    await this.placedDateInput.sendKeys(placedDate);
  }

  async getPlacedDateInput() {
    return this.placedDateInput.getAttribute('value');
  }

  async setStatusSelect(status) {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect() {
    return this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption() {
    await this.statusSelect.all(by.tagName('option')).last().click();
  }
  async setCodeInput(code) {
    await this.codeInput.sendKeys(code);
  }

  async getCodeInput() {
    return this.codeInput.getAttribute('value');
  }

  async customerSelectLastOption() {
    await this.customerSelect.all(by.tagName('option')).last().click();
  }

  async customerSelectOption(option) {
    await this.customerSelect.sendKeys(option);
  }

  getCustomerSelect() {
    return this.customerSelect;
  }

  async getCustomerSelectedOption() {
    return this.customerSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setPlacedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getPlacedDateInput()).to.contain('2001-01-01T02:30');
    await waitUntilDisplayed(this.saveButton);
    await this.statusSelectLastOption();
    await waitUntilDisplayed(this.saveButton);
    await this.setCodeInput('code');
    expect(await this.getCodeInput()).to.match(/code/);
    await this.customerSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}

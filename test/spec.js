'use strict';

describe('double wait', function () {
  it('should work', function () {
    let EC = protractor.ExpectedConditions;
    browser.get('https://rawgit.com/mnn/ng-spinner-example/master/index.html');

    let state = element(by.id('state'));
    let stateIs = (text) => { expect(state.getText()).toBe(text); };
    stateIs('initial');

    let loader = element(by.id('loader'));

    let checkBox = element(by.css('input'));
    checkBox.click();
    browser.ignoreSynchronization = true; // without this 'toBe' blocks (maybe b/c of $timeout running?)
    stateIs('changed');

    browser.wait(EC.presenceOf(element(by.css('#spinner.loading'))), 1500);
    stateIs('loading');

    browser.wait(EC.presenceOf(element(by.css('#spinner:not(.loading)'))), 1500);
    stateIs('done');
  })
});

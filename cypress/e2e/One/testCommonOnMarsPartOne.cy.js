import { onMarsCommon } from '../../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('ONMARS', () => {
  it('TOOK WORK PART ONE', () => {
    const arr = [];
    for (let i = 1; i < 11; i++) {
      onMarsCommon(Cypress.env(`user_${i}`), Cypress.env(`pas_${i}`), arr, `USERNAME_${i}`);
      cy.writeFile('/tmp/dataAllUser.json', arr);
    }
  });
});

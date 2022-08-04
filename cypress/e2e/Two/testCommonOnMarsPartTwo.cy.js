import { onMarsCommon } from '../../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('ONMARS TWO', () => {
  it('TOOK WORK PART TWO', () => {
    const arr = [];
    for (let i = 11; i < 21; i++) {
      onMarsCommon(Cypress.env(`user_${i}`), Cypress.env(`pas_${i}`), arr, `USERNAME_${i}`);
      cy.writeFile('/tmp/dataAllUser.json', arr);
    }
  });
});

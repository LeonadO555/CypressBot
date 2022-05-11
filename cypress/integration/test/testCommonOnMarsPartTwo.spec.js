import { onMarsCommon } from '../../common/commonOnMars';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('ONMARS2', () => {
  it('TOOK WORK PART TWO', () => {
    const arr = [];
    onMarsCommon(Cypress.env('user_14'), Cypress.env('pas_14'), arr, 'USERNAME 14');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_15'), Cypress.env('pas_15'), arr, 'USERNAME 15');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_16'), Cypress.env('pas_16'), arr, 'USERNAME 16');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_17'), Cypress.env('pas_17'), arr, 'USERNAME 17');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_18'), Cypress.env('pas_18'), arr, 'USERNAME 18');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_19'), Cypress.env('pas_19'), arr, 'USERNAME 19');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_20'), Cypress.env('pas_20'), arr, 'USERNAME 20');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_21'), Cypress.env('pas_21'), arr, 'USERNAME 21');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_22'), Cypress.env('pas_22'), arr, 'USERNAME 22');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_23'), Cypress.env('pas_23'), arr, 'USERNAME 23');
    cy.writeFile('/tmp/dataAllUser.json', arr);
  });

  it('TOOK WORK PART TWO OTHER', () => {
    const arr = [];
    onMarsCommon(Cypress.env('user_24'), Cypress.env('pas_24'), arr, 'USERNAME 24');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_25'), Cypress.env('pas_25'), arr, 'USERNAME 25');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_26'), Cypress.env('pas_26'), arr, 'USERNAME 26');
    cy.writeFile('/tmp/dataAllUser.json', arr);
  });
});

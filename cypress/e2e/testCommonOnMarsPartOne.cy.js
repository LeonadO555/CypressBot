import { onMarsCommon } from '../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('ONMARS', () => {
  it('TOOK WORK PART ONE', () => {
    const arr = [];
    onMarsCommon(Cypress.env('user_1'), Cypress.env('pas_1'), arr, 'USERNAME 1');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_2'), Cypress.env('pas_2'), arr, 'USERNAME 2');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_3'), Cypress.env('pas_3'), arr, 'USERNAME 3');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_4'), Cypress.env('pas_4'), arr, 'USERNAME 4');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_5'), Cypress.env('pas_5'), arr, 'USERNAME 5');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_6'), Cypress.env('pas_6'), arr, 'USERNAME 6');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_7'), Cypress.env('pas_7'), arr, 'USERNAME 7');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_8'), Cypress.env('pas_8'), arr, 'USERNAME 8');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_9'), Cypress.env('pas_9'), arr, 'USERNAME 9');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_10'), Cypress.env('pas_10'), arr, 'USERNAME 10');
    cy.writeFile('/tmp/dataActualUser.json', arr);
  });

  it('TOOK WORK PART ONE OTHER', () => {
    const arr = [];
    onMarsCommon(Cypress.env('user_11'), Cypress.env('pas_11'), arr, 'USERNAME 11');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_12'), Cypress.env('pas_12'), arr, 'USERNAME 12');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_13'), Cypress.env('pas_13'), arr, 'USERNAME 13');
    cy.writeFile('/tmp/dataAllUser.json', arr);
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
  });
});
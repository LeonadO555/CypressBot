import { onMarsCommon } from '../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('ONMARS2', () => {
  it('TOOK WORK PART TWO', () => {
    const arr = [];
    onMarsCommon(Cypress.env('user_21'), Cypress.env('pas_21'), arr, 'USERNAME 21');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_22'), Cypress.env('pas_22'), arr, 'USERNAME 22');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_23'), Cypress.env('pas_23'), arr, 'USERNAME 23');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_24'), Cypress.env('pas_24'), arr, 'USERNAME 24');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_25'), Cypress.env('pas_25'), arr, 'USERNAME 25');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_26'), Cypress.env('pas_26'), arr, 'USERNAME 26');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_27'), Cypress.env('pas_27'), arr, 'USERNAME 27');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_28'), Cypress.env('pas_28'), arr, 'USERNAME 28');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_29'), Cypress.env('pas_29'), arr, 'USERNAME 29');
    cy.writeFile('/tmp/dataActualUser.json', arr);
    onMarsCommon(Cypress.env('user_30'), Cypress.env('pas_30'), arr, 'USERNAME 30');
    cy.writeFile('/tmp/dataActualUser.json', arr);
  });

  it('TOOK WORK PART TWO OTHER', () => {
    const arr = [];
    onMarsCommon(Cypress.env('user_31'), Cypress.env('pas_31'), arr, 'USERNAME 31');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_32'), Cypress.env('pas_32'), arr, 'USERNAME 32');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_33'), Cypress.env('pas_33'), arr, 'USERNAME 33');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_34'), Cypress.env('pas_34'), arr, 'USERNAME 34');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_35'), Cypress.env('pas_35'), arr, 'USERNAME 35');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_36'), Cypress.env('pas_36'), arr, 'USERNAME 36');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_37'), Cypress.env('pas_37'), arr, 'USERNAME 37');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_38'), Cypress.env('pas_38'), arr, 'USERNAME 38');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_39'), Cypress.env('pas_39'), arr, 'USERNAME 39');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_40'), Cypress.env('pas_40'), arr, 'USERNAME 40');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_41'), Cypress.env('pas_41'), arr, 'USERNAME 41');
    cy.writeFile('/tmp/dataAllUser.json', arr);
  });
});

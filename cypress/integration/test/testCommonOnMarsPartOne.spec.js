import { onMarsCommon } from '../../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('DO JOB', () => {
  it('Click Do Job button and wait 1 minute', () => {
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
  });
});

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
    onMarsCommon(Cypress.env('user_9'), Cypress.env('pas_9'), arr, 'USERNAME 9');
    cy.writeFile('/tmp/dataAllUser.json', arr);
    onMarsCommon(Cypress.env('user_10'), Cypress.env('pas_10'), arr, 'USERNAME 10');
    cy.writeFile('/tmp/dataAllUser.json', arr);
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
  });
});

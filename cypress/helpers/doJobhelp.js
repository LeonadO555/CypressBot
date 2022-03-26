import DoJobPage from '../page/doJobPage';
import CompleteJob from '../page/completeJob';

const doJobPage = new DoJobPage();
const completeJobPage = new CompleteJob();

class DoJobHelp {
  checkAndTakeEat() {
    cy.wait(15000);
    cy.get('div[role="dialog"]').then(($claimButton) => {
      const item = $claimButton.find('button[type="button"]').find('>span');
      if (item.text().includes('Claim')) {
        cy.get('div[role="dialog"]').find('button[type="button"]').find('>span').contains('Claim').click();
        cy.task('log', 'Click Claim');
        doJobPage.clickCloseButton();
        cy.contains('Actions').should('be.visible').click();
        cy.task('log', 'Click Actions');
        cy.get('div[role="dialog"]').get('button[type=button]').contains('Eat Ration').should('be.visible').click();
        cy.task('log', 'Click Eat Ration');
        cy.contains('Confirm').should('be.visible').click();
        cy.wait(1000);
        cy.get('div[role="dialog"]')
          .get('button[type=button]')
          .eq(2)
          .should('be.visible')
          .click({ multiple: true, force: true });
        cy.task('log', 'I catch Eat Ration');
      } else {
        doJobPage.clickCloseButton();
        cy.task('log', 'I not click Claim');
        cy.contains('Actions').should('be.visible').click();
        cy.get('div[role="dialog"]').then(($eatRation) => {
          const checkEatRation = $eatRation.find('tr.MuiTableRow-root:nth-child(4)').find('button[aria-label="add"]');
          if (!checkEatRation.attr('disabled')) {
            cy.get('button[aria-label="add"]').contains('Eat Ration').should('be.visible').click();
            cy.task('log', 'click Eat Ration');
            cy.contains('Confirm').should('be.visible').click();
            cy.wait(1000);
            cy.get('div[role="dialog"]')
              .get('button[type=button]')
              .eq(2)
              .should('be.visible')
              .click({ multiple: true, force: true });
            cy.task('log', 'I catch Eat Ration');
          } else {
            cy.get('div[role="dialog"]')
              .get('button[type=button]')
              .eq(2)
              .should('be.visible')
              .click({ multiple: true, force: true });
            cy.task('log', 'I no catch Eat Ration');
          }
        });
      }
    });
    const arr = [];
    AllCheck(arr);
    cy.writeFile('dataActualUser.json', arr);
  }
}
export default DoJobHelp;

export const checkAndDoJob = () => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span')
    .invoke('text')
    .then(parseInt)
    .then((numberStamina) => {
      if (numberStamina === 0) {
        cy.task('log', `Stamina ${numberStamina}`);
        completeJobPage.clickCompleteJobOrLogout();
        return;
      }

      cy.task('log', `Stamina ${numberStamina}`);
      doJobPage.clickDoJobButton();
      checkAndDoJob();
    });
};
export const checkDusk = (arr) => {
  cy.get('div')
    .get('div:nth-child(6) > span')
    .should('be.visible')
    .invoke('text')
    .then(parseInt)
    .then((numberDusk) => {
      arr.push(`Dusk: ${numberDusk}`);
      cy.task('log', `Dusk ${numberDusk}`);
    });
};

export const checkUser = (arr) => {
  cy.get('div');
  cy.get('#__next > header > div')
    .find('> button > span.MuiButton-label > span')
    .should('be.visible')
    .invoke('text')
    .then((userName) => {
      arr.push(`User: ${userName}`);
      cy.task('log', `${userName}`);
    });
};

export const checkStamina = (arr) => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span')
    .invoke('text')
    .then(parseInt)
    .then((numberStamina) => {
      arr.push(`Stamina: ${numberStamina}`);
    });
};

export const AllCheck = (arr) => {
  checkUser(arr);
  checkDusk(arr);
  checkStamina(arr);
};

export const waxDusk = (arr) => {
  cy.visit('https://wax.alcor.exchange/swap?output=DUSK-dusk.onmars&input=WAX-eosio.token');
  cy.get('.each-item-price-container')
    .get('> div:nth-child(2) > span:nth-child(2)')
    .invoke('text')
    .then((waxDuskValue) => {
      arr.push(`Wax/Dusk: ${waxDuskValue}`);
    });
};

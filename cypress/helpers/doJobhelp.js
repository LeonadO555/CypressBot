import DoJobPage from '../page/doJobPage';
import CompleteJob from '../page/completeJob';

const doJobPage = new DoJobPage();
const completeJobPage = new CompleteJob();

class DoJobHelp {
  clickDoJobOrLogout() {
    cy.wait(15000);
    cy.get('button[type="button"]').then(($claimButton) => {
      const item = $claimButton.find('>span');
      if (item.text().includes('Claim')) {
        cy.contains('Claim').click();
        doJobPage.clickCloseButton();
        cy.contains('Actions').should('be.visible').click();
        cy.get('div[role="dialog"]').get('button[type=button]').contains('Eat Ration').should('be.visible').click();
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
        cy.task('log', 'I not catch Eat Ration');
      }
    });
    doJobPage.clickPageJob();
    cy.get('div[title="Stamina"]')
      .get('div:nth-child(5) > span')
      .should('be.visible')
      .invoke('text')
      .then((text) => +text)
      .then((value) => {
        if (value === 0) {
          completeJobPage.clickCompleteJobOrLogout();
        } else {
          for (let i = 0; i < 100; i++) {
            cy.get('body').then(($mainPage) => {
              const mainPageButton = $mainPage.find('a[href="https://docs.milliononmars.com/whitepaper/"]');
              if (mainPageButton.text().includes('Whitepaper')) {
                cy.task('log', 'Exit from cycle');
                return;
              } else {
                doJobPage.clickDoJobButton();
                doJobPage.getStaminaAndLogout();
                cy.task('log', 'No exit from cycle');
              }
            });
          }
        }
      });
  }
}
export default DoJobHelp;

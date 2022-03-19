import CompleteJob from './completeJob';

const completeJobPage = new CompleteJob();

class DoJobPage {
  linkToJob() {
    cy.clearCookies();
    cy.visit('https://app.milliononmars.io/jobs');
  }

  clickCloseButton() {
    cy.get('div[role="dialog"]')
      .get('button[type="button"]')
      .get('[aria-hidden="true"]')
      .click({ force: true, multiple: true });
  }
  clickPageJob() {
    cy.get('a.MuiButton-root:nth-child(2)').click().should('be.visible');
  }

  getStaminaAndLogout() {
    cy.get('div[title="Stamina"]')
      .get('div:nth-child(5) > span')
      .should('be.visible')
      .invoke('text')
      .then((text) => +text)
      .then((value) => {
        if (value === 0) {
          completeJobPage.clickCompleteJobOrLogout();
        }
        cy.task('log', `Stamina ${value}`);
      });
  }

  clickDoJobButton() {
    const doJob = cy.get('body', { timeout: 100000000 });
    doJob.then(($button) => {
      const checkButtonEnabled = $button.find('button[aria-label="add"]');
      if (!checkButtonEnabled.attr('disabled')) {
        cy.contains('Do Job', { timeout: 100000000 }).should('not.be.disabled').click({ force: true, multiple: true });
        cy.get('body').then(($buttonConf) => {
          const item = $buttonConf.find('.MuiDialog-paper').find('button[type=button]').eq(2).find('> span');
          const itemName = $buttonConf.find('.MuiDialog-paper').find('.MuiTypography-h6');
          if (itemName.hasClass('.MuiTypography-h6')) {
            cy.log('lol');
          } else {
            if (item.text().includes('Confirm')) {
              cy.contains('Confirm').click({ force: true });
              cy.task('log', 'I catch Job');
            } else {
              cy.log('ok');
              cy.task('log', 'I not catch Job');
            }
          }
        });
      } else {
        cy.log('ok');
        cy.task('log', 'Button disabled');
      }
    });
  }
}
export default DoJobPage;

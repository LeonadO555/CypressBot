import LogoutPage from './logoutPage';

const logoutPage = new LogoutPage();
class CompleteJob {
  clickCompleteJobOrLogout() {
    cy.wait(2000);
    cy.get('a[href="/jobs/worker"]')
      .then(($a) => {
        const item = $a.find('.MuiBadge-anchorOriginTopLeftRectangle');
        if (item.length > 0) {
          return item[0];
        } else {
          return null;
        }
      })
      .then(($div) => {
        if ($div) {
          cy.get('.MuiBadge-anchorOriginTopLeftRectangle')
            .get('div > span > span > span')
            .invoke('text')
            .then((text) => +text)
            .then((value) => {
              cy.get('a[href="/jobs/worker"]').click();
              cy.contains('Worked Jobs').should('be.visible');
              for (let i = 0; i < value; i++) {
                cy.get('body').then(($complete) => {
                  const checkButton = $complete.find('button[aria-label="add"]');
                  if (!checkButton.attr('disabled')) {
                    cy.get('button[aria-label="add"]').click({ multiple: true, force: true }).wait(5000);
                    cy.task('log', 'Click Complete job');
                  } else {
                    cy.log('lol');
                    cy.task('log', 'Button complete disable');
                  }
                });
              }

              logoutPage.clickMenuAndLogout();
              cy.task('log', 'I logout');
              cy.wait(5000);
            });
        } else {
          logoutPage.clickMenuAndLogout();
          cy.task('log', 'I logout');
          cy.wait(5000);
        }
      });
  }
}
export default CompleteJob;

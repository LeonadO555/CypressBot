const clickCompleteJobOrLogout = () => {
  cy.wait(2000);
  cy.get('a[href="/jobs/worker"]').should('be.visible');
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
            cy.contains('Work Orders').click();
            cy.contains('Worked Jobs').should('be.visible');
            for (let i = 0; i < value; i++) {
              cy.get('body').then(($complete) => {
                const checkButton = $complete.find('button[aria-label="add"]');
                if (checkButton) {
                  if (!checkButton.attr('disabled')) {
                    cy.get('button[aria-label="add"]').click({ multiple: true, force: true }).wait(5000);
                    cy.task('log', 'Click Complete job');
                  } else {
                    cy.log('lol');
                    cy.task('log', 'Button complete disable');
                  }
                } else {
                  cy.task('log', 'I skip cycle by click COMPLETE');
                  return;
                }
              });
            }
            clickMenuAndLogout();
          });
      } else {
        clickMenuAndLogout();
      }
    });
};

const fixBugStamina = () => {
  cy.get('body').then(($iconStamina) => {
    const checkIconStamina = $iconStamina.find('div[title="Stamina"]').find('div:nth-child(5) > span');
    if (!checkIconStamina) {
      cy.reload;
      cy.task('log', 'Stamina didn' / 't view');
    } else {
      cy.log('ok');
      cy.task('log', 'Stamina view');
    }
  });
};
const checkViewsConfirm = () => {
  cy.get('body').then(($buttonConf) => {
    const item = $buttonConf.find('.MuiDialog-paper').find('button[type=button]').eq(2).find('> span');
    const itemName = $buttonConf.find('.MuiDialog-paper').find('.MuiTypography-h6');
    if (itemName.hasClass('.MuiTypography-h6')) {
      cy.log('lol');
    } else {
      if (item.text().includes('Confirm')) {
        clickConfirmButton();
        fixBugStamina();
      } else {
        cy.task('log', 'I not click Confirm');
        cy.log('ok');
      }
    }
  });
};

const clickDoJobButton = () => {
  cy.contains('Do Job', { timeout: 100000000 }).should('not.be.disabled').click({ force: true, multiple: true });
  cy.task('log', 'I click Do Job');
};
const checkViewsDoJob = () => {
  const doJob = cy.get('body', { timeout: 100000000 });
  doJob.then(($button) => {
    const checkButtonEnabled = $button.find('button[aria-label="add"]');
    if (!checkButtonEnabled.attr('disabled')) {
      clickDoJobButton();
      checkViewsConfirm();
    } else {
      cy.log('ok');
    }
  });
};

const checkAndDoJob = () => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span:nth-child(2)')
    .invoke('text')
    .then(parseInt)
    .then((numberStamina) => {
      if (numberStamina === 0) {
        cy.task('log', `Stamina ${numberStamina}`);
        clickCompleteJobOrLogout();
        return;
      }

      cy.task('log', `Stamina ${numberStamina}`);
      checkViewsDoJob();
      checkAndDoJob();
    });
};

//INBOX
// const checkCompleteWorkAndTookDusk = () => {
//   cy.get('button:nth-child(6)').eq(0).should('be.visible');
//   cy.get('body').then(($check) => {
//     const item = $check.find('button:nth-child(6) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)');
//     if (item.hasClass('MuiBadge-anchorOriginTopRightRectangle')) {
//       cy.get('button:nth-child(6)').eq(0).click();
//       tookDuskFromInbox();
//       clickCloseDialog();
//     } else {
//       return null;
//     }
//   });
// };
//
// const tookDuskFromInbox = () => {
//   cy.get('body').then(($completeWork) => {
//     const checkButton = $completeWork.find('button[type="button"]').find('.MuiButton-fullWidth');
//     if (!checkButton.attr('disabled')) {
//       cy.contains('Claim').click({ multiple: true, force: true });
//       cy.task('log', 'Click Complete job');
//     } else {
//       cy.log('lol');
//       cy.task('log', 'Button complete disable');
//     }
//   });
// };

const logoutIfActiveSessionNoActualUserAndLoginActualUser = (username, password) => {
  cy.wait(7000);
  cy.get('body').then(($dialogMainPage) => {
    const dialogMainPage = $dialogMainPage.find('div:nth-child(2)');
    if (dialogMainPage.hasClass('modal-content')) {
      checkCloseButton();
      clickMenuAndLogout();
      linkToJob();
      loginUser(username, password);
    } else {
      linkToJob();
      loginUser(username, password);
    }
  });
};

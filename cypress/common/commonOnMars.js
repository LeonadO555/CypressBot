export const onMarsCommon = (username, password, arr, logUser) => {
  linkToJob();
  cy.task('log', 'I FOLLOWED THE LINK');
  loginUser(username, password);
  cy.task('log', logUser);
  checkAndTakeEat();
  cy.task('log', 'I HAVE PASSED THE STAGE OF TAKING FOOD');
  AllCheck(arr);
  cy.task('log', 'I CHECKED THE STAMINA, DUSK, USERNAME');
  clickButtonTransferJob();
  cy.task('log', 'I CLICK DO JOB BUTTON');
  checkAndDoJob();
};

const linkToJob = () => {
  cy.clearCookies();
  cy.visit('https://milliononmars.io/login');
};

const loginUser = (userName, userPassword) => {
  cy.contains('Login').should('be.visible').click();
  cy.get('input[name="email"]').should('be.visible').type(userName).should('have.value', userName);
  cy.get('input[name="password"]').should('be.visible').type(userPassword).should('have.value', userPassword);
  cy.get('button[type="submit"]').should('be.visible').click();
  cy.task('log', 'Click login');
};

const clickCloseButton = () => {
  cy.get('div[role="dialog"]')
    .get('button[type="button"]')
    .get('[aria-hidden="true"]')
    .click({ force: true, multiple: true });
  cy.task('log', 'I closed all button');
};

const checkAndTakeEat = () => {
  cy.wait(15000);
  cy.get('div[role="dialog"]').then(($claimButton) => {
    const item = $claimButton.find('button[type="button"]').find('>span');
    if (item.text().includes('Claim')) {
      ifClaim();
    } else {
      ifNotClaim();
      cy.get('div[role="dialog"]').then(($eatRation) => {
        const checkEatRation = $eatRation.find('tr.MuiTableRow-root:nth-child(4)').find('button[aria-label="add"]');
        if (!checkEatRation.attr('disabled')) {
          ifNoDisabledEatRation();
        } else {
          ifDisabledEatRation();
        }
      });
    }
  });
  const arr = [];
  AllCheck(arr);
  cy.writeFile('~/tmp/dataActualUser.json', arr);
};
const checkDusk = (arr) => {
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

const checkUser = (arr) => {
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

const checkStamina = (arr) => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span')
    .invoke('text')
    .then(parseInt)
    .then((numberStamina) => {
      arr.push(`Stamina: ${numberStamina}`);
    });
};

const AllCheck = (arr) => {
  checkUser(arr);
  checkDusk(arr);
  checkStamina(arr);
};

const ifClaim = () => {
  cy.get('div[role="dialog"]').find('button[type="button"]').find('>span').contains('Claim').click();
  cy.task('log', 'Click Claim');
  clickCloseButton();
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
};

const ifNotClaim = () => {
  clickCloseButton();
  cy.task('log', 'I not click Claim');
  cy.contains('Actions').should('be.visible').click();
};

const ifNoDisabledEatRation = () => {
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
};

const ifDisabledEatRation = () => {
  cy.get('div[role="dialog"]')
    .get('button[type=button]')
    .eq(2)
    .should('be.visible')
    .click({ multiple: true, force: true });
  cy.task('log', 'I no catch Eat Ration');
};

const clickButtonTransferJob = () => {
  cy.get('a.MuiButton-root:nth-child(2)').click().should('be.visible');
};

const checkAndDoJob = () => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span')
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

const clickDoJobButton = () => {
  cy.contains('Do Job', { timeout: 100000000 }).should('not.be.disabled').click({ force: true, multiple: true });
  cy.task('log', 'I click Do Job');
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
        cy.log('ok');
        cy.task('log', 'I not click Confirm');
      }
    }
  });
};

const clickConfirmButton = () => {
  cy.contains('Confirm').click({ force: true });
  cy.task('log', 'I click Confirm');
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

const clickCompleteJobOrLogout = () => {
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
            clickMenuAndLogout();
          });
      } else {
        clickMenuAndLogout();
      }
    });
};

const clickMenuAndLogout = () => {
  cy.get('button.MuiButtonBase-root:nth-child(6) > span:nth-child(1) > svg:nth-child(1)').click();
  cy.wait(500);
  cy.contains('Logout').click();
  cy.contains('Play Now').should('be.visible');
  cy.contains('Whitepaper').should('be.visible');
  cy.contains('Company').should('be.visible');
  cy.task('log', 'I LOGOUT');
};

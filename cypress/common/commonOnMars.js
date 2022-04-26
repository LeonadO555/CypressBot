export const onMarsCommon = (username, password, arr, logUser) => {
  linkToJob();
  logoutIfActiveSessionNoActualUserAndLoginActualUser(username, password);
  cy.task('log', logUser);
  checkAndTakeEat();
  cy.task('log', 'I HAVE PASSED THE STAGE OF TAKING FOOD');
  AllCheck(arr);
  cy.task('log', 'I CHECKED THE STAMINA, DUSK, USERNAME');
  clickButtonTransferJob();
  cy.task('log', 'I OPEN DIALOG WINDOW WITH JOB');
  tookCompleteJob();
  cy.task('log', 'I TOOK DUSK FROM WORKED JOB');
  tookWork();
  cy.task('log', 'I TOOK ALL JOB');
};

const linkToJob = () => {
  cy.clearCookies();
  cy.visit('https://app.milliononmars.io');
  cy.contains('Play Now').click();
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
  cy.task('log', 'I CLOSED ALL WINDOW DIALOG');
};

const logoutIfActiveSessionNoActualUserAndLoginActualUser = (username, password) => {
  cy.wait(7000);
  cy.get('body').then(($dialogMainPage) => {
    const dialogMainPage = $dialogMainPage.find('div:nth-child(2)');
    if (dialogMainPage.hasClass('modal-content')) {
      clickCloseButton();
      clickMenuAndLogout();
      linkToJob();
      loginUser(username, password);
    } else {
      linkToJob();
      loginUser(username, password);
    }
  });
};

const checkAndTakeEat = () => {
  cy.wait(5000);
  clickCloseButton();
  cy.get('body').then(($claimButton) => {
    const item = $claimButton.find('div[role="dialog"]').find('button[type="button"]').find('>span');
    if (item.text().includes('Claim')) {
      ifClaim();
    } else {
      ifNotClaim();
      cy.get('div[role="dialog"]').then(($eatRation) => {
        const checkEatRation = $eatRation.find('tr.MuiTableRow-root:nth-child(5)').find('button[aria-label="add"]');
        if (!checkEatRation.attr('disabled')) {
          ifNoDisabledEatRation();
        } else {
          ifDisabledEatRation();
        }
      });
    }
  });
};
const checkDusk = (arr) => {
  cy.get('div')
    .get('div:nth-child(6) > span')
    .should('be.visible')
    .invoke('text')
    .then(parseInt)
    .then((numberDusk) => {
      arr.push(`Dusk: ${numberDusk}`);
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
    });
};

const checkStamina = (arr) => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span:nth-child(2)')
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
const clickCloseDialog = () => {
  cy.get('div[role="dialog"]').get('button[type=button]').eq(4).should('be.visible').click({ multiple: true });
};

const clickConfirmButton = () => {
  cy.contains('Confirm').should('be.visible').click();
  cy.task('log', 'I click Confirm');
};

const ifClaim = () => {
  cy.get('div[role="dialog"]').find('button[type="button"]').find('>span').contains('Claim').click();
  cy.task('log', 'Click Claim');
  cy.contains('Actions').should('be.visible').click();
  cy.task('log', 'Click Actions');
  cy.get('div[role="dialog"]').get('button[type=button]').contains('Eat Ration').should('be.visible').click();
  cy.task('log', 'Click Eat Ration');
  clickConfirmButton();
  cy.wait(1000);
  clickCloseDialog();
  cy.task('log', 'I catch Eat Ration');
};

const ifNotClaim = () => {
  cy.task('log', 'I not click Claim');
  cy.contains('Actions').should('be.visible').click();
};

const ifNoDisabledEatRation = () => {
  cy.get('button[aria-label="add"]').contains('Eat Ration').should('be.visible').click();
  cy.task('log', 'click Eat Ration');
  clickConfirmButton();
  cy.wait(1000);
  clickCloseDialog();
  cy.task('log', 'I catch Eat Ration');
};

const ifDisabledEatRation = () => {
  clickCloseDialog();
  cy.task('log', 'I no catch Eat Ration');
};

const clickButtonTransferJob = () => {
  cy.get('button:nth-child(2)').should('be.visible');
  cy.get('button:nth-child(2)').click();
};

const tookCompleteJob = () => {
  cy.contains('Worked Jobs').should('be.visible');
  cy.contains('Worked Jobs').click();
  checkButtonCompleteJob();
};

const checkButtonCompleteJob = () => {
  cy.get('body').then(($complete) => {
    const checkButton = $complete.find('button[aria-label="add"]');
    const noPendingWork = $complete.find('p.MuiTypography-root');
    if (!noPendingWork) {
      if (!checkButton.attr('disabled')) {
        cy.get('button[aria-label="add"]').click({ multiple: true, force: true });
        cy.task('log', 'Click Complete job');
      } else {
        cy.log('lol');
        cy.task('log', 'Button complete disable');
      }
    } else {
      cy.task('log', 'I don t have complete work');
    }
  });
};

const tookWork = () => {
  cy.get('div[title="Stamina"]')
    .get('div:nth-child(5) > span:nth-child(2)')
    .invoke('text')
    .then(parseInt)
    .then((numberStamina) => {
      if (numberStamina === 0) {
        cy.task('log', `Stamina ${numberStamina}`);
        clickCloseDialog();
        clickMenuAndLogout();
        return;
      }

      cy.task('log', `Stamina ${numberStamina}`);
      findWork();
      tookWork();
    });
};

const findWork = () => {
  cy.contains('Find Work').should('be.visible');
  cy.contains('Find Work').click();
  itemFindWork();
};

const itemFindWork = () => {
  const listItem = [1, 5];
  for (const name of listItem) {
    cy.get('div[title="Stamina"]')
      .get('div:nth-child(5) > span:nth-child(2)')
      .invoke('text')
      .then(parseInt)
      .then((numberStamina) => {
        if (numberStamina === 0) {
          clickCloseDialog();
          clickMenuAndLogout();
        }
        cy.get('.content')
          .find('.item')
          .eq(name)
          .find('.item-header')
          .find('.item-available')
          .find('.value')
          .invoke('text')
          .then((numberAvailable) => {
            cy.task('log', `Available work ${numberAvailable}`);
            cy.get('.content')
              .find('.item')
              .eq(name)
              .find('.item-header')
              .find('.item-available')
              .find('.value')
              .click();
            clickPostedWork(numberStamina);
          });
      });
  }
};

const writeNumberStaminaAndDusk = (number) => {
  for (let i = 1; i < number; i++) {
    cy.get(
      'div.form-control:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)'
    ).click();
  }
  for (let i = 1; i < number; i++) {
    cy.get(
      'div.form-control:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)'
    ).click();
  }
};

const clickPostedWork = (numberStamina) => {
  cy.get('div[role="dialog"]').should('be.visible');
  if (numberStamina > 5) {
    writeNumberStaminaAndDusk(5);
  }
  if (numberStamina === 4) {
    writeNumberStaminaAndDusk(4);
  }
  if (numberStamina === 3) {
    writeNumberStaminaAndDusk(3);
  }
  if (numberStamina === 2) {
    writeNumberStaminaAndDusk(2);
  }
  if (numberStamina === 1) {
    writeNumberStaminaAndDusk(1);
  }
  cy.contains('POST WORK BID').click();
  cy.contains('Successful').should('be.visible');
  cy.wait(10000);
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

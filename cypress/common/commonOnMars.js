export const onMarsCommon = (username, password, arr, logUser) => {
  linkToJob();
  loginUser(username, password);
  cy.task('log', logUser);
  checkAndTakeEat();
  cy.task('log', 'I HAVE PASSED THE STAGE OF TAKING FOOD');
  AllCheck(arr);
  cy.task('log', 'I CHECKED THE STAMINA, DUSK, USERNAME');
  clickButtonTransferJob();
  cy.task('log', 'I OPEN DIALOG WINDOW WITH JOB');
  tookCompleteJob();
  cy.task('log', 'I TOOK DUSK FROM WORKED JOB');
  findWork();
  tookWork();
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

const checkCloseButton = () => {
  cy.get('body').then(($checkDialogMainPage) => {
    const dialog = $checkDialogMainPage.find('div[role="dialog"]');
    if (dialog.text().includes('TOS Update!')) {
      cy.task('log', 'Dialog visible');
      clickCloseButton();
    } else {
      cy.contains('Actions').should('be.visible');
      cy.task('log', 'Dialog no visible');
    }
  });
};

const clickCloseButton = () => {
  cy.get('div[role="dialog"]').should('be.visible');
  cy.get('[role="none presentation"]').click('bottom', { multiple: true, force: true });

  cy.task('log', 'I CLOSED ALL WINDOW DIALOG');
};

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

const checkAndTakeEat = () => {
  cy.wait(10000);
  checkCloseButton();
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
  cy.get('div[role="dialog"]').get('button[type=button]').eq(5).should('be.visible').click({ multiple: true });
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
    const tabList = $complete.find('div[role="tablist"]');
    if (!tabList.text().includes('Worked Jobs (0)')) {
      cy.get('button[aria-label="add"]').click({ multiple: true, force: true }).wait(500);
      cy.task('log', 'Click Complete job');
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
      clickPostedWork(numberStamina);
      tookWork();
    });
};

const findWork = () => {
  cy.contains('Find Work').should('be.visible');
  cy.contains('Find Work').click();
};

const writeNumberStaminaAndDusk = (number) => {
  for (let i = 1; i < number; i++) {
    cy.get(
      'div.form-control:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)'
    ).click({ force: true });
  }
  for (let i = 1; i < number; i++) {
    cy.get(
      'div.form-control:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)'
    ).click({ force: true });
  }
  cy.contains('POST WORK BID').click();
  cy.get('body').then(($checkError) => {
    const item = $checkError.find('#notistack-snackbar');
    if (item.text().includes('Insufficient player stamina')) {
      cy.get('button:nth-child(1) > span:nth-child(1) > svg:nth-child(1) > path:nth-child(1)').click();
      cy.task('log', 'Insufficient player stamina');
    } else {
      cy.task('log', 'Successful');
      cy.contains('Successful').should('be.visible');
      cy.wait(5000);
    }
  });
};

const rnd = (a, b) => Math.floor(('0.' + (new Date().getMilliseconds() + ''.slice(1))) * (b - a)) + a;

const clickPostedWork = (numberStamina) => {
  const random = rnd(0, 7);
  const random1 = rnd(1, 3);
  const random2 = rnd(1, 3);
  const random3 = rnd(1, 3);
  const random4 = rnd(1, 2);
  cy.get('.content').find('.item').eq(random).click();
  cy.get('div[role="dialog"]').should('be.visible');
  if (numberStamina >= 5) {
    writeNumberStaminaAndDusk(random1);
  }
  if (numberStamina === 4) {
    writeNumberStaminaAndDusk(random2);
  }
  if (numberStamina === 3) {
    writeNumberStaminaAndDusk(random3);
  }
  if (numberStamina === 2) {
    writeNumberStaminaAndDusk(random4);
  }
  if (numberStamina === 1) {
    writeNumberStaminaAndDusk(1);
  }
  if (numberStamina === 0) {
    cy.get('button:nth-child(1) > span:nth-child(1) > svg:nth-child(1) > path:nth-child(1)').click();
  }
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

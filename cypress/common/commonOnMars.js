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
  cy.contains('COMMUNITY').should('be.visible');
  cy.contains('PLAY NOW').should('be.visible');
  cy.contains('BUY NFTS').should('be.visible');
  cy.contains('PLAY NOW').click();
};

const loginUser = (userName, userPassword) => {
  cy.contains('Login').should('be.visible').click();
  cy.get('input[name="email"]').should('be.visible').type(`${userName}`).should('have.value', userName);
  cy.get('input[name="password"]').should('be.visible').type(`${userPassword}`).should('have.value', userPassword);
  cy.get('button[type="submit"]').should('be.visible').click();
  cy.task('log', 'Click login');
};

const checkCloseButton = () => {
  cy.get('body').then(($checkDialogMainPage) => {
    const dialog = $checkDialogMainPage.find('div[role="dialog"]');
    if (dialog.text().includes('A Friendly Reminder About the Rules')) {
      cy.task('log', 'Dialog visible');
      clickCloseButton();
    } else {
      cy.get('button[title="Action - Eat Stuff"]').should('be.visible');
      cy.task('log', 'Dialog no visible');
    }
  });
};

const clickCloseButton = () => {
  cy.get('div[role="dialog"]').should('be.visible');
  cy.get('div[role="none presentation"]').click('bottom', { multiple: true, force: true });
  cy.task('log', 'I CLOSED ALL WINDOW DIALOG');
};

const checkAndTakeEat = () => {
  checkCloseButton();
  cy.get('button[title="Action - Missions"]').click();
  cy.get('body').then(($claimButton) => {
    const checkEatRation = $claimButton.find('tr.MuiTableRow-root:nth-child(7)').find('button[aria-label="add"]');
    if (!checkEatRation.attr('disabled')) {
      ifClaim();
    } else {
      ifNotClaim();
    }
  });
};

const ifClaim = () => {
  clickClaim();
  clickCloseDialog();
  openAction();
  ifNoDisabledEatRation();
  clickCloseDialog();
};

const clickCloseDialog = () => {
  cy.get('.icon').should('be.visible').click({ multiple: true, force: true });
};

const ifNotClaim = () => {
  cy.task('log', 'I not click Claim');
  clickCloseDialog();
  openAction();
  checkDisableEatRation();
  checkDisableEatSnack();
};

const clickClaim = () => {
  cy.get('button[aria-label="add"]').contains('Daily Ration Claim').should('be.visible').click();
  clickConfirmButton();
  cy.task('log', 'Click Claim');
};

const openAction = () => {
  cy.get('button[title="Action - Eat Stuff"]').should('be.visible').click();
  cy.task('log', 'Click Actions');
};

const checkDisableEatRation = () => {
  cy.get('div[role="dialog"]').then(($eatRation) => {
    const checkEatRation = $eatRation.find('tr.MuiTableRow-root:nth-child(5)').find('button[aria-label="add"]');
    if (!checkEatRation.attr('disabled')) {
      ifNoDisabledEatRation();
    } else {
      cy.task('log', 'I no catch Eat Ration');
    }
  });
};

const checkDisableEatSnack = () => {
  cy.get('div[role="dialog"]').then(($eatSnack) => {
    const checkEatRation = $eatSnack.find('tr.MuiTableRow-root:nth-child(2)').find('button[aria-label="add"]');
    if (!checkEatRation.attr('disabled')) {
      ifNoDisabledEatSnack();
    } else {
      clickCloseDialog();
      cy.task('log', 'I no catch Eat Snack');
    }
  });
};

const ifNoDisabledEatRation = () => {
  cy.get('button[aria-label="add"]').contains('Eat Ration').should('be.visible').click();
  cy.task('log', 'click Eat Ration');
  clickConfirmButton();
  cy.task('log', 'I catch Eat Ration');
};

const ifNoDisabledEatSnack = () => {
  cy.get('button[aria-label="add"]').contains('Eat Snack').should('be.visible').click();
  cy.task('log', 'click Eat Snack');
  clickConfirmButton();
  clickCloseDialog();
  cy.task('log', 'I catch Eat Snack');
};

const checkDusk = (arr) => {
  cy.get('div.MuiBox-root:nth-child(3) > span.MuiBox-root:nth-child(2)')
    .should('be.visible')
    .invoke('text')
    .then(parseInt)
    .then((numberDusk) => {
      arr.push(`Dusk: ${numberDusk}`);
    });
};

const checkUser = (arr) => {
  cy.get('a[href="/profile"]')
    .should('be.visible')
    .invoke('text')
    .then((userName) => {
      arr.push(`User: ${userName}`);
    });
};

const checkStamina = (arr) => {
  cy.get('div.MuiBox-root:nth-child(2) > span.MuiBox-root:nth-child(2)')
    .invoke('text')
    .then((numberStamina) => {
      arr.push(`Stamina: ${numberStamina}`);
    });
};

const checkTime = (arr) => {
  cy.get('div.container div.left div div.element:nth-child(2) > span:nth-child(2)')
    .invoke('text')
    .then((time) => {
      arr.push(`Actual time: ${time}`);
    });
};

const AllCheck = (arr) => {
  checkUser(arr);
  checkDusk(arr);
  checkStamina(arr);
  checkTime(arr);
};

const clickConfirmButton = () => {
  cy.contains('Confirm').should('be.visible').click();
  cy.task('log', 'I click Confirm');
  cy.wait(1000);
};

const clickButtonTransferJob = () => {
  cy.get('button[title="Job Market"]').should('be.visible');
  cy.get('button[title="Job Market"]').click();
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

const findWork = () => {
  cy.contains('Find Work').should('be.visible');
  cy.contains('Find Work').click();
};

const tookWork = () => {
  cy.get('div.MuiBox-root:nth-child(2) > span.MuiBox-root:nth-child(2)')
    .invoke('text')
    .then((numberStamina) => {
      if (numberStamina === '0 | 70') {
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

const rnd = (a, b) => Math.floor(('0.' + (new Date().getMilliseconds() + ''.slice(1))) * (b - a)) + a;

const clickPostedWork = () => {
  randomChangeWork();
  writeNumberStaminaAndDusk(1);
};

const randomChangeWork = () => {
  const random = rnd(0, 7);
  cy.get('.content').find('.item').eq(random).click();
  cy.get('div[role="dialog"]').should('be.visible');
};

const writeNumberStaminaAndDusk = (number) => {
  // returnDusk(number);
  // returnStamina(number);
  clickPostedWorkAndCheckError();
};

// const returnDusk = (number) => {
//   for (let i = 1; i < number; i++) {
//     cy.get(
//       'div.form-control:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)'
//     ).click({ force: true });
//   }
// };
// const returnStamina = (number) => {
//   for (let i = 1; i < number; i++) {
//     cy.get(
//       'div.form-control:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)'
//     ).click({ force: true });
//   }
// };

const clickPostedWorkAndCheckError = () => {
  cy.contains('POST WORK BID').click();
  cy.get('body').then(($checkError) => {
    const item = $checkError.find('#notistack-snackbar');
    if (item.text().includes('Insufficient player stamina')) {
      clickCloseDialog();
      cy.task('log', 'Insufficient player stamina');
    } else {
      cy.task('log', 'Successful');
    }
  });
};

const clickMenuAndLogout = () => {
  cy.get(
    'div.withUser div.container div.MuiBox-root div button:nth-child(5) div.MuiBox-root span:nth-child(1) > img:nth-child(1)'
  ).click();
  cy.wait(500);
  cy.contains('Logout ').click();
  cy.contains('PLAY NOW').should('be.visible');
  cy.contains('COMMUNITY').should('be.visible');
  cy.contains('BUY NFTS').should('be.visible');
  cy.task('log', 'I LOGOUT');
};

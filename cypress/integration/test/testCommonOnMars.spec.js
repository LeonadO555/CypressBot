import LoginPage from '../../page/loginPage';
import DoJobHelp, { AllCheck, checkAndDoJob } from '../../helpers/doJobhelp';
import DoJobPage, { clickButtonJob } from '../../page/doJobPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('DO JOB', () => {
  const loginPage = new LoginPage();
  const doJobHelp = new DoJobHelp();
  const doJobPage = new DoJobPage();
  let env = {
    USERNAME_LENA_FIRST: 'content.poluyan@gmail.com',
    PASSWORD_LENA_FIRST: 'marianna6537',
    USERNAME_LEO_FIRST: 'leonmixt@gmail.com',
    PASSWORD_LEO_FIRST: 'eUn3RXq7Z^BCPk.',
    USERNAME_LEO_SECOND: 'sergey.beletski1989@gmail.com',
    PASSWORD_LEO_SECOND: '4d%XG43XqK4**mB',
    USERNAME_LEO_THIRD: 'acheho281@gmail.com',
    PASSWORD_LEO_THIRD: "/;+Qt3fkK*wn['f",
    USERNAME_LEO_FOURTH: 'nneprihiv@gmail.com',
    PASSWORD_LEO_FOURTH: 'C7C-dBj-kGu-3C9',
    USERNAME_LEO_FIFTH: 'poleva1marina@gmail.com',
    PASSWORD_LEO_FIFTH: 'FQq-Cag-DVC-9fW',
    USERNAME_LEO_SIXTH: 'ik5772699@gmail.com',
    PASSWORD_LEO_SIXTH: '123qwert123!!',
    USERNAME_LEO_SEVENTH: 'konirovA195@gmail.com',
    PASSWORD_LEO_SEVENTH: 'Ghy_139_klo-1',
    USERNAME_MIHA_FIRST: 'dorogovmihailo@yandex.ru',
    PASSWORD_MIHA_FIRST: '2105971997mishoB!',
    USERNAME_MIHA_SECOND: 'mdorogov52@gmail.com',
    PASSWORD_MIHA_SECOND: '2105971997mishob',
    USERNAME_MIHA_THIRD: 'dorogovmihail53@gmail.com',
    PASSWORD_MIHA_THIRD: '2105971997mishob',
    USERNAME_IGOR_1: 'Khan.Curze@gmail.com',
    PASSWORD_IGOR_1: 'astramiletarum',
    USERNAME_IGOR_2: 'Konrad.Guilliman@gmail.com',
    PASSWORD_IGOR_2: 'astramiletarum',
    USERNAME_IGOR_3: 'rogal.manus@gmail.com',
    PASSWORD_IGOR_3: 'astramiletarum',
    USERNAME_IGOR_4: 'rogal.corax@gmail.com',
    PASSWORD_IGOR_4: 'astramiletarum',
    USERNAME_IGOR_5: 'ferrus.curze@gmail.com',
    PASSWORD_IGOR_5: 'astramiletarum',
  };
  it('Click Do Job button and wait 1 minute', () => {
    const arr = [];
    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LENA_FIRST, env.PASSWORD_LENA_FIRST);
    cy.task('log', 'username1');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_FIRST, env.PASSWORD_LEO_FIRST);
    cy.task('log', 'username2');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_SECOND, env.PASSWORD_LEO_SECOND);
    cy.task('log', 'username3');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_THIRD, env.PASSWORD_LEO_THIRD);
    cy.task('log', 'username4');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_FOURTH, env.PASSWORD_LEO_FOURTH);
    cy.task('log', 'username5');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_FIFTH, env.PASSWORD_LEO_FIFTH);
    cy.task('log', 'username6');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_SIXTH, env.PASSWORD_LEO_SIXTH);
    cy.task('log', 'username7');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_SEVENTH, env.PASSWORD_LEO_SEVENTH);
    cy.task('log', 'username8');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_MIHA_FIRST, env.PASSWORD_MIHA_FIRST);
    cy.task('log', 'username9');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_MIHA_SECOND, env.PASSWORD_MIHA_SECOND);
    cy.task('log', 'username10');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_MIHA_THIRD, env.PASSWORD_MIHA_THIRD);
    cy.task('log', 'username11');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_IGOR_1, env.PASSWORD_IGOR_1);
    cy.task('log', 'username12');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_IGOR_2, env.PASSWORD_IGOR_2);
    cy.task('log', 'username13');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_IGOR_3, env.USERNAME_IGOR_3);
    cy.task('log', 'username14');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_IGOR_4, env.PASSWORD_IGOR_4);
    cy.task('log', 'username15');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_IGOR_5, env.PASSWORD_IGOR_5);
    cy.task('log', 'username16');
    doJobHelp.checkAndTakeEat();
    AllCheck(arr);
    clickButtonJob();
    checkAndDoJob();
    cy.writeFile('dataAllUser.json', arr);
  });
});

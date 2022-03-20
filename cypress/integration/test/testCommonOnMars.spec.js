import LoginPage from '../../page/loginPage';
import DoJobHelp from '../../helpers/doJobhelp';
import DoJobPage from '../../page/doJobPage';

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
    PASSWORD_LEO_THIRD: '/;+Qt3fkK*wn[\'f',
    USERNAME_MIHA_FIRST: 'dorogovmihailo@yandex.ru',
    PASSWORD_MIHA_FIRST: '2105971997mishoB!',
    USERNAME_MIHA_SECOND: 'mdorogov52@gmail.com',
    PASSWORD_MIHA_SECOND: '2105971997mishob',
    USERNAME_MIHA_THIRD: 'dorogovmihail53@gmail.com',
    PASSWORD_MIHA_THIRD: '2105971997mishob',
  };
  it('Click Do Job button and wait 1 minute', () => {
    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_FIRST, env.PASSWORD_LEO_FIRST);
    cy.task('log', 'username1');
    doJobHelp.clickDoJobOrLogout();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LENA_FIRST, env.PASSWORD_LENA_FIRST);
    cy.task('log', 'username2');
    doJobHelp.clickDoJobOrLogout();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_SECOND, env.PASSWORD_LEO_SECOND);
    cy.task('log', 'username3');
    doJobHelp.clickDoJobOrLogout();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_LEO_THIRD, env.PASSWORD_LEO_THIRD);
    cy.task('log', 'username3');
    doJobHelp.clickDoJobOrLogout()

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_MIHA_FIRST, env.PASSWORD_MIHA_FIRST);
    cy.task('log', 'username4');
    doJobHelp.clickDoJobOrLogout();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_MIHA_SECOND, env.PASSWORD_MIHA_SECOND);
    cy.task('log', 'username5');
    doJobHelp.clickDoJobOrLogout();

    doJobPage.linkToJob();
    loginPage.loginUser(env.USERNAME_MIHA_THIRD, env.PASSWORD_MIHA_THIRD);
    cy.task('log', 'username6');
    doJobHelp.clickDoJobOrLogout();
  });
});

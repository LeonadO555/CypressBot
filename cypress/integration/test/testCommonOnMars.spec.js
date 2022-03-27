import { onMarsCommon } from '../../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('DO JOB', () => {
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
    onMarsCommon(env.USERNAME_LENA_FIRST, env.PASSWORD_LENA_FIRST, arr, 'username 1');
    onMarsCommon(env.USERNAME_LEO_FIRST, env.PASSWORD_LEO_FIRST, arr, 'username 2');
    onMarsCommon(env.USERNAME_LEO_SECOND, env.PASSWORD_LEO_SECOND, arr, 'username 3');
    onMarsCommon(env.USERNAME_LEO_THIRD, env.PASSWORD_LEO_THIRD, arr, 'username 4');
    onMarsCommon(env.USERNAME_LEO_FOURTH, env.PASSWORD_LEO_FOURTH, arr, 'username 5');
    onMarsCommon(env.USERNAME_LEO_FIFTH, env.PASSWORD_LEO_FIFTH, arr, 'username 6');
    onMarsCommon(env.USERNAME_LEO_SIXTH, env.PASSWORD_LEO_SIXTH, arr, 'username 7');
    onMarsCommon(env.USERNAME_LEO_SEVENTH, env.PASSWORD_LEO_SEVENTH, arr, 'username 8');
    onMarsCommon(env.USERNAME_MIHA_FIRST, env.PASSWORD_MIHA_FIRST, arr, 'username 9');
    onMarsCommon(env.USERNAME_MIHA_SECOND, env.PASSWORD_MIHA_SECOND, arr, 'username 10');
    onMarsCommon(env.USERNAME_MIHA_THIRD, env.PASSWORD_MIHA_THIRD, arr, 'username 11');
    onMarsCommon(env.USERNAME_IGOR_1, env.PASSWORD_IGOR_1, arr, 'username 12');
    onMarsCommon(env.USERNAME_IGOR_2, env.PASSWORD_IGOR_2, arr, 'username 13');
    onMarsCommon(env.USERNAME_IGOR_3, env.PASSWORD_IGOR_3, arr, 'username 14');
    onMarsCommon(env.USERNAME_IGOR_4, env.PASSWORD_IGOR_4, arr, 'username 15');
    onMarsCommon(env.USERNAME_IGOR_5, env.PASSWORD_IGOR_5, arr, 'username 16');
    cy.writeFile('dataAllUser.json', arr);
  });
});

import { onMarsCommon } from '../../common/commonOnMars';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
before(function () {
  cy.clearCookies();
});

describe('DO JOB', () => {
  let env = {
    USERNAME_LENA_1: 'content.poluyan@gmail.com',
    PASSWORD_LENA_1: 'marianna6537',
    USERNAME_LEO_1: 'leonmixt@gmail.com',
    PASSWORD_LEO_1: 'eUn3RXq7Z^BCPk.',
    USERNAME_LEO_2: 'sergey.beletski1989@gmail.com',
    PASSWORD_LEO_2: '4d%XG43XqK4**mB',
    USERNAME_LEO_3: 'acheho281@gmail.com',
    PASSWORD_LEO_3: "/;+Qt3fkK*wn['f",
    USERNAME_LEO_4: 'nneprihiv@gmail.com',
    PASSWORD_LEO_4: 'C7C-dBj-kGu-3C9',
    USERNAME_LEO_5: 'poleva1marina@gmail.com',
    PASSWORD_LEO_5: 'FQq-Cag-DVC-9fW',
    USERNAME_LEO_6: 'ik5772699@gmail.com',
    PASSWORD_LEO_6: '123qwert123!!',
    USERNAME_LEO_7: 'konirovA195@gmail.com',
    PASSWORD_LEO_7: 'Ghy_139_klo-1',
    USERNAME_MIHA_1: 'dorogovmihailo@yandex.ru',
    PASSWORD_MIHA_1: '2105971997mishoB!',
    USERNAME_MIHA_2: 'mdorogov52@gmail.com',
    PASSWORD_MIHA_2: '2105971997mishob',
    USERNAME_MIHA_3: 'dorogovmihail53@gmail.com',
    PASSWORD_MIHA_3: '2105971997mishob',
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
    while (true) {
      const arr = [];
      onMarsCommon(env.USERNAME_LENA_1, env.PASSWORD_LENA_1, arr, 'username 1');
      onMarsCommon(env.USERNAME_LEO_1, env.PASSWORD_LEO_1, arr, 'username 2');
      onMarsCommon(env.USERNAME_LEO_2, env.PASSWORD_LEO_2, arr, 'username 3');
      onMarsCommon(env.USERNAME_LEO_3, env.PASSWORD_LEO_3, arr, 'username 4');
      onMarsCommon(env.USERNAME_LEO_4, env.PASSWORD_LEO_4, arr, 'username 5');
      onMarsCommon(env.USERNAME_LEO_5, env.PASSWORD_LEO_5, arr, 'username 6');
      onMarsCommon(env.USERNAME_LEO_6, env.PASSWORD_LEO_6, arr, 'username 7');
      onMarsCommon(env.USERNAME_LEO_7, env.PASSWORD_LEO_7, arr, 'username 8');
      onMarsCommon(env.USERNAME_MIHA_1, env.PASSWORD_MIHA_1, arr, 'username 9');
      onMarsCommon(env.USERNAME_MIHA_2, env.PASSWORD_MIHA_2, arr, 'username 10');
      onMarsCommon(env.USERNAME_MIHA_3, env.PASSWORD_MIHA_3, arr, 'username 11');
      onMarsCommon(env.USERNAME_IGOR_1, env.PASSWORD_IGOR_1, arr, 'username 12');
      onMarsCommon(env.USERNAME_IGOR_2, env.PASSWORD_IGOR_2, arr, 'username 13');
      onMarsCommon(env.USERNAME_IGOR_3, env.PASSWORD_IGOR_3, arr, 'username 14');
      onMarsCommon(env.USERNAME_IGOR_4, env.PASSWORD_IGOR_4, arr, 'username 15');
      onMarsCommon(env.USERNAME_IGOR_5, env.PASSWORD_IGOR_5, arr, 'username 16');
      cy.writeFile('dataAllUser.json', arr);
    }
  });
});

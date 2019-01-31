import reducer1 from '../../src/reducers/reducer1'
import { ACTION } from '../../src/constants';

describe('reducer1', () => {
  it('has a default state', () => {
      expect(reducer1(undefined,{type: 'NADA'})).toEqual({
        action: 'Hola como estas?',
        action2: 'Hoña'
      });
  });
});

describe('reducer1', () => {
  it('has a default state', () => {
      expect(reducer1(undefined,{type: ACTION,payload: "si funciona"})).toEqual({
        action: 'si funciona',
        action2: 'Hoña'
      });
  });
});

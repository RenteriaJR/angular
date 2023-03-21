import { LengthPokeNamePipe } from './length-poke-name.pipe';

describe('LengthPokeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new LengthPokeNamePipe();
    expect(pipe).toBeTruthy();
  });
});

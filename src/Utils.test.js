import { parseInputData } from './Utils';

describe('Input parser', () => {
  const correctOutput =
    '[{"name":"root","children":[{"name":"test","children":[]},{"name":"something","children":[{"name":"somewhere","children":[]}]}]},{"name":"dev","children":[{"name":"null","children":[]}]}]';

  it('ignore multiple paths', () => {
    const retval = parseInputData(`[
      '/root/test',
      '/root/test',
      '/dev/null',
      '/root/something/somewhere'
    ]`);
    expect(JSON.stringify(retval)).toBe(correctOutput);
  });
  it('ignore empty paths', () => {
    const retval = parseInputData(`[
      '/root/test',
      '/dev/null',
      '',
      '/root/something/somewhere'
    ]`);
    expect(JSON.stringify(retval)).toBe(correctOutput);
  });
  it('ignore malformat input', () => {
    const retval = parseInputData(`[
      '/root/test',
      '/dev/null'
      '/root/something/somewhere'
    ]`);
    expect(JSON.stringify(retval)).toBe('[]');
  });
});

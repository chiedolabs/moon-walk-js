/* eslint max-nested-callbacks: 0*/
/* eslint no-undef: 0*/
import { expect } from 'chai';
import moonwalk from './src/moon-walk';

describe('Moonwalk', () => {
  let x;

  before((done) => {
    x = `
      <div>
        <div>Hello</div>
      </div>
    `;
    done();
  });

  it('should remove indentation', (done) => {
    expect(moonwalk(x)).to.equal('<div>\n  <div>Hello</div>\n</div>');
    done();
  });
});



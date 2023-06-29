import { SimpleClass } from './simple-class';

describe('Class - Hello world Test', () => {
  let sc: SimpleClass;

  beforeEach(() => {
    sc = new SimpleClass();
  });

  it('contains 12 charactes', () => {
    expect(sc.sayHelloWorld().length).toEqual(12)
  });

  it('says Hello World!', () =>
    expect(sc.sayHelloWorld()).toEqual('Hello World!'));
});


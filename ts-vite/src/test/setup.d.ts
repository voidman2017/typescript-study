import '@testing-library/jest-dom';

declare global {
  namespace Vi {
    interface JestAssertion<T = unknown> extends jest.Matchers<void, T> {}
  }
}
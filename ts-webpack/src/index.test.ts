import { helloWorld } from "./index";

test('should return "Hello, world!"', () => {
  expect(helloWorld()).toBe("Hello, world!");
});

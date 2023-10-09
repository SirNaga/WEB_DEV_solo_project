import { validateName, validateTelNumber, validateEMail, validatePassword } from '../../SubPage/Contact/contact.js';

window.alert = jest.fn();

test('Entering a valid name', () => {
  expect(validateName('Name')).toBe(true);
});

test('Entering a invalid name', () => {
  expect(validateName('123')).toBe(false);
});

test('Entering a valid TelNumber', () => {
  expect(validateTelNumber(1234567890)).toBe(true);
});

test('Entering a invalid TelNumber', () => {
  expect(validateTelNumber(123)).toBe(false);
});

test('Entering a valid E-Mail', () => {
  expect(validateEMail('a@a.a')).toBe(true);
});

test('Entering a invalid E-Mail', () => {
  expect(validateEMail('aNota')).toBe(false);
});

test('Entering a valid password', () => {
  expect(validatePassword('aPassworda')).toBe(true);
});

test('Entering a invalid password', () => {
  expect(validatePassword('')).toBe(false);
});

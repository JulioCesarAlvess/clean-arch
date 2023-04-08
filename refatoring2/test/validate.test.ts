import { validate } from "../src/v2/validate";

test("Deve validar o cpf válido que tem digito maior de zero", function () {
  const isValid = validate("259.556.978-37");
  expect(isValid).toBeTruthy();
});

test("Deve validar o cpf válido que tem zero no primeiro dígito", function () {
  const isValid = validate("198.454.187-08");
  expect(isValid).toBeTruthy();
});

test("Deve validar o cpf válido que tem zero no segundo dígito", function () {
  const isValid = validate("147.085.437-60");
  expect(isValid).toBeTruthy();
});

test("Deve tentar validar com mais de 14 caracteres", function () {
  const isValid = validate("147.085.437-600");
  expect(isValid).toBeFalsy();
});

test("Deve tentar validar com digitos repetidos", function () {
  const isValid = validate("111.111.111-11");
  expect(isValid).toBeFalsy();
});

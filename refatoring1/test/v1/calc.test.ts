import { calc } from "../../src/v1/calc";

test("Deve calcular uma corrida em horario normal", function () {
  const fare = calc([{ dist: 10, ds: new Date("2021-03-10T10:00:00") }]);
  expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horario noturno", function () {
  const fare = calc([{ dist: 10, ds: new Date("2021-03-10T22:00:00") }]);
  expect(fare).toBe(39);
});

test("Deve calcular uma corrida no domingo", function () {
  const fare = calc([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }]);
  expect(fare).toBe(29);
});

test("Deve calcular uma corrida no domingo em horario norturno", function () {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-07T22:00:00") }]);
    expect(fare).toBe(50);
  });

  test("Não deve calcular uma corrida com distancia invalida", function () {
    const fare = calc([{ dist: -10, ds: new Date("2021-03-07T22:00:00") }]);
    expect(fare).toBe(-1);
  });

  test("Não deve calcular uma corrida com data invalida", function () {
    const fare = calc([{ dist: 10, ds: null }]);
    expect(fare).toBe(-2);
  });

  test("Deve calcular uma corrida em horario normal om valor minimo", function () {
    const fare = calc([{ dist: 3, ds: new Date("2021-03-10T10:00:00") }]);
    expect(fare).toBe(10);
  });

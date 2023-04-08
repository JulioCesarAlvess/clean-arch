import { calculateRide } from "../../src/v2/calculateRide";

test("Deve calcular uma corrida em horario normal", function () {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-10T10:00:00") },
  ]);
  expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horario noturno", function () {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-10T22:00:00") },
  ]);
  expect(fare).toBe(39);
});

test("Deve calcular uma corrida no domingo", function () {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-07T10:00:00") },
  ]);
  expect(fare).toBe(29);
});

test("Deve calcular uma corrida no domingo em horario norturno", function () {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-07T22:00:00") },
  ]);
  expect(fare).toBe(50);
});

test("Não deve calcular uma corrida com distancia invalida", function () {
  expect(() =>
    calculateRide([{ distance: -10, date: new Date("2021-03-07T22:00:00") }])
  ).toThrow(new Error("Invalid Distance"));
});

test("Não deve calcular uma corrida com data invalida", function () {
  expect(() =>
    calculateRide([{ distance: 10, date: new Date("typescript") }])
  ).toThrow(new Error("Invalid Date"));
});

test("Deve calcular uma corrida em horario normal om valor minimo", function () {
  const fare = calculateRide([
    { distance: 3, date: new Date("2021-03-10T10:00:00") },
  ]);
  expect(fare).toBe(10);
});

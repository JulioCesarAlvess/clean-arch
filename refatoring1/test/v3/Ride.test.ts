import Ride from "../../src/v3/Ride";

test("Deve calcular uma corrida em horario normal", function () {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculteFare();
  expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horario noturno", function () {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-10T22:00:00"));
  const fare = ride.calculteFare();
  expect(fare).toBe(39);
});

test("Deve calcular uma corrida no domingo", function () {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-07T10:00:00"));
  const fare = ride.calculteFare();
  expect(fare).toBe(29);
});

test("Deve calcular uma corrida no domingo em horario norturno", function () {
  const ride = new Ride();
  ride.addSegment(10, new Date("2021-03-07T22:00:00"));
  const fare = ride.calculteFare();
  expect(fare).toBe(50);
});

test("Não deve calcular uma corrida com distancia invalida", function () {
  const ride = new Ride();
  expect(() => ride.addSegment(-10, new Date("2021-03-07T22:00:00"))).toThrow(
    new Error("Invalid Distance")
  );
});

test("Não deve calcular uma corrida com data invalida", function () {
  const ride = new Ride();
  expect(() => ride.addSegment(10, new Date("typescript"))).toThrow(
    new Error("Invalid Date")
  );
});

test("Deve calcular uma corrida em horario normal om valor minimo", function () {
  const ride = new Ride();
  ride.addSegment(3, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculteFare();
  expect(fare).toBe(10);
});

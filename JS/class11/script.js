let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  }
];


for (let i = 0; i < cars.length ; i++) {
    console.log(cars[i].model)
    console.log(cars[i].make)
    console.log(cars[i].year)
    console.log(cars[i].color)
    console.log("-------------------------------")
}
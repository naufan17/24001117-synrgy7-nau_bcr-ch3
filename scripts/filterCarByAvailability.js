function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  // result.filter((i) => i.available)

  for (let i = 0; i < cars.length - 1; i++) {
    if (cars[i].available) {
      result.push(cars[i])
    }
  }

  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

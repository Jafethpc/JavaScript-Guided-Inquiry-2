function BMI(mass, height) {
  return mass / (height ^ 2);
}

const tomBMI = { mass: 8, height: 9 };

const jerryBMI = { mass: 45, height: 10 };

const higherBMI =
  BMI(tomBMI.mass, tomBMI.height) > BMI(jerryBMI.mass, jerryBMI.height)
    ? true
    : false;

console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`);

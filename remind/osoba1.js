import osoba from "./osoba.js";

class osoba1 extends osoba {
  constructor(name,surname, salary) {
    super(name,surname);
    this.salary = 500;
  }
}

export default osoba1;

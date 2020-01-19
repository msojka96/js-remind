class osoba {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName = (name, surname) => {
    return `${this.name} ${this.surname}`;
  };
}

export default osoba;

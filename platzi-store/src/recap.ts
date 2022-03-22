const myName = 'Juan';
const suma = (a: number, b: number) => {
  return a + b;
};
suma(2, 2);
class Persona {
  /*
  private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = age,
    this.name = name;
  }*/
  //Otra forma de constructor es:
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `Mi nombre es ${this.name}, y tengo ${this.age}`;
  }
}

const juan = new Persona(15, 'Juan');
juan.getSummary();

export class Project {
  #name;
  #budget;
  #isActive;

  constructor(name = "Без имени", budget = 0, isActive = false) {
    this.#name = name;
    this.#budget = budget;
    this.#isActive = isActive;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get budget() {
    return this.#budget;
  }

  set budget(value) {
    if (value < 0) throw new Error("Бюджет не может быть отрицательным");
    this.#budget = value;
  }

  get isActive() {
    return this.#isActive;
  }

  set isActive(value) {
    this.#isActive = Boolean(value);
  }

  #activate() {
    this.#isActive = true;
  }

  show() {
    console.log(`Проект: ${this.#name}`);
    console.log(`Бюджет: ${this.#budget}`);
    console.log(`Активен: ${this.#isActive}`);
  }

  delete() {
    this.#name = null;
    this.#budget = null;
    this.#isActive = null;
    console.log("Экземпляр проекта удален");
  }

  copy() {
    return this;
  }

  static clone(project) {
    if (!(project instanceof Project)) throw new Error("Можно клонировать только Project");
    return new Project(project.name, project.budget, project.isActive);
  }

  activateManually() {
    this.#activate();
  }
}

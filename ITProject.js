import { Project } from "./Project.js";

export class ITProject extends Project {
  #isWebBased;

  constructor(name, budget, isActive, isWebBased = true) {
    super(name, budget, isActive);
    this.#isWebBased = isWebBased;
  }

  get isWebBased() {
    return this.#isWebBased;
  }

  set isWebBased(value) {
    this.#isWebBased = Boolean(value);
  }

  show() {
    super.show();
    console.log(`Веб-проект: ${this.#isWebBased}`);
  }

  delete() {
    super.delete();
    this.#isWebBased = null;
  }

  static clone(itProject) {
    if (!(itProject instanceof ITProject)) throw new Error("Можно клонировать только ITProject");
    return new ITProject(
      itProject.name,
      itProject.budget,
      itProject.isActive,
      itProject.isWebBased
    );
  }
}

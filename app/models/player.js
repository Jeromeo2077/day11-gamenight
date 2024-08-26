

export class Player {
  constructor(name) {
    this.name = name;
    // Their score is defaulted to start at 0
    this.score = 0;
  }

  // Player template
  get PlayerTemplateCard() {
    return /*html*/`
      <div class="card">
          <div class="card-body">
              ${this.name} - ${this.score}
          </div>
      </div>`
  }

}
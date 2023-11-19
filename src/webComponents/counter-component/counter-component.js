class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = 0;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  increment() {
    this.count++;
    this.render();
  }

  decrement() {
    this.count--;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h2>Counter Component With Inside State</h2>
      <button id="increment">Increment</button>
      <button id="decrement">Decrement</button>
      <div>Count: ${this.count}</div>
    `;
    const incrementButton = this.shadowRoot.getElementById("increment");
    incrementButton.addEventListener("click", () => this.increment());

    const decrementButton = this.shadowRoot.getElementById("decrement");
    decrementButton.addEventListener("click", () => this.decrement());
  }
}

customElements.define("counter-component", CounterComponent);

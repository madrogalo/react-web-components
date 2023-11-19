class PureCounterComponent extends HTMLElement {
  constructor() {
    super();
    // ця строка відповідає за створення тіньового DOM  \
    this.attachShadow({ mode: 'open' });
  }


  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "count") {
      this.count = newValue;
    }
  }

  set count(value) {
    this.render(value);
  }

  render(count) {
    this.shadowRoot.innerHTML = `
      <h2>Pure Counter Component</h2>
      <div>Count: ${count}</div>
    `;
  }

}

customElements.define("pure-counter-component", PureCounterComponent);

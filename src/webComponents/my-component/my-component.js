class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log('Fetch data:', data);
      this.render(data);
    } catch (error) {
      console.error('Fetch error:', error);
      this.renderError(error);
    }
  }

  render(data) {
    console.log('Render data:', data);

    const listItems = data.slice(0, 10).map(item => `
    <div class="card">
      <div>${item.id}</div>
      <h3>${item.title}</h3>
    </div>
  `).join('');

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: red;
          font-size: 20px;
        }
        .container {
          color: green;
          font-size: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .card {
          width: 300px;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          border: 2px solid #9C27B0;
          border-radius: 5px;
          margin: 24px;
        }
      </style>
      <p>Hello! This is web component with fetch inside component.</p>
      <div class="container">${listItems}</div>
    `;
  }

  renderError(error) {
    this.shadowRoot.innerHTML = `
      <style>
        .error {
          color: red;
        }
      </style>
      <p class="error">Error: ${error.message}</p>
    `;
  }
}

customElements.define('my-component', MyComponent);
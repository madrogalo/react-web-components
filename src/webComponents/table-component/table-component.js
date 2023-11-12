class TableComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.changePage = this.changePage.bind(this);
  };

  connectedCallback() {
    this.fetchPeople('https://api.slingacademy.com/v1/sample-data/products?offset=0&limit=10');
  };

  changePage(pageNumber) {
    const offset = pageNumber * 10;
    const limit =  10;
    this.fetchPeople(`https://api.slingacademy.com/v1/sample-data/products?offset=${offset}&limit=${limit}`);
  };

  async fetchPeople(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // create table header
      const headerData = await data?.products[0]
      const headerNames = Object.keys(headerData)              
      const htmlHeaderTable = headerNames
        .map(item => `<th>${item}</th>`).join('');
      // create table body
      const bodyTable = await data?.products
      const htmlBodyTable = bodyTable
        .map(item => `
          <tr>
            <td>${item.id}</td>
            <td>${item.price}</td>
            <td>${item.category}</td>
            <td>${item.created_at}</td>
            <td>
              <img src="${item.photo_url}" alt="${item.name}">
            </td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.updated_at}</td>
          </tr>
        `).join('');

      const totalProducts = data.total_products;
      const totalPages = Math.ceil(totalProducts / 10);
      const urlParams = new URLSearchParams(new URL(url).search);
      const currentPage = parseInt(urlParams.get('offset') / 10) + 1;
      const paginationHTML = this.createPagination(currentPage, totalPages);

      this.render(htmlHeaderTable, htmlBodyTable, paginationHTML);

    } catch (error) {
      console.error('Fetch error:', error);
      this.renderError(error);
    }
  }


  createPagination(currentPage, totalPages) {
    let pages = [];
    // Always show the first page
    pages.push(1);

    // Determine the range of pages to show around the current page
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    // Show ellipses if there's a gap between the first page and the start page
    if (startPage > 2) {
      pages.push('...');
    }

    // Add the range of pages around the current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Show ellipses if there's a gap between the end page and the last page
    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages.map(page => {
      const isActive = page === currentPage;
      const activeClass = isActive ? 'active' : '';
      if (page === '...') {
        return `<span class="pagination_btn ${activeClass}">${page}</span>`;
      } else {
        return `<div class="pagination_btn ${activeClass}" data-page="${page}">${page}</div>`;
      }
    }).join('');
  }

  render(htmlHeaderTable, htmlBodyTable, htmlPagination) {
    this.shadowRoot.innerHTML = `
      <style>
        .table-container {
          background-color: #f1f1f1;
        }
        table, th, td {
          border: 1px solid black;
        }
        table img {
          width: 100px;
          height: 100px;
        }
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .pagination_btn {
          background-color: #4CAF50;
          color: white;
          padding: 8px 16px;
          text-decoration: none;
          cursor: pointer;
        }
        .pagination_btn.active {
          background-color: red;
        }
      </style>
      <table style="width:100%">
        <tr>
          ${htmlHeaderTable}
        </tr>
        ${htmlBodyTable}
      </table>
      <div class="pagination">
        ${htmlPagination}
      </div>
    `;
    const paginationButtons = this.shadowRoot.querySelectorAll('.pagination_btn');
    paginationButtons.forEach((btn, index) => {
      const pageNumber = btn.getAttribute('data-page');
      btn.addEventListener('click', () => this.changePage(pageNumber - 1));
    });
  };

  renderError(error) { 
    this.shadowRoot.innerHTML = `
      <p style="color: red;">${error}</p>
    `;
  };
}

customElements.define('table-component', TableComponent)
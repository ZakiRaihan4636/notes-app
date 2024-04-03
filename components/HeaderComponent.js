class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    this.shadowRoot.innerHTML = `
      <style>
        header {
        background-color: #333;
        color: #fff;
        padding: 10px;
        display: grid;
        grid-template-columns: auto 1fr auto; /* 3 kolom: satu untuk elemen sebelum judul, satu untuk judul, dan satu untuk elemen setelah judul */
        align-items: center; /* Pusatkan vertikal */
    }

    header h1 {
      margin: 0;
      grid-column: 2; /* Letakkan judul di tengah */
    }
      </style>
      
      <header>
       <h1>NoteApp</h1>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
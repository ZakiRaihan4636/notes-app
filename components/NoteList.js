class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = `
      <style>
        /* CSS styles for NoteList */
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          border-bottom: 1px solid #ccc;
          padding: 10px;
        }
      </style>
      <ul id="note-list"></ul>
    `;
  }

  connectedCallback() {
    this.addEventListener('noteAdded', (e) => {
      this.addNoteToList(e.detail.title, e.detail.body);
    });
  }

  addNoteToList(title, body) {
    const noteList = this.shadowRoot.getElementById('note-list');
    const noteItem = document.createElement('li');
    noteItem.innerHTML = `<h3>${title}</h3><p>${body}</p>`;
    noteList.appendChild(noteItem);
  }
}

customElements.define('note-list', NoteList);
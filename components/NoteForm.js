class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = `
      <style>
        /* CSS styles for NoteForm */
        form {

          margin: 20px 0 0;
        }
        input[type="text"], textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
        }
        button {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      </style>
      <form id="note-form">
        <input type="text" id="title" placeholder="Title">
        <textarea id="body" placeholder="Note Body"></textarea>
        <button type="submit">Add Note</button>
      </form>
    `;
  }

  connectedCallback() {
    this.shadowRoot.getElementById('note-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = this.shadowRoot.getElementById('title').value;
      const body = this.shadowRoot.getElementById('body').value;
      if (title.trim() && body.trim()) {
        this.dispatchEvent(new CustomEvent('noteAdded', {
          detail: {
            title,
            body
          }
        }));
        this.shadowRoot.getElementById('note-form').reset();
      } else {
        alert('Please fill in both title and body fields.');
      }
    });
  }
}

customElements.define('note-form', NoteForm);

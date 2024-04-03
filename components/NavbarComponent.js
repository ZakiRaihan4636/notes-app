class NavbarComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    this.shadowRoot.innerHTML = `
                    <style>
                        .navbar {
                            margin-top:10px;
                            overflow: hidden;
                            // background-color: #333;
                        }

                        .navbar a {
                            float: left;
                            display: block;
                            color: #222;
                            text-align: center;
                            padding: 14px 20px;
                            text-decoration: none;
                        }

                        .navbar a:hover {
                            background-color: #ddd;
                            color: black;
                        }
                    </style>

                    <div class="navbar">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </div>
                `;
  }
}

customElements.define('navbar-component', NavbarComponent);
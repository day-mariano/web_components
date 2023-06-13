class MeuComponente extends HTMLElement {

  constructor() {
    super()

    const shadow = this.attachShadow({mode:'open'})

    const root = document.createElement('div')
    root.setAttribute('class', 'root')

    const texto = document.createElement('span')
    texto.setAttribute('class', 'texto')
    texto.textContent = this.getAttribute("texto")

    root.appendChild(texto)

    const style = document.createElement('style')
    style.textContent = `
    .root {
      width: 300px;
      heigth: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: blue;
    }

    .texto {
      font-size: 2rem;
      color: white;
    }
    `
    shadow.appendChild(style)
    shadow.appendChild(root)
  }
}

customElements.define('meu-componente', MeuComponente)
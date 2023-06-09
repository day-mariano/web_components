class MeuCirculo extends HTMLElement {

  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const raiz = document.createElement('span')
    raiz.setAttribute('class', 'raiz')

    const texto = document.createElement('span')
    texto.setAttribute('class', 'texto')
    texto.textContent = this.getAttribute("texto")

    raiz.appendChild(texto)

    const style = document.createElement('style')
    style.textContent = `
    .raiz {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 200px;
      border-radius: 100%;
      background-color: ${this.getAttribute("cor") || "red"};
    }

    .texto {
      font-size: 2rem;
      color: white;
    }
    `
    shadow.appendChild(style)
    shadow.appendChild(raiz)
  }
}

customElements.define('meu-circulo', MeuCirculo)
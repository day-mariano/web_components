class MeuCirculo extends HTMLElement {

  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const raiz = document.createElement('span')
    raiz.setAttribute('class', 'raiz')

    const style = document.createElement('style')
    style.textContent = `
    .raiz {
      width: 200px;
      height: 200px;
      border-radious: 100%;
      background-color: red;
    }
    `
    shadow.appendChild(style)
    shadow.appendChild(raiz)
  }
}

customElements.define('meu-circulo', MeuCirculo)
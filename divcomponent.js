class DivComponent extends HTMLElement {
  constructor(){
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const root = document.createElement('div')
    root.setAttribute('class', 'root')

    const texto = document.createElement('p')
    texto.textContent = `meu novo componente`

    const style = document.createElement('style')
    style.textContent = `
    .root{
      background-color: gray;
      width: 400px;
      height: 200px;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem;
    }
    `
    shadow.appendChild(style)
    shadow.appendChild(root)
  }
}

customElements.define('div-component', DivComponent)
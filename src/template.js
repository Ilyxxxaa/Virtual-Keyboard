class Template {
  constructor(tagName, className, parent, innerHTML) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    if (parent) {
      parent.append(this.element);
    }
    if (innerHTML) {
      this.element.innerHTML = innerHTML;
    }
  }
}
export default Template;

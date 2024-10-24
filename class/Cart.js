class Cart {
  constructor(items, cartClass, plusClass, minusClass, deleteClass, currency) {
    this.items = items;
    this.cartClass = cartClass || "cart";
    this.plusClass = plusClass || "plus";
    this.minusClass = minusClass || "minus";
    this.deleteClass = deleteClass || "delete";
    this.currency = currency || "РУБ";
  }

  goodsPlus(art) {
    this.items[art]["count"]++;
  }

  goodsDelete(art) {
    delete this.items[art];
  }

  goodsMinus(art) {
    this.items[art]["count"]--;

    if (this.items[art]["count"] === 0) {
      this.goodsDelete(art);
    }
  }

  getTotal() {
    let total = 0;
    for (let key in this.items) {
      total += this.items[key]["price"] * this.items[key]["count"];
    }
    return total;
  }

  render() {
    let out = `<table class='cart'>`;
    for (let key in this.items) {
      out += `<tr>
            <td>
              <button class="delete button-primary" data-articul=${
                this.items[key]["articul"]
              }>
                x
              </button>
            </td>
            <td>
              <img src=${this.items[key]["image"]} />
            </td>
            <td><h4>${this.items[key]["name"]}</td>
            <td>
              <button class="minus button-primary" data-articul=${
                this.items[key]["articul"]
              }>
                -
              </button>
            </td>
            <td><span>${this.items[key]["count"]}</span></td>
            <td>
              <button class="plus button-primary" data-articul=${
                this.items[key]["articul"]
              }>
                +
              </button>
            </td>
            <td><span>${this.items[key]["price"] * this.items[key]["count"]} ${
        this.currency
      }</span></td>
          </tr>`;
    }
    out += `<tr>
            <td colspan="7" style="text-align: right">
              <span class="total">Итого: </span> ${this.getTotal()} ${
      this.currency
    }
            </td>
          </tr>`;
    out += `</table>`;

    return out;
  }
}

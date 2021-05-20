import { ProxyState } from "../AppState.js";
import { Item } from "../Models/Item.js";
import { itemsService } from "../Services/ItemsService.js";


function _draw() {

  let items = ProxyState.items
  let itemElem = document.getElementById('items')
  let template = ''

  items.forEach(item => template += /*html*/ `
    <div class = "col-4 card text-center m-3">
      <img src = "${item.img}">
      <div class = "card-body">
        <p>${item.name} Stock: ${item.stock}</p>
        <button class = "btn btn-success" onclick = "app.itemsController.addItem('${item.name}')">$${item.price}</button>
      </div>
    </div>
  `
  )
  itemElem.innerHTML = template
}

export class ItemsController {
  constructor() {
    ProxyState.on('items', _draw)
    _draw()
    ProxyState.on('cart', _drawCart)
  }
  addItem(itemName) {
    itemsService.addItem(itemName)
  }
  deleteItem(itemName) {
    itemsService.deleteItem(itemName)
  }

}

function _drawCart() {
  let cart = ProxyState.cart
  let cartElem = document.getElementById('cart')
  let total = 0
  let template = ''
  cart.forEach(item => template += /*html*/ `
  <div class = "col-4 card text-center m-3">
      <img src = "${item.img}">
      <div class = "card-body">
        <p>${item.name} $${item.price} </p>
        <button onclick="app.itemsController.deleteItem('${item.name}') ">duhleet</button>
      </div>
    </div> 
  `
  )
  cart.forEach(item => total += item.price)
  template += /*html*/ `
  <div>
  <p>Total: ${total}</p>
  </div>
  `
  cartElem.innerHTML = template
}






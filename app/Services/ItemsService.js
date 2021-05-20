import { ProxyState } from "../AppState.js";


class ItemsService {
  addItem(itemName) {
    let item = ProxyState.items.find(i => i.name == itemName)
    ProxyState.cart.push(item)
    ProxyState.cart = ProxyState.cart
  }
  deleteItem(itemName) {
    ProxyState.cart = ProxyState.cart.filter(i => i.name != itemName)
  }
}
export const itemsService = new ItemsService()






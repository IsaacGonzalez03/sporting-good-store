import { Item } from "./Models/Item.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {


  /** @type {Item[]} */
  items = [{ name: 'AK-47', price: 200, img: 'http://assets.stickpng.com/images/58a1e3d7e33a543010fac27d.png', stock: 4 }, { name: 'Soccer Ball', price: 10, img: 'https://www.pngitem.com/pimgs/m/4-48450_soccer-ball-png-clipart-picture-fifa-ball-png.png', stock: 100 }, {
    name: 'Goat', price: 25, img: 'https://www.pngjoy.com/pngm/31/732794_goat-sound-goat-png-download.png', stock: 2
  }]

  cart = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

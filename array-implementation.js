class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  // access the element of an array
  get(index) {
    return this.data[index]
  }
  //push : to add the element to an array
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  // remove the last element
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index] // Item to delete

    /* --- My own figured out approach ( AlhamdulilLah )
    Object.keys(this.data).map(key => {
      if (index >= key) {
        this.data[index] = this.data[index + 1]
      }
    })
    delete this.data[this.length - 1]
    this.length--
    return item
    */

    /** --- 2. Another implementation | Keeping the code clean --- */
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.data.length - 1; i++) {
      this.data[index] = this.data[index + 1]
    }

    delete this.data[this.length - 1]
    this.length--
  }
}

const colors = new MyArray()

colors.push('red')
colors.push('orange')
colors.push('teal')

colors.delete(2)
console.log(colors)

class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find(
      function (product) {
        return id === product.id;
      })
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  findProductsByNameLike(subString) {
    const matches = this.products.filter(function(product) {
      const position = product.name.search(subString)
      return position !== -1
    } )
    return matches;
  }

  removeProductById(id){
    const originalLength = this.products.length;
    this.products = this.products.filter((product) => {
        return id !== product.id;
      })

      if (this.products.length < originalLength) {
        return true;
      } else{
        return false; 
      } 
    }

    checkReorder(){
      const reorderProducts = this.products.filter((product) => {
        return product.quantityInStock <= product.reorderLevel;
      })
      const productIds = reorderProducts.map((product) => product.id);
      return {
        type: "Reorder",
        productIds: productIds
      };
    } 

  }

module.exports = Catalogue;

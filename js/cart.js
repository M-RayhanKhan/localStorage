const addProduct = () => {
    const product = document.getElementById('product-input').value;
    const quantity = document.getElementById('quantity-input').value;
    document.getElementById('product-input').value = '';
    document.getElementById('quantity-input').value = '';
    displayProduct(product, quantity)
    saveToLocalStorage(product, quantity)
}

const displayProduct = (product , quantity) =>{
    const ulList = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`;
    ulList.appendChild(li)
}

const getLocalStorage = () =>{
    let cart = {}
    const storageCart = localStorage.getItem('item');
    if (storageCart) {
        cart = JSON.parse(storageCart)
    }
    return cart;
}

const saveToLocalStorage = (product, quantity) => {
  const item = getLocalStorage();
  item[product] = quantity;
  const stringify = JSON.stringify(item) 
  localStorage.setItem('item', stringify)
}

const displayStorageData = () => {
    const saveStorage = getLocalStorage();
    for (const item in saveStorage) {
     const myQuantity = saveStorage[item];
     displayProduct(item, myQuantity);
    }
}
displayStorageData()
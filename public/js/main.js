const socket = io.connect();

socket.on('products', data => {
    render(data);
});

function render(data) {
    const html = data.map((elem, index) => {
      return(`<tr><td>${elem.title}</td><td>${elem.price}</td><td><img src="${elem.thumbnail}" alt="imagen"></td></tr>`)
    }).join(" ");
    document.getElementById('tableItem').innerHTML = html;
}

function addProduct(e) {
    const producto = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        thumbnail: document.getElementById('thumbnail').value
      };
      socket.emit('new-product', producto);
  
      return false;
}
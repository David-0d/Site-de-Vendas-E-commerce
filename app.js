let count = 0;
function adicionarAoCarrinho() {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("Produto adicionado ao carrinho!");
}
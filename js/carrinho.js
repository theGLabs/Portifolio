document.addEventListener("DOMContentLoaded", () => {

// ELEMENTOS
const botoes = document.querySelectorAll(".comprar");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const cartPanel = document.getElementById("cart-panel");
const cartIcon = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartCount = document.getElementById("cart-count");

// CARRINHO SALVO
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};


// ABRIR / FECHAR CARRINHO
if(cartIcon){
cartIcon.onclick = () => cartPanel.classList.add("open");
}

if(closeCart){
closeCart.onclick = () => cartPanel.classList.remove("open");
}


// ADICIONAR PRODUTO
botoes.forEach((botao) => {

botao.addEventListener("click", () => {

const nome = botao.dataset.nome;
const preco = Number(botao.dataset.preco);

if(carrinho[nome]){
carrinho[nome].quantidade++;
}else{
carrinho[nome] = {
preco: preco,
quantidade: 1
};
}

atualizarCarrinho();

});

});


// ATUALIZAR CARRINHO
function atualizarCarrinho(){

if(cartItems) cartItems.innerHTML = "";

let total = 0;
let quantidadeTotal = 0;

Object.keys(carrinho).forEach((nome)=>{

const item = carrinho[nome];
const subtotal = item.preco * item.quantidade;

total += subtotal;
quantidadeTotal += item.quantidade;

if(cartItems){

const div = document.createElement("div");

div.innerHTML = `
<span class="item-text">${nome} (${item.quantidade}) - R$ ${subtotal.toFixed(2)}</span>

<button class="remover" data-item="${nome}">
<lottie-player
src="../fotos/icons8-lixo.json"
background="transparent"
speed="1"
loop
style="width:25px;height:25px;">
</lottie-player>
</button>
`;

cartItems.appendChild(div);

}

});

if(totalEl) totalEl.textContent = total.toFixed(2);
if(cartCount) cartCount.textContent = quantidadeTotal;

adicionarEventosRemover();
animarLixeira();

localStorage.setItem("carrinho", JSON.stringify(carrinho));

}


// REMOVER ITEM
function adicionarEventosRemover(){

const removerBtns = document.querySelectorAll(".remover");

removerBtns.forEach((btn)=>{

btn.onclick = ()=>{

const nome = btn.dataset.item;

delete carrinho[nome];

atualizarCarrinho();

};

});

}


// ANIMAÇÃO LIXEIRA
function animarLixeira(){

document.querySelectorAll(".remover lottie-player").forEach(anim => {

anim.stop();

anim.parentElement.addEventListener("mouseenter", () => anim.play());
anim.parentElement.addEventListener("mouseleave", () => anim.stop());

});

}


// CARREGAR CARRINHO
atualizarCarrinho();

});
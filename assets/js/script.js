// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Brigadeiro Gourmet",
        description: "O clássico brasileiro com um toque especial de chocolate belga.",
        price: 2.50,
        image: "https://harald.com.br/wp-content/uploads/2020/04/BriadeiroGormet_Melken_700x520.jpg"
    },
    {
        id: 2,
        name: "Beijinho de Coco",
        description: "Delicioso doce de coco ralado com leite condensado.",
        price: 2.50,
        image: "https://vovopalmirinha.com.br/wp-content/uploads/2019/04/beijinho-de-coco.png"
    },
    {
        id: 3,
        name: "Cajuzinho",
        description: "Doce de amendoim com formato de caju e coberto com chocolate.",
        price: 2.50,
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/e7623022370b992338d18aa3b2bf4409_L.jpg"
    },
    {
        id: 4,
        name: "Trufa de Maracujá",
        description: "Trufa recheada com ganache de chocolate branco e maracujá.",
        price: 4.00,
        image: "https://guiadacozinha.com.br/wp-content/uploads/2019/11/bombom-recheio-maracuja.jpg"
    },
    {
        id: 5,
        name: "Bombom de Morango",
        description: "Morango fresco envolto em chocolate meio amargo.",
        price: 5.00,
        image: "https://receitinhas.com.br/wp-content/uploads/2022/12/Bombom-de-morango-com-leite-ninho-Tang-Receitas.jpg"
    },
    {
        id: 6,
        name: "Palha Italiana",
        description: "Biscoito misturado com brigadeiro e chocolate.",
        price: 3.50,
        image: "https://receitasnotadez.com.br/wp-content/uploads/2020/03/baabacef-palha-italiana-de-doce-de-leite-l-thumb.jpg"
    },
    {
        id: 7,
        name: "Bolo de Pote - Chocolate",
        description: "Camadas de bolo de chocolate e recheio de brigadeiro.",
        price: 8.00,
        image: "https://tse3.mm.bing.net/th?id=OIP.ggOOR0FGYln83O0jc4fVZAHaEK&pid=15.1"
    },
    {
        id: 8,
        name: "Cookie Recheado",
        description: "Cookie com gotas de chocolate e recheio cremoso.",
        price: 6.50,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_R9atzFVQo25odOCTWtfn3sn5r_TYOsoz10_3X5Zu4uKMwu_P-KoW51t8o59yHgHWZmeh3yc6KZXr_oU8cDq4qWBt2PVomHIRdjUmBdx0CCM0Ie-HF7jUR__fevRqFk8QS8iMjd7ZcAnPYVH31FupRNMIrutVgVci2Ssy-QAsrPTeu2gHPIpaFdU9/s1398/cookie-recheado-com-nutella-1.jpg"
    },
    {
        id: 9,
        name: "Bicho de Pé",
        description: "Doce de morango com cobertura de açucar.",
        price: 2.50,
        image: "https://oquetempracomer.com.br/wp-content/uploads/2023/05/Bicho-de-Pe-Doce.jpg"
    },
    {
        id: 10,
        name: "Trufa de Limão",
        description: "Trufa recheada com ganache de chocolate branco e limão siciliano.",
        price: 4.00,
        image: "https://catracalivre.com.br/wp-content/uploads/2020/03/trufa-sorvete-limao-catraca.jpg"
    },
    {
        id: 11,
        name: "Cupcake Red Velvet",
        description: "Cupcake de veludo vermelho com cobertura de cream cheese.",
        price: 7.00,
        image: "https://renata.com.br/images/receitas/545/renata-imagem-receitas-cupcakeredvelvet-share.jpg"
    },
    {
        id: 12,
        name: "Bolo de Pote - Doce de Leite",
        description: "Camadas de bolo de baunilha e recheio de doce de leite.",
        price: 8.00,
        image: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/bolo-doce-de-leite-ovomaltine-potinho.jpg"
    },
    {
        id: 13,
        name: "Torta de Limão",
        description: "Base crocante com recheio cremoso de limão e cobertura de merengue.",
        price: 15.00,
        image: "https://minhasreceitinhas.com.br/wp-content/uploads/2022/08/Tortinha-de-limao-Cristal-Alimentos-1-1282x850-1-1024x679.jpg"
    },
    {
        id: 14,
        name: "Pavê de Chocolate",
        description: "Camadas de biscoito, creme de chocolate e chantilly.",
        price: 12.00,
        image: "https://img.uenicdn.com/image/upload/v1553117011/service_images/shutterstock_151018367.jpg"
    },  
    {
        id: 15,
        name: "Mousse de Maracujá",
        description: "Mousse leve e refrescante de maracujá com cobertura de chantilly.",
        price: 10.00,
        image: "https://s2-receitas.glbimg.com/YnHRI1dxU9IaVRSUkfr3qTsHK9s=/0x0:778x584/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/08/28/12_54_25_592_mousse_maracuja_com_chocolate03.jpg"
    }
];

// Elementos DOM
const productsContainer = document.getElementById('products-container');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartIcon = document.querySelector('.cart-icon');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const userBtn = document.getElementById('user-btn');
const authOverlay = document.getElementById('auth-overlay');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const userOverlay = document.getElementById('user-overlay');
const userModal = document.getElementById('user-modal');
const userClose = document.getElementById('user-close');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginTabButtons = document.querySelectorAll('.auth-tabs .tab');
const userNameEl = document.getElementById('user-name');
const userEmailEl = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');
const ordersList = document.getElementById('orders-list');

// Carrinho de compras
let cart = [];

// Produtos selecionados para encomenda
let orderSelection = {};

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    renderOrderProducts();
    updateOrderSummary();

    // Event listeners
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);
    hamburger.addEventListener('click', toggleMobileMenu);
    userBtn.addEventListener('click', handleUserBtnClick);
    authOverlay.addEventListener('click', closeAuthModal);
    authClose.addEventListener('click', closeAuthModal);
    loginTabButtons.forEach(btn => btn.addEventListener('click', switchAuthTab));
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    logoutBtn.addEventListener('click', handleLogout);
    userClose.addEventListener('click', closeUserModal);
    userOverlay.addEventListener('click', closeUserModal);

    // checkout button - save order to user's orders
    document.querySelector('.checkout-btn').addEventListener('click', handleCheckout);

    // Formulário de contato
    document.querySelector('.contact-form').addEventListener('submit', handleFormSubmit);

    // Busca dinâmica
    document.getElementById('search-input').addEventListener('input', function(e) {
        const termo = e.target.value.toLowerCase();
        const filtrados = products.filter(product =>
            product.name.toLowerCase().includes(termo) ||
            product.description.toLowerCase().includes(termo)
        );
        renderProducts(filtrados);
    });
});

// Renderizar produtos
function renderProducts(lista = products) {
    productsContainer.innerHTML = '';

    lista.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <span class="price">R$ ${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">Adicionar</button>
                </div>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para renderizar produtos
function renderizarProdutos(lista) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    lista.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
        `;
        container.appendChild(div);
    });
}

// Busca dinâmica
document.getElementById('search-input').addEventListener('input', function(e) {
    const termo = e.target.value.toLowerCase();
    const filtrados = products.filter(product =>
        product.name.toLowerCase().includes(termo) ||
        product.description.toLowerCase().includes(termo)
    );
    renderProducts(filtrados);
});

function openAuthModal() {
    authOverlay.classList.add('active');
    authModal.classList.add('active');
}

function closeAuthModal() {
    authOverlay.classList.remove('active');
    authModal.classList.remove('active');
}

function switchAuthTab(e) {
    const tab = e.target.getAttribute('data-tab');
    loginTabButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tab));
    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

// Simple user store in localStorage: users: { email: { name, password, orders: [] } }
function getUsersStore() {
    return JSON.parse(localStorage.getItem('doce_users') || '{}');
}

function setUsersStore(store) {
    localStorage.setItem('doce_users', JSON.stringify(store));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('doce_current_user') || 'null');
}

function setCurrentUser(user) {
    if (user) localStorage.setItem('doce_current_user', JSON.stringify(user));
    else localStorage.removeItem('doce_current_user');
    updateUserUI();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;

    const users = getUsersStore();
    if (users[email]) {
        showNotification('Este e-mail já está cadastrado. Faça login.');
        return;
    }

    users[email] = { name, password, orders: [] };
    setUsersStore(users);
    showNotification('Cadastro realizado com sucesso! Você já pode entrar.');
    switchAuthTab({ target: document.querySelector('.auth-tabs .tab[data-tab="login"]') });
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    const users = getUsersStore();
    const user = users[email];
    if (!user || user.password !== password) {
        showNotification('E-mail ou senha incorretos.');
        return;
    }

    setCurrentUser({ email, name: user.name });
    showNotification('Login realizado com sucesso!');
    closeAuthModal();
}

function handleLogout() {
    setCurrentUser(null);
    showNotification('Você saiu da conta.');
}

function updateUserUI() {
    const current = getCurrentUser();
    if (current) {
        // Fill modal fields with user info
        userNameEl.textContent = current.name || 'Usuário';
        userEmailEl.textContent = current.email;
        // keep orders ready
        renderOrders();
    } else {
        userNameEl.textContent = 'Usuário';
        userEmailEl.textContent = 'email@exemplo.com';
    }
}

function handleUserBtnClick() {
    const current = getCurrentUser();
    if (current) {
        openUserModal();
    } else {
        openAuthModal();
    }
}

function openUserModal() {
    const current = getCurrentUser();
    if (!current) return;
    // ensure orders are rendered
    renderOrders();
    userOverlay.classList.add('active');
    userModal.classList.add('active');
}

function closeUserModal() {
    userOverlay.classList.remove('active');
    userModal.classList.remove('active');
}

function renderOrders() {
    ordersList.innerHTML = '';
    const current = getCurrentUser();
    if (!current) return;
    const users = getUsersStore();
    const user = users[current.email] || { orders: [] };

    if (!user.orders || user.orders.length === 0) {
        ordersList.innerHTML = '<p>Você ainda não tem pedidos.</p>';
        return;
    }

    user.orders.slice().reverse().forEach((order, idx) => {
        const orderEl = document.createElement('div');
        orderEl.className = 'order';
        orderEl.innerHTML = `
            <h4>Pedido #${order.id} - ${new Date(order.date).toLocaleString()}</h4>
            <div>Itens: ${order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}</div>
            <div>Total: R$ ${order.total.toFixed(2)}</div>
        `;
        ordersList.appendChild(orderEl);
    });
}

/* ------------------ Checkout / Orders ------------------ */

function handleCheckout() {
    const current = getCurrentUser();
    if (!current) {
        showNotification('Faça login para finalizar a compra.');
        openAuthModal();
        return;
    }

    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio.');
        return;
    }

    const total = cart.reduce((sum, it) => sum + it.price * it.quantity, 0);
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: cart.map(i => ({ id: i.id, name: i.name, quantity: i.quantity, price: i.price })),
        total
    };

    // save to user's orders
    const users = getUsersStore();
    if (!users[current.email]) users[current.email] = { name: current.name, password: '', orders: [] };
    users[current.email].orders.push(order);
    setUsersStore(users);

    // clear cart and update
    cart = [];
    updateCart();
    showNotification('Pedido realizado com sucesso!');
    renderOrders();
    closeAuthModal();
}

// Initialize UI state from localStorage
updateUserUI();

// Adicionar produto ao carrinho
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Atualizar carrinho
function updateCart() {
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">&times;</button>
                        </div>
                    </div>
                `;

        cartItems.appendChild(cartItem);
    });

    // Atualizar total e contador
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Adicionar event listeners aos botões do carrinho
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Aumentar quantidade
function increaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// Diminuir quantidade
function decreaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeFromCart(e);
    }
}

// Remover item do carrinho
function removeFromCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Alternar carrinho
function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

// Alternar menu mobile
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Mostrar notificação
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: var(--accent-color);
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                z-index: 1001;
                box-shadow: var(--shadow);
                transition: var(--transition);
            `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Manipular envio do formulário
function handleFormSubmit(e) {
    e.preventDefault();
    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.target.reset();
}

// Renderiza os produtos para seleção na encomenda
function renderOrderProducts() {
    const container = document.getElementById('order-products-list');
    if (!container) return;
    container.innerHTML = '';
    products.forEach(prod => {
        const item = document.createElement('div');
        item.className = 'order-product-item';
        item.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}">
            <span>${prod.name}</span>
            <div class="order-product-controls">
                <button type="button" class="minus" data-id="${prod.id}">-</button>
                <span id="order-qty-${prod.id}">${orderSelection[prod.id] || 0}</span>
                <button type="button" class="plus" data-id="${prod.id}">+</button>
            </div>
        `;
        container.appendChild(item);
    });

    // Eventos dos botões
    container.querySelectorAll('.plus').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.dataset.id);
            orderSelection[id] = (orderSelection[id] || 0) + 1;
            document.getElementById(`order-qty-${id}`).textContent = orderSelection[id];
            updateOrderSummary();
        };
    });
    container.querySelectorAll('.minus').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.dataset.id);
            if (orderSelection[id] > 0) {
                orderSelection[id]--;
                document.getElementById(`order-qty-${id}`).textContent = orderSelection[id];
                updateOrderSummary();
            }
        };
    });
}

// Atualiza o resumo da encomenda
function updateOrderSummary() {
    const summary = document.getElementById('order-summary');
    if (!summary) return;
    summary.innerHTML = '';
    Object.entries(orderSelection).forEach(([id, qty]) => {
        if (qty > 0) {
            const prod = products.find(p => p.id == id);
            const li = document.createElement('li');
            li.textContent = `${prod.name} x${qty}`;
            summary.appendChild(li);
        }
    });
}

// Manipula envio do formulário de encomenda
document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!Object.values(orderSelection).some(qty => qty > 0)) {
        showNotification('Selecione ao menos um doce para encomendar!');
        return;
    }
    showNotification('Encomenda enviada com sucesso! Entraremos em contato por e-mail.');
    orderSelection = {};
    renderOrderProducts();
    updateOrderSummary();
    e.target.reset();
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Fechar menu mobile se estiver aberto
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Verifica se há produtos selecionados
    const selectedItems = Object.entries(orderSelection)
        .filter(([id, qty]) => qty > 0)
        .map(([id, qty]) => {
            const prod = products.find(p => p.id == id);
            return { ...prod, quantity: qty };
        });

    if (selectedItems.length === 0) {
        showNotification('Selecione ao menos um doce para encomendar!');
        return;
    }

    // Adiciona os itens ao carrinho
    selectedItems.forEach(item => {
        const existing = cart.find(c => c.id === item.id);
        if (existing) {
            existing.quantity += item.quantity;
        } else {
            cart.push({ ...item });
        }
    });

    updateCart();

    showNotification('Encomenda adicionada ao carrinho! Você pode finalizar a compra.');

    // Limpa seleção e formulário
    orderSelection = {};
    renderOrderProducts();
    updateOrderSummary();
    e.target.reset();
});
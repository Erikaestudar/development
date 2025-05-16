const desserts = [
    {
       "image": {
            "thumbnail": "./assets/images/thumbnail/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-waffle-mobile.jpg",
            "tablet": "./assets/images/tablet/image-waffle-tablet.jpg",
            "desktop": "./assets/images/desktop/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/tablet/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/desktop/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-macaron-mobile.jpg",
            "tablet": "./assets/images/tablet/image-macaron-tablet.jpg",
            "desktop": "./assets/images/desktop/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/tablet/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/desktop/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-baklava-mobile.jpg",
            "tablet": "./assets/images/tablet/image-baklava-tablet.jpg",
            "desktop": "./assets/images/desktop/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-meringue-mobile.jpg",
            "tablet": "./assets/images/tablet/image-meringue-tablet.jpg",
            "desktop": "./assets/images/desktop/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-cake-mobile.jpg",
            "tablet": "./assets/images/tablet/image-cake-tablet.jpg",
            "desktop": "./assets/images/desktop/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-brownie-mobile.jpg",
            "tablet": "./assets/images/tablet/image-brownie-tablet.jpg",
            "desktop": "./assets/images/desktop/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/thumbnail/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/mobile/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/tablet/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/desktop/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]

/*
let cart = []

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".cartBtn")
    let totalDisplay = document.querySelector(".total")

    buttons.forEach((btn, index) => {
        let counterSpan = btn.querySelector(".counter")
        let count = 0

        btn.querySelector(".icon-02").addEventListener("click", (e) => {
            e.preventDefault()
            count++
            updateButtonStyle(btn, counterSpan, count)
            updateCart(index, count)
            updateTotal()
        })

        btn.querySelector(".icon-01").addEventListener("click", (e) => {
            e.preventDefault()
            if (count > 0) count--
            updateButtonStyle(btn, counterSpan, count)
            updateCart(index, count)
            updateTotal()
        })
    })   

    function updateButtonStyle(btn, counterSpan, count) {
        if (count > 0) {
            btn.classList.add("checkedBtn")
            btn.classList.remove("defaultBtn")
            counterSpan.textContent = count
        } else {
            btn.classList.remove("checkedBtn")
            btn.classList.add("defaultBtn")
            counterSpan.textContent = ""
        }
    }

    function updateCart(index, quantity) {
        const dessert = desserts[index]
        const existing = cart.find(item => item.name === dessert.name)

        if (quantity === 0) {
            cart = cart.filter(item => item.name !== dessert.name)
        } else {
            if (existing) {
                existing.quantity = quantity
                existing.subtotal = (dessert.price * quantity).toFixed(2)
            } else {
                cart.push({
                    name: dessert.name,
                    category: dessert.category,
                    price: dessert.price,
                    quantity: quantity,
                    subtotal: (dessert.price * quantity).toFixed(2),
                    image: dessert.image.thumbnail
                })
            }
        }

        renderCart()
    }

    function updateTotal() {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        totalDisplay.textContent = total.toFixed(2)
    }

    function renderCart() {
        const cartWrapper = document.querySelector(".cart-wrapper")
        cartWrapper.innerHTML = ""

        if (cart.length === 0) {
            cartWrapper.innerHTML = `
            <img src="assets/images/illustration-empty-cart.svg" alt="">
            <p>Your added items will appear here</p>
            `
            return
        }

        cart.forEach(item => {
            const div = document.createElement("div")
            div.classList.add("cart-item")
            div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 60px; border-radius: 8px;">
            <p><strong>${item.name}</strong></p>
            <p>Qty: ${item.quantity} x $${item.price.toFixed(2)}</p>
            <p><strong>Total: $${item.subtotal}</strong></p>
            `
            cartWrapper.appendChild(div)
        })
    }
})


let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cartBtn");
  const totalDisplay = document.querySelector(".total");

  buttons.forEach((btn, index) => {
    const counterSpan = btn.querySelector(".counter");
    const dessert = desserts[index];
    let item = cart.find(el => el.name === dessert.name);
    let count = item ? item.quantity : 0;

    // Inicializa estilo e contador na tela
    updateButtonStyle(btn, counterSpan, count);

    // Clique em qualquer parte do botão principal
    btn.addEventListener("click", (e) => {
      // Evita cliques nos ícones alterarem aqui
      if (!e.target.closest('.icon-01') && !e.target.closest('.icon-02')) {
        if (count === 0) {
          count = 1;
          updateButtonStyle(btn, counterSpan, count);
          updateCart(index, count);
          updateTotal();
        }
      }
    });

    // icon-01 agora DIMINUI
    btn.querySelector(".icon-01").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (count > 0) {
        count--;
        updateButtonStyle(btn, counterSpan, count);
        updateCart(index, count);
        updateTotal();
      }
    });

    // icon-02 agora AUMENTA
    btn.querySelector(".icon-02").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      count++;
      updateButtonStyle(btn, counterSpan, count);
      updateCart(index, count);
      updateTotal();
    });
  });

  updateTotal();
  renderCart();

  function updateButtonStyle(btn, counterSpan, count) {
    if (count > 0) {
      btn.classList.add("checkedBtn");
      btn.classList.remove("defaultBtn");
      counterSpan.textContent = count;
    } else {
      btn.classList.remove("checkedBtn");
      btn.classList.add("defaultBtn");
      counterSpan.textContent = "";
    }
  }

  function updateCart(index, quantity) {
    const dessert = desserts[index];
    const existing = cart.find(item => item.name === dessert.name);

    if (quantity === 0) {
      cart = cart.filter(item => item.name !== dessert.name);
    } else {
      if (existing) {
        existing.quantity = quantity;
        existing.subtotal = (dessert.price * quantity).toFixed(2);
      } else {
        cart.push({
          name: dessert.name,
          category: dessert.category,
          price: dessert.price,
          quantity: quantity,
          subtotal: (dessert.price * quantity).toFixed(2),
          image: dessert.image.thumbnail
        });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalDisplay.textContent = total.toFixed(2);
  }

  function renderCart() {
    const cartWrapper = document.querySelector(".cart-wrapper");
    cartWrapper.innerHTML = "";

    if (cart.length === 0) {
      cartWrapper.innerHTML = `
        <img src="assets/images/illustration-empty-cart.svg" alt="">
        <p>Your added items will appear here</p>
      `;
      return;
    }

    cart.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 60px; border-radius: 8px;">
        <p><strong>${item.name}</strong></p>
        <p>Qty: ${item.quantity} x $${item.price.toFixed(2)}</p>
        <p><strong>Total: $${item.subtotal}</strong></p>
      `;
      cartWrapper.appendChild(div);
    });
  }
});


let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cartBtn");
  const totalItemsDisplay = document.querySelector(".total");

  buttons.forEach((btn, index) => {
    const counterSpan = btn.querySelector(".counter");
    const dessert = desserts[index];
    let item = cart.find(el => el.name === dessert.name);
    let count = item ? item.quantity : 0;

    updateButtonStyle(btn, counterSpan, count);

    btn.addEventListener("click", (e) => {
      if (!e.target.closest('.icon-01') && !e.target.closest('.icon-02')) {
        if (count === 0) {
          count = 1;
          updateButtonStyle(btn, counterSpan, count);
          updateCart(index, count);
          updateTotals();
        }
      }
    });

    // DIMINUI (icon-01)
    btn.querySelector(".icon-01").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (count > 0) {
        count--;
        updateButtonStyle(btn, counterSpan, count);
        updateCart(index, count);
        updateTotals();
      }
    });

    // AUMENTA (icon-02)
    btn.querySelector(".icon-02").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      count++;
      updateButtonStyle(btn, counterSpan, count);
      updateCart(index, count);
      updateTotals();
    });
  });

  updateTotals();
  renderCart();

  function updateButtonStyle(btn, counterSpan, count) {
    if (count > 0) {
      btn.classList.add("checkedBtn");
      btn.classList.remove("defaultBtn");
      counterSpan.textContent = count;
    } else {
      btn.classList.remove("checkedBtn");
      btn.classList.add("defaultBtn");
      counterSpan.textContent = "";
    }
  }

  function updateCart(index, quantity) {
    const dessert = desserts[index];
    const existing = cart.find(item => item.name === dessert.name);

    if (quantity === 0) {
      cart = cart.filter(item => item.name !== dessert.name);
    } else {
      if (existing) {
        existing.quantity = quantity;
        existing.subtotal = (dessert.price * quantity).toFixed(2);
      } else {
        cart.push({
          name: dessert.name,
          category: dessert.category,
          price: dessert.price,
          quantity: quantity,
          subtotal: (dessert.price * quantity).toFixed(2),
          image: dessert.image.thumbnail
        });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  function updateTotals() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalItemsDisplay.textContent = totalItems;

    renderCart(); // para atualizar também o valor total dos preços
  }

  function renderCart() {
    const cartWrapper = document.querySelector(".cart-wrapper");
    cartWrapper.innerHTML = "";

    if (cart.length === 0) {
      cartWrapper.innerHTML = `
        <img src="assets/images/illustration-empty-cart.svg" alt="">
        <p>Your added items will appear here</p>
      `;
      return;
    }

    cart.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 60px; border-radius: 8px;">
        <p><strong>${item.name}</strong></p>
        <p><strong>${item.quantity}x</strong> @$${item.price.toFixed(2)} <strong>$${item.subtotal}</strong></p>
      `;
      cartWrapper.appendChild(div);
    });

    // Adiciona o Order Total (preço total final)
    const orderTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("order-total");
    orderDiv.style.marginTop = "1rem";
    orderDiv.innerHTML = `<p>Order Total: <strong>$${orderTotal.toFixed(2)}</strong></p>`;
    cartWrapper.appendChild(orderDiv);
  }
});

*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cartBtn");
  const totalItemsDisplay = document.querySelector(".total");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const orderTotalBox = document.querySelector(".order-total");
  const orderTotalText = orderTotalBox.querySelector("p");
  const orderTotalValue = orderTotalBox.querySelector("span");

  buttons.forEach((btn, index) => {
    const counterSpan = btn.querySelector(".counter");
    const dessert = desserts[index];
    let item = cart.find(el => el.name === dessert.name);
    let count = item ? item.quantity : 0;

    updateButtonStyle(btn, counterSpan, count);

    // clique geral no botão
    btn.addEventListener("click", (e) => {
      if (!e.target.closest('.icon-01') && !e.target.closest('.icon-02')) {
        if (count === 0) {
          count = 1;
          updateButtonStyle(btn, counterSpan, count);
          updateCart(index, count);
          updateTotals();
        }
      }
    });

    // DIMINUI
    btn.querySelector(".icon-01").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (count > 0) {
        count--;
        updateButtonStyle(btn, counterSpan, count);
        updateCart(index, count);
        updateTotals();
      }
    });

    // AUMENTA
    btn.querySelector(".icon-02").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      count++;
      updateButtonStyle(btn, counterSpan, count);
      updateCart(index, count);
      updateTotals();
    });
  });

  updateTotals();
  renderCart();

  function updateButtonStyle(btn, counterSpan, count) {
    if (count > 0) {
      btn.classList.add("checkedBtn");
      btn.classList.remove("defaultBtn");
      counterSpan.textContent = count;
    } else {
      btn.classList.remove("checkedBtn");
      btn.classList.add("defaultBtn");
      counterSpan.textContent = "";
    }
  }

  function updateCart(index, quantity) {
    const dessert = desserts[index];
    const existing = cart.find(item => item.name === dessert.name);

    if (quantity === 0) {
      cart = cart.filter(item => item.name !== dessert.name);
    } else {
      if (existing) {
        existing.quantity = quantity;
        existing.subtotal = (dessert.price * quantity).toFixed(2);
      } else {
        cart.push({
          name: dessert.name,
          category: dessert.category,
          price: dessert.price,
          quantity: quantity,
          subtotal: (dessert.price * quantity).toFixed(2),
          image: dessert.image.thumbnail
        });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  function updateTotals() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalItemsDisplay.textContent = totalItems;
    localStorage.setItem("cart", JSON.stringify(cart));
  }


function renderCart() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartMessage = document.querySelector(".empty-msg");
  const orderTotalBox = document.querySelector(".order-total");
  const orderTotalText = orderTotalBox.querySelector("p");
  const orderTotalValue = orderTotalBox.querySelector("span");

  // Limpa carrinho
  cartWrapper.innerHTML = "";

  if (cart.length === 0) {
    // Carrinho vazio: mostra imagem + mensagem
    cartWrapper.style.backgroundImage = "url('assets/images/illustration-empty-cart.svg')";
    cartWrapper.style.height = "150px";
    cartMessage.style.display = "block";

    orderTotalBox.style.borderTopColor = "transparent";
    orderTotalText.textContent = "";
    orderTotalValue.textContent = "";
    return;
  }

  // Carrinho com itens: limpa imagem + mensagem
  cartWrapper.style.backgroundImage = "none";
  cartWrapper.style.height = "auto";
  cartMessage.style.display = "none";

  // Preenche com os itens
  cart.forEach(item => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("cart-item");
    itemBox.style.display = "flex";
    itemBox.style.justifyContent = "space-between";
    itemBox.style.alignItems = "center";
    itemBox.style.width = "100%";

    const info = document.createElement("div");
    info.style.display = "flex";
    info.style.flexDirection = "column";

    const nameP = document.createElement("p");
    nameP.textContent = item.name;

    const priceP = document.createElement("p");
    priceP.textContent = `${item.quantity} x $${item.price.toFixed(2)} = $${item.subtotal}`;

    info.appendChild(nameP);
    info.appendChild(priceP);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-icon");
    deleteBtn.addEventListener("click", () => {
      removeItem(item.name);
    });

    itemBox.appendChild(info);
    itemBox.appendChild(deleteBtn);
    cartWrapper.appendChild(itemBox);
  });

  const orderTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderTotalBox.style.borderTopColor = "var(--border)";
  orderTotalText.textContent = "Order Total";
  orderTotalValue.textContent = `$${orderTotal.toFixed(2)}`;
}

});
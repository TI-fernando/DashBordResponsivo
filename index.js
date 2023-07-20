// Interação para o botão menu.
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
// Fim da interaçaõ do botão menu

// Função dark-mode e light-mode
const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => { // Ação de quando o botão menu for clicado, ira mostrar o sideMenu.
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => { // Ação para ocultar o sideMenu.
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active'); // Ativa o dark-mode.
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');// Desativa o dark-mode.
})
// Fim da função dark-mode e light-mode.

// Função para orderdenar a lista de itens.
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
// Fim da função.
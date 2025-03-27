let items = document.querySelectorAll('.slider .item');
let active = 0;

function loadShow() {
    items.forEach((item, index) => {
        item.style.transition = 'transform 0.5s, opacity 0.5s, filter 0.5s';
        
        if (index === active) {
            // Slide ativo (centro)
            item.style.transform = 'translateX(0) scale(1)';
            item.style.zIndex = 2;
            item.style.opacity = 1;
            item.style.filter = 'none';
        } else if (index === active - 1) {
            // Slide à esquerda
            item.style.transform = 'translateX(-120px) scale(0.8)';
            item.style.zIndex = 1;
            item.style.opacity = 1;
            item.style.filter = 'blur(2px)';
        } else if (index === active + 1) {
            // Slide à direita
            item.style.transform = 'translateX(120px) scale(0.8)';
            item.style.zIndex = 1;
            item.style.opacity = 1;
            item.style.filter = 'blur(2px)';
        } else {
            // Demais slides invisíveis
            item.style.transform = 'translateX(0) scale(0.6)';
            item.style.zIndex = 0;
            item.style.opacity = 0;
            item.style.filter = 'blur(5px)';
        }
    });
}

// Inicializa o slider
loadShow();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    if (active < items.length - 1) {
        active++;
    } else {
        // Ativar loop opcional
        // active = 0;
    }
    loadShow();
};

prev.onclick = function () {
    if (active > 0) {
        active--;
    } else {
        // Ativar loop opcional
        // active = items.length - 1;
    }
    loadShow();
};

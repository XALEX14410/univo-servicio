        // Resto del código igual...
        const injectStyles = () => {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = './css/carrusel.css';
            document.head.appendChild(style);
        };
        document.querySelectorAll(".imagenCarrusel").forEach(img => {
            img.addEventListener("click", function() {
                const modalId = this.getAttribute("data-modal");
                if (modalId) {
                    document.getElementById(modalId).classList.add("active");
                }
            });
        });
    
        document.querySelectorAll(".btn-close-modal").forEach(btn => {
            btn.addEventListener("click", function() {
                this.closest(".modal-overlay").classList.remove("active");
            });
        });
    
        document.querySelectorAll(".modal-overlay").forEach(modal => {
            modal.addEventListener("click", function(event) {
                if (event.target === this) {
                    this.classList.remove("active");
                }
            });
        });
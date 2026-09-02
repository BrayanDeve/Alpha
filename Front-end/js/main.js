(function () {
    var navToggle = document.getElementById('nav-toggle');

    function closeMobileMenu() {
        if (navToggle) {
            navToggle.checked = false;
        }
    }

    // Faz o próprio scroll suave até a âncora (em vez de deixar o navegador
    // fazer isso sozinho): se o clique acontece antes das web fonts
    // carregarem, o reflow da troca de fonte interrompe a animação nativa
    // do navegador no meio do caminho.
    var hashLinks = document.querySelectorAll('a[href^="#"]');
    hashLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var targetId = link.getAttribute('href').slice(1);
            var target = targetId ? document.getElementById(targetId) : null;

            closeMobileMenu();

            if (!target) {
                return;
            }

            event.preventDefault();

            var scrollToTarget = function () {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };

            if (document.fonts && document.fonts.status !== 'loaded') {
                document.fonts.ready.then(scrollToTarget);
            } else {
                scrollToTarget();
            }
        });
    });

    var sections = document.querySelectorAll('main [id]');
    var menuItems = document.querySelectorAll('.main-menu .menu-item');
    var itemByHash = {};

    menuItems.forEach(function (item) {
        var link = item.querySelector('a[href^="#"]');
        if (link) {
            itemByHash[link.getAttribute('href').slice(1)] = item;
        }
    });

    if (!sections.length || !('IntersectionObserver' in window)) {
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }
            var activeItem = itemByHash[entry.target.id];
            if (!activeItem) {
                return;
            }
            menuItems.forEach(function (item) {
                item.classList.remove('selected-item');
            });
            activeItem.classList.add('selected-item');
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) {
        observer.observe(section);
    });
})();

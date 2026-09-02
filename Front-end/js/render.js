/*
 * Preenche o HTML com o conteúdo de SITE_DATA (js/data.js).
 * Roda antes do js/main.js (que cuida do menu/scroll), já com
 * a página inteira montada.
 */
(function () {
    var STAR_SVG = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.4L22 9.3l-5 4.6L18.2 21 12 17.3 5.8 21 7 13.9l-5-4.6 7.1-.9z"></path></svg>';

    var ICONS = {
        razor: '<rect x="4" y="10" width="16" height="4" rx="1"></rect><line x1="4" y1="12" x2="20" y2="12" stroke-dasharray="2 2"></line>',
        scissors: '<circle cx="6" cy="6" r="2.5"></circle><circle cx="6" cy="18" r="2.5"></circle><line x1="8.5" y1="7.5" x2="20" y2="19"></line><line x1="8.5" y1="16.5" x2="20" y2="5"></line>',
        comb: '<rect x="3" y="4" width="18" height="4" rx="1"></rect><line x1="5" y1="8" x2="5" y2="20"></line><line x1="9" y1="8" x2="9" y2="20"></line><line x1="13" y1="8" x2="13" y2="20"></line><line x1="17" y1="8" x2="17" y2="20"></line>',
        check: '<circle cx="12" cy="12" r="9"></circle><path d="M8 12l3 3 5-6"></path>',
        star: '<path d="M12 2l2.9 6.4L22 9.3l-5 4.6L18.2 21 12 17.3 5.8 21 7 13.9l-5-4.6 7.1-.9z"></path>'
    };

    function setHref(id, href) {
        var el = document.getElementById(id);
        if (el) {
            el.setAttribute("href", href);
        }
    }

    function setText(id, text) {
        var el = document.getElementById(id);
        if (el) {
            el.textContent = text;
        }
    }

    function renderServices() {
        var grid = document.getElementById("services-grid");
        if (!grid) {
            return;
        }
        grid.innerHTML = SITE_DATA.services.map(function (service) {
            return (
                '<article class="service-card">' +
                    '<div class="service-icon">' +
                        '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' + ICONS[service.icon] + '</svg>' +
                    '</div>' +
                    '<h3>' + service.name + '</h3>' +
                    '<p>' + service.description + '</p>' +
                    '<span class="price">' + service.price + '</span>' +
                    '<span class="duration">' + service.duration + '</span>' +
                '</article>'
            );
        }).join("");
    }

    function renderReviews() {
        var grid = document.getElementById("reviews-grid");
        if (!grid) {
            return;
        }
        grid.innerHTML = SITE_DATA.reviews.map(function (review) {
            var author = review.role
                ? review.author + ' <span>· ' + review.role + '</span>'
                : review.author;
            return (
                '<article class="review-card">' +
                    '<div class="review-stars">' + STAR_SVG.repeat(review.stars) + '</div>' +
                    '<p class="review-text">"' + review.text + '"</p>' +
                    '<p class="review-author">' + author + '</p>' +
                '</article>'
            );
        }).join("");
    }

    function renderPillList(id, items) {
        var list = document.getElementById(id);
        if (!list) {
            return;
        }
        list.innerHTML = items.map(function (item) {
            return '<li class="amenity-pill">' + item + '</li>';
        }).join("");
    }

    function renderContact() {
        setText("address-text-line1", SITE_DATA.address.line1);
        setText("address-text-line2", SITE_DATA.address.line2);
        setText("address-text-zip", SITE_DATA.address.zip);

        var hoursEl = document.getElementById("hours-text");
        if (hoursEl) {
            var lines = SITE_DATA.hours.map(function (entry) {
                return entry.days + ": " + entry.time;
            });
            lines.push(SITE_DATA.hoursNote);
            hoursEl.innerHTML = lines.join("<br>");
        }

        var phoneInfo = document.getElementById("phone-link-info");
        if (phoneInfo) {
            phoneInfo.setAttribute("href", SITE_DATA.phone.href);
            phoneInfo.textContent = SITE_DATA.phone.display;
        }
        setHref("phone-link-button", SITE_DATA.phone.href);

        setText("instagram-handle", SITE_DATA.instagram.handle);
        setHref("instagram-link-info", SITE_DATA.instagram.url);
        setHref("instagram-link-footer", SITE_DATA.instagram.url);

        setHref("booking-link-hero", SITE_DATA.bookingUrl);
        setHref("booking-link-contato", SITE_DATA.bookingUrl);

        var mapEl = document.getElementById("map-iframe");
        if (mapEl) {
            mapEl.setAttribute("src", "https://www.google.com/maps?cid=" + SITE_DATA.googleMapsCid + "&output=embed");
        }
        setHref("reviews-link", "https://www.google.com/maps?cid=" + SITE_DATA.googleMapsCid);

        setText("hero-rating-text", SITE_DATA.rating.score + " de avaliação dos clientes");
        setText("reviews-subtitle", SITE_DATA.rating.score + " de avaliação em " + SITE_DATA.rating.count + " avaliações no Google.");
    }

    renderServices();
    renderReviews();
    renderPillList("amenities-list", SITE_DATA.amenities);
    renderPillList("payment-pills-list", SITE_DATA.paymentMethods);
    renderContact();
})();

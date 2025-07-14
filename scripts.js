// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

/*SEARCH*/
function searchText() {
    const keyword = document.getElementById("search-input").value.trim();
    if (!keyword) return;

    // Hapus highlight sebelumnya (jika ada)
    const previousMarks = document.querySelectorAll("mark");
    previousMarks.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize();
    });

    // Cari dan highlight
    const elements = document.body.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el.children.length === 0 && el.innerText.toLowerCase().includes(keyword.toLowerCase())) {
            const regex = new RegExp(`(${keyword})`, "gi");
            el.innerHTML = el.innerHTML.replace(regex, '<mark>$1</mark>');
            el.scrollIntoView({ behavior: "smooth", block: "center" });

            // hapus highlight
            setTimeout(() => {
                const newMarks = el.querySelectorAll("mark");
                newMarks.forEach(mark => {
                    const parent = mark.parentNode;
                    parent.replaceChild(document.createTextNode(mark.textContent), mark);
                    parent.normalize();
                });
            }, 3000); // 3000 ms = 3 detik

            break; // Fokus ke hasil pertama 
        }
    }
}


/*POP UP PRODUK*/
document.addEventListener('DOMContentLoaded', function() {
    var popupElements = document.querySelectorAll('.produk-image');
    var closeElements = document.querySelectorAll('.popup-close');
    var popups = document.querySelectorAll('.popup');
    var overlay = document.getElementById('overlay');

    function showPopup(popupId) {
        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
    }

    function hidePopup() {
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
        overlay.style.display = 'none';
    }

    popupElements.forEach(function(element) {
        element.addEventListener('click', function() {
            var popupId = element.getAttribute('data-id');
            showPopup(popupId);
        });
    });

    closeElements.forEach(function(element) {
        element.addEventListener('click', function() {
            hidePopup();
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            hidePopup();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        var questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', function() {
            var isActive = item.classList.contains('active');
            
            faqItems.forEach(function(i) {
                i.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});



  
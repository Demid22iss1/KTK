document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll("nav ul li");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("mouseenter", function() {
            var submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        dropdown.addEventListener("mouseleave", function() {
            var submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});
const phoneElement = document.getElementById("phone");
    
    phoneElement.addEventListener("click", function() {
        const textToCopy = phoneElement.innerHTML;
        
        // Создаем временный элемент textarea для копирования текста
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        
        alert("Текст скопирован: " + textToCopy);
    });
    const myBlocksv = document.querySelectorAll('div.program');
    let isAnimsv = false;
    
    function animateMyBlockv(target, index) {
        isAnimsv = true;
        anime({
            targets: target,
            easing: 'easeOutElastic',
            opacity: [{value: 1, duration: 0}],
            translateY: ['700px', '0'],
            duration: 4000,
            delay: index * 500  // Задержка увеличивается для каждого блока
        });
    }
    
    function checkscrollv() {
        if (isAnimsv) return;
        
        myBlocksv.forEach((block, index) => {
            const restv = block.getBoundingClientRect();
            if (restv.top > 0 && restv.top < 2000) {
                animateMyBlockv(block, index);
            }
        });
    }
    
    window.addEventListener('scroll', checkscrollv);
    
    // anime({
    //     targets: '.benefit',
    //     translateX: 270,
    //     delay: anime.stagger(300, {easing: 'easeOutQuad'})
    //   });


    



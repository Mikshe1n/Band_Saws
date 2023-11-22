document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-section');

    function activateSection() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const offset = section.offsetTop - window.innerHeight / 2;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                removeAllActiveClasses();
                section.classList.add('active');
            }
        });
    }

    function removeAllActiveClasses() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    window.addEventListener('scroll', activateSection);

    // Call the function on page load to highlight the initial section
    activateSection();
});





document.getElementById('order-action').addEventListener('click', function () {
    validateForm();
});

function validateForm() {
    var pila = document.getElementById('pila').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    if (pila === '' || name === '' || phone === '') {
        alert('Пожалуйста, заполните все поля формы.');
        return false;
    }

    // Дополнительная валидация телефона (можно использовать регулярные выражения)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона.');
        return false;
    }

    // Если все поля заполнены и валидны, можно отправить форму на сервер или выполнить другие действия.
    alert('Ваш заказ успешно оформлен!');
    // Дополнительные действия, например, отправка данных на сервер
}

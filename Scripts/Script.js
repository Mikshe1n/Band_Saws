document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



let burger = document.getElementById("pila");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document .getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach (item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    })

    if (!hasError) {
        [burger, name, phone].forEach (item => {
           item.value = "";
        }); 
        alert ("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}
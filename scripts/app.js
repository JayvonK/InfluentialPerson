let home = document.getElementById("home");
let kobe = document.getElementById("kobe");
let accomplishments = document.getElementById("accomplishments");
let influence = document.getElementById("influence");

home.addEventListener('mouseenter', (event) => {
    home.className += " underline";
})
home.addEventListener('mouseleave', (event) => {
    home.className = " block py-2 px-3 text-white lg:text-5xl font-Clarendon lg:text-center text-3xl";
})

kobe.addEventListener('mouseenter', (event) => {
    kobe.className += " underline";
})
kobe.addEventListener('mouseleave', (event) => {
    kobe.className = " block py-2 px-3 text-white lg:text-5xl font-Clarendon lg:text-center text-3xl";
})

accomplishments.addEventListener('mouseenter', (event) => {
    accomplishments.className += " underline";
})
accomplishments.addEventListener('mouseleave', (event) => {
    accomplishments.className = " block py-2 px-3 text-white lg:text-5xl font-Clarendon lg:text-center text-3xl";
})

influence.addEventListener('mouseenter', (event) => {
    influence.className += " underline";
})
influence.addEventListener('mouseleave', (event) => {
    influence.className = " block py-2 px-3 text-white lg:text-5xl font-Clarendon lg:text-center text-3xl";
})
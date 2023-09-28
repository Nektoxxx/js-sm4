let blog_body = document.querySelector(".blog_body")
let blog = document.querySelector(".blog")
let news = document.querySelectorAll(".news")
let all = document.getElementsByTagName("*")
let title = document.querySelector(".title")

for (let index = 0; index < all.length; index++) {
    all[index].style.margin = '0'
    all[index].style.padding = '0'
    all[index].style.boxSizing = "border-box"
}

title.style.margin = '10px'

document.querySelector(".container").style.maxWidth = "1200px"
blog.style.display = "flex"
blog.style.justifyContent = "center"
blog.style.margin = "0"

blog_body.style.display = 'grid'
blog_body.style.justifyContent = "space-between"
blog_body.style.gridTemplateColumns = "1fr 1fr 1fr"

for (let index = 0; index < news.length; index++) {
    news[index].style.display = 'flex'
    news[index].style.flexDirection = 'column'
    news[index].style.gap = '10px'
}

let prise = Number(prompt("Введите цену"))
let cash = Number(prompt("Введите количество денег"))

let box = '1223123123'
if (cash == prise) {
    alert("Покупка совершена");
    box = '<div class="box">Покупка совершена</div>'
} else {
    if (cash > prise) {
        box = "<div class='box'>Покупка совершена. Сдача " + (cash - prise) + " р.</div>"
        alert("Покупка совершена. Сдача " + (cash - prise) + " р.");
    } else {
        box = "<div class='box'>Для покупки не хватает " + (prise - cash) + " р</div>"
        alert("Для покупки не хватает " + (prise - cash) + " р");
    }
}


let for_box = document.querySelector(".for_box")
for_box.innerHTML = box
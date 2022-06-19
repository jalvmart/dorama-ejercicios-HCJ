let mostrar = ""

fetch("/dramas.json")
    .then(r => r.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].genero.includes("Romance")) {
                mostrar += `<li>${data[i].drama} | año: ${data[i].year} | Genero: ${data[i].genero} </li>`
            }
        }
        document.getElementById("listaDrama").innerHTML = mostrar
    })












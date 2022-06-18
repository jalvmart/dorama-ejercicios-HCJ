let output = '';

fetch('/dramas.json')
    .then(r => r.json())
    .then(d => {
        output += `<caption>Mis Novelas Coreanas Favoritas</caption>`;
        output += `<tr>
                <th>Portada</th>
                <th>Drama</th>
                <th>Año</th>
                <th>Género</th>
                <th>Actores</th>
            </tr>`;
        for (let i = 0; i < d.length; i++) {
            console.log(d)
            output += `<tr>
                <td><img src=${d[i].imagenPortada} width="150" height="200"></td>
                <td>${d[i].drama}</td>
                <td>${d[i].year}</td>
                <td>${d[i].genero}</td>
                <td>${d[i].actores[0]+" | "+d[i].actores[1]}</td>
            </tr>`
        }
        document.getElementById("app").innerHTML = output
    })
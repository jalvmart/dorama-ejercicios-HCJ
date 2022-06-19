let crearMenu = '';

fetch('/menus/menuMain.json')
    .then(r => r.json())
    .then(d => {
        console.log("paso")
        
        for (let i = 0; i < d.length; i++) {
            crearMenu += `<li class="nav-item">
                    <a href="${d[i].ref}" class="nav-link">${d[i].titleMenu}</a>
                </li>`
        }
        
        document.getElementById("menuJS").innerHTML = crearMenu
    })


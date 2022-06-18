const jsonData = [
    {
        drama: "Recuerdos De La Alhambra",
        genero: "Fantasía, Comedia romántica",
        year: 2018,
        actores: ["Hyun Bin", "Park Shin-hye"],
        imagenPortada: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mCWxjdxQciTq32IOQgXXgc0dvmX.jpg",
        enlaceVideo: "https://pandrama.com/detalle/memorias-de-la-alhambra/"
    },
    {
        drama: "Goblin: El solitario ser inmortal",
        genero: "Comedia Drama Fantasía Rom&Com Romance",
        year: 2016,
        actores: ["Gong Yoo", "Kim Go-eun"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qZMEiTsNlCQV27hHQE27ZtlPWyv.jpg",
        enlaceVideo: "https://pandrama.com/detalle/goblin/"
    },
    {
        drama: "Malvado y loco",
        genero: "Acción y aventura Crimen Drama Fantasía Investigacion Misterio",
        year: 2021,
        actores: ["Lee Dong-wook", "Wi Ha-jun"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yqRl73PxWYZkLuug7UX8BgDkuyQ.jpg",
        enlaceVideo: "https://pandrama.com/detalle/bad-and-crazy-2021/"
    },
    {
        drama: "Aterrizaje de emergencia en tu corazón",
        genero: "Comedia Drama Guerra & Politica Militar Rom&Com Romance ",
        year: 2019,
        actores: ["Hyun Bin", "Son Ye-jin"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4qGJJR6RIEa6SDQ3jIMQk3AN9uv.jpg",
        enlaceVideo: "https://pandrama.com/detalle/aterrizaje-de-emergencia-en-tu-corazon-l/"

    },
    {
        drama: "Start-up",
        genero: "Comedia Drama Rom&Com Romance",
        year: 2020,
        actores: ["Bae Suzy", "Nam Joo-hyuk"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hq55ekoWj3zHfBM8RoyxYcw64l3.jpg",
        enlaceVideo: "https://pandrama.com/detalle/start-up-audio-latino/"
    },
    {
        drama: "Mientras dormías",
        genero: "Crimen Legal Periodismo Rom&Com Romance ",
        year: 2017,
        actores: ["Bae Suzy", "Jung Hae-in"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vtyzRkxPl3Y6bC5DgUDZ1sLb8Fs.jpg",
        enlaceVideo: "https://pandrama.com/detalle/mientras-dormias/"
    },
    {
        drama: "El Amor es un Capítulo Aparte",
        genero: "Comedia Drama Rom&Com Romance",
        year: 2019,
        actores: ["Lee Jong-suk", "Lee Na-young "],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bVB0SVTNeYJgg4XTXZVrheJZCA3.jpg",
        enlaceVideo: "https://pandrama.com/detalle/el-amor-es-un-capitulo-aparte/"
    },
    {
        drama: "Está bien no estar bien",
        genero: "Comedia Drama Misterio Romance",
        year: 2020,
        actores: ["Kim Soo-hyun", "Seo Yea-ji"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1uBz58vwQymBfDZuLHwHe4dsOOM.jpg",
        enlaceVideo: "https://pandrama.com/detalle/esta-bien-no-estar-bien-audio-latino/"
    },
    {
        drama: "Itaewon Class",
        genero: "Crimen Drama Misterio Romance",
        year: 2020,
        actores: ["Park Seo-joon", "Kim Da-mi"],
        imagenPortada: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/48mmYEnz61rnvMVXhqcdcgmo68p.jpg",
        enlaceVideo: "https://pandrama.com/detalle/clase-itaweon/"
    },
    {
        drama: "Flor del mal",
        genero: "Crimen Drama Misterio Romance Suspenso",
        year: 2020,
        actores: ["Lee Joon-gi", "Moon Chae-won"],
        imagenPortada: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/h4GrN8XJLRBqxJPyx46rYs4olmn.jpg",
        enlaceVideo: "https://pandrama.com/detalle/flor-del-mal/"
    }
]

const e = document.getElementById('json');
e.innerHTML = JSON.stringify(jsonData);

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload() {
    download(JSON.stringify(jsonData), "top10DramasCoreadelSur.json", "text/plain");
}

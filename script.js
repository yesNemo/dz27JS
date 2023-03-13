let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
// const firstDiv = document.createElement('main');
const wrapperOne = document.createElement('div');
const mainList = document.querySelector('.dz1');

// wrapperOne.classList.add('firstDiv')
function music(item) {
    let songWrapper = document.createElement('div');
    let name = document.createElement('h2');
    let songName = document.createElement('p');
    name.textContent = item.author;
    songName.textContent = item.song;
    songWrapper.append(name, songName);
    return songWrapper;
}

for (const key in playList) {
    const items = playList[key];
    mainList.append(music(items));
}
document.body.append(mainList);
// __NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2__NUMBER__2
const body =document.querySelector("body")
const dz2 = document.querySelector('.dz2')
const buttonOpen = document.querySelector('#openButton')
const buttonClosed = document.querySelector('#closeButton')
const windowHero = document.querySelector('.superWindow')
const elemHTML = `
    <p>Lorem ipsum dolor sit amet, consectetur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, officiis.</p>
    `;
windowHero.insertAdjacentHTML('afterbegin', elemHTML)

buttonOpen.addEventListener("click", function () {
    windowHero.style.display = "block";
});
buttonClosed.addEventListener('click', function () {
    windowHero.style.display = "none";
});
windowHero.append(buttonClosed)
dz2.append(windowHero)
dz2.append(buttonOpen)
body.append(dz2)
// NUMBER__3__NUMBER__3__NUMBER__3__NUMBER__3__NUMBER__3__NUMBER__3__NUMBER__3__NUMBER__3__NUMBER__3__
const dz3 = document.querySelector('.dz3')
const redColor = document.querySelector("#red")
const yellowColor = document.querySelector("#yellow")
const greenColor = document.querySelector("#green")
const btnClick = document.querySelector("#buttonColor")
let i = 0;

function changeColors() {
    if (i == 1) {
        redColor.style.backgroundColor = 'red';
        greenColor.style.backgroundColor = 'black';
        console.log("1")

    } else if (i == 2) {
        redColor.style.backgroundColor = 'black';
        yellowColor.style.backgroundColor = 'yellow';
        console.log("2")
    } else if (i == 3) {
        yellowColor.style.backgroundColor = 'black';
        greenColor.style.backgroundColor = 'green';
        console.log("3")
        i = 0;
    }
}
btnClick.addEventListener('click', function () {
    i++;
    changeColors();
})
body.append(dz3)

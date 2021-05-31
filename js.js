function Game(name,icon,link,author) {
    this.name = name;
    this.icon = icon;
    this.link = link;
    this.author = author;
    this.getHtml = function(){
        let _img = "<div id='khung'><img src=images/"+this.icon+" alt="+this.name+"></div>";
        let _name = "<div class='name name-container'>"+this.name+"</div>"
        let _play = "<div class='btn-highlight btn-block'>Try it</div>"
        let _link = "https://"+this.link+".netlify.com/";
        let gameHtml = '<a href='+ _link +" >"+_img+_name+_play+"</a>";
        return gameHtml;
    }
}

function GameBoard(){
    CreateList();
    getData(c0719k1);
}
let listgame = document.createElement("ul");
function CreateList(){

    listgame.classList.add("games");
    listgame.classList.add("games-special");
    document.getElementById('list-games').appendChild(listgame);
}

function getData(datas){
    resetList();
    let data = JSON.parse(datas);
    for (let i = 0;i<data.games.length;i++){
        let temp = data.games[i];
        let obj = new Game(temp.name,temp.icon,temp.link,temp.author);
        addGame(obj.getHtml());
    }
}

function addGame(game) {
    let li = document.createElement("li");
    li.innerHTML = game;
    listgame.appendChild(li);
}

function resetList() {
    let list = document.querySelectorAll('.games li');
    console.log(list);
    for(let i = 0;i<list.length;i++){
        list[i].parentNode.removeChild(list[i]);
    }
}

GameBoard();
// ！topの画像が自動で切り替わる！
const container = document.getElementById('story_image');
let myIndex = 0; //変数に０を入れる

//関数sliderを作成・・・
function slider() {

    let el;
    const x = document.getElementsByClassName("Slides");

    //繰り返し処理
    for (let i = 0; i < x.length; i++) { 　//初期値：iは０、条件式：iがスライド全枚数未満の時、増減値：iに１を足す
        x[i].style.opacity = "0"; 　//配列　i　番目の時、スライド画像を透明にする
    }

    myIndex++; 　//繰り返しが終了したら、myIndexに１を足す

    //条件分岐
    if (myIndex > x.length) {  //条件：myIndexがスライド全枚数未満ならば、
      myIndex = 1     //myIndexに１を入れる
    }

    el = x[myIndex - 1]; 　//elに　配列myIndex - 1　番目のスライドを入れる
    container.style.height = el.height + 'px';  //スライドを入れてるdiv(container)の高さと、スライド画像の高さを同じにする
    setTimeout(function() { 　//一定時間後に特定の処理を行う
        el.style.opacity = "1"; 　//スライド画像を不透明にする
        setTimeout(slider, 5000); 　//一定時間後に特定の処理を行う：slider関数を5秒後に呼び出す
    },250); 　//短いと無表示の時間が短い
}

//関数sliderを実行
slider();


//お気に入りマークをクリックすると塗り潰しになる ※もっと省略できるはず・・・
const images = ['img/お気に入り.png','img/星アイコン.png'];
let num = 0;

function starChange(){
    if(num === 1){
        num = 0;
    }else{
        num++;
    }
    stars[this.num].src = images[num];
};

const stars = document.getElementsByClassName('star');
for(let i = 0; i <stars.length; i++){
    stars[i].addEventListener("click", {
        num: i,
        handleEvent: starChange
    });
};


// カラーをクリックするとメイン画像が変わる
// アイシャドウ
// チーク
// リップ
function addClkProduct() {
    const colors = document.getElementsByClassName('item');

    for (let color of colors) {
        const targetFor = color.dataset.for;
        const target = document.getElementById(targetFor);
        color.addEventListener("click", {
            target: target,
            img: color.getAttribute("src"),
            handleEvent: changeProductImage
        });
    }

    function changeProductImage() {
        this.target.src = this.img;
    }

}

addClkProduct();


// ハンバーガーメニューの動き
function hamburger() {
    　　document.getElementById('line1').classList.toggle('linea');
    　　document.getElementById('line2').classList.toggle('lineb');
    　　document.getElementById('line3').classList.toggle('linec');
    　　document.getElementById('target').classList.toggle('slidex');
    　　document.getElementById('nav_f').classList.toggle('fadein');
    }

    document.getElementById('target').addEventListener('click', function () {
    　　hamburger();
    });

    let list = document.getElementsByClassName('list');

    for (let i = 0; i < list.length; i++) {
    　　list[i].addEventListener('click', function () {
    　　　　hamburger();
        });
    }
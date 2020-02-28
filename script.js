// // JS練習
// // ①値の取得とは
// console.log(document);　//HTML要素全て取得　出力
// console.log(document.head);　//任意のHTML要素を取得　出力
// console.log(document.body);　//任意のHTML要素を取得　出力

// //②HTML要素の書き換え　Idでの取得
// var id = document.getElementById('comment');　//指定したID属性を持つHTML要素を取得・変数idに入れる

// id.textContent = 'ORANGEはあなたの毎日を鮮やかにします';　//h1テキストを書き換え

// console.log(id);　//出力

// //③任意のHTML要素をJavaScriptから生成
// var p = document.createElement('p'); //pタグを作成

// p.textContent = 'ORANGE';

// document.body.appendChild(p);　//body内に追加

// console.log(document.body);

// //④文字列の出力
// document.write('こんにちは');　

// //⑤HTML内のすべての要素を取得
// var elements = document.getElementsByTagName('*');
 
// console.log(elements);



// ！topの画像が自動で切り替わる！
var container = document.getElementsByClassName('story_image')[0]; 
var myIndex = 0; //変数に０を入れる

//関数sliderを作成・・・
function slider() { 
    var i = null;
    var el = null;
    var x = document.getElementsByClassName("Slides"); 
    
    //繰り返し処理
    for (i = 0; i < x.length; i++) { 　//初期値：iは０、条件式：iがスライド全枚数未満の時、増減値：iに１を足す
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


// // ！topの画像が自動で切り替わる！
// var sliderImages = ["img/top1.jpg","img/top2.jpg"]; //配列を作成  右記でも可：var sliderImages = new Array("img/top1.jpg","img/top2.jpg");
// var current = 0; //変数に０を入れる
// 
// //関数sliderを作成・・・配列が１だったら０に戻す（今回は１が最大の為）、１以外だったらその値に１を足す
// function slider(){
//     if(current === 1){
//         current = 0;
//     }else {
//         current++;
//     }
//     document.getElementById('slide').src = sliderImages[current]; //該当の戻り値numが入ったsliderImagesを ID slideに表示する
//     setTimeout('slider()',5000); 　//画像を表示した3秒後に関数sliderを実行
// };
// 
// //関数sliderを実行
// slider();



// // ！CONCEPTの画像が自動で切り替わる！
// var photo = ["img/orenge1.jpg","img/orenge2.jpg"]; //配列を作成  右記でも可：var photo = new Array("img/orenge1.jpg","img/orenge2.jpg");
// var num = 0;　//変数に０を入れる
// 
// //関数photochangeを作成・・・配列が１だったら０に戻す（今回は１が最大の為）、１以外だったらその値に１を足す
// function photochange(){
//     if(num === 1){
//         num = 0;
//     }else {
//         num++;
//     }
//     document.getElementById('orange').src = photo[num]; //該当の戻り値numが入ったphotoを ID orangeに表示する
//     setTimeout('photochange()',3000); 　//画像を表示した3秒後に関数photochangeを実行
// };
// 
// //関数photochangeを実行
// photochange();


//お気に入りマークをクリックすると塗り潰しになる ※もっと省略できるはず・・・
var images = ['img/お気に入り.png','img/星アイコン.png'];
var num = 0;

var stars = document.getElementsByClassName('star');
    for(var i = 0; i <stars.length; i++){
        console.log(stars[i])
    };

    function starChange1(){
        if(num === 1){
            num = 0;
        }else{
            num++;
        }
        stars[0].src = images[num];
    };

    stars[0].onclick = starChange1;

    function starChange2(){
        if(num === 1){
            num = 0;
        }else{
            num++;
        }
        stars[1].src = images[num];
    };

    stars[1].onclick = starChange2;

    function starChange3(){
        if(num === 1){
            num = 0;
        }else{
            num++;
        }
        stars[2].src = images[num];
    };

    stars[2].onclick = starChange3;


// カラーをクリックするとメイン画像が変わる
// アイシャドウ
var colors = document.getElementsByClassName('item');
var target = document.getElementById('img');

    colors[0].onclick = function(){
        target.src = 'img/eyeshadow.jpg';
    };

    colors[1].onclick = function(){
        target.src = 'img/eye1.png';
    };

    colors[2].onclick = function(){
        target.src = 'img/eye3.png';
    };

    colors[3].onclick = function(){
        target.src = 'img/eye3.png';
    };

    colors[4].onclick = function(){
        target.src = 'img/eye4.png';
    };

    colors[5].onclick = function(){
        target.src = 'img/eye5.png';
    };

// console.log(document.getElementsByClassName('item')[0]);
// console.log(document.getElementsByClassName('item')[1]);
// console.log(document.getElementsByClassName('item')[2]);
// console.log(document.getElementsByClassName('item')[3]);
// console.log(document.getElementsByClassName('item')[4]);

// console.log(document.getElementById('img'));


// チーク
var colors2 = document.getElementsByClassName('item2');
var target2 = document.getElementById('img2');

    colors2[0].onclick = function(){
        target2.src = 'img/cheeks.jpg';
    };

    colors2[1].onclick = function(){
        target2.src = 'img/color2.jpg';
    };

    colors2[2].onclick = function(){
        target2.src = 'img/color.jpg';
    };

    colors2[3].onclick = function(){
        target2.src = 'img/color3.jpg';
    };

    colors2[4].onclick = function(){
        target2.src = 'img/color2.jpg';
    };

// リップ
var colors3 = document.getElementsByClassName('item3');
var target3 = document.getElementById('img3');

    colors3[0].onclick = function(){
        target3.src = "img/lips.jpg";
    };

    colors3[1].onclick = function(){
        target3.src = 'img/color6.jpg';
    };

    colors3[2].onclick = function(){
        target3.src = 'img/color2.jpg';
    };

    colors3[3].onclick = function(){
        target3.src = 'img/color3.jpg';
    };

    colors3[4].onclick = function(){
        target3.src = 'img/color.jpg';
    };

    colors3[5].onclick = function(){
        target3.src = 'img/color7.jpg';
    };


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
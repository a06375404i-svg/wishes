const photos=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"
];

let index=0;

setInterval(function(){

index++;

if(index>=photos.length)

index=0;

document.getElementById("slide").src=photos[index];

},2500);

function playMusic(){

document.getElementById("music").play();

}

function surprise(){

document.getElementById("message").innerHTML=

`❤️

You are one of the most wonderful people in my life.

Thank you for your kindness,

your smile,

your support,

and all the beautiful memories.

I wish this birthday brings you endless happiness,

good health,

success,

and lots of love.

Happy Birthday ❤️🎂

`;

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️...";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,400);

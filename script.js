var arr = [
    './static/1.mp4',
    './static/2.mp4',
    './static/3.mp4',
    './static/4.mp4',
    './static/5.mp4'
]

let fast_forward = document.querySelector('#speed')
let main = document.querySelector('.main')
let control1 = document.querySelector('#control1')
let src = document.querySelector('#jii')
console.log(src.src.split('/'));


const Playlist=()=>{
    var temp = ''
    arr.forEach(function(i,index){
            temp+=`<div class="sidevideo" onClick=clickHandler("${i}") loop>
                <video width="320" height="240" id="sideV">
                    <source src="${i}" type="video/mp4">
                </video>
            </div>`
    document.querySelector('.left').innerHTML=temp
    })
}

Playlist()

const clickHandler=(i)=>{
    console.log(i);
    temp=`<div class="mainvideo">
                <video width="320" height="240"  class="main">
                    <source src=${i} type="video/mp4" id="jii">
                </video>
            </div>
            <h3>${i.slice(9,i.length-4)}</h3>
            <div class="controls">
                <button onclick="func1()"><i class="ri-play-fill" id="control1"></i></button>
                <button onclick="func2()"><i class="ri-speed-fill" id="speed"></i></button>
            </div>`

    document.querySelector('.right').innerHTML=temp
    main = document.querySelector('.main')
    control1 = document.querySelector('#control1')
    fast_forward = document.querySelector('#speed')
    control1.className='ri-play-fill'
}

function func1(){
    if(main.paused){
        // console.log(main.paused)
        main.play();
        control1.className='ri-pause-fill'
    }
    else{
        // console.log(main.play)
        main.pause()
        control1.className='ri-play-fill'
    }
}

function func2(){
    main.playbackRate = main.playbackRate*1.5
}
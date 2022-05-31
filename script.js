let nav =  document.querySelector('.nav')
let ab = document.querySelector('.colorAbout')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        nav.classList.add('nav2')
    }
    else{
        nav.classList.remove('nav2')
       
    }
})



gsap.from('.ul li',{ opacity:0, x:20, duration:1.5,  stagger:0.5 })

gsap.from('#discovery',{ opacity:0, x:20, duration:1.5,  scale:0.5, rotate: 90})

gsap.from('#touchè',{ opacity:0, duration:2,  scale:0.5,})


//type
let all = document.querySelector('.all');
let breakfast = document.querySelector('.brekfast');
let launch = document.querySelector('.launch');
let dinner = document.querySelector('.dinnere');



let i1 = document.querySelector('.im1');
let i2 = document.querySelector('.im2');
let i3 = document.querySelector('.im3');
let i4 = document.querySelector('.im4');
let i5 = document.querySelector('.im5');
let i6 = document.querySelector('.im6');
let i7 = document.querySelector('.im7');
let i8 = document.querySelector('.im8');
let i9 = document.querySelector('.im9');
let i10 = document.querySelector('.im10');
let i11 = document.querySelector('.im11');
let i12 = document.querySelector('.im12');


//btn
all.addEventListener('click', () => {
    all.classList.remove('btALL')
i1.classList.add('i');
i2.classList.add('i');
i3.classList.add('i');
i4.classList.add('i');
i5.classList.add('i');
i6.classList.add('i');
i7.classList.add('i');
i8.classList.add('i');
i9.classList.add('i');
i10.classList.add('i');
i11.classList.add('i');
i12.classList.add('i');

})






let ul = document.querySelector('.ul');
let mobile = document.querySelector('.mobile');

mobile.addEventListener('click', () => {
ul.classList.toggle('ulMobile')

})



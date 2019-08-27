fortuneBank = [
    "จงซื่อสัตย์กับแฟนตัวเอง แล้วจงครื้นเครงกับแฟนคนอื่น",
    "อะไรเอ่ยคุยกันทุกคืน แต่ไม่ได้เป็นอะไรกัน อ่อ พี่น้อง",
    "ไก่งามเพราะขน คนงามเพราะแอพ",
    "สี่ตีนเดินมาเป็นหมาไม่ใช่คน",
    "บางคนโสด ตอนโกรธกับผัว",
    "น้ำร้อนปลาเป็น น้ำเย็นอยู่ในตู้",
    "แพ้เป็นพระ ชนะเป็นเจ้าอาวาส",
    "พี่ไม่ใช่คนหื่น แค่แตกตื่นกับเพศตรงข้าม",
    "กำขี้ ดีกว่ากำตด กำขี้สด กำตดดีกว่า",
    "ดูวัวให้ดูหาง ดูนางให้ดูแม่ แต่จะดูให้แน่ๆ ขอดูเพศในสูติบัตรด้วย"
]

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function() {
        getFortune();
    }, 3000);
}

function play2(){
    cookie2.classList.remove("cookie-hide");
    cookie2.classList.remove("cookie-show");
    fortune.style.opacity = 0;
    setTimeout(() => {
        cookie2.classList.add("cookie-hide");
        cookie2.classList.add("cookie-show");
    }, 10);
    setTimeout(function() {
        getFortune();
    }, 3000);
}


function getFortune(){
    rand = Math.floor(Math.random()*fortuneBank.length);
    fortune.innerText = fortuneBank[rand];
fortune.style.opacity = 1;
fortune.style.top = "96px";
}
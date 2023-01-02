setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    const hh =document.getElementById('hh')
    const mm =document.getElementById('mm')
    const ss =document.getElementById('ss')

    const hr_dot = document.querySelector('.hr_dot')
    const min_dot = document.querySelector('.min_dot')
    const sec_dot = document.querySelector('.sec_dot')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ?'PM' : 'AM' ;

    if(h > 12){
        h = h - 12;
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

        /// 12 hours
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    
        /// 60 minutes
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        /// 60 seconds
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
        /// 360 / 12 = 30
    hr_dot.style.transform = 'rotate( ${h * 30}deg)'
    min_dot.style.transform = 'rotate( ${m * 6}deg)'
        /// 360 / 60 = 6

    sec_dot.style.transform = 'rotate( ${s * 6s}deg)'
        /// 360 / 60 = 6



})


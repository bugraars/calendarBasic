const monthTitle = document.querySelector("#month-title");
const calendarBody = document.querySelector("#calendar-body");
const prevMonthBtn=document.querySelector("#month-prev");
const nextMonthBtn=document.querySelector("#month-next");
let date = new Date();//Bugünün tarihini alıyoruz.
eventListeners();

function eventListeners(){ 
    document.addEventListener("DOMContentLoaded",thisMonth); 
    prevMonthBtn.addEventListener("click",prevMonth(date)); 
    nextMonthBtn.addEventListener("click",nextMonth(date)); 
}
function thisMonth(){//Bulunulan Ay
    calcCalendar(date);
}
function prevMonth(){//Geçmiş Ay
    date.setFullYear(date.getFullYear(), date.getMonth()-1,date.getDate());
    calcCalendar(date);
}
function nextMonth(){//Gelecek Ay
    date.setFullYear(date.getFullYear(), date.getMonth()+1,date.getDate());
    calcCalendar(date);
}

//--------------------------------------------------------------------------Takvim hesaplama fonksiyonu
function calcCalendar(date){ 
let prevMonthsLast= new Date(date.getFullYear(), date.getMonth(), 0);
let prevMonthsDayCounter = prevMonthsLast.getDay();
// console.log(prevMonthsDayCounter);
// console.log(prevMonthsLast.getDate()-prevMonthsDayCounter);

let monthsLast= new Date(date.getFullYear(), date.getMonth()+1, 0);
let monthsDayCounter = monthsLast.getDate();

let bodyDates="";
//Önceki aydan bu ayın takvimine giren kısımı ekler;
for(let y=(prevMonthsLast.getDate()-prevMonthsDayCounter); y<prevMonthsLast.getDate(); y++){
        bodyDates += `<button class="pMonth">${y+1}</button>`;
        calendarBody.innerHTML= bodyDates;
}
//Bulunulan ayın tüm günlerini ekler;
for(let i=1; i<=monthsDayCounter; i++){
    if(i==date.getDate()){
        bodyDates += `<button class="tMonth today">${i}</button>`;
    }
    else{bodyDates += `<button class="tMonth">${i}</button>`;}
    calendarBody.innerHTML= bodyDates;
}
//Sonraki aydan bu ayın takvimine giren kısımı ekler;
/*Şu ana kadar ürettiğimiz div sayısını bulduk.
bizim 6 satır 7 sutun olacağından 42 divimiz olacak diğer aydan
42 ye kadar olan günleri ekleyeceğiz takvime*/
let remainderDates=42-(calendarBody.children.length);

/*Doğrudan döngü içine alsaydık döngü her tamamlanışında yeni
çocuklar ekleyecek ve ilk başta 13 olan sayı 11-9-7-5-3-1 atlayarak
düşecek ve 42 ye tamamlanmayacaktı.  */
for(let i=1; i<=remainderDates; i++){
    bodyDates += `<button class="nMonth">${i}</button>`;
    calendarBody.innerHTML= bodyDates;
}
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
//Üst kısımdaki ay ve yıl başlığı;
monthTitle.innerHTML = `<h3>${MONTHS[date.getMonth()]} 
${date.getFullYear()}<h3>`
}
//--------------------------------------------------------------------------Takvim hesaplama fonksiyonu


function test(){
    console.log("tıklandı");
}
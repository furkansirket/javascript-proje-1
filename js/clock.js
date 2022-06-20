

let Name = prompt("isminizi giriniz...")

let myName =document.querySelector("#myName")
myName.innerHTML =(Name)

function showTime() {
    let myClock =document.querySelector("#myClock")
    let tarih= new Date();
    let saat=tarih.getHours();
    let dakika=tarih.getMinutes();
    let saniye=tarih.getSeconds();
    let gun=tarih.getDay();

    if(gun==0){
        gun = "Pazar"
    }else if(gun==1){
        gun= "Pazartesi"
    }else if(gun==2){
        gun= "Sali"
    }else if(gun==3){
        gun = "Carsamba"
    }else if(gun==4){
        gun = "Persembe"
    }else if(gun==5){
        gun= "Cuma"
    }else if(gun==6){
        gun =="Cumatesi"
    }
    myClock.innerHTML= `${saat}:${dakika}:${saniye} ${gun}`
}
showTime();
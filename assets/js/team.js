function detail(clicked_id){
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const asal = document.getElementById("asal");
    if (clicked_id == 5){
        img.innerHTML =  `<img class="team2" src="./assets/img/kadri.jpg" alt="">`;
        name.innerHTML =  `Pak Kadri`;
        asal.innerHTML = `Banda Aceh`;
    }else if(clicked_id == 4){
        img.innerHTML =  `<img class="team2" src="./assets/img/IMG_0337.jpg" alt="">`;
        name.innerHTML =  `Muhibbur`;
        asal.innerHTML = `Surabaya`;
    }else if(clicked_id == 3){
        img.innerHTML =  `<img class="team2" src="./assets/img/hikmahh.jpg" alt="">`;
        name.innerHTML =  `Nurhikmah`;
        asal.innerHTML = `Makassar`;
    }else if(clicked_id == 2){
        img.innerHTML =  `<img class="team2" src="./assets/img/syam.jpg" alt="">`;
        name.innerHTML =  `Muhammad Syam Firdaus`;
        asal.innerHTML = `Purwakarta`;
    }
    else if(clicked_id == 1){
        img.innerHTML =  `<img class="team2" src="./assets/img/mis.jpg" alt="">`;
        name.innerHTML =  `Nidya`;
        asal.innerHTML = `-`;
    }
}



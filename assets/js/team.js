function detail(clicked_id){
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const asal = document.getElementById("asal");
    if (clicked_id == 5){
        img.innerHTML =  `<img class="team2" src="./assets/img/kadri.jpg" alt="">`;
        name.innerHTML =  `Muhammad Kadri`;
        asal.innerHTML = `Banda Aceh`;
    }else if(clicked_id == 4){
        img.innerHTML =  `<img class="team2" src="./assets/img/IMG_0337.png" alt="muhibbur">`;
        name.innerHTML =  `Muhibbur`;
        asal.innerHTML = `Surabaya`;
    }else if(clicked_id == 3){
        img.innerHTML =  `<img class="team2" src="./assets/img/hikmahh.png" alt="nurhikmah">`;
        name.innerHTML =  `Nurhikmah`;
        asal.innerHTML = `Makassar`;
    }else if(clicked_id == 2){
        img.innerHTML =  `<img class="team2" src="./assets/img/syam.jpg" alt="">`;
        name.innerHTML =  `Muhammad Syam Firdaus`;
        asal.innerHTML = `Purwakarta`;
    }
    else if(clicked_id == 1){
        img.innerHTML =  `<img class="team2" src="./assets/img/nidya.png" alt="">`;
        name.innerHTML =  `Nidya`;
        asal.innerHTML = `Samarinda`;
    }
}



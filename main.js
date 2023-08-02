import "./assets/scss/all.scss";

import store1URL from "./assets/image/store-1.png";
import store2URL from "./assets/image/store-2.png";
import store3URL from "./assets/image/store-3.png";
import store4URL from "./assets/image/store-4.png";
import store5URL from "./assets/image/store-5.png";

/* DATA ==================================*/
const storeList = [
  {
    store: "台北中山旗艦店",
    phone: "電話：(02)000-1234",
    hours: "營業時間：10:00-21:00",
    address: "地址：台北市中山區南京東路25巷2-1號",
    photo: store1URL,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4636138459286!2d121.53300454855906!3d25.0522709805177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdf92494d29%3A0xd908a8a881f73476!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuInmrrUyNeiZnw!5e0!3m2!1szh-TW!2stw!4v1689689324255!5m2!1szh-TW!2stw",
  },
  {
    store: "台北綠園店",
    phone: "電話：(02)000-2345",
    hours: "營業時間：10:00-21:00",
    address: "地址：台北市中正區復興南路 132-1 號",
    photo: store2URL,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.615088930526!2d121.54113651123167!3d25.047133437669444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdbf61946df%3A0x3c99fa1b2467da21!2z5b6p6IiI5Y2X6Lev!5e0!3m2!1szh-TW!2stw!4v1689738423666!5m2!1szh-TW!2stw",
  },
  {
    store: "台中清水旗艦店",
    phone: "電話：(02)000-1234",
    hours: "營業時間：10:00-21:00",
    address: "地址：台中市清水區經南一路 23 號 8 樓",
    photo: store3URL,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2078.585536393451!2d120.70044460975465!3d24.21803310729417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917660c1fff99%3A0xd921b3953d98ae27!2zNDI35Y-w5Lit5biC5r2t5a2Q5Y2A5Y2X5LiA6Lev!5e0!3m2!1szh-TW!2stw!4v1689738558821!5m2!1szh-TW!2stw",
  },
  {
    store: "高雄中正形象店",
    phone: "電話：(07)000-2345",
    hours: "營業時間：10:00-21:00",
    address: "地址：高雄市苓雅區中正路 38 號 12 樓",
    photo: store4URL,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.7639136856073!2d120.338210411173!3d22.62528963095086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04b492b36c93%3A0xde28107e320c1921!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A5Lit5q2j5LiA6LevMzjomZ8!5e0!3m2!1szh-TW!2stw!4v1689751386260!5m2!1szh-TW!2stw",
  },
  {
    store: "高雄夢時代店",
    phone: "電話：(07)000-1234",
    hours: "營業時間：10:00-21:00",
    address: "地址：高雄市前鎮區中華一路 63 號 6 樓",
    photo: store5URL,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.641781355878!2d120.287666411174!3d22.667140829412258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05aebd7519bb%3A0x53dcd3769d59162d!2zODA06auY6ZuE5biC6byT5bGx5Y2A5Lit6I-v5LiA6LevNjPomZ8!5e0!3m2!1szh-TW!2stw!4v1689738723761!5m2!1szh-TW!2stw",
  },
];

/* STORE LOCATION LIST ==================================*/
const locations = document.querySelectorAll("#locationDropdown");
let locationContent = document.getElementById("locationContent");

locations.forEach((location) => {
  location.addEventListener("change", (e) => {
    const clickedLocation = e.target.value;
    let locationText = "";

    // 點選「請選擇地區」
    if (clickedLocation === "") {
      storeList.forEach((item) => {
        locationText += getLocationCard(item);
      });
    } else {
      // 點選「城市」
      storeList.forEach((item) => {
        const storeCity = item.address.slice(3, 6);

        if (storeCity === clickedLocation) {
          locationText += getLocationCard(item);
        }
      });
    }
    locationContent.innerHTML = locationText;
  });
});

// 獲得套用卡片 html 後的新資料
function getLocationCard(item) {
  console.log(item.photo);
  return `<div class="location-card">
<img class="location-photo" src="${item.photo}" alt="${item.store}">
<p class="location-title fz-24">${item.store}</p>
<ul class="location-detail fz-20">
<li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
    phone
</span>
<p>${item.phone}</p>
</li>
<li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
    schedule
</span>
<p>${item.hours}</p>
</li>
<li class="d-flex f-aib"><span class="material-icons-outlined">
    place
</span>
<p>${item.address}</p>
</li>
</ul>
<a href="store-台北中山旗艦店.html" class="btn-store ta-center d-block bg-black fc-white" type="button">詳細資訊</a>
</div>`;
}

/* STORE ==================================*/
const stores = document.querySelectorAll("#storeDropdown"); //不能綁在 option 上
const storePhoto = document.getElementById("storePhoto");
const storeTitle = document.getElementById("storeTitle");
const storePhone = document.getElementById("storePhone");
const storeHours = document.getElementById("storeHours");
const storeAddress = document.getElementById("storeAddress");
const mapLocation = document.querySelector("iframe");

stores.forEach((store) => {
  store.addEventListener("change", (e) => {
    const clickedStore = e.target.value;

    storeList.forEach((item) => {
      console.log(item.photo);
      if (clickedStore === item.store) {
        storePhoto.style.backgroundImage = `url(${item.photo})`;
        storeTitle.textContent = item.store;
        storePhone.textContent = item.phone;
        storeHours.textContent = item.hours;
        storeAddress.textContent = item.address;
        mapLocation.setAttribute("src", `${item.map}`);
      }
    });
  });
});

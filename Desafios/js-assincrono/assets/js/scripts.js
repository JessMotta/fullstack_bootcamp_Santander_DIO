const BASE_URL = "https://thatcopy.pw/catapi/rest/";
// let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',  "Access-Control-Allow-Methods": "OPTIONS,POST,GET"});

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    // console.log(json.)
  } catch (e) {
    console.log(e.message);
  }
};

const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  img.src = await getCats();
};

// loadImg();

const btn = document.getElementById("change-cat");
btn.addEventListener("click", loadImg);

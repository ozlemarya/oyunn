function moveRabbit() {
  let rabbitElement = document.getElementById("rabbit");
  let contentContainer = document.getElementById("boxs");

  let containerWidth = contentContainer.offsetWidth;
  let containerHeight = contentContainer.offsetHeight;

  let rabbitWidth = rabbitElement.offsetWidth;
  let rabbitHeight = rabbitElement.offsetHeight;

  let maxX = containerWidth - rabbitWidth;
  let maxY = containerHeight - rabbitHeight;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  rabbitElement.style.left = randomX + "px";
  rabbitElement.style.top = randomY + "px";
  rabbitElement.style.position = "absolute";

  setTimeout(function () {
    window.location.href = "new.html";
  }, 1000);

}

let rabbit = document.getElementById('rabbit');

let quotes = [
  "Hayatın anlamını bulmak, hayatta kalmak için gerekli değildir. - Osho",
  "Düşüncelerimiz dünyamızı yaratır; değiştirirsek dünyamızı değiştirebiliriz. - Louise Hay",
  "Hayatınızı yaşayın, hayatınızı kazanmakla geçirmeyin. - George Bernard Shaw",
  "Hiçbir şey mümkün değilse, o zaman neden mümkün olmayanı düşünelim? - Alice in Wonderland",
  "Kendini sev, kendini kabul et ve kendi kendine öğren. - Louise Hay",
  "Bir şeyi gerçekten isterseniz, tüm evren onu gerçekleştirmek için işbirliği yapar. - Paulo Coelho"
];

let quote = document.getElementById("cardContainer");
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote;
rabbit.addEventListener('click', moveRabbit);

function goBack() {
  // Önceki sayfaya dön
  window.history.back();
}


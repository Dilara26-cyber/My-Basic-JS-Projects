const btn_one = document.querySelector('.btn_one');
const btn_two = document.querySelector('.btn_two');
const btn_three = document.querySelector('.btn_three');
const b_para = document.querySelector('.beat');
const b_sorry = document.querySelector('.sorry');
const b_love = document.querySelector('.love');
const sorry = [
  'ÇOK ÜZGÜNÜM AŞKIM',
  'KEŞKE ÖLSEM',
  'SENİ ÜZMÜŞ OLACAĞIMA AÇ AÇIKTA KALSAM',
  'BU BAŞIMA GELEN EN KÖTÜ ŞEY',
  'ANKSİYETE ÇUKURUNDA ÖLMEYİ HAK EDİYORUM',
  'ÖL DİLOŞ ÖL!!!',
  'SENİ HAK ETMİYORUM',
  'KAFAMA TAŞLAR DÜŞSÜN',
  'EŞEK KAFALININ ÖNDE GİDENİYİM',
  'ALLAHIM BELAMI MI ARIYORUM',
  'CANIM KARIM ÜZÜLECEĞİNE BEN YOK OLSAYDIM',
];
const beat_arr = [
  'DAYAK',
  'AL SANA',
  'EŞEK KAFALI',
  'İĞRENÇSİN',
  'SENDEN NEFRET EDİYORUM',
  'HİÇBİR ŞEYİ HAKETMİYORSUN.',
  'ZAVALLI',
  'YAZIK',
  'ZAMANIMI HARCADIN',
  'TİKSİNÇ İNSAN',
  'DAYAAK',
];
const love = [
  'SENİ ÇOK SEVİYORUM',
  'CANIM KARIM',
  'HAYATIMIN AŞKI',
  'KADINIM',
  'GÜZELİM',
  'HER ŞEYİM',
  'KALBİMİN TEK SAHİBİ',
  'MELEK YÜZLÜM',
  'CANIMIN EN İÇİ',
  'SENİN İÇİN HER ŞEYİ YAPARIM',
];

function beat(arr, selector) {
  const random = Math.floor(Math.random() * arr.length);
  console.log(random);
  selector.textContent = arr[random];
}
btn_one.addEventListener('click', () => {
  beat(sorry, b_sorry);
});
btn_two.addEventListener('click', () => {
  beat(beat_arr, b_para);
});

btn_three.addEventListener('click', () => {
  beat(love, b_love);
});

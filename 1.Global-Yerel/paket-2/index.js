console.log("Paket -2");
const is = require("simple-is");

console.log(is.number(21));



// Node Modul'lerini geliştirici ortamında değilken 
// yani ürün aşamasında yerel kurmalıyız.
// aksi halde server bunları göremez.
// geliştirici ortamında global kurabiliriz

// CMD => npm root -g komutu bize global modullerimizin
// yerini gösterir.


// windowsta global modullerimizin yerini windowsa tanıtmamız gerekiyor
// bilgisayar sağ tık özellikler .. gelişmiş ayarlar .. ortam özellikleri
// yeni diyerek path ekliyoruz ... değişken adı = NODE_PATH
// yol için npm root -g ile öğrendiğimiz yolu yazıyoruz.

// herhangi bir sıkıntı olmaması için görev yöneticisi vcode görevleri sonlandır.


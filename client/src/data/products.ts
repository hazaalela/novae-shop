/** NOVAÉ Sessiz Atelier: ürün verisi; sade, teknik ve editoryal detaylar. */
export type Category = "Clothing" | "Shoes" | "Accessories";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  colors: string[];
  sizes: string[];
  image: string;
  secondaryImage: string;
  tags: string[];
  material: string;
  fit: string;
  new?: boolean;
  best?: boolean;
  stock: boolean;
};

const img = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const products: Product[] = [
  { id:"p01", name:"Contour Oversized T-Shirt", category:"Clothing", price:58, rating:4.8, reviews:126, description:"Ağırlıklı organik pamuktan, doğal bir omuz düşüşüyle kesildi. Günün her ritmine uyum sağlayan temel katman.", colors:["Black","White","Beige"], sizes:["XS","S","M","L","XL"], image:img("photo-1521572163474-6864f9cf17ab"), secondaryImage:img("photo-1503341455253-b2e723bb3dbb"), tags:["cotton","t-shirt","everyday"], material:"%100 organik pamuk", fit:"Relaxed / omuzları düşük", new:true, best:true, stock:true },
  { id:"p02", name:"Studio Premium Hoodie", category:"Clothing", price:118, rating:4.9, reviews:89, description:"Fırçalanmış iç yüzeyi ve dengeli kapüşon hacmiyle, katmanlama için tasarlanmış ağır pamuklu hoodie.", colors:["Gray","Black","Beige"], sizes:["S","M","L","XL"], image:img("photo-1556821840-3a63f95609a7"), secondaryImage:img("photo-1551488831-00ddcb6c6bd3"), tags:["hoodie","sweatshirt","warm"], material:"%80 pamuk, %20 geri dönüştürülmüş polyester", fit:"Relaxed", best:true, stock:true },
  { id:"p03", name:"Field Relaxed Sweatshirt", category:"Clothing", price:92, rating:4.7, reviews:42, description:"Kompakt ribana bitişler ve yumuşak dokulu Fransız havlu kumaşıyla yalın bir sweatshirt.", colors:["White","Gray","Brown"], sizes:["XS","S","M","L","XL"], image:img("photo-1576566588028-4147f3842f27"), secondaryImage:img("photo-1611312449408-fcece27cdbb7"), tags:["sweatshirt","cotton","layer"], material:"%100 pamuklu French terry", fit:"Düz ve rahat", stock:true },
  { id:"p04", name:"Arc Wide-Leg Trousers", category:"Clothing", price:124, rating:4.8, reviews:61, description:"Akışkan yün karışımı ve tok duruşlu geniş paçasıyla gün boyu biçimini koruyan bir siluet.", colors:["Beige","Black","Brown"], sizes:["XS","S","M","L","XL"], image:img("photo-1594938298603-c8148c4dae35"), secondaryImage:img("photo-1516826957135-700dedea698c"), tags:["trousers","wide-leg","tailoring"], material:"%55 yün, %45 Tencel", fit:"Yüksek bel / geniş paça", new:true, stock:true },
  { id:"p05", name:"Dayline Straight Jeans", category:"Clothing", price:105, rating:4.6, reviews:137, description:"Orta ağırlıkta sertifikalı pamuk denim; vücuda yapışmadan, düz bir çizgide ilerler.", colors:["Gray","Black"], sizes:["XS","S","M","L","XL"], image:img("photo-1542272604-787c3835535d"), secondaryImage:img("photo-1511105043137-7e66f28270e3"), tags:["jeans","denim","straight"], material:"%99 pamuk, %1 elastan", fit:"Orta bel / düz paça", best:true, stock:true },
  { id:"p06", name:"Softline Knit Cardigan", category:"Clothing", price:136, rating:4.9, reviews:53, description:"Merinos yünü ve yakası açık düğme çizgisiyle, mevsimler arasında sessiz bir geçiş parçası.", colors:["Beige","Gray","Brown"], sizes:["XS","S","M","L"], image:img("photo-1434389677669-e08b4cac3105"), secondaryImage:img("photo-1523779917675-b6ed3a42a561"), tags:["knit","cardigan","wool"], material:"%100 sertifikalı merinos", fit:"Hafif oversize", new:true, stock:true },
  { id:"p07", name:"Column Oversized Shirt", category:"Clothing", price:98, rating:4.7, reviews:34, description:"Canlı ama nefes alan pamuk poplin, uzun manşetler ve düz hatlı gizli düğme patı.", colors:["White","Beige","Gray"], sizes:["XS","S","M","L","XL"], image:img("photo-1596755389378-c31d21fd1273"), secondaryImage:img("photo-1605763240000-7e93b172d754"), tags:["shirt","poplin","oversized"], material:"%100 pamuk poplin", fit:"Uzun ve bol", stock:true },
  { id:"p08", name:"Transit Lightweight Jacket", category:"Clothing", price:188, rating:4.8, reviews:28, description:"Hafif teknik pamuk, iki yönlü fermuar ve iç cebe sahip işlevsel şehir katmanı.", colors:["Black","Gray","Brown"], sizes:["S","M","L","XL"], image:img("photo-1591047139829-d91aecb6caea"), secondaryImage:img("photo-1548883354-7622d03aca27"), tags:["jacket","outerwear","lightweight"], material:"%65 organik pamuk, %35 geri dönüştürülmüş naylon", fit:"Düz / ayarlanabilir etek", new:true, stock:true },
  { id:"p09", name:"Outline Wool Coat", category:"Clothing", price:275, rating:4.9, reviews:19, description:"Yumuşak omuzlu ve astarlı uzun palto; temiz bir profil için gizli çıtçıtlarla tamamlandı.", colors:["Black","Brown"], sizes:["S","M","L"], image:img("photo-1539533018447-63fcce2678e3"), secondaryImage:img("photo-1539533113208-f6df8cc8b543"), tags:["coat","wool","outerwear"], material:"%70 yün, %20 poliamid, %10 kaşmir", fit:"Uzun / rahat", stock:true },
  { id:"p10", name:"Everyday Rib Tank", category:"Clothing", price:42, rating:4.6, reviews:112, description:"Çift katlı, esnek ve opak ribana. Tek başına veya gömlek altında güvenle kullanılır.", colors:["White","Black","Beige"], sizes:["XS","S","M","L","XL"], image:img("photo-1594633312681-425c7b97ccd1"), secondaryImage:img("photo-1608234807905-4466023792f5"), tags:["tank","rib","base-layer"], material:"%95 organik pamuk, %5 elastan", fit:"Vücuda yakın", stock:true },
  { id:"p11", name:"Measured Linen Blazer", category:"Clothing", price:215, rating:4.7, reviews:22, description:"Keten-viskon karışımı, yarım astar ve doğal omuz çizgisiyle kolay terzilik.", colors:["Beige","Brown"], sizes:["S","M","L","XL"], image:img("photo-1507679799987-c73779587ccf"), secondaryImage:img("photo-1617127365659-c47fa864d8bc"), tags:["blazer","linen","tailoring"], material:"%58 keten, %42 viskon", fit:"Rahat kesim", stock:true },
  { id:"p12", name:"Quiet Pleated Skirt", category:"Clothing", price:112, rating:4.8, reviews:25, description:"Yumuşak hareket eden kalıcı pileler, elastik arka bel ve astarlı iç yüzey.", colors:["Black","Gray","Brown"], sizes:["XS","S","M","L"], image:img("photo-1583496661160-fb5886a0aaaa"), secondaryImage:img("photo-1551028719-00167b16eac5"), tags:["skirt","pleated","flow"], material:"%72 geri dönüştürülmüş polyester, %28 viskon", fit:"Orta bel / midi", stock:true },
  { id:"p13", name:"Form Leather Shoulder Bag", category:"Accessories", price:189, rating:4.9, reviews:72, description:"Yumuşak ama yapılı bitkisel tabaklanmış deri, ayarlanabilir omuz askısı ve iç cep.", colors:["Brown","Black","Beige"], sizes:["One Size"], image:img("photo-1584917865442-de89df76afd3"), secondaryImage:img("photo-1594223274512-ad4803739b7c"), tags:["bag","leather","shoulder"], material:"Bitkisel tabaklanmış deri", fit:"24 × 16 × 8 cm", best:true, stock:true },
  { id:"p14", name:"Fold Minimal Wallet", category:"Accessories", price:74, rating:4.7, reviews:64, description:"Altı kart gözü, yumuşak bölmeli iç yapı ve yıllandıkça karakter kazanan deri.", colors:["Black","Brown"], sizes:["One Size"], image:img("photo-1627123424574-724758594e93"), secondaryImage:img("photo-1556742049-0cfed4f6a45d"), tags:["wallet","leather","daily"], material:"LWG sertifikalı deri", fit:"11 × 9 cm", stock:true },
  { id:"p15", name:"Market Canvas Tote", category:"Accessories", price:48, rating:4.8, reviews:91, description:"Ağır kanvas, güçlendirilmiş saplar ve küçük iç cep. Günlük notlar ve hafta sonu alışverişi için.", colors:["Beige","Gray"], sizes:["One Size"], image:img("photo-1591561954557-26941169b49e"), secondaryImage:img("photo-1597633125097-5a9961e1a6f8"), tags:["tote","canvas","bag"], material:"%100 GOTS organik kanvas", fit:"38 × 38 × 12 cm", new:true, stock:true },
  { id:"p16", name:"Frame Sunglasses", category:"Accessories", price:96, rating:4.6, reviews:38, description:"UV400 korumalı polarize camlar, hafif asetat çerçeve ve fırçalanmış metal detay.", colors:["Black","Brown"], sizes:["One Size"], image:img("photo-1511499767150-a48a237f0083"), secondaryImage:img("photo-1511499767150-a48a237f0083",1000), tags:["sunglasses","acetate","eyewear"], material:"Biyobazlı asetat / polarize cam", fit:"Unisex orta genişlik", stock:true },
  { id:"p17", name:"Standard Classic Cap", category:"Accessories", price:44, rating:4.7, reviews:47, description:"Yıkanmış pamuk twill, eğimli siperlik ve tona ton işlemeli küçük monogram.", colors:["Black","Beige","Gray"], sizes:["One Size"], image:img("photo-1588850561407-ed78c282e89b"), secondaryImage:img("photo-1521369909029-2afed882baee"), tags:["cap","hat","cotton"], material:"%100 pamuk twill", fit:"Ayarlanabilir", stock:true },
  { id:"p18", name:"Tempo Minimal Watch", category:"Accessories", price:148, rating:4.8, reviews:31, description:"Kubbeli safir cam, fırçalanmış çelik kasa ve sade taş grisi kadranla zamanın sessiz işareti.", colors:["Black","Brown"], sizes:["One Size"], image:img("photo-1524805444758-089113d48a6d"), secondaryImage:img("photo-1523275335684-37898b6baf30"), tags:["watch","steel","time"], material:"316L çelik / safir kaplama", fit:"38 mm kasa", new:true, stock:true },
  { id:"p19", name:"Fine Wool Scarf", category:"Accessories", price:82, rating:4.9, reviews:27, description:"İnce ama sıcak merinos örgü, saçak yerine keskin bitiş ve kolay sarılan uzun form.", colors:["Gray","Beige","Brown"], sizes:["One Size"], image:img("photo-1601924994987-69e26d50dc26"), secondaryImage:img("photo-1548883354-7622d03aca27"), tags:["scarf","wool","knit"], material:"%100 merinos yünü", fit:"190 × 32 cm", stock:true },
  { id:"p20", name:"Curve Leather Belt", category:"Accessories", price:65, rating:4.6, reviews:33, description:"Özel eskitilmiş tokalı ve kenarları boyanmış ince deri kemer.", colors:["Black","Brown"], sizes:["S","M","L"], image:img("photo-1624222247344-550fb60583dc"), secondaryImage:img("photo-1624222247344-550fb60583dc",1000), tags:["belt","leather","accessory"], material:"Bitkisel tabaklanmış deri", fit:"3 cm genişlik", stock:true },
  { id:"p21", name:"Air Everyday Sneakers", category:"Shoes", price:128, rating:4.8, reviews:157, description:"Geri dönüştürülmüş file astar, biyobazlı köpük taban ve günlük hareket için esnek deri saya.", colors:["White","Beige","Gray"], sizes:["EU 36","EU 37","EU 38","EU 39","EU 40","EU 41","EU 42","EU 43","EU 44"], image:img("photo-1542291026-7eec264c27ff"), secondaryImage:img("photo-1525966222134-fcfa99b8ae77"), tags:["sneakers","leather","everyday"], material:"LWG deri / geri dönüştürülmüş file", fit:"Standart; iki numara arasında kalırsanız büyütün", best:true, stock:true },
  { id:"p22", name:"Grain Leather Sneakers", category:"Shoes", price:156, rating:4.9, reviews:68, description:"Yumuşak tam tahıl deri ve belirgin olmayan dikiş çizgileriyle uzun ömürlü, rafine sneaker.", colors:["White","Black","Brown"], sizes:["EU 36","EU 37","EU 38","EU 39","EU 40","EU 41","EU 42","EU 43","EU 44"], image:img("photo-1600269452121-4f2416e55c28"), secondaryImage:img("photo-1603808033192-082d6919d3e1"), tags:["sneakers","premium","leather"], material:"Tam tahıl deri / kauçuk", fit:"Standart", new:true, stock:true },
  { id:"p23", name:"Line Minimal Loafers", category:"Shoes", price:172, rating:4.7, reviews:41, description:"Badem burun, düşük profil topuk ve tamamı deri astarla sadeleştirilmiş klasik form.", colors:["Black","Brown"], sizes:["EU 36","EU 37","EU 38","EU 39","EU 40","EU 41","EU 42","EU 43"], image:img("photo-1560343090-f0409e92791a"), secondaryImage:img("photo-1598032895397-b9472444bf93"), tags:["loafers","leather","smart"], material:"Kromsuz deri / deri astar", fit:"Hafif dar", stock:true },
  { id:"p24", name:"Terrain Casual Boots", category:"Shoes", price:205, rating:4.8, reviews:36, description:"Su itici yağlı süet ve esnek dış tabanla, sertleşmeden koruyan günlük bot.", colors:["Brown","Black"], sizes:["EU 36","EU 37","EU 38","EU 39","EU 40","EU 41","EU 42","EU 43","EU 44"], image:img("photo-1542838132-92c53300491e"), secondaryImage:img("photo-1520639883713-0d3f4f7ebde1"), tags:["boots","suede","outdoor"], material:"Yağlı süet / geri dönüştürülmüş kauçuk", fit:"Standart", stock:true },
  { id:"p25", name:"Dawn Suede Mules", category:"Shoes", price:118, rating:4.6, reviews:24, description:"Yumuşak süet üst yüzey, konturlu iç taban ve evden dışarı geçişi kolaylaştıran açık arka.", colors:["Beige","Brown"], sizes:["EU 36","EU 37","EU 38","EU 39","EU 40","EU 41"], image:img("photo-1535043934128-cf0b28d52f95"), secondaryImage:img("photo-1560343090-f0409e92791a"), tags:["mules","suede","slip-on"], material:"Yumuşak süet / mantar karışımı taban", fit:"Standart", stock:true },
  { id:"p26", name:"Motion Canvas Trainers", category:"Shoes", price:88, rating:4.7, reviews:76, description:"Hafif organik kanvas, doğal kauçuk taban ve sade, dikiş odaklı yapı.", colors:["White","Black","Beige"], sizes:["EU 36","EU 37","EU 38","EU 39","EU 40","EU 41","EU 42","EU 43","EU 44"], image:img("photo-1460353581641-37baddab0fa2"), secondaryImage:img("photo-1549298916-b41d501d3772"), tags:["trainers","canvas","casual"], material:"Organik kanvas / doğal kauçuk", fit:"Standart", stock:true },
  { id:"p27", name:"Crisp Oxford Shirt", category:"Clothing", price:94, rating:4.8, reviews:48, description:"Biraz kalın Oxford dokusu, düz etek ucu ve açık yaka çizgisiyle tekrar tekrar giyilmek üzere tasarlandı.", colors:["White","Gray","Beige"], sizes:["XS","S","M","L","XL"], image:img("photo-1485968579580-b6d095142e6e"), secondaryImage:img("photo-1598033129183-c4f50c736f10"), tags:["shirt","oxford","cotton"], material:"%100 organik Oxford pamuk", fit:"Rahat", stock:true },
  { id:"p28", name:"Balance Jersey Dress", category:"Clothing", price:108, rating:4.7, reviews:29, description:"Mat viskon jersey, ayarlanabilir ince askılar ve sırtı izleyen ama sıkmayan uzun çizgi.", colors:["Black","Brown","Gray"], sizes:["XS","S","M","L"], image:img("photo-1539109136881-3be0616acf4b"), secondaryImage:img("photo-1566206091558-7f218b696731"), tags:["dress","jersey","minimal"], material:"%94 FSC viskon, %6 elastan", fit:"Vücuda yakın / midi", stock:true },
  { id:"p29", name:"Trace Merino Polo", category:"Clothing", price:132, rating:4.8, reviews:31, description:"İnce gauge merinos, zarif üç düğme ve kıvrılmayan yaka yapısıyla hafif triko polo.", colors:["Brown","Black","Beige"], sizes:["S","M","L","XL"], image:img("photo-1620799140408-edc6dcb6d633"), secondaryImage:img("photo-1506629905607-d40582bb540b"), tags:["polo","merino","knit"], material:"%100 merinos", fit:"Düz", stock:true },
  { id:"p30", name:"Stillness Travel Pouch", category:"Accessories", price:56, rating:4.6, reviews:44, description:"Su itici mat yüzey, geniş açılan fermuar ve günlük küçük eşyalar için ayrılmış iç bölmeler.", colors:["Black","Gray","Beige"], sizes:["One Size"], image:img("photo-1553062407-98eeb64c6a62"), secondaryImage:img("photo-1491637639811-60e2756cc1c7"), tags:["pouch","travel","organizer"], material:"Geri dönüştürülmüş naylon", fit:"22 × 14 × 8 cm", stock:true },
];
const localProductImages: Record<string, string> = {
  p01: "/images/user-card-30.jpg",
  p02: "/images/user-card-02.jpg",
  p03: "/images/user-card-03.jpg",
  p04: "/images/user-card-29.jpg",
  p05: "/images/user-card-04.jpg",

  p06: "/images/user-card-31.jpg",
  p07: "/images/user-card-07.jpg",
  p08: "/images/user-card-08.jpg",
  p09: "/images/user-card-09.jpg",
  p10: "/images/user-card-34.jpg",

  p11: "/images/user-card-33.jpg",
  p12: "/images/user-card-35.jpg",
  p13: "/images/user-card-34.jpg",
  p14: "/images/user-card-11.jpg",
  p15: "/images/user-card-17.jpg",

  p16: "/images/user-card-27.jpg",
  p17: "/images/user-card-29.jpg",
  p18: "/images/user-card-32.jpg",
  p19: "/images/user-card-39.jpg",
  p20: "/images/user-card-40.jpg",

  p21: "/images/user-card-03.jpg",
  p22: "/images/user-card-41.jpg",
  p23: "/images/user-card-42.jpg",
  p24: "/images/user-card-43.jpg",
  p25: "/images/user-card-44.jpg",

  p26: "/images/user-card-32.jpg",
  p27: "/images/user-card-12.jpg",
  p28: "/images/user-card-20.jpg",
  p29: "/images/user-card-21.jpg",
  p30: "/images/user-card-45.jpg",
};

products.forEach((product) => {
  const image = localProductImages[product.id];

  if (image) {
    product.image = image;
    product.secondaryImage = image;
  }
});


// Her ürün metni, yeni ana görselde görünen parça ve materyal hissiyle eşleştirilir.
const visualProductContent: Record<string, Partial<Product>> = {
  p01: { name: "Contour Fleece Sweatshirt", category: "Clothing", description: "Taş tonlu fırçalanmış fleece ve düşük omuz çizgisiyle, açık denim üzerinde hacimli ama dengeli duran günlük katman.", colors: ["Beige", "Gray", "Brown"], tags: ["sweatshirt", "fleece", "oversized"], material: "%80 pamuk, %20 geri dönüştürülmüş polyester", fit: "Belirgin düşük omuz / rahat" },
  p02: { name: "Sculpted Leather Hobo", category: "Accessories", description: "Yumuşak parlaklıkta koyu kahverengi deri, akışkan üst hat ve ayarlanabilir uzun omuz askısıyla gün boyu taşınan hacimli hobo çanta.", colors: ["Brown", "Black"], sizes: ["One Size"], tags: ["bag", "leather", "shoulder"], material: "Yumuşak bitişli suni deri", fit: "Geniş iç hacim / tek omuz askısı" },
  p03: { name: "Aesthetic Graphic Tee", category: "Clothing", description: "Beyaz pamuk jarse üzerine yerleştirilmiş kontrast grafik ve dökümlü kesim; koyu geniş paça parçalarla kolayca dengelenir.", colors: ["White", "Black"], tags: ["t-shirt", "graphic", "jersey"], material: "%100 pamuk jarse", fit: "Uzun ve rahat" },
  p04: { name: "Dune Runner Sneaker", category: "Shoes", description: "Kum beji süet paneller, temiz katmanlı saya ve dişli gum tabanla tamamlanan hafif retro koşu formu.", colors: ["Beige", "White"], sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"], tags: ["sneakers", "suede", "runner"], material: "Süet görünümlü üst yüzey / kauçuk taban", fit: "Standart" },
  p05: { name: "Dune Runner Sneaker — Sand", category: "Shoes", description: "Açık bej tonlarda, gün boyu hareket eden kombinler için yumuşak bilek dolgusu ve dengeli tabanla tasarlanmış temiz sneaker.", colors: ["Beige", "White"], sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"], tags: ["sneakers", "sand", "everyday"], material: "Mikro süet / EVA ve kauçuk taban", fit: "Standart" },
  p06: { name: "Layered Studio Tee", category: "Clothing", description: "Füme kısa kollu üst, beyaz uzun kol katmanı ve soluk denimle kurulan rahat, grafik siluetten ilham alan iki dokulu T-shirt.", colors: ["Gray", "White", "Black"], tags: ["t-shirt", "layered", "street"], material: "%100 pamuk jarse", fit: "Bol / katmanlı görünüm" },
  p07: { name: "Soft Rib Cardigan", category: "Clothing", description: "Geniş ribanalı dokusu, açık ön yüzü ve uzun manşetleriyle beyaz temel üstlerin üzerine sıcak bir hacim ekleyen taupe cardigan.", colors: ["Beige", "Brown", "Gray"], tags: ["cardigan", "rib", "knit"], material: "Yumuşak akrilik-yün karışımı", fit: "Oversize / uzun" },
  p08: { name: "Column Wool Coat", category: "Clothing", description: "Şehir günleri için uzun siyah çizgi, net omuz ve içe katlanan turtleneck katmanıyla tamamlanan yün görünümlü palto.", colors: ["Black", "Gray"], tags: ["coat", "wool", "outerwear"], material: "Yün görünümlü dokuma", fit: "Uzun / düz" },
  p09: { name: "Cloud Fringe Scarf", category: "Accessories", description: "Kalın, yumuşak beyaz dokusu ve uzun saçaklarıyla koyu dış katmanları aydınlatan, yüzü saran kış atkısı.", colors: ["White", "Beige", "Gray"], sizes: ["One Size"], tags: ["scarf", "fringe", "winter"], material: "Yumuşak fırçalanmış örgü", fit: "Uzun / sarılabilir" },
  p10: { name: "Shadow Transit Overshirt", category: "Clothing", description: "Kömür tonlu düz üst katman; sade gömlek yakası, temiz ön yüzü ve rahat kesimiyle her gün kullanılan bir overshirt.", colors: ["Black", "Gray"], tags: ["overshirt", "layer", "charcoal"], material: "Tok pamuklu twill", fit: "Rahat / düz" },
  p11: { name: "Contrast Knit Vest", category: "Clothing", description: "Siyah gömlek üzerine giyilen bej kolsuz triko katman ve yüksek belli geniş paça pantolonla dengelenen şehir silueti.", colors: ["Beige", "Black"], tags: ["vest", "knit", "layering"], material: "İnce triko karışımı", fit: "Rahat / kolsuz" },
  p12: { name: "Slate Utility Jacket", category: "Clothing", description: "Mat yüzeyli kısa utility mont; yüksek yaka, rahat gövde ve ince iç katmanlarla çalışan fonksiyonel şehir parçası.", colors: ["Gray", "Black"], tags: ["jacket", "utility", "outerwear"], material: "Hafif teknik dokuma", fit: "Kısa / rahat" },
  p13: { name: "Slate Utility Jacket — Short", category: "Clothing", description: "Yuvarlak hatlı kısa mont, ayarlanabilir etek ve koyu taş rengiyle sade kış katmanları için ikinci bir utility seçeneği.", colors: ["Gray", "Black"], sizes: ["XS", "S", "M", "L", "XL"], tags: ["jacket", "short", "utility"], material: "Su itici teknik dokuma", fit: "Kısa / bol" },
  p14: { name: "Light Pleated Midi Skirt", category: "Clothing", description: "Hareket eden kırık beyaz pileler ve mat siyah üstlerle kontrast kuran, gün ışığında akışkan kalan midi etek.", colors: ["White", "Beige", "Black"], sizes: ["XS", "S", "M", "L"], tags: ["skirt", "pleated", "midi"], material: "Hafif piliseli dokuma", fit: "Orta bel / midi" },
  p15: { name: "Market Canvas Tote", category: "Accessories", description: "Sebze, kitap ve günlük küçük eşyalar için açık üstlü, kalın kanvas ve kahverengi deri detaylarla tamamlanan geniş tote.", colors: ["Beige", "Brown"], sizes: ["One Size"], tags: ["tote", "canvas", "market"], material: "Ağır pamuk kanvas / deri detay", fit: "Geniş iç hacim" },
  p16: { name: "Contour Strap Watch", category: "Accessories", description: "İnce açık bej kayış, sıcak altın tonlu kasa ve sade krem kadranla sessiz bir günlük zaman işareti.", colors: ["Beige", "Brown"], sizes: ["One Size"], tags: ["watch", "minimal", "leather"], material: "Suni deri kayış / çelik kasa", fit: "İnce bilek profili" },
  p17: { name: "Alpine Lace Boot", category: "Shoes", description: "Açık kum rengi bağcıklı bilek botu; kalın kauçuk tabanı ve yumuşak üst yüzeyiyle şehirde yürümek için tasarlandı.", colors: ["Beige", "White"], sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43"], tags: ["boots", "lace-up", "winter"], material: "Süet görünümlü üst / kauçuk", fit: "Standart" },
  p18: { name: "Cedar Knit Polo", category: "Clothing", description: "Kahverengi ince triko, açık yaka ve krem düz paça pantolonla dengelenen, gündelik ama düşünülmüş polo katmanı.", colors: ["Brown", "Beige", "Black"], sizes: ["S", "M", "L", "XL"], tags: ["polo", "knit", "brown"], material: "İnce pamuklu triko", fit: "Düz" },
  p19: { name: "Harbor Knit Polo", category: "Clothing", description: "Derin lacivert dokulu polo, beyaz geniş paça pantolonla kurulan rahat ve temiz hafta sonu görünümünün merkezinde.", colors: ["Gray", "Black", "White"], sizes: ["S", "M", "L", "XL"], tags: ["polo", "navy", "knit"], material: "Hafif pamuklu triko", fit: "Rahat" },
  p20: { name: "Moss Velour Set", category: "Clothing", description: "Yosun yeşili, hafif parlak dokulu kapüşonlu üst ve rahat eşofman altıyla kurulan yumuşak iki parçalı set.", colors: ["Green", "Gray"], sizes: ["XS", "S", "M", "L", "XL"], tags: ["tracksuit", "velour", "set"], material: "Yumuşak velour", fit: "Rahat / iki parça" },
  p21: { name: "Studio Graphic Tee", category: "Clothing", description: "Soluk grafik baskı, kömür rengi jarse ve ekstra uzun bollukla geniş paça pantolonların üzerine gelen günlük T-shirt.", colors: ["Black", "Gray"], sizes: ["XS", "S", "M", "L", "XL"], tags: ["t-shirt", "graphic", "oversized"], material: "%100 pamuk jarse", fit: "Ekstra rahat" },
  p22: { name: "Linen Column Suit", category: "Clothing", description: "Kırık beyaz keten görünümlü blazer ve eşleşen geniş paça pantolondan oluşan, hafif ve uzun çizgili takım.", colors: ["White", "Beige"], sizes: ["XS", "S", "M", "L", "XL"], tags: ["suit", "linen", "tailoring"], material: "Keten-viskon karışımı", fit: "Rahat terzilik" },
  p23: { name: "Fold Leather Wallet", category: "Accessories", description: "İnce kahverengi cüzdan; düz katlanan formu ve sıcak deri görünümüyle günlük taşıma için sadeleştirildi.", colors: ["Brown", "Black"], sizes: ["One Size"], tags: ["wallet", "leather", "compact"], material: "Deri görünümlü suni malzeme", fit: "Kompakt" },
  p24: { name: "Everyday Canvas Cap", category: "Accessories", description: "Krem kanvas siperlik, işlenmiş küçük işaret ve koyu yeşil yarım fermuarlı üstlerle çalışan rahat günlük şapka.", colors: ["Beige", "White", "Green"], sizes: ["One Size"], tags: ["cap", "canvas", "everyday"], material: "%100 pamuklu kanvas", fit: "Ayarlanabilir" },
  p25: { name: "Cocoa Minimal Loafer", category: "Shoes", description: "Koyu kakao tonunda yuvarlak burunlu loafer; bilekte biten düz paçalarla dengelenen sade deri görünüm.", colors: ["Brown", "Black"], sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43"], tags: ["loafers", "leather", "minimal"], material: "Deri görünümlü üst / kauçuk taban", fit: "Standart" },
  p26: { name: "Pinstripe Oxford Shirt", category: "Clothing", description: "İnce çizgili açık gömlek, dökümlü beyaz pantolon ve doğal sneaker ile hafif, rahat bir gündüz katmanı.", colors: ["Gray", "White", "Black"], sizes: ["XS", "S", "M", "L", "XL"], tags: ["shirt", "pinstripe", "oxford"], material: "Pamuk poplin", fit: "Rahat / uzun" },
  p27: { name: "Contour Column Dress", category: "Clothing", description: "Bedeni izleyen koyu kahverengi uzun elbise; ince triko yüzeyi ve tek renk çizgisiyle sessiz bir akşam silueti oluşturur.", colors: ["Brown", "Black"], sizes: ["XS", "S", "M", "L"], tags: ["dress", "knit", "column"], material: "Esnek ince triko", fit: "Vücuda yakın / midi" },
  p28: { name: "Form Knit Tank", category: "Clothing", description: "Kahverengi dar ribana üst, siyah geniş paça pantolon ve açık dış katmanla kurulmuş sade ama güçlü bir temel parça.", colors: ["Brown", "Black", "Beige"], sizes: ["XS", "S", "M", "L"], tags: ["tank", "rib", "knit"], material: "Esnek pamuk ribana", fit: "Vücuda yakın" },
  p29: { name: "Afterlight Blazer", category: "Clothing", description: "Siyah blazer, ton sür ton iç katman ve koyu gözlükle tamamlanan keskin şehir görünümü için rahat yapılı ceket.", colors: ["Black", "Gray"], sizes: ["S", "M", "L", "XL"], tags: ["blazer", "black", "tailoring"], material: "Yumuşak dokuma", fit: "Rahat omuz" },
  p30: { name: "Curve Leather Belt", category: "Accessories", description: "Sıcak kahverengi deri görünümü ve mat metal tokasıyla beyaz jarse ile koyu pantolonları bir araya getiren sade kemer.", colors: ["Brown", "Black"], sizes: ["S", "M", "L"], tags: ["belt", "leather", "curve"], material: "Deri görünümlü suni malzeme", fit: "3 cm genişlik" },
};
products.forEach((product) => Object.assign(product, visualProductContent[product.id]));

export const categoryCopy: Record<Category, { title: string; subtitle: string }> = {
  Clothing: { title: "Günlük katmanlar", subtitle: "Form, his ve tekrar giyilme ihtimali için." },
  Shoes: { title: "Yürümek için", subtitle: "Günün temposuna eşlik eden dikkatli formlar." },
  Accessories: { title: "Yanınızda kalanlar", subtitle: "İşe yarayan, yıllanan ve kişiselleşen parçalar." },
};

export const euro = (price: number) => new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(price);

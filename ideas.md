# NOVAÉ — Tasarım Keşfi

## Üç Olası Yaklaşım

### 1. Sessiz Atelier
**Very Brief Intro:** Matbaa hissi veren sıcak kâğıt tonları, büyük serif başlıklar ve mekânsal nefes ile zamansız bir moda yayını atmosferi kurar. Ürünler bir katalog nesnesi değil, dikkatle seçilmiş parçalar gibi sunulur.
**Probability:** 0.071

### 2. Modern Galeri
**Very Brief Intro:** Keskin monokrom çerçeveler, heykelsi ürün kırpımları ve asimetrik blok düzeniyle çağdaş tasarım galerilerinden ilham alır. Hissi kontrollü, kültürlü ve uluslararasıdır.
**Probability:** 0.036

### 3. Kıyı Arşivi
**Very Brief Intro:** Taş, kum ve soluk okyanus tonlarını bir günlük sayfası sadeliğiyle birleştirir. Yumuşak dokular ve doğal ışık, konfor odaklı bir günlük yaşam duygusu verir.
**Probability:** 0.083

---

## Seçilen Yaklaşım: Sessiz Atelier

### Design Movement
Çağdaş **editorial minimalizm** ile Japon katalog tasarımının düzen disiplini ve 1990'lar bağımsız moda dergilerinin bilinçli boşluk kullanımı bir araya gelir.

### Core Principles
1. **Ritmik boşluk:** İçerik, geniş marjlar ve kontrollü modüler kopuşlarla soluk alır.
2. **Nesne odaklılık:** Ürün görselleri arayüzde dekor değil, kompozisyonun ana aktörüdür.
3. **Sessiz kesinlik:** İnce çizgiler, küçük etiketler ve belirgin hiyerarşi gösteriş yerine güven verir.
4. **Dokunsal dijitallik:** Sıcak zeminler, kâğıt benzeri gren ve hareketli mikro etkileşimler fiziksel bir katalog hissi yaratır.

### Color Philosophy
Zemin, galeri duvarı ve doğal pamuk hissi için **sütlü kırık beyaz** kullanılır. Sıcak kum ve taş tonları, sert siyah-beyaz karşıtlığına yumuşak bir insanilik katar. Kömür rengi metin, okunabilirliği netleştirir; soluk adaçayı yeşili ise yalnızca seçim, başarı ve küçük yönlendirici anlarda kullanılan sakin imza vurgudur.

### Layout Paradigm
Merkezi kart desteleri yerine, **editoryal serbest akış** kullanılır: hero alanı geniş medya düzlemi üzerinde kenara yaslı metinle açılır; katalog masaüstünde solda filtre omurgası, sağda değişken ritimli ürün ızgarası kurar. Sayfa bölümleri tam genişlikli görsel alanlarla ve dar metin sütunlarıyla dönüşümlü ilerler.

### Signature Elements
1. Üst bilgi, ayırıcı ve ürün meta alanlarında kullanılan ince **çift çizgili bordürler**.
2. Koleksiyon bölümlerinde tekrar eden zarif, büyük ölçekli **“N” monogramı** ve küçük koordinat etiketleri.
3. Hover anında görselin üzerinde beliren, yarı saydam **editoryal bilgi bantları**.

### Interaction Philosophy
Etkileşimler görünür ama sessizdir. Ürün kartları kaymak yerine doğal biçimde yaklaşır; favori işlemleri somut bir “kaydetme” hissi verir; sepet ve hızlı görünüm panelleri sayfa bağlamını kaybetmeden kenardan gelir. Klavye ve ekran okuyucu akışları tüm işlevlerde önceliklidir.

### Animation
Arayüz hareketi 160–280 ms aralığında, `cubic-bezier(0.23, 1, 0.32, 1)` ile uygulanır. Kart girişleri 40–60 ms kademelenir; ürün görselleri hover'da yalnızca hafif ölçeklenir ve ikincil kare yumuşak biçimde görünür. Çekmece ve modallar opaklık ile 18 px'lik transform üzerinden açılır. `prefers-reduced-motion` tercihinde esas hareketler devre dışı bırakılır.

### Typography System
Başlıklar için **DM Serif Display**, arayüz, meta ve uzun metin için **Manrope** kullanılır. H1'ler sıkı harf aralıklı, büyük ve iki satıra izin veren bir sanat yönetimi tavrı taşır. Ürün isimleri Manrope medium; kategori ve teknik bilgiler tüm büyük harf, geniş harf aralığı ve düşük kontrastta gösterilir.

### Brand Essence
**NOVAÉ, günlük yaşamı titizlikle tasarlanmış temel parçalarla kurmak isteyen şehirli insanlar için yalın ama karakterli bir gardırop markasıdır.**

Kişilik: **ölçülü, duyusal, bilinçli.**

### Brand Voice
Başlıklar kısa, gözlemci ve sakin olmalıdır; CTA'lar emir vermek yerine bir yön açmalıdır. Mikro metinler teknik ama insani, özellikle teslimat ve ürün bilgileri konusunda açık olur.

Örnek satırlar:

> “Günün ritmine göre tasarlandı.”

> “Parçayı gardırobunuza ayırın.”

### Wordmark & Logo
Kelime işareti, iki karakter arasında ölçülü bir nefes taşıyan, keskin bir aksanlı **NOVAÉ** logotipidir. İşaret ise uzun kolları ve açık bir diyagonal boşluğu olan, mimari çizgiden türemiş ayrı bir **N monogramıdır**. Metinsiz sembol faviconda ve mobil üst barda belirgin ölçekte kullanılır.

### Signature Brand Color
**Atelier Sage — #849486.** Sakin, mineral hissi veren bu soluk yeşil NOVAÉ'nin ayırt edici vurgusudur.

## Style Decisions

- Her sayfa, geniş sütunlar ve ince çizgisel hiyerarşiyle “sessiz atelier” hissini koruyacaktır.
- Yuvarlatılmış kart estetiği yerine keskin ya da yalnızca 2–4 px yarıçaplı yüzeyler tercih edilecektir.
- Ürünlerin ham fiyat ve ölçü bilgileri açıkça sunulacak; demo ödeme akışı gerçek ödeme işlemeyecektir.
- Ürün görselleri yalnızca doğal ışık, taş/pamuk zemin, dokulu yüzey ve markasız nesneler içeren aynı atelier arşivinden gelecektir; spor reklamı, üçüncü taraf marka ve parlak pazar yeri estetiği kullanılmayacaktır.
- Katalog görünümleri hiçbir zaman salt eş boyutlu pazar yeri ızgarasına dönüşmeyecek; sezon etiketleri, değişen ürün ölçeği, negatif alan ve ince çift çizgilerle editoryal ritim kurulacaktır.
- İmza sistemi, DM Serif başlıklar, Manrope teknik etiketler, sakin Atelier Sage vurgular, tekrar eden çift çizgiler ve mimari N monogramıyla tutarlı biçimde uygulanacaktır.

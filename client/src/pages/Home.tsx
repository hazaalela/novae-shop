/** NOVAÉ Sessiz Atelier: büyük nefes alan editoryal kompozisyon; ürünler ve hikâye dönüşümlü akar. */
import { ArrowDownRight, ArrowRight, Mail, MoveRight } from "lucide-react";
import { Link } from "wouter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { toast } from "sonner";

export default function Home() {
  const arrivals = products.filter((p) => p.new).slice(0, 6);
  const best = products.filter((p) => p.best).slice(0, 4);

  const subscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = new FormData(event.currentTarget).get("email");

    if (email) {
      toast.success("Not edildi.", {
        description: "NOVAÉ notları yakında gelen kutunuzda olacak.",
      });

      event.currentTarget.reset();
    }
  };

  return (
    <>
      <section className="grain relative overflow-hidden bg-[#e9e3d8]">
        <div className="container grid min-h-[min(770px,calc(100svh-110px))] items-end gap-5 py-5 md:grid-cols-[.86fr_1.14fr] md:py-8">
          <div className="relative z-10 order-2 pb-8 md:order-1 md:pb-16">
            <p className="eyebrow">01 — İlkbahar / Yaz 2026</p>

            <h1 className="mt-5 max-w-md text-[clamp(3.6rem,7vw,7.4rem)] leading-[.86]">
              Designed for
              <br />
              <i>the Everyday.</i>
            </h1>

            <p className="mt-7 max-w-sm text-sm leading-6 text-stone-600">
              NOVAÉ, sürekli döndüğünüz günler için dikkatle düzenlenmiş temel
              parçalar tasarlar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="quiet-button">
                Koleksiyonu incele <ArrowRight size={15} />
              </Link>

              <Link href="/shop?sort=newest" className="outline-button">
                Yeni gelenler
              </Link>
            </div>

            <p className="mt-16 hidden items-center gap-2 text-[10px] font-bold tracking-[.14em] text-stone-500 uppercase md:flex">
              <span className="h-px w-8 bg-stone-400" />
              Kaydırarak devam edin
              <ArrowDownRight size={14} />
            </p>
          </div>

          <div className="relative order-1 h-[50vh] min-h-[380px] overflow-hidden md:order-2 md:h-full">
            <img
              src="/images/background-photos-1.jpg"
              alt="NOVAÉ’nin ilkbahar koleksiyonundan bir görünüm"
              className="h-full w-full object-cover object-center"
            />

            <span className="absolute bottom-4 right-4 z-10 bg-[#faf8f2]/90 px-3 py-2 text-[9px] font-bold tracking-[.13em] uppercase">
              Look 04 · Linear light
            </span>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 border-b border-stone-300 pb-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Yeni gelenler</p>

            <h2 className="mt-2 text-5xl leading-none md:text-6xl">
              Bugünün <i>parçaları.</i>
            </h2>
          </div>

          <Link href="/shop?sort=newest" className="editorial-link">
            Tümünü gör <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
          {arrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      <section className="bg-[#22211f] py-6 text-[#faf8f2]">
        <div className="container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xl font-serif md:text-2xl">
            Koleksiyonla yaşayın.{" "}
            <i className="text-stone-400">Sadece ona bakmayın.</i>
          </p>

          <Link href="/shop" className="editorial-link !text-[#faf8f2]">
            Parçaları keşfedin <MoveRight size={15} />
          </Link>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="image-frame relative min-h-[460px] lg:col-span-8">
            <img
              src="/images/catalogue-sheet-2.jpg"
              alt="NOVAÉ featured collection"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white md:p-9">
              <p className="eyebrow !text-stone-200">Edit No. 04</p>

              <h2 className="mt-2 text-4xl md:text-5xl">
                İyi formun
                <br />
                <i>yeni rutini.</i>
              </h2>

              <Link
                href="/shop?category=Clothing"
                className="outline-button mt-6 !border-white !text-white hover:!bg-white hover:!text-stone-900"
              >
                Koleksiyonu gör
              </Link>
            </div>
          </div>

          <div className="flex min-h-[260px] flex-col justify-between bg-[#e9e3d8] p-7 lg:col-span-4 lg:p-10">
            <span className="text-[60px] font-serif leading-none text-[#849486]">
              N
            </span>

            <div>
              <p className="eyebrow">Temel prensip</p>

              <p className="mt-3 text-2xl font-serif leading-tight">
                “Daha az, ama daha çok giyilen parça.”
              </p>

              <Link href="#story" className="editorial-link mt-8">
                NOVAÉ hakkında <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e9] py-20 md:py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Kategoriler</p>

              <h2 className="mt-2 text-5xl md:text-6xl">
                Kendinize göre <i>seçin.</i>
              </h2>
            </div>

            <p className="hidden max-w-xs text-sm leading-6 text-stone-600 md:block">
              Parçalarımız biçim, malzeme ve tekrar kullanılabilirlik üzerinden
              düşünülür.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Category
              name="Giyim"
              href="/shop?category=Clothing"
              image="/images/category-photos.jpg"
              count="12 parça"
            />

            <Category
              name="Ayakkabı"
              href="/shop?category=Shoes"
              image="/images/user-card-44.jpg"
              count="6 parça"
            />

            <Category
              name="Aksesuar"
              href="/shop?category=Accessories"
              image="/images/user-card-27.jpg"
              count="12 parça"
            />
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="flex items-end justify-between border-b border-stone-300 pb-6">
          <div>
            <p className="eyebrow">Geri dönülenler</p>

            <h2 className="mt-2 text-5xl md:text-6xl">
              En çok <i>seçilenler.</i>
            </h2>
          </div>

          <Link href="/shop" className="editorial-link">
            Tüm ürünler <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="story" className="grid bg-[#d8d3c9] lg:grid-cols-2">
        <div className="p-8 py-20 md:p-16 md:py-28 lg:p-24">
          <p className="eyebrow">NOVAÉ / Hakkında</p>

          <h2 className="mt-5 max-w-lg text-5xl leading-[.94] md:text-7xl">
            Daha sakin bir
            <br />
            <i>günlük gardırop.</i>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-7 text-stone-600">
            NOVAÉ, dikkatle düzenlenmiş bir hayatın ritmini takip eder. Neyi
            eklediğimiz kadar neyi geride bıraktığımızla da ilgileniriz: daha
            iyi malzemeler, açık formlar ve yıllarca birlikte kalan ayrıntılar.
          </p>

          <Link href="/shop" className="editorial-link mt-9">
            İlk parçanızı bulun <ArrowRight size={15} />
          </Link>
        </div>

        <div className="min-h-[420px] bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center" />
      </section>

      <section className="bg-[#849486] px-4 py-16 text-[#f9f8f1] md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto" size={22} strokeWidth={1.5} />

          <p className="eyebrow mt-4 !text-[#eef0e8]">
            NOVAÉ notları
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl">
            Ara sıra gönderilen,
            <br />
            <i>değerli notlar.</i>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#eef0e8]">
            Yeni koleksiyonlar, stüdyo notları ve erken erişim için e-posta
            adresinizi bırakın.
          </p>

          <form
            onSubmit={subscribe}
            className="mx-auto mt-7 flex max-w-md border-b border-[#eef0e8]"
          >
            <input
              name="email"
              type="email"
              required
              aria-label="E-posta adresiniz"
              placeholder="E-posta adresiniz"
              className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-[#e2e4dc]"
            />

            <button className="px-2 text-[10px] font-bold tracking-[.15em] uppercase">
              Kaydol
              <ArrowRight className="ml-1 inline" size={13} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Category({
  name,
  href,
  image,
  count,
}: {
  name: string;
  href: string;
  image: string;
  count: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[.85] overflow-hidden bg-stone-300"
    >
      <img
        src={image}
        alt={`${name} kategorisi`}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
        <div>
          <p className="text-3xl font-serif">{name}</p>

          <p className="mt-1 text-[10px] font-bold tracking-[.13em] text-stone-200 uppercase">
            {count}
          </p>
        </div>

        <ArrowRight
          className="mb-1 transition group-hover:translate-x-1"
          size={19}
        />
      </div>
    </Link>
  );
}
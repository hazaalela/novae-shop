/** NOVAÉ Sessiz Atelier: obje öncelikli galeri, teknik N işaretleri ve sakin ticaret kontrolleri. */
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Minus, Plus, Ruler, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { Link, useLocation, useRoute } from "wouter";
import { ProductCard } from "@/components/ProductCard";
import { euro, products } from "@/data/products";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "sonner";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const product = products.find((p) => p.id === params?.id);
  const { addToCart, toggleFavorite, favorites } = useStore();
  const [, setLocation] = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState(product?.sizes[0] ?? "");
  const [color, setColor] = useState(product?.colors[0] ?? "");
  const [qty, setQty] = useState(1);
  const related = useMemo(() => product ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4) : [], [product]);
  if (!product) return <div className="container py-24"><h1 className="text-5xl">Bu parçayı bulamadık.</h1><Link href="/shop" className="editorial-link mt-6">Mağazaya dön <ArrowRight size={15}/></Link></div>;
  const gallery = [product.image, product.secondaryImage, product.image, product.secondaryImage];
  const add = () => { addToCart(product, size, color, qty); toast.success("Sepete ayrıldı", { description: `${product.name} · ${color}, ${size}` }); };
  const buy = () => { addToCart(product, size, color, qty); setLocation("/checkout"); };
  const favorite = favorites.includes(product.id);
  return <div className="container py-7 md:py-10">
    <Link href="/shop" className="editorial-link"><ArrowLeft size={15}/> Tüm ürünler</Link>
    <div className="mt-7 grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,.65fr)]">
      <section className="grid gap-3 sm:grid-cols-[90px_1fr]">
        <div className="order-2 flex gap-2 sm:order-1 sm:flex-col">{gallery.map((image, i) => <button key={i} onClick={() => setSelectedImage(i)} className={`h-20 w-16 shrink-0 overflow-hidden border ${selectedImage === i ? "border-stone-950" : "border-transparent opacity-65 hover:opacity-100"}`}><img src={image} alt="" className="h-full w-full object-cover"/></button>)}</div>
        <div className="relative aspect-[.79] overflow-hidden bg-stone-200"><img src={gallery[selectedImage]} alt={product.name} className="h-full w-full object-cover"/><div className="absolute inset-x-4 bottom-4 flex justify-between border-y border-white/70 py-2 text-[9px] font-bold tracking-[.14em] text-white uppercase"><span>NOVAÉ / Object Study</span><span>N° {product.id.slice(1)}</span></div></div>
      </section>
      <section className="xl:pt-5"><p className="eyebrow">N° {product.id.slice(1)} / {product.category}</p><div className="mt-2 flex items-start justify-between gap-4"><h1 className="text-5xl leading-[.94] md:text-6xl">{product.name}</h1><button onClick={() => toggleFavorite(product.id)} aria-label="Favorilere ekle" className={`grid h-10 w-10 shrink-0 place-items-center border ${favorite ? "border-[#849486] bg-[#849486] text-white" : "border-stone-300"}`}><Heart size={18} fill={favorite ? "currentColor" : "none"}/></button></div><div className="mt-5 flex items-center justify-between border-y border-stone-300 py-4"><p className="text-xl font-bold">{euro(product.price)}</p><span className="flex items-center gap-1.5 text-xs text-stone-600"><Star size={14} fill="currentColor"/> {product.rating} <span className="text-stone-400">({product.reviews})</span></span></div><p className="mt-6 text-sm leading-6 text-stone-600">{product.description}</p>
        <section className="mt-7 border-t border-stone-300 pt-6"><div className="flex justify-between"><p className="text-[10px] font-bold tracking-[.14em] uppercase">Renk — {color}</p><span className="text-[10px] text-stone-500">{product.colors.length} seçenek</span></div><div className="mt-3 flex flex-wrap gap-2">{product.colors.map((c) => <button key={c} onClick={() => setColor(c)} className={`border px-4 py-2.5 text-xs transition ${color === c ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 hover:border-stone-700"}`}>{c}</button>)}</div></section>
        <section className="pt-6"><div className="flex justify-between"><p className="text-[10px] font-bold tracking-[.14em] uppercase">Beden — {size}</p><button className="flex items-center gap-1 text-[10px] font-bold tracking-[.1em] text-stone-500 underline underline-offset-4"><Ruler size={12}/> Beden rehberi</button></div><div className="mt-3 grid grid-cols-5 gap-2">{product.sizes.map((s) => <button key={s} onClick={() => setSize(s)} className={`border px-2 py-3 text-[11px] transition ${size === s ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 hover:border-stone-700"}`}>{s.replace("EU ", "")}</button>)}</div></section>
        <div className="mt-6 flex items-center gap-3"><div className="flex h-12 items-center border border-stone-300"><button className="px-3" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Adedi azalt"><Minus size={15}/></button><span className="w-8 text-center text-sm font-bold">{qty}</span><button className="px-3" onClick={() => setQty(qty + 1)} aria-label="Adedi artır"><Plus size={15}/></button></div><button onClick={add} className="quiet-button h-12 flex-1">Sepete ekle <ShoppingBag size={16}/></button></div><button onClick={buy} className="outline-button mt-2 h-12 w-full">Şimdi al</button>
        <div className="mt-7 grid gap-4 border-t border-stone-300 pt-6 text-xs leading-5 text-stone-600"><p className="flex gap-3"><Truck className="shrink-0 text-[#849486]" size={18}/><span><b className="block text-stone-900">Teslimat bilgisi</b>€100 üzeri siparişler ücretsiz standart teslimatla gönderilir.</span></p><p className="flex gap-3"><ShieldCheck className="shrink-0 text-[#849486]" size={18}/><span><b className="block text-stone-900">30 gün içinde iade</b>Parçanız uygun değilse, iade sürecini kolaylaştırıyoruz.</span></p></div>
      </section>
    </div>
    <div className="mt-20 grid gap-10 border-y border-stone-300 py-1 md:grid-cols-3"><Info title="Malzeme / M.01" text={product.material}/><Info title="Kalıp / F.02" text={product.fit}/><Info title="Bakım / C.03" text="Soğuk elde yıkayın veya düşük ısıda kuru temizleme tercih edin. Düz zeminde kurutun."/></div>
    <section className="border-b border-stone-300 py-16"><div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Doğrulanmış alışverişler</p><h2 className="mt-2 text-4xl">Notlar, zamanı<br/><i>geldiğinde burada.</i></h2></div><div className="border-l border-stone-300 pl-6"><p className="text-sm leading-7 text-stone-600">Müşterilerimizin kararlarını gerçek deneyimlere dayandırmak için yalnızca doğrulanmış siparişlerden sonra görüş yayımlıyoruz. Bu parça için henüz yayımlanmış bir doğrulanmış görüş yok.</p></div></div></section>
    <section className="py-16"><div className="flex items-end justify-between"><div><p className="eyebrow">Bununla iyi gider</p><h2 className="mt-2 text-5xl">Aynı <i>ritimde.</i></h2></div><Link href="/shop" className="editorial-link">Tümü <ArrowRight size={15}/></Link></div><div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">{related.map((p) => <ProductCard key={p.id} product={p}/>)}</div></section>
  </div>;
}
function Info({ title, text }: { title: string; text: string }) { return <div className="border-y border-stone-300/70 px-0 py-5 md:border-y-0 md:px-5 first:md:pl-0"><p className="eyebrow">{title}</p><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></div>; }

// Tek içerik dosyası. Mesleki bilgileri güncellemek için yalnızca bu dosyayı düzenleyin.
// Single source of content. To update professional info, edit only this file.

export type Lang = "tr" | "en";
type L = { tr: string; en: string };
const t = (tr: string, en: string): L => ({ tr, en });

export const site = {
  name: "Tolga Gürleyen",
  linkedin: "https://www.linkedin.com/in/tolgagurleyen/",
  photos: {
    portrait: "/photos/portrait.jpg",
    sunset: "/photos/sunset.jpg",
    birthday: "/photos/birthday.jpg",
    disco: "/photos/disco.jpg",
    cologne: "/photos/cologne.jpg",
    teamNight: "/photos/team-night.jpg",
    fairVisitors: "/photos/fair-visitors.jpg",
    fairColleague: "/photos/fair-colleague.jpg",
    fairPartners: "/photos/fair-partners.jpg",
  },
};

export const ui = {
  nav: {
    about: t("Hakkında", "About"),
    journey: t("Yolculuk", "Journey"),
    babyjem: t("Babyjem", "Babyjem"),
    memories: t("Anılar", "Memories"),
  },
  hero: {
    headA: t("İstanbul'dan", "From Istanbul to"),
    headB: t("dünyaya.", "the world."),
    sub: t(
      "Tolga Gürleyen. Babyjem'de uluslararası satış ve pazarlama müdürü, otuz yılı aşkın saha deneyimiyle.",
      "Tolga Gürleyen. International Sales and Marketing Manager at Babyjem, with more than thirty years in the field.",
    ),
    cta: t("Yolculuğu izle", "Follow the journey"),
  },
  about: {
    sticker: t("30+ yıl sahada", "30+ years in the field"),
    board: t("Kalkışlar", "Departures"),
    text: t(
      "Radyoda reklam dakikalarını planlayarak başladım. Sonra fuar alanlarında, zincir mağaza raflarında, uydu bağlantılarında ve bugün bebek ürünlerinde çalıştım. Sektör değişti, iş aynı kaldı: doğru insanları bulmak, güven kurmak ve birlikte büyümek.",
      "I started by scheduling commercial minutes at a radio station. Since then I have worked on fair floors, on retail chain shelves, in satellite broadband and now in baby products. The industry changed, the job stayed the same: find the right people, build trust and grow together.",
    ),
  },
  journey: {
    kicker: t("Yolculuk", "Journey"),
    title: t("Otuz yıl, altı durak.", "Thirty years, six stops."),
  },
  babyjem: {
    title: t("Şimdi: Babyjem.", "Now: Babyjem."),
    sub: t(
      "2019'dan beri uluslararası satış ve pazarlamayı yönetiyorum.",
      "Since 2019 I have led international sales and marketing.",
    ),
    regionsTitle: t("odak bölge", "focus regions"),
    regions: t("Avrupa, Birleşik Krallık, Orta Doğu ve MENA", "Europe, the United Kingdom, the Middle East and MENA"),
    cycleTitle: t("Baştan sona satış", "The whole sales cycle"),
    cycle: t(
      "Yeni distribütör bulmaktan fiyat görüşmesine, kapanıştan sipariş teslimatına kadar tüm süreç.",
      "From finding a new distributor to price talks, closing and order fulfilment.",
    ),
    capA: t("Babyjem standı, Köln", "Babyjem booth, Cologne"),
    capB: t("Fuarda görüşmeler", "Meetings at the fair"),
    capC: t("Stant başında", "At the booth"),
  },
  memories: {
    title: t("Anılardan kareler.", "Frames from memory."),
    items: [
      { photo: "sunset", caption: t("Gün batımında", "At sunset") },
      { photo: "disco", caption: t("Disko gecesi", "Disco night") },
      { photo: "birthday", caption: t("Doğum günü", "Birthday") },
      { photo: "cologne", caption: t("Köln Katedrali", "Cologne Cathedral") },
      { photo: "teamNight", caption: t("Köln'de ekiple akşam", "An evening with the team in Cologne") },
    ],
  },
  strengths: {
    title: t("İyi yaptığım işler.", "What I do well."),
    items: [
      { name: t("Uluslararası satış", "International sales"), note: t("Avrupa, UK, Orta Doğu ve MENA'da yeni iş fırsatları.", "New business across Europe, the UK, the Middle East and MENA.") },
      { name: t("Distribütör ağları", "Distributor networks"), note: t("Bulmak, ilişki kurmak, sözleşmeye taşımak.", "Finding, building relationships, closing.") },
      { name: t("Fuar ve etkinlik yönetimi", "Fairs and events"), note: t("Tüyap'tan CNR Games Week'e, stanttan açılışa.", "From Tüyap to CNR Games Week, booth to opening day.") },
      { name: t("Tedarik zinciri ve lojistik", "Supply chain and logistics"), note: t("Siparişten teslimata kesintisiz akış.", "A steady flow from order to delivery.") },
      { name: t("Müşteri ilişkileri", "Customer relations"), note: t("Çağrı merkezinden hesap yönetimine.", "From the call center to account management.") },
      { name: t("Fiyatlandırma ve planlama", "Pricing and planning"), note: t("Satış hedefleri, kârlılık ve fiyat aksiyonları.", "Sales targets, profitability and pricing actions.") },
    ],
  },
  footer: {
    edu: t("Eğitim", "Education"),
    eduItems: [
      { n: "Old Dominion University", d: t("İngilizce ve İK dersleri, 1997 - 1999", "English and HR courses, 1997 - 1999") },
      { n: t("Anadolu Üniversitesi", "Anadolu University"), d: t("İktisat, 1990 - 1995", "Economics, 1990 - 1995") },
      { n: "TED Ankara Koleji", d: t("Matematik, 1989 - 1990", "Mathematics, 1989 - 1990") },
    ],
    lang: t("Diller", "Languages"),
    langItems: [
      { n: t("Türkçe", "Turkish"), d: t("Ana dil", "Native") },
      { n: t("İngilizce", "English"), d: t("İleri profesyonel", "Full professional") },
    ],
    more: t("Ayrıca", "Also"),
    moreItems: [
      { n: t("İnsan Kaynakları Yönetimi", "Human Resources Management"), d: t("Sertifika", "Certification") },
      { n: "Uydu Dünyası", d: t("Yazılarım", "Articles I wrote") },
    ],
    linkedin: "LinkedIn",
    rights: t("Tüm hakları saklıdır.", "All rights reserved."),
  },
};

export type Chapter = {
  years: L;
  title: L;
  text: L;
  stat: string;
  statLabel: L;
  places: string[];
};

export const chapters: Chapter[] = [
  {
    years: t("1994 - 2001", "1994 - 2001"),
    title: t("Sesten sahaya", "From the airwaves to the field"),
    text: t(
      "Radyo D'de reklam dakikalarını planladım, Turkcell'de müşterileri karşıladım, Telsim'de spor federasyonlarıyla sponsorluk anlaşmaları yürüttüm. Arada ABD'de, Old Dominion Üniversitesi'nde İngilizce ve İK eğitimi aldım.",
      "I scheduled commercial minutes at Radyo D, welcomed customers at Turkcell and ran sponsorship deals with sports federations at Telsim. In between I studied English and HR at Old Dominion University in the USA.",
    ),
    stat: "3",
    statLabel: t("federasyonla sponsorluk, KKTC", "federation sponsorships in the TRNC"),
    places: ["Radyo D", "Turkcell", "Telsim (Vodafone)"],
  },
  {
    years: t("2002 - 2007", "2002 - 2007"),
    title: t("Fuar alanı", "The fair floor"),
    text: t(
      "Tüyap'ta özel etkinlik müdürü olarak fuarları üreticilere ve ithalatçılara tanıttım; reklam, katalog ve alan satışlarını, satış öncesinden satış sonrası desteğe kadar yönettim.",
      "At Tüyap, as special event manager, I promoted fairs to manufacturers and importers and handled advertising, catalogue and space sales from pre-sales through after-sales support.",
    ),
    stat: "12",
    statLabel: t("fuar açılışı: otomotiv, otobüs, bahçe, yat", "fairs opened: automotive, bus, garden, yacht"),
    places: ["Tüyap Fuarcılık"],
  },
  {
    years: t("2007 - 2012", "2007 - 2012"),
    title: t("Rafa giden ürünler", "Products on the shelf"),
    text: t(
      "Çin'den ürün bulup ithal ettim, Praktiker ile ilk zincir mağaza anlaşmasını yaptım. MTV Elektronik'te tam ortak olarak Bauhaus, Carrefour ve A101 gibi zincirlerle, Hepsiburada gibi e-ticaret kanallarıyla satış ağını sıfırdan kurdum.",
      "I sourced and imported products from China and signed my first chain-store deal with Praktiker. As a full partner at MTV Elektronik I built the sales network from scratch with chains such as Bauhaus, Carrefour and A101 and e-commerce channels such as Hepsiburada.",
    ),
    stat: "100+",
    statLabel: t("üründe zincir mağaza satışı", "products sold through retail chains"),
    places: ["Steco Engineering", "MTV Elektronik"],
  },
  {
    years: t("2012 - 2016", "2012 - 2016"),
    title: t("Gökyüzünden bağlantı", "Connection from the sky"),
    text: t(
      "ICT Telecom'da KU ve C Band uydu kapasitesi sattım, SatNet'te Türkiye, Suriye ve Irak bölgesinde yeni KA Band teknolojisiyle geniş bant satışlarını yönettim.",
      "At ICT Telecom I sold KU and C Band satellite capacity. At SatNet I led broadband sales across Turkey, Syria and Iraq on the new KA Band technology.",
    ),
    stat: "1.500",
    statLabel: t("KA Band abonesi yönetimi", "KA Band subscribers managed"),
    places: ["ICT Telecommunication", "SatNet Telekomünikasyon"],
  },
  {
    years: t("2017 - 2019", "2017 - 2019"),
    title: t("Sahne ve ihracat", "The stage and export"),
    text: t(
      "CNR Holding'de CNR Games Week ve MÜSİAD Expo satışlarını yönettim. Ardından Nilsan'da ihracat ve distribütör yönetimine geçtim.",
      "At CNR Holding I led sales for CNR Games Week and MÜSİAD Expo, then moved into export and distributor management at Nilsan.",
    ),
    stat: "33.000",
    statLabel: t("ziyaretçi, CNR Games Week 2018", "visitors, CNR Games Week 2018"),
    places: ["CNR Holding", "Nilsan"],
  },
  {
    years: t("2019 - Bugün", "2019 - Today"),
    title: t("Babyjem", "Babyjem"),
    text: t(
      "Bebek ürünlerinde yeni distribütörler buluyor, karar vericilerle ilişki kuruyor, satış sürecini baştan sona yönetiyor ve uluslararası fuar standlarını planlıyorum.",
      "In baby products I find new distributors, build relationships with decision makers, run the sales process end to end and plan international trade fair booths.",
    ),
    stat: "4",
    statLabel: t("odak bölge", "focus regions"),
    places: ["Babyjem"],
  },
];

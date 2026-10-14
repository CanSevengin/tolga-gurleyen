// Tek içerik dosyası. Mesleki bilgileri güncellemek için yalnızca bu dosyayı düzenleyin.
// Single source of content. To update professional info, edit only this file.

export type Lang = "tr" | "en";

export const site = {
  name: "Tolga Gürleyen",
  linkedin: "https://www.linkedin.com/in/tolgagurleyen/",
  email: "tolgagurleyen@hotmail.com",
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

type L = { tr: string; en: string };
const t = (tr: string, en: string): L => ({ tr, en });

export const ui = {
  nav: {
    story: t("Hikaye", "Story"),
    work: t("Kariyer", "Career"),
    fairs: t("Fuarlar", "Fairs"),
    memories: t("Anılar", "Memories"),
    contact: t("İletişim", "Contact"),
  },
  hero: {
    hello: t("Merhaba, ben", "Hi, I'm"),
    role: t("Babyjem Uluslararası Satış ve Pazarlama Müdürü", "International Sales and Marketing Manager at Babyjem"),
    headline: t("Markaları dünyayla buluşturuyorum.", "I connect brands with the world."),
    words: [
      t("İhracat", "Export"),
      t("Distribütör ağları", "Distributor networks"),
      t("Fuarlar", "Trade fairs"),
      t("Ortaklıklar", "Partnerships"),
      t("Büyüme", "Growth"),
    ],
    cta1: t("Kariyerime göz at", "Explore my career"),
    cta2: t("LinkedIn'de bağlan", "Connect on LinkedIn"),
    scroll: t("Kaydır", "Scroll"),
    location: t("İstanbul, Türkiye", "Istanbul, Türkiye"),
  },
  ticker: [
    t("Avrupa", "Europe"),
    t("Birleşik Krallık", "United Kingdom"),
    t("Orta Doğu", "Middle East"),
    t("MENA", "MENA"),
    t("Distribütör Geliştirme", "Distributor Development"),
    t("Uluslararası Fuarlar", "International Trade Fairs"),
    t("Hesap Yönetimi", "Account Management"),
    t("Tedarik Zinciri", "Supply Chain"),
  ],
  story: {
    kicker: t("Hikaye", "The story"),
    text: t(
      "Radyo reklam planlamasından küresel satışa uzanan otuz yılı aşkın bir yolculuk. Her adımda aynı şey: insanları dinlemek, güven kurmak ve birlikte büyümek. Bugün Babyjem için yeni pazarlar açıyor, distribütör ağları kuruyor ve markayı dünyanın dört bir yanındaki raflara taşıyorum.",
      "A journey of more than thirty years, from radio ad scheduling to global sales. The same thing at every step: listen to people, build trust and grow together. Today I open new markets for Babyjem, build distributor networks and bring the brand to shelves around the world.",
    ),
  },
  stats: {
    items: [
      { value: 30, suffix: "+", label: t("yıllık iş deneyimi", "years of experience") },
      { value: 12, suffix: "", label: t("açılışı yapılan fuar (Tüyap)", "fairs opened (Tüyap)") },
      { value: 33000, suffix: "", label: t("ziyaretçi, CNR Games Week 2018", "visitors, CNR Games Week 2018") },
      { value: 4, suffix: "", label: t("odak bölge: Avrupa, UK, Orta Doğu, MENA", "focus regions: Europe, UK, Middle East, MENA") },
    ],
  },
  work: {
    kicker: t("Kariyer", "Career"),
    title: t("Her durak bir ders, her ders bir güç.", "Every stop a lesson, every lesson a strength."),
    now: t("Şimdi", "Now"),
    hint: t("Detay için kartlara dokun", "Tap a card for details"),
  },
  fairs: {
    kicker: t("Sahadan", "From the field"),
    title: t("Fuar standı, benim ikinci ofisim.", "The fair booth, my second office."),
    text: t(
      "Distribütörlerle yüz yüze görüşmek, ürünü elle tutturmak ve ilişkiyi masada başlatmak. Uluslararası fuarlar işimin en enerjik tarafı.",
      "Meeting distributors face to face, letting them touch the product and starting the relationship at the table. International trade fairs are the most energetic part of my work.",
    ),
    caption: t("Babyjem standı, Köln", "Babyjem booth, Cologne"),
  },
  memories: {
    kicker: t("Anılar", "Memories"),
    title: t("İşin dışında, hayat dolu.", "Beyond work, full of life."),
    items: [
      { photo: "sunset", caption: t("Gün batımı, deniz ve güzel insanlar", "Sunset, sea and good people") },
      { photo: "disco", caption: t("Disko gecesi, bol kahkaha", "Disco night, lots of laughter") },
      { photo: "birthday", caption: t("Mumlar, havai fişekler, kocaman bir pasta", "Candles, sparklers and a huge cake") },
      { photo: "cologne", caption: t("Köln'de katedralin önünde", "In front of the cathedral in Cologne") },
      { photo: "teamNight", caption: t("Köln sokaklarında ekiple akşam", "An evening with the team in Cologne") },
    ],
  },
  skills: {
    kicker: t("Yetkinlikler", "Strengths"),
    title: t("Neyi iyi yaparım?", "What I do best"),
    items: [
      t("Uluslararası satış ve iş geliştirme", "International sales and business development"),
      t("Distribütör ve hesap yönetimi", "Distributor and account management"),
      t("Fuar ve etkinlik yönetimi", "Trade fair and event management"),
      t("Tedarik zinciri ve lojistik", "Supply chain and logistics"),
      t("Müşteri hizmetleri yönetimi", "Customer service management"),
      t("Operasyon ve proje yönetimi", "Operations and project management"),
      t("Fiyatlandırma ve satış planlama", "Pricing and sales planning"),
      t("Stratejik ortaklıklar", "Strategic partnerships"),
    ],
  },
  edu: {
    kicker: t("Eğitim ve diller", "Education and languages"),
    items: [
      {
        title: t("Old Dominion University, ABD", "Old Dominion University, USA"),
        sub: t("İngilizce dersleri ve İK kursu (1998 - 1999) · English Language Center sertifikası (1997 - 1998)", "English classes and HR course (1998 - 1999) · English Language Center certificate (1997 - 1998)"),
      },
      { title: t("Anadolu Üniversitesi", "Anadolu University"), sub: t("İktisat (1990 - 1995)", "Economics (1990 - 1995)") },
      { title: t("TED Ankara Koleji", "TED Ankara College"), sub: t("Matematik (1989 - 1990)", "Mathematics (1989 - 1990)") },
    ],
    langs: [
      { name: t("Türkçe", "Turkish"), level: t("Ana dil", "Native") },
      { name: t("İngilizce", "English"), level: t("İleri profesyonel", "Full professional") },
    ],
    cert: t("Sertifika: İnsan Kaynakları Yönetimi", "Certification: Human Resources Management"),
  },
  contact: {
    kicker: t("İletişim", "Contact"),
    title: t("Birlikte büyüyelim.", "Let's grow together."),
    text: t(
      "Yeni pazarlar, distribütörlük ve iş birlikleri için yazın. Kahve her zaman benden.",
      "Write to me about new markets, distribution and partnerships. Coffee is always on me.",
    ),
    mail: t("E-posta gönder", "Send an email"),
    li: t("LinkedIn profilim", "My LinkedIn profile"),
    rights: t("Tüm hakları saklıdır.", "All rights reserved."),
  },
};

export type Job = {
  id: string;
  period: L;
  company: string;
  title: L;
  place: string;
  summary: L;
  points: L[];
  color: string;
  current?: boolean;
};

export const jobs: Job[] = [
  {
    id: "babyjem",
    period: t("Eylül 2019 - Günümüz", "Sep 2019 - Present"),
    company: "Babyjem",
    title: t("Uluslararası Satış ve Pazarlama Müdürü", "International Sales and Marketing Manager"),
    place: "İstanbul",
    summary: t(
      "Bebek ürünlerinde Avrupa, Birleşik Krallık, Orta Doğu ve MENA pazarlarında yeni iş fırsatları yaratıyor ve satış sürecini uçtan uca yönetiyorum.",
      "I create new business in baby products across Europe, the UK, the Middle East and MENA, and run the sales process end to end.",
    ),
    points: [
      t("Yeni distribütörleri bulmak, karar vericilerle ilişki kurmak ve güçlü bir müşteri adayı havuzu yönetmek", "Finding new distributors, building relationships with decision makers and maintaining a strong prospect pipeline"),
      t("Fırsattan sözleşmeye tüm satış döngüsü: ihtiyaç analizi, fiyat görüşmeleri, kapanış", "The full sales cycle from opportunity to contract: needs analysis, pricing talks, closing"),
      t("Mevcut müşterilerde geçmiş alım analizi, boşluk tespiti ve yeni fırsatlar", "Purchase history and gap analysis with existing customers, and new opportunities"),
      t("Uluslararası fuar standlarının planlanması ve yürütülmesi", "Planning and running international trade fair booths"),
      t("Müşteri hizmetleri ve üretim planlamasıyla sipariş teslimatının uyumu", "Aligning order fulfilment with customer service and production scheduling"),
    ],
    color: "var(--ink)",
    current: true,
  },
  {
    id: "nilsan",
    period: t("Nisan 2019 - Ekim 2019", "Apr 2019 - Oct 2019"),
    company: "Nilsan",
    title: t("Dış Ticaret Mentoru / İhracat Yönetimi", "Foreign Trade Mentor / Export Management"),
    place: "İstanbul",
    summary: t(
      "Yüzme, antrenman ve dalış paletlerinde uluslararası satış ve iş geliştirme.",
      "International sales and business development for swimming, training and diving fins.",
    ),
    points: [
      t("Ülke distribütörleriyle iletişim, yeni bayilerle görüşmeler", "Communication with country distributors and meetings with new resellers"),
      t("OEM ürün yönetimi ve ihracat operasyonları", "OEM product management and export operations"),
    ],
    color: "var(--ink)",
  },
  {
    id: "cnr",
    period: t("Ocak 2017 - Eylül 2018", "Jan 2017 - Sep 2018"),
    company: "CNR Holding",
    title: t("Satış Müdürü", "Sales Manager"),
    place: "İstanbul",
    summary: t(
      "CNR Games Week 2017 ve 2018 ile MÜSİAD Expo 2018 gibi büyük organizasyonlarda satış sorumluluğu.",
      "Sales responsibility for major events such as CNR Games Week 2017 and 2018 and MÜSİAD Expo 2018.",
    ),
    points: [
      t("2018'de 33.000 ziyaretçi, 3.500 m² net satış ve 50'den fazla influencer ile başarı hikâyesi", "A success story in 2018: 33,000 visitors, 3,500 m² of net sales and over 50 influencers"),
    ],
    color: "var(--ink)",
  },
  {
    id: "satnet",
    period: t("Ocak 2013 - Ekim 2016", "Jan 2013 - Oct 2016"),
    company: "SatNet Telekomünikasyon",
    title: t("Geniş Bant Pazarlama ve Satış Müdürü", "Broadband Marketing and Sales Manager"),
    place: "İstanbul",
    summary: t(
      "Türkiye, Suriye ve Irak bölgesinde uydu geniş bant satışları. Şirketin başlangıcından itibaren KA Band teknolojisiyle yaklaşık 1.500 aboneyi yönettim.",
      "Satellite broadband sales across Turkey, Syria and Iraq. From the company's start I managed around 1,500 subscribers on KA Band technology.",
    ),
    points: [
      t("Ulusal ve uluslararası bayi ağının kurulması, proje satışları", "Building the national and international reseller network and project sales"),
      t("Haftalık satış, proje ve fırsat raporlaması", "Weekly reporting on sales, projects and opportunities"),
    ],
    color: "var(--ink)",
  },
  {
    id: "ict",
    period: t("Ocak 2012 - Ocak 2013", "Jan 2012 - Jan 2013"),
    company: "ICT Telecommunication",
    title: t("İş Geliştirme Müdürü", "Business Development Manager"),
    place: "İstanbul",
    summary: t(
      "KU Band ve C Band kapasite ön satış faaliyetleri, Orta Doğu kapasite görüşmeleri.",
      "KU Band and C Band capacity pre-sales and Middle East capacity meetings.",
    ),
    points: [
      t("TV kanalları, bankalar ve uydu operatörleriyle görüşmeler, çeşitli ihalelere katılım", "Meetings with TV channels, banks and satellite operators, participation in several tenders"),
      t("Anten üreticileriyle distribütörlük anlaşmaları", "Distributor agreements with antenna manufacturers"),
    ],
    color: "var(--ink)",
  },
  {
    id: "mtv",
    period: t("Mart 2009 - Ocak 2012", "Mar 2009 - Jan 2012"),
    company: "MTV Elektronik",
    title: t("Tedarik Zinciri / Satış Müdürü", "Supply Chain / Sales Manager"),
    place: "İstanbul",
    summary: t(
      "Tam ortak olarak şirketin zincir mağaza ve e-ticaret kanallarını sıfırdan kurdum.",
      "As a full equity partner I built the company's retail chain and e-commerce channels from scratch.",
    ),
    points: [
      t("Bauhaus, Carrefour, Praktiker, Özdilek, A101 gibi zincirlerle 100'den fazla ürün", "More than 100 products with chains such as Bauhaus, Carrefour, Praktiker, Özdilek and A101"),
      t("Hepsiburada, Limango, Markafoni gibi e-ticaret ve kampanya kanalları", "E-commerce and campaign channels such as Hepsiburada, Limango and Markafoni"),
      t("Hong Kong fuarında Tayvanlı üreticiyle anlaşma ve Türkiye distribütörlüğü", "A deal with a Taiwanese manufacturer at a Hong Kong fair and distribution in Turkey"),
    ],
    color: "var(--ink)",
  },
  {
    id: "steco",
    period: t("Mart 2007 - Şubat 2009", "Mar 2007 - Feb 2009"),
    company: "Steco Engineering",
    title: t("İthal Ürünler Satış ve Pazarlama Müdürü", "Imported Products Sales and Marketing Manager"),
    place: "İstanbul",
    summary: t(
      "Çin'den ürün bulma, ithalat süreçleri ve zincir mağaza satın alma ekipleriyle iletişim.",
      "Sourcing products from China, import procedures and relationships with chain store buyers.",
    ),
    points: [
      t("Praktiker ile ilk büyük zincir mağaza anlaşması", "First major chain store deal with Praktiker"),
      t("Yurt içinde 9 farklı fuar organizasyonunda katılımcı olarak yer alma", "Took part in 9 different fairs in Turkey as an exhibitor"),
    ],
    color: "var(--ink)",
  },
  {
    id: "tuyap",
    period: t("Haziran 2002 - Ocak 2007", "Jun 2002 - Jan 2007"),
    company: "Tüyap Fuarcılık",
    title: t("Özel Etkinlik Müdürü", "Special Event Manager"),
    place: "İstanbul",
    summary: t(
      "Fuarların üretici ve ithalatçılara tanıtımı, fuar alanı reklam satışları, ön satıştan satış sonrasına tüm süreç.",
      "Promoting fairs to manufacturers and importers, advertising sales in the fair area, and the full process from pre-sales to after-sales.",
    ),
    points: [
      t("5 yılda 2 Otomotiv, 1 Otobüs, 2 Bahçe ve 7 Yat fuarının başarıyla açılışı", "In 5 years successfully opened 2 Automotive, 1 Bus, 2 Garden and 7 Yacht fairs"),
    ],
    color: "var(--ink)",
  },
  {
    id: "telsim",
    period: t("Mayıs 1999 - Mart 2001", "May 1999 - Mar 2001"),
    company: "Telsim (Vodafone)",
    title: t("Yeni Projeler ve Spor Federasyonları PR Uzmanı", "New Projects and PR Specialist for Sports Federations"),
    place: "İstanbul, Lefkoşa",
    summary: t(
      "KKTC futbol, basketbol ve hentbol federasyonlarıyla sponsorluk anlaşmaları, kupa törenleri ve festival organizasyonları.",
      "Sponsorship agreements with the TRNC football, basketball and handball federations, cup ceremonies and festival organisations.",
    ),
    points: [
      t("Masa tenisi takımının menajerliği, Türkiye ve KKTC'de sezon maçları", "Managed the table tennis team, with season matches in Turkey and Cyprus"),
      t("Plaj voleybolu, sokak basketbolu ve play-off turnuvaları", "Beach volleyball, street basketball and play-off tournaments"),
    ],
    color: "var(--ink)",
  },
  {
    id: "turkcell",
    period: t("1995 - 1997", "1995 - 1997"),
    company: "Turkcell",
    title: t("Çağrı Merkezi Temsilcisi", "Call Center Representative"),
    place: "İstanbul",
    summary: t(
      "İlk işim. Satış sonrası destekte deneyimli temsilci, ardından yeni başlayanlara oryantasyon uzmanı oldum.",
      "My first job. I became an experienced after-sales support agent, then orientation specialist for new hires.",
    ),
    points: [
      t("Fuarlarda şirketin yüzü olarak ziyaretçileri karşılamak", "Being the face of the company at fairs"),
    ],
    color: "var(--ink)",
  },
  {
    id: "radyod",
    period: t("1994 - 1995", "1994 - 1995"),
    company: "Radyo D",
    title: t("Reklam Yayın Planlama ve Operasyon Uzmanı", "Commercial Schedule Planner and Operation Specialist"),
    place: "İstanbul",
    summary: t(
      "Programların reklam dakikalarını haftalık planladım ve canlı yayın masasına destek verdim.",
      "I planned the weekly commercial minutes of the programmes and supported the live programme desk.",
    ),
    points: [],
    color: "var(--ink)",
  },
];

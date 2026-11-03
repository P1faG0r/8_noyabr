/* ============================================================
   RAYONLAR — hər rayon bir obyektdir.
      id        — unikal ad (timeline.js-dəki regionIds ilə eyni olmalıdır)
      name      — ad
      area      — qısa coğrafi mövqe
      badge     — kartdakı qısa etiket
      summary   — kartdakı 1–2 cümlə
      history   — ətraflı tarixi məlumat (siyahı: hər element ayrı abzas)
      image     — foto yolu; null olarsa avtomatik: assets/images/regions/<id>.jpg
      gallery   — [{src, caption, credit}]
   ============================================================ */
window.QARABAG = window.QARABAG || {};
window.QARABAG.regions = [
  {id:"cebrayil",name:"Cəbrayıl",area:"Cənub, Araz çayı boyu, İran sərhədi yaxınlığı",badge:"Şəhər — 4 oktyabr 2020",
   summary:"Vətən müharibəsində azad edilən ilk şəhər.",
   history:["Cəbrayıl şəhəri 2020-ci il oktyabrın 4-də işğaldan azad edildi.","Xudafərin körpüsü ətrafı 18 oktyabrda, rayonun çoxsaylı kəndləri oktyabr–noyabr aylarında azad olundu."],image:null,gallery:[]},
  {id:"fuzuli",name:"Füzuli",area:"Qarabağın düzənlik hissəsi",badge:"Şəhər — 17 oktyabr 2020",
   summary:"Füzuli şəhəri 17 oktyabrda işğaldan azad edildi.",
   history:["Rayonun Qaradağlı, Xatunbulaq, Qarakollu kəndləri 14 oktyabrda, Arış kəndi 15 oktyabrda azad edildi.","Füzuli şəhərinin azad edilməsi 17 oktyabrda elan olundu."],image:null,gallery:[]},
  {id:"zengilan",name:"Zəngilan",area:"Cənub-qərb, İranla sərhəd",badge:"Şəhər — 20 oktyabr 2020",
   summary:"Zəngilan şəhəri və Ağbənd qəsəbəsi azad edilərək İranla sərhəd xətti nəzarətə götürüldü.",
   history:["Zəngilan şəhəri 20 oktyabrda azad edildi.","21 oktyabrda Mincivan qəsəbəsi və 13 kənd, 22 oktyabrda Ağbənd qəsəbəsi azad edildi; Azərbaycan–İran sərhədinin 132 kilometrlik hissəsi nəzarətə götürüldü."],image:null,gallery:[]},
  {id:"qubadli",name:"Qubadlı",area:"Cənub-qərb, Zəngilan və Laçın arasında",badge:"Şəhər — 25 oktyabr 2020",
   summary:"Qubadlı şəhəri 25 oktyabrda işğaldan azad edildi.",
   history:["Oktyabrın 23-də rayonun Zilanlı, Kürd Mahrızlı, Muğanlı, Alaqurşaq kəndləri azad olundu.","Qubadlı şəhəri və yeddi kənd 25 oktyabrda azad edildi."],image:null,gallery:[]},
  {id:"xocavend",name:"Xocavənd",area:"Qarabağın mərkəzi-cənub hissəsi",badge:"Hadrut — 9 oktyabr 2020",
   summary:"Hadrut qəsəbəsi və bir sıra kəndlər 2020-ci ildə azad edildi; rayonun qalan hissəsi 2023-cü ildə tam nəzarətə keçdi.",
   history:["Hadrut qəsəbəsi və 8 kənd 9 oktyabrda azad edildi.","Noyabrın 7-də Ataqut və Tsakuri kəndləri azad edildi.","Rayonun ərazisinin tam şəkildə Azərbaycanın nəzarətinə keçməsi 2023-cü ilin sentyabrında keçirilən lokal antiterror tədbirləri nəticəsində mümkün oldu. 2023-cü il oktyabrın 15-də Prezident İlham Əliyev Xocavənd şəhərində Azərbaycan Respublikasının Dövlət Bayrağını ucaltdı.","20 sentyabr hər il «Xankəndi, Xocalı, Xocavənd və Ağdərə şəhərləri günü» kimi qeyd olunur (Prezidentin 18 sentyabr 2024-cü il tarixli Sərəncamı)."],image:null,gallery:[]},
  {id:"susa",name:"Şuşa",area:"Qarabağ dağlıq hissəsi, qala-şəhər",badge:"Şəhər — 8 noyabr 2020",
   summary:"Qarabağın tarixi və mədəniyyət mərkəzi; 8 Noyabr — Zəfər Günü Şuşanın azad edilməsi ilə bağlıdır.",
   history:["Prezident İlham Əliyev Şuşanın azad edilməsini 8 noyabr 2020-ci il səhər saatlarında elan etdi.","Bu tarix Azərbaycanda Zəfər Günü kimi qeyd olunur."],image:"assets/images/shusha.jpg",gallery:[]},
  {id:"terter",name:"Tərtər",area:"Şimal-şərq cəbhə zonası",badge:"Suqovuşan — 3 oktyabr 2020",
   summary:"Suqovuşan qəsəbəsi və Talış kəndi 3 oktyabrda azad edildiyi elan olundu.",
   history:["3 oktyabr 2020-ci ildə Prezident Suqovuşan qəsəbəsinin və Talış kəndinin işğaldan azad edildiyini bəyan etdi."],image:null,gallery:[]},
  {id:"agdam",name:"Ağdam",area:"Qarabağın şərq düzənliyi",badge:"20 noyabr 2020",
   summary:"10 noyabr bəyanatına əsasən Ağdamın işğal altındakı hissəsi Azərbaycana qaytarıldı.",
   history:["Üçtərəfli bəyanata əsasən Ağdam rayonunun işğal altındakı hissəsi 2020-ci il noyabrın 20-də təhvil verildi."],image:null,gallery:[]},
  {id:"kelbecer",name:"Kəlbəcər",area:"Qərb, dağlıq ərazi",badge:"25 noyabr 2020",
   summary:"Kəlbəcər rayonu bəyanata əsasən 25 noyabrda Azərbaycana təhvil verildi.",
   history:["Üçtərəfli bəyanata əsasən Kəlbəcər rayonu 2020-ci il noyabrın 25-də təhvil verildi."],image:null,gallery:[]},
  {id:"lacin",name:"Laçın",area:"Qərb, Qubadlı ilə həmsərhəd",badge:"1 dekabr 2020 (rayon)",
   summary:"Laçın rayonu bəyanata əsasən 1 dekabrda təhvil verildi; Laçın şəhəri 2022-ci ildə.",
   history:["Üçtərəfli bəyanata əsasən Laçın rayonu 2020-ci il dekabrın 1-də Azərbaycana təhvil verildi.","Layihənin xəritə məlumatına görə Laçın şəhəri, Zabux və Sus kəndləri 26 avqust 2022-də qaytarılıb."],image:null,gallery:[]},
  {id:"agdere",name:"Ağdərə",area:"Şimal-qərb Qarabağ",badge:"Sentyabr 2023",
   summary:"2023-cü il sentyabrın 19–20-də keçirilən lokal antiterror tədbirləri nəticəsində Azərbaycanın suverenliyi bərpa olunan rayonlardan biri.",
   history:["2023-cü il sentyabrın 19-da, təxminən saat 13:00 radələrində Azərbaycan Ordusu Qarabağda lokal xarakterli antiterror tədbirlərinə başladı. Tədbirlər cəmi 23 saat çəkdi; sentyabrın 20-də əldə olunan razılaşmaya əsasən erməni silahlı birləşmələri tərksilah edildi və Azərbaycan Qarabağda suverenliyini tam bərpa etdi.","2023-cü il oktyabrın 15-də Prezident İlham Əliyev Ağdərə şəhərində Azərbaycan Respublikasının Dövlət Bayrağını ucaltdı.","20 sentyabr hər il Azərbaycanda Dövlət Suverenliyi Günü, eyni zamanda Xankəndi, Xocalı, Xocavənd və Ağdərə şəhərləri günü kimi qeyd olunur (Prezidentin 18 sentyabr 2024-cü il tarixli Sərəncamı)."],image:null,gallery:[]},
  {id:"xocali",name:"Xocalı",area:"Qarabağın mərkəzi hissəsi",badge:"Sentyabr 2023",
   summary:"1992-ci ildə soyqırımı faciəsi yaşanmış Xocalıda suverenlik 2023-cü ilin sentyabrında bərpa olundu; sakinlərin qayıdışı 2024-cü ildə başladı.",
   history:["Xocalı şəhəri 2023-cü il sentyabrın 19–20-də Azərbaycan Ordusunun keçirdiyi lokal antiterror tədbirləri nəticəsində separatçılardan təmizləndi.","2023-cü il oktyabrın 15-də Prezident İlham Əliyev Xocalı şəhərində, Əsgəran qəsəbəsində və Sərsəng su anbarı ərazisində Azərbaycan Respublikasının Dövlət Bayrağını ucaltdı.","2024-cü il mayın 28-dən etibarən keçmiş məcburi köçkünlərin Xocalıya qayıdışı başlandı.","Xocalı şəhəri 1992-ci il fevralın 26-da baş verən Xocalı soyqırımı ilə də tanınır."],image:null,gallery:[]},
  {id:"xankendi",name:"Xankəndi",area:"Qarabağın mərkəzi hissəsi",badge:"Sentyabr 2023",
   summary:"2023-cü il sentyabrın 19–20-də keçirilən antiterror tədbirlərindən sonra Azərbaycanın tam nəzarətinə keçən şəhər.",
   history:["Xankəndi şəhəri 2023-cü ilin sentyabrında Azərbaycan Ordusunun keçirdiyi lokal antiterror tədbirlərindən sonra Kərkicahan qəsəbəsi ilə birlikdə separatçılardan azad edildi.","2023-cü il oktyabrın 15-də Prezident İlham Əliyev Xankəndi şəhərində və Kərkicahan qəsəbəsində Azərbaycan Respublikasının Dövlət Bayrağını ucaltdı.","2023-cü il noyabrın 8-də Xankəndidə hərbi parad keçirildi.","2023-cü il dekabrın 21-də Azərbaycan kubokunun 1/8 final görüşü Xankəndi stadionunda oynandı (Ağdamın «Qarabağ» və Bakının komandaları arasında).","20 sentyabr Xankəndidə də Şəhər Günü kimi qeyd olunur."],image:null,gallery:[]}
];
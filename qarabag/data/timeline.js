/* ============================================================
   ZAMAN ŞKALASI — 27 sentyabr – 10 noyabr 2020
   Bu fayl saytın əsas məlumat mənbəyidir. Sıra = saytda göstərilmə sırası.

   Sahələr:
     id          — unikal ad; foto üçün standart fayl adı da buradan götürülür
     day         — gün nömrəsi (1–44). 10 noyabr üçün null (yekun)
     date        — "YYYY-AA-GG"
     title       — başlıq
     short       — kartdakı qısa mətn
     description — ətraflı mətn
     places      — yer adları (siyahı)
     regionIds   — regions.js-dəki id-lər (siyahı, boş ola bilər)
     image       — foto yolu. null olarsa avtomatik axtarılır:
                   assets/images/timeline/<id>.jpg   (məs. day-09.jpg)
     gallery     — əlavə fotolar: [{src:"...", caption:"...", credit:"..."}]
     facts       — vacib faktlar (mətn siyahısı)
     sources     — mənbələr: [{label:"...", url:"https://..."}]
     status      — "sourced" (mənbə var) | "draft" (mətn var, mənbə yoxdur) | "todo" (doldurulmalıdır)
     hidden      — true olarsa gün saytda görünmür
   ============================================================ */
window.QARABAG = window.QARABAG || {};
window.QARABAG.timeline = [
 {
  "id": "day-01",
  "day": 1,
  "date": "2020-09-27",
  "title": "Vətən müharibəsinin başlanması",
  "short": "Azərbaycan Ordusu Ermənistan silahlı qüvvələrinin genişmiqyaslı hücum və atəşkəs pozuntularına cavab olaraq cəbhənin müxtəlif istiqamətlərində əks-hücum əməliyyatına başladı. Hərbi vəziyyət elan olundu. Gün…",
  "description": "Azərbaycan Ordusu Ermənistan silahlı qüvvələrinin genişmiqyaslı hücum və atəşkəs pozuntularına cavab olaraq cəbhənin müxtəlif istiqamətlərində əks-hücum əməliyyatına başladı. Hərbi vəziyyət elan olundu. Gün ərzində Murovdağ istiqamətində strateji yüksəkliklər, o cümlədən Murov zirvəsi nəzarətə götürüldü.",
  "status": "sourced",
  "places": [
   "Murovdağ"
  ],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Murovdağ istiqamətində əməliyyatlar başlandı; 27 sentyabr sonradan Anım Günü elan edildi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Vətən müharibəsinin xronikası: 27 sentyabr",
    "url": "https://azertag.az/xeber/veten_muharibesinin_xronikasi_27_sentyabr-1886223"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-02",
  "day": 2,
  "date": "2020-09-28",
  "title": "Qismən səfərbərlik elan edildi",
  "short": "Prezidentin sərəncamı ilə Azərbaycanda sentyabrın 28-dən qismən səfərbərlik elan edildi. Cəbhəboyu ərazilərdə döyüşlər davam etdi; ölkənin müdafiə və səfərbərlik tədbirləri gücləndirildi.",
  "description": "Prezidentin sərəncamı ilə Azərbaycanda sentyabrın 28-dən qismən səfərbərlik elan edildi. Cəbhəboyu ərazilərdə döyüşlər davam etdi; ölkənin müdafiə və səfərbərlik tədbirləri gücləndirildi.",
  "status": "sourced",
  "places": [],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Sərəncama əsasən hərbi xidmətə çağırış və səfərbərlik tədbirləri həyata keçirildi. Döyüş əməliyyatları cəbhənin bir neçə istiqamətində davam edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-03",
  "day": 3,
  "date": "2020-09-29",
  "title": "Cəbhənin müxtəlif istiqamətlərində döyüşlər",
  "short": "Azərbaycan Ordusunun əks-hücum əməliyyatı şimal, mərkəz və cənub istiqamətlərində davam etdi. Tərtər-Ağdərə, Murovdağ və Füzuli-Cəbrayıl istiqamətlərində artilleriya və mövqe döyüşləri aparıldı. Bu tarix…",
  "description": "Azərbaycan Ordusunun əks-hücum əməliyyatı şimal, mərkəz və cənub istiqamətlərində davam etdi. Tərtər-Ağdərə, Murovdağ və Füzuli-Cəbrayıl istiqamətlərində artilleriya və mövqe döyüşləri aparıldı. Bu tarix üzrə ayrıca yaşayış məntəqəsinin azad edilməsi barədə təsdiqlənmiş məlumat göstərilmir.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "terter",
   "fuzuli",
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Döyüşlər bir neçə cəbhə istiqamətində davam etdi; yaşayış məntəqələrinin adları yalnız təsdiqlənmiş elanlara əsasən ayrıca qeyd olunur."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-04",
  "day": 4,
  "date": "2020-09-30",
  "title": "Əks-hücum əməliyyatı davam edir",
  "short": "Azərbaycan Ordusu cəbhə xətti boyunca əməliyyatları davam etdirərək mövqelərin və strateji yüksəkliklərin ələ keçirilməsi uğrunda döyüşlər apardı. Tərtər-Ağdərə və Füzuli-Cəbrayıl istiqamətlərində ağır…",
  "description": "Azərbaycan Ordusu cəbhə xətti boyunca əməliyyatları davam etdirərək mövqelərin və strateji yüksəkliklərin ələ keçirilməsi uğrunda döyüşlər apardı. Tərtər-Ağdərə və Füzuli-Cəbrayıl istiqamətlərində ağır döyüşlər gedirdi.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "terter",
   "fuzuli",
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu gün üçün ayrıca azad edilmiş yaşayış məntəqəsi barədə mənbədə dəqiqləşdirilmiş qeyd yoxdur; hadisə davam edən döyüşlər kimi təqdim olunur."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-05",
  "day": 5,
  "date": "2020-10-01",
  "title": "Cəbhəboyu döyüşlər və mülki əhalinin təhlükəsizliyi",
  "short": "Döyüşlər cəbhənin müxtəlif istiqamətlərində davam etdi. Cəbhəyanı yaşayış məntəqələri artilleriya atəşinə məruz qalır, mülki əhalinin təhlükəsizliyi ilə bağlı tədbirlər görülürdü.",
  "description": "Döyüşlər cəbhənin müxtəlif istiqamətlərində davam etdi. Cəbhəyanı yaşayış məntəqələri artilleriya atəşinə məruz qalır, mülki əhalinin təhlükəsizliyi ilə bağlı tədbirlər görülürdü.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Cəbhəyanı yaşayış məntəqələrində təhlükəsizlik vəziyyəti gərgin olaraq qalırdı."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-06",
  "day": 6,
  "date": "2020-10-02",
  "title": "Ağır döyüşlər davam edir",
  "short": "Azərbaycan Ordusu cənub və şimal istiqamətlərində əks-hücum əməliyyatını davam etdirdi. Füzuli-Cəbrayıl xəttində və Tərtər-Ağdərə istiqamətində mövqe döyüşləri aparıldı.",
  "description": "Azərbaycan Ordusu cənub və şimal istiqamətlərində əks-hücum əməliyyatını davam etdirdi. Füzuli-Cəbrayıl xəttində və Tərtər-Ağdərə istiqamətində mövqe döyüşləri aparıldı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "fuzuli",
   "cebrayil",
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Döyüşlər cəbhənin bir neçə istiqamətində davam edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-07",
  "day": 7,
  "date": "2020-10-03",
  "title": "Suqovuşan və Talış azad edildi",
  "short": "Azərbaycan Prezidenti İlham Əliyev Suqovuşan qəsəbəsinin və Talış kəndinin azad edildiyini elan etdi. Bu uğur Tərtər rayonunun şimal istiqamətində mövqelərin möhkəmləndirilməsi baxımından mühüm əhəmiyyət…",
  "description": "Azərbaycan Prezidenti İlham Əliyev Suqovuşan qəsəbəsinin və Talış kəndinin azad edildiyini elan etdi. Bu uğur Tərtər rayonunun şimal istiqamətində mövqelərin möhkəmləndirilməsi baxımından mühüm əhəmiyyət daşıyırdı.",
  "status": "sourced",
  "places": [
   "Suqovuşan",
   "Talış"
  ],
  "regionIds": [
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Suqovuşan və Talış Tərtər rayonunun şimal istiqamətində yerləşir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-08",
  "day": 8,
  "date": "2020-10-04",
  "title": "Cəbrayıl şəhəri azad edildi; Gəncə atəşə tutuldu",
  "short": "Cəbrayıl şəhərinin azad edildiyi elan olundu. Eyni gün Gəncə şəhəri Ermənistan ərazisindən raket və artilleriya atəşinə tutuldu; mülki infrastruktura ziyan dəydi.",
  "description": "Cəbrayıl şəhərinin azad edildiyi elan olundu. Eyni gün Gəncə şəhəri Ermənistan ərazisindən raket və artilleriya atəşinə tutuldu; mülki infrastruktura ziyan dəydi.",
  "status": "sourced",
  "places": [
   "Cəbrayıl",
   "Gəncə"
  ],
  "regionIds": [
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Cəbrayıl şəhəri cənub cəbhəsində mühüm mərkəz idi. Gəncəyə hücum cəbhə xəttindən kənarda yerləşən iri şəhərdə mülki təhlükəsizlik məsələsini gündəmə gətirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-09",
  "day": 9,
  "date": "2020-10-05",
  "title": "Cəbhədə əməliyyatların genişlənməsi",
  "short": "Azərbaycan Ordusu Cəbrayıl və Füzuli istiqamətlərində irəliləyişi davam etdirdi, şimal istiqamətində isə Tərtər-Ağdərə xəttində döyüşlər getdi. Ermənistan silahlı qüvvələrinin cəbhəyanı yaşayış…",
  "description": "Azərbaycan Ordusu Cəbrayıl və Füzuli istiqamətlərində irəliləyişi davam etdirdi, şimal istiqamətində isə Tərtər-Ağdərə xəttində döyüşlər getdi. Ermənistan silahlı qüvvələrinin cəbhəyanı yaşayış məntəqələrini atəşə tutması barədə məlumatlar yayıldı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "cebrayil",
   "fuzuli",
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Döyüş əməliyyatları cənub və şimal istiqamətlərində paralel davam edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-10",
  "day": 10,
  "date": "2020-10-06",
  "title": "Cəbhədə döyüşlər davam edir",
  "short": "Cənub istiqamətində Azərbaycan Ordusunun irəliləyişi və mövqelərin möhkəmləndirilməsi uğrunda döyüşlər davam etdi. Tərtər və ətraf yaşayış məntəqələri də atəş təhlükəsi altında idi.",
  "description": "Cənub istiqamətində Azərbaycan Ordusunun irəliləyişi və mövqelərin möhkəmləndirilməsi uğrunda döyüşlər davam etdi. Tərtər və ətraf yaşayış məntəqələri də atəş təhlükəsi altında idi.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "fuzuli",
   "cebrayil",
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu tarix üzrə ayrıca yaşayış məntəqəsinin azad edilməsi təsdiqlənmiş gündəlik qeyddə göstərilmir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-11",
  "day": 11,
  "date": "2020-10-07",
  "title": "Cəbhənin cənub və şimal istiqamətlərində döyüşlər",
  "short": "Azərbaycan Ordusu cəbhənin müxtəlif istiqamətlərində əməliyyatları davam etdirdi. Cənubda Füzuli-Cəbrayıl xətti, şimalda isə Tərtər-Ağdərə istiqaməti əsas döyüş zonalarından idi.",
  "description": "Azərbaycan Ordusu cəbhənin müxtəlif istiqamətlərində əməliyyatları davam etdirdi. Cənubda Füzuli-Cəbrayıl xətti, şimalda isə Tərtər-Ağdərə istiqaməti əsas döyüş zonalarından idi.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "fuzuli",
   "cebrayil",
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Cəbhə xəttində artilleriya və mövqe döyüşləri davam edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-12",
  "day": 12,
  "date": "2020-10-08",
  "title": "Cəbhədə döyüşlər və mülki obyektlərin atəşə tutulması",
  "short": "Döyüşlər davam edərkən cəbhəyanı yaşayış məntəqələri və mülki obyektlər atəşə məruz qalırdı. Azərbaycan tərəfi mülki əhalinin müdafiəsi və infrastrukturun qorunması ilə bağlı məlumatlar yayırdı.",
  "description": "Döyüşlər davam edərkən cəbhəyanı yaşayış məntəqələri və mülki obyektlər atəşə məruz qalırdı. Azərbaycan tərəfi mülki əhalinin müdafiəsi və infrastrukturun qorunması ilə bağlı məlumatlar yayırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Döyüşlər cəbhə xətti ilə yanaşı cəbhədən kənar yaşayış məntəqələrinə də təhlükə yaradırdı."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-13",
  "day": 13,
  "date": "2020-10-09",
  "title": "Hadrut qəsəbəsi və ətraf kəndlər azad edildi",
  "short": "Hadrut qəsəbəsi, eləcə də Çaylı, Yuxarı Güzlək, Gorazıllı, Qışlaq, Qaracallı, Əfəndilər, Süleymanlı və Sur kəndləri azad edildi. Bu irəliləyiş Xocavənd istiqamətində əməliyyatların mühüm mərhələsi oldu.",
  "description": "Hadrut qəsəbəsi, eləcə də Çaylı, Yuxarı Güzlək, Gorazıllı, Qışlaq, Qaracallı, Əfəndilər, Süleymanlı və Sur kəndləri azad edildi. Bu irəliləyiş Xocavənd istiqamətində əməliyyatların mühüm mərhələsi oldu.",
  "status": "sourced",
  "places": [
   "Hadrut",
   "Çaylı",
   "Yuxarı Güzlək",
   "Gorazıllı",
   "Qışlaq",
   "Qaracallı",
   "Əfəndilər",
   "Süleymanlı",
   "Sur"
  ],
  "regionIds": [
   "xocavend"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Hadrutun azad edilməsi Xocavənd istiqamətində əməliyyat baxımından mühüm əhəmiyyət daşıyırdı."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-14",
  "day": 14,
  "date": "2020-10-10",
  "title": "Moskvada humanitar atəşkəs barədə razılıq",
  "short": "Rusiya, Azərbaycan və Ermənistan xarici işlər nazirlərinin Moskvadakı görüşündən sonra humanitar məqsədlərlə atəşkəs barədə razılıq əldə olundu. Razılaşma oktyabrın 10-da saat 12:00-dan qüvvəyə minməli idi;…",
  "description": "Rusiya, Azərbaycan və Ermənistan xarici işlər nazirlərinin Moskvadakı görüşündən sonra humanitar məqsədlərlə atəşkəs barədə razılıq əldə olundu. Razılaşma oktyabrın 10-da saat 12:00-dan qüvvəyə minməli idi; tərəflər əsir və həlak olanların meyitlərinin mübadiləsi üçün mexanizm razılaşdırmalı idilər. Atəşkəs qısa müddət sonra pozuldu.",
  "status": "sourced",
  "places": [
   "Moskva"
  ],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Humanitar atəşkəsin məqsədi əsirlərin və həlak olanların meyitlərinin mübadiləsi üçün şərait yaratmaq idi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-15",
  "day": 15,
  "date": "2020-10-11",
  "title": "Gəncəyə gecə raket hücumu",
  "short": "Gəncə şəhərinin yaşayış məhəlləsi gecə saatlarında raket atəşinə tutuldu. Mülki şəxslər həlak oldu və yaralandı, yaşayış evlərinə və infrastruktura ciddi ziyan dəydi.",
  "description": "Gəncə şəhərinin yaşayış məhəlləsi gecə saatlarında raket atəşinə tutuldu. Mülki şəxslər həlak oldu və yaralandı, yaşayış evlərinə və infrastruktura ciddi ziyan dəydi.",
  "status": "sourced",
  "places": [
   "Gəncə"
  ],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Hücum cəbhə xəttindən uzaqda yerləşən yaşayış məhəlləsinə qarşı həyata keçirilmişdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-16",
  "day": 16,
  "date": "2020-10-12",
  "title": "Cəbhədə döyüşlər və atəşkəs pozuntuları",
  "short": "Oktyabrın 10-da elan olunmuş humanitar atəşkəsə baxmayaraq cəbhənin müxtəlif istiqamətlərində döyüşlər davam etdi. Azərbaycan Ordusu mövqelərini möhkəmləndirərək əməliyyatları davam etdirdi.",
  "description": "Oktyabrın 10-da elan olunmuş humanitar atəşkəsə baxmayaraq cəbhənin müxtəlif istiqamətlərində döyüşlər davam etdi. Azərbaycan Ordusu mövqelərini möhkəmləndirərək əməliyyatları davam etdirdi.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "fuzuli",
   "cebrayil",
   "xocavend",
   "terter"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Humanitar atəşkəs davamlı olmadı və tərəflər bir-birini rejimi pozmaqda ittiham edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-17",
  "day": 17,
  "date": "2020-10-13",
  "title": "Cəbhədə əməliyyatlar davam edir",
  "short": "Azərbaycan Ordusu cənub istiqamətində irəliləyişini davam etdirdi. Xocavənd və Füzuli istiqamətlərində yaşayış məntəqələri uğrunda döyüşlər aparıldı; şimal istiqamətində də atəşkəs pozuntuları qeydə alınırdı.",
  "description": "Azərbaycan Ordusu cənub istiqamətində irəliləyişini davam etdirdi. Xocavənd və Füzuli istiqamətlərində yaşayış məntəqələri uğrunda döyüşlər aparıldı; şimal istiqamətində də atəşkəs pozuntuları qeydə alınırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "xocavend",
   "fuzuli",
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu tarix üzrə ayrıca azad edilmiş yaşayış məntəqələrinin siyahısı gündəlik mənbədə dəqiqləşdirilmədiyindən ümumi döyüş xronikası verilir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-18",
  "day": 18,
  "date": "2020-10-14",
  "title": "Füzuli və Xocavənd kəndləri azad edildi",
  "short": "Füzuli rayonunun Qaradağlı, Xatunbulaq və Qarakollu, Xocavənd rayonunun Bulutan, Məlikcanlı, Kəmərtük, Təkə və Tağaser kəndləri azad edildi.",
  "description": "Füzuli rayonunun Qaradağlı, Xatunbulaq və Qarakollu, Xocavənd rayonunun Bulutan, Məlikcanlı, Kəmərtük, Təkə və Tağaser kəndləri azad edildi.",
  "status": "sourced",
  "places": [
   "Qaradağlı",
   "Xatunbulaq",
   "Qarakollu",
   "Bulutan",
   "Məlikcanlı",
   "Kəmərtük",
   "Təkə",
   "Tağaser"
  ],
  "regionIds": [
   "fuzuli",
   "xocavend"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Azad edilən yaşayış məntəqələri iki inzibati rayonun — Füzuli və Xocavəndin ərazisində yerləşirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-19",
  "day": 19,
  "date": "2020-10-15",
  "title": "Daha altı kənd azad edildi",
  "short": "Füzuli rayonunun Arış, Cəbrayıl rayonunun Doşulu, Xocavənd rayonunun Edişə, Düdükçü, Edilli və Çiraquz kəndləri azad edildi.",
  "description": "Füzuli rayonunun Arış, Cəbrayıl rayonunun Doşulu, Xocavənd rayonunun Edişə, Düdükçü, Edilli və Çiraquz kəndləri azad edildi.",
  "status": "sourced",
  "places": [
   "Arış",
   "Doşulu",
   "Edişə",
   "Düdükçü",
   "Edilli",
   "Çiraquz"
  ],
  "regionIds": [
   "fuzuli",
   "cebrayil",
   "xocavend"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Həmin gün azad edilən yaşayış məntəqələri üç rayonun ərazisini əhatə edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-20",
  "day": 20,
  "date": "2020-10-16",
  "title": "Cəbhədə döyüşlər davam edir",
  "short": "Cənub istiqamətində Azərbaycan Ordusunun əməliyyatları davam etdi. Füzuli, Cəbrayıl və Xocavənd istiqamətlərində mövqelər uğrunda döyüşlər aparıldı; cəbhəyanı ərazilərdə atəş təhlükəsi qalırdı.",
  "description": "Cənub istiqamətində Azərbaycan Ordusunun əməliyyatları davam etdi. Füzuli, Cəbrayıl və Xocavənd istiqamətlərində mövqelər uğrunda döyüşlər aparıldı; cəbhəyanı ərazilərdə atəş təhlükəsi qalırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "fuzuli",
   "cebrayil",
   "xocavend"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu tarix üzrə ayrıca yaşayış məntəqəsinin azad edilməsi barədə dəqiqləşdirilmiş məlumat əlavə olunmur."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-21",
  "day": 21,
  "date": "2020-10-17",
  "title": "Füzuli şəhəri azad edildi",
  "short": "Füzuli şəhəri Azərbaycan Ordusu tərəfindən azad edildi. Şəhərin azad olunması cənub cəbhəsində mühüm strateji və əməliyyat uğuru idi və Cəbrayıl-Zəngilan istiqamətində irəliləyiş üçün imkanları genişləndirdi.",
  "description": "Füzuli şəhəri Azərbaycan Ordusu tərəfindən azad edildi. Şəhərin azad olunması cənub cəbhəsində mühüm strateji və əməliyyat uğuru idi və Cəbrayıl-Zəngilan istiqamətində irəliləyiş üçün imkanları genişləndirdi.",
  "status": "sourced",
  "places": [
   "Füzuli"
  ],
  "regionIds": [
   "fuzuli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Füzuli şəhəri 1993-cü ildə işğal edilmişdi; 17 oktyabr 2020-ci ildə azad olundu."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-22",
  "day": 22,
  "date": "2020-10-18",
  "title": "Xudafərin körpüsü ətrafı nəzarətə götürüldü",
  "short": "Cəbrayıl rayonu istiqamətində Xudafərin su anbarı və tarixi Xudafərin körpülərinin yerləşdiyi ərazi nəzarətə götürüldü. Azərbaycan bayrağının körpü üzərində dalğalanması barədə rəsmi məlumat yayıldı.",
  "description": "Cəbrayıl rayonu istiqamətində Xudafərin su anbarı və tarixi Xudafərin körpülərinin yerləşdiyi ərazi nəzarətə götürüldü. Azərbaycan bayrağının körpü üzərində dalğalanması barədə rəsmi məlumat yayıldı.",
  "status": "sourced",
  "places": [
   "Xudafərin körpüsü"
  ],
  "regionIds": [
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Xudafərin körpüləri Araz çayı üzərində yerləşən orta əsr memarlıq abidələridir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-23",
  "day": 23,
  "date": "2020-10-19",
  "title": "Cəbhənin cənub istiqamətində irəliləyiş",
  "short": "Azərbaycan Ordusunun Cəbrayıl-Zəngilan istiqamətində əməliyyatları davam etdi. Mövqelərin və yol-kommunikasiya xətlərinin nəzarətə götürülməsi uğrunda döyüşlər aparıldı.",
  "description": "Azərbaycan Ordusunun Cəbrayıl-Zəngilan istiqamətində əməliyyatları davam etdi. Mövqelərin və yol-kommunikasiya xətlərinin nəzarətə götürülməsi uğrunda döyüşlər aparıldı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "cebrayil",
   "zengilan"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu tarix üzrə ayrıca yaşayış məntəqələrinin siyahısı təsdiqlənmiş gündəlik məlumatda göstərilmədiyindən ümumi əməliyyat xülasəsi verilir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-24",
  "day": 24,
  "date": "2020-10-20",
  "title": "Zəngilan şəhəri azad edildi",
  "short": "Zəngilan şəhəri azad edildi. Eyni gün Zəngilan rayonunun bir sıra kəndlərinin, eləcə də Füzuli və Cəbrayıl rayonlarının bəzi yaşayış məntəqələrinin azad olunması barədə məlumat verildi.",
  "description": "Zəngilan şəhəri azad edildi. Eyni gün Zəngilan rayonunun bir sıra kəndlərinin, eləcə də Füzuli və Cəbrayıl rayonlarının bəzi yaşayış məntəqələrinin azad olunması barədə məlumat verildi.",
  "status": "sourced",
  "places": [
   "Zəngilan"
  ],
  "regionIds": [
   "zengilan"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Zəngilan şəhərinin azad edilməsi cənub-qərb istiqamətində irəliləyişin mühüm mərhələsi idi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-25",
  "day": 25,
  "date": "2020-10-21",
  "title": "Mincivan qəsəbəsi və 13 kənd azad edildi",
  "short": "Zəngilan rayonunun Mincivan qəsəbəsi və Xurama, Xumarlı, Sarıl, Babaylı, Üçüncü Ağalı, Hacallı, Qıraq Müşlan, Üdgün, Turabad, İçəri Müşlan, Məlikli, Cahangirbəyli və Baharlı kəndləri azad edildi. Həmin gün…",
  "description": "Zəngilan rayonunun Mincivan qəsəbəsi və Xurama, Xumarlı, Sarıl, Babaylı, Üçüncü Ağalı, Hacallı, Qıraq Müşlan, Üdgün, Turabad, İçəri Müşlan, Məlikli, Cahangirbəyli və Baharlı kəndləri azad edildi. Həmin gün Füzuli və Cəbrayıl rayonlarında da kəndlər azad olundu.",
  "status": "sourced",
  "places": [
   "Mincivan",
   "Xurama",
   "Xumarlı",
   "Sarıl",
   "Babaylı",
   "Üçüncü Ağalı",
   "Hacallı",
   "Qıraq Müşlan",
   "Üdgün",
   "Turabad",
   "İçəri Müşlan",
   "Məlikli",
   "Cahangirbəyli",
   "Baharlı"
  ],
  "regionIds": [
   "zengilan",
   "fuzuli",
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Mincivan Zəngilan rayonunun mühüm dəmir yolu və nəqliyyat qovşaqlarından biridir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-26",
  "day": 26,
  "date": "2020-10-22",
  "title": "Ağbənd qəsəbəsi azad edildi",
  "short": "Zəngilan rayonunun Ağbənd qəsəbəsi azad edildi. Bununla Azərbaycan-İran dövlət sərhədinin 132 kilometrlik hissəsi nəzarətə götürüldü və dövlət sərhədinin bərpası istiqamətində mühüm mərhələ tamamlandı.",
  "description": "Zəngilan rayonunun Ağbənd qəsəbəsi azad edildi. Bununla Azərbaycan-İran dövlət sərhədinin 132 kilometrlik hissəsi nəzarətə götürüldü və dövlət sərhədinin bərpası istiqamətində mühüm mərhələ tamamlandı.",
  "status": "sourced",
  "places": [
   "Ağbənd"
  ],
  "regionIds": [
   "zengilan"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Ağbənd Araz çayı boyunca, Azərbaycan-İran sərhədi yaxınlığında yerləşir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-27",
  "day": 27,
  "date": "2020-10-23",
  "title": "Dörd rayonda kəndlər azad edildi",
  "short": "Xocavənd rayonunun Dolanlar və Bünyadlı; Cəbrayıl rayonunun Dağ Tumas, Nüsüs, Xələfli, Minbaşılı və Veysəlli; Zəngilan rayonunun Vənədli və Mirzəhəsənli; Qubadlı rayonunun Zilanlı, Kürd Mahrızlı, Muğanlı və…",
  "description": "Xocavənd rayonunun Dolanlar və Bünyadlı; Cəbrayıl rayonunun Dağ Tumas, Nüsüs, Xələfli, Minbaşılı və Veysəlli; Zəngilan rayonunun Vənədli və Mirzəhəsənli; Qubadlı rayonunun Zilanlı, Kürd Mahrızlı, Muğanlı və Alaqurşaq kəndləri azad edildi.",
  "status": "sourced",
  "places": [
   "Dolanlar",
   "Bünyadlı",
   "Dağ Tumas",
   "Nüsüs",
   "Xələfli",
   "Minbaşılı",
   "Veysəlli",
   "Vənədli",
   "Mirzəhəsənli",
   "Zilanlı",
   "Kürd Mahrızlı",
   "Muğanlı",
   "Alaqurşaq"
  ],
  "regionIds": [
   "xocavend",
   "cebrayil",
   "zengilan",
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Azad edilən kəndlər Xocavənd, Cəbrayıl, Zəngilan və Qubadlı rayonlarını əhatə edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-28",
  "day": 28,
  "date": "2020-10-24",
  "title": "Cəbhədə döyüşlər davam edir",
  "short": "Azərbaycan Ordusunun əməliyyatları Qubadlı və Zəngilan istiqamətlərində davam etdi. Cəbhənin cənub hissəsində mövqelər, yüksəkliklər və yaşayış məntəqələrinə aparan yollar uğrunda döyüşlər gedirdi.",
  "description": "Azərbaycan Ordusunun əməliyyatları Qubadlı və Zəngilan istiqamətlərində davam etdi. Cəbhənin cənub hissəsində mövqelər, yüksəkliklər və yaşayış məntəqələrinə aparan yollar uğrunda döyüşlər gedirdi.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli",
   "zengilan",
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu gün üçün ayrıca azad edilmiş yaşayış məntəqələrinin təsdiqlənmiş siyahısı təqdim olunmadığından ümumi döyüş xülasəsi verilir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-29",
  "day": 29,
  "date": "2020-10-25",
  "title": "Qubadlı şəhəri azad edildi",
  "short": "Qubadlı şəhəri, eləcə də Padar, Əfəndilər, Yusifbəyli, Çaytumas, Xanlıq, Sarıyataq və Mollabürhan kəndləri azad edildi. Qubadlının azad olunması Laçın istiqamətində əməliyyatların gedişinə təsir edən mühüm…",
  "description": "Qubadlı şəhəri, eləcə də Padar, Əfəndilər, Yusifbəyli, Çaytumas, Xanlıq, Sarıyataq və Mollabürhan kəndləri azad edildi. Qubadlının azad olunması Laçın istiqamətində əməliyyatların gedişinə təsir edən mühüm hadisə idi.",
  "status": "sourced",
  "places": [
   "Qubadlı",
   "Padar",
   "Əfəndilər",
   "Yusifbəyli",
   "Çaytumas",
   "Xanlıq",
   "Sarıyataq",
   "Mollabürhan"
  ],
  "regionIds": [
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Qubadlı şəhəri 1993-cü ildə işğal edilmiş, 25 oktyabr 2020-ci ildə azad olunmuşdur."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-30",
  "day": 30,
  "date": "2020-10-26",
  "title": "ABŞ vasitəçiliyi ilə humanitar atəşkəs",
  "short": "ABŞ-ın vasitəçiliyi ilə Azərbaycan və Ermənistan arasında humanitar atəşkəs barədə razılıq elan edildi. Razılaşmanın oktyabrın 26-da saat 08:00-da qüvvəyə minməsi nəzərdə tutulurdu, lakin tərəflər qısa…",
  "description": "ABŞ-ın vasitəçiliyi ilə Azərbaycan və Ermənistan arasında humanitar atəşkəs barədə razılıq elan edildi. Razılaşmanın oktyabrın 26-da saat 08:00-da qüvvəyə minməsi nəzərdə tutulurdu, lakin tərəflər qısa müddət sonra atəşkəsin pozulması barədə qarşılıqlı bəyanatlar verdilər.",
  "status": "sourced",
  "places": [],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu, müharibə dövründə elan edilən üçüncü humanitar atəşkəs cəhdi idi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-31",
  "day": 31,
  "date": "2020-10-27",
  "title": "Cəbhədə döyüşlər davam edir",
  "short": "Qubadlı istiqamətində və cənub cəbhəsinin digər sahələrində döyüşlər davam etdi. Azərbaycan Ordusu mövqelərini möhkəmləndirir, strateji yüksəkliklər və yaşayış məntəqələri uğrunda əməliyyatlar aparırdı.",
  "description": "Qubadlı istiqamətində və cənub cəbhəsinin digər sahələrində döyüşlər davam etdi. Azərbaycan Ordusu mövqelərini möhkəmləndirir, strateji yüksəkliklər və yaşayış məntəqələri uğrunda əməliyyatlar aparırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli",
   "zengilan",
   "cebrayil"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Oktyabrın sonlarında əməliyyatların əsas ağırlığı cənub istiqamətində cəmlənmişdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-32",
  "day": 32,
  "date": "2020-10-28",
  "title": "Bərdəyə raket hücumu",
  "short": "Bərdə şəhəri kasetli döyüş başlıqlı raketlərlə atəşə tutuldu. Hücum nəticəsində 21 mülki şəxs həlak oldu, 70-dən çox insan yaralandı; şəhərin mülki infrastrukturu və nəqliyyat vasitələri zərər gördü.",
  "description": "Bərdə şəhəri kasetli döyüş başlıqlı raketlərlə atəşə tutuldu. Hücum nəticəsində 21 mülki şəxs həlak oldu, 70-dən çox insan yaralandı; şəhərin mülki infrastrukturu və nəqliyyat vasitələri zərər gördü.",
  "status": "sourced",
  "places": [
   "Bərdə"
  ],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Bərdəyə hücum müharibə zamanı mülki əhaliyə qarşı ən ağır hücumlardan biri kimi qeydə alındı."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-33",
  "day": 33,
  "date": "2020-10-29",
  "title": "Qubadlı istiqamətində döyüşlər",
  "short": "Qubadlı və ətraf yüksəkliklər istiqamətində döyüşlər davam etdi. Azərbaycan Ordusu cənub cəbhəsində irəliləyişini davam etdirərək növbəti günlərdə bir sıra kəndlərin azad edilməsi üçün əməliyyatlar apardı.",
  "description": "Qubadlı və ətraf yüksəkliklər istiqamətində döyüşlər davam etdi. Azərbaycan Ordusu cənub cəbhəsində irəliləyişini davam etdirərək növbəti günlərdə bir sıra kəndlərin azad edilməsi üçün əməliyyatlar apardı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli",
   "zengilan"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu tarix üzrə ayrıca kənd siyahısı dəqiqləşdirilmədiyindən hadisə ümumi döyüş xronikası kimi verilir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-34",
  "day": 34,
  "date": "2020-10-30",
  "title": "Cəbrayıl, Zəngilan və Qubadlıda daha 9 kənd azad edildi",
  "short": "Cəbrayıl rayonunun Xudaverdili, Qurbantəpə, Şahvələdli və Xubyarlı; Zəngilan rayonunun Aladin və Vejnəli; Qubadlı rayonunun Kavdadıq, Məmər və Mollalı kəndləri azad edildi.",
  "description": "Cəbrayıl rayonunun Xudaverdili, Qurbantəpə, Şahvələdli və Xubyarlı; Zəngilan rayonunun Aladin və Vejnəli; Qubadlı rayonunun Kavdadıq, Məmər və Mollalı kəndləri azad edildi.",
  "status": "sourced",
  "places": [
   "Xudaverdili",
   "Qurbantəpə",
   "Şahvələdli",
   "Xubyarlı",
   "Aladin",
   "Vejnəli",
   "Kavdadıq",
   "Məmər",
   "Mollalı"
  ],
  "regionIds": [
   "cebrayil",
   "zengilan",
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Azad edilən doqquz kənd üç rayonun — Cəbrayıl, Zəngilan və Qubadlının ərazisində yerləşirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-35",
  "day": 35,
  "date": "2020-10-31",
  "title": "Cəbhənin cənub istiqamətində əməliyyatlar",
  "short": "Azərbaycan Ordusunun Qubadlı-Zəngilan istiqamətində əməliyyatları davam etdi. Strateji yüksəkliklərə və yaşayış məntəqələrinə aparan yollar uğrunda döyüşlər aparılırdı.",
  "description": "Azərbaycan Ordusunun Qubadlı-Zəngilan istiqamətində əməliyyatları davam etdi. Strateji yüksəkliklərə və yaşayış məntəqələrinə aparan yollar uğrunda döyüşlər aparılırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli",
   "zengilan"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu gün üçün ayrıca azad edilmiş yaşayış məntəqəsi barədə təsdiqlənmiş məlumat göstərilmir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-36",
  "day": 36,
  "date": "2020-11-01",
  "title": "Qubadlı istiqamətində döyüşlər davam edir",
  "short": "Qubadlı rayonu ərazisində və ətraf yüksəkliklərdə döyüşlər davam etdi. Azərbaycan Ordusu Laçın istiqamətində əməliyyat mövqelərini genişləndirməyə çalışırdı.",
  "description": "Qubadlı rayonu ərazisində və ətraf yüksəkliklərdə döyüşlər davam etdi. Azərbaycan Ordusu Laçın istiqamətində əməliyyat mövqelərini genişləndirməyə çalışırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Noyabrın ilk günlərində Qubadlı-Laçın istiqaməti əməliyyat baxımından xüsusi əhəmiyyət daşıyırdı."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-37",
  "day": 37,
  "date": "2020-11-02",
  "title": "Daha səkkiz kənd azad edildi",
  "short": "Cəbrayıl rayonunun Çaprand, Hacı İsaqlı və Qoşabulaq; Zəngilan rayonunun Dərə Gilətağ və Böyük Gilətağ; Qubadlı rayonunun İşıqlı, Muradxanlı və Milanlı kəndləri azad edildi.",
  "description": "Cəbrayıl rayonunun Çaprand, Hacı İsaqlı və Qoşabulaq; Zəngilan rayonunun Dərə Gilətağ və Böyük Gilətağ; Qubadlı rayonunun İşıqlı, Muradxanlı və Milanlı kəndləri azad edildi.",
  "status": "sourced",
  "places": [
   "Çaprand",
   "Hacı İsaqlı",
   "Qoşabulaq",
   "Dərə Gilətağ",
   "Böyük Gilətağ",
   "İşıqlı",
   "Muradxanlı",
   "Milanlı"
  ],
  "regionIds": [
   "cebrayil",
   "zengilan",
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Azad edilən səkkiz kənd Cəbrayıl, Zəngilan və Qubadlı rayonlarını əhatə edirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-38",
  "day": 38,
  "date": "2020-11-03",
  "title": "Qubadlı və Laçın istiqamətində döyüşlər",
  "short": "Cəbhənin cənub-qərb hissəsində, xüsusilə Qubadlı və Laçın istiqamətində döyüşlər davam etdi. Əməliyyatlar strateji yüksəkliklər və Laçın dəhlizinə yaxın ərazilər uğrunda aparılırdı.",
  "description": "Cəbhənin cənub-qərb hissəsində, xüsusilə Qubadlı və Laçın istiqamətində döyüşlər davam etdi. Əməliyyatlar strateji yüksəkliklər və Laçın dəhlizinə yaxın ərazilər uğrunda aparılırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Laçın istiqaməti Qarabağ ərazisi ilə Ermənistan arasında kommunikasiya baxımından mühüm mövqeyə malik idi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-39",
  "day": 39,
  "date": "2020-11-04",
  "title": "Daha yeddi kənd azad edildi",
  "short": "Cəbrayıl rayonunun Mirək və Kavdar; Zəngilan rayonunun Məşədiismayıllı və Şəfibəyli; Qubadlı rayonunun Başarat, Qarakişilər və Qaracallı kəndləri azad edildi.",
  "description": "Cəbrayıl rayonunun Mirək və Kavdar; Zəngilan rayonunun Məşədiismayıllı və Şəfibəyli; Qubadlı rayonunun Başarat, Qarakişilər və Qaracallı kəndləri azad edildi.",
  "status": "sourced",
  "places": [
   "Mirək",
   "Kavdar",
   "Məşədiismayıllı",
   "Şəfibəyli",
   "Başarat",
   "Qarakişilər",
   "Qaracallı"
  ],
  "regionIds": [
   "cebrayil",
   "zengilan",
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Baş Prokurorluğun məlumatına görə, 27 sentyabrdan 4 noyabradək 91 mülki şəxs həlak olmuş, 405 nəfər yaralanmışdı."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Vətən müharibəsinin xronikası: 4 noyabr",
    "url": "https://azertag.az/xeber/veten_muharibesinin_xronikasi_4_noyabr-1916696"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-40",
  "day": 40,
  "date": "2020-11-05",
  "title": "Cəbhədə döyüşlər davam edir",
  "short": "Qubadlı-Laçın istiqamətində və Qarabağın digər sahələrində döyüşlər davam etdi. Azərbaycan Ordusu strateji yüksəkliklərə nəzarəti genişləndirmək və yaşayış məntəqələrinə yaxınlaşmaq üçün əməliyyatlar aparırdı.",
  "description": "Qubadlı-Laçın istiqamətində və Qarabağın digər sahələrində döyüşlər davam etdi. Azərbaycan Ordusu strateji yüksəkliklərə nəzarəti genişləndirmək və yaşayış məntəqələrinə yaxınlaşmaq üçün əməliyyatlar aparırdı.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "qubadli"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Bu tarix üzrə ayrıca yaşayış məntəqələrinin azad edilməsi barədə dəqiqləşdirilmiş gündəlik məlumat əlavə edilmir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-41",
  "day": 41,
  "date": "2020-11-06",
  "title": "Şuşa istiqamətində əməliyyatlar",
  "short": "Azərbaycan Ordusunun Şuşa istiqamətində mürəkkəb dağlıq ərazidə hərəkəti və əməliyyatları davam edirdi. Şuşaya aparan yüksəkliklər və yollar uğrunda döyüşlər müharibənin həlledici mərhələsinə çevrilirdi.",
  "description": "Azərbaycan Ordusunun Şuşa istiqamətində mürəkkəb dağlıq ərazidə hərəkəti və əməliyyatları davam edirdi. Şuşaya aparan yüksəkliklər və yollar uğrunda döyüşlər müharibənin həlledici mərhələsinə çevrilirdi.",
  "status": "sourced",
  "places": [],
  "regionIds": [
   "susa",
   "xocavend"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Şuşanın coğrafi mövqeyi və dağlıq relyefi şəhər uğrunda əməliyyatları xüsusi çətinləşdirirdi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-42",
  "day": 42,
  "date": "2020-11-07",
  "title": "Xocavənd rayonunun iki kəndi azad edildi",
  "short": "Xocavənd rayonunun Ataqut və Tsakuri kəndləri azad edildi. Eyni zamanda Şuşa istiqamətində həlledici döyüşlər davam edirdi.",
  "description": "Xocavənd rayonunun Ataqut və Tsakuri kəndləri azad edildi. Eyni zamanda Şuşa istiqamətində həlledici döyüşlər davam edirdi.",
  "status": "sourced",
  "places": [
   "Ataqut",
   "Tsakuri"
  ],
  "regionIds": [
   "xocavend"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "Ataqut və Tsakuri Xocavənd rayonunun yaşayış məntəqələridir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-43",
  "day": 43,
  "date": "2020-11-08",
  "title": "Şuşa şəhəri azad edildi",
  "short": "Azərbaycan Ordusu Şuşa şəhərini azad etdi. Prezident İlham Əliyev bu xəbəri noyabrın 8-də Şəhidlər xiyabanından xalqa müraciətində elan etdi. Şuşanın azad edilməsi müharibənin gedişində həlledici hərbi və…",
  "description": "Azərbaycan Ordusu Şuşa şəhərini azad etdi. Prezident İlham Əliyev bu xəbəri noyabrın 8-də Şəhidlər xiyabanından xalqa müraciətində elan etdi. Şuşanın azad edilməsi müharibənin gedişində həlledici hərbi və mənəvi-siyasi hadisə oldu.",
  "status": "sourced",
  "places": [
   "Şuşa"
  ],
  "regionIds": [
   "susa"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "8 noyabr Azərbaycanda Zəfər Günü kimi qeyd olunur. Şuşanın azad edilməsi 2020-ci il müharibəsinin dönüş nöqtələrindən biri hesab edilir."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Vətən müharibəsinin xronikası: 8 noyabr",
    "url": "https://azertag.az/xeber/veten_muharibesinin_xronikasi_8_noyabr-1920582"
   }
  ],
  "hidden": false
 },
 {
  "id": "day-44",
  "day": 44,
  "date": "2020-11-09",
  "title": "Müharibənin 44-cü günü: yeni ərazilər azad edildi",
  "short": "Noyabrın 9-da Cəbrayıl rayonunun Söyüdlü və Aşağı Sirik; Qubadlı rayonunun Yuxarı Mollu, Aşağı Mollu və Xocik; Zəngilan rayonunun Keçikli və Ördəkli kəndləri daxil olmaqla çoxsaylı yaşayış məntəqələri və…",
  "description": "Noyabrın 9-da Cəbrayıl rayonunun Söyüdlü və Aşağı Sirik; Qubadlı rayonunun Yuxarı Mollu, Aşağı Mollu və Xocik; Zəngilan rayonunun Keçikli və Ördəkli kəndləri daxil olmaqla çoxsaylı yaşayış məntəqələri və strateji yüksəkliklər azad edildi. Gecə Azərbaycan, Rusiya və Ermənistan liderlərinin üçtərəfli bəyanatı imzalandı.",
  "status": "sourced",
  "places": [
   "Söyüdlü",
   "Aşağı Sirik",
   "Yuxarı Mollu",
   "Aşağı Mollu",
   "Xocik",
   "Keçikli",
   "Ördəkli"
  ],
  "regionIds": [
   "cebrayil",
   "qubadli",
   "zengilan"
  ],
  "image": null,
  "gallery": [],
  "facts": [
   "AZƏRTAC-ın xronikasına görə, noyabrın 9-da daha 71 kənd, 1 qəsəbə və 8 strateji yüksəklik azad edildi."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Vətən müharibəsinin xronikası: 9 noyabr",
    "url": "https://azertag.az/xeber/veten_muharibesinin_xronikasi_9_noyabr-1921350"
   }
  ],
  "hidden": false
 },
 {
  "id": "final",
  "day": null,
  "date": "2020-11-10",
  "title": "Üçtərəfli bəyanat: hərbi əməliyyatlar dayandırıldı",
  "short": "Azərbaycan Prezidenti İlham Əliyev, Rusiya Prezidenti Vladimir Putin və Ermənistanın baş naziri Nikol Paşinyan 9 noyabr tarixli üçtərəfli bəyanatı imzaladılar. Bəyanata əsasən 10 noyabr saat 00:00-dan…",
  "description": "Azərbaycan Prezidenti İlham Əliyev, Rusiya Prezidenti Vladimir Putin və Ermənistanın baş naziri Nikol Paşinyan 9 noyabr tarixli üçtərəfli bəyanatı imzaladılar. Bəyanata əsasən 10 noyabr saat 00:00-dan etibarən hərbi əməliyyatlar və atəş tam dayandırıldı. Sənəd bölgədə yeni təhlükəsizlik və kommunikasiya rejiminin əsasını qoydu.",
  "status": "sourced",
  "places": [
   "Ağdam",
   "Kəlbəcər",
   "Laçın"
  ],
  "regionIds": [],
  "image": null,
  "gallery": [],
  "facts": [
   "Bəyanata əsasən Ağdam rayonu 20 noyabrda, Kəlbəcər rayonu 25 noyabrda, Laçın rayonu isə 1 dekabrda Azərbaycana qaytarıldı. Rus sülhməramlı kontingentinin yerləşdirilməsi və məcburi köçkünlərin qayıdışı nəzərdə tutulurdu."
  ],
  "sources": [
   {
    "label": "AZƏRTAC — Hər biri Azərbaycan tarixinə şanlı səhifə kimi yazılan 44 gün",
    "url": "https://azertag.az/xeber/her_biri_azerbaycan_tarixine_sanli_sehife_kimi_yazilan_44_gun-2764213"
   }
  ],
  "hidden": false
 }
];

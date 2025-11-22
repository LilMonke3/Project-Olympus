export interface MythologyItem {
  id: string;
  title: string;
  category: 'god' | 'goddess' | 'hero' | 'creature' | 'story';
  description: string;
  fullStory: string;
  image: string;
  attributes?: string[];
  powers?: string[];
  related?: string[];
}

export const greekMythologyData: MythologyItem[] = [
  {
    id: 'zeus',
    title: 'Zeus',
    category: 'god',
    description: 'Göklerin ve tanrıların kralı, yıldırım ve şimşek tanrısı',
    fullStory: 'Zeus, Kronos ve Rhea\'nın oğlu olarak dünyaya geldi. Babası Kronos, kendisini yutmak isteyen diğer kardeşlerinin aksine, annesi Rhea tarafından gizlice saklandı. Büyüdüğünde babasını yenerek kardeşlerini kurtardı ve Olimpos Dağı\'nda tanrıların kralı oldu.\n\nKronos, Uranos ve Gaia\'nın oğlu olarak, babası gibi korkunç bir kehanetle yaşamıştı: Kendi çocuğu tarafından tahttan edilecekti. Bu kehanetten korkan Kronos, her doğan çocuğunu hemen yutmakta idi. İlk beş çocuğu Hestia, Demeter, Hera, Hades ve Poseidon bu şekilde babasının karnında kayboldu.\n\nAncak Rhea, altıncı çocuğu Zeus\'u gizlice dünyaya getirdi. Onu Girit Adası\'ndaki bir mağarada sakladı ve yerine beklendiği bez sarılı bir taş verdi. Kronos bu taşı yuttu ve Zeus\'un hayatta kaldığını bilmedi.\n\nZeus, Girit\'te nymphler tarafından büyütüldü. Yetişkinliğe ulaştığında, Metis tanrıçasının yardımıyla babasına bir içki içirdi. Bu içki, Kronos\'u ve karnındaki çocukları kusturdu. Böylece Zeus\'un kardeşleri özgürlüğüne kavuştu.\n\nKardeşleriyle birlikte Kronos ve Titanlar\'a karşı on yıl süren savaşa girişti. Bu savaşta Zeus ve kardeşleri, Gigantlar ve Hekatonkheirler (yüz kollu devler) ile ittifak kurdu. Sonunda Titanları mağlup ederek onları Tartaros\'a hapsettiler.\n\nDünya üç kardeş arasında paylaştırıldı: Zeus gökleri, Poseidon denizleri, Hades ise yeraltı dünyasını aldı. Zeus, Olimpos Dağı\'nda tahtına oturdu ve tanrıların kralı oldu.\n\nYıldırım ve şimşek onun silahlarıdır. Kykloplar (tek gözlü devler) tarafından kendisine hediye edilen bu silahlar, onun gücünün sembolüdür. Hera ile evli olmasına rağmen, birçok tanrıça ve ölümlü kadınla ilişkisi oldu. Bu ilişkilerden çok sayıda tanrı ve kahraman dünyaya geldi.\n\nZeus, adaletin, misafirperverliğin ve yeminlerin koruyucusudur. Ona karşı gelenler acımasız cezalarla karşılaşır, ancak ona sadık kalanları cömertçe ödüllendirir. Olimpos\'ta oturan on iki Olimpos tanrısının lideridir ve evrenin düzenini sağlar.\n\nEn önemli özelliklerinden biri de kehanet yeteneğidir. Delfi kehanet merkezi onun kontrolündedir ve insanlar geleceklerini öğrenmek için buraya gelirler. Ancak kehanetleri her zaman açık ve anlaşılır değildir, genellikle yorum gerektirir.\n\nZeus aynı zamanda şekil değiştirme yeteneğine sahiptir. Kuğu, boğa, kartal gibi farklı formlara girerek ölümlü kadınlarla ilişkiye girmiştir. Leda ile kuğu olarak, Europa ile boğa olarak, Ganymedes ile kartal olarak ilişki kurmuştur.\n\nOnun sembolleri arasında kartal, meşe ağacı, yıldırım ve taht bulunur. Roma mitolojisinde Jupiter olarak bilinir ve Roma\'nın en önemli tanrısı olmuştur.',
    image: '/zeus.jpg',
    attributes: ['Kral', 'Adalet', 'Yıldırım', 'Olimpos'],
    powers: ['Yıldırım kontrolü', 'Şekil değiştirme', 'Kehanet', 'Gökleri kontrol etme'],
    related: ['hera', 'poseidon', 'hades']
  },
  {
    id: 'poseidon',
    title: 'Poseidon',
    category: 'god',
    description: 'Denizlerin, depremlerin ve atların tanrısı',
    fullStory: 'Poseidon, Zeus ve Hades\'in kardeşi olan deniz tanrısıdır. Üç kardeş dünyayı böldüklerinde, Poseidon denizlerin kontrolünü aldı. Üç dişli mızrağı (trident) ile denizleri fırtınalı veya sakin hale getirebilir. Atların yaratıcısı olarak kabul edilir ve deniz atları Hippokampus\'lar onun hizmetindedir.\n\nPoseidon\'un karakteri oldukça karmaşıktır. Bir yanda denizcilere ve balıkçılara koruma sağlayan, onlara bereket getiren bir tanrı iken, diğer yanda öfkeli ve intikamcı bir yapıya sahiptir. Öfkelendiğinde denizleri fırtınaya çevirir, gemileri batırır ve depremler yaratarak şehirleri yıkar.\n\nEn ünlü efsanelerinden biri, Atina şehri için Athena ile yarıştığı hikayedir. Her iki tanrı da şehre bir hediye sunmuştur. Poseidon, yeryüzüne üç dişli mızrağını vurarak bir at yarattı veya tuzlu bir kaynak çıkardı. Athena ise zeytin ağacı hediye etti. Halk, zeytin ağacının daha değerli olduğunu düşündü ve şehri Athena\'ya adadı. Bu olaydan sonra Poseidon, Atina\'ya karşı öfkesini hiç gizlememiştir.\n\nPoseidon, Amphitrite ile evlidir. Ancak evliliği de Zeus gibi monogam olmaktan uzaktır. Nymphler ve diğer deniz tanrıçalarıyla çok sayıda ilişkisi olmuştur. Bu ilişkilerden çok sayıda deniz tanrısı ve canavarı dünyaya gelmiştir. En ünlü çocukları arasında deniz devi Polyphemus, at kanatlı deniz atı Pegasus\'un babası olan Bellerophon ve birçok deniz perisi bulunur.\n\nHomeros\'un Odysseia destanında, Odysseus\'un Poseidon\'un oğlu Polyphemus\'u kör etmesi üzerine tanrının öfkesini nasıl çektiği anlatılır. Poseidon, Odysseus\'un on yıl boyunca denizlerde sürüklenmesine neden olmuş ve evine dönmesini engellemiştir. Bu destan, Poseidon\'un intikamcı doğasını en iyi şekilde yansıtır.\n\nPoseidon\'un tapınakları genellikle sahil şeridinde veya deniz manzaralı tepelerde inşa edilirdi. En önemli tapınaklarından biri Sounion burnundaki Poseidon tapınağıdır. Denizciler, yola çıkmadan önce ona kurbanlar sunar ve güvenli bir yolculuk için dua ederlerdi.\n\nOnun sembolleri üç dişli mızrak, at, boğa ve yunus balığıdır. Roma mitolojisinde Neptune olarak bilinir ve Roma donanmasının koruyucu tanrısı olmuştur.\n\nPoseidon, aynı zamanda yeraltı sularının ve nehirlerin de kontrolüne sahiptir. Depremler yaratarak yeryüzünü sarsabilir ve yeni adalar oluşturabilir. Bu güçleriyle hem yaratıcı hem de yıkıcı bir tanrı olarak kabul edilir.',
    image: '/poseidon.jpg',
    attributes: ['Deniz', 'Deprem', 'Atlar', 'Üç Dişli Mızrak'],
    powers: ['Denizleri kontrol etme', 'Deprem yaratma', 'At kontrolü', 'Fırtına oluşturma'],
    related: ['zeus', 'hades', 'amphitrite']
  },
  {
    id: 'hades',
    title: 'Hades',
    category: 'god',
    description: 'Yeraltı dünyasının ve ölülerin kralı',
    fullStory: 'Hades, Kronos ve Rhea\'nın oğlu, Zeus ve Poseidon\'un kardeşidir. Titanlar savaşından sonra dünya üç kardeş arasında paylaştırıldığında, Hades yeraltı dünyasının kontrolünü aldı. En karanlık ve en gizemli tanrı olarak kabul edilir.\n\nHades, yeraltı dünyasında tahtında oturur ve ölülerin krallığını yönetir. Yeraltı dünyası, sadece ölülerin değil, aynı zamanda ruhların yargılandığı ve cezalandırıldığı bir yerdir. Hades, bu dünyanın mutlak hükümdarıdır ve kimsenin yeraltından kaçmasına izin vermez.\n\nEn ünlü hikayesi, Persephone\'yi kaçırmasıdır. Persephone, Demeter ve Zeus\'un kızıdır ve bahar tanrıçasıdır. Hades, Persephone\'ye aşık olur ve onu yeraltına kaçırmak için yer yüzüne çıkar. Persephone, narkissos çiçeklerini toplarken Hades tarafından kaçırılır.\n\nDemeter, kızını bulunca çaresiz kalır ve dünyayı bereketten mahrum bırakır. Tarlalar kurur, bitkiler solar ve insanlar açlıkla karşı karşıya kalır. Zeus, araya girer ve bir çözüm bulur: Persephone, yılın bir kısmını yeraltında, diğer kısmını ise yer yüzünde annesiyle geçirecektir.\n\nBu yüzden Persephone, yılın altı ayını yeraltında, altı ayını ise yer yüzünde geçirir. Yeraltında olduğu zamanlarda Demeter yas tutar ve kış olur. Yer yüzüne döndüğünde ise Demeter sevinir ve bahar gelir. Bu mevsim döngüsünü açıklayan en güzel mitolojik hikayedir.\n\nHades, diğer tanrılardan farklı olarak genellikle yeraltından ayrılmaz. O, karanlık ve sessiz bir tanrıdır. Ancak adaletli bir hükümdardır ve ölülerin ruhlarına adil davranır. Yeraltı dünyasında üç nehir bulunur: Styx (yemin nehri), Acheron (keder nehri) ve Phlegethon (ateş nehri).\n\nHades\'in sembolleri arasında iki dişli mızrak (bident), karartma başlığı, zeytin ağacı ve nar bulunur. Roma mitolojisinde Pluto olarak bilinir ve zenginliklerin de koruyucusu olarak kabul edilir.\n\nHades, kötü bir tanrı değildir, sadece görevini yapan ciddi ve adaletli bir hükümdardır. Ona karşı çıkanları cezalandırır, ancak kurallara uyanları korur. Yeraltı dünyasının düzenini sağlar ve ruhların doğru yere gitmesini temin eder.',
    image: '/hades.jpg',
    attributes: ['Yeraltı', 'Ölüler', 'Adalet', 'Persephone'],
    powers: ['Yeraltı kontrolü', 'Ruh yönetimi', 'Görünmezlik', 'Zenginlik'],
    related: ['zeus', 'poseidon', 'persephone']
  },
  {
    id: 'hera',
    title: 'Hera',
    category: 'goddess',
    description: 'Evlilik ve ailenin koruyucusu, tanrıların kraliçesi',
    fullStory: 'Hera, Kronos ve Rhea\'nın kızı, Zeus\'un kardeşi ve eşidir. Tanrıçalar arasında en güçlü ve en saygın olanıdır. Evlilik, aile ve kadınların koruyucusu olarak kabul edilir. Olimpos\'ta Zeus\'un yanında tahtında oturur ve tanrıların kraliçesi unvanını taşır.\n\nHera ve Zeus\'un evliliği oldukça karmaşıktır. Zeus\'un sürekli olarak ölümlü kadınlarla ve diğer tanrıçalarla ilişkisi olması, Hera\'yı sürekli kıskandırmıştır. Hera, kocasının sadakatsizliğinden dolayı çok öfkeli ve intikamcı bir karaktere sahip olmuştur.\n\nHera\'nın en ünlü öfkesi Herkül\'e yöneliktir. Herkül, Zeus\'un ölümlü kadın Alkmene\'den olan oğludur. Hera, bu ilişkiye öfkelendi ve Herkül\'ün hayatı boyunca ona işkence etmeye karar verdi. Herkül bebekken yılanlar gönderdi, büyüdüğünde onu delilik çemberine sokarak karısı ve çocuklarını öldürttü.\n\nAncak Herkül, 12 görevi tamamladıktan sonra ölümsüzlüğe kavuştu ve Hera ile barıştı. Sonunda Hera, Herkül\'ü kızı Hebe ile evlendirdi ve onu Olimpos\'a kabul etti.\n\nHera sadece intikamcı değil, aynı zamanda koruyucu bir tanrıçadır. Evli çiftleri korur, aile birliğini sağlar ve kadınların haklarını savunur. Peleus ve Thetis\'in düğününde, Eris\'in attığı altın elma yüzünden çıkan kavgayı yatıştırmaya çalışmıştır.\n\nHera\'nın sembolleri arasında tavus kuşu, koç, elma ve lilyum çiçeği bulunur. Tavus kuşu, onun güzelliğini ve kraliçeliğini simgeler. Koç, gücünü ve koruma içgüdüsünü temsil eder.\n\nRoma mitolojisinde Juno olarak bilinir ve Roma\'nın en önemli tanrıçalarından biridir. Roma\'da evlilik ve aile kurumlarının koruyucusu olarak tapınılmıştır.\n\nHera, kadınların güçlü ve bağımsız olmasını savunan bir tanrıçadır. Ona göre kadınlar erkeklerle eşit haklara sahip olmalıdır. Bu yüzden kadınlar tarafından çok sevilir ve kendilerine koruyucu olarak görürler.\n\nHera\'nın tapınakları genellikle yüksek tepelerde ve şehirlerin merkezinde inşa edilirdi. En önemli tapınaklarından biri Argos\'taki Hera tapınağıdır. Bu tapınak, antik dünyanın yedi harikasından biri olarak kabul edilirdi.',
    image: '/hera.jpg',
    attributes: ['Evlilik', 'Aile', 'Kraliçe', 'Sadakat'],
    powers: ['Evlilik koruması', 'Aile birliği', 'Kadın gücü', 'Adalet'],
    related: ['zeus', 'hercules', 'hebe']
  },
  {
    id: 'ares',
    title: 'Ares',
    category: 'god',
    description: 'Savaşın, şiddetin ve kanın tanrısı',
    fullStory: 'Ares, Zeus ve Hera\'nın oğlu, savaş tanrısıdır. Olimpos tanrıları arasında en kaba, en şiddetli ve en kanlı olanıdır. Savaş alanlarında en güçlü tanrı olarak kabul edilir, ancak strateji ve zeka yerine kaba kuvvete güvenir.\n\nAres, savaşın kendisini temsil eder. O, savaşın heyecanını, kanın tadını ve zaferin coşkusunu sever. Diğer tanrılar ondan korkar ve uzak dururlar. Athena ise onun zıttıdır; Athena savaşı strateji ve zekayle yönetirken, Ares onu kaba kuvvet ve şiddetle yönetir.\n\nAres\'in en ünlü ilişkisi Aphrodite ile olan gizli aşkıdır. Aphrodite, Hephaistos ile evli olmasına rağmen, Ares ile birlikte olmuştur. Bu ilişkiden Deimos (korku) ve Phobos (terör) dünyaya gelmiştir. Bir gün Hephaistos, onları birlikte yakalamış ve görünmez bir ağla tüm tanrıların önünde onları utandırmıştır.\n\nAres, Truva Savaşı\'nda Truvalıları desteklemiştir. Athena, Hera ve Poseidon Yunanları desteklerken, Ares Truvalıların yanında yer almıştır. Savaşta kahraman Hektor\'u korumuş ve ona güç vermiştir. Ancak sonunda Akhilles tarafından öldürülen Hektor\'un ölümüne engel olamamıştır.\n\nAres, sadece savaş tanrısı değil, aynı zamanda adaletin de koruyucusudur. Haksızlığa uğrayanları korur ve onlara yardım eder. Ancak adaletini genellikle şiddet yoluyla sağlar.\n\nAres\'in sembolleri arasında mızrak, kalkan, köpek ve akbaba bulunur. Mızrak ve kalkan savaş gücünü simgeler. Köpek, sadakatini ve koruma içgüdüsünü temsil eder. Akbaba ise savaş meydanlarında dolaşarak ölümü simgeler.\n\nRoma mitolojisinde Mars olarak bilinir ve Roma\'nın en önemli tanrılarından biridir. Roma askerleri savaşa gitmeden önce Mars\'a dua ederlerdi. Roma, Mars\'ın şehri olarak kabul edilirdi ve askeri gücün sembolü olarak görülürdü.\n\nAres, korkulan ama saygı duyulan bir tanrıdır. Onun gücü korkutucudur, ancak adaletli olduğu için de saygı görür. Savaş alanlarında adil davranır ve kahramanları korur.',
    image: '/ares.jpg',
    attributes: ['Savaş', 'Şiddet', 'Kan', 'Cesaret'],
    powers: ['Savaş gücü', 'Korku yayma', 'Silah kontrolü', 'Askeri liderlik'],
    related: ['aphrodite', 'athena', 'hector']
  },
  {
    id: 'artemis',
    title: 'Artemis',
    category: 'goddess',
    description: 'Av, ay ve vahşi doğanın tanrıçası',
    fullStory: 'Artemis, Zeus ve Leto\'nun kızı, Apollo\'nun ikiz kardeşidir. Doğum hikayesi oldukça dramatiktir. Hera, Leto\'nun çocuk doğurmasına izin vermemiştir. Leto, dokuz gün süren bir yolculuktan sonra Delos Adası\'nda sığınak bulmuştur.\n\nArtemis, Apollo\'dan önce doğmuştur ve annesinin doğumuna yardım etmiştir. O, avın ve vahşi doğanın tanrıçasıdır. Ormanlarda, dağlarda ve ıssız yerlerde dolaşır. Altın okları ve gümüş yayı vardır, bu silahlar asla isabet kaybetmez.\n\nArtemis, bakire bir tanrıçadır ve evlenmeyi reddeder. Ona eşlik eden nymphler ve av köpekleri vardır. Vahşi hayvanları korur, onlara bakar ve onların güvenliğini sağlar. Özellikle geyikler ve ayılar onun kutsal hayvanlarıdır.\n\nArtemis\'in en ünlü hikayesi Actaeon ile olanıdır. Actaeon, bir avcıdır ve ormanda Artemis\'in çıplak gördüğüne şahit olur. Artemis, bu utanç verici duruma öfkelendi ve Actaeon\'u bir geyiğe dönüştürdü. Kendi av köpekleri onu kovalamış ve parçalamıştır.\n\nBaşka bir ünlü hikayesi ise Orion ile olanıdır. Orion, dev bir avcıdır ve Artemis\'e aşık olmuştur. Ancak Apollo, kardeşinin bir ölümlüye aşık olmasına karşı çıkmıştır. Apollo, Orion\'u denize sokarak onu öldürtmüştür. Artemis, kardeşinin bu yaptığına çok üzülmüştür.\n\nArtemis, aynı zamanda doğumun da koruyucusudur. Kadınların doğum sırasında ona dua ederler ve onun yardımıyla güvenli bir şekilde doğum yaparlar. Bu yüzden ebeler ve doğum yapan kadınlar tarafından çok sevilir.\n\nArtemis\'in sembolleri arasında ay, geyik, hilal ve ok bulunur. Ay, onun geceyi ve gizemi simgeler. Geyik, vahşi doğayı ve özgürlüğü temsil eder. Hilal ve ok ise avcılık gücünü gösterir.\n\nRoma mitolojisinde Diana olarak bilinir ve Roma\'da av ve ay tanrıçası olarak tapınılmıştır. Roma kadınları, özellikle avcılıkla uğraşanlar ve doğum yapanlar tarafından çok sevilirdi.\n\nArtemis, bağımsız ve güçlü bir kadın figürüdür. Kendi kararlarını veren, kendi yolunu çizen ve kimsenin kontrolüne izin vermeyen bir tanrıçadır. Bu yüzden modern zamanlarda feminist bir sembol haline gelmiştir.',
    image: '/artemis.jpg',
    attributes: ['Av', 'Ay', 'Vahşi Doğa', 'Bakire'],
    powers: ['Avcılık', 'Ay kontrolü', 'Hayvanlarla iletişim', 'Doğum koruması'],
    related: ['apollo', 'let', 'actaeon']
  },
  {
    id: 'hephaestus',
    title: 'Hephaestus',
    category: 'god',
    description: 'Ateş, demircilik ve zanaatların tanrısı',
    fullStory: 'Hephaestus, Zeus ve Hera\'nın oğludur. Ancak diğer tanrılardan farklı olarak çirkin ve topaldır. Doğduğunda annesi Hera, onun çirkinliğinden utanarak Olimpos\'tan atmıştır. Hephaestus, bir gün boyunca düşmüş ve denizin dibine çarpmıştır.\n\nDenizde Thetis ve Eurynome tarafından bulunmuş ve büyütülmüştür. Onlar, Hephaestus\'un demircilik yeteneğini keşfetmişler ve ona bir dökümhane kurmuşlardır. Hephaestus, burada tanrılar için silahlar, takılar ve çeşitli eşyalar yapmaya başlamıştır.\n\nHephaestus, en yetenekli demircidir. O, Zeus\'un yıldırımlarını, Athena\'nın kalkanını (Aegis), Apollo\'nun güneş arabasını ve birçok tanrısal eşyayı yapmıştır. En ünlü eseri, Pandora\'yı yaratmasıdır. Zeus\'un emriyle, topraktan ilk kadını yaratmış ve ona hayat vermiştir.\n\nHephaestus, annesinin affını kazanmak için Olimpos\'a dönmeye karar verir. Bir gün, inanılmaz bir sandalye yapar ve annesine hediye eder. Hera, bu sandalyeye oturduğunda kalkamaz hale gelir. Hephaestus, ancak Dionysos\'un sarhoş etmesiyle annesini affettirir ve Olimpos\'a geri döner.\n\nOlimpos\'ta Hephaestus, Aphrodite ile evlendirilir. Ancak Aphrodite, onunla mutlu olmaz ve sürekli olarak Ares ile ilişki yaşar. Hephaistos, bu ilişkiyi öğrendiğinde onları görünmez bir ağla yakalamış ve tüm tanrıların önünde utandırmıştır.\n\nHephaestus, sadece tanrılar için değil, aynı zamanda kahramanlar için de eserler yapmıştır. Akhilles\'in zırhını, Perseus\'un kılıcını ve Herkül\'ün manyetik sopa gibi birçok efsanevi eşyayı o yapmıştır.\n\nHephaestus\'in sembolleri arasında örs, çekiç, alev ve demir bulunur. Örs ve çekiç demircilik sanatını simgeler. Alev, ateşi ve yaratıcı gücü temsil eder. Demir ise dayanıklılığı ve gücü gösterir.\n\nRoma mitolojisinde Vulcan olarak bilinir ve Roma\'da demirciler ve zanaatkarlar tarafından tapınılmıştır. Roma\'da demircilik ocakları onun adına kutsal kabul edilirdi.\n\nHephaestus, çirkin görünümüne rağmen en sevecen ve en çalışkan tanrıdır. O, zorluklara rağmen yeteneklerini geliştirmiş ve tanrılar arasında saygın bir yer edinmiştir. Zanaatkarların ve emekçilerin koruyucusu olarak kabul edilir.',
    image: '/hephaestus.jpg',
    attributes: ['Ateş', 'Demircilik', 'Zanaat', 'Yaratıcılık'],
    powers: ['Ateş kontrolü', 'Demircilik', 'Eser yapma', 'Teknoloji'],
    related: ['aphrodite', 'ares', 'zeus']
  },
  {
    id: 'demeter',
    title: 'Demeter',
    category: 'goddess',
    description: 'Tarım, bereket ve hasat tanrıçası',
    fullStory: 'Demeter, Kronos ve Rhea\'nın kızı, Zeus\'un kardeşidir. Tarım, bereket ve hasatın tanrıçasıdır. İnsanlara tarımı öğretmiş ve onları açlıktan kurtarmıştır. Toprağın verimli olması ve bitkilerin büyümesi onun sayesindedir.\n\nDemeter\'in en ünlü hikayesi kızı Persephone\'nin kaçırılmasıdır. Persephone, Demeter ve Zeus\'un kızıdır ve dünyanın en güzel kızlarından biridir. Hades, Persephone\'ye aşık olur ve onu yeraltına kaçırmak için yer yüzüne çıkar.\n\nPersephone kaçırıldığında Demeter, çaresiz kalır ve dünyayı bereketten mahrum bırakır. Tarlalar kurur, bitkiler solar ve insanlar açlıkla karşı karşıya kalır. Demeter, kızını aramak için dünyayı dolaşır, ancak onu bulamaz.\n\nSonunda Helios (güneş tanrısı), Demeter\'e olan olduğunu söyler. Demeter, Hades\'in karşısına çıkar ve kızını geri ister. Ancak Hades, Persephone\'nin yeraltıdan bir nar yediğini ve bu yüzden oraya bağlı kaldığını söyler.\n\nZeus, araya girer ve bir çözüm bulur: Persephone, yılın bir kısmını yeraltında, diğer kısmını ise yer yüzünde annesiyle geçirecektir. Persephone, yılın altı ayını yeraltında, altı ayını ise yer yüzünde geçirir.\n\nBu yüzden Persephone, yeraltında olduğu zamanlarda Demeter yas tutar ve kış olur. Yer yüzüne döndüğünde ise Demeter sevinir ve bahar gelir. Bu mevsim döngüsünü açıklayan en güzel mitolojik hikayedir.\n\nDemeter, sadece tarım tanrıçası değil, aynı zamanda anne tanrıçasıdır. Ona "Anne" denir ve tüm canlıları anne gibi korur. Özellikle çocuklar ve anneler tarafından çok sevilir.\n\nDemeter\'in sembolleri arasında buğday başağı, mısır, nar ve ekmek bulunur. Buğday başağı, bereketi ve hasatı simgeler. Mısır, yaşamı ve büyümeyi temsil eder. Nar ise Persephone ve yeraltı dünyasını sembolize eder.\n\nRoma mitolojisinde Ceres olarak bilinir ve Roma\'da tarım tanrıçası olarak tapınılmıştır. Roma\'da hasat zamanları onun adına kutlanır ve ona şükran sunulurdu.\n\nDemeter, şefkatli ve koruyucu bir anne figürüdür. Onun sevgisi sınırsızdır ve tüm canlıları kapsar. İnsanlara sadece yiyecek değil, aynı zamanda yaşam ve umut verir.',
    image: '/demeter.jpg',
    attributes: ['Tarım', 'Bereket', 'Hasat', 'Anne'],
    powers: ['Tarım kontrolü', 'Bereket', 'Mevsim düzeni', 'Toprak verimliliği'],
    related: ['persephone', 'zeus', 'hades']
  },
  {
    id: 'odysseus',
    title: 'Odysseus',
    category: 'hero',
    description: 'Truva Savaşı kahramanı ve İthaka kralı',
    fullStory: 'Odysseus, Laertes ve Anticlea\'nın oğlu, İthaka kralıdır. Truva Savaşı\'na katılan en önemli kahramanlardan biridir. Ancak en çok, savaştan sonraki on yıl süren eve dönüş yolculuğuyla tanınır.\n\nOdysseus, zeki ve kurnaz bir kahramandır. Güçlü olmasa da, zekası ve stratejileri sayesinde her zorluğun üstesinden gelir. Truva Savaşı\'nda Truva Atı hilesini düşünür ve bu hile sayesinde savaşı kazanır.\n\nAncak Poseidon, Odysseus\'un oğlu Polyphemus\'u kör etmesine öfkelendi. Bu yüzden Odysseus\'un eve dönüş yolculuğunu on yıl boyunca engelledi. Bu on yıl içinde Odysseus, birçok tehlikeyle karşılaştı.\n\nİlk olarak, Kikonlar\'a gider ve burada birçok savaşçı kaybeder. Sonra Lotophaglardan (lotus yiyenler) geçer. Onların lotus meyvesini yiyen adamlar, evlerine dönmeyi unuturlar. Odysseus, onları zorla gemiye bindirir.\n\nPolyphemus (tek gözlü dev) ile karşılaşır. Odysseus, devi kandırarak onu sarhoş eder ve gözünü kör eder. Ancak Polyphemus, babası Poseidon\'dan intikam ister ve bu, Odysseus\'un uzun yolculuğunun başlangıcı olur.\n\nAeolos (rüzgarlar tanrısı), Odysseus\'a rüzgarları bir torbaya koyarak hediye eder. Ancak adamları, torbada hazine olduğunu düşünerek onu açar ve tüm rüzgarlar kaçar. Bu yüzden tekrar Polyphemus\'un adasına geri dönerler.\n\nKirke adasına gelirler. Kirke, bir cadıdır ve adamları domuza çevirir. Odysseus, Hermes\'in yardımıyla onu yenmiş ve adamlarını geri çevirmesini sağlamıştır. Kirke, bir yıl onları misafir eder ve onlara birçok tavsiyede bulunur.\n\nSeirens (deniz perileri) ile karşılaşırlar. Seirens, büyülü sesleriyle denizcileri ölüm çeker. Odysseus, adamlarının kulaklarını balmumla tıkar, kendisini ise direğe bağlar. Bu sayede Seirens\'in etkisinden kurtulurlar.\n\nScylla ve Charybdis arasında geçerler. Scylla, altı başlı bir canavardır ve gemilerden altı adam alır. Charybdis ise dev bir girdaptır ve gemileri yutar. Odysseus, Scylla\'yı seçer ve altı adamını kaybeder.\n\nSonunda Calypso adasına ulaşır. Calypso, bir nimfadır ve Odysseus\'a aşık olur. Onu yedi yıl boyunca adada tutar. Ancak Athena, Zeus\'u araya sokar ve Calypso\'nun Odysseus\'u serbest bırakmasını sağlar.\n\nOdysseus, sonunda İthaka\'ya döner. Ancak evi, karısı Penelope\'nin talipleri tarafından işgal edilmiştir. Odysseus, eski bir dilencenin kılığına girer ve talipleri yarışmada yenerek onları öldürür. Sonunda karısı ve oğlu Telemachus ile kavuşur.\n\nOdysseus, zeka ve sabrın sembolüdür. Onun hikayesi, insanın zorluklara rağmen evine ve ailesine olan özlemiyle nasıl başa çıkabildiğini gösterir.',
    image: '/odysseus.jpg',
    attributes: ['Zeka', 'Kurnazlık', 'Sabır', 'Liderlik'],
    powers: ['Strateji', 'İkna', 'Problem çözme', 'Sadakat'],
    related: ['penelope', 'telemachus', 'athena']
  },
  {
    id: 'perseus',
    title: 'Perseus',
    category: 'hero',
    description: 'Medusa\'yı öldüren kahraman',
    fullStory: 'Perseus, Zeus ve Danaë\'nin oğludur. Danaë\'nin babası Kral Acrisius, bir Kehanet duydu: Torunu tarafından öldürülecekti. Bu yüzden kızı Danaë\'yi bir bronz kuleye hapsetti.\n\nAncak Zeus, Danaë\'ye altın yağmuru olarak girerek onunla birlikte oldu. Bu birliktelikten Perseus dünyaya geldi. Kral Acrisius, torununu öldürmekten korkarak onu ve annesini bir sandalyeye koyup denize attı.\n\nSandalye, Serifos adasına çıkar. Burada Kral Polydectes onları misafir eder. Polydectes, Danaë\'ye aşık olur ancak Perseus engel olur. Kral, Perseus\'dan Medusa\'nın başını getirmesini ister.\n\nPerseus, bu tehlikeli görevi kabul eder. Tanrılardan yardım alır: Athena\'dan parlak bir kalkan, Hermes\'ten uçan sandaletler ve keskin bir kılıç, Hades\'den ise görünmezlik başlığı.\n\nPerseus, Medusa\'nın mağarasına gizlice girer. Medusa uyurken, Athena\'nın kalkanına yansıyan görüntüsünü kullanarak onun direkt bakışından kaçınır. Kılıcıyla Medusa\'nın başını keser.\n\nO an, Medusa\'nın kanından kanatlı at Pegasus ve dev Chrysaor doğar. Perseus, bu canavarları da alır.\n\nDönüş yolunda Perseus, Andromeda adlı bir prensese rastlar. Andromeda, deniz canavarı Cetus\'a kurban edilmektedir. Perseus, Medusa\'nın başını kullanarak canavarı taşa çevirir ve Andromeda\'yı kurtarır.\n\nAndromeda ile evlenen Perseus, Serifos adasına döner. Kral Polydectes, onun başarısına inanmaz. Perseus, Medusa\'nın başını çıkarır ve kral ile adamlarını taşa çevirir.\n\nSonunda Perseus, annesi ve karısıyla birlikte yeni bir krallık kurar. Medusa\'nın başını Athena\'ya hediye eder. Athena, onu Aegis kalkanına yerleştirir.\n\nPerseus, cesaret ve zekanın birleşimidir. O, imkansız görünen bir görevi, tanrıların yardımı ve kendi zekasıyla başarmıştır. Kahramanlık ve fedakarlığın en güzel örneklerinden biridir.',
    image: '/perseus.jpg',
    attributes: ['Cesaret', 'Zeka', 'Fedakarlık', 'Kahramanlık'],
    powers: ['Görünmezlik', 'Uçma', 'Canavarları taşa çevirme', 'Tanrısal yardım'],
    related: ['medusa', 'athena', 'andromeda']
  },
  {
    id: 'apollo',
    title: 'Apollo',
    category: 'god',
    description: 'Güneş, müzik, şiir, kehanet ve tıbbın tanrısı',
    fullStory: 'Apollo, Zeus ve Leto\'nun oğlu, Artemis\'in ikiz kardeşidir. Delos Adası\'nda doğdu. Lir çalgısını icat etti ve müziğin tanrısı oldu. Delfi\'deki kehanet merkezi onun kontrolündedir. Her gün güneş arabasıyla göğü aşar dünyayı aydınlatır. Tıbbın ve iyileşmenin de tanrısıdır. Aynı zamanda güzellik ve sanatların koruyucusudur. Çok sayıda aşk hikayesi vardır, ancak çoğu trajik sonlanmıştır.',
    image: '/apollo.jpg',
    attributes: ['Güneş', 'Müzik', 'Kehanet', 'Defne'],
    powers: ['Güneş kontrolü', 'Müzik ve şiir', 'Kehanet', 'İyileştirme'],
    related: ['artemis', 'zeus', 'daphne']
  },
  {
    id: 'aphrodite',
    title: 'Aphrodite',
    category: 'goddess',
    description: 'Aşk, güzellik, zevk ve üremenin tanrıçası',
    fullStory: 'Aphrodite, iki farklı hikayeye göre dünyaya gelmiştir. Bir hikayeye göre Uranos\'un kesilen genital organlarının denize düşmesiyle köpükten doğmuştur. Diğer hikayeye göre Zeus ve Dione\'nin kızıdır. Kıbrıs adası kıyılarına ayak basmıştır. Güzelliği o kadar büyüktür ki, tüm tanrılar ona aşık olur. Hephaistos ile evli olmasına rağmen, Ares ile gizli ilişkisi vardır. Altın kemeri giydiğinde anyone who sees it falls in love with her.',
    image: '/aphrodite.jpg',
    attributes: ['Aşk', 'Güzellik', 'Köpük', 'Altın Kemer'],
    powers: ['Aşk büyüsü', 'Güzellik', 'Arzu uyandırma', 'Barış'],
    related: ['hephaistos', 'ares', 'eros']
  },
  {
    id: 'hercules',
    title: 'Herkül',
    category: 'hero',
    description: 'En büyük Yunan kahramanı, 12 görevin tamamlayıcısı',
    fullStory: 'Herkül (Herakles), Zeus ve ölümlü Alkmene\'nin oğludur. Hera, kocasının sadakatsizliğinden dolayı Herkül\'e ömür boyu düşman olmuştur. Bebekken yılanlarla aynı yatağı paylaşmış ve onları boğarak öldürmüştür. Delilik anında karısı ve çocuklarını öldürdükten sonra, günahlarından arınmak için 12 görevi tamamlamak zorunda kalmıştır. Bu görevler arasında Nemean Aslanı\'nı öldürmek, Lerna Hidrası\'nı yenmek ve Altın Post\'u getirmek bulunur. Tanrılar arasında bir yere kavuşmuş ve Hebe ile evlenmiştir.',
    image: '/hercules.jpg',
    attributes: ['Kahraman', 'Güç', '12 Görev', 'Ölümsüzlük'],
    powers: ['Aşırı güç', 'Dayanıklılık', 'Cesaret', 'Savaş becerileri'],
    related: ['zeus', 'hera', 'eurystheus']
  },
  {
    id: 'medusa',
    title: 'Medusa',
    category: 'creature',
    description: 'Yılan saçlı, bakışıyla insanı taşa çeviren canavar',
    fullStory: 'Medusa, başlangıçta güzel bir ölümlü kadındı. Athena tapınağında Poseidon ile birlikte olduğuna dair söylentiler çıkmıştır. Kızgın olan Athena, Medusa\'yı canavara dönüştürmüştür: saçları yılanlara dönüşmüş, bakışları insanları taşa çevirir hale gelmiştir. İki kız kardeşi Stheno ve Euryale ile birlikte Gorgonlar olarak bilinir. Perseus, onu öldürmek için Athena\'dan parlak kalkan, Hermes\'ten uçan sandaletler ve Hades\'den görünmezlik başlığı almıştır. Medusa\'yı yansımada görerek başını kesmiştir. Kanından kanatlı at Pegasus ve dev Chrysaor doğmuştur.',
    image: '/medusa.jpg',
    attributes: ['Gorgon', 'Yılan saç', 'Taşa çevirme', 'Ölümsüzlük'],
    powers: ['Bakışla taşa çevirme', 'Korku yayma', 'Zehirli yılanlar'],
    related: ['athena', 'poseidon', 'perseus']
  },
  {
    id: 'trojan-war',
    title: 'Truva Savaşı',
    category: 'story',
    description: 'Yunan mitolojisinin en epik savaşı, on yıl süren mücadele',
    fullStory: 'Truva Savaşı, Truva Prens Paris\'in Sparta Kralı Menelaus\'un karısı Helen\'i kaçırmasıyla başladı. Yunan kralları, Helen\'i geri getirmek için Truva\'ya karşı birleşti. Akhalar (Yunanlar) ve Truvalılar arasında on yıl süren kanlı bir savaş yaşandı. Savaşta kahramanlar Akhilles, Hektor, Odysseus ve Aias gibi destansı figürler öne çıktı. Savaş, Akhille\'sin öldürülmesi ve Truva atı hilesiyle sona erdi. Yunanlar, Truva atı içinde şehre gizlice sızdı ve şehri yakıp yıktı. Bu savaş, Homeros\'un İlyada ve Odysseia destanlarına konu olmuştur.',
    image: '/trojan-war.jpg',
    attributes: ['Savaş', 'Aşk', 'İhanet', 'Destan'],
    powers: ['Strateji', 'Kahramanlık', 'Tanrı müdahalesi'],
    related: ['achilles', 'hector', 'helen', 'odysseus']
  },
  {
    id: 'hephaestus',
    title: 'Hephaestus',
    category: 'god',
    description: 'Ateş, demircilik ve zanaatların tanrısı',
    fullStory: 'Hephaestus, Zeus ve Hera\'nın oğludur. Ancak diğer tanrılardan farklı olarak çirkin ve topaldır. Doğduğunda annesi Hera, onun çirkinliğinden utanarak Olimpos\'tan atmıştır. Hephaestus, bir gün boyunca düşmüş ve denizin dibine çarpmıştır.\n\nDenizde Thetis ve Eurynome tarafından bulunmuş ve büyütülmüştür. Onlar, Hephaestus\'un demircilik yeteneğini keşfetmişler ve ona bir dökümhane kurmuşlardır. Hephaestus, burada tanrılar için silahlar, takılar ve zırhlar yapmaya başlamıştır.\n\nHephaestus, kendi demirci atölyesinde çalışır ve eserler yaratır. Olimpos tanrıları için yıldırım çakılları, altın sarayları ve çeşitli takılar yapar. Ayrıca, insanlara ateş ve demircilik sanatını öğretmiştir.\n\nEn ünlü eseri之一nden biri, Zeus\'un şimşekleri için yaptığı altın saraylardır. Bu saraylar, tanrıların silahları kadar güçlüdür ve korkutucudur.\n\nHephaestus, aynı zamanda otomatlar ve zırhlar yapar. Tanrıların atları, arabaları ve çeşitli mekanik aletler yaratır. Bu eserler, hem işlevsel hem de sanatsal değer taşır.\n\nHephaestus, Aphrodite ile evlidir. Ancak evliliği monogam olmaktan uzaktır. Aphrodite, Hephaistos\'un eserlerini takdirir ve onlara dalga geçer. Bu ilişkiden çok sayıda tanrı ve canavar dünyaya gelmiştir.\n\nHephaestus, diğer tanrılardan farklı olarak zeminde yaşar. O, insanlarla daha iyi anlaşır ve onların sorunlarına yardım eder. Onun demirci dükkanı, herkesin erişebileceği bir yerdir.\n\nHephaestus\'un sembolleri arasında çekiç, örs, demir örsü ve ateş bulunur. Roma mitolojisinde Vulcanus olarak bilinir ve ateş ve demircilik tanrısı olarak tapınılmıştır.',
    image: '/hephaestus.jpg',
    attributes: ['Ateş', 'Demircilik', 'Zanaat', 'Olimpos'],
    powers: ['Ateş kontrolü', 'Demircilik', 'Süper güç', 'Yaratıcılık'],
    related: ['zeus', 'hera', 'aphrodite', 'ares']
  },
  {
    id: 'apollo',
    title: 'Apollo',
    category: 'god',
    description: 'Güneş, müzik, kehanet ve sanatların tanrısı',
    fullStory: 'Apollo, Zeus ve Leto\'nun oğlu, Artemis\'in ikiz kardeşidir. Delos Adası\'nda dünyaya gelmiştir. Doğum hikayesi oldukça dramatiktir. Hera, Leto\'nun çocuk doğurmasına izin vermemiştir. Leto, dokuz gün süren bir yolculuktan sonra Delos Adası\'nda sığınak bulmuştur.\n\nApollo, müzik, şiir, tıp ve kehanet tanrısıdır. Altın yayı ve gümüş okları vardır. Okları her zaman hedeflerini bulur ve korkunç sonuçlar doğurur.\n\nApollo, aynı zamanda güneş tanrısıdır. Her gün sabah doğduğunda gökyüzünü altın parlaklığıyla aydınlatır. Akşamları ise batarkan batı yolu izler.\n\nApollo, Delphi\'deki kehanet merkezini yönetir. İnsanlar geleceklerini öğrenmek için buraya gelirler ve Apollonun kahinleri aracılığıyla kehanetler yayınlar.\n\nApollo, sanatın koruyucusudur. Müzisyenler, şairler ve sanatçılar ona ilham verir. O, lir çalgısı olan kiti çalar ve insanların duygularını etkiler.\n\nApollo, aynı zamanda iyileştirici tanrısıdır. Tıbb bilgisine sahiptir ve hastalıkları iyileştirebilir. Plague tanrısı olarak kabul edilir ve insanlara musallar gönderir.\n\nApollo, Daphne adında bir nymph\'e aşık olmuştur. Ancak Daphne\'nin babası bir nehir tanrısıdır ve kızını korumak için Apollo\'yu bir kurban ister. Bu olay, Apollo\'yu derin bir acı vermiştir.\n\nApollo\'un sembolleri arasında güneş, lir çalgısı, ok ve defne bulunur. Roma mitolojisinde Apollo olarak bilinir.',
    image: '/apollo.jpg',
    attributes: ['Güneş', 'Müzik', 'Kehanet', 'Sanat', 'İyileştirme'],
    powers: ['Güneş ışınları', 'Kehanet', 'Müzik yeteneği', 'İyileştirme', 'Okçuluk'],
    related: ['zeus', 'artemis', 'let', 'artemis']
  },
  {
    id: 'demeter',
    title: 'Demeter',
    category: 'goddess',
    description: 'Tarım, bereket ve mevsimlerin tanrıçası',
    fullStory: 'Demeter, Kronos ve Rhea\'nın kızı, Zeus, Poseidon ve Hades\'in kardeşidir. Tarım ve bereket tanrıçasıdır. İnsanların geçim kaynağı ve bereketinin koruyucusudur.\n\nDemeter, kızı Persephone\'yi çok sever. Persephone, güzel ve masum bir kızdır. Demeter, onu her yanından ayırmaz.\n\nDemeter, Persephone\'nin kaçırılması hikayesi en ünlü mitolojik hikayelerden biridir. Hades, Persephone\'ye aşık olmuş ve onu yeraltı dünyasına kaçırmıştır. Bu olay, Demeter\'i büyük bir keder bırakmıştır.\n\nPersephone kaçırıldıktan sonra Demeter, yas tutmuş ve dünyayı bereketsiz bırakmıştır. Tarlalar kurur, bitkiler solar ve insanlar açlıktan ölür. Bu kış, insanlığın sonunu tehdit etmiştir.\n\nZeus, duruma müdahale etmiştir. Hades\'in Persephone\'yi yanında olmasına izin verir, ancak kış aylarında yer yüzünde annesiyle olmasına izin verilir.\n\nBu düzenleme sayesinde, Persephone yılın altı ayını yeraltında, diğer altı ayını ise annesiyle yer yüzünde geçirir. Bu mevsim döngüsünü açıklayan en güzel mitolojik hikayedir.\n\nDemeter, tarım ve bereketin yanı sıra insanlığa da hizmet eder. İnsanlara tarım ekme, ekin biçme ve bereketli hasat nasıl yapacaklarını öğretir.\n\nDemeter\'in sembolleri arasında buğday, mısır, orak ve tarım bulunur. Roma mitolojisinde Ceres olarak bilinir.',
    image: '/demeter.jpg',
    attributes: ['Tarım', 'Bereket', 'Mevsimler', 'Anne'],
    powers: ['Tarım kontrolü', 'Bereket', 'Mevsim değiştirme', 'Bitki yeteneği'],
    related: ['zeus', 'poseidon', 'hades', 'persephone']
  },
  {
    id: 'dionysus',
    title: 'Dionysus',
    category: 'god',
    description: 'Şarap, eğlence, festival ve tiyatro tanrısı',
    fullStory: 'Dionysus, Zeus\'un oğlu olarak kabul edilir, ancak aslında Persephone ile Hera\'nın evliliğinden doğmuştur. Bu karmaşık doğum, onun karakterini etkilemiştir.\n\nDionysus, şarap tanrısıdır. Asma üzümü ve şarap yapar. İnsanlara şarap, eğlence ve festival zevki verir. Ancak şarabın iki yüzü de vardır: sarhoşluk ve kaos.\n\nDionysus, asma üzümü takipçileri olan Satirler ve Mainadlar vardır. Bu kadınlar, dini ayinlerde önemli bir rol oynarlar.\n\nDionysus, tiyatronun da koruyucusudur. Tragedi ve komedi oyunlarında önemli bir rol oynar. Oyun yazarları ona ilham verir.\n\nDionysus, yaban hayvanları kontrol edebilir. Leoparlar, kaplanlar ve panterler onun hizmetindedir.\n\nDionysus, Hindistan\'dan şarap getirmiştir. Bu seyahat, farklı kültürleri tanımasına neden olmuştur.\n\nDionysus\'un sembolleri arasında asma üzümü, üzüm sopa, defne ve üzüm salkısı bulunur. Roma mitolojisinde Bacchus olarak bilinir.',
    image: '/dionysus.jpg',
    attributes: ['Şarap', 'Eğlence', 'Festival', 'Tiyatro', 'Yaban Hayvanlar'],
    powers: ['Şarap yapımı', 'Eğlence', 'İnsanları kontrol etme', 'Yaban hayvan kontrolü'],
    related: ['zeus', 'hera', 'sileni', 'maenads']
  },
  {
    id: 'hermes',
    title: 'Hermes',
    category: 'god',
    description: 'Haberleşme, ticaret, hırsızlar ve yolcuların tanrısı',
    fullStory: 'Hermes, Zeus ve Maia\'nın oğludur. Habercilik ve ticaret tanrısıdır. Tanrıların habercisi olarak görev yapar.\n\nHermes, kanatlı sandaletler giyer ve kanatlı bir şapka takar. Bu şapka, onu hızlı ve çevik yapmasını sağlar.\n\nHermes, rüya tanrısıdır. İnsanlar arasında ticareti kolaylaştırır ve zenginleştirir.\n\nHermes, hırsızların koruyucusudur. Hırsızlar, ona saygılarını verir ve onları korur.\n\nHermes, yolcuların da koruyucusudur. Yolcuların güvenliğini sağlar ve onlara yol gösterir.\n\nHermes, uyku tanrısıdır. İnsanların rüyalarını yorumlar ve onlara mesajlar verir.\n\nHermes, ölümlerin ruhlarını yeraltı dünyasına götürür. Bu görevi, ruhların doğru yere gitmesini sağlar.\n\nHermes, sihirli bir çizme olan caduceus\'a sahiptir. Bu çizme, yılanların birbirine dönmesini sağlar.\n\nHermes\'in sembolleri arasında kanatlı sandalet, rüya, caduceus ve kanatlı ayakkabılar bulunur. Roma mitolojisinde Mercury olarak bilinir.',
    image: '/hermes.jpg',
    attributes: ['Haberleşme', 'Ticaret', 'Hırsızlık', 'Yolcular', 'Uyku'],
    powers: ['Süper hız', 'Görünmezlik', 'Ruh yönetimi', 'Sihirli çizme'],
    related: ['zeus', 'hera', 'apollo', 'athena']
  },
  {
    id: 'persephone',
    title: 'Persephone',
    category: 'goddess',
    description: 'Yeraltı dünyasının kraliçesi, bahar tanrıçası',
    fullStory: 'Persephone, Demeter ve Zeus\'un kızıdır. Bahar ve yeniden doğuş tanrıçasıdır.\n\nPersephone, masum ve güzel bir kızdır. Annesi Demeter tarafından çok sevilmektedir.\n\nPersephone\'nin kaçırılması hikayesi, en ünlü mitolojik hikayelerden biridir. Hades, Persephone\'ye aşık olmuş ve onu yeraltı dünyasına kaçırmıştır.\n\nHades, Persephone\'yi yeraltı dünyasının kraliçesi yapmıştır. Persephone, Hades ile evlenmek zorunda kalmıştır.\n\nPersephone, yeraltı dünyasında yaşarken annesini çok özlemektedir. Bu ayrılık, onu derinden etkilemiştir.\n\nZeus, duruma müdahale etmiştir. Hades\'in Persephone\'yi yanında olmasına izin verir, ancak kış aylarında yer yüzünde annesiyle olmasına izin verilir.\n\nBu düzenleme sayesinde, Persephone yılın altı ayını yeraltında, diğer altı ayını ise annesiyle yer yüzünde geçirir. Bu mevsim döngüsünü açıklayan en güzel mitolojik hikayedir.\n\nPersephone, yeraltı dünyasında nar tanrıçasıdır. Narların yeniden doğuşunu ve bereketini simgeler. Yeraltı dünyasında nar ağaçları vardır.\n\nPersephone, sadece yeraltı dünyasının kraliçesi değil, aynı zamanda ölülerin kraliçesidir. Yeraltı dünyasında ruhların yargılanmasına da katılır.\n\nPersephone\'in sembolleri arasında nar, nar çiçeği, zambak ve yeraltı dünyası bulunur.',
    image: '/persephone.jpg',
    attributes: ['Yeraltı', 'Bahar', 'Kraliçe', 'Yeniden Doğuş', 'Nar'],
    powers: ['Yeraltı kontrolü', 'Bitki yeteneği', 'Mevsim kontrolü', 'Ruh yargısı'],
    related: ['demeter', 'zeus', 'hades', 'hades']
  },
  {
    id: 'nike',
    title: 'Nike',
    category: 'goddess',
    description: 'Zafer, başarı ve mücadele tanrıçası',
    fullStory: 'Nike, zafer ve mücadele tanrıçasıdır. Zeus ve Styx nehrinin kızıdır.\n\nNike, zafer tanrıçası olarak tanrıların savaşlarında önemli bir rol oynar. O, savaşın sonucunu belirler ve kazanan tarafı ilan eder.\n\nNike, genellikle kanatlı bir kadın olarak tasvir edilir. Zaferi simgeleyen elinde tutar.\n\nNike, hızlı ve çeviktir. Savaş alanlarında hızla hareket eder ve zaferi getiren tarafa yönlendirir.\n\nNike, sadece savaşlarda değil, aynı zamanda spor müsabakalarında ve diğer yarışmalarda da zafer getiren tarafı destekler.\n\nNike, insanlara cesaret ve mücadele ruhu verir. Zorluk anında olanlara ilham verir.\n\nNike\'un sembolleri arasında zafer defnesi, zafer şeridi ve kanatlı sandaletler bulunur. Roma mitolojisinde Victoria olarak bilinir.',
    image: '/nike.jpg',
    attributes: ['Zafer', 'Başarı', 'Mücadele', 'Cesaret', 'Hız'],
    powers: ['Zafer getirme', 'Hızlanma', 'Cesaret verici', 'Savaş yönlendirme'],
    related: ['zeus', 'athena', 'ares', 'hermes']
  },
  {
    id: 'eros',
    title: 'Eros',
    category: 'god',
    description: 'Aşk, arzu ve tutku tanrısı',
    fullStory: 'Eros, aşk ve arzu tanrısıdır. Genellikle kanatlı bir çocuk olarak veya genç bir adam olarak tasvir edilir.\n\nEros, altın oku ve altın yayı vardır. Bu oklar, aşkın kalbine isabet eder ve insanları birbirine aşık eder.\n\nEros, altın yayı kullandığında, insanları aşık ettiği kişiye aşık olmalarını sağlar. Bu oklar, sadece fiziksel değil, aynı zamanda duygusal bir bağ kurar.\n\nEros, oyunbazlı ve şakacı bir tanrıdır. Tanrıları ve insanlarıyla şakalar yapar.\n\nEros, insanların kalplerini okuyabilir. İnsanların düşüncelerini ve duygularını bilir.\n\nEros, sadece aşk tanrısı değil, aynı zamanda yaratılışın da bir parçasıdır. Kaos\'dan doğan ilk varlıklardan biri olarak kabul edilir.\n\nEros\'un sembolleri arasında altın ok, altın yay, kalp ve kanatlı çocuk bulunur. Roma mitolojisinde Cupid olarak bilinir.',
    image: '/eros.jpg',
    attributes: ['Aşk', 'Arzu', 'Tutku', 'Yaratılış', 'Kalp okuyucu'],
    powers: ['Aşk oku', 'Kalp kontrolü', 'Arzu yayma', 'İnsanları kontrol etme', 'Yaratıcılık'],
    related: ['aphrodite', 'hera', 'zeus', 'psyche']
  },
  {
    id: 'psyche',
    title: 'Psyche',
    category: 'hero',
    description: 'İnsan ruhu, aşk ve ölümsüzlük hikayesi kahramanı',
    fullStory: 'Psyche, insan bir kızdır. Güzelliği o kadar tanrıçaların kıskançına neden olmuştur. Aphrodite, Psyche\'nin güzelliğinden kıskanarak onu zorlu görevler vermiştir.\n\nPsyche, Aphrodite\'in verdiği görevleri yerine getirmek için çaba gösterir. Bu görevler, imkansız ve tehlikeli görevlerdir.\n\nPsyche, en zor görevlerinden biri, Persephone\'nin güzellik kutusunu alıp Aphrodite\'ye vermektir. Psyche, kutuyu açmaya dayanamaz ve merak ederek içine bakar.\n\nBu hata, Aphrodite\'nin öfkesine neden olur ve Psyche\'yi terk eder.\n\nPsyche, çaresiz bir şekilde yolculuğa çıkar. İnsanlara yardım etmeye çalışır.\n\nPsyche, çeşitli zorluklarla karşılaşır. Bu zorluklar, onu daha güçlü ve bilgeç bir insan yapar.\n\nPsyche, sonunda Eros\'a ulaşır. Eros, ona yardım eder ve Aphrodite ile barışır.\n\nPsyche, ölümsüzlük kazanır ve tanrıçalar arasına yükselir. O, Eros ile evlenir ve tanrıça olur.\n\nPsyche\'in hikayesi, aşkın ve ölümsüzlüğün gücünü gösteren en güzel hikayelerden biridir.',
    image: '/psyche.jpg',
    attributes: ['İnsan ruhu', 'Aşk', 'Ölümsüzlük', 'Cesaret', 'Dayanıklılık'],
    powers: ['Zihinsel güç', 'Dayanıklılık', 'Problem çözme', 'İrade'],
    related: ['eros', 'aphrodite', 'hera', 'zeus']
  },
  {
    id: 'orpheus',
    title: 'Orpheus',
    category: 'hero',
    description: 'Müzisyen, şair ve ölüler dünyasına yolculuk hikayesi kahramanı',
    fullStory: 'Orpheus, müzik ve şiir tanrısı Apollo\'nun oğludur. Lir çalgısı olan kiti çalar ve insanları etkiler.\n\nOrpheus, Eurydice adında bir nimfa ile evlenmiştir. Eurydice\'ye olan aşkı, onun için her şeydir.\n\nEurydice, yılan ısırığı nedeniyle ölür. Orpheus, karısı karşısında derin bir keder duyar.\n\nOrpheus, karısını geri getirmek için yeraltı dünyasına gitmeye karar verir. Hades\'in krallığına ulaşmaya çalışır.\n\nOrpheus, müziği ile Hades ve diğer yeraltı tanrılarını etkiler. Müziği, yeraltı dünyasında bile en acımasız tanrıları bile yumuşatır.\n\nOrpheus, müziği sayesinde Hades\'in iznini alır. Hades, Eurydice\'yi geri vermesi şartıyla Orpheus\'un arkasına dönmesine izin verir.\n\nAncak Orpheus, son anda arkasına döner ve Eurydice\'yi sonsuza kaybeder. Bu, müziğinin gücünün sınırlarını gösteren trajik bir hikayedir.\n\nOrpheus, hayatının geri kalanını müzik ve şiirle geçirir. Onun müziği ve şiirleri, insanları ağlatır.\n\nOrpheus\'un hikayesi, aşkın ve müziğin gücünü gösteren en dokunak hikayelerden biridir.',
    image: '/orpheus.jpg',
    attributes: ['Müzik', 'Şiir', 'Aşk', 'Yeraltı yolculuğu', 'Sadakat'],
    powers: ['Müzikal yetenek', 'Sihirli müzik', 'Yeraltı etkisi', 'Ruhlara etki'],
    related: ['apollo', 'eurydice', 'hades', 'hermes']
  },
  {
    id: 'odysseus',
    title: 'Odysseus',
    category: 'hero',
    description: 'Stratejist, akıllı ve uzun yolculuk destanı kahramanı',
    fullStory: 'Odysseus, İthaca kralı, Truva Savaşı kahramanıdır. Akıllı ve zeki bir savaşçıdır.\n\nOdysseus, Truva Savaşı\'ndan sonra evine dönmek için 10 yıl süren zorlu bir yolculuk yapar.\n\nOdysseus, yolculuğu sırasında birçok zorlukla karşılaşır. Canavarlar, tanrıların öfkesi ve doğal tehliklerle mücadele eder.\n\nOdysseus, akıllılığı ve zekası sayesinde tüm zorlukları aşar. Cyclops Polyphemus, sirenlar, Scylla ve Charybdis gibi canavarlarla karşılaşır.\n\nOdysseus, aynı zamanda tanrılarla da ilişki kurar. Athena, ona yardım eder. Poseidon ise ona karşı çıkar.\n\nOdysseus, sonunda evine döner ve karısı Penelope ile tekrar bir araya gelir. O, evindeki suitörleri alt eder ve krallığını geri kazanır.\n\nOdysseus\'un hikayesi, akıllılığın, sabrının ve azminin gücünü gösteren en ünlü destanlardan biridir.',
    image: '/odysseus.jpg',
    attributes: ['Strateji', 'Akıllılık', 'Sabır', 'Azim', 'Liderlik'],
    powers: ['Stratejik düşünme', 'Akıllıca plan yapma', 'Savaş stratejisi', 'Liderlik'],
    related: ['penelope', 'athena', 'poseidon', 'telemachus']
  },
  {
    id: 'atlas',
    title: 'Atlas',
    category: 'god',
    description: 'Gökyüzünü taşıyan titan, dayanıklık ve astronomi tanrısı',
    fullStory: 'Atlas, İapetos ve Klymene\'in oğlu, Titanlardan biridir. Zeus ve kardeşleriyle birlikte Kronos\'a karşı savaşta yer almıştır.\n\nTitanlar savaşını kaybedince Zeus, Atlas\'ı cezalandırmıştır. Atlas\'ın cezası, gökyüzünü sonsuza kadar taşımaktır.\n\nAtlas, batıdan doğan güneş ışınlarıyla omuzlarında gökyüzünü taşır. Bu görevi, her gün ağır bir şekilde yerine getirir.\n\nAtlas, dünyanın en batı ucunda durur. Buradan güneşin batışını ve yıldızların doğuşunu izler.\n\nAtlas, sadece gökyüzünü taşımakla kalmaz, aynı zamanda astronomi bilgilerine de sahiptir. Yıldızların hareketlerini ve mevsimlerini öngörür.\n\nAtlas, dayanıklık sembolüdür. Ağır bir yükü taşımak, onu sembolize eder.\n\nAtlas\'un sembolleri arasında gökyüzü, küre, dünya ve yıldızlar bulunur.',
    image: '/atlas.jpg',
    attributes: ['Gökyüzü', 'Dayanıklılık', 'Astronomi', 'Titan', 'Sonsuz yük'],
    powers: ['Gökyüzü taşıma', 'Astronomi bilgisi', 'Süper güç', 'Dayanıklılık'],
    related: ['prometheus', 'epimetheus', 'menoitius', 'helios']
  },
  {
    id: 'prometheus',
    title: 'Prometheus',
    category: 'god',
    description: 'Ateşi, insanlığın koruyucusu ve ilerleme tanrısı',
    fullStory: 'Prometheus, İapetos ve Klymene\'in oğlu, Titanlardan biridir. İnsanlığın koruyucusu olarak bilinir.\n\nPrometheus, Zeus\'tan insanlara ateşi hediye etmiştir. Bu eylem, Zeus\'un öfkesine neden olmuştur.\n\nPrometheus, cezası olarak Kafkas Dağı\'na zincirlenir. Her gün bir kartal, onun karaciğini yer ve onun ciğerini yer.\n\nPrometheus, acı çekmeden bu cezayı çeker. Ancak bir gün Herkül gelip onu zincirlerini kırar ve onu kurtarır.\n\nPrometheus, insanlığa hizmet etmeye devam eder. İnsanlara zanaat, demircilik ve diğer sanatları öğretir.\n\nPrometheus\'un hikayesi, insanlığa hizmetin ve fedakarlığın en güzel örneklerinden biridir.',
    image: '/prometheus.jpg',
    attributes: ['Ateş', 'İnsanlık', 'İlerleme', 'Fedakarlık', 'Zeka'],
    powers: ['Ateş kontrolü', 'İnsanlara yardım', 'İlerleme sağlama', 'Zeka'],
    related: ['zeus', 'hera', 'epimetheus', 'mankind']
  },
  {
    id: 'cronus',
    title: 'Cronus (Kronos)',
    category: 'god',
    description: 'Zaman, hasret ve titanların kralı',
    fullStory: 'Cronos (Kronos), Uranos ve Gaia\'nın oğlu, Titanlardan biridir. Zaman tanrısı olarak bilinir.\n\nCronos, babası Uranos\'u tahttan ederek kendini kral yapmıştır. Ancak bir kehanetle, kendi oğlundan biri tarafından tahttan edileceğini öğrenir.\n\nBu kehanet üzerine, Cronos, doğan tüm çocuklarını yutmaya başlar. Hera, Hades, Poseidon ve Zeus\'u yutar.\n\nRhea, bu durumdan endişeerek son çocuğu olan Zeus\'u gizlice kurtarır. Zeus, büyüyünce babasını yenerek Titanlara karşı savaş açar.\n\nCronos, zaman tanrısı olarak, geçmiş, şimdi ve geleceği kontrol eder. Zamanın doğrusunu düzenler.\n\nCronos, aynı zamanda hasretlidir. Geleceği öngörme yeteneğine sahiptir.\n\nCronos\'un sembolleri arasında zaman, saat, orak ve hasret çarkı bulunur.',
    image: '/cronos.jpg',
    attributes: ['Zaman', 'Hasret', 'Titan', 'Kraliyet', 'Gelecek'],
    powers: ['Zaman kontrolü', 'Gelecek görme', 'Hasret', 'Kraliyet'],
    related: ['zeus', 'hera', 'hades', 'poseidon', 'rhea']
  },
  {
    id: 'rhea',
    title: 'Rhea',
    category: 'goddess',
    description: 'Toprak tanrıçası, Titanların annesi ve annelik koruyucusu',
    fullStory: 'Rhea, Uranos ve Gaia\'nın kızı, Titanlardan biridir. Toprak tanrıçası ve annelik koruyucusudur.\n\nRhea, Uranos\'un eşi ve Titanların annesidir. Kronos, Poseidon, Hades, Demeter, Hera ve Zeus\'un annesidir.\n\nRhea, kocasının çocuklarını yutmasına engel olmaya çalışmıştır. Ancak Kronos\'un gücü karşısında aciz kalmıştır.\n\nRhea, son çocuğu olan Zeus\'u kurtarmak için bir plan yapar. Kronos\'a bir bez sarılı bebek verir ve bunu yutturmasını sağlar.\n\nRhea, Zeus\'un güvenli bir şekilde büyümesini sağlar. Zeus, büyüyünce babasını devirebilecek güce ulaşır.\n\nRhea, annelik tanrıçasıdır. Doğum, doğum ve annelik süreçlerini korur.\n\nRhea, aynı zamanda doğurgan bir tanrıçadır. Yeni tanrıların ve kahramanların doğumuna yardım eder.\n\nRhea\'un sembolleri arasında toprak, bereket ve doğurgan bulunur.',
    image: '/rhea.jpg',
    attributes: ['Toprak', 'Anne', 'Koruyucu', 'Doğurgan', 'Titan'],
    powers: ['Doğurgan', 'Anne koruması', 'Toprak bereketi', 'Yeni yaşam'],
    related: ['zeus', 'hera', 'hades', 'poseidon', 'cronos', 'demeter']
  },
  {
    id: 'gaia',
    title: 'Gaia',
    category: 'goddess',
    description: 'Toprak ana, dünya tanrıçası ve tüm canlıların annesi',
    fullStory: 'Gaia, ilk varlıklardan biridir. Kendiliğinden doğan ilk tanrıçadır.\n\nGaia, kendi kendisinden Uranos, Pontos ve Ourea doğurmuştur. Bu ilk tanrılar, göğü, denizi ve dünyayı temsil eder.\n\nGaia, Kronos, Rhea, Koios, Krios, Iapetos, Hyperion ve Oceanus\'un annesidir. Bu Titanlar, ilk tanrı neslini oluşturur.\n\nGaia, aynı zamanda canavarların, dağların ve diğer doğal varlıkların da annesidir.\n\nGaia, dünyanın ve üzerindeki tüm canlıların annesi olarak kabul edilir. O, canlıları korur ve besler.\n\nGaia, sadece yaratıcı değil, aynı zamanda adaletin de koruyucusudur. O, adalet dağıtır ve düzeni sağlar.\n\nGaia\'un sembolleri arasında dünya, bereket ve yaşam ağacı bulunur.',
    image: '/gaia.jpg',
    attributes: ['Toprak', 'Dünya', 'Anne', 'Yaratılış', 'Adalet', 'Canlılar'],
    powers: ['Yaratılış', 'Canlı kontrolü', 'Doğal güçler', 'Adalet', 'Bereket'],
    related: ['uranos', 'cronos', 'rhea', 'oceanus', 'titans']
  },
  {
    id: 'uranus',
    title: 'Uranus',
    category: 'god',
    description: 'Gökyüzü, gökyüzü tanrısı ve ilk tanrıların babası',
    fullStory: 'Uranus, Gaia\'dan doğan ilk varlıklardan biridir. Gökyüzü tanrısı olarak bilinir.\n\nUranus, Gaia ile birlikte ilk tanrıları doğurmuştur. Bu ilk tanrılar, Olimpos\'tan önce dünyayı yönetmişlerdir.\n\nUranos, Gaia\'nın eşi olarak kabul edilir. Onun çocukları olan Titanlar, ilk tanrı neslini oluşturur.\n\nUranos, gökyüzünü kaplar ve yıldızları düzenler. Geceleri ve mevsimleri belirler.\n\nUranus, kehanet yeteneğine sahiptir. Geleceği öngörebilir.\n\nUranos, kendi oğullarından birinin kendisini tahttan edeceği kehaneti duyar. Bu kehanet, onu endişe sokar.\n\nUranus\'un sembolleri arasında gökyüzü, yıldızlar ve kehanet çarkı bulunur.',
    image: '/uranus.jpg',
    attributes: ['Gökyüzü', 'Kehanet', 'İlk tanrı', 'Baba', 'Zaman'],
    powers: ['Gökyüzü kontrolü', 'Kehanet', 'Zaman yönetimi', 'Yıldız kontrolü'],
    related: ['gaia', 'cronos', 'rhea', 'titans', 'helios']
  }
];

export const getCategoryLabel = (category: string) => {
  const labels = {
    god: 'Tanrı',
    goddess: 'Tanrıça',
    hero: 'Kahraman',
    creature: 'Canavar',
    story: 'Hikaye'
  };
  return labels[category as keyof typeof labels] || category;
};

export const getCategoryColor = (category: string) => {
  const colors = {
    god: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    goddess: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    hero: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    creature: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    story: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
};
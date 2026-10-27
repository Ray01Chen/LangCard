// Reviewed common words and repairs for compound words split by automatic segmentation.
(() => {
  const codes = ['en', 'zh', 'th', 'ja', 'es', 'ko', 'fr', 'de', 'vi', 'id'];
  const rows = [
    ['nice','美好；友善','ดี; น่ารัก','素敵；親切','agradable','좋은; 친절한','agréable','nett; schön','tốt; dễ mến','baik; menyenangkan'],
    ['to','到；向；為了（依語境）','ไปยัง; เพื่อ','〜へ；〜するために','a; para','~로; ~하기 위해','à; pour','zu; um zu','đến; để','ke; untuk'],
    ['you','你；您','คุณ','あなた','tú; usted','당신','vous; tu','du; Sie','bạn','kamu; Anda'],
    ['I','我','ฉัน','私','yo','나; 저','je','ich','tôi','saya'],
    ['we','我們','เรา','私たち','nosotros','우리','nous','wir','chúng tôi','kami; kita'],
    ['they','他們','พวกเขา','彼ら','ellos','그들','ils; elles','sie','họ','mereka'],
    ['he','他','เขา','彼','él','그','il','er','anh ấy','dia'],
    ['she','她','เธอ','彼女','ella','그녀','elle','sie','cô ấy','dia'],
    ['it','它；這件事','มัน','それ','ello','그것','cela','es','nó','itu'],
    ['and','和；而且','และ','と；そして','y','그리고','et','und','và','dan'],
    ['or','或；或者','หรือ','または','o','또는','ou','oder','hoặc','atau'],
    ['but','但是','แต่','しかし','pero','하지만','mais','aber','nhưng','tetapi'],
    ['the','定冠詞（指特定事物）','คำนำหน้านามที่เฉพาะเจาะจง','定冠詞（特定のもの）','el; la; los; las','정관사 (특정한 것)','le; la; les','der; die; das','mạo từ xác định','kata sandang tertentu'],
    ['a','一個；不定冠詞','หนึ่ง; คำนำหน้านามไม่ชี้เฉพาะ','一つの；不定冠詞','un; una','하나의; 부정관사','un; une','ein; eine','một; mạo từ bất định','sebuah; kata sandang tak tentu'],
    ['an','一個；母音音素前的不定冠詞','หนึ่ง; คำนำหน้านามไม่ชี้เฉพาะ','一つの；不定冠詞','un; una','하나의; 부정관사','un; une','ein; eine','một; mạo từ bất định','sebuah; kata sandang tak tentu'],
    ['of','的；屬於','ของ','〜の','de','~의','de','von','của','dari; milik'],
    ['in','在⋯裡','ใน','〜の中に','en; dentro de','~안에','dans','in','trong','di dalam'],
    ['on','在⋯上','บน','〜の上に','sobre; en','~위에','sur','auf','trên','di atas'],
    ['at','在（地點或時間）','ที่','〜で；〜に','en; a','~에서; ~에','à','an; um','ở; lúc','di; pada'],
    ['for','為了；給','เพื่อ; สำหรับ','〜のために','para; por','~을 위해','pour','für','cho; để','untuk'],
    ['from','從；來自','จาก','〜から','de; desde','~에서부터','de; depuis','von; aus','từ','dari'],
    ['with','和⋯一起；用','กับ; ด้วย','〜と一緒に；〜で','con','~와 함께; ~로','avec','mit','với','dengan'],
    ['not','不；不是','ไม่','〜ない','no','아니다; ~않다','ne…pas','nicht','không','tidak'],
    ['be','是；存在','เป็น; อยู่','である；いる','ser; estar','이다; 있다','être','sein','là; ở','adalah; berada'],
    ['is','是；存在（be 的現在式）','เป็น; อยู่','である；いる','es; está','이다; 있다','est','ist','là; ở','adalah; berada'],
    ['are','是；存在（be 的現在式）','เป็น; อยู่','である；いる','son; están','이다; 있다','sont; êtes','sind','là; ở','adalah; berada'],
    ['am','是；存在（I 使用的 be）','เป็น; อยู่','である；いる','soy; estoy','이다; 있다','suis','bin','là; ở','adalah; berada'],
    ['was','是；存在（過去式）','เคยเป็น; เคยอยู่','〜だった；〜にいた','era; estaba','~이었다; ~있었다','était','war','đã là; đã ở','dulu; pernah berada'],
    ['were','是；存在（過去式）','เคยเป็น; เคยอยู่','〜だった；〜にいた','eran; estaban','~이었다; ~있었다','étaient','waren','đã là; đã ở','dulu; pernah berada'],
    ['have','有；擁有；完成式助動詞','มี','持つ；完了の助動詞','tener; haber','가지다; 완료 조동사','avoir','haben','có','memiliki; sudah'],
    ['has','有；擁有（第三人稱）','มี','持っている','tiene; ha','가지고 있다','a','hat','có','memiliki; sudah'],
    ['do','做；疑問或否定的助動詞','ทำ','する；助動詞','hacer; auxiliar','하다; 조동사','faire; auxiliaire','tun; Hilfsverb','làm; trợ động từ','melakukan; kata bantu'],
    ['does','做（第三人稱）；助動詞','ทำ','する；助動詞','hace; auxiliar','하다; 조동사','fait; auxiliaire','tut; Hilfsverb','làm; trợ động từ','melakukan; kata bantu'],
    ['will','將會；意願','จะ','〜だろう；〜するつもり','futuro; voluntad','~할 것이다; 의지','futur; volonté','werden; Wille','sẽ','akan'],
    ['can','可以；能夠','สามารถ; ได้','できる','poder','~할 수 있다','pouvoir','können','có thể','bisa; dapat'],
    ['mind','心智；心意','จิต','心；精神','mente','마음; 정신','esprit','Geist','tâm trí','pikiran'],
    ['therefore','因此','ฉะนั้น','したがって','por lo tanto','그러므로','donc','deshalb','do đó','oleh karena itu'],
    ['proceed','進行；繼續','ดำเนิน','進める','proceder; continuar','진행하다','procéder; continuer','fortfahren','tiến hành','melanjutkan'],
    ['repay','償還；回報','ตอบแทน','返済する；報いる','devolver; retribuir','갚다; 보답하다','rembourser; récompenser','zurückzahlen; vergelten','trả lại; đền đáp','membayar kembali; membalas'],
    ['sea','海；海洋','ทะเล','海','mar','바다','mer','Meer','biển','laut'],
    ['general','一般的；普遍的','ทั่วไป','一般的な','general','일반적인','général','allgemein','chung; thông thường','umum'],
    ['spoiled','變質的；被寵壞的','บูด','腐った；甘やかされた','echado a perder; mimado','상한; 버릇없는','gâté; avarié','verdorben','bị hỏng; được nuông chiều','basi; manja'],
    ['stamp','蓋章；印記','ประทับ','押印する；印','sello; estampar','도장; 찍다','tampon; estampiller','Stempel; stempeln','dấu; đóng dấu','cap; mengecap'],
    ['fake','假的；偽造的','ปลอม','偽物の','falso','가짜의','faux','gefälscht','giả','palsu'],
    ['mix','混合','ผสม','混ぜる','mezclar','섞다','mélanger','mischen','trộn','mencampur'],
    ['give','給；交付','มอบ','与える；渡す','dar; entregar','주다','donner','geben','cho; trao','memberi'],
    ['stable','穩定的；穩固的','มั่นคง','安定した','estable','안정적인','stable','stabil','ổn định','stabil'],
    ['hand','手','มือ','手','mano','손','main','Hand','tay','tangan'],
    ['train','火車','รถไฟ','列車','tren','기차','train','Zug','tàu hỏa','kereta api'],
    ['pattern','圖樣；模式','ลาย','模様；パターン','patrón','무늬; 패턴','motif','Muster','hoa văn; mẫu','pola'],
    ['yesterday','昨天','เมื่อวาน','昨日','ayer','어제','hier','gestern','hôm qua','kemarin'],
    ['satang','薩當（泰銖的百分之一）','สตางค์','サタン（バーツの100分の1）','satang (1/100 de baht)','사땅 (바트의 100분의 1)','satang (1/100 de baht)','Satang (1/100 Baht)','satang (1/100 baht)','satang (1/100 baht)'],
    ['relationship','關係；聯繫','สัมพันธ์','関係','relación','관계','relation','Beziehung','mối quan hệ','hubungan'],
    ['inherit','繼承；傳承','สืบทอด','継承する','heredar','물려받다','hériter','erben','thừa kế','mewarisi'],
    ['various','各種；多樣的','หลาก','さまざまな','diversos','다양한','divers','verschiedene','đa dạng','berbagai'],
    ['warm','溫暖的','อบอุ่น','暖かい','cálido','따뜻한','chaud; chaleureux','warm','ấm áp','hangat'],
    ['up','向上；上（依語境）','ขึ้น','上へ','arriba','위로','en haut','nach oben','lên','ke atas'],
    ['used to','習慣於；過去常常（依語境）','เคยชิน; เคย','慣れている；以前よく〜した','acostumbrado a; solía','익숙한; ~하곤 했다','habitué à; autrefois','gewöhnt an; früher','quen với; đã từng','terbiasa; dahulu'],
    ['side by side','並排；相伴','เคียง','並んで','lado a lado','나란히','côte à côte','nebeneinander','bên cạnh nhau','berdampingan'],
    ['germs','病菌；微生物','เชื้อ','病原菌','gérmenes','병균','germes','Krankheitserreger','vi trùng','kuman'],
    ['liquid','液體；液態的','เหลว','液体','líquido','액체','liquide','Flüssigkeit','chất lỏng','cairan'],
    ['sympathize','同情；體諒','เห็นใจ','同情する','comprender; simpatizar','공감하다','compatir','mitfühlen','thông cảm','bersimpati'],
    ['theater','劇院；場所（依語境）','โรงละคร; โรง','劇場','teatro','극장','théâtre','Theater','nhà hát','teater'],
    ['world','世界','โลก','世界','mundo','세계','monde','Welt','thế giới','dunia'],
    ['electricity','電；電力','ไฟฟ้า','電気','electricidad','전기','électricité','Elektrizität','điện','listrik'],
    ['wood','木頭；木材','ไม้','木；木材','madera','나무; 목재','bois','Holz','gỗ','kayu'],
    ['impressed','印象深刻的；感動的','ประทับใจ','感銘を受けた','impresionado','감동한','impressionné','beeindruckt','ấn tượng','terkesan'],
    ['stock','存貨；庫存','สต็อก','在庫','existencias','재고','stock','Lagerbestand','hàng tồn kho','stok'],
    ['update','更新','อัปเดต','更新','actualización','업데이트','mise à jour','Aktualisierung','cập nhật','pembaruan'],
    ['Loy Krathong festival','水燈節','วันลอยกระทง','ロイクラトン祭り','festival de Loy Krathong','러이끄라통 축제','fête de Loy Krathong','Loy-Krathong-Fest','lễ hội Loy Krathong','festival Loy Krathong'],
    ['syllable fragment','詞的一部分；請搭配整詞理解','ส่วนของคำ','語の一部','parte de una palabra','단어의 일부','partie de mot','Wortteil','một phần của từ','bagian kata']
  ];
  window.WORD_MEANING_OVERRIDES = Object.fromEntries(rows.map((row) => [row[0].toLowerCase(), Object.fromEntries(codes.map((code, index) => [code, row[index]]))]));
  const extra = {
    'จิต':'mind','ฉะนั้น':'therefore','ดำเนิน':'proceed','ตอบแทน':'repay','ทะเล':'sea','ทั่วไป':'general','บูด':'spoiled','ประทับ':'stamp','ปลอม':'fake','ผสม':'mix','มอบ':'give','มั่นคง':'stable','มือ':'hand','รถไฟ':'train','ระ':'syllable fragment','ลาย':'pattern','วันลอย':'Loy Krathong festival','วาน':'yesterday','สตางค์':'satang','สัมพันธ์':'relationship','สืบทอด':'inherit','หลาก':'various','อบอุ่น':'warm','อัป':'syllable fragment','เคยชิน':'used to','เคียง':'side by side','เชื้อ':'germs','เหลว':'liquid','เห็นใจ':'sympathize','โรง':'theater','โลก':'world','ไฟฟ้า':'electricity','ไม้':'wood','ประทับใจ':'impressed','สต็อก':'stock','อัปเดต':'update','วันลอยกระทง':'Loy Krathong festival'
  };
  for (const [word, english] of Object.entries(extra)) {
    const meanings = { ...window.WORD_MEANING_OVERRIDES[english.toLowerCase()], th: word };
    window.THAI_LEXICON[word] = { ...window.THAI_LEXICON[word], meanings };
    // Offline builders load the authoring glossary; the browser needs only THAI_LEXICON.
    if (window.THAI_GLOSSARY) window.THAI_GLOSSARY[word] = english;
  }
  Object.assign(window.THAI_READINGS, { 'ประทับใจ': 'bprà-tháp-jai', 'สต็อก': 'sà-dtók', 'อัปเดต': 'áp-dèet', 'วันลอยกระทง': 'wan lɔɔi grà-thong' });
  const compounds = ['ประทับใจ', 'สต็อก', 'อัปเดต', 'วันลอยกระทง'];
  for (const fields of Object.values(window.THAI_CARD_TOKENS || {})) for (const field of Object.keys(fields)) {
    const tokens = fields[field], result = [];
    for (let index = 0; index < tokens.length; index++) {
      let match = '';
      for (let count = 2; count <= 4 && index + count <= tokens.length; count++) {
        const candidate = tokens.slice(index, index + count).join('');
        if (compounds.includes(candidate)) { match = candidate; index += count - 1; break; }
      }
      result.push(match || tokens[index]);
    }
    fields[field] = result;
  }
})();

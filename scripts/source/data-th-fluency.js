// Authoring input for catalog generation; not loaded by the website.
// Practical Thai utterances for English and Traditional Chinese speakers.
// B = beginner, I = intermediate, U = upper intermediate. Each row is
// level | Thai | approximate reading | English | Traditional Chinese.
// A complete utterance is the learning target, so it does not need a repeated
// example sentence. Use the Google Translate link to listen to pronunciation.
const THAI_FLUENCY = {
  greetings: `
B|สวัสดีตอนเช้า|sà-wàt-dii dtawn-cháo|Good morning.|早安。
B|สวัสดีตอนเย็น|sà-wàt-dii dtawn-yen|Good evening.|傍晚好。
B|คุณสบายดีไหมวันนี้|khun sà-baai-dii mǎi wan-níi|How are you today?|你今天好嗎？
B|สบายดี ขอบคุณ|sà-baai-dii khàwp-khun|I'm fine, thank you.|我很好，謝謝。
B|คุณอยู่ที่นี่นานไหม|khun yùu thîi-nîi naan mǎi|Have you been here long?|你在這裡很久了嗎？
B|ฉันอยู่ที่นี่ไม่นาน|chǎn yùu thîi-nîi mâi naan|I haven't been here long.|我來這裡不久。
B|ขอทราบชื่อหน่อยได้ไหม|khǎw sâap chʉ̂ʉ nòi dâi mǎi|May I have your name?|可以請問你的名字嗎？
B|แล้วพบกันพรุ่งนี้|láew phóp gan phrûng-níi|See you tomorrow.|明天見。
I|วันนี้เป็นยังไงบ้าง|wan-níi bpen yang-ngai bâang|How has your day been?|你今天過得怎麼樣？
I|ไม่ได้เจอกันนานเลย|mâi dâi joe gan naan loei|Long time no see.|好久不見。
I|ช่วงนี้ยุ่งไหม|chûang-níi yûng mǎi|Have you been busy lately?|你最近忙嗎？
I|ขอโทษที่ให้รอนาน|khǎw-thôot thîi hâi raw naan|Sorry to keep you waiting.|抱歉讓你久等了。
I|ไม่เป็นไร ฉันเพิ่งมาถึง|mâi bpen rai chǎn phêung maa thʉ̌ng|No problem, I just arrived.|沒關係，我也剛到。
I|ขอแนะนำเพื่อนของฉัน|khǎw náe-nam phʉ̂ean khǎwng chǎn|Let me introduce my friend.|讓我介紹我的朋友。
I|เราคุยกันตรงนี้ได้ไหม|rao khui gan dtrong-níi dâi mǎi|Can we talk here?|我們可以在這裡談嗎？
I|ฉันขอถามอีกอย่างได้ไหม|chǎn khǎw thǎam ìik yàang dâi mǎi|May I ask one more thing?|我可以再問一件事嗎？
I|ช่วยอธิบายให้เข้าใจง่ายหน่อย|chûai à-thí-baai hâi khâo-jai ngâai nòi|Could you explain it more simply?|可以講得更容易懂一點嗎？
I|ฉันฟังไม่ทัน|chǎn fang mâi than|I couldn't catch what you said.|我沒聽清楚。
I|ช่วยพูดช้าลงอีกหน่อย|chûai phûut cháa long ìik nòi|Could you speak a little slower?|可以再說慢一點嗎？
I|ฉันกำลังฝึกพูดภาษาไทย|chǎn gam-lang fʉ̀k phûut phaa-sǎa thai|I'm practicing speaking Thai.|我正在練習說泰語。
I|คำนี้หมายความว่าอะไร|kham-níi mǎai-khwaam wâa à-rai|What does this word mean?|這個詞是什麼意思？
I|ช่วยเขียนให้ดูได้ไหม|chûai khǐian hâi duu dâi mǎi|Could you write it down for me?|可以寫給我看嗎？
I|ดีใจที่ได้คุยกับคุณ|dii-jai thîi dâi khui gàp khun|It was nice talking to you.|很高興和你聊天。
I|ไว้เจอกันโอกาสหน้า|wái joe gan oo-gàat nâa|See you another time.|下次有機會再見。
U|ถ้าเข้าใจไม่ผิด คุณหมายถึงเรื่องนี้ใช่ไหม|thâa khâo-jai mâi phìt khun mǎai thʉ̌ng rʉ̂eang níi châi mǎi|If I understood correctly, you mean this issue, right?|如果我沒理解錯，你指的是這件事，對嗎？
U|ขอทวนสิ่งที่คุณพูดอีกครั้ง|khǎw thuan sìng thîi khun phûut ìik khráng|Let me repeat what you said to check.|我再複述一次你說的內容。
U|ฉันอาจใช้คำไม่ตรงความหมาย|chǎn àat chái kham mâi dtrong khwaam-mǎai|I may have used the wrong word.|我可能用錯詞了。
U|ถ้าฉันพูดผิด ช่วยแก้ให้ด้วยนะ|thâa chǎn phûut phìt chûai gâe hâi dûai ná|Please correct me if I say something wrong.|如果我說錯，請幫我糾正。
U|เรื่องนี้อธิบายเป็นภาษาไทยยากนิดหน่อย|rʉ̂eang níi à-thí-baai bpen phaa-sǎa thai yâak nít nòi|This is a little hard to explain in Thai.|這件事用泰語有點難解釋。
U|ขอเวลาคิดคำพูดสักครู่|khǎw wee-laa khít kham-phûut sàk khrûu|Give me a moment to find the right words.|給我一點時間想措辭。
U|คุณช่วยยกตัวอย่างให้เห็นภาพได้ไหม|khun chûai yók dtua-yàang hâi hěn phâap dâi mǎi|Could you give an example to make it clearer?|你能舉個例子讓我更清楚嗎？
U|เราอาจเข้าใจคำเดียวกันคนละแบบ|rao àat khâo-jai kham diao gan khon-lá bàep|We may understand the same word differently.|我們對同一個詞可能有不同理解。
U|ฉันอยากแน่ใจว่าเราเข้าใจตรงกัน|chǎn yàak nâe-jai wâa rao khâo-jai dtrong gan|I want to make sure we're on the same page.|我想確認我們理解一致。
U|ขอบคุณที่อธิบายอย่างละเอียด|khàwp-khun thîi à-thí-baai yàang lá-ìiat|Thank you for explaining in detail.|謝謝你詳細解釋。
U|พอจะพูดอีกแบบหนึ่งได้ไหม|phaw jà phûut ìik bàep nʉ̀ng dâi mǎi|Could you phrase that another way?|可以換個說法嗎？
U|ฉันไม่แน่ใจว่าคำนี้สุภาพพอไหม|chǎn mâi nâe-jai wâa kham níi sù-phâap phaw mǎi|I'm not sure if this word is polite enough.|我不確定這個詞是否夠禮貌。
U|ขออนุญาตขัดจังหวะสักนิด|khǎw à-nú-yâat khàt jang-wà sàk nít|May I interrupt for a moment?|不好意思，我可以打斷一下嗎？
U|พูดต่อได้เลย ฉันกำลังฟังอยู่|phûut dtàw dâi loei chǎn gam-lang fang yùu|Please continue; I'm listening.|請繼續說，我在聽。
U|ฉันเข้าใจภาพรวม แต่ยังไม่เข้าใจรายละเอียด|chǎn khâo-jai phâap-ruam dtàe yang mâi khâo-jai raai-lá-ìiat|I understand the overall idea, but not the details yet.|我了解大意，但還不懂細節。
U|เราค่อยกลับมาคุยเรื่องนี้เมื่อมีเวลามากขึ้น|rao khâwi glàp maa khui rʉ̂eang níi mʉ̂ea mii wee-laa mâak khʉ̂n|Let's return to this when we have more time.|等有更多時間再談這件事。
`,
  food: `
B|ขอโต๊ะสำหรับสองคน|khǎw dtó sǎm-ràp sǎawng khon|A table for two, please.|請給我們兩人桌。
B|มีเมนูภาษาอังกฤษไหม|mii mee-nuu phaa-sǎa ang-grìt mǎi|Do you have an English menu?|有英文菜單嗎？
B|ขอน้ำเปล่าหนึ่งขวด|khǎw náam-bplào nʉ̀ng khùat|One bottle of plain water, please.|請給我一瓶水。
B|ไม่ใส่น้ำตาล|mâi sài náam-dtaan|No sugar, please.|請不要加糖。
B|ฉันไม่กินเนื้อหมู|chǎn mâi gin nʉ́ea-mǔu|I don't eat pork.|我不吃豬肉。
B|อันนี้เผ็ดมากไหม|an-níi phèt mâak mǎi|Is this very spicy?|這個很辣嗎？
B|ขอสั่งอาหารหน่อย|khǎw sàng aa-hǎan nòi|I'd like to order, please.|我想點餐。
B|ขอช้อนเพิ่มหนึ่งคัน|khǎw cháwn phôem nʉ̀ng khan|One more spoon, please.|請再給我一支湯匙。
I|จานนี้มีส่วนผสมอะไรบ้าง|jaan-níi mii sùan-phà-sǒm à-rai bâang|What ingredients are in this dish?|這道菜有哪些食材？
I|ฉันแพ้ถั่วลิสงอย่างรุนแรง|chǎn pháe thùa-lí-sǒng yàang run-raeng|I have a severe peanut allergy.|我對花生嚴重過敏。
I|ช่วยทำแบบไม่ใส่ถั่วได้ไหม|chûai tham bàep mâi sài thùa dâi mǎi|Could you make it without nuts?|可以不加堅果嗎？
I|ขอน้ำแข็งแยกต่างหาก|khǎw náam-khǎeng yâek dtàang-hàak|Ice on the side, please.|冰塊請另外放。
I|ขอเพิ่มข้าวอีกหนึ่งจาน|khǎw phôem khâao ìik nʉ̀ng jaan|One more plate of rice, please.|請再加一盤飯。
I|ช่วยอุ่นอาหารให้หน่อยได้ไหม|chûai ùn aa-hǎan hâi nòi dâi mǎi|Could you heat up the food for me?|可以幫我把餐點加熱嗎？
I|อาหารจานนี้ยังไม่สุก|aa-hǎan jaan-níi yang mâi sùk|This dish isn't cooked through yet.|這道菜還沒熟。
I|ขอเปลี่ยนจานนี้ได้ไหม|khǎw bplìian jaan-níi dâi mǎi|Could I exchange this dish?|可以換這道菜嗎？
I|เราสั่งอาหารไปนานแล้ว|rao sàng aa-hǎan pai naan láew|We ordered quite a while ago.|我們點餐已經很久了。
I|มีอาหารที่ไม่ใส่นมหรือไข่ไหม|mii aa-hǎan thîi mâi sài nom rʉ̌ʉ khài mǎi|Do you have food without milk or eggs?|有不含牛奶或蛋的餐點嗎？
I|ขอห่ออาหารที่เหลือกลับบ้าน|khǎw hàw aa-hǎan thîi lʉ̌ea glàp bâan|Could you pack the leftovers to take home?|可以幫我把剩下的餐點打包嗎？
I|ขอใบเสร็จแยกกันสองใบ|khǎw bai-sèt yâek gan sǎawng bai|Could we have two separate receipts?|可以開兩張分開的收據嗎？
I|ร้านปิดกี่โมงคืนนี้|ráan bpìt gìi moong khʉʉn-níi|What time do you close tonight?|今晚幾點打烊？
I|ต้องจองโต๊ะล่วงหน้าไหม|dtâwng jawng dtó lûang-nâa mǎi|Do we need to reserve a table?|需要事先訂位嗎？
I|อาหารจะเสิร์ฟพร้อมกันไหม|aa-hǎan jà sòep phráwm gan mǎi|Will the dishes be served together?|餐點會一起上嗎？
I|วันนี้มีเมนูพิเศษอะไร|wan-níi mii mee-nuu phí-sèet à-rai|What's today's special?|今天有什麼特餐？
U|ช่วยยืนยันได้ไหมว่าไม่มีส่วนผสมของถั่ว|chûai yʉʉn-yan dâi mǎi wâa mâi mii sùan-phà-sǒm khǎwng thùa|Could you confirm that this contains no nuts?|可以確認這不含堅果成分嗎？
U|ฉันอยากสั่งอาหารที่รสชาติไม่จัดเกินไป|chǎn yàak sàng aa-hǎan thîi rót-châat mâi jàt goen pai|I'd like something that isn't too strongly seasoned.|我想點口味不要太重的餐點。
U|ช่วยแนะนำอาหารท้องถิ่นที่คนที่นี่ชอบได้ไหม|chûai náe-nam aa-hǎan tháwng-thìn thîi khon thîi-nîi châwp dâi mǎi|Could you recommend a local dish popular here?|可以推薦這裡人喜歡的在地料理嗎？
U|ถ้าไม่ใส่น้ำปลา รสชาติจะเปลี่ยนมากไหม|thâa mâi sài náam-bplaa rót-châat jà bplìian mâak mǎi|Will it taste very different without fish sauce?|不加魚露味道會差很多嗎？
U|มีวิธีปรุงแบบที่ไม่ใช้น้ำมันมากไหม|mii wí-thii bprung bàep thîi mâi chái náam-man mâak mǎi|Can this be prepared with less oil?|這道菜可以少油料理嗎？
U|อาหารที่ได้ไม่ตรงกับที่สั่งไว้|aa-hǎan thîi dâi mâi dtrong gàp thîi sàng wái|The food we received isn't what we ordered.|送來的餐點和我們點的不一樣。
U|ฉันขอแจ้งเรื่องอาหารที่อาจมีสารก่อภูมิแพ้|chǎn khǎw jâeng rʉ̂eang aa-hǎan thîi àat mii sǎan-gàw-phuum-pháe|I need to mention a possible food allergen.|我需要告知可能引發過敏的食材。
U|ช่วยตรวจสอบกับครัวอีกครั้งก่อนเสิร์ฟได้ไหม|chûai dtrùat-sàwp gàp khrua ìik khráng gàwn sòep dâi mǎi|Could you check with the kitchen before serving it?|上菜前可以再和廚房確認嗎？
U|ถ้าต้องรอนาน เราขอเปลี่ยนเป็นเมนูอื่น|thâa dtâwng raw naan rao khǎw bplìian bpen mee-nuu ʉ̀ʉn|If the wait is long, we'd like to order something else.|如果要等很久，我們想換別道菜。
U|อาหารจานนี้เข้ากับอะไรดี|aa-hǎan jaan-níi khâo gàp à-rai dii|What goes well with this dish?|這道菜適合搭配什麼？
U|ฉันอยากลองรสชาติแบบดั้งเดิม|chǎn yàak lawng rót-châat bàep dâng-doem|I'd like to try the traditional flavor.|我想試試傳統口味。
U|ทางร้านคิดค่าบริการเพิ่มหรือเปล่า|thaang-ráan khít khâa baw-rí-gaan phôem rʉ̌ʉ bplào|Does the restaurant charge a service fee?|店家有另收服務費嗎？
U|ช่วยแยกอาหารที่มีเนื้อสัตว์ออกจากจานอื่น|chûai yâek aa-hǎan thîi mii nʉ́ea-sàt àawk jàak jaan ʉ̀ʉn|Please keep the meat dishes separate from the others.|請把有肉的餐點和其他餐點分開。
U|ขอบคุณที่ช่วยปรับเมนูให้เหมาะกับข้อจำกัดด้านอาหาร|khàwp-khun thîi chûai bpràp mee-nuu hâi mǎw gàp khâw-jam-gàt dâan aa-hǎan|Thanks for adapting the menu to my dietary restrictions.|謝謝你配合我的飲食限制調整餐點。
U|ขอทราบว่าอาหารจานนี้ใช้เวลาทำประมาณเท่าไหร่|khǎw sâap wâa aa-hǎan jaan-níi chái wee-laa tham bprà-maan thâo-rài|About how long does this dish take to prepare?|請問這道菜大概要做多久？
U|เราอยากจ่ายแยกตามรายการที่แต่ละคนสั่ง|rao yàak jàai yâek dtaam raai-gaan thîi dtàe-lá khon sàng|We'd like to pay separately for what each person ordered.|我們想各自支付自己點的餐點。
`,
  travel: `
B|สถานีรถไฟฟ้าอยู่ทางไหน|sà-thǎa-nii rót-fai-fáa yùu thaang nǎi|Which way is the train station?|捷運站往哪邊走？
B|เดินไปได้ไหม|doen pai dâi mǎi|Can I walk there?|可以走路到嗎？
B|ต้องขึ้นรถสายไหน|dtâwng khʉ̂n rót sǎai nǎi|Which bus line should I take?|我該搭哪一路公車？
B|ลงป้ายถัดไป|long bpâai thàt-pai|Get off at the next stop.|下一站下車。
B|ตั๋วหนึ่งใบราคาเท่าไหร่|dtǔa nʉ̀ng bai raa-khaa thâo-rài|How much is one ticket?|一張票多少錢？
B|ฉันจะไปสนามบิน|chǎn jà pai sà-nǎam-bin|I'm going to the airport.|我要去機場。
B|ช่วยเรียกแท็กซี่ให้หน่อย|chûai rîiak tháek-sîi hâi nòi|Please call me a taxi.|請幫我叫計程車。
B|หยุดตรงนี้ได้ไหม|yùt dtrong-níi dâi mǎi|Can you stop here?|可以在這裡停嗎？
I|รถเที่ยวสุดท้ายออกกี่โมง|rót thîao sùt-tháai àawk gìi moong|What time does the last service leave?|末班車幾點發車？
I|ต้องเปลี่ยนสายที่สถานีไหน|dtâwng bplìian sǎai thîi sà-thǎa-nii nǎi|At which station do I transfer?|要在哪一站換線？
I|รถคันนี้ผ่านตลาดไหม|rót khan-níi phàan dtà-làat mǎi|Does this bus pass the market?|這班車有經過市場嗎？
I|ใช้บัตรโดยสารใบนี้ได้ไหม|chái bàt dooi-sǎan bai-níi dâi mǎi|Can I use this transit card?|可以用這張交通卡嗎？
I|ค่าโดยสารคิดตามระยะทางไหม|khâa dooi-sǎan khít dtaam rá-yá-thaang mǎi|Is the fare based on distance?|車資是按距離計算嗎？
I|ช่วยบอกฉันเมื่อถึงป้ายนี้|chûai bàwk chǎn mʉ̂ea thʉ̌ng bpâai níi|Please tell me when we reach this stop.|到這站時請告訴我。
I|ทางออกที่ใกล้ที่สุดอยู่ตรงไหน|thaang-àawk thîi glâi thîi-sùt yùu dtrong nǎi|Where's the nearest exit?|最近的出口在哪裡？
I|แถวนี้เรียกรถยากไหม|thǎew-níi rîiak rót yâak mǎi|Is it hard to get a ride around here?|這附近叫車困難嗎？
I|ช่วยเปิดมิเตอร์ด้วยครับ|chûai bpòet mí-dtôe dûai khráp|Please use the meter.|請跳表計費。
I|ฉันขอไปตามเส้นทางที่เร็วที่สุด|chǎn khǎw pai dtaam sên-thaang thîi reo thîi-sùt|Please take the fastest route.|請走最快的路線。
I|รถติดช่วงเวลาไหนมากที่สุด|rót dtìt chûang wee-laa nǎi mâak thîi-sùt|When is traffic worst?|哪個時段塞車最嚴重？
I|ฉันจองตั๋วออนไลน์ไว้แล้ว|chǎn jawng dtǔa awn-lai wái láew|I booked my ticket online.|我已經在網上訂票了。
I|ต้องไปเช็กอินที่เคาน์เตอร์ไหม|dtâwng pai chék-in thîi khao-dtôe mǎi|Do I need to check in at the counter?|需要到櫃台辦理報到嗎？
I|กระเป๋าของฉันหนักเกินกำหนดไหม|grà-bpǎo khǎwng chǎn nàk goen gam-nòt mǎi|Is my bag over the weight limit?|我的行李超重了嗎？
I|เที่ยวบินนี้ล่าช้าไหม|thîao-bin níi lâa-cháa mǎi|Is this flight delayed?|這班飛機延誤了嗎？
I|มีรถไปใจกลางเมืองไหม|mii rót pai jai-glaang mʉʉang mǎi|Is there transport to the city center?|有車到市中心嗎？
U|ถ้ารถติดมาก เราควรใช้เส้นทางอื่นไหม|thâa rót dtìt mâak rao khuan chái sên-thaang ʉ̀ʉn mǎi|If traffic is heavy, should we take another route?|如果很塞車，我們要改走別條路嗎？
U|ช่วยแจ้งฉันถ้ามีการเปลี่ยนชานชาลา|chûai jâeng chǎn thâa mii gaan bplìian chaan-chaa-laa|Please let me know if the platform changes.|如果月台有變更，請通知我。
U|ตั๋วใบนี้สามารถเปลี่ยนวันเดินทางได้ไหม|dtǔa bai-níi sǎa-mâat bplìian wan doen-thaang dâi mǎi|Can this ticket be changed to another travel date?|這張票可以更改出發日期嗎？
U|ถ้าพลาดรถขบวนนี้ ต้องซื้อตั๋วใหม่ไหม|thâa phlâat rót khà-buan níi dtâwng sʉ́ʉ dtǔa mài mǎi|If I miss this train, do I need a new ticket?|如果錯過這班車，需要重買票嗎？
U|ฉันต้องต่อเครื่องที่กรุงเทพฯ|chǎn dtâwng dtàw khrʉ̂eang thîi grung-thêep|I have a connecting flight in Bangkok.|我要在曼谷轉機。
U|เวลาเปลี่ยนเครื่องหนึ่งชั่วโมงพอไหม|wee-laa bplìian khrʉ̂eang nʉ̀ng chûa-moong phaw mǎi|Is one hour enough for the connection?|一小時轉機時間夠嗎？
U|ช่วยชี้ตำแหน่งนี้บนแผนที่ได้ไหม|chûai chíi dtam-nàeng níi bon phǎen-thîi dâi mǎi|Could you point out this location on the map?|可以在地圖上指出這個位置嗎？
U|เส้นทางนี้สะดวกสำหรับผู้ใช้รถเข็นไหม|sên-thaang níi sà-dùak sǎm-ràp phûu-chái-rót-khěn mǎi|Is this route accessible for wheelchair users?|這條路線方便輪椅使用者通行嗎？
U|ฉันอยากหลีกเลี่ยงถนนที่กำลังก่อสร้าง|chǎn yàak lìik-lîiang thà-nǒn thîi gam-lang gàw-sâang|I'd like to avoid roads under construction.|我想避開正在施工的道路。
U|รถเมล์คันนี้มีประกาศชื่อป้ายไหม|rót-mee khan-níi mii bprà-gàat chʉ̂ʉ bpâai mǎi|Does this bus announce the stops?|這班公車會廣播站名嗎？
U|ถ้าไปกลับในวันเดียวกัน ควรซื้อตั๋วแบบไหน|thâa pai-glàp nai wan diao gan khuan sʉ́ʉ dtǔa bàep nǎi|Which ticket should I buy for a same-day return?|當天來回該買哪種票？
U|ฉันต้องการยื่นเรื่องกระเป๋าเดินทางสูญหาย|chǎn dtâwng-gaan yʉ̂ʉn rʉ̂eang grà-bpǎo doen-thaang sǔun-hǎai|I need to report lost luggage.|我需要申報行李遺失。
U|มีบริการรับส่งจากสนามบินไปโรงแรมไหม|mii baw-rí-gaan ráp-sòng jàak sà-nǎam-bin pai roong-raem mǎi|Is there an airport transfer to the hotel?|有機場到飯店的接送服務嗎？
U|ช่วยยืนยันจุดนัดรับที่แน่นอนอีกครั้ง|chûai yʉʉn-yan jùt-nát-ráp thîi nâe-nawn ìik khráng|Please confirm the exact pickup point again.|請再確認確切的接送地點。
U|ถ้าเส้นทางนี้ปิด มีทางอ้อมที่ปลอดภัยไหม|thâa sên-thaang níi bpìt mii thaang-âwm thîi bplàwt-phai mǎi|If this route is closed, is there a safe detour?|如果這條路封閉，有安全的替代路線嗎？
U|ฉันอยากทราบว่าค่าโดยสารรวมค่าทางด่วนหรือยัง|chǎn yàak sâap wâa khâa dooi-sǎan ruam khâa thaang-dùan rʉ̌ʉ yang|I'd like to know if the fare includes tolls.|我想知道車資是否已包含過路費。
`,
  daily: `
B|ฉันตื่นเจ็ดโมง|chǎn dtʉ̀ʉn jèt moong|I wake up at seven.|我七點起床。
B|ฉันจะกลับบ้านก่อนหกโมง|chǎn jà glàp bâan gàwn hòk moong|I'll go home before six.|我六點前會回家。
B|วันนี้อากาศร้อน|wan-níi aa-gàat ráwn|It's hot today.|今天很熱。
B|ฝนกำลังตก|fǒn gam-lang dtòk|It's raining.|正在下雨。
B|ฉันเหนื่อยนิดหน่อย|chǎn nʉ̀ai nít nòi|I'm a little tired.|我有點累。
B|ฉันต้องไปซื้อของ|chǎn dtâwng pai sʉ́ʉ khǎwng|I need to go shopping.|我得去買東西。
B|ช่วยปิดประตูหน่อย|chûai bpìt bprà-dtuu nòi|Please close the door.|請幫我關門。
B|วันนี้ฉันว่างตอนบ่าย|wan-níi chǎn wâang dtawn-bàai|I'm free this afternoon.|我今天下午有空。
I|วันนี้ฉันมีธุระหลังเลิกงาน|wan-níi chǎn mii thú-rá lǎng lôek-ngaan|I have an errand after work today.|我今天下班後有事要辦。
I|ฉันจะออกไปข้างนอกสักครู่|chǎn jà àawk pai khâang-nâwk sàk khrûu|I'll step outside for a moment.|我要出去一下。
I|ช่วยเตือนฉันอีกทีตอนบ่าย|chûai dtʉʉan chǎn ìik thii dtawn-bàai|Please remind me again this afternoon.|下午再提醒我一次。
I|ฉันลืมของไว้ที่บ้าน|chǎn lʉʉm khǎwng wái thîi bâan|I left something at home.|我把東西忘在家裡了。
I|ขอแวะร้านสะดวกซื้อก่อน|khǎw wâe ráan sà-dùak-sʉ́ʉ gàwn|Let me stop at the convenience store first.|先讓我去一趟便利商店。
I|ช่วงนี้ฉันนอนไม่ค่อยพอ|chûang-níi chǎn nawn mâi khâwi phaw|I haven't been getting enough sleep lately.|我最近睡得不太夠。
I|พรุ่งนี้ฉันต้องตื่นแต่เช้า|phrûng-níi chǎn dtâwng dtʉ̀ʉn dtàe cháo|I have to get up early tomorrow.|我明天得一大早起床。
I|ฉันอยากจัดตารางชีวิตใหม่|chǎn yàak jàt dtaa-raang chii-wít mài|I want to reorganize my routine.|我想重新安排生活作息。
I|ช่วยรอสักสิบนาทีได้ไหม|chûai raw sàk sìp naa-thii dâi mǎi|Could you wait about ten minutes?|可以等我大約十分鐘嗎？
I|ถ้าฝนหยุด เราไปเดินเล่นกัน|thâa fǒn yùt rao pai doen-lên gan|If the rain stops, let's go for a walk.|如果雨停了，我們去散步吧。
I|ฉันทำงานบ้านเสร็จแล้ว|chǎn tham ngaan-bâan sèt láew|I've finished the housework.|我做完家事了。
I|ช่วยเอาขยะไปทิ้งหน่อย|chûai ao khà-yà pai thíng nòi|Please take out the trash.|請幫忙倒垃圾。
I|วันนี้ไฟดับตั้งแต่เช้า|wan-níi fai dàp dtâng-dtàe cháo|The power has been out since morning.|今天從早上就停電了。
I|โทรหาฉันเมื่อคุณถึงบ้าน|thoo hǎa chǎn mʉ̂ea khun thʉ̌ng bâan|Call me when you get home.|你到家時打給我。
I|ฉันกำลังหาที่เงียบ ๆ ทำงาน|chǎn gam-lang hǎa thîi ngîiap ngîiap tham-ngaan|I'm looking for a quiet place to work.|我在找安靜的地方工作。
I|ฉันจะไปรับพัสดุหลังเลิกงาน|chǎn jà pai ráp phát-sà-dù lǎng lôek-ngaan|I'll pick up the parcel after work.|我下班後會去領包裹。
U|ช่วงนี้ฉันพยายามรักษาสมดุลระหว่างงานกับชีวิต|chûang-níi chǎn pha-yaa-yaam rák-sǎa sǒm-dun rá-wàang ngaan gàp chii-wít|I'm trying to keep a balance between work and life.|我最近努力維持工作與生活的平衡。
U|ถ้าตารางเปลี่ยนกะทันหัน ช่วยแจ้งล่วงหน้า|thâa dtaa-raang bplìian gà-than-hǎn chûai jâeng lûang-nâa|If the schedule changes suddenly, please let me know ahead of time.|如果行程突然改變，請提前告訴我。
U|ฉันอยากลดเวลาที่ใช้ดูหน้าจอทุกวัน|chǎn yàak lót wee-laa thîi chái duu nâa-jàw thúk wan|I want to reduce my daily screen time.|我想減少每天看螢幕的時間。
U|การพักผ่อนให้เพียงพอช่วยให้มีสมาธิมากขึ้น|gaan phák-phàwn hâi phiiang-phaw chûai hâi mii sà-maa-thí mâak khʉ̂n|Enough rest helps me concentrate better.|充分休息有助於提高專注力。
U|ฉันยังปรับตัวกับเวลาทำงานใหม่ไม่ค่อยได้|chǎn yang bpràp-dtua gàp wee-laa tham-ngaan mài mâi khâwi dâi|I'm still adjusting to my new work hours.|我還不太適應新的工作時間。
U|ถ้ามีเวลาเหลือ ฉันอยากทำอาหารเองมากขึ้น|thâa mii wee-laa lʉ̌ea chǎn yàak tham aa-hǎan eeng mâak khʉ̂n|If I have more time, I'd like to cook for myself more.|如果有時間，我想更常自己煮飯。
U|ฉันพยายามวางแผนล่วงหน้าเพื่อลดความเครียด|chǎn pha-yaa-yaam waang-phǎen lûang-nâa phʉ̂ea lót khwaam-khrîiat|I try to plan ahead to reduce stress.|我試著提前規劃來減少壓力。
U|งานบางอย่างเลื่อนได้ แต่งานนี้ต้องทำวันนี้|ngaan baang yàang lʉ̂ean dâi dtàe ngaan níi dtâwng tham wan-níi|Some tasks can wait, but this one must be done today.|有些事可以延後，但這件今天一定要做。
U|ฉันต้องจัดลำดับสิ่งที่สำคัญก่อน|chǎn dtâwng jàt lam-dàp sìng thîi sǎm-khan gàwn|I need to prioritize what's important.|我得先安排重要的事。
U|ถ้าฝนตกหนัก เราควรเปลี่ยนแผนช่วงเย็น|thâa fǒn dtòk nàk rao khuan bplìian phǎen chûang-yen|If it rains heavily, we should change our evening plans.|如果下大雨，我們應該改變晚上的計畫。
U|ฉันอยากมีเวลาให้ครอบครัวมากกว่านี้|chǎn yàak mii wee-laa hâi khrâwp-khrua mâak gwàa níi|I'd like to spend more time with my family.|我想花更多時間陪家人。
U|ตั้งแต่ย้ายบ้าน ฉันใช้เวลาเดินทางนานขึ้น|dtâng-dtàe yáai bâan chǎn chái wee-laa doen-thaang naan khʉ̂n|Since moving, my commute has become longer.|搬家後，我通勤時間變長了。
U|ฉันพยายามสร้างนิสัยออกกำลังกายเป็นประจำ|chǎn pha-yaa-yaam sâang ní-sǎi àawk-gam-lang-gaai bpen bprà-jam|I'm trying to make regular exercise a habit.|我試著養成定期運動的習慣。
U|การเปลี่ยนแปลงเล็ก ๆ ทำให้ชีวิตสะดวกขึ้นได้|gaan bplìian-bplaeng lék lék tham hâi chii-wít sà-dùak khʉ̂n dâi|Small changes can make daily life easier.|小小的改變就能讓生活更方便。
U|ถ้าฉันกลับดึก อย่ารอทานข้าวนะ|thâa chǎn glàp dʉ̀k yàa raw thaan khâao ná|If I get home late, don't wait for me to eat.|如果我晚回來，不用等我吃飯。
U|ฉันอยากใช้วันหยุดพักผ่อนโดยไม่ต้องรีบ|chǎn yàak chái wan-yùt phák-phàwn dooi mâi dtâwng rîip|I'd like to relax on my day off without rushing.|我想在休假日好好休息，不用趕時間。
`,
  social: `
B|คุณมีพี่น้องไหม|khun mii phîi-náwng mǎi|Do you have siblings?|你有兄弟姊妹嗎？
B|ฉันมีพี่สาวหนึ่งคน|chǎn mii phîi-sǎao nʉ̀ng khon|I have one older sister.|我有一個姊姊。
B|คุณชอบฟังเพลงอะไร|khun châwp fang phleeng à-rai|What kind of music do you like?|你喜歡聽什麼音樂？
B|ไปกินข้าวด้วยกันไหม|pai gin khâao dûai gan mǎi|Would you like to eat together?|要一起吃飯嗎？
B|ฉันดีใจมากที่ได้เจอคุณ|chǎn dii-jai mâak thîi dâi joe khun|I'm very glad to see you.|見到你我很高興。
B|ขอเบอร์โทรได้ไหม|khǎw boe-thoo dâi mǎi|May I have your phone number?|可以給我你的電話嗎？
B|วันเสาร์คุณว่างไหม|wan-sǎo khun wâang mǎi|Are you free on Saturday?|你星期六有空嗎？
B|ขอบคุณที่ชวนฉัน|khàwp-khun thîi chuan chǎn|Thanks for inviting me.|謝謝你邀請我。
I|ฉันอยากรู้จักเพื่อนของคุณ|chǎn yàak rúu-jàk phʉ̂ean khǎwng khun|I'd like to meet your friends.|我想認識你的朋友。
I|เราเจอกันที่ร้านกาแฟใกล้บ้านดีไหม|rao joe gan thîi ráan gaa-fae glâi bâan dii mǎi|Shall we meet at the café near home?|在家附近的咖啡店見面好嗎？
I|ขอโทษที่ตอบข้อความช้า|khǎw-thôot thîi dtàwp khâw-khwaam cháa|Sorry for replying late.|抱歉這麼晚回訊息。
I|ช่วงนี้คุณเป็นยังไงบ้าง|chûang-níi khun bpen yang-ngai bâang|How have you been lately?|你最近過得怎麼樣？
I|ฉันอยากใช้เวลากับเพื่อนมากขึ้น|chǎn yàak chái wee-laa gàp phʉ̂ean mâak khʉ̂n|I'd like to spend more time with friends.|我想多花時間和朋友相處。
I|ฉันยังไม่สะดวกไปครั้งนี้|chǎn yang mâi sà-dùak pai khráng níi|I can't make it this time.|這次我還不方便去。
I|คราวหน้าอย่าลืมชวนฉันด้วย|khraao-nâa yàa lʉʉm chuan chǎn dûai|Please invite me next time.|下次別忘了邀請我。
I|เราน่าจะมีอะไรที่ชอบเหมือนกัน|rao nâa jà mii à-rai thîi châwp mʉ̌ean gan|We probably have some shared interests.|我們應該有一些共同喜好。
I|ฉันอยากแนะนำคุณให้ครอบครัวรู้จัก|chǎn yàak náe-nam khun hâi khrâwp-khrua rúu-jàk|I'd like to introduce you to my family.|我想介紹你給家人認識。
I|ขอบคุณที่รับฟังฉัน|khàwp-khun thîi ráp-fang chǎn|Thank you for listening to me.|謝謝你聽我說。
I|ถ้าคุณไม่สบายใจ เราเปลี่ยนเรื่องคุยได้|thâa khun mâi sà-baai-jai rao bplìian rʉ̂eang khui dâi|If you're uncomfortable, we can change the subject.|如果你不自在，我們可以換個話題。
I|ฉันไม่ได้ตั้งใจทำให้คุณเสียใจ|chǎn mâi dâi dtâng-jai tham hâi khun sǐia-jai|I didn't mean to hurt you.|我不是故意讓你難過。
I|เราคุยกันตอนที่ทั้งคู่พร้อมดีกว่า|rao khui gan dtawn thîi tháng khûu phráwm dii gwàa|Let's talk when we're both ready.|等我們都準備好了再談吧。
I|คุณอยากให้ฉันช่วยอะไรไหม|khun yàak hâi chǎn chûai à-rai mǎi|Is there anything you'd like me to help with?|你想要我幫什麼忙嗎？
I|ฉันเคารพการตัดสินใจของคุณ|chǎn khao-róp gaan dtàt-sǐn-jai khǎwng khun|I respect your decision.|我尊重你的決定。
I|เราติดต่อกันทางไหนสะดวกที่สุด|rao dtìt-dtàw gan thaang nǎi sà-dùak thîi-sùt|What's the best way for us to stay in touch?|我們用什麼方式聯絡最方便？
U|ฉันอยากเข้าใจมุมมองของคุณก่อนตอบ|chǎn yàak khâo-jai mum-mawng khǎwng khun gàwn dtàwp|I'd like to understand your perspective before I respond.|我想先了解你的看法再回答。
U|เราคงต้องให้เวลากันปรับความเข้าใจ|rao khong dtâwng hâi wee-laa gan bpràp khwaam-khâo-jai|We probably need time to work through this together.|我們可能需要時間彼此溝通。
U|ฉันรู้สึกว่าช่วงนี้เราคุยกันน้อยลง|chǎn rúu-sʉ̀k wâa chûang-níi rao khui gan nói long|I feel we've been talking less lately.|我覺得我們最近聊得比較少。
U|บางทีฉันต้องการเวลาอยู่คนเดียวบ้าง|baang-thii chǎn dtâwng-gaan wee-laa yùu khon diao bâang|Sometimes I need some time alone.|有時候我需要一些獨處時間。
U|ฉันยินดีช่วย แต่วันนี้มีเวลาไม่มาก|chǎn yin-dii chûai dtàe wan-níi mii wee-laa mâi mâak|I'm happy to help, but I don't have much time today.|我很樂意幫忙，但今天時間不多。
U|ขอบคุณที่พูดตรงไปตรงมากับฉัน|khàwp-khun thîi phûut dtrong-pai-dtrong-maa gàp chǎn|Thank you for being honest with me.|謝謝你坦誠告訴我。
U|ฉันไม่อยากให้ความเข้าใจผิดเล็กน้อยกระทบความสัมพันธ์|chǎn mâi yàak hâi khwaam-khâo-jai-phìt lék-nói grà-thóp khwaam-sǎm-phan|I don't want a small misunderstanding to affect our relationship.|我不希望小誤會影響我們的關係。
U|ถ้าคุณอยากเล่า ฉันพร้อมฟัง|thâa khun yàak lâo chǎn phráwm fang|If you'd like to talk, I'm ready to listen.|如果你想說，我願意聽。
U|ฉันอาจมองเรื่องนี้ต่างจากคุณ แต่ยังเคารพคุณ|chǎn àat mawng rʉ̂eang níi dtàang jàak khun dtàe yang khao-róp khun|I may see this differently, but I still respect you.|我可能看法不同，但仍尊重你。
U|เราควรกำหนดขอบเขตที่ทั้งสองฝ่ายสบายใจ|rao khuan gam-nòt khàwp-khèet thîi tháng sǎawng fàai sà-baai-jai|We should set boundaries both of us are comfortable with.|我們應該訂出雙方都自在的界線。
U|ฉันไม่ได้คาดหวังให้คุณตอบทันที|chǎn mâi dâi khâat-wǎng hâi khun dtàwp than-thii|I don't expect an immediate answer.|我不期待你立刻回答。
U|ถ้าเรื่องนี้ละเอียดอ่อน เราคุยกันเป็นการส่วนตัว|thâa rʉ̂eang níi lá-ìiat-awn rao khui gan bpen gaan-sùan-dtua|If this is sensitive, let's discuss it privately.|如果這件事敏感，我們私下談。
U|ฉันขอโทษที่ไม่ได้ฟังคุณให้จบ|chǎn khǎw-thôot thîi mâi dâi fang khun hâi jòp|I'm sorry I didn't let you finish.|抱歉我沒有聽你說完。
U|ฉันอยากหาวิธีที่เราทั้งคู่รู้สึกดี|chǎn yàak hǎa wí-thii thîi rao tháng khûu rúu-sʉ̀k dii|I'd like to find a way we both feel good about.|我想找一個我們都能接受的方式。
U|ความสัมพันธ์ที่ดีต้องอาศัยการสื่อสาร|khwaam-sǎm-phan thîi dii dtâwng aa-sǎi gaan sʉ̀ʉ-sǎan|A good relationship takes communication.|好的關係需要溝通。
U|ฉันอยากขอบคุณที่คุณอยู่ข้างฉันเสมอ|chǎn yàak khàwp-khun thîi khun yùu khâang chǎn sà-mǒe|I want to thank you for always being there for me.|謝謝你一直在我身邊。
`,
  shopping: `
B|ร้านนี้เปิดกี่โมง|ráan-níi bpòet gìi moong|What time does this shop open?|這家店幾點開？
B|ฉันกำลังมองหารองเท้า|chǎn gam-lang mawng-hǎa rawng-tháo|I'm looking for shoes.|我在找鞋子。
B|มีสีอื่นไหม|mii sǐi ʉ̀ʉn mǎi|Do you have another color?|有別的顏色嗎？
B|ขอดูอันนั้นหน่อย|khǎw duu an-nán nòi|Could I see that one?|可以給我看那個嗎？
B|ลองใส่ได้ไหม|lawng sài dâi mǎi|Can I try it on?|可以試穿嗎？
B|จ่ายเงินที่ไหน|jàai ngoen thîi nǎi|Where do I pay?|在哪裡付款？
B|รับเงินสดไหม|ráp ngoen-sòt mǎi|Do you accept cash?|收現金嗎？
B|ฉันเอาอันนี้|chǎn ao an-níi|I'll take this one.|我買這個。
I|มีขนาดเล็กกว่านี้ไหม|mii khà-nàat lék gwàa níi mǎi|Do you have a smaller size?|有更小的尺寸嗎？
I|สินค้านี้ทำจากวัสดุอะไร|sǐn-kháa níi tham jàak wát-sà-dù à-rai|What material is this made of?|這件商品是什麼材質？
I|ราคานี้เป็นราคาสุทธิหรือยัง|raa-khaa níi bpen raa-khaa sùt-thí rʉ̌ʉ yang|Is this the final price?|這是最終價格了嗎？
I|ตอนนี้มีโปรโมชั่นอะไรบ้าง|dtawn-níi mii bproo-moo-chân à-rai bâang|Are there any promotions now?|現在有什麼促銷活動？
I|ซื้อสองชิ้นลดราคาไหม|sʉ́ʉ sǎawng chín lót raa-khaa mǎi|Is there a discount if I buy two?|買兩件有折扣嗎？
I|ฉันขอดูรายละเอียดก่อนตัดสินใจ|chǎn khǎw duu raai-lá-ìiat gàwn dtàt-sǐn-jai|I'd like to see the details before deciding.|我想先看詳細資訊再決定。
I|สามารถชำระเงินด้วยการโอนได้ไหม|sǎa-mâat cham-rá ngoen dûai gaan oon dâi mǎi|Can I pay by bank transfer?|可以用轉帳付款嗎？
I|กรุณาใส่ถุงแยกกัน|gà-rú-naa sài thǔng yâek gan|Please put them in separate bags.|請分袋裝。
I|สินค้าเหลืออยู่กี่ชิ้น|sǐn-kháa lʉ̌ea yùu gìi chín|How many are left in stock?|還剩幾件？
I|ฉันสั่งซื้อทางออนไลน์เมื่อวาน|chǎn sàng-sʉ́ʉ thaang awn-lai mʉ̂ea-waan|I ordered online yesterday.|我昨天在網上下單了。
I|ฉันยังไม่ได้รับพัสดุ|chǎn yang mâi dâi ráp phát-sà-dù|I haven't received the parcel yet.|我還沒收到包裹。
I|เลขติดตามพัสดุอยู่ตรงไหน|lêek dtìt-dtaam phát-sà-dù yùu dtrong nǎi|Where can I find the tracking number?|物流追蹤號碼在哪裡？
I|ฉันขอเปลี่ยนเป็นขนาดอื่น|chǎn khǎw bplìian bpen khà-nàat ʉ̀ʉn|I'd like to exchange this for another size.|我想換成其他尺寸。
I|สินค้าชิ้นนี้ใช้งานไม่ได้|sǐn-kháa chín-níi chái-ngaan mâi dâi|This item doesn't work.|這件商品無法使用。
I|ช่วยตรวจสอบราคาอีกครั้งได้ไหม|chûai dtrùat-sàwp raa-khaa ìik khráng dâi mǎi|Could you check the price again?|可以再確認一次價格嗎？
I|ฉันเก็บใบเสร็จไว้แล้ว|chǎn gèp bai-sèt wái láew|I kept the receipt.|我有保留收據。
U|เงื่อนไขการรับประกันครอบคลุมความเสียหายแบบไหน|ngʉ̂ean-khǎi gaan ráp-bprà-gan khrâwp-khlum khwaam-sǐia-hǎai bàep nǎi|What kinds of damage does the warranty cover?|保固涵蓋哪些損壞？
U|ถ้าสินค้ามีปัญหาภายในเจ็ดวัน ขอเปลี่ยนได้ไหม|thâa sǐn-kháa mii bpan-hǎa phaai-nai jèt wan khǎw bplìian dâi mǎi|If the item has a problem within seven days, can I exchange it?|如果商品在七天內出問題，可以換貨嗎？
U|ฉันได้รับสินค้าคนละรุ่นกับที่สั่ง|chǎn dâi ráp sǐn-kháa khon-lá rûn gàp thîi sàng|I received a different model from the one I ordered.|我收到的型號和訂購的不一樣。
U|ช่วยแจ้งระยะเวลาคืนเงินโดยประมาณ|chûai jâeng rá-yá-wee-laa khʉʉn-ngoen dooi bprà-maan|Please tell me roughly how long a refund takes.|請告訴我退款大約需要多久。
U|ฉันอยากเปรียบเทียบคุณสมบัติของสองรุ่นนี้|chǎn yàak bprìiap-thîiap khun-sǒm-bàt khǎwng sǎawng rûn níi|I'd like to compare the features of these two models.|我想比較這兩個型號的功能。
U|สินค้ารุ่นนี้ประหยัดพลังงานมากกว่าไหม|sǐn-kháa rûn-níi bprà-yàt phlang-ngaan mâak gwàa mǎi|Is this model more energy efficient?|這個型號更省電嗎？
U|ค่าจัดส่งรวมอยู่ในราคาที่แสดงหรือเปล่า|khâa jàt-sòng ruam yùu nai raa-khaa thîi sà-daeng rʉ̌ʉ bplào|Is shipping included in the displayed price?|標示的價格包含運費嗎？
U|หากสินค้าเสียระหว่างขนส่ง ใครเป็นผู้รับผิดชอบ|hàak sǐn-kháa sǐia rá-wàang khǒn-sòng khrai bpen phûu ráp-phìt-châwp|Who is responsible if the item is damaged in transit?|如果商品運送途中損壞，誰負責？
U|ฉันต้องการหลักฐานยืนยันการชำระเงิน|chǎn dtâwng-gaan làk-thǎan yʉʉn-yan gaan cham-rá ngoen|I need proof of payment.|我需要付款證明。
U|ราคาที่คิดเงินจริงไม่ตรงกับป้าย|raa-khaa thîi khít ngoen jing mâi dtrong gàp bpâai|The amount charged doesn't match the price tag.|實際收取的金額和標價不同。
U|ถ้ารุ่นนี้หมด จะมีสินค้าเข้ามาอีกเมื่อไหร่|thâa rûn-níi mòt jà mii sǐn-kháa khâo maa ìik mʉ̂ea-rài|If this model is sold out, when will it be restocked?|如果這款賣完了，何時會補貨？
U|ฉันอยากทราบนโยบายการคืนสินค้าก่อนซื้อ|chǎn yàak sâap ná-yoo-baai gaan khʉʉn sǐn-kháa gàwn sʉ́ʉ|I'd like to know the return policy before buying.|購買前我想了解退貨政策。
U|ส่วนลดนี้ใช้ร่วมกับคูปองอื่นได้ไหม|sùan-lót níi chái rûam gàp khuu-bpawng ʉ̀ʉn dâi mǎi|Can this discount be combined with another coupon?|這個折扣可以和其他優惠券併用嗎？
U|ฉันขอให้จัดส่งไปอีกที่อยู่หนึ่ง|chǎn khǎw hâi jàt-sòng pai ìik thîi-yùu nʉ̀ng|Please deliver it to a different address.|請寄送到另一個地址。
U|ช่วยระบุวันที่คาดว่าจะได้รับสินค้า|chûai rá-bù wan-thîi khâat wâa jà dâi ráp sǐn-kháa|Please specify the expected delivery date.|請註明預計到貨日期。
U|ฉันจะตัดสินใจหลังจากอ่านความคิดเห็นผู้ใช้|chǎn jà dtàt-sǐn-jai lǎng-jàak àan khwaam-khít-hěn phûu-chái|I'll decide after reading user reviews.|我看過使用者評價再決定。
`,
  housing: `
B|ห้องนี้ว่างไหม|hâwng-níi wâang mǎi|Is this room available?|這間房還有空嗎？
B|ห้องเช่าอยู่ชั้นไหน|hâwng-châo yùu chán nǎi|Which floor is the rental room on?|出租的房間在幾樓？
B|มีเครื่องซักผ้าไหม|mii khrʉ̂eang-sák-phâa mǎi|Is there a washing machine?|有洗衣機嗎？
B|มีอินเทอร์เน็ตไหม|mii in-thoe-nèt mǎi|Is there internet?|有網路嗎？
B|ห้องนี้มีหน้าต่างไหม|hâwng-níi mii nâa-dtàang mǎi|Does this room have a window?|這間房有窗戶嗎？
B|ฉันจะอยู่หนึ่งเดือน|chǎn jà yùu nʉ̀ng dʉʉan|I'll stay for one month.|我要住一個月。
B|กุญแจอยู่ที่ไหน|gun-jae yùu thîi nǎi|Where is the key?|鑰匙在哪裡？
B|แอร์ไม่เย็น|ae mâi yen|The air conditioner isn't cooling.|冷氣不冷。
I|รวมค่าส่วนกลางในค่าเช่าหรือยัง|ruam khâa-sùan-glaang nai khâa-châo rʉ̌ʉ yang|Is the maintenance fee included in the rent?|房租包含管理費嗎？
I|สัญญาเช่าขั้นต่ำกี่เดือน|sǎn-yaa-châo khân-dtàm gìi dʉʉan|What's the minimum lease term?|最短租期是幾個月？
I|ต้องจ่ายค่าเช่าวันที่เท่าไหร่|dtâwng jàai khâa-châo wan-thîi thâo-rài|On what date is rent due?|房租要在幾號繳？
I|ย้ายเข้าได้เร็วที่สุดวันไหน|yáai-khâo dâi reo thîi-sùt wan nǎi|What's the earliest move-in date?|最早哪天可以搬進來？
I|ขอดูห้องจริงก่อนตัดสินใจ|khǎw duu hâwng jing gàwn dtàt-sǐn-jai|I'd like to see the room before deciding.|我想看實際房間再決定。
I|มีเฟอร์นิเจอร์อะไรให้บ้าง|mii foe-ní-joe à-rai hâi bâang|What furniture is provided?|有附哪些家具？
I|เลี้ยงสัตว์ในห้องได้ไหม|líiang sàt nai hâwng dâi mǎi|Are pets allowed in the room?|房間可以養寵物嗎？
I|ต้องแจ้งก่อนย้ายออกกี่วัน|dtâwng jâeng gàwn yáai-àawk gìi wan|How many days' notice is required before moving out?|搬出前要提前幾天通知？
I|ไฟในห้องน้ำเสีย|fai nai hâwng-náam sǐia|The bathroom light is broken.|浴室的燈壞了。
I|มีเสียงดังจากห้องข้าง ๆ|mii sǐiang dang jàak hâwng khâang khâang|There's loud noise from the room next door.|隔壁房間很吵。
I|ช่วยส่งช่างมาดูได้ไหม|chûai sòng châang maa duu dâi mǎi|Could you send a repair technician?|可以請維修師傅來看看嗎？
I|ประตูล็อกไม่ค่อยได้|bprà-dtuu láwk mâi khâwi dâi|The door doesn't lock properly.|門不太能鎖好。
I|น้ำรั่วใต้เครื่องซักผ้า|náam rûa dtâi khrʉ̂eang-sák-phâa|Water is leaking under the washing machine.|洗衣機下面漏水。
I|ฉันอยากขอต่อสัญญาอีกหกเดือน|chǎn yàak khǎw dtàw sǎn-yaa ìik hòk dʉʉan|I'd like to extend the lease by six months.|我想再續租六個月。
I|ห้องนี้รับแสงแดดตอนเช้าไหม|hâwng-níi ráp sǎeng-dàet dtawn-cháo mǎi|Does this room get morning sunlight?|這間房早上會有陽光嗎？
I|มีที่จอดรถสำหรับผู้เช่าไหม|mii thîi-jàwt-rót sǎm-ràp phûu-châo mǎi|Is there parking for tenants?|租客有停車位嗎？
U|เงินประกันจะคืนภายในกี่วันหลังย้ายออก|ngoen-bprà-gan jà khʉʉn phaai-nai gìi wan lǎng yáai-àawk|How many days after moving out will the deposit be returned?|搬出後幾天內會退還押金？
U|ช่วยระบุความเสียหายเดิมไว้ในเอกสารด้วย|chûai rá-bù khwaam-sǐia-hǎai doem wái nai èek-gà-sǎan dûai|Please document any existing damage.|請把原有損壞記錄在文件中。
U|ขอถ่ายรูปสภาพห้องก่อนย้ายเข้า|khǎw thàai-rûup sà-phâap hâwng gàwn yáai-khâo|I'd like to photograph the room before moving in.|我想在搬入前拍照記錄房況。
U|ค่าไฟคิดตามมิเตอร์จริงหรืออัตราเหมาจ่าย|khâa-fai khít dtaam mí-dtôe jing rʉ̌ʉ àt-dtraa mǎo-jàai|Is electricity charged by the meter or at a flat rate?|電費按實際度數還是固定費率計算？
U|หากเครื่องใช้ไฟฟ้าเสีย ใครรับผิดชอบค่าซ่อม|hàak khrʉ̂eang-chái-fai-fáa sǐia khrai ráp-phìt-châwp khâa-sâwm|Who pays for repairs if an appliance breaks?|如果電器壞了，誰負擔維修費？
U|เพื่อนบ้านเสียงดังหลังเที่ยงคืนเป็นประจำ|phʉ̂ean-bâan sǐiang dang lǎng thîiang-khʉʉn bpen bprà-jam|The neighbors are regularly noisy after midnight.|鄰居常在半夜後很吵。
U|ขอทราบขั้นตอนแจ้งปัญหาเกี่ยวกับอาคาร|khǎw sâap khân-dtawn jâeng bpan-hǎa gìiao-gàp aa-khaan|What is the process for reporting a building issue?|請問如何通報大樓的問題？
U|ฉันอยากตรวจสอบเงื่อนไขการยกเลิกสัญญา|chǎn yàak dtrùat-sàwp ngʉ̂ean-khǎi gaan yók-lôek sǎn-yaa|I'd like to review the lease cancellation terms.|我想確認解約條件。
U|ถ้าต้องย้ายออกก่อนกำหนด จะเสียค่าใช้จ่ายเท่าไหร่|thâa dtâwng yáai-àawk gàwn gam-nòt jà sǐia khâa-chái-jàai thâo-rài|What would I owe if I moved out early?|如果提前搬出，需支付多少費用？
U|ในสัญญาระบุว่าเจ้าของห้องต้องแจ้งก่อนเข้าห้อง|nai sǎn-yaa rá-bù wâa jâo-khǎwng-hâwng dtâwng jâeng gàwn khâo hâwng|The lease says the landlord must give notice before entering.|合約規定房東進房前必須通知。
U|ฉันขอสำเนาสัญญาที่ลงนามแล้ว|chǎn khǎw sǎm-nao sǎn-yaa thîi long-naam láew|I'd like a signed copy of the lease.|請給我一份已簽署的租約副本。
U|น้ำประปาไหลอ่อนทุกครั้งที่มีคนใช้พร้อมกัน|náam-bprà-bpaa lǎi àwn thúk khráng thîi mii khon chái phráwm gan|Water pressure drops whenever people use it at the same time.|每次多人同時用水，水壓就很弱。
U|ขอให้ช่างนัดเวลาซ่อมล่วงหน้าได้ไหม|khǎw hâi châang nát wee-laa sâwm lûang-nâa dâi mǎi|Could the technician schedule the repair in advance?|可以請維修師傅提前約時間嗎？
U|ฉันอยากทราบว่าบริเวณนี้น้ำท่วมบ่อยไหม|chǎn yàak sâap wâa baw-rí-ween níi náam-thûam bɔ̀i mǎi|I'd like to know whether this area floods often.|我想知道這一帶是否常淹水。
U|ก่อนคืนกุญแจ เราควรตรวจห้องด้วยกัน|gàwn khʉʉn gun-jae rao khuan dtrùat hâwng dûai gan|We should inspect the room together before I return the key.|還鑰匙前，我們應該一起驗屋。
U|ขอใบเสร็จรับเงินทุกครั้งที่จ่ายค่าเช่า|khǎw bai-sèt-ráp-ngoen thúk khráng thîi jàai khâa-châo|Please give me a receipt each time I pay rent.|每次繳房租請給我收據。
`,
  work: `
B|ฉันทำงานที่บริษัทนี้|chǎn tham-ngaan thîi baw-rí-sàt níi|I work at this company.|我在這家公司工作。
B|วันนี้มีประชุมไหม|wan-níi mii bprà-chum mǎi|Is there a meeting today?|今天有開會嗎？
B|ประชุมเริ่มกี่โมง|bprà-chum rôem gìi moong|What time does the meeting start?|會議幾點開始？
B|ฉันจะส่งอีเมลให้|chǎn jà sòng ii-meew hâi|I'll send you an email.|我會寄電子郵件給你。
B|ช่วยดูงานนี้หน่อย|chûai duu ngaan níi nòi|Please take a look at this task.|請幫我看一下這項工作。
B|ฉันทำงานเสร็จแล้ว|chǎn tham-ngaan sèt láew|I've finished the work.|我做完工作了。
B|พรุ่งนี้ฉันลางาน|phrûng-níi chǎn laa-ngaan|I'm taking leave tomorrow.|我明天請假。
B|ขอเวลาสักครู่|khǎw wee-laa sàk khrûu|Give me a moment.|請給我一點時間。
I|เรามาคุยเรื่องกำหนดส่งงานกัน|rao maa khui rʉ̂eang gam-nòt sòng-ngaan gan|Let's discuss the deadline.|我們談談交件期限吧。
I|ฉันต้องการข้อมูลเพิ่มเติมก่อนเริ่มงาน|chǎn dtâwng-gaan khâw-muun phôem-dtoem gàwn rôem ngaan|I need more information before starting.|開始前我需要更多資訊。
I|ช่วยสรุปประเด็นสำคัญหลังประชุม|chûai sà-rùp bprà-den sǎm-khan lǎng bprà-chum|Please summarize the key points after the meeting.|會後請整理重點。
I|เราควรแบ่งหน้าที่ให้ชัดเจน|rao khuan bàeng nâa-thîi hâi chát-jeen|We should divide responsibilities clearly.|我們應該清楚分工。
I|ส่วนนี้ใครเป็นคนรับผิดชอบ|sùan níi khrai bpen khon ráp-phìt-châwp|Who's responsible for this part?|這部分由誰負責？
I|ฉันจะอัปเดตความคืบหน้าให้พรุ่งนี้|chǎn jà àp-dèet khwaam-khʉ̂ʉp-nâa hâi phrûng-níi|I'll update you on the progress tomorrow.|我明天會更新進度。
I|มีปัญหาอะไรที่ต้องช่วยกันแก้ไหม|mii bpan-hǎa à-rai thîi dtâwng chûai gan gâe mǎi|Are there any problems we need to solve together?|有什麼需要一起解決的問題嗎？
I|ฉันยังไม่ได้รับไฟล์ฉบับล่าสุด|chǎn yang mâi dâi ráp fai chà-bàp lâa-sùt|I haven't received the latest file.|我還沒收到最新版檔案。
I|ช่วยส่งเอกสารก่อนบ่ายสาม|chûai sòng èek-gà-sǎan gàwn bàai-sǎam|Please send the document before 3 p.m.|請在下午三點前寄文件。
I|ฉันเห็นด้วยกับแนวทางนี้|chǎn hěn-dûai gàp naew-thaang níi|I agree with this approach.|我同意這個方向。
I|เราควรลองอีกวิธีหนึ่ง|rao khuan lawng ìik wí-thii nʉ̀ng|We should try another method.|我們應該試試另一種方法。
I|ลูกค้าต้องการแก้ไขรายละเอียด|lûuk-kháa dtâwng-gaan gâe-khǎi raai-lá-ìiat|The client wants to change some details.|客戶想修改細節。
I|ขอเลื่อนการประชุมไปช่วงบ่าย|khǎw lʉ̂ean gaan bprà-chum pai chûang-bàai|Could we move the meeting to the afternoon?|可以把會議延到下午嗎？
I|ฉันขอความคิดเห็นจากทีมก่อน|chǎn khǎw khwaam-khít-hěn jàak thiim gàwn|Let me ask the team for input first.|讓我先徵詢團隊意見。
I|งานนี้เร่งด่วนกว่างานอื่นไหม|ngaan níi rêng-dùan gwàa ngaan ʉ̀ʉn mǎi|Is this task more urgent than the others?|這項工作比其他工作急嗎？
I|ขอบคุณสำหรับคำแนะนำที่ชัดเจน|khàwp-khun sǎm-ràp kham-náe-nam thîi chát-jeen|Thanks for the clear guidance.|謝謝你清楚的指引。
U|ก่อนตัดสินใจ เราควรตรวจสอบข้อมูลอีกครั้ง|gàwn dtàt-sǐn-jai rao khuan dtrùat-sàwp khâw-muun ìik khráng|We should verify the data before deciding.|決定前我們應該再核對資料。
U|งานส่วนนี้ขึ้นอยู่กับผลจากอีกทีมหนึ่ง|ngaan sùan níi khʉ̂n yùu gàp phǒn jàak ìik thiim nʉ̀ng|This part depends on results from another team.|這部分工作取決於另一個團隊的結果。
U|หากกำหนดส่งไม่เปลี่ยน เราต้องลดขอบเขตงาน|hàak gam-nòt sòng mâi bplìian rao dtâwng lót khàwp-khèet ngaan|If the deadline stays the same, we must reduce the scope.|如果期限不變，我們得縮小工作範圍。
U|ช่วยชี้แจงวัตถุประสงค์ของโครงการอีกครั้ง|chûai chíi-jaeng wát-thù-bprà-sǒng khǎwng khroong-gaan ìik khráng|Could you clarify the project's objective again?|可以再說明一次專案目標嗎？
U|ฉันกังวลว่าทรัพยากรที่มีอยู่ไม่เพียงพอ|chǎn gang-won wâa sáp-pha-yaa-gawn thîi mii yùu mâi phiiang-phaw|I'm concerned that our current resources aren't enough.|我擔心目前資源不足。
U|เราควรแจ้งผู้เกี่ยวข้องทันทีที่แผนเปลี่ยน|rao khuan jâeng phûu-gìiao-khâwng than-thii thîi phǎen bplìian|We should inform stakeholders as soon as the plan changes.|計畫一改變就應該通知相關人員。
U|ข้อเสนอนี้มีความเสี่ยงอะไรบ้าง|khâw-sà-nǒe níi mii khwaam-sǐiang à-rai bâang|What risks does this proposal involve?|這項提案有哪些風險？
U|เราต้องกำหนดเกณฑ์วัดผลให้ชัดเจน|rao dtâwng gam-nòt geen wát-phǒn hâi chát-jeen|We need clear criteria for measuring results.|我們需要明確的成效衡量標準。
U|ฉันอยากหารือเรื่องปริมาณงานที่เพิ่มขึ้น|chǎn yàak hǎa-rʉʉ rʉ̂eang bprí-maan ngaan thîi phôem khʉ̂n|I'd like to discuss my increased workload.|我想討論增加的工作量。
U|ถ้าต้องทำงานล่วงเวลา ขอทราบเงื่อนไขก่อน|thâa dtâwng tham-ngaan lûang-wee-laa khǎw sâap ngʉ̂ean-khǎi gàwn|If overtime is needed, I'd like to know the terms first.|如果需要加班，我想先了解條件。
U|ข้อเสนอแนะนี้ช่วยให้เราปรับปรุงกระบวนการ|khâw-sà-nǒe-náe níi chûai hâi rao bpràp-bprung grà-buan-gaan|This feedback helps us improve the process.|這項回饋有助於改善流程。
U|เราควรบันทึกข้อตกลงเป็นลายลักษณ์อักษร|rao khuan ban-thʉ́k khâw-dtòk-long bpen laai-lák-àk-sǎwn|We should put the agreement in writing.|我們應該把協議寫下來。
U|ความล่าช้านี้อาจกระทบงานขั้นต่อไป|khwaam-lâa-cháa níi àat grà-thóp ngaan khân-dtàw-pai|This delay may affect the next stage of work.|這次延誤可能影響下一階段的工作。
U|ฉันอยากรับฟังข้อกังวลจากทุกฝ่าย|chǎn yàak ráp-fang khâw-gang-won jàak thúk fàai|I'd like to hear every party's concerns.|我想聽聽各方的顧慮。
U|เราควรทบทวนผลลัพธ์หลังจากทดลองใช้|rao khuan thóp-thuan phǒn-láp lǎng-jàak thót-lawng chái|We should review the results after the trial.|試用之後我們應該檢討結果。
U|ฉันขอเวลาประเมินผลกระทบก่อนให้คำตอบ|chǎn khǎw wee-laa bprà-moen phǒn-grà-thóp gàwn hâi kham-dtàwp|I need time to assess the impact before answering.|我需要時間評估影響再答覆。
`,
  health: `
B|ฉันไม่สบาย|chǎn mâi sà-baai|I don't feel well.|我不舒服。
B|ฉันปวดท้อง|chǎn bpùat tháwng|I have a stomachache.|我肚子痛。
B|ฉันเวียนหัว|chǎn wiian-hǔa|I feel dizzy.|我頭暈。
B|ฉันไอมาก|chǎn ai mâak|I'm coughing a lot.|我咳得很厲害。
B|ฉันต้องการพบหมอ|chǎn dtâwng-gaan phóp mǎw|I need to see a doctor.|我需要看醫生。
B|ร้านขายยาอยู่ไหน|ráan-khǎai-yaa yùu nǎi|Where is the pharmacy?|藥局在哪裡？
B|ฉันกินยานี้แล้ว|chǎn gin yaa níi láew|I've taken this medicine.|我已經吃了這個藥。
B|ฉันดีขึ้นแล้ว|chǎn dii khʉ̂n láew|I feel better now.|我好多了。
I|ฉันมีอาการมาสามวันแล้ว|chǎn mii aa-gaan maa sǎam wan láew|I've had symptoms for three days.|我有症狀已經三天了。
I|ฉันเจ็บตรงนี้เวลาหายใจ|chǎn jèp dtrong-níi wee-laa hǎai-jai|It hurts here when I breathe.|我呼吸時這裡會痛。
I|อาการนี้เป็น ๆ หาย ๆ|aa-gaan níi bpen bpen hǎai hǎai|The symptoms come and go.|症狀時好時壞。
I|ฉันมีไข้สูงเมื่อคืน|chǎn mii khâi sǔung mʉ̂ea-khʉʉn|I had a high fever last night.|我昨晚發高燒。
I|ฉันแพ้ยาปฏิชีวนะบางชนิด|chǎn pháe yaa bpà-dtì-chii-wá-ná baang chá-nít|I'm allergic to some antibiotics.|我對某些抗生素過敏。
I|ต้องกินยาก่อนหรือหลังอาหาร|dtâwng gin yaa gàwn rʉ̌ʉ lǎng aa-hǎan|Should I take this medicine before or after meals?|這藥要飯前還是飯後吃？
I|ควรกินยาวันละกี่ครั้ง|khuan gin yaa wan-lá gìi khráng|How many times a day should I take it?|一天要吃幾次藥？
I|ยานี้ทำให้ง่วงไหม|yaa níi tham hâi ngûang mǎi|Will this medicine make me drowsy?|這藥會讓人想睡嗎？
I|ฉันขอนัดตรวจสุขภาพ|chǎn khǎw nát dtrùat sùk-khà-phâap|I'd like to book a health checkup.|我想預約健康檢查。
I|ฉันต้องตรวจเลือดไหม|chǎn dtâwng dtrùat lʉ̂eat mǎi|Do I need a blood test?|我需要驗血嗎？
I|ต้องงดอาหารก่อนตรวจไหม|dtâwng ngót aa-hǎan gàwn dtrùat mǎi|Do I need to fast before the test?|檢查前需要禁食嗎？
I|ผลตรวจจะออกเมื่อไหร่|phǒn-dtrùat jà àawk mʉ̂ea-rài|When will the test results be ready?|檢查結果什麼時候出來？
I|ฉันมีประกันสุขภาพจากที่ทำงาน|chǎn mii bprà-gan sùk-khà-phâap jàak thîi tham-ngaan|I have health insurance through work.|我有公司提供的健康保險。
I|ช่วยอธิบายวิธีใช้ยานี้อีกครั้ง|chûai à-thí-baai wí-thii chái yaa níi ìik khráng|Could you explain again how to use this medicine?|可以再說一次這藥怎麼用嗎？
I|ถ้าอาการไม่ดีขึ้น ฉันควรกลับมาไหม|thâa aa-gaan mâi dii khʉ̂n chǎn khuan glàp maa mǎi|Should I return if I don't get better?|如果症狀沒改善，我應該回診嗎？
I|ฉันอยากพบแพทย์ที่พูดภาษาอังกฤษได้|chǎn yàak phóp phâet thîi phûut phaa-sǎa ang-grìt dâi|I'd like to see a doctor who speaks English.|我想找會說英文的醫生。
U|อาการปวดเริ่มจากตรงนี้แล้วลามไปแขน|aa-gaan bpùat rôem jàak dtrong-níi láew laam pai khǎen|The pain started here and spread to my arm.|疼痛從這裡開始，延伸到手臂。
U|ฉันมีอาการข้างเคียงหลังเริ่มกินยาใหม่|chǎn mii aa-gaan khâang-khiang lǎng rôem gin yaa mài|I've had side effects since starting the new medicine.|我開始吃新藥後出現副作用。
U|อาการนี้รบกวนการนอนของฉัน|aa-gaan níi róp-guan gaan nawn khǎwng chǎn|This symptom is disrupting my sleep.|這個症狀影響我睡眠。
U|มีทางเลือกในการรักษาอื่นนอกจากผ่าตัดไหม|mii thaang-lʉ̂eak nai gaan rák-sǎa ʉ̀ʉn nâwk-jàak phàa-dtàt mǎi|Are there treatment options besides surgery?|除了手術還有其他治療方式嗎？
U|การรักษาแบบนี้มีความเสี่ยงอะไรบ้าง|gaan rák-sǎa bàep níi mii khwaam-sǐiang à-rai bâang|What risks are involved in this treatment?|這種治療有哪些風險？
U|ฉันอยากทราบข้อดีข้อเสียก่อนตัดสินใจ|chǎn yàak sâap khâw-dii khâw-sǐia gàwn dtàt-sǐn-jai|I'd like to know the pros and cons before deciding.|決定前我想知道利弊。
U|ช่วยอธิบายผลตรวจเป็นภาษาที่เข้าใจง่าย|chûai à-thí-baai phǒn-dtrùat bpen phaa-sǎa thîi khâo-jai ngâai|Please explain the test results in plain language.|請用容易懂的話解釋檢查結果。
U|ฉันใช้ยาชนิดอื่นอยู่ด้วย จะมีปฏิกิริยากันไหม|chǎn chái yaa chá-nít ʉ̀ʉn yùu dûai jà mii bpà-dtì-gì-rí-yaa gan mǎi|I'm taking another medicine too; could they interact?|我也在用另一種藥，會不會交互作用？
U|หากอาการแย่ลง ฉันควรติดต่อใคร|hàak aa-gaan yâe long chǎn khuan dtìt-dtàw khrai|Who should I contact if my symptoms get worse?|如果症狀惡化，我該聯絡誰？
U|ขอสำเนาประวัติการรักษาเพื่อไปพบแพทย์อีกแห่ง|khǎw sǎm-nao bprà-wàt gaan rák-sǎa phʉ̂ea pai phóp phâet ìik hàeng|I'd like a copy of my medical records for another doctor.|請給我病歷副本，好讓我去看另一位醫生。
U|ฉันอยากได้ความเห็นจากแพทย์อีกคนก่อน|chǎn yàak dâi khwaam-hěn jàak phâet ìik khon gàwn|I'd like a second medical opinion first.|我想先徵詢另一位醫生的意見。
U|อาการนี้เกี่ยวข้องกับโรคประจำตัวของฉันไหม|aa-gaan níi gìiao-khâwng gàp rôok bprà-jam-dtua khǎwng chǎn mǎi|Is this symptom related to my existing condition?|這個症狀和我的慢性病有關嗎？
U|ฉันอยากรู้ว่าต้องพักฟื้นนานแค่ไหน|chǎn yàak rúu wâa dtâwng phák-fʉ́ʉn naan khâe nǎi|I'd like to know how long recovery will take.|我想知道要休養多久。
U|มีข้อควรระวังระหว่างที่กินยานี้ไหม|mii khâw-khuan-rá-wang rá-wàang thîi gin yaa níi mǎi|Are there precautions while taking this medicine?|服用這種藥期間有什麼注意事項？
U|ฉันต้องการล่ามเพื่อสื่อสารข้อมูลทางการแพทย์|chǎn dtâwng-gaan lâam phʉ̂ea sʉ̀ʉ-sǎan khâw-muun thaang gaan-phâet|I need an interpreter to discuss medical information.|我需要口譯協助溝通醫療資訊。
U|ช่วยเขียนชื่อยาและขนาดยาลงในใบสั่งยา|chûai khǐian chʉ̂ʉ yaa láe khà-nàat yaa long nai bai-sàng-yaa|Please write the medicine and dosage on the prescription.|請在處方上寫下藥名和劑量。
`,
  services: `
B|ธนาคารอยู่ที่ไหน|thá-naa-khaan yùu thîi nǎi|Where is the bank?|銀行在哪裡？
B|ฉันอยากแลกเงิน|chǎn yàak lâek ngoen|I'd like to exchange money.|我想換錢。
B|วันนี้ธนาคารเปิดไหม|wan-níi thá-naa-khaan bpòet mǎi|Is the bank open today?|銀行今天有開嗎？
B|ต้องใช้บัตรประชาชนไหม|dtâwng chái bàt bprà-chaa-chon mǎi|Do I need an ID card?|需要身分證嗎？
B|ฉันต้องการถ่ายเอกสาร|chǎn dtâwng-gaan thàai èek-gà-sǎan|I need to make a photocopy.|我需要影印文件。
B|ขอแบบฟอร์มหน่อย|khǎw bàep-fawm nòi|May I have a form?|請給我一份表格。
B|ต้องรอคิวนานไหม|dtâwng raw khiiu naan mǎi|Is the wait long?|需要等很久嗎？
B|ฉันมีนัดไว้แล้ว|chǎn mii nát wái láew|I have an appointment.|我已經預約了。
I|ฉันต้องการเปลี่ยนที่อยู่ในระบบ|chǎn dtâwng-gaan bplìian thîi-yùu nai rá-bòp|I need to change my address in the system.|我需要更新系統裡的地址。
I|เอกสารที่ต้องใช้มีอะไรบ้าง|èek-gà-sǎan thîi dtâwng chái mii à-rai bâang|What documents are required?|需要哪些文件？
I|ต้องยื่นเอกสารตัวจริงไหม|dtâwng yʉ̂ʉn èek-gà-sǎan dtua-jing mǎi|Do I need to submit the original documents?|需要繳交文件正本嗎？
I|ขอสำเนารับรองถูกต้องได้ไหม|khǎw sǎm-nao ráp-rawng thùuk-dtâwng dâi mǎi|Can I get a certified copy?|可以取得認證副本嗎？
I|คำขอของฉันอยู่ในขั้นตอนไหน|kham-khǎw khǎwng chǎn yùu nai khân-dtawn nǎi|What stage is my application at?|我的申請目前進行到哪一步？
I|มีค่าธรรมเนียมเพิ่มเติมไหม|mii khâa-tham-niiam phôem-dtoem mǎi|Are there any additional fees?|有額外手續費嗎？
I|ชำระค่าธรรมเนียมผ่านแอปได้ไหม|cham-rá khâa-tham-niiam phàan àep dâi mǎi|Can I pay the fee through an app?|可以用 App 繳手續費嗎？
I|ฉันกรอกหมายเลขผิด|chǎn gràwk mǎai-lêek phìt|I entered the wrong number.|我填錯號碼了。
I|ช่วยแก้ข้อมูลในแบบฟอร์มได้ไหม|chûai gâe khâw-muun nai bàep-fawm dâi mǎi|Could you correct the information on the form?|可以幫我更正表格資料嗎？
I|ฉันอยากจองคิวใหม่สำหรับวันพรุ่งนี้|chǎn yàak jawng khiiu mài sǎm-ràp wan phrûng-níi|I'd like to book a new appointment for tomorrow.|我想重新預約明天的號碼。
I|กรุณาส่งคำยืนยันทางอีเมล|gà-rú-naa sòng kham-yʉʉn-yan thaang ii-meew|Please send confirmation by email.|請用電子郵件寄確認訊息。
I|ฉันยังไม่ได้รับข้อความยืนยัน|chǎn yang mâi dâi ráp khâw-khwaam yʉʉn-yan|I haven't received a confirmation message.|我還沒收到確認訊息。
I|ต้องใช้เวลาพิจารณากี่วัน|dtâwng chái wee-laa phí-jaa-rá-naa gìi wan|How many days will review take?|審核需要幾天？
I|ฉันขอพูดกับเจ้าหน้าที่ได้ไหม|chǎn khǎw phûut gàp jâo-nâa-thîi dâi mǎi|May I speak with a staff member?|可以讓我和承辦人員談嗎？
I|ช่วยอธิบายขั้นตอนต่อไปให้หน่อย|chûai à-thí-baai khân-dtawn dtàw-pai hâi nòi|Please explain the next step.|請說明下一步的流程。
I|ฉันอยากขอใบยืนยันการยื่นเรื่อง|chǎn yàak khǎw bai-yʉʉn-yan gaan yʉ̂ʉn rʉ̂eang|I'd like a receipt confirming my application.|我想要一份申請受理證明。
U|กรุณาระบุเหตุผลที่คำขอของฉันไม่ผ่าน|gà-rú-naa rá-bù hèet-phǒn thîi kham-khǎw khǎwng chǎn mâi phàan|Please state why my application was rejected.|請說明我的申請未通過的原因。
U|ฉันสามารถยื่นอุทธรณ์ผลการพิจารณาได้ไหม|chǎn sǎa-mâat yʉ̂ʉn ùt-thawn phǒn gaan phí-jaa-rá-naa dâi mǎi|Can I appeal the decision?|我可以對審核結果提出申訴嗎？
U|หากเอกสารไม่ครบ ฉันสามารถส่งเพิ่มเติมภายหลัง|hàak èek-gà-sǎan mâi khróp chǎn sǎa-mâat sòng phôem-dtoem phaai-lǎng|If documents are missing, can I submit them later?|如果文件不齊，我可以之後補交嗎？
U|ช่วยแจ้งกำหนดเวลาที่ต้องดำเนินการให้ชัดเจน|chûai jâeng gam-nòt wee-laa thîi dtâwng dam-noen-gaan hâi chát-jeen|Please clearly state the deadline for taking action.|請明確告知辦理期限。
U|ฉันอยากทราบว่าข้อมูลส่วนตัวจะถูกเก็บไว้นานเท่าไหร่|chǎn yàak sâap wâa khâw-muun sùan-dtua jà thùuk gèp wái naan thâo-rài|How long will my personal information be kept?|我想知道個人資料會保存多久。
U|กรุณาอธิบายเงื่อนไขการใช้บริการเป็นลายลักษณ์อักษร|gà-rú-naa à-thí-baai ngʉ̂ean-khǎi gaan chái baw-rí-gaan bpen laai-lák-àk-sǎwn|Please provide the service terms in writing.|請以書面說明服務條款。
U|ฉันขอหมายเลขอ้างอิงเพื่อติดตามเรื่อง|chǎn khǎw mǎai-lêek âang-ing phʉ̂ea dtìt-dtaam rʉ̂eang|May I have a reference number to track the case?|可以給我案件編號方便追蹤嗎？
U|ข้อมูลในระบบไม่ตรงกับเอกสารที่ฉันยื่น|khâw-muun nai rá-bòp mâi dtrong gàp èek-gà-sǎan thîi chǎn yʉ̂ʉn|The system data doesn't match the documents I submitted.|系統資料與我提交的文件不符。
U|ช่วยตรวจสอบว่าเอกสารนี้ยังมีผลใช้บังคับไหม|chûai dtrùat-sàwp wâa èek-gà-sǎan níi yang mii phǒn chái-bang-kháp mǎi|Could you check whether this document is still valid?|可以確認這份文件是否仍有效嗎？
U|หากต้องแก้ไขข้อมูล ฉันควรติดต่อแผนกไหน|hàak dtâwng gâe-khǎi khâw-muun chǎn khuan dtìt-dtàw phà-naek nǎi|Which department should I contact to correct the information?|如果要更正資料，我該聯絡哪個部門？
U|ฉันอยากได้รับคำตอบเป็นลายลักษณ์อักษร|chǎn yàak dâi ráp kham-dtàwp bpen laai-lák-àk-sǎwn|I'd like a written response.|我希望收到書面回覆。
U|ค่าธรรมเนียมนี้เรียกเก็บตามข้อกำหนดใด|khâa-tham-niiam níi rîiak-gèp dtaam khâw-gam-nòt dai|Under which rule is this fee charged?|這筆手續費依據哪項規定收取？
U|ฉันต้องการตรวจสอบประวัติการทำรายการย้อนหลัง|chǎn dtâwng-gaan dtrùat-sàwp bprà-wàt gaan tham raai-gaan yáwn-lǎng|I need to review my transaction history.|我需要查詢過去的交易紀錄。
U|หากระบบขัดข้อง กำหนดส่งจะขยายไหม|hàak rá-bòp khàt-khâwng gam-nòt sòng jà khà-yǎai mǎi|Will the deadline be extended if the system is down?|如果系統故障，期限會延長嗎？
U|ช่วยยืนยันว่าฉันดำเนินการครบทุกขั้นตอนแล้ว|chûai yʉʉn-yan wâa chǎn dam-noen-gaan khróp thúk khân-dtawn láew|Please confirm that I've completed every step.|請確認我已完成所有程序。
U|ฉันอยากทราบช่องทางร้องเรียนอย่างเป็นทางการ|chǎn yàak sâap châwng-thaang ráwng-riian yàang bpen thaang-gaan|I'd like to know the official complaint channel.|我想知道正式的申訴管道。
`,
  opinions: `
B|ฉันชอบความคิดนี้|chǎn châwp khwaam-khít níi|I like this idea.|我喜歡這個想法。
B|ฉันคิดว่าแบบนี้ดีกว่า|chǎn khít wâa bàep níi dii gwàa|I think this way is better.|我覺得這樣比較好。
B|คุณคิดยังไง|khun khít yang-ngai|What do you think?|你怎麼看？
B|ฉันไม่แน่ใจ|chǎn mâi nâe-jai|I'm not sure.|我不確定。
B|ฉันเห็นด้วยกับคุณ|chǎn hěn-dûai gàp khun|I agree with you.|我同意你的看法。
B|ฉันคิดต่างนิดหน่อย|chǎn khít dtàang nít nòi|I see it a little differently.|我的想法有點不同。
B|น่าสนใจมาก|nâa-sǒn-jai mâak|That's very interesting.|很有意思。
B|ทำไมคุณคิดอย่างนั้น|tham-mai khun khít yàang nán|Why do you think so?|你為什麼這麼想？
I|ฉันอยากฟังเหตุผลของคุณ|chǎn yàak fang hèet-phǒn khǎwng khun|I'd like to hear your reasons.|我想聽聽你的理由。
I|ข้อดีของวิธีนี้คืออะไร|khâw-dii khǎwng wí-thii níi khʉʉ à-rai|What are the advantages of this approach?|這個方法有什麼優點？
I|ข้อเสียที่ต้องคิดถึงคืออะไร|khâw-sǐia thîi dtâwng khít thʉ̌ng khʉʉ à-rai|What drawbacks should we consider?|有哪些缺點需要考慮？
I|ฉันมีประสบการณ์ต่างออกไป|chǎn mii bprà-sòp-gaan dtàang àawk pai|My experience has been different.|我的經驗不太一樣。
I|เรื่องนี้ขึ้นอยู่กับสถานการณ์|rʉ̂eang níi khʉ̂n yùu gàp sà-thǎa-ná-gaan|It depends on the situation.|這要看情況。
I|เราควรมองจากหลายมุม|rao khuan mawng jàak lǎai mum|We should look at it from several angles.|我們應該從不同角度看。
I|ฉันไม่เห็นด้วยทั้งหมด|chǎn mâi hěn-dûai tháng-mòt|I don't agree with all of it.|我不是完全同意。
I|ฉันเห็นด้วยในบางส่วน|chǎn hěn-dûai nai baang sùan|I agree with some parts.|我同意其中一部分。
I|มีข้อมูลอะไรมาสนับสนุนไหม|mii khâw-muun à-rai maa sà-nàp-sà-nǔn mǎi|Is there data to support that?|有什麼資料支持這個說法嗎？
I|ถ้าดูจากตัวเลข ผลยังไม่ชัด|thâa duu jàak dtua-lêek phǒn yang mâi chát|Judging by the numbers, the result isn't clear yet.|從數字來看，結果還不明確。
I|ฉันอยากเปรียบเทียบสองทางเลือก|chǎn yàak bprìiap-thîiap sǎawng thaang-lʉ̂eak|I'd like to compare the two options.|我想比較兩個選項。
I|เหตุผลนี้ฟังดูสมเหตุสมผล|hèet-phǒn níi fang duu sǒm-hèet-sǒm-phǒn|That reasoning sounds reasonable.|這個理由聽起來合理。
I|ฉันคิดว่าเรายังสรุปเร็วเกินไป|chǎn khít wâa rao yang sà-rùp reo goen pai|I think it's too early to conclude.|我認為現在下結論還太早。
I|เรามีข้อมูลเพียงพอไหม|rao mii khâw-muun phiiang-phaw mǎi|Do we have enough information?|我們有足夠資訊嗎？
I|ฉันอยากได้ตัวอย่างที่ชัดเจน|chǎn yàak dâi dtua-yàang thîi chát-jeen|I'd like a clear example.|我想要一個清楚的例子。
I|ขอสรุปความเห็นของฉันสั้น ๆ|khǎw sà-rùp khwaam-hěn khǎwng chǎn sân sân|Let me briefly summarize my view.|讓我簡短總結我的看法。
U|แม้จะมีข้อดี แต่วิธีนี้ก็มีข้อจำกัด|máe jà mii khâw-dii dtàe wí-thii níi gâw mii khâw-jam-gàt|Despite its benefits, this approach has limits.|雖然有優點，這個方法也有限制。
U|ฉันเข้าใจข้อกังวลของคุณ แต่ขอมองอีกด้านหนึ่ง|chǎn khâo-jai khâw-gang-won khǎwng khun dtàe khǎw mawng ìik dâan nʉ̀ng|I understand your concern, but let me offer another perspective.|我理解你的顧慮，但讓我提出另一個角度。
U|ประเด็นสำคัญไม่ใช่แค่ราคา แต่รวมถึงคุณภาพด้วย|bprà-den sǎm-khan mâi châi khâe raa-khaa dtàe ruam thʉ̌ng khun-ná-phâap dûai|The key issue includes quality as well as price.|關鍵不只有價格，也包括品質。
U|ผลลัพธ์นี้อาจเกิดจากหลายปัจจัยร่วมกัน|phǒn-láp níi àat gòet jàak lǎai bpàt-jai rûam gan|Several factors may have contributed to this result.|這個結果可能由多種因素共同造成。
U|เราควรแยกข้อเท็จจริงออกจากความเห็นส่วนตัว|rao khuan yâek khâw-thèt-jing àawk jàak khwaam-hěn sùan-dtua|We should separate facts from personal opinions.|我們應該區分事實和個人意見。
U|ข้อสรุปนี้ยังต้องการหลักฐานเพิ่มเติม|khâw-sà-rùp níi yang dtâwng-gaan làk-thǎan phôem-dtoem|This conclusion still needs more evidence.|這個結論還需要更多證據。
U|ฉันอยากรู้ว่าสมมติฐานนี้มาจากไหน|chǎn yàak rúu wâa sǒm-mút-thǎan níi maa jàak nǎi|I'd like to know where this assumption comes from.|我想知道這個假設從何而來。
U|เราอาจมองผลระยะสั้นมากเกินไป|rao àat mawng phǒn rá-yá-sân mâak goen pai|We may be focusing too much on short-term effects.|我們可能太重視短期效果了。
U|ถ้ามองในระยะยาว ทางเลือกนี้น่าสนใจกว่า|thâa mawng nai rá-yá-yaao thaang-lʉ̂eak níi nâa-sǒn-jai gwàa|In the long term, this option looks more promising.|從長期看，這個選項更有吸引力。
U|ฉันยอมรับว่าตัวอย่างนี้มีข้อยกเว้น|chǎn yawm-ráp wâa dtua-yàang níi mii khâw-yók-wén|I acknowledge this example has exceptions.|我承認這個例子有例外。
U|ไม่ใช่ทุกคนที่จะได้รับผลกระทบเท่ากัน|mâi châi thúk khon thîi jà dâi ráp phǒn-grà-thóp thâo gan|Not everyone will be affected equally.|不是每個人受到的影響都一樣。
U|ข้อเสนอของคุณช่วยเติมเต็มจุดที่ฉันมองข้าม|khâw-sà-nǒe khǎwng khun chûai dtoem-dtem jùt thîi chǎn mawng-khâam|Your suggestion fills a gap I overlooked.|你的建議補足了我忽略的地方。
U|ฉันอยากทบทวนจุดยืนหลังฟังข้อมูลใหม่|chǎn yàak thóp-thuan jùt-yʉʉn lǎng fang khâw-muun mài|I'd like to reconsider my position after hearing new information.|聽到新資訊後，我想重新思考立場。
U|เราอาจเห็นต่างกันในวิธีการ แต่เห็นตรงกันในเป้าหมาย|rao àat hěn-dtàang gan nai wí-thii-gaan dtàe hěn dtrong gan nai bpâo-mǎai|We may disagree on the method but share the same goal.|我們可能在方法上有分歧，但目標一致。
U|ฉันยังไม่พร้อมฟันธงจนกว่าจะเห็นผลจริง|chǎn yang mâi phráwm fan-thong jon-gwàa jà hěn phǒn jing|I'm not ready to make a firm judgment until we see real results.|在看到實際結果前，我還不想下定論。
U|หากมีหลักฐานใหม่ ฉันพร้อมเปลี่ยนความเห็น|hàak mii làk-thǎan mài chǎn phráwm bplìian khwaam-hěn|I'm willing to change my view if new evidence appears.|如果有新證據，我願意改變看法。
`,
  problems: `
B|ฉันต้องการความช่วยเหลือ|chǎn dtâwng-gaan khwaam-chûai-lʉ̌ea|I need help.|我需要幫忙。
B|ของฉันหาย|khǎwng khǎwng chǎn hǎai|My things are missing.|我的東西不見了。
B|ฉันทำโทรศัพท์หาย|chǎn tham thoo-rá-sàp hǎai|I lost my phone.|我的手機遺失了。
B|มันใช้งานไม่ได้|man chái-ngaan mâi dâi|It doesn't work.|它不能用。
B|ช่วยฉันหน่อยได้ไหม|chûai chǎn nòi dâi mǎi|Could you help me?|可以幫我嗎？
B|ฉันจะลองใหม่|chǎn jà lawng mài|I'll try again.|我會再試一次。
B|ขอโทษ ฉันเข้าใจผิด|khǎw-thôot chǎn khâo-jai phìt|Sorry, I misunderstood.|抱歉，我誤會了。
B|เราเริ่มใหม่ได้ไหม|rao rôem mài dâi mǎi|Can we start over?|我們可以重新開始嗎？
I|ฉันจ่ายเงินไปแล้วแต่ยังไม่ได้รับสินค้า|chǎn jàai ngoen pai láew dtàe yang mâi dâi ráp sǐn-kháa|I paid but haven't received the item.|我付了錢，但還沒收到商品。
I|ข้อมูลนี้ไม่ตรงกับที่แจ้งไว้|khâw-muun níi mâi dtrong gàp thîi jâeng wái|This information doesn't match what was stated.|這份資訊和先前告知的不一樣。
I|ช่วยตรวจสอบว่าผิดพลาดตรงไหน|chûai dtrùat-sàwp wâa phìt-phlâat dtrong nǎi|Could you check where the error occurred?|可以查查哪裡出了錯嗎？
I|ฉันอยากคุยกับผู้รับผิดชอบ|chǎn yàak khui gàp phûu-ráp-phìt-châwp|I'd like to speak with the person in charge.|我想和負責人談。
I|เรามาหาทางแก้ปัญหาด้วยกัน|rao maa hǎa thaang gâe bpan-hǎa dûai gan|Let's find a solution together.|我們一起找解決辦法吧。
I|ฉันต้องการคำตอบภายในวันนี้|chǎn dtâwng-gaan kham-dtàwp phaai-nai wan-níi|I need an answer today.|我今天需要答覆。
I|ถ้าทำไม่ได้ ช่วยบอกตรง ๆ|thâa tham mâi dâi chûai bàwk dtrong dtrong|If it can't be done, please tell me directly.|如果做不到，請直接告訴我。
I|ขอเวลาตรวจสอบก่อนตอบได้ไหม|khǎw wee-laa dtrùat-sàwp gàwn dtàwp dâi mǎi|May I check before answering?|可以讓我確認後再回答嗎？
I|เราเข้าใจเงื่อนไขไม่ตรงกัน|rao khâo-jai ngʉ̂ean-khǎi mâi dtrong gan|We understood the terms differently.|我們對條件的理解不同。
I|ช่วยยืนยันสิ่งที่ตกลงกันไว้|chûai yʉʉn-yan sìng thîi dtòk-long gan wái|Please confirm what we agreed on.|請確認我們之前談妥的內容。
I|ฉันเสนอให้เลื่อนกำหนดส่ง|chǎn sà-nǒe hâi lʉ̂ean gam-nòt sòng|I suggest moving the deadline.|我建議延後期限。
I|เราต้องหาวิธีที่ยุติธรรมกับทุกฝ่าย|rao dtâwng hǎa wí-thii thîi yút-dtì-tham gàp thúk fàai|We need a fair solution for everyone.|我們需要找對各方都公平的方法。
I|ปัญหานี้เกิดขึ้นบ่อยไหม|bpan-hǎa níi gòet khʉ̂n bɔ̀i mǎi|Does this problem happen often?|這個問題常發生嗎？
I|จะใช้เวลาแก้ไขประมาณเท่าไหร่|jà chái wee-laa gâe-khǎi bprà-maan thâo-rài|About how long will it take to fix?|大約需要多久解決？
I|ขอให้แจ้งความคืบหน้าเป็นระยะ|khǎw hâi jâeng khwaam-khʉ̂ʉp-nâa bpen rá-yá|Please keep me updated.|請定期告訴我進度。
I|ถ้ายังแก้ไม่ได้ เราควรทำอย่างไร|thâa yang gâe mâi dâi rao khuan tham yàang-rai|What should we do if it still can't be fixed?|如果還是無法解決，我們該怎麼辦？
U|ขอแยกประเด็นที่ตกลงกันได้ออกจากประเด็นที่ยังไม่ลงตัว|khǎw yâek bprà-den thîi dtòk-long gan dâi àawk jàak bprà-den thîi yang mâi long-dtua|Let's separate what we've agreed on from what remains unresolved.|我們先區分已達成共識和未解決的部分。
U|ฉันไม่ได้กล่าวโทษใคร แต่อยากหาสาเหตุ|chǎn mâi dâi glàao-thôot khrai dtàe yàak hǎa sǎa-hèet|I'm not blaming anyone; I want to find the cause.|我不是在責怪誰，而是想找出原因。
U|ถ้าเงื่อนไขเดิมใช้ไม่ได้ เราควรเจรจาใหม่|thâa ngʉ̂ean-khǎi doem chái mâi dâi rao khuan jee-rá-jaa mài|If the original terms no longer work, we should renegotiate.|如果原條件不適用，我們應該重新協商。
U|ฉันขอหลักฐานที่แสดงว่าได้ดำเนินการแล้ว|chǎn khǎw làk-thǎan thîi sà-daeng wâa dâi dam-noen-gaan láew|I'd like proof that the action has been taken.|我想要已經處理的證明。
U|ปัญหานี้ส่งผลกระทบต่อแผนงานทั้งหมด|bpan-hǎa níi sòng phǒn-grà-thóp dtàw phǎen-ngaan tháng-mòt|This problem affects the entire plan.|這個問題影響整個計畫。
U|เราควรแก้สาเหตุหลักแทนการแก้เฉพาะหน้า|rao khuan gâe sǎa-hèet làk thaen gaan gâe chà-pháw-nâa|We should address the root cause instead of applying a temporary fix.|我們應該處理根本原因，而非只做應急處理。
U|ฉันขอเสนอทางเลือกที่ลดผลเสียของทั้งสองฝ่าย|chǎn khǎw sà-nǒe thaang-lʉ̂eak thîi lót phǒn-sǐia khǎwng tháng sǎawng fàai|I'd like to propose an option that reduces harm to both sides.|我想提出一個減少雙方損失的方案。
U|ข้อตกลงใหม่ควรระบุหน้าที่ของแต่ละฝ่ายให้ชัด|khâw-dtòk-long mài khuan rá-bù nâa-thîi khǎwng dtàe-lá fàai hâi chát|The new agreement should clarify each side's duties.|新協議應明確列出各方責任。
U|หากไม่สามารถตกลงกันได้ เราอาจต้องหาคนกลาง|hàak mâi sǎa-mâat dtòk-long gan dâi rao àat dtâwng hǎa khon-glaang|If we can't agree, we may need a mediator.|如果談不攏，我們可能需要調解人。
U|ฉันอยากให้การสื่อสารทั้งหมดเป็นลายลักษณ์อักษร|chǎn yàak hâi gaan sʉ̀ʉ-sǎan tháng-mòt bpen laai-lák-àk-sǎwn|I'd like all communication to be in writing.|我希望所有溝通都留書面紀錄。
U|ช่วยกำหนดวันติดตามผลที่แน่นอนได้ไหม|chûai gam-nòt wan dtìt-dtaam-phǒn thîi nâe-nawn dâi mǎi|Could we set a firm follow-up date?|可以訂一個明確的追蹤日期嗎？
U|ฉันยินดีประนีประนอมในส่วนที่ไม่กระทบหลักการ|chǎn yin-dii bprà-nii-bprà-nawm nai sùan thîi mâi grà-thóp làk-gaan|I'm willing to compromise on points that don't affect the core principle.|不影響原則的部分，我願意妥協。
U|เงื่อนไขนี้ต่างจากที่เราคุยกันไว้ก่อนหน้า|ngʉ̂ean-khǎi níi dtàang jàak thîi rao khui gan wái gàwn-nâa|This term differs from what we discussed earlier.|這個條件和先前談的不一樣。
U|กรุณาอธิบายเหตุผลของการเปลี่ยนแปลงครั้งนี้|gà-rú-naa à-thí-baai hèet-phǒn khǎwng gaan bplìian-bplaeng khráng níi|Please explain the reason for this change.|請說明這次變更的原因。
U|เราเห็นตรงกันเรื่องเป้าหมาย แต่ยังต้องตกลงวิธีทำ|rao hěn dtrong gan rʉ̂eang bpâo-mǎai dtàe yang dtâwng dtòk-long wí-thii tham|We agree on the goal, but still need to settle how to do it.|我們對目標有共識，但還得談妥做法。
U|ฉันขอเวลาทบทวนข้อเสนอก่อนตอบรับ|chǎn khǎw wee-laa thóp-thuan khâw-sà-nǒe gàwn dtàwp-ráp|I need time to review the proposal before accepting.|接受前我需要時間審閱提案。
`,
  culture: `
B|ที่นี่ต้องถอดรองเท้าไหม|thîi-nîi dtâwng thàwt rawng-tháo mǎi|Should I take off my shoes here?|這裡需要脫鞋嗎？
B|ขอถ่ายรูปได้ไหม|khǎw thàai-rûup dâi mǎi|May I take a photo?|可以拍照嗎？
B|วันนี้มีงานเทศกาลไหม|wan-níi mii ngaan thêet-sà-gaan mǎi|Is there a festival today?|今天有節慶活動嗎？
B|ฉันอยากเรียนรู้วัฒนธรรมไทย|chǎn yàak riian-rúu wát-thá-ná-tham thai|I'd like to learn about Thai culture.|我想了解泰國文化。
B|ฉันพูดภาษาไทยได้นิดหน่อย|chǎn phûut phaa-sǎa thai dâi nít nòi|I speak a little Thai.|我會說一點泰語。
B|ที่นี่มีข้อห้ามอะไรไหม|thîi-nîi mii khâw-hâam à-rai mǎi|Are there any rules here?|這裡有什麼禁忌嗎？
B|ฉันควรแต่งตัวยังไง|chǎn khuan dtàeng-dtua yang-ngai|How should I dress?|我該怎麼穿？
B|ขอบคุณที่สอนฉัน|khàwp-khun thîi sǎwn chǎn|Thank you for teaching me.|謝謝你教我。
I|เข้าวัดต้องแต่งกายสุภาพ|khâo wát dtâwng dtàeng-gaai sù-phâap|Visitors should dress respectfully when entering a temple.|進寺廟應穿著得體。
I|ฉันไม่แน่ใจว่าทำแบบนี้สุภาพไหม|chǎn mâi nâe-jai wâa tham bàep níi sù-phâap mǎi|I'm not sure whether this is polite.|我不確定這樣做是否禮貌。
I|ช่วยบอกธรรมเนียมที่ควรรู้หน่อย|chûai bàwk tham-niiam thîi khuan rúu nòi|Please tell me about customs I should know.|請告訴我該知道的習俗。
I|เทศกาลนี้มีความหมายอย่างไร|thêet-sà-gaan níi mii khwaam-mǎai yàang-rai|What does this festival mean?|這個節慶有什麼意義？
I|คนที่นี่นิยมทำอะไรกันในวันหยุด|khon thîi-nîi ní-yom tham à-rai gan nai wan-yùt|What do people here usually do on holidays?|這裡的人假日通常做什麼？
I|ฉันอยากลองอาหารพื้นเมือง|chǎn yàak lawng aa-hǎan phʉ́ʉn-mʉʉang|I'd like to try local food.|我想嚐嚐當地料理。
I|กรุณาบอกถ้าฉันทำอะไรไม่เหมาะสม|gà-rú-naa bàwk thâa chǎn tham à-rai mâi mǎw-sǒm|Please tell me if I do anything inappropriate.|如果我有不合宜的行為，請告訴我。
I|คำนี้ใช้กับผู้ใหญ่ได้ไหม|kham-níi chái gàp phûu-yài dâi mǎi|Can I use this word with older people?|這個詞可以對長輩用嗎？
I|เวลาทักทายควรไหว้ก่อนหรือเปล่า|wee-laa thák-thaai khuan wâi gàwn rʉ̌ʉ bplào|Should I wai first when greeting someone?|打招呼時我應該先合十禮嗎？
I|ฉันอยากเข้าใจความหมายของพิธีนี้|chǎn yàak khâo-jai khwaam-mǎai khǎwng phí-thii níi|I'd like to understand the meaning of this ceremony.|我想了解這個儀式的意義。
I|ฉันขอร่วมกิจกรรมนี้ได้ไหม|chǎn khǎw rûam gìt-jà-gam níi dâi mǎi|May I join this activity?|我可以參加這個活動嗎？
I|ถ่ายรูปในสถานที่นี้ได้หรือเปล่า|thàai-rûup nai sà-thǎan-thîi níi dâi rʉ̌ʉ bplào|Is photography allowed in this place?|這個地方可以拍照嗎？
I|ฉันอยากฟังเรื่องราวของชุมชนนี้|chǎn yàak fang rʉ̂eang-raao khǎwng chum-chon níi|I'd like to hear this community's story.|我想聽這個社區的故事。
I|มีคำเรียกที่สุภาพกว่านี้ไหม|mii kham-rîiak thîi sù-phâap gwàa níi mǎi|Is there a more polite term?|有更禮貌的稱呼嗎？
I|ฉันไม่คุ้นกับธรรมเนียมนี้|chǎn mâi khún gàp tham-niiam níi|I'm not familiar with this custom.|我不熟悉這個習俗。
I|ความหมายอาจต่างกันในแต่ละพื้นที่|khwaam-mǎai àat dtàang gan nai dtàe-lá phʉ́ʉn-thîi|The meaning may differ by region.|意思可能因地區而異。
U|ฉันอยากถามเรื่องนี้อย่างให้เกียรติ|chǎn yàak thǎam rʉ̂eang níi yàang hâi-gìiat|I'd like to ask about this respectfully.|我想以尊重的方式問這件事。
U|ธรรมเนียมนี้มีที่มาอย่างไร|tham-niiam níi mii thîi-maa yàang-rai|What is the origin of this custom?|這個習俗從何而來？
U|ฉันไม่อยากเหมารวมคนจากวัฒนธรรมเดียวกัน|chǎn mâi yàak mǎo-ruam khon jàak wát-thá-ná-tham diao gan|I don't want to stereotype people from the same culture.|我不想把同一文化的人一概而論。
U|การแสดงความเคารพอาจต่างกันตามบริบท|gaan sà-daeng khwaam-khao-róp àat dtàang gan dtaam baw-rí-bòt|Ways of showing respect may vary by context.|表達尊重的方式可能因情境而異。
U|ช่วยอธิบายความแตกต่างระหว่างภาษาพูดกับภาษาเขียน|chûai à-thí-baai khwaam-dtàang rá-wàang phaa-sǎa-phûut gàp phaa-sǎa-khǐian|Could you explain the difference between spoken and written language?|可以解釋口語與書面語的差別嗎？
U|คำนี้เหมาะกับสถานการณ์เป็นทางการไหม|kham-níi mǎw gàp sà-thǎa-ná-gaan bpen thaang-gaan mǎi|Is this word suitable in a formal setting?|這個詞適合正式場合嗎？
U|ฉันเข้าใจว่าคนแต่ละรุ่นอาจมองต่างกัน|chǎn khâo-jai wâa khon dtàe-lá rûn àat mawng dtàang gan|I understand that generations may see things differently.|我理解不同世代可能有不同看法。
U|ฉันอยากเรียนรู้โดยไม่ตัดสินจากประสบการณ์ของตัวเอง|chǎn yàak riian-rúu dooi mâi dtàt-sǐn jàak bprà-sòp-gaan khǎwng dtua-eeng|I want to learn without judging from my own experience.|我想學習，而不是用自己的經驗判斷。
U|ประเพณีบางอย่างเปลี่ยนไปตามยุคสมัย|bprà-phee-nii baang yàang bplìian pai dtaam yúk-sà-mǎi|Some traditions change over time.|有些傳統會隨時代改變。
U|คนในพื้นที่อาจมีมุมมองต่อเรื่องนี้ต่างกัน|khon nai phʉ́ʉn-thîi àat mii mum-mawng dtàw rʉ̂eang níi dtàang gan|Local people may have different views on this.|當地人對這件事也可能有不同看法。
U|ฉันขออนุญาตก่อนบันทึกเสียงบทสนทนา|chǎn khǎw à-nú-yâat gàwn ban-thʉ́k sǐiang bòt-sǒn-thá-naa|May I have permission before recording our conversation?|錄音前我想先徵求同意。
U|ความแตกต่างทางภาษาไม่ได้หมายถึงความผิดพลาด|khwaam-dtàang thaang phaa-sǎa mâi dâi mǎai thʉ̌ng khwaam-phìt-phlâat|Language differences don't necessarily mean someone is wrong.|語言差異不一定代表有人說錯。
U|ฉันพยายามเลือกคำที่เหมาะกับผู้ฟัง|chǎn pha-yaa-yaam lʉ̂eak kham thîi mǎw gàp phûu-fang|I try to choose words that suit the listener.|我努力選擇適合聽眾的詞。
U|หากฉันเข้าใจวัฒนธรรมนี้ผิด ช่วยอธิบายให้ฟัง|hàak chǎn khâo-jai wát-thá-ná-tham níi phìt chûai à-thí-baai hâi fang|Please explain if I've misunderstood this culture.|如果我誤解這個文化，請向我解釋。
U|ฉันสนใจว่าประเพณีนี้มีบทบาทในชีวิตประจำวันอย่างไร|chǎn sǒn-jai wâa bprà-phee-nii níi mii bòt-bàat nai chii-wít bprà-jam-wan yàang-rai|I'm interested in how this tradition figures in daily life.|我想了解這項傳統如何融入日常生活。
U|การแลกเปลี่ยนความคิดเห็นช่วยให้เราเข้าใจกันมากขึ้น|gaan lâek-bplìian khwaam-khít-hěn chûai hâi rao khâo-jai gan mâak khʉ̂n|Exchanging views helps us understand each other better.|交流意見有助於彼此理解。
`,
  technology: `
B|โทรศัพท์ฉันแบตหมด|thoo-rá-sàp chǎn bàet mòt|My phone battery is dead.|我的手機沒電了。
B|มีไวไฟไหม|mii wai-fai mǎi|Is there Wi-Fi?|有 Wi-Fi 嗎？
B|รหัสไวไฟคืออะไร|rá-hàt wai-fai khʉʉ à-rai|What's the Wi-Fi password?|Wi-Fi 密碼是什麼？
B|ส่งรูปให้ฉันหน่อย|sòng rûup hâi chǎn nòi|Please send me the photo.|請把照片傳給我。
B|โทรหาฉันได้ไหม|thoo hǎa chǎn dâi mǎi|Could you call me?|可以打電話給我嗎？
B|ฉันไม่ได้ยินเสียงคุณ|chǎn mâi dâi-yin sǐiang khun|I can't hear you.|我聽不到你的聲音。
B|อินเทอร์เน็ตช้ามาก|in-thoe-nèt cháa mâak|The internet is very slow.|網路很慢。
B|ฉันลืมรหัสผ่าน|chǎn lʉʉm rá-hàt-phàan|I forgot my password.|我忘記密碼了。
I|ช่วยส่งลิงก์ให้ทางข้อความ|chûai sòng ling hâi thaang khâw-khwaam|Please send the link by message.|請用訊息傳連結給我。
I|ฉันเปิดไฟล์นี้ไม่ได้|chǎn bpòet fai níi mâi dâi|I can't open this file.|我打不開這個檔案。
I|ไฟล์ใหญ่เกินกว่าจะส่งทางอีเมล|fai yài goen gwàa jà sòng thaang ii-meew|The file is too large to email.|檔案太大，無法用電郵寄送。
I|ช่วยแชร์หน้าจอให้ดูหน่อย|chûai chae nâa-jàw hâi duu nòi|Could you share your screen?|可以分享螢幕給我看嗎？
I|ไมโครโฟนของคุณปิดอยู่|mai-khroo-foon khǎwng khun bpìt yùu|Your microphone is muted.|你的麥克風目前是關閉的。
I|ฉันหลุดจากการประชุมออนไลน์|chǎn lùt jàak gaan bprà-chum awn-lai|I got disconnected from the online meeting.|我從線上會議斷線了。
I|ช่วยลองรีสตาร์ตเครื่อง|chûai lawng rii-sà-dtàat khrʉ̂eang|Please try restarting the device.|請試著重新啟動裝置。
I|แอปนี้ต้องอัปเดตก่อนใช้งาน|àep níi dtâwng àp-dèet gàwn chái-ngaan|This app needs updating before use.|這個 App 使用前需要更新。
I|ฉันอยากเปลี่ยนการตั้งค่าภาษา|chǎn yàak bplìian gaan dtâng-khâa phaa-sǎa|I want to change the language setting.|我想更改語言設定。
I|กรุณาอย่าส่งข้อมูลส่วนตัวในแชต|gà-rú-naa yàa sòng khâw-muun sùan-dtua nai châet|Please don't send personal data in the chat.|請不要在聊天中傳個人資料。
I|ข้อความนี้อาจเป็นการหลอกลวง|khâw-khwaam níi àat bpen gaan làwk-luang|This message might be a scam.|這則訊息可能是詐騙。
I|ฉันต้องยืนยันตัวตนอีกครั้ง|chǎn dtâwng yʉʉn-yan dtua-dton ìik khráng|I need to verify my identity again.|我需要再次驗證身分。
I|ช่วยตรวจสอบว่าเว็บไซต์นี้ปลอดภัยไหม|chûai dtrùat-sàwp wâa wép-sai níi bplàwt-phai mǎi|Could you check whether this website is safe?|可以確認這個網站是否安全嗎？
I|รูปภาพนี้โหลดไม่ขึ้น|rûup-phâap níi lòot mâi khʉ̂n|This image won't load.|這張圖片載不出來。
I|ฉันต้องการสำรองข้อมูลก่อนเปลี่ยนเครื่อง|chǎn dtâwng-gaan sǎm-rawng khâw-muun gàwn bplìian khrʉ̂eang|I need to back up my data before changing phones.|換手機前我要備份資料。
I|ระบบแจ้งว่ารหัสผ่านไม่ถูกต้อง|rá-bòp jâeng wâa rá-hàt-phàan mâi thùuk-dtâwng|The system says the password is incorrect.|系統顯示密碼不正確。
U|ฉันไม่อยากให้แอปเข้าถึงตำแหน่งตลอดเวลา|chǎn mâi yàak hâi àep khâo-thʉ̌ng dtam-nàeng dtà-làwt wee-laa|I don't want the app to access my location all the time.|我不想讓 App 一直存取我的位置。
U|เราควรตรวจสอบแหล่งที่มาก่อนแชร์ข่าว|rao khuan dtrùat-sàwp làeng thîi-maa gàwn chae khàao|We should check the source before sharing news.|分享新聞前應該查證來源。
U|บัญชีของฉันอาจถูกเข้าถึงโดยไม่ได้รับอนุญาต|ban-chii khǎwng chǎn àat thùuk khâo-thʉ̌ng dooi mâi dâi ráp à-nú-yâat|My account may have been accessed without permission.|我的帳號可能遭到未授權存取。
U|ฉันอยากเปิดการยืนยันตัวตนสองขั้นตอน|chǎn yàak bpòet gaan yʉʉn-yan dtua-dton sǎawng khân-dtawn|I'd like to enable two-factor authentication.|我想啟用雙重驗證。
U|ข้อมูลที่ลบไปสามารถกู้คืนได้ไหม|khâw-muun thîi lóp pai sǎa-mâat gûu-khʉʉn dâi mǎi|Can deleted data be recovered?|刪掉的資料還能恢復嗎？
U|ช่วยอธิบายว่านโยบายความเป็นส่วนตัวเปลี่ยนอย่างไร|chûai à-thí-baai wâa ná-yoo-baai khwaam-bpen-sùan-dtua bplìian yàang-rai|Could you explain how the privacy policy changed?|可以說明隱私政策有何變更嗎？
U|แอปนี้เก็บข้อมูลของผู้ใช้ประเภทไหนบ้าง|àep níi gèp khâw-muun khǎwng phûu-chái bprà-phêet nǎi bâang|What kinds of user data does this app collect?|這個 App 收集哪些使用者資料？
U|ไฟล์แนบอาจมีข้อมูลที่ไม่ควรเผยแพร่|fai-nâep àat mii khâw-muun thîi mâi khuan phǒei-phráe|The attachment may contain information that shouldn't be shared.|附件可能包含不該公開的資訊。
U|ระบบควรแสดงข้อความผิดพลาดที่ชัดเจนกว่านี้|rá-bòp khuan sà-daeng khâw-khwaam phìt-phlâat thîi chát-jeen gwàa níi|The system should show a clearer error message.|系統應顯示更清楚的錯誤訊息。
U|ฉันไม่แน่ใจว่าข้อมูลถูกซิงค์ครบหรือยัง|chǎn mâi nâe-jai wâa khâw-muun thùuk sing khróp rʉ̌ʉ yang|I'm not sure whether all data has synced.|我不確定資料是否同步完整。
U|หากอินเทอร์เน็ตหลุด งานที่ทำจะถูกบันทึกไหม|hàak in-thoe-nèt lùt ngaan thîi tham jà thùuk ban-thʉ́k mǎi|If the internet disconnects, will my work be saved?|如果網路斷線，工作內容會儲存嗎？
U|ช่วยจำกัดสิทธิ์เข้าถึงเอกสารเฉพาะคนในทีม|chûai jam-gàt sìt khâo-thʉ̌ng èek-gà-sǎan chà-pháw khon nai thiim|Please limit document access to the team.|請把文件存取權限限制在團隊成員。
U|ฉันอยากดาวน์โหลดข้อมูลของตัวเองก่อนปิดบัญชี|chǎn yàak daao-lòot khâw-muun khǎwng dtua-eeng gàwn bpìt ban-chii|I'd like to download my data before closing the account.|關閉帳號前我想下載自己的資料。
U|ลิงก์นี้จะหมดอายุเมื่อไหร่|ling níi jà mòt-aa-yú mʉ̂ea-rài|When will this link expire?|這個連結何時失效？
U|เราควรใช้รหัสผ่านที่ไม่ซ้ำกับบริการอื่น|rao khuan chái rá-hàt-phàan thîi mâi sám gàp baw-rí-gaan ʉ̀ʉn|We should use a password we don't reuse elsewhere.|我們應該用不同於其他服務的密碼。
U|ฉันต้องการรายงานช่องโหว่ที่พบในระบบ|chǎn dtâwng-gaan raai-ngaan châwng-wòo thîi phóp nai rá-bòp|I'd like to report a vulnerability I found in the system.|我想通報在系統中發現的漏洞。
`,
  patterns: `
B|ฉันอยากให้คุณช่วยหน่อย|chǎn yàak hâi khun chûai nòi|I'd like you to help me.|我想請你幫個忙。
B|ฉันไม่อยากไปวันนี้|chǎn mâi yàak pai wan-níi|I don't want to go today.|我今天不想去。
B|ทำได้ไหม|tham dâi mǎi|Can it be done?|做得到嗎？
B|ทำไม่ได้|tham mâi dâi|It can't be done.|做不到。
B|ฉันเคยเห็นแล้ว|chǎn khoei hěn láew|I've seen it before.|我以前看過。
B|ฉันยังไม่เคยลอง|chǎn yang mâi khoei lawng|I've never tried it yet.|我還沒試過。
B|นี่เป็นของใคร|nîi bpen khǎwng khrai|Whose is this?|這是誰的？
B|อันไหนดีกว่า|an-nǎi dii gwàa|Which one is better?|哪一個比較好？
I|ฉันกำลังจะออกจากบ้าน|chǎn gam-lang jà àawk jàak bâan|I'm about to leave home.|我正要出門。
I|ฉันเพิ่งรู้เรื่องนี้|chǎn phêung rúu rʉ̂eang níi|I only just found out about this.|我剛剛才知道這件事。
I|ฉันยังทำไม่เสร็จ|chǎn yang tham mâi sèt|I haven't finished yet.|我還沒做完。
I|ฉันทำเสร็จแล้ว|chǎn tham sèt láew|I've finished it already.|我已經做完了。
I|ถ้ามีเวลา ฉันจะไปด้วย|thâa mii wee-laa chǎn jà pai dûai|If I have time, I'll come too.|如果有時間，我會一起去。
I|ถ้าเป็นฉัน ฉันจะรอก่อน|thâa bpen chǎn chǎn jà raw gàwn|If it were me, I'd wait first.|如果是我，我會先等。
I|คุณอยากไปหรืออยากอยู่บ้าน|khun yàak pai rʉ̌ʉ yàak yùu bâan|Do you want to go or stay home?|你想出門還是待在家？
I|ไม่ว่าจะไปไหนก็บอกฉันด้วย|mâi wâa jà pai nǎi gâw bàwk chǎn dûai|Wherever you go, let me know.|不管你去哪裡，都告訴我。
I|ฉันชอบอันนี้มากกว่าอันนั้น|chǎn châwp an-níi mâak gwàa an-nán|I like this one more than that one.|我比較喜歡這個，而不是那個。
I|ฉันทำเองได้ ไม่ต้องช่วย|chǎn tham eeng dâi mâi dtâwng chûai|I can do it myself; no need to help.|我可以自己做，不用幫忙。
I|ให้ฉันลองดูก่อน|hâi chǎn lawng duu gàwn|Let me try first.|讓我先試試。
I|ช่วยบอกหน่อยว่าต้องเริ่มตรงไหน|chûai bàwk nòi wâa dtâwng rôem dtrong nǎi|Please tell me where to start.|請告訴我該從哪裡開始。
I|ยิ่งฝึกมากก็ยิ่งคล่อง|yîng fʉ̀k mâak gâw yîng khlâwng|The more you practice, the more fluent you become.|練習越多就越流利。
I|ฉันคิดว่าเขาน่าจะมา|chǎn khít wâa khǎo nâa jà maa|I think he'll probably come.|我想他應該會來。
I|ฉันไม่รู้ว่าเขาจะมาหรือเปล่า|chǎn mâi rúu wâa khǎo jà maa rʉ̌ʉ bplào|I don't know whether he'll come.|我不知道他會不會來。
I|ฉันขอคิดดูก่อนแล้วค่อยตอบ|chǎn khǎw khít duu gàwn láew khâwi dtàwp|Let me think first and answer later.|讓我想一想再回答。
U|แม้จะยาก ฉันก็อยากลอง|máe jà yâak chǎn gâw yàak lawng|Even though it's difficult, I want to try.|即使很難，我也想試。
U|ถึงจะไม่มีเวลา ฉันก็จะพยายามช่วย|thʉ̌ng jà mâi mii wee-laa chǎn gâw jà pha-yaa-yaam chûai|Even if I'm short on time, I'll try to help.|即使時間不多，我還是會試著幫忙。
U|ทั้งที่รู้ว่าเสี่ยง เขาก็ยังทำ|tháng thîi rúu wâa sǐiang khǎo gâw yang tham|Although he knew it was risky, he still did it.|他明知有風險，還是做了。
U|ตราบใดที่ยังมีเวลา เรายังแก้ไขได้|dtraap-dai thîi yang mii wee-laa rao yang gâe-khǎi dâi|As long as there's time, we can still fix it.|只要還有時間，我們就能修改。
U|ฉันจะไปก็ต่อเมื่อทุกคนเห็นด้วย|chǎn jà pai gâw dtàw-mʉ̂ea thúk khon hěn-dûai|I'll go only if everyone agrees.|只有大家都同意，我才會去。
U|ไม่เพียงแต่เขามาสาย แต่ยังไม่แจ้งล่วงหน้า|mâi phiiang-dtàe khǎo maa sǎai dtàe yang mâi jâeng lûang-nâa|He was late and didn't even give notice.|他不僅遲到，還沒提前通知。
U|แทนที่จะรอ เราควรเริ่มก่อน|thaen thîi jà raw rao khuan rôem gàwn|Instead of waiting, we should start.|與其等，不如先開始。
U|นอกจากราคาแล้ว เราควรดูคุณภาพด้วย|nâwk-jàak raa-khaa láew rao khuan duu khun-ná-phâap dûai|Besides price, we should consider quality.|除了價格，我們也該看品質。
U|ในกรณีที่แผนเปลี่ยน กรุณาแจ้งทันที|nai gaw-rá-nii thîi phǎen bplìian gà-rú-naa jâeng than-thii|In case the plan changes, please let me know immediately.|如果計畫有變，請立刻通知。
U|สิ่งที่ฉันกังวลคือเวลาไม่พอ|sìng thîi chǎn gang-won khʉʉ wee-laa mâi phaw|What worries me is the lack of time.|我擔心的是時間不夠。
U|เหตุผลที่ฉันเลือกอันนี้คือใช้ง่ายกว่า|hèet-phǒn thîi chǎn lʉ̂eak an-níi khʉʉ chái ngâai gwàa|The reason I chose this is that it's easier to use.|我選這個的原因是它比較好用。
U|ฉันไม่แน่ใจว่าควรตอบอย่างไรดี|chǎn mâi nâe-jai wâa khuan dtàwp yàang-rai dii|I'm not sure how I should answer.|我不確定該怎麼回答。
U|หากเป็นไปได้ เราควรเตรียมแผนสำรอง|hàak bpen pai dâi rao khuan dtriiam phǎen sǎm-rawng|If possible, we should prepare a backup plan.|如果可以，我們應該準備備案。
U|เท่าที่ฉันทราบ ยังไม่มีการตัดสินใจ|thâo thîi chǎn sâap yang mâi mii gaan dtàt-sǐn-jai|As far as I know, no decision has been made.|據我所知，還沒有作出決定。
U|โดยทั่วไปวิธีนี้ใช้ได้ แต่มีข้อยกเว้น|dooi thûa-pai wí-thii níi chái dâi dtàe mii khâw-yók-wén|Generally this method works, but there are exceptions.|一般而言這方法可行，但有例外。
U|พูดอีกอย่างคือเราต้องเริ่มใหม่ทั้งหมด|phûut ìik yàang khʉʉ rao dtâwng rôem mài tháng-mòt|In other words, we have to start all over.|換句話說，我們得全部重來。
`,
  time: `
B|ตอนนี้กี่โมงแล้ว|dtawn-níi gìi moong láew|What time is it now?|現在幾點了？
B|วันนี้วันจันทร์|wan-níi wan-jan|Today is Monday.|今天是星期一。
B|พรุ่งนี้วันอังคาร|phrûng-níi wan-ang-khaan|Tomorrow is Tuesday.|明天是星期二。
B|ฉันมีเวลาสิบนาที|chǎn mii wee-laa sìp naa-thii|I have ten minutes.|我有十分鐘。
B|เจอกันตอนบ่ายสอง|joe gan dtawn bàai-sǎawng|See you at two in the afternoon.|下午兩點見。
B|ฉันจะมาช้าห้านาที|chǎn jà maa cháa hâa naa-thii|I'll be five minutes late.|我會晚五分鐘。
B|วันนี้วันที่เท่าไหร่|wan-níi wan-thîi thâo-rài|What's today's date?|今天幾號？
B|ฉันจะกลับมาอาทิตย์หน้า|chǎn jà glàp maa aa-thít nâa|I'll return next week.|我下星期會回來。
I|เรามีนัดกันวันศุกร์ตอนสิบโมง|rao mii nát gan wan-sùk dtawn sìp moong|We're meeting Friday at ten.|我們約星期五十點見。
I|งานนี้ต้องเสร็จก่อนสิ้นเดือน|ngaan níi dtâwng sèt gàwn sîn dʉʉan|This must be finished before month's end.|這件事得在月底前完成。
I|เรามีเวลาประมาณครึ่งชั่วโมง|rao mii wee-laa bprà-maan khrʉ̂ng chûa-moong|We have about half an hour.|我們大約有半小時。
I|นัดวันอาทิตย์สะดวกกว่าไหม|nát wan-aa-thít sà-dùak gwàa mǎi|Would Sunday work better for you?|約星期日會比較方便嗎？
I|ขอเลื่อนนัดไปอีกหนึ่งชั่วโมง|khǎw lʉ̂ean nát pai ìik nʉ̀ng chûa-moong|Could we move the appointment back one hour?|可以把約會延後一小時嗎？
I|ฉันว่างตั้งแต่บ่ายสามเป็นต้นไป|chǎn wâang dtâng-dtàe bàai-sǎam bpen-dtôn-pai|I'm free from 3 p.m. onward.|我下午三點以後有空。
I|คุณสะดวกช่วงเช้าหรือช่วงบ่าย|khun sà-dùak chûang-cháo rʉ̌ʉ chûang-bàai|Is morning or afternoon better for you?|你上午還是下午比較方便？
I|เราควรเผื่อเวลาเดินทางด้วย|rao khuan phʉ̀ʉa wee-laa doen-thaang dûai|We should allow time for travel too.|我們也該預留交通時間。
I|ร้านจะปิดในอีกยี่สิบนาที|ráan jà bpìt nai ìik yîi-sìp naa-thii|The shop closes in twenty minutes.|商店再過二十分鐘就關門。
I|ฉันมาถึงก่อนเวลานัด|chǎn maa thʉ̌ng gàwn wee-laa nát|I arrived before the appointment.|我比約定時間早到。
I|วันนี้ฉันติดธุระทั้งวัน|wan-níi chǎn dtìt thú-rá tháng wan|I'm busy all day today.|我今天整天都有事。
I|ช่วยยืนยันวันและเวลาอีกครั้ง|chûai yʉʉn-yan wan láe wee-laa ìik khráng|Please confirm the date and time again.|請再確認一次日期和時間。
I|กำหนดส่งคือวันพุธหน้า|gam-nòt sòng khʉʉ wan-phút nâa|The deadline is next Wednesday.|截止日期是下星期三。
I|เดือนหน้าฉันจะไปต่างจังหวัด|dʉʉan nâa chǎn jà pai dtàang-jang-wàt|I'm going out of town next month.|我下個月要去外地。
I|ฉันรอมาตั้งแต่แปดโมงเช้า|chǎn raw maa dtâng-dtàe bpàet moong cháo|I've been waiting since eight this morning.|我從早上八點就在等。
I|คุยกันหลังอาหารกลางวันได้ไหม|khui gan lǎng aa-hǎan glaang-wan dâi mǎi|Can we talk after lunch?|午餐後可以談嗎？
U|เราต้องจัดตารางให้ตรงกับเวลาของทุกคน|rao dtâwng jàt dtaa-raang hâi dtrong gàp wee-laa khǎwng thúk khon|We need a schedule that works for everyone.|我們得安排所有人都方便的時間。
U|หากกำหนดเวลาเปลี่ยน ฉันต้องปรับแผนอื่นตาม|hàak gam-nòt wee-laa bplìian chǎn dtâwng bpràp phǎen ʉ̀ʉn dtaam|If the schedule changes, I'll have to adjust my other plans.|如果時間改變，我也得調整其他安排。
U|ฉันอยากทราบว่าต้องแจ้งยกเลิกล่วงหน้ากี่วัน|chǎn yàak sâap wâa dtâwng jâeng yók-lôek lûang-nâa gìi wan|How many days' notice is needed to cancel?|我想知道取消要提前幾天通知。
U|ช่วงเวลานี้ตรงกับวันหยุดราชการหรือเปล่า|chûang wee-laa níi dtrong gàp wan-yùt râat-chá-gaan rʉ̌ʉ bplào|Does this period overlap with a public holiday?|這段時間碰上國定假日嗎？
U|เราควรกำหนดเวลาสำรองไว้เผื่อมีเหตุฉุกเฉิน|rao khuan gam-nòt wee-laa sǎm-rawng wái phʉ̀ʉa mii hèet chùk-chǒen|We should set a backup time in case of an emergency.|我們應該預留備用時間，以防突發狀況。
U|งานนี้ใช้เวลานานกว่าที่ประเมินไว้|ngaan níi chái wee-laa naan gwàa thîi bprà-moen wái|This task is taking longer than estimated.|這項工作比預估花更多時間。
U|ฉันจะส่งความคืบหน้าให้ทุกสิ้นสัปดาห์|chǎn jà sòng khwaam-khʉ̂ʉp-nâa hâi thúk sîn-sàp-daa|I'll send a progress update at the end of each week.|我每週末會寄進度更新。
U|ถ้าไม่มีการตอบกลับภายในสามวัน ฉันจะติดตามอีกครั้ง|thâa mâi mii gaan dtàwp-glàp phaai-nai sǎam wan chǎn jà dtìt-dtaam ìik khráng|If there's no reply within three days, I'll follow up.|如果三天內沒回覆，我會再追蹤。
U|เราเริ่มช้ากว่ากำหนด แต่ยังทันเส้นตาย|rao rôem cháa gwàa gam-nòt dtàe yang than sên-dtaai|We started late but can still meet the deadline.|我們開始得晚，但仍趕得上截止日。
U|ฉันอยากแบ่งงานออกเป็นช่วงสั้น ๆ|chǎn yàak bàeng ngaan àawk bpen chûang sân sân|I'd like to break the work into shorter stages.|我想把工作分成較短的階段。
U|เวลาในประเทศไทยเร็วกว่าที่บ้านฉันกี่ชั่วโมง|wee-laa nai bprà-thêet thai reo gwàa thîi bâan chǎn gìi chûa-moong|How many hours ahead is Thailand from my home?|泰國時間比我家鄉快幾小時？
U|ช่วยระบุเขตเวลาด้วยเพื่อไม่ให้เข้าใจผิด|chûai rá-bù khèet wee-laa dûai phʉ̂ea mâi hâi khâo-jai phìt|Please specify the time zone to avoid confusion.|請標明時區，避免誤會。
U|ฉันคาดว่าจะมาถึงก่อนเวลาประมาณสิบห้านาที|chǎn khâat wâa jà maa thʉ̌ng gàwn wee-laa bprà-maan sìp-hâa naa-thii|I expect to arrive about fifteen minutes early.|我預計會提前約十五分鐘到。
U|เนื่องจากวันหยุด กำหนดส่งอาจเลื่อนไปวันทำการถัดไป|nʉ̂eang-jàak wan-yùt gam-nòt sòng àat lʉ̂ean pai wan tham-gaan thàt-pai|Because of the holiday, the deadline may shift to the next business day.|因為假日，期限可能延到下一個工作日。
U|เราอาจต้องปรับลำดับงานหากมีเรื่องเร่งด่วนเข้ามา|rao àat dtâwng bpràp lam-dàp ngaan hàak mii rʉ̂eang rêng-dùan khâo maa|We may need to reprioritize if something urgent comes up.|如果有急事進來，我們可能得調整工作順序。
U|ฉันอยากกำหนดวันที่จะทบทวนผลอีกครั้ง|chǎn yàak gam-nòt wan thîi jà thóp-thuan phǒn ìik khráng|I'd like to set a date to review the results again.|我想訂一個再次檢討結果的日期。
`,
  education: `
B|ฉันเรียนภาษาไทยอยู่|chǎn riian phaa-sǎa thai yùu|I'm studying Thai.|我正在學泰語。
B|คำนี้อ่านว่าอะไร|kham-níi àan wâa à-rai|How do you read this word?|這個詞怎麼念？
B|คำนี้เขียนยังไง|kham-níi khǐian yang-ngai|How do you write this word?|這個詞怎麼寫？
B|ฉันไม่เข้าใจคำถาม|chǎn mâi khâo-jai kham-thǎam|I don't understand the question.|我不懂這個問題。
B|ขอถามครูหน่อย|khǎw thǎam khruu nòi|May I ask the teacher?|我可以問老師嗎？
B|ฉันต้องทำการบ้าน|chǎn dtâwng tham gaan-bâan|I have to do homework.|我得寫作業。
B|วันนี้มีสอบไหม|wan-níi mii sàwp mǎi|Is there a test today?|今天有考試嗎？
B|ฉันอยากฝึกพูด|chǎn yàak fʉ̀k phûut|I want to practice speaking.|我想練習口說。
I|ฉันยังจำคำศัพท์นี้ไม่ได้|chǎn yang jam kham-sàp níi mâi dâi|I still can't remember this word.|我還記不住這個單字。
I|ช่วยอธิบายไวยากรณ์ประโยคนี้|chûai à-thí-baai wai-yaa-gawn bprà-yòok níi|Please explain this sentence's grammar.|請解釋這個句子的文法。
I|สองคำนี้ใช้ต่างกันอย่างไร|sǎawng kham níi chái dtàang gan yàang-rai|How are these two words used differently?|這兩個詞用法有何不同？
I|ฉันอยากได้ตัวอย่างในชีวิตประจำวัน|chǎn yàak dâi dtua-yàang nai chii-wít bprà-jam-wan|I'd like an everyday example.|我想要一個日常生活的例子。
I|ประโยคนี้ฟังดูเป็นธรรมชาติไหม|bprà-yòok níi fang duu bpen tham-má-châat mǎi|Does this sentence sound natural?|這句話聽起來自然嗎？
I|ช่วยตรวจการออกเสียงของฉัน|chûai dtrùat gaan àawk-sǐiang khǎwng chǎn|Please check my pronunciation.|請幫我檢查發音。
I|ฉันแยกเสียงสูงกับเสียงต่ำไม่ค่อยออก|chǎn yâek sǐiang sǔung gàp sǐiang dtàm mâi khâwi àawk|I have trouble distinguishing high and low tones.|我不太能分辨高低聲調。
I|ช่วยพูดประโยคนี้ให้ฟังอีกครั้ง|chûai phûut bprà-yòok níi hâi fang ìik khráng|Please say this sentence again for me.|請再念一次這個句子。
I|ฉันต้องทบทวนบทเรียนก่อนสอบ|chǎn dtâwng thóp-thuan bòt-riian gàwn sàwp|I need to review the lessons before the exam.|考試前我要複習課程。
I|เรียนกลุ่มเล็กช่วยให้ฉันกล้าพูด|riian glùm lék chûai hâi chǎn glâa phûut|Small classes help me feel brave enough to speak.|小班上課讓我比較敢說話。
I|ฉันอยากฝึกฟังบทสนทนาจริง|chǎn yàak fʉ̀k fang bòt-sǒn-thá-naa jing|I want to practice listening to real conversations.|我想練習聽真實對話。
I|คำนี้ใช้ในภาษาพูดบ่อยไหม|kham-níi chái nai phaa-sǎa-phûut bɔ̀i mǎi|Is this word common in spoken language?|這個詞在口語中常用嗎？
I|ฉันอ่านออกแต่ยังพูดไม่คล่อง|chǎn àan àawk dtàe yang phûut mâi khlâwng|I can read it, but I don't speak fluently yet.|我看得懂，但還說得不流利。
I|ช่วยแก้ประโยคนี้ให้ถูกต้อง|chûai gâe bprà-yòok níi hâi thùuk-dtâwng|Please correct this sentence.|請幫我改正這個句子。
I|ฉันอยากตั้งเป้าหมายการเรียนใหม่|chǎn yàak dtâng bpâo-mǎai gaan-riian mài|I want to set a new learning goal.|我想設定新的學習目標。
I|ฉันฝึกพูดกับเพื่อนทุกสัปดาห์|chǎn fʉ̀k phûut gàp phʉ̂ean thúk sàp-daa|I practice speaking with friends every week.|我每週和朋友練習說話。
U|ฉันเข้าใจความหมาย แต่ยังใช้คำนี้ไม่ถูกบริบท|chǎn khâo-jai khwaam-mǎai dtàe yang chái kham níi mâi thùuk baw-rí-bòt|I know the meaning but still use this word in the wrong context.|我懂意思，但還不會在正確情境用這個詞。
U|ช่วยอธิบายความแตกต่างของระดับภาษา|chûai à-thí-baai khwaam-dtàang khǎwng rá-dàp phaa-sǎa|Could you explain the differences in formality?|可以解釋語體正式程度的差別嗎？
U|ฉันอยากฝึกสรุปข่าวเป็นภาษาไทย|chǎn yàak fʉ̀k sà-rùp khàao bpen phaa-sǎa thai|I'd like to practice summarizing news in Thai.|我想練習用泰語摘要新聞。
U|การฟังสำเนียงต่างกันช่วยให้เข้าใจคนมากขึ้น|gaan fang sǎm-niiang dtàang gan chûai hâi khâo-jai khon mâak khʉ̂n|Listening to different accents helps me understand more speakers.|聽不同口音有助於理解更多人的話。
U|ฉันอยากฝึกอธิบายความคิดโดยไม่แปลในใจ|chǎn yàak fʉ̀k à-thí-baai khwaam-khít dooi mâi bplae nai jai|I want to express ideas without translating in my head.|我想練習不用在心裡翻譯就表達想法。
U|ช่วยบอกว่าประโยคนี้ฟังห้วนไปไหม|chûai bàwk wâa bprà-yòok níi fang hûan pai mǎi|Could you tell me if this sentence sounds too blunt?|可以告訴我這句話是否太直接嗎？
U|ฉันอยากเรียนรู้คำเชื่อมเพื่อพูดให้ลื่นไหล|chǎn yàak riian-rúu kham-chʉ̂eam phʉ̂ea phûut hâi lʉ̂ʉn-lǎi|I want to learn connectors to speak more smoothly.|我想學連接詞，讓表達更流暢。
U|ถ้าพูดผิด ขอให้ช่วยแก้เฉพาะจุดสำคัญ|thâa phûut phìt khǎw hâi chûai gâe chà-pháw jùt sǎm-khan|If I make mistakes, please correct the important ones.|如果我說錯，請先糾正重要的地方。
U|ฉันอยากอภิปรายประเด็นที่มีหลายมุมมอง|chǎn yàak à-phí-bpraai bprà-den thîi mii lǎai mum-mawng|I'd like to discuss issues with several perspectives.|我想討論有多種觀點的議題。
U|การจำคำศัพท์อย่างเดียวไม่พอ ต้องฝึกใช้จริง|gaan jam kham-sàp yàang diao mâi phaw dtâwng fʉ̀k chái jing|Memorizing vocabulary alone isn't enough; I need real practice.|只背單字不夠，還需要實際練習。
U|ฉันอยากได้รับคำแนะนำที่เจาะจงกว่านี้|chǎn yàak dâi ráp kham-náe-nam thîi jàw-jong gwàa níi|I'd like more specific feedback.|我想得到更具體的建議。
U|ข้อผิดพลาดแบบไหนที่ฉันทำซ้ำบ่อยที่สุด|khâw-phìt-phlâat bàep nǎi thîi chǎn tham sám bɔ̀i thîi-sùt|Which mistakes do I repeat most often?|我最常重複犯哪種錯？
U|ฉันอยากฝึกเล่าเรื่องให้มีลำดับชัดเจน|chǎn yàak fʉ̀k lâo rʉ̂eang hâi mii lam-dàp chát-jeen|I'd like to practice telling a story in a clear sequence.|我想練習有條理地敘事。
U|ฉันเข้าใจบทสนทนาช้า ๆ แต่ยังตามคนพูดเร็วไม่ทัน|chǎn khâo-jai bòt-sǒn-thá-naa cháa cháa dtàe yang dtaam khon phûut reo mâi than|I understand slow conversation but still can't follow fast speakers.|慢速對話我聽得懂，但還跟不上說話快的人。
U|ฉันจะฝึกใช้คำใหม่ในบทสนทนาจริงทุกวัน|chǎn jà fʉ̀k chái kham mài nai bòt-sǒn-thá-naa jing thúk wan|I'll practice using new words in real conversations daily.|我每天會在真實對話中使用新詞。
U|เป้าหมายของฉันคืออธิบายเรื่องซับซ้อนได้ชัดเจน|bpâo-mǎai khǎwng chǎn khʉʉ à-thí-baai rʉ̂eang sáp-sáwn dâi chát-jeen|My goal is to explain complex topics clearly.|我的目標是能清楚說明複雜議題。
`,
  money: `
B|ฉันมีเงินสดไม่พอ|chǎn mii ngoen-sòt mâi phaw|I don't have enough cash.|我現金不夠。
B|รับบัตรเครดิตไหม|ráp bàt khree-dìt mǎi|Do you accept credit cards?|收信用卡嗎？
B|ฉันจะโอนเงินให้|chǎn jà oon ngoen hâi|I'll transfer the money to you.|我會轉帳給你。
B|ราคาแพงเกินไป|raa-khaa phaeng goen pai|It's too expensive.|價格太貴了。
B|ฉันอยากประหยัดเงิน|chǎn yàak bprà-yàt ngoen|I want to save money.|我想省錢。
B|ใบเสร็จอยู่ไหน|bai-sèt yùu nǎi|Where is the receipt?|收據在哪裡？
B|ฉันจ่ายไปแล้ว|chǎn jàai pai láew|I've already paid.|我已經付錢了。
B|ต้องจ่ายเท่าไหร่|dtâwng jàai thâo-rài|How much do I need to pay?|我要付多少？
I|ฉันอยากตรวจสอบยอดเงินในบัญชี|chǎn yàak dtrùat-sàwp yâwt ngoen nai ban-chii|I'd like to check my account balance.|我想查帳戶餘額。
I|ฉันโอนเงินผิดบัญชี|chǎn oon ngoen phìt ban-chii|I transferred money to the wrong account.|我轉錯帳戶了。
I|รายการนี้ถูกหักเงินสองครั้ง|raai-gaan níi thùuk hàk ngoen sǎawng khráng|I was charged twice for this transaction.|這筆交易被扣款兩次。
I|มีค่าธรรมเนียมในการโอนไหม|mii khâa-tham-niiam nai gaan oon mǎi|Is there a transfer fee?|轉帳要收手續費嗎？
I|ฉันอยากแบ่งจ่ายเป็นสองงวด|chǎn yàak bàeng jàai bpen sǎawng ngûat|I'd like to pay in two installments.|我想分兩期付款。
I|เราควรตกลงงบประมาณก่อน|rao khuan dtòk-long ngóp-bprà-maan gàwn|We should agree on a budget first.|我們應該先談好預算。
I|ค่าใช้จ่ายเดือนนี้สูงกว่าปกติ|khâa-chái-jàai dʉʉan níi sǔung gwàa bpòk-gà-dtì|My expenses are higher than usual this month.|我這個月花費比平常高。
I|ฉันอยากเก็บเงินไว้ใช้ยามฉุกเฉิน|chǎn yàak gèp ngoen wái chái yaam chùk-chǒen|I want to save money for emergencies.|我想存一筆緊急預備金。
I|ราคานี้รวมภาษีและค่าบริการไหม|raa-khaa níi ruam phaa-sǐi láe khâa-baw-rí-gaan mǎi|Does this price include tax and service fees?|這個價格包含稅和服務費嗎？
I|ช่วยส่งใบแจ้งหนี้ให้ฉัน|chûai sòng bai-jâeng-nîi hâi chǎn|Please send me the invoice.|請寄發票給我。
I|ฉันต้องการหลักฐานการโอนเงิน|chǎn dtâwng-gaan làk-thǎan gaan oon ngoen|I need proof of the transfer.|我需要轉帳證明。
I|เงินคืนจะเข้าบัญชีเมื่อไหร่|ngoen-khʉʉn jà khâo ban-chii mʉ̂ea-rài|When will the refund reach my account?|退款何時會入帳？
I|เรามาแบ่งค่าใช้จ่ายกันอย่างยุติธรรม|rao maa bàeng khâa-chái-jàai gan yàang yút-dtì-tham|Let's split the expenses fairly.|我們公平分攤費用吧。
I|ฉันกำลังวางแผนค่าใช้จ่ายเดือนหน้า|chǎn gam-lang waang-phǎen khâa-chái-jàai dʉʉan nâa|I'm planning next month's expenses.|我正在規劃下個月的支出。
I|อัตราแลกเปลี่ยนวันนี้เท่าไหร่|àt-dtraa lâek-bplìian wan-níi thâo-rài|What's today's exchange rate?|今天匯率是多少？
I|ฉันอยากจำกัดค่าใช้จ่ายที่ไม่จำเป็น|chǎn yàak jam-gàt khâa-chái-jàai thîi mâi jam-bpen|I want to limit unnecessary spending.|我想限制不必要的開支。
U|ฉันอยากเปรียบเทียบต้นทุนระยะยาวก่อนตัดสินใจ|chǎn yàak bprìiap-thîiap dtôn-thun rá-yá-yaao gàwn dtàt-sǐn-jai|I'd like to compare long-term costs before deciding.|決定前我想比較長期成本。
U|ค่าธรรมเนียมแฝงอาจทำให้ราคาจริงสูงขึ้น|khâa-tham-niiam fǎeng àat tham hâi raa-khaa jing sǔung khʉ̂n|Hidden fees may raise the actual price.|隱藏費用可能使實際價格提高。
U|ฉันต้องตรวจสอบว่ารายการนี้ได้รับอนุมัติหรือไม่|chǎn dtâwng dtrùat-sàwp wâa raai-gaan níi dâi ráp à-nú-mát rʉ̌ʉ mâi|I need to check whether this transaction was authorized.|我需要確認這筆交易是否經過授權。
U|หากชำระเงินล่าช้า จะมีค่าปรับเท่าไหร่|hàak cham-rá ngoen lâa-cháa jà mii khâa-bpràp thâo-rài|What is the late payment penalty?|如果晚付款，罰款多少？
U|ฉันขอรายละเอียดการคำนวณยอดชำระ|chǎn khǎw raai-lá-ìiat gaan kham-nuan yâwt cham-rá|I'd like a breakdown of the amount due.|請給我應付金額的計算明細。
U|เราควรเผื่องบสำหรับค่าใช้จ่ายที่คาดไม่ถึง|rao khuan phʉ̀ʉa ngóp sǎm-ràp khâa-chái-jàai thîi khâat mâi thʉ̌ng|We should set aside money for unexpected costs.|我們應該預留預算應付意外支出。
U|ข้อเสนอนี้คุ้มค่าหรือไม่ขึ้นอยู่กับเงื่อนไข|khâw-sà-nǒe níi khúm-khâa rʉ̌ʉ mâi khʉ̂n yùu gàp ngʉ̂ean-khǎi|Whether this offer is worthwhile depends on the terms.|這項優惠划不划算取決於條件。
U|ฉันอยากทราบสิทธิ์ในการยกเลิกโดยไม่เสียค่าปรับ|chǎn yàak sâap sìt nai gaan yók-lôek dooi mâi sǐia khâa-bpràp|I'd like to know when I can cancel without a penalty.|我想知道何時可以無罰款取消。
U|ยอดที่แสดงในใบแจ้งหนี้ไม่ตรงกับข้อตกลง|yâwt thîi sà-daeng nai bai-jâeng-nîi mâi dtrong gàp khâw-dtòk-long|The invoice amount doesn't match our agreement.|發票上的金額與協議不符。
U|ช่วยอธิบายรายการหักเงินที่ฉันไม่รู้จัก|chûai à-thí-baai raai-gaan hàk ngoen thîi chǎn mâi rúu-jàk|Please explain this charge I don't recognize.|請解釋這筆我不認識的扣款。
U|ฉันต้องการระงับบัตรชั่วคราวเพราะทำหาย|chǎn dtâwng-gaan rá-ngáp bàt chûa-khraao phró tham hǎai|I need to freeze my card temporarily because I lost it.|我的卡遺失了，需要暫時停卡。
U|หากอัตราดอกเบี้ยเปลี่ยน ยอดผ่อนจะเปลี่ยนไหม|hàak àt-dtraa dàwk-bîia bplìian yâwt phàwn jà bplìian mǎi|If the interest rate changes, will my payment change?|如果利率改變，每期付款會變嗎？
U|ฉันอยากเข้าใจความเสี่ยงก่อนลงทุน|chǎn yàak khâo-jai khwaam-sǐiang gàwn long-thun|I'd like to understand the risks before investing.|投資前我想了解風險。
U|เราควรบันทึกค่าใช้จ่ายเพื่อดูแนวโน้ม|rao khuan ban-thʉ́k khâa-chái-jàai phʉ̂ea duu naew-nóom|We should track expenses to see the trend.|我們應該記錄開支來觀察趨勢。
U|ถ้าจ่ายเต็มจำนวนวันนี้ จะมีส่วนลดเพิ่มไหม|thâa jàai dtem jam-nuan wan-níi jà mii sùan-lót phôem mǎi|Is there a further discount if I pay in full today?|如果今天全額付款，會有額外折扣嗎？
U|ฉันขอเวลาอ่านสัญญาทางการเงินให้ละเอียด|chǎn khǎw wee-laa àan sǎn-yaa thaang gaan-ngoen hâi lá-ìiat|I need time to read the financial agreement carefully.|我需要時間仔細閱讀財務合約。
`,
  safety: `
B|ช่วยด้วย ฉันหลงทาง|chûai dûai chǎn lǒng-thaang|Help, I'm lost.|救命，我迷路了。
B|โทรหาตำรวจให้หน่อย|thoo hǎa dtam-rùat hâi nòi|Please call the police.|請幫我報警。
B|มีใครบาดเจ็บไหม|mii khrai bàat-jèp mǎi|Is anyone injured?|有人受傷嗎？
B|ฉันต้องการรถพยาบาล|chǎn dtâwng-gaan rót-phá-yaa-baan|I need an ambulance.|我需要救護車。
B|ทางออกฉุกเฉินอยู่ไหน|thaang-àawk chùk-chǒen yùu nǎi|Where is the emergency exit?|緊急出口在哪裡？
B|มีไฟไหม้|mii fai-mâi|There's a fire.|失火了。
B|อย่าเข้าไปข้างใน|yàa khâo pai khâang-nai|Don't go inside.|不要進去。
B|ฉันปลอดภัยแล้ว|chǎn bplàwt-phai láew|I'm safe now.|我現在安全了。
I|ช่วยบอกตำแหน่งของเราให้เจ้าหน้าที่|chûai bàwk dtam-nàeng khǎwng rao hâi jâo-nâa-thîi|Please tell the authorities our location.|請把我們的位置告訴救援人員。
I|มีคนล้มและหมดสติ|mii khon lóm láe mòt-sà-dtì|Someone has fallen and is unconscious.|有人跌倒而且失去意識。
I|ฉันทำหนังสือเดินทางหาย|chǎn tham nǎng-sʉ̌ʉ-doen-thaang hǎai|I've lost my passport.|我的護照遺失了。
I|ฉันต้องแจ้งความที่ไหน|chǎn dtâwng jâeng-khwaam thîi nǎi|Where should I file a police report?|我要去哪裡報案？
I|ช่วยพาฉันไปที่ที่ปลอดภัย|chûai phaa chǎn pai thîi thîi bplàwt-phai|Please take me somewhere safe.|請帶我去安全的地方。
I|ถนนเส้นนี้น้ำท่วมแล้ว|thà-nǒn sên-níi náam-thûam láew|This road is flooded.|這條路已經淹水了。
I|อย่าแตะสายไฟที่ตกลงมา|yàa dtàe sǎai-fai thîi dtòk long maa|Don't touch the fallen power line.|不要碰掉落的電線。
I|ช่วยแจ้งให้คนในอาคารออกมา|chûai jâeng hâi khon nai aa-khaan àawk maa|Please tell people in the building to evacuate.|請通知大樓裡的人撤離。
I|ฉันต้องติดต่อสถานทูต|chǎn dtâwng dtìt-dtàw sà-thǎan-thûut|I need to contact the embassy.|我需要聯絡大使館。
I|มีคนตามฉันมา ฉันรู้สึกไม่ปลอดภัย|mii khon dtaam chǎn maa chǎn rúu-sʉ̀k mâi bplàwt-phai|Someone is following me; I don't feel safe.|有人跟著我，我覺得不安全。
I|โทรศัพท์ของฉันไม่มีสัญญาณ|thoo-rá-sàp khǎwng chǎn mâi mii sǎn-yaan|My phone has no signal.|我的手機沒有訊號。
I|เราควรออกจากพื้นที่นี้ทันที|rao khuan àawk jàak phʉ́ʉn-thîi níi than-thii|We should leave this area immediately.|我們應該立刻離開這一帶。
I|ฉันต้องการล่ามเพื่อคุยกับตำรวจ|chǎn dtâwng-gaan lâam phʉ̂ea khui gàp dtam-rùat|I need an interpreter to speak with the police.|我需要口譯協助和警察溝通。
I|ช่วยบอกว่าเกิดอะไรขึ้น|chûai bàwk wâa gòet à-rai khʉ̂n|Please tell me what happened.|請告訴我發生了什麼事。
I|คุณเห็นเหตุการณ์ไหม|khun hěn hèet-gaan mǎi|Did you witness the incident?|你有目擊事發經過嗎？
I|ฉันต้องการติดต่อครอบครัว|chǎn dtâwng-gaan dtìt-dtàw khrâwp-khrua|I need to contact my family.|我需要聯絡家人。
U|กรุณาแจ้งหน่วยกู้ภัยว่ามีคนติดอยู่ข้างใน|gà-rú-naa jâeng nùai-gûu-phai wâa mii khon dtìt yùu khâang-nai|Please tell rescuers that someone is trapped inside.|請告訴救援人員有人受困在裡面。
U|ฉันไม่สามารถออกจากอาคารทางประตูหลักได้|chǎn mâi sǎa-mâat àawk jàak aa-khaan thaang bprà-dtuu làk dâi|I can't leave the building through the main door.|我無法從正門離開大樓。
U|ช่วยอธิบายเส้นทางอพยพที่ปลอดภัยที่สุด|chûai à-thí-baai sên-thaang òp-phá-yóp thîi bplàwt-phai thîi-sùt|Please explain the safest evacuation route.|請說明最安全的疏散路線。
U|ฉันมีอาการแพ้รุนแรงและหายใจลำบาก|chǎn mii aa-gaan pháe run-raeng láe hǎai-jai lam-bàak|I'm having a severe allergic reaction and trouble breathing.|我有嚴重過敏反應，呼吸困難。
U|กรุณาส่งรถพยาบาลมาที่ตำแหน่งนี้โดยด่วน|gà-rú-naa sòng rót-phá-yaa-baan maa thîi dtam-nàeng níi dooi dùan|Please send an ambulance to this location urgently.|請緊急派救護車到這個位置。
U|ฉันต้องการสำเนาบันทึกประจำวันเพื่อใช้กับประกัน|chǎn dtâwng-gaan sǎm-nao ban-thʉ́k bprà-jam-wan phʉ̂ea chái gàp bprà-gan|I need a copy of the police report for insurance.|我需要報案紀錄副本供保險使用。
U|หากมีการแจ้งเตือนเพิ่มเติม ช่วยติดต่อฉันทันที|hàak mii gaan jâeng-dtʉʉan phôem-dtoem chûai dtìt-dtàw chǎn than-thii|Please contact me immediately if there are further alerts.|如果有進一步警報，請立即聯絡我。
U|ฉันอยากทราบว่าพื้นที่นี้ปลอดภัยที่จะกลับเข้าไปหรือยัง|chǎn yàak sâap wâa phʉ́ʉn-thîi níi bplàwt-phai thîi jà glàp khâo pai rʉ̌ʉ yang|Is it safe to re-enter this area yet?|我想知道現在是否能安全返回這一帶。
U|ช่วยบอกเจ้าหน้าที่ว่ามีผู้สูงอายุที่ต้องการความช่วยเหลือ|chûai bàwk jâo-nâa-thîi wâa mii phûu-sǔung-aa-yú thîi dtâwng-gaan khwaam-chûai-lʉ̌ea|Please tell the authorities that an older person needs help.|請告訴救援人員有長者需要協助。
U|ฉันไม่อยากให้ข้อมูลส่วนตัวกับคนที่ไม่ใช่เจ้าหน้าที่|chǎn mâi yàak hâi khâw-muun sùan-dtua gàp khon thîi mâi châi jâo-nâa-thîi|I don't want to give personal data to someone who isn't an official.|我不想向非官方人員提供個人資料。
U|เราควรรอคำแนะนำจากหน่วยงานที่รับผิดชอบ|rao khuan raw kham-náe-nam jàak nùai-ngaan thîi ráp-phìt-châwp|We should wait for guidance from the responsible agency.|我們應該等主管單位的指示。
U|ฉันต้องการยืนยันว่าทุกคนออกจากอาคารแล้ว|chǎn dtâwng-gaan yʉʉn-yan wâa thúk khon àawk jàak aa-khaan láew|I need to confirm everyone has left the building.|我需要確認所有人都已離開大樓。
U|หากสถานการณ์เปลี่ยน เราจะไปรวมตัวกันที่ไหน|hàak sà-thǎa-ná-gaan bplìian rao jà pai ruam-dtua gan thîi nǎi|Where will we meet if the situation changes?|如果情況有變，我們要在哪裡集合？
U|ฉันอยากให้บันทึกรายละเอียดเหตุการณ์ตามที่เกิดขึ้นจริง|chǎn yàak hâi ban-thʉ́k raai-lá-ìiat hèet-gaan dtaam thîi gòet khʉ̂n jing|I'd like the incident details recorded accurately.|我希望事發經過如實記錄。
U|กรุณาแจ้งขั้นตอนที่ฉันต้องทำหลังจากรายงานเหตุ|gà-rú-naa jâeng khân-dtawn thîi chǎn dtâwng tham lǎng-jàak raai-ngaan hèet|Please explain what I need to do after reporting the incident.|請說明通報事件後我需要做的事。
U|ฉันจะอยู่ในที่ปลอดภัยและรอเจ้าหน้าที่มาถึง|chǎn jà yùu nai thîi bplàwt-phai láe raw jâo-nâa-thîi maa thʉ̌ng|I'll stay somewhere safe and wait for the authorities.|我會待在安全的地方等待救援人員。
`,
  community: `
B|สวนสาธารณะอยู่ไหน|sǔan-sǎa-thaa-rá-ná yùu nǎi|Where is the public park?|公園在哪裡？
B|มีห้องสมุดใกล้ ๆ ไหม|mii hâwng-sà-mùt glâi glâi mǎi|Is there a library nearby?|附近有圖書館嗎？
B|แถวนี้มีตลาดไหม|thǎew-níi mii dtà-làat mǎi|Is there a market around here?|這附近有市場嗎？
B|ฉันเพิ่งย้ายมา|chǎn phêung yáai maa|I just moved here.|我剛搬來。
B|ฉันอยากรู้จักเพื่อนบ้าน|chǎn yàak rúu-jàk phʉ̂ean-bâan|I'd like to meet my neighbors.|我想認識鄰居。
B|ที่นี่ปลอดภัยไหม|thîi-nîi bplàwt-phai mǎi|Is it safe here?|這裡安全嗎？
B|มีงานอะไรวันนี้|mii ngaan à-rai wan-níi|What events are happening today?|今天有什麼活動？
B|ฉันอยากช่วยงาน|chǎn yàak chûai ngaan|I'd like to help out.|我想幫忙。
I|ชุมชนนี้จัดกิจกรรมบ่อยไหม|chum-chon níi jàt gìt-jà-gam bɔ̀i mǎi|Does this community hold events often?|這個社區常辦活動嗎？
I|ฉันอยากสมัครเป็นอาสาสมัคร|chǎn yàak sà-màk bpen aa-sǎa-sà-màk|I'd like to volunteer.|我想當志工。
I|ต้องแยกขยะอย่างไรที่นี่|dtâwng yâek khà-yà yàang-rai thîi-nîi|How should waste be sorted here?|這裡垃圾要怎麼分類？
I|วันเก็บขยะคือวันไหน|wan gèp khà-yà khʉʉ wan nǎi|Which day is trash collected?|哪天收垃圾？
I|มีศูนย์บริการชุมชนใกล้บ้านไหม|mii sǔun baw-rí-gaan chum-chon glâi bâan mǎi|Is there a community service center nearby?|家附近有社區服務中心嗎？
I|ฉันอยากทราบกฎของอาคารนี้|chǎn yàak sâap gòt khǎwng aa-khaan níi|I'd like to know this building's rules.|我想了解這棟大樓的規定。
I|ใครเป็นผู้ดูแลพื้นที่ส่วนกลาง|khrai bpen phûu-duu-lae phʉ́ʉn-thîi sùan-glaang|Who manages the common areas?|公共空間由誰管理？
I|มีทางเดินที่เข้าถึงได้สำหรับทุกคนไหม|mii thaang-doen thîi khâo-thʉ̌ng dâi sǎm-ràp thúk khon mǎi|Are there walkways accessible to everyone?|有人人都能通行的步道嗎？
I|ฉันอยากแจ้งไฟถนนที่เสีย|chǎn yàak jâeng fai-thà-nǒn thîi sǐia|I'd like to report a broken streetlight.|我想通報損壞的路燈。
I|สวนนี้เปิดถึงกี่โมง|sǔan-níi bpòet thʉ̌ng gìi moong|How late is this park open?|這座公園開到幾點？
I|มีกลุ่มคนเรียนภาษาไทยด้วยกันไหม|mii glùm khon riian phaa-sǎa thai dûai gan mǎi|Is there a group for learning Thai together?|有一起學泰語的團體嗎？
I|ฉันอยากเข้าร่วมประชุมชุมชน|chǎn yàak khâo-rûam bprà-chum chum-chon|I'd like to attend the community meeting.|我想參加社區會議。
I|ช่วยบอกวิธีติดต่อสำนักงานเขต|chûai bàwk wí-thii dtìt-dtàw sǎm-nák-ngaan khèet|Please tell me how to contact the district office.|請告訴我如何聯絡區公所。
I|แถวนี้มีปัญหาเสียงดังตอนกลางคืนไหม|thǎew-níi mii bpan-hǎa sǐiang dang dtawn glaang-khʉʉn mǎi|Is nighttime noise a problem around here?|這附近晚上會很吵嗎？
I|ฉันอยากสนับสนุนร้านค้าท้องถิ่น|chǎn yàak sà-nàp-sà-nǔn ráan-kháa tháwng-thìn|I'd like to support local shops.|我想支持在地商家。
I|มีพื้นที่ให้เด็กเล่นอย่างปลอดภัยไหม|mii phʉ́ʉn-thîi hâi dèk lên yàang bplàwt-phai mǎi|Is there a safe place for children to play?|有讓小孩安全玩耍的地方嗎？
U|ฉันอยากทราบว่าโครงการนี้กระทบชุมชนอย่างไร|chǎn yàak sâap wâa khroong-gaan níi grà-thóp chum-chon yàang-rai|I'd like to know how this project affects the community.|我想知道這項計畫如何影響社區。
U|ก่อนเปลี่ยนกฎ ควรรับฟังความคิดเห็นของผู้อยู่อาศัย|gàwn bplìian gòt khuan ráp-fang khwaam-khít-hěn khǎwng phûu-yùu-aa-sǎi|Residents' views should be heard before changing the rules.|更改規定前應該聽取住戶意見。
U|พื้นที่สาธารณะควรใช้งานได้สะดวกสำหรับคนทุกวัย|phʉ́ʉn-thîi sǎa-thaa-rá-ná khuan chái-ngaan dâi sà-dùak sǎm-ràp khon thúk wai|Public spaces should be accessible to all ages.|公共空間應讓各年齡層方便使用。
U|ฉันอยากเสนอให้เพิ่มทางข้ามที่ปลอดภัย|chǎn yàak sà-nǒe hâi phôem thaang-khâam thîi bplàwt-phai|I'd like to propose a safer crossing.|我想提議增加安全的行人穿越道。
U|ชุมชนควรมีช่องทางแจ้งปัญหาที่ชัดเจน|chum-chon khuan mii châwng-thaang jâeng bpan-hǎa thîi chát-jeen|The community should have a clear way to report problems.|社區應該有清楚的問題通報管道。
U|หากมีการก่อสร้าง ควรแจ้งผู้อยู่อาศัยล่วงหน้า|hàak mii gaan gàw-sâang khuan jâeng phûu-yùu-aa-sǎi lûang-nâa|Residents should be notified ahead of construction.|如有施工，應提前通知住戶。
U|ฉันอยากเข้าใจว่าค่าใช้จ่ายส่วนกลางนำไปใช้อะไร|chǎn yàak khâo-jai wâa khâa-chái-jàai sùan-glaang nam pai chái à-rai|I'd like to know how the shared fees are spent.|我想知道公共費用用在哪裡。
U|เราควรหาวิธีลดขยะโดยไม่เพิ่มภาระให้คนในพื้นที่|rao khuan hǎa wí-thii lót khà-yà dooi mâi phôem phaa-rá hâi khon nai phʉ́ʉn-thîi|We should reduce waste without burdening local people.|我們應該減少垃圾，同時不增加居民負擔。
U|กิจกรรมนี้ช่วยให้คนต่างวัยรู้จักกันมากขึ้น|gìt-jà-gam níi chûai hâi khon dtàang wai rúu-jàk gan mâak khʉ̂n|This event helps different generations get to know each other.|這個活動有助於不同年齡的人互相認識。
U|ฉันอยากให้ข้อมูลโครงการเผยแพร่ในภาษาที่เข้าใจง่าย|chǎn yàak hâi khâw-muun khroong-gaan phǒei-phráe nai phaa-sǎa thîi khâo-jai ngâai|I'd like project information shared in plain language.|我希望專案資訊以易懂的語言公開。
U|หากคนเดินทางด้วยรถเข็น พื้นที่นี้มีอุปสรรคอะไรบ้าง|hàak khon doen-thaang dûai rót-khěn phʉ́ʉn-thîi níi mii ùp-bpà-sàk à-rai bâang|What barriers does this area pose to wheelchair users?|對輪椅使用者來說，這個區域有哪些障礙？
U|ฉันอยากรู้ว่าชุมชนมีแผนรับมือฝนตกหนักไหม|chǎn yàak rúu wâa chum-chon mii phǎen ráp-mʉʉ fǒn dtòk nàk mǎi|Does the community have a plan for heavy rain?|我想知道社區是否有應對豪雨的計畫。
U|ความเห็นที่ต่างกันควรนำมาคุยอย่างเคารพกัน|khwaam-hěn thîi dtàang gan khuan nam maa khui yàang khao-róp gan|Different views should be discussed respectfully.|不同意見應該相互尊重地討論。
U|ฉันอยากให้ทุกฝ่ายเข้าถึงข้อมูลก่อนลงคะแนน|chǎn yàak hâi thúk fàai khâo-thʉ̌ng khâw-muun gàwn long-khá-naen|I want everyone to have the information before voting.|我希望各方在表決前都能取得資訊。
U|เราอาจต้องทดลองวิธีนี้ก่อนใช้กับทั้งชุมชน|rao àat dtâwng thót-lawng wí-thii níi gàwn chái gàp tháng chum-chon|We may need to test this approach before using it across the community.|我們可能需要先試行，再推廣到整個社區。
U|ฉันยินดีช่วยประสานงานกับกลุ่มเพื่อนบ้าน|chǎn yin-dii chûai bprà-sǎan-ngaan gàp glùm phʉ̂ean-bâan|I'm happy to coordinate with the neighbors.|我樂意幫忙和鄰居團體協調。
`,
};

Object.entries(THAI_FLUENCY).forEach(([topic, text]) => {
  text
    .trim()
    .split('\n')
    .forEach((line, index) => {
      const fields = line.trim().split('|');
      if (![5, 6].includes(fields.length) || fields.slice(0, 5).some((field) => !field.trim())) {
        throw new Error(`Invalid Thai fluency card: ${topic} #${index + 1}`);
      }
      const [code, term, reading, en, zh, breakdown = ''] = fields;
      const level = { B: 'beginner', I: 'intermediate', U: 'upper' }[code];
      if (!level) throw new Error(`Invalid Thai fluency level: ${topic} #${index + 1}`);
      window.SEED_CARDS.push({
        id: `th-fluency-${topic}-${index + 1}`,
        lang: 'th',
        topic,
        level,
        kind: 'sentence',
        term,
        reading,
        breakdown,
        translations: { en, zh },
        exampleTarget: '',
        exampleReading: '',
        exampleTranslations: { en: '', zh: '' },
      });
    });
});

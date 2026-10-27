// Authoring input for catalog generation; not loaded by the website.
// Additional Thai vocabulary and reusable conversation chunks.
// B = beginner, I = intermediate, U = upper intermediate.
// Each card is Thai | approximate reading | English | Traditional Chinese.
// Readings are aids; the Thai audio is the pronunciation reference.
const THAI_MORE = {
  greetings: `
B|ยินดีมาก|yin-dii mâak|My pleasure.|很榮幸。
B|เชิญเลย|choen loei|Please go ahead.|請先請。
B|ตามสบาย|dtaam sà-baai|Make yourself comfortable.|請隨意。
B|เจอกันวันหลัง|joe gan wan-lǎng|See you another day.|改天見。
I|ช่วงนี้เป็นอย่างไรบ้าง|chûang-níi bpen yàang-rai bâang|How have things been lately?|最近過得如何？
I|เดินทางมาเหนื่อยไหม|doen-thaang maa nʉ̀eai mǎi|Was your journey tiring?|路上累嗎？
I|ฝากทักทายครอบครัวด้วย|fàak thák-thaai khrâwp-khrua dûai|Please say hello to your family for me.|請代我向家人問好。
I|ไว้คุยกันต่อคราวหน้า|wái khui gan dtàw khraao-nâa|Let's continue this conversation next time.|下次再接著聊。
I|ขอโทษที่ติดต่อช้า|khǎw-thôot thîi dtìt-dtàw cháa|Sorry for getting in touch so late.|抱歉這麼晚才聯絡。
I|ขอบคุณที่สละเวลามา|khàwp-khun thîi sà-là wee-laa maa|Thank you for taking the time to come.|謝謝你撥空前來。
I|ขอให้เดินทางปลอดภัย|khǎw hâi doen-thaang bplàwt-phai|Have a safe trip.|祝一路平安。
I|ถ้ามีโอกาสคงได้เจอกันอีก|thâa mii oo-gàat khong dâi joe gan ìik|I hope we meet again sometime.|希望有機會再見。
I|พรุ่งนี้สะดวกคุยไหม|phrûng-níi sà-dùak khui mǎi|Would tomorrow be a good time to talk?|明天方便說話嗎？
I|ขอแนะนำตัวก่อนนะ|khǎw náe-nam dtua gàwn ná|Let me introduce myself first.|讓我先自我介紹。
U|ยินดีที่ได้แลกเปลี่ยนความคิดเห็น|yin-dii thîi dâi lâek-bplìian khwaam-khít-hěn|I'm glad we could exchange ideas.|很高興能交流看法。
U|ขอบคุณที่ให้โอกาสได้พูดคุย|khàwp-khun thîi hâi oo-gàat dâi phûut-khui|Thank you for the chance to talk.|謝謝你給我交流的機會。
U|หากไม่สะดวกตอบตอนนี้ ไว้คุยกันทีหลังก็ได้|hàak mâi sà-dùak dtàwp dtawn-níi wái khui gan thii-lǎng gɔ̂ɔ dâi|If now is inconvenient, we can talk later.|如果現在不方便回答，之後再談也可以。
U|ขออภัยที่ติดต่อมาโดยไม่ได้นัดล่วงหน้า|khǎw à-phai thîi dtìt-dtàw maa dooi mâi dâi nát lûang-nâa|Sorry for contacting you without arranging it first.|抱歉沒有事先約好就聯絡你。
U|ฉันหวังว่าเราจะมีโอกาสร่วมงานกัน|chǎn wǎng wâa rao jà mii oo-gàat rûam-ngaan gan|I hope we have a chance to work together.|希望我們有機會合作。
U|ก่อนเริ่ม ขอถามว่าทุกคนรู้จักกันแล้วหรือยัง|gàwn rôem khǎw thǎam wâa thúk-khon rúu-jàk gan láew rʉ̌ʉ yang|Before we begin, may I ask if everyone has met?|開始前，我想確認大家是否都認識了。
U|ขอบคุณที่ช่วยทำให้ฉันรู้สึกเป็นกันเอง|khàwp-khun thîi chûai tham hâi chǎn rúu-sʉ̀k bpen gan-eeng|Thank you for making me feel welcome.|謝謝你讓我覺得自在。
U|หากมีอะไรที่ฉันช่วยได้ โปรดบอกได้เลย|hàak mii à-rai thîi chǎn chûai dâi bpròot bàwk dâi loei|Please let me know if there's anything I can help with.|如果有我能幫忙的事，請儘管說。
U|ฉันขอตัวก่อน แล้วเราค่อยนัดคุยกันใหม่|chǎn khǎw dtua gàwn láew rao khâwi nát khui gan mài|I need to go; let's arrange another time to talk.|我先告辭，我們再約時間聊。
U|ดีใจที่ได้รู้จักมุมมองของคุณมากขึ้น|dii-jai thîi dâi rúu-jàk mum-mawng khǎwng khun mâak khʉ̂n|I'm glad to understand your perspective better.|很高興能更了解你的觀點。
`,
  food: `
B|ขอช้อนอีกคัน|khǎw cháwn ìik khan|Another spoon, please.|請再給我一支湯匙。
B|ใส่กล่องกลับบ้าน|sài glàwng glàp bâan|Pack it to take home.|裝盒外帶。
B|กินที่ร้าน|gin thîi ráan|To eat here.|內用。
B|อิ่มแล้ว|ìm láew|I'm full.|我吃飽了。
I|ขอแยกซอสไว้ต่างหาก|khǎw yâek sáwt wái dtàang-hàak|Please put the sauce on the side.|請把醬汁另外放。
I|รสชาติออกเปรี้ยวหรือหวาน|rót-châat àwk bprîao rʉ̌ʉ wǎan|Does it taste sour or sweet?|味道偏酸還是偏甜？
I|จานนี้ทำจากอะไรบ้าง|jaan-níi tham jàak à-rai bâang|What ingredients are in this dish?|這道菜有哪些食材？
I|ขอเปลี่ยนเป็นข้าวกล้องได้ไหม|khǎw bplìian bpen khâao-glâwng dâi mǎi|Could I have brown rice instead?|可以換成糙米嗎？
I|ช่วยแบ่งอาหารใส่จานสองใบได้ไหม|chûai bàeng aa-hǎan sài jaan sǎawng bai dâi mǎi|Could you split the food onto two plates?|可以幫我把食物分成兩盤嗎？
I|น้ำแข็งแยกต่างหาก|náam-khǎeng yâek dtàang-hàak|Ice on the side, please.|冰塊請另外放。
I|ขอแบบไม่ใส่ผักชี|khǎw bàep mâi sài phàk-chii|Please leave out the cilantro.|請不要加香菜。
I|ของหวานมีอะไรแนะนำบ้าง|khǎwng-wǎan mii à-rai náe-nam bâang|What dessert would you recommend?|有什麼甜點推薦？
I|ช่วยเติมน้ำให้หน่อย|chûai dterm náam hâi nòi|Could you refill my water?|可以幫我添水嗎？
I|อาหารยังไม่ครบตามที่สั่ง|aa-hǎan yang mâi khróp dtaam thîi sàng|Some items from our order are missing.|我們點的餐還沒上齊。
U|ฉันแพ้อาหารทะเลอย่างรุนแรง|chǎn pháe aa-hǎan thá-lee yàang run-raeng|I have a severe seafood allergy.|我對海鮮嚴重過敏。
U|ช่วยใช้อุปกรณ์ที่ไม่ได้สัมผัสถั่วได้ไหม|chûai chái ùp-bpà-gawn thîi mâi dâi sǎm-phàt thùa dâi mǎi|Could you use utensils that haven't touched nuts?|可以使用沒有接觸過堅果的器具嗎？
U|เมนูนี้ปรับให้เหมาะกับคนกินมังสวิรัติได้ไหม|mee-nuu níi bpràp hâi mɔ̌ɔ gàp khon gin mang-sà-wí-rát dâi mǎi|Can this dish be made vegetarian?|這道菜可以改成素食嗎？
U|ขอทราบว่าคิดค่าบริการเพิ่มหรือเปล่า|khǎw sâap wâa khít khâa-baw-rí-gaan phôem rʉ̌ʉ bplào|Is there an additional service charge?|請問會另外收服務費嗎？
U|อาหารจานนี้มีส่วนผสมที่ทำจากนมหรือไม่|aa-hǎan jaan-níi mii sùan-phà-sǒm thîi tham jàak nom rʉ̌ʉ mâi|Does this dish contain any dairy ingredients?|這道菜有乳製品成分嗎？
U|ถ้าไม่ใส่พริกเลย ยังทำเมนูนี้ได้ไหม|thâa mâi sài phrík loei yang tham mee-nuu níi dâi mǎi|Can you still make this dish with no chili at all?|完全不放辣椒也能做這道菜嗎？
U|รบกวนตรวจสอบรายการในใบเสร็จอีกครั้ง|róp-guan dtrùat-sàwp raai-gaan nai bai-sèt ìik khráng|Could you check the items on the receipt again?|麻煩再核對一次收據明細。
U|ฉันอยากลองอาหารท้องถิ่นที่ไม่เผ็ดมาก|chǎn yàak lawng aa-hǎan tháwng-thìn thîi mâi phèt mâak|I'd like to try a local dish that isn't too spicy.|我想試試不太辣的在地料理。
U|ขอแยกอาหารที่มีสารก่อภูมิแพ้จากจานอื่น|khǎw yâek aa-hǎan thîi mii sǎan gàw phuum-pháe jàak jaan ʉ̀ʉn|Please keep food with allergens separate from the other dishes.|請把含過敏原的食物和其他餐點分開。
U|หากทำไม่ได้ ฉันขอเลือกเมนูอื่นแทน|hàak tham mâi dâi chǎn khǎw lʉ̂eak mee-nuu ʉ̀ʉn thaen|If that's not possible, I'll choose another dish.|如果無法做到，我會改點別的。
`,
  travel: `
B|ทางออกอยู่ไหน|thaang-àwk yùu nǎi|Where is the exit?|出口在哪裡？
B|ไปทางซ้าย|pai thaang sáai|Go left.|往左走。
B|ไปทางขวา|pai thaang khwǎa|Go right.|往右走。
B|เดินตรงไปอีกหน่อย|doen dtrong pai ìik nòi|Walk straight a little farther.|再往前直走一點。
I|ฉันควรขึ้นรถสายไหนเพื่อไปสถานี|chǎn khuan khʉ̂n rót sǎai nǎi phʉ̂ea pai sà-thǎa-nii|Which bus should I take to the station?|去車站我該搭哪一路公車？
I|รถคันนี้ไปโรงพยาบาลไหม|rót khan-níi pai roong-phá-yaa-baan mǎi|Does this vehicle go to the hospital?|這班車會去醫院嗎？
I|ลงป้ายถัดไปได้ไหม|long bpâai thàt-pai dâi mǎi|Can I get off at the next stop?|可以在下一站下車嗎？
I|ช่วยบอกเมื่อถึงสถานีได้ไหม|chûai bàwk mʉ̂ea thʉ̌ng sà-thǎa-nii dâi mǎi|Could you tell me when we reach the station?|到站時可以提醒我嗎？
I|ใช้เวลาเดินอีกประมาณเท่าไร|chái wee-laa doen ìik bprà-maan thâo-rai|About how much longer is the walk?|還要走大約多久？
I|มีทางที่ไม่ต้องขึ้นบันไดไหม|mii thaang thîi mâi dtâwng khʉ̂n ban-dai mǎi|Is there a route without stairs?|有不用走樓梯的路嗎？
I|ตรงนี้เรียกรถได้ไหม|dtrong-níi rîiak rót dâi mǎi|Can I hail a taxi here?|這裡可以攔車嗎？
I|ค่าโดยสารคิดตามมิเตอร์ไหม|khâa-dooi-sǎan khít dtaam mí-dtəə mǎi|Is the fare calculated by the meter?|車資按錶計算嗎？
I|ช่วยจอดตรงหน้าร้านสะดวกซื้อ|chûai jàwt dtrong nâa ráan sà-dùak-sʉ́ʉ|Please stop in front of the convenience store.|請停在便利商店前面。
I|ฉันหลงทาง ขอถามทางหน่อย|chǎn lǒng-thaang khǎw thǎam thaang nòi|I'm lost; may I ask for directions?|我迷路了，可以問路嗎？
U|ถ้ารถติด มีเส้นทางอื่นที่เร็วกว่านี้ไหม|thâa rót dtìt mii sên-thaang ʉ̀ʉn thîi reo gwàa níi mǎi|If there's traffic, is another route faster?|如果塞車，有其他更快的路線嗎？
U|เที่ยวสุดท้ายออกจากสถานีกี่โมง|thîao sùt-tháai àwk jàak sà-thǎa-nii gìi moong|What time does the last service leave the station?|末班車幾點從車站出發？
U|ตั๋วใบนี้ใช้เดินทางต่อได้หรือเปล่า|dtǔa bai-níi chái doen-thaang dtàw dâi rʉ̌ʉ bplào|Can I use this ticket for the connecting journey?|這張票可以用於轉乘嗎？
U|สถานีนี้มีลิฟต์สำหรับผู้ใช้รถเข็นไหม|sà-thǎa-nii níi mii líf sǎm-ràp phûu-chái rót-khěn mǎi|Does this station have an elevator for wheelchair users?|這站有輪椅使用者可用的電梯嗎？
U|ขอทราบจุดรับผู้โดยสารที่แน่นอน|khǎw sâap jùt ráp phûu-dooi-sǎan thîi nâe-nawn|Could you tell me the exact pickup point?|請問確切的上車地點在哪裡？
U|ถ้าพลาดขบวนนี้ ต้องรออีกนานเท่าไร|thâa phlâat khà-buan níi dtâwng raw ìik naan thâo-rai|If I miss this train, how long is the next wait?|錯過這班車還要等多久？
U|ช่วยยืนยันว่าค่าโดยสารรวมค่าทางด่วนแล้ว|chûai yʉʉn-yan wâa khâa-dooi-sǎan ruam khâa-thaang-dùan láew|Please confirm whether the fare includes the toll.|請確認車資是否包含過路費。
U|กระเป๋าเดินทางของฉันหายระหว่างการเดินทาง|grà-bpǎo doen-thaang khǎwng chǎn hǎai rá-wàang gaan-doen-thaang|My luggage went missing during the journey.|我的行李在旅途中遺失了。
U|เส้นทางนี้มีการเปลี่ยนแปลงชั่วคราวหรือไม่|sên-thaang níi mii gaan bplìian-bplaeng chûa-khraao rʉ̌ʉ mâi|Has this route been changed temporarily?|這條路線有暫時改道嗎？
U|ฉันต้องเผื่อเวลาเดินทางช่วงชั่วโมงเร่งด่วน|chǎn dtâwng phʉ̀ea wee-laa doen-thaang chûang chûa-moong rêng-dùan|I need extra travel time during rush hour.|尖峰時段我得預留更多交通時間。
`,
  daily: `
B|เปิดไฟ|bpòet fai|Turn on the light.|開燈。
B|ปิดประตู|bpìt bprà-dtuu|Close the door.|關門。
B|อีกแป๊บเดียว|ìik bpáep diao|Just another moment.|再等一下下。
B|ไปก่อนนะ|pai gàwn ná|I'll be going now.|我先走囉。
I|วันนี้ต้องซักผ้า|wan-níi dtâwng sák phâa|I need to do laundry today.|今天得洗衣服。
I|ของชิ้นนี้เก็บไว้ที่ไหน|khǎwng chín-níi gèp wái thîi nǎi|Where should I put this item?|這個東西要收在哪裡？
I|น้ำประปาไหลเบามาก|náam-bprà-bpaa lǎi bao mâak|The tap water pressure is very low.|自來水水壓很低。
I|ขอใช้ห้องน้ำหน่อยได้ไหม|khǎw chái hâwng-náam nòi dâi mǎi|May I use the bathroom?|可以借用洗手間嗎？
I|ฉันลืมกุญแจไว้ในห้อง|chǎn lʉʉm gun-jae wái nai hâwng|I left my keys in the room.|我把鑰匙忘在房間裡。
I|ช่วยเปิดหน้าต่างให้อากาศถ่ายเท|chûai bpòet nâa-dtàang hâi aa-gàat thàai-thee|Please open the window for ventilation.|請打開窗戶通風。
I|ฉันต้องออกไปซื้อของใช้|chǎn dtâwng àwk pai sʉ́ʉ khǎwng-chái|I need to go buy household supplies.|我得出去買日用品。
I|พรุ่งนี้ช่วยเตือนฉันด้วย|phrûng-níi chûai dtʉan chǎn dûai|Please remind me tomorrow.|明天請提醒我。
I|เครื่องซักผ้าใช้อย่างไร|khrʉ̂eang-sák-phâa chái yàang-rai|How do I use the washing machine?|洗衣機怎麼用？
I|ขอพักสักสิบนาที|khǎw phák sàk sìp naa-thii|Let me rest for ten minutes.|讓我休息十分鐘。
U|ช่วยแบ่งงานบ้านกันให้ชัดเจนได้ไหม|chûai bàeng ngaan-bâan gan hâi chát-jeen dâi mǎi|Can we divide the chores clearly?|我們能明確分配家事嗎？
U|ฉันอยากจัดตารางประจำวันให้ยืดหยุ่นขึ้น|chǎn yàak jàt dtaa-raang bprà-jam-wan hâi yʉ̂ʉt-yùn khʉ̂n|I'd like a more flexible daily schedule.|我想把日常作息安排得更有彈性。
U|ถ้าใช้เสร็จแล้ว ช่วยเก็บกลับที่เดิม|thâa chái sèt láew chûai gèp glàp thîi doem|Please put it back when you're finished.|用完後請放回原位。
U|ช่วงนี้ฉันพยายามลดเวลาที่ใช้หน้าจอ|chûang-níi chǎn phá-yaa-yaam lót wee-laa thîi chái nâa-jaw|I'm trying to reduce my screen time lately.|最近我試著減少看螢幕的時間。
U|ถ้าอะไรเสีย ช่วยบอกก่อนจะซ่อมเอง|thâa à-rai sǐia chûai bàwk gàwn jà sâwm eeng|If something breaks, please tell me before fixing it yourself.|東西壞了請先告訴我，再自行修理。
U|ฉันอยากหาวิธีประหยัดพลังงานในบ้าน|chǎn yàak hǎa wí-thii bprà-yàt phlang-ngaan nai bâan|I'd like to save energy at home.|我想找方法節省家中能源。
U|เราอาจต้องเปลี่ยนกิจวัตรให้เหมาะกับเวลาทำงาน|rao àat dtâwng bplìian gìt-jà-wát hâi mɔ̌ɔ gàp wee-laa tham-ngaan|We may need to adapt our routine to work hours.|我們可能得調整作息配合工作時間。
U|หากต้องออกจากบ้านเช้า ฉันจะเตรียมของไว้คืนนี้|hàak dtâwng àwk jàak bâan cháo chǎn jà dtriiam khǎwng wái khʉʉn-níi|If I leave early, I'll prepare everything tonight.|如果得一早出門，我今晚會先準備好。
U|เราแบ่งค่าใช้จ่ายของใช้ส่วนกลางกันอย่างไร|rao bàeng khâa-chái-jàai khǎwng-chái sùan-glaang gan yàang-rai|How do we split the cost of shared supplies?|共用用品的費用怎麼分攤？
U|ฉันอยากจัดบ้านให้หยิบของได้สะดวกกว่าเดิม|chǎn yàak jàt bâan hâi yìp khǎwng dâi sà-dùak gwàa doem|I'd like to organize the home so things are easier to reach.|我想整理家裡，讓拿東西更方便。
`,
  social: `
B|เจอกันที่นั่นไหม|joe gan thîi-nân mǎi|Shall we meet there?|要在那裡碰面嗎？
B|ขอช่องทางติดต่อได้ไหม|khǎw châwng-thaang dtìt-dtàw dâi mǎi|May I have a way to contact you?|可以給我聯絡方式嗎？
B|สนุกมาก|sà-nùk mâak|That was really fun.|真好玩。
B|ยินดีด้วย|yin-dii dûai|Congratulations.|恭喜。
I|สุดสัปดาห์นี้คุณว่างไหม|sùt-sàp-daa níi khun wâang mǎi|Are you free this weekend?|這週末有空嗎？
I|เรานัดเจอกันครึ่งทางได้ไหม|rao nát joe gan khrʉ̂ng-thaang dâi mǎi|Can we meet halfway?|我們可以約在中間地點見嗎？
I|ขอเปลี่ยนเวลานัดเป็นบ่ายสอง|khǎw bplìian wee-laa nát bpen bàai-sǎawng|Could we move our meeting to two p.m.?|可以改約下午兩點嗎？
I|ฉันจะชวนเพื่อนมาอีกคน|chǎn jà chuan phʉ̂ean maa ìik khon|I'll invite one more friend.|我會再找一位朋友來。
I|วันนี้ฉันอาจกลับก่อน|wan-níi chǎn àat glàp gàwn|I may leave early today.|今天我可能會先走。
I|ฉันไม่อยากรบกวนเวลาของคุณ|chǎn mâi yàak róp-guan wee-laa khǎwng khun|I don't want to take up your time.|我不想耽誤你的時間。
I|ขอบคุณที่ชวน แต่วันนี้ไม่สะดวก|khàwp-khun thîi chuan dtàe wan-níi mâi sà-dùak|Thanks for inviting me, but today doesn't work.|謝謝邀請，但今天不方便。
I|ถ้าคุณสนใจ เราไปดูด้วยกัน|thâa khun sǒn-jai rao pai duu dûai gan|If you're interested, we can go see it together.|如果你有興趣，我們可以一起去看。
I|ส่งที่อยู่มาให้ฉันหน่อย|sòng thîi-yùu maa hâi chǎn nòi|Please send me the address.|請把地址傳給我。
I|ฉันดีใจที่ได้พบเพื่อนใหม่|chǎn dii-jai thîi dâi phóp phʉ̂ean mài|I'm glad to meet new friends.|我很高興認識新朋友。
U|ถ้าแผนเปลี่ยน ช่วยบอกฉันล่วงหน้า|thâa phǎen bplìian chûai bàwk chǎn lûang-nâa|If plans change, please tell me in advance.|計畫有變的話請提前告訴我。
U|ขอบคุณที่ชวน แต่ฉันมีธุระอยู่แล้ว ไว้คราวหน้าได้ไหม|khàwp-khun thîi chuan dtàe chǎn mii thú-rá yùu láew wái khraao-nâa dâi mǎi|Thanks for inviting me, but I have plans. Could we do it another time?|謝謝邀請，但我已有事，改天可以嗎？
U|ฉันอยากรู้จักเพื่อนของคุณให้มากขึ้น|chǎn yàak rúu-jàk phʉ̂ean khǎwng khun hâi mâak khʉ̂n|I'd like to get to know your friends better.|我想多認識你的朋友。
U|เราเลือกสถานที่ที่ทุกคนเดินทางสะดวกเถอะ|rao lʉ̂eak sà-thǎan-thîi thîi thúk-khon doen-thaang sà-dùak thòe|Let's choose a place that's convenient for everyone.|我們選個大家都方便到的地方吧。
U|ฉันอยากรักษาความสัมพันธ์นี้แม้เราจะอยู่ไกลกัน|chǎn yàak rák-sǎa khwaam-sǎm-phan níi máe rao jà yùu glai gan|I'd like to keep in touch even when we're far apart.|即使相隔很遠，我也想維持這段關係。
U|ถ้ามีเรื่องที่ทำให้ไม่สบายใจ พูดกับฉันตรง ๆ ได้|thâa mii rʉ̂eang thîi tham hâi mâi sà-baai-jai phûut gàp chǎn dtrong dtrong dâi|If something bothers you, you can tell me directly.|如果有讓你不舒服的事，可以直接說。
U|ฉันอยากให้ทุกคนมีส่วนร่วมในการตัดสินใจ|chǎn yàak hâi thúk-khon mii sùan-rûam nai gaan-dtàt-sǐn-jai|I'd like everyone to have a say in the decision.|我希望大家都能參與決定。
U|เราอาจมีความสนใจต่างกันแต่ยังคุยกันได้|rao àat mii khwaam-sǒn-jai dtàang gan dtàe yang khui gan dâi|We may have different interests and still get along.|我們興趣不同，仍然可以聊得來。
U|ขอบคุณที่เคารพขอบเขตส่วนตัวของฉัน|khàwp-khun thîi khao-róp khàwp-khèet sùan-dtua khǎwng chǎn|Thank you for respecting my boundaries.|謝謝你尊重我的私人界線。
U|ฉันอยากชวนคุณไป แต่ไม่อยากให้รู้สึกกดดัน|chǎn yàak chuan khun pai dtàe mâi yàak hâi rúu-sʉ̀k gòt-dan|I'd like to invite you, but I don't want you to feel pressured.|我想邀請你，但不希望你感到壓力。
`,
  shopping: `
B|มีขนาดใหญ่กว่านี้ไหม|mii khà-nàat yài gwàa níi mǎi|Do you have a larger size?|有更大的尺寸嗎？
B|มีไซซ์เล็กกว่านี้ไหม|mii sai lék gwàa níi mǎi|Do you have a smaller size?|有更小的尺寸嗎？
B|ขอลองใส่ได้ไหม|khǎw lawng sài dâi mǎi|May I try it on?|可以試穿嗎？
B|แพงไปหน่อย|phaeng pai nòi|That's a bit expensive.|有點太貴了。
I|ห้องลองเสื้ออยู่ทางไหน|hâwng lawng sʉ̂ea yùu thaang nǎi|Where is the fitting room?|試衣間在哪邊？
I|ของชิ้นนี้มีรับประกันไหม|khǎwng chín-níi mii ráp-bprà-gan mǎi|Does this item come with a warranty?|這件商品有保固嗎？
I|ขอใบเสร็จแบบกระดาษ|khǎw bai-sèt bàep grà-dàat|I'd like a paper receipt.|請給我紙本收據。
I|ซื้อสองชิ้นมีส่วนลดไหม|sʉ́ʉ sǎawng chín mii sùan-lót mǎi|Is there a discount if I buy two?|買兩件有折扣嗎？
I|สินค้าอยู่ชั้นไหน|sǐn-kháa yùu chán nǎi|Which floor is the product on?|商品在幾樓？
I|ฉันขอดูรุ่นอื่นก่อน|chǎn khǎw duu rûn ʉ̀ʉn gàwn|I'd like to look at another model first.|我想先看看其他款式。
I|ชำระเงินด้วยโทรศัพท์ได้ไหม|cham-rá ngoen dûai thoo-rá-sàp dâi mǎi|Can I pay with my phone?|可以用手機付款嗎？
I|ขอถุงที่ใช้ซ้ำได้|khǎw thǔng thîi chái sám dâi|I'd like a reusable bag.|請給我可重複使用的袋子。
I|ป้ายราคานี้รวมภาษีแล้วหรือยัง|bpâai raa-khaa níi ruam phaa-sǐi láew rʉ̌ʉ yang|Does this price tag include tax?|這個標價含稅嗎？
I|สินค้าที่ได้รับมีรอยขีดข่วน|sǐn-kháa thîi dâi-ráp mii rawi khìit-khùan|The item I received is scratched.|我收到的商品有刮痕。
U|นโยบายคืนสินค้าภายในกี่วัน|ná-yoo-baai khʉʉn sǐn-kháa phaai-nai gìi wan|What is the return window?|幾天內可以退貨？
U|ถ้าสินค้ามีปัญหา ขอคืนเงินเต็มจำนวนได้ไหม|thâa sǐn-kháa mii bpan-hǎa khǎw khʉʉn ngoen dtem jam-nuan dâi mǎi|If the item is faulty, can I get a full refund?|商品有瑕疵可以全額退款嗎？
U|ขอทราบเงื่อนไขการรับประกันเป็นลายลักษณ์อักษร|khǎw sâap ngʉ̂an-khǎi gaan-ráp-bprà-gan bpen laai-lák-àk-sǎwn|Could I have the warranty terms in writing?|可以提供書面保固條款嗎？
U|รุ่นนี้ต่างจากรุ่นก่อนอย่างไร|rûn níi dtàang jàak rûn gàwn yàang-rai|How does this model differ from the previous one?|這款和上一款有什麼不同？
U|ถ้าสั่งวันนี้ จะได้รับของเมื่อไร|thâa sàng wan-níi jà dâi-ráp khǎwng mʉ̂ea-rai|If I order today, when will it arrive?|今天下單的話何時收到？
U|ฉันอยากเปรียบเทียบคุณภาพก่อนตัดสินใจ|chǎn yàak bprìiap-thîiap khun-ná-phâap gàwn dtàt-sǐn-jai|I'd like to compare the quality before deciding.|我想比較品質再決定。
U|ราคาที่แสดงออนไลน์ตรงกับราคาหน้าร้านไหม|raa-khaa thîi sà-daeng awn-lai dtrong gàp raa-khaa nâa-ráan mǎi|Is the online price the same as in store?|網路價格和店面價格相同嗎？
U|ฉันไม่ต้องการสมัครสมาชิกเพื่อรับส่วนลด|chǎn mâi dtâwng-gaan sà-màk sà-maa-chík phʉ̂ea ráp sùan-lót|I don't want to sign up for membership to get a discount.|我不想為了折扣申辦會員。
U|ช่วยตรวจสอบว่าสินค้ามีครบทุกชิ้นก่อนส่ง|chûai dtrùat-sàwp wâa sǐn-kháa mii khróp thúk chín gàwn sòng|Please check that all parts are included before shipping.|寄出前請確認商品配件齊全。
U|ฉันขอคุยกับผู้จัดการเรื่องการคืนสินค้า|chǎn khǎw khui gàp phûu-jàt-gaan rʉ̂eang gaan-khʉʉn sǐn-kháa|I'd like to speak with the manager about the return.|我想和經理談退貨事宜。
`,
  housing: `
B|ขอดูห้องนี้ได้ไหม|khǎw duu hâwng níi dâi mǎi|May I see this room?|可以看看這間房嗎？
B|มีเครื่องปรับอากาศไหม|mii khrʉ̂eang-bpràp-aa-gàat mǎi|Is there air conditioning?|有冷氣嗎？
B|ค่าเช่าเท่าไร|khâa-châo thâo-rai|How much is the rent?|租金多少？
B|อยู่ชั้นไหน|yùu chán nǎi|Which floor is it on?|在幾樓？
I|ค่าน้ำคิดแยกจากค่าเช่าไหม|khâa-náam khít yâek jàak khâa-châo mǎi|Is water billed separately from rent?|水費和房租分開算嗎？
I|ห้องนี้มีเฟอร์นิเจอร์อะไรบ้าง|hâwng níi mii fəə-ní-jəə à-rai bâang|What furniture is included in this room?|這間房附哪些家具？
I|ฉันขอดูห้องจริงก่อนตัดสินใจ|chǎn khǎw duu hâwng jing gàwn dtàt-sǐn-jai|I'd like to see the actual room before deciding.|決定前我想先看實際房間。
I|ต้องจ่ายเงินประกันกี่เดือน|dtâwng jàai ngoen-bprà-gan gìi dʉan|How many months' deposit is required?|押金要付幾個月？
I|น้ำรั่วจากเพดาน|náam rûa jàak phe-daan|Water is leaking from the ceiling.|天花板漏水。
I|ช่วยส่งช่างมาดูแอร์|chûai sòng châang maa duu ae|Please send a technician to check the air conditioner.|請派師傅來檢查冷氣。
I|ฉันจะย้ายเข้าเดือนหน้า|chǎn jà yáai khâo dʉan-nâa|I'll move in next month.|我下個月搬進去。
I|มีกฎเรื่องเสียงดังหลังสี่ทุ่มไหม|mii gòt rʉ̂eang sǐiang dang lǎng sìi thûm mǎi|Are there noise rules after ten p.m.?|晚上十點後有噪音規定嗎？
I|จอดจักรยานตรงไหนได้บ้าง|jàwt jàk-grà-yaan dtrong nǎi dâi bâang|Where can I park my bicycle?|腳踏車可以停在哪裡？
I|สัญญาเช่าหมดอายุเมื่อไร|sǎn-yaa-châo mòt-aa-yú mʉ̂ea-rai|When does the lease expire?|租約何時到期？
U|ค่าใช้จ่ายส่วนกลางครอบคลุมบริการอะไรบ้าง|khâa-chái-jàai sùan-glaang khrâwp-khlum baw-rí-gaan à-rai bâang|What services do the shared fees cover?|公共管理費包含哪些服務？
U|หากย้ายออกก่อนกำหนด จะมีค่าปรับหรือไม่|hàak yáai àwk gàwn gam-nòt jà mii khâa-bpràp rʉ̌ʉ mâi|Is there a penalty for leaving before the lease ends?|提前搬走會有違約金嗎？
U|ขอให้ระบุสภาพห้องก่อนเข้าอยู่ในสัญญา|khǎw hâi rá-bù sà-phâap hâwng gàwn khâo-yùu nai sǎn-yaa|Please record the room's condition in the lease before move-in.|請把入住前的房況寫進租約。
U|ฉันอยากทราบว่าใครรับผิดชอบค่าซ่อม|chǎn yàak sâap wâa khrai ráp-phìt-châwp khâa-sâwm|I'd like to know who pays for repairs.|我想知道修繕費由誰負責。
U|ถ้าอินเทอร์เน็ตขัดข้อง ต้องแจ้งใคร|thâa in-thəə-nèt khàt-khâwng dtâwng jâeng khrai|Who should I contact if the internet goes down?|網路故障時要通知誰？
U|ขอหลักฐานการชำระค่าเช่าทุกเดือน|khǎw làk-thǎan gaan-cham-rá khâa-châo thúk dʉan|Please provide proof of rent payment each month.|請每個月提供房租付款證明。
U|ฉันขอแจ้งล่วงหน้าว่าจะไม่ต่อสัญญาเช่า|chǎn khǎw jâeng lûang-nâa wâa jà mâi dtàw sǎn-yaa-châo|I'm giving advance notice that I won't renew the lease.|我提前通知不續租。
U|ช่วยยืนยันวันคืนเงินประกันเป็นลายลักษณ์อักษร|chûai yʉʉn-yan wan khʉʉn ngoen-bprà-gan bpen laai-lák-àk-sǎwn|Please confirm the deposit refund date in writing.|請以書面確認退還押金的日期。
U|ห้องข้าง ๆ เสียงดังจนรบกวนการนอน|hâwng khâang khâang sǐiang dang jon róp-guan gaan-nawn|Noise from next door is disturbing my sleep.|隔壁太吵，影響我睡覺。
U|การซ่อมครั้งนี้จะใช้เวลาประมาณกี่วัน|gaan-sâwm khráng-níi jà chái wee-laa bprà-maan gìi wan|About how many days will this repair take?|這次維修大約要幾天？
`,
  work: `
B|เริ่มงานกี่โมง|rôem ngaan gìi moong|What time does work start?|幾點上班？
B|เลิกงานแล้ว|lôek ngaan láew|I'm off work now.|我下班了。
B|ประชุมวันนี้ไหม|bprà-chum wan-níi mǎi|Is there a meeting today?|今天有開會嗎？
B|งานนี้ด่วนไหม|ngaan níi dùan mǎi|Is this task urgent?|這件工作急嗎？
I|ใครเป็นผู้รับผิดชอบส่วนนี้|khrai bpen phûu ráp-phìt-châwp sùan-níi|Who is responsible for this part?|這部分由誰負責？
I|ขอเลื่อนกำหนดส่งเป็นวันศุกร์|khǎw lʉ̂ean gam-nòt sòng bpen wan-sùk|Could we move the deadline to Friday?|可以把期限延到週五嗎？
I|ฉันจะส่งสรุปหลังประชุม|chǎn jà sòng sà-rùp lǎng bprà-chum|I'll send a summary after the meeting.|開會後我會寄摘要。
I|ขอข้อมูลเพิ่มเติมก่อนเริ่มงาน|khǎw khâw-muun phôem-dtoem gàwn rôem ngaan|I need more information before starting.|開始前我需要更多資訊。
I|งานนี้ต้องประสานกับทีมอื่น|ngaan níi dtâwng bprà-sǎan gàp thiim ʉ̀ʉn|This task requires coordinating with another team.|這項工作需要和其他團隊協調。
I|ฉันติดงานอื่นในช่วงเช้า|chǎn dtìt ngaan ʉ̀ʉn nai chûang-cháo|I have another task in the morning.|我上午有別的工作。
I|เราแบ่งงานตามความถนัดได้ไหม|rao bàeng ngaan dtaam khwaam-thà-nàt dâi mǎi|Can we divide tasks according to our strengths?|可以按各自擅長的事分工嗎？
I|ช่วยตรวจทานเอกสารนี้หน่อย|chûai dtrùat-thaan èek-gà-sǎan níi nòi|Could you review this document?|可以幫我校閱這份文件嗎？
I|ฉันทำส่วนของฉันเสร็จแล้ว|chǎn tham sùan khǎwng chǎn sèt láew|I've finished my part.|我負責的部分做完了。
I|มีประเด็นไหนต้องตัดสินใจวันนี้|mii bprà-den nǎi dtâwng dtàt-sǐn-jai wan-níi|What needs to be decided today?|今天有哪些事要決定？
U|เราควรกำหนดขอบเขตงานให้ชัดเจนก่อน|rao khuan gam-nòt khàwp-khèet ngaan hâi chát-jeen gàwn|We should define the scope of work first.|我們應先把工作範圍界定清楚。
U|ถ้าทรัพยากรไม่พอ เราต้องปรับลำดับความสำคัญ|thâa sáp-pha-yaa-gawn mâi phaw rao dtâwng bpràp lam-dàp khwaam-sǎm-khan|If resources are limited, we need to reprioritize.|資源不足時，我們得調整優先順序。
U|ข้อเสนอนี้มีผลต่อกำหนดการอย่างไร|khâw-sà-nǒe níi mii phǒn dtàw gam-nòt-gaan yàang-rai|How would this proposal affect the schedule?|這項提案會如何影響時程？
U|ฉันอยากทราบเกณฑ์ที่ใช้ประเมินผลงาน|chǎn yàak sâap geen thîi chái bprà-moən phǒn-ngaan|I'd like to know the performance criteria.|我想了解績效評估標準。
U|ช่วยระบุเจ้าของงานและขั้นตอนถัดไป|chûai rá-bù jâo-khǎwng-ngaan láe khân-dtawn thàt-pai|Please name the task owner and next steps.|請列出負責人和後續步驟。
U|เราอาจต้องหารือกับผู้มีส่วนเกี่ยวข้องก่อน|rao àat dtâwng hǎa-rʉʉ gàp phûu-mii-sùan-gìao-khâwng gàwn|We may need to consult stakeholders first.|我們可能要先與相關人員討論。
U|ฉันเห็นความเสี่ยงเรื่องคุณภาพหากเร่งเกินไป|chǎn hěn khwaam-sìiang rʉ̂eang khun-ná-phâap hàak rêng goen pai|I see a quality risk if we rush.|趕工過頭可能影響品質。
U|เพื่อหลีกเลี่ยงความเข้าใจผิด ขอส่งยืนยันทางอีเมล|phʉ̂ea lǐik-lîiang khwaam-khâo-jai-phìt khǎw sòng yʉʉn-yan thaang ii-meel|To avoid confusion, I'll confirm by email.|為避免誤會，我會寄電子郵件確認。
U|เราควรทบทวนสิ่งที่ได้เรียนรู้หลังจบโครงการ|rao khuan thóp-thuan sìng thîi dâi riian-rúu lǎng jòp khroong-gaan|We should review lessons learned after the project.|專案結束後應檢討學到的經驗。
U|หากมีข้อขัดข้อง ช่วยแจ้งทันทีแทนการรอถึงวันส่ง|hàak mii khâw-khàt-khâwng chûai jâeng than-thii thaen gaan raw thʉ̌ng wan sòng|If there's a problem, please report it immediately instead of waiting until the deadline.|若有問題請立即反映，別等到截止日。
`,
  health: `
B|ปวดท้อง|bpùat tháwng|I have a stomachache.|我肚子痛。
B|หนาวสั่น|nǎao sàn|I have chills.|我發冷發抖。
B|เวียนหัว|wiian hǔa|I feel dizzy.|我頭暈。
B|คลื่นไส้|khlʉ̂ʉn-sâi|I feel nauseous.|我想吐。
I|อาการเริ่มตั้งแต่เมื่อไร|aa-gaan rôem dtâng-dtàe mʉ̂ea-rai|When did the symptoms start?|症狀從何時開始？
I|ฉันไอมาสามวันแล้ว|chǎn ai maa sǎam wan láew|I've been coughing for three days.|我咳嗽三天了。
I|ฉันต้องกินยาก่อนอาหารไหม|chǎn dtâwng gin yaa gàwn aa-hǎan mǎi|Should I take the medicine before meals?|藥要飯前吃嗎？
I|ยานี้ต้องกินวันละกี่ครั้ง|yaa níi dtâwng gin wan-lá gìi khráng|How many times a day should I take this medicine?|這種藥一天要吃幾次？
I|ฉันมีประวัติแพ้ยานี้|chǎn mii bprà-wàt pháe yaa níi|I've had an allergic reaction to this medicine.|我有這種藥的過敏史。
I|ขอพบแพทย์วันนี้ได้ไหม|khǎw phóp phâet wan-níi dâi mǎi|Can I see a doctor today?|今天能看醫生嗎？
I|ต้องงดน้ำงดอาหารก่อนตรวจไหม|dtâwng ngót náam ngót aa-hǎan gàwn dtrùat mǎi|Do I need to fast before the test?|檢查前要禁食禁水嗎？
I|ช่วยวัดความดันให้หน่อย|chûai wát khwaam-dan hâi nòi|Could you check my blood pressure?|可以幫我量血壓嗎？
I|ผลตรวจจะออกเมื่อไร|phǒn-dtrùat jà àwk mʉ̂ea-rai|When will the test results be ready?|檢查結果何時出來？
I|ฉันอยากขอใบรับรองแพทย์|chǎn yàak khǎw bai-ráp-rawng-phâet|I'd like a medical certificate.|我想申請診斷證明。
U|อาการแย่ลงหลังจากเริ่มใช้ยา|aa-gaan yâe long lǎng-jàak rôem chái yaa|The symptoms worsened after I started the medicine.|開始用藥後症狀變嚴重了。
U|ช่วยอธิบายผลข้างเคียงที่ควรระวัง|chûai à-thí-baai phǒn-khâang-khiang thîi khuan rá-wang|Please explain which side effects I should watch for.|請說明需要注意的副作用。
U|ฉันอยากเข้าใจทางเลือกในการรักษา|chǎn yàak khâo-jai thaang-lʉ̂eak nai gaan-rák-sǎa|I'd like to understand my treatment options.|我想了解有哪些治療選擇。
U|ถ้าอาการไม่ดีขึ้นภายในสองวัน ควรทำอย่างไร|thâa aa-gaan mâi dii khʉ̂n phaai-nai sǎawng wan khuan tham yàang-rai|What should I do if I don't improve within two days?|如果兩天內沒改善，該怎麼辦？
U|ฉันขอสำเนาผลตรวจไว้ปรึกษาแพทย์อีกคน|chǎn khǎw sǎm-nao phǒn-dtrùat wái bprʉ̀k-sǎa phâet ìik khon|I'd like a copy of the results to consult another doctor.|我想拿檢查結果副本諮詢另一位醫師。
U|อาการนี้อาจเกี่ยวข้องกับโรคประจำตัวไหม|aa-gaan níi àat gìao-khâwng gàp rôok-bprà-jam-dtua mǎi|Could this symptom be related to my chronic condition?|這症狀可能與我的慢性病有關嗎？
U|ฉันอยากทราบว่าจำเป็นต้องตรวจเพิ่มเติมหรือไม่|chǎn yàak sâap wâa jam-bpen dtâwng dtrùat phôem-dtoem rʉ̌ʉ mâi|I'd like to know whether further tests are necessary.|我想知道是否需要進一步檢查。
U|ก่อนตัดสินใจรักษา ขอทราบค่าใช้จ่ายโดยประมาณ|gàwn dtàt-sǐn-jai rák-sǎa khǎw sâap khâa-chái-jàai dooi-bprà-maan|Before choosing treatment, I'd like an estimated cost.|決定治療前，我想先知道大概費用。
U|ฉันขอให้ญาติเข้ามาฟังคำอธิบายด้วยได้ไหม|chǎn khǎw hâi yâat khâo maa fang kham-à-thí-baai dûai dâi mǎi|May a family member join us for the explanation?|可以讓家屬一起聽說明嗎？
U|หากมีอาการฉุกเฉิน ควรติดต่อที่ไหน|hàak mii aa-gaan chùk-chəən khuan dtìt-dtàw thîi nǎi|Who should I contact in an emergency?|若有急症該聯絡哪裡？
`,
  services: `
B|ขอแบบฟอร์ม|khǎw bàep-fawm|May I have a form?|請給我一張表格。
B|ต้องใช้หนังสือเดินทางไหม|dtâwng chái nǎng-sʉ̌ʉ-doen-thaang mǎi|Do I need a passport?|需要護照嗎？
B|เปิดบัญชีใหม่|bpòet ban-chii mài|Open a new account.|開新帳戶。
B|กดเงินสด|gòt ngoen-sòt|Withdraw cash.|領現金。
I|ใช้สำเนาแทนเอกสารตัวจริงได้ไหม|chái sǎm-nao thaen èek-gà-sǎan dtua-jing dâi mǎi|Can I submit copies instead of originals?|可以用影本代替文件正本嗎？
I|ขอหมายเลขคิวหน่อย|khǎw mǎai-lêek khiu nòi|Could I have a queue number?|請給我一張號碼牌。
I|ฉันต้องเซ็นตรงไหน|chǎn dtâwng sen dtrong nǎi|Where should I sign?|我應該在哪裡簽名？
I|โอนเงินไปต่างประเทศได้ไหม|oon ngoen pai dtàang-bprà-thêet dâi mǎi|Can I transfer money abroad?|可以匯款到國外嗎？
I|มีค่าธรรมเนียมเท่าไร|mii khâa-tham-niiam thâo-rai|How much is the fee?|手續費多少？
I|ฉันทำบัตรหาย ต้องอายัดบัตร|chǎn tham bàt hǎai dtâwng aa-yát bàt|I lost my card and need to block it.|卡片遺失了，我需要掛失。
I|ต้องนัดหมายล่วงหน้าไหม|dtâwng nát-mǎai lûang-nâa mǎi|Do I need an appointment?|需要事先預約嗎？
I|ขั้นตอนนี้ใช้เวลานานไหม|khân-dtawn níi chái wee-laa naan mǎi|Does this step take long?|這個步驟要很久嗎？
I|ขอสำเนาเอกสารที่ยื่นไป|khǎw sǎm-nao èek-gà-sǎan thîi yʉ̂ʉn pai|I'd like a copy of the documents I submitted.|我想要已提交文件的副本。
I|ฉันต้องการแก้หมายเลขโทรศัพท์ในระบบ|chǎn dtâwng-gaan gâe mǎai-lêek thoo-rá-sàp nai rá-bòp|I need to update my phone number in the system.|我需要更改系統中的電話號碼。
U|ช่วยอธิบายเหตุผลที่คำขอถูกปฏิเสธ|chûai à-thí-baai hèet-phǒn thîi kham-khǎw thùuk bpà-dtì-sèet|Could you explain why my application was rejected?|可以說明申請被駁回的原因嗎？
U|ฉันขอทราบช่องทางอุทธรณ์ผลการพิจารณา|chǎn khǎw sâap châwng-thaang ùt-thawn phǒn gaan-phí-jaa-rá-naa|How can I appeal the decision?|請問有什麼管道可以申訴審核結果？
U|ค่าธรรมเนียมนี้รวมค่าใช้จ่ายทั้งหมดแล้วหรือยัง|khâa-tham-niiam níi ruam khâa-chái-jàai tháng-mòt láew rʉ̌ʉ yang|Does this fee cover all costs?|這筆手續費已包含所有費用嗎？
U|ช่วยระบุระยะเวลาดำเนินการเป็นลายลักษณ์อักษร|chûai rá-bù rá-yá-wee-laa dam-noen-gaan bpen laai-lák-àk-sǎwn|Please state the processing time in writing.|請以書面說明處理時間。
U|หากเอกสารไม่ครบ สามารถยื่นเพิ่มเติมภายหลังได้ไหม|hàak èek-gà-sǎan mâi khróp sǎa-mâat yʉ̂ʉn phôem-dtoem phaai-lǎng dâi mǎi|If documents are missing, can I submit them later?|文件不齊的話，可以之後補交嗎？
U|ฉันต้องการตรวจสอบรายการธุรกรรมที่ผิดปกติ|chǎn dtâwng-gaan dtrùat-sàwp raai-gaan thú-rá-gam thîi phìt-bpòk-gà-dtì|I need to check an unusual transaction.|我需要查核一筆異常交易。
U|ขอเอกสารยืนยันว่าได้ยกเลิกบริการแล้ว|khǎw èek-gà-sǎan yʉʉn-yan wâa dâi yók-lôek baw-rí-gaan láew|I'd like written confirmation that the service was canceled.|請提供已取消服務的證明。
U|ข้อมูลส่วนตัวของฉันจะถูกเก็บไว้นานเท่าไร|khâw-muun sùan-dtua khǎwng chǎn jà thùuk gèp wái naan thâo-rai|How long will my personal data be kept?|我的個資會保存多久？
U|หากพบข้อผิดพลาดในเอกสาร ต้องแก้ไขอย่างไร|hàak phóp khâw-phìt-phlâat nai èek-gà-sǎan dtâwng gâe-khǎi yàang-rai|How can I correct an error in the document?|文件有錯該怎麼更正？
U|ช่วยแจ้งเลขอ้างอิงของคำร้องนี้ให้ฉันด้วย|chûai jâeng lêek-âang-ing khǎwng kham-ráwng níi hâi chǎn dûai|Please give me the reference number for this request.|請給我這份申請的案件編號。
`,
  opinions: `
B|ฉันเห็นด้วย|chǎn hěn dûai|I agree.|我同意。
B|ฉันไม่เห็นด้วย|chǎn mâi hěn dûai|I disagree.|我不同意。
B|ฉันชอบแบบนี้มากกว่า|chǎn châwp bàep níi mâak gwàa|I prefer this one.|我比較喜歡這個。
B|แล้วคุณล่ะ|láew khun lâ|What about you?|那你呢？
I|ในความเห็นของฉัน|nai khwaam-hěn khǎwng chǎn|In my opinion.|依我看。
I|ฉันยังตัดสินใจไม่ได้|chǎn yang dtàt-sǐn-jai mâi dâi|I haven't decided yet.|我還沒決定。
I|เรื่องนี้มีทั้งข้อดีและข้อเสีย|rʉ̂eang níi mii tháng khâw-dii láe khâw-sǐia|This has both advantages and disadvantages.|這件事有利也有弊。
I|ขอเหตุผลเพิ่มเติมได้ไหม|khǎw hèet-phǒn phôem-dtoem dâi mǎi|Could you give me more reasons?|可以多說一些理由嗎？
I|ฉันเข้าใจประเด็นของคุณ|chǎn khâo-jai bprà-den khǎwng khun|I understand your point.|我明白你的意思。
I|ผลลัพธ์อาจไม่เหมือนที่คาด|phǒn-láp àat mâi mʉ̌ean thîi khâat|The result may differ from what we expect.|結果可能和預期不同。
I|เรามีข้อมูลพอหรือยัง|rao mii khâw-muun phaw rʉ̌ʉ yang|Do we have enough information yet?|我們的資訊夠了嗎？
I|ฉันขอคิดดูก่อน|chǎn khǎw khít duu gàwn|Let me think about it first.|讓我先想想。
I|ข้อนี้สำคัญกว่าที่คิด|khâw níi sǎm-khan gwàa thîi khít|This point matters more than I thought.|這點比我想的更重要。
I|ทำไมคุณถึงคิดอย่างนั้น|tham-mai khun thʉ̌ng khít yàang-nán|Why do you think that?|你為什麼那樣想？
U|ฉันเห็นด้วยกับหลักการ แต่ไม่แน่ใจวิธีดำเนินการ|chǎn hěn dûai gàp làk-gaan dtàe mâi nâe-jai wí-thii dam-noen-gaan|I agree with the principle, but I'm unsure about the implementation.|我同意原則，但對執行方式還不確定。
U|ประเด็นนี้ควรพิจารณาจากหลายมุม|bprà-den níi khuan phí-jaa-rá-naa jàak lǎai mum|We should consider this issue from several angles.|這個問題應從多個角度考量。
U|หลักฐานที่มีอยู่ยังไม่เพียงพอจะสรุป|làk-thǎan thîi mii yùu yang mâi phiiang-phaw jà sà-rùp|The available evidence isn't enough to draw a conclusion.|現有證據還不足以下結論。
U|สิ่งที่ดูเหมือนขัดแย้งอาจเกิดจากบริบทต่างกัน|sìng thîi duu mʉ̌ean khàt-yáeng àat gə̀ət jàak baw-rí-bòt dtàang gan|The apparent contradiction may come from different contexts.|看似矛盾可能是因為脈絡不同。
U|ฉันอยากแยกข้อเท็จจริงออกจากความคิดเห็น|chǎn yàak yâek khâw-thét-jing àwk jàak khwaam-khít-hěn|I'd like to separate facts from opinions.|我想區分事實和意見。
U|ข้อเสนอนี้สมเหตุสมผลภายใต้เงื่อนไขบางอย่าง|khâw-sà-nǒe níi sǒm-hèet-sǒm-phǒn phaai-dtâi ngʉ̂an-khǎi baang yàang|This proposal makes sense under certain conditions.|這項提議在某些條件下合理。
U|ฉันอาจเปลี่ยนความเห็นถ้ามีข้อมูลใหม่|chǎn àat bplìian khwaam-hěn thâa mii khâw-muun mài|I may change my view if new information emerges.|若有新資訊，我可能改變看法。
U|เราไม่ควรมองข้ามผลกระทบระยะยาว|rao mâi khuan mawng-khâam phǒn-grà-thóp rá-yá-yaao|We shouldn't overlook the long-term effects.|我們不應忽視長期影響。
U|ฉันยังไม่มั่นใจว่าข้อสรุปนี้ตามมาจากข้อมูล|chǎn yang mâi mân-jai wâa khâw-sà-rùp níi dtaam maa jàak khâw-muun|I'm not convinced the conclusion follows from the data.|我還不確定這個結論是否由資料支持。
U|ถ้าคำนึงถึงผู้ได้รับผลกระทบ ความเห็นอาจเปลี่ยน|thâa kham-nʉng thʉ̌ng phûu dâi-ráp phǒn-grà-thóp khwaam-hěn àat bplìian|The view may change if we consider those affected.|若考慮受影響的人，觀點可能改變。
`,
  problems: `
B|มีข้อผิดพลาด|mii khâw-phìt-phlâat|There's an error.|有錯誤。
B|ช่วยหน่อย|chûai nòi|Please help.|請幫忙。
B|ยังไม่ได้|yang mâi dâi|It's not ready yet.|還沒好。
B|ลองอีกครั้ง|lawng ìik khráng|Try again.|再試一次。
I|เกิดปัญหาตรงขั้นตอนไหน|gə̀ət bpan-hǎa dtrong khân-dtawn nǎi|At which step did the problem occur?|問題發生在哪個步驟？
I|เราต้องหาสาเหตุให้เจอ|rao dtâwng hǎa sǎa-hèet hâi joe|We need to find the cause.|我們得找出原因。
I|ฉันลองแก้แล้วแต่ยังไม่ได้ผล|chǎn lawng gâe láew dtàe yang mâi dâi phǒn|I tried to fix it, but it didn't work.|我試著處理了，但沒效果。
I|ขอเริ่มใหม่ตั้งแต่ต้น|khǎw rôem mài dtâng-dtàe dtôn|Let's start again from the beginning.|我們從頭再來。
I|ช่วยบอกขั้นตอนที่ทำไปแล้ว|chûai bàwk khân-dtawn thîi tham pai láew|Please tell me what steps you've tried.|請告訴我你已經試過哪些步驟。
I|ฉันคิดว่าเราคุยกันคนละเรื่อง|chǎn khít wâa rao khui gan khon-lá rʉ̂eang|I think we're talking about different things.|我覺得我們在說不同的事。
I|ขอเสนออีกวิธีหนึ่ง|khǎw sà-nǒe ìik wí-thii nʉ̀ng|May I suggest another approach?|我可以提議另一種方法嗎？
I|ถ้าไม่สำเร็จ เรามีแผนสำรองไหม|thâa mâi sǎm-rèt rao mii phǎen-sǎm-rawng mǎi|If this fails, do we have a backup plan?|如果不成功，有備案嗎？
I|ปัญหานี้กระทบคนอื่นด้วยไหม|bpan-hǎa níi grà-thóp khon ʉ̀ʉn dûai mǎi|Does this problem affect others too?|這個問題也影響其他人嗎？
I|เราควรแก้เรื่องด่วนก่อน|rao khuan gâe rʉ̂eang dùan gàwn|We should deal with urgent matters first.|我們應先處理急事。
U|เราอาจกำลังแก้แค่อาการ ไม่ใช่ต้นเหตุ|rao àat gam-lang gâe khâe aa-gaan mâi châi dtôn-hèet|We may be treating the symptom rather than the root cause.|我們可能只是在處理表面症狀，而非根本原因。
U|ขอให้ระบุผลกระทบและความเร่งด่วนแยกกัน|khǎw hâi rá-bù phǒn-grà-thóp láe khwaam-rêng-dùan yâek gan|Please distinguish impact from urgency.|請分別說明影響程度與緊急性。
U|ก่อนตัดสินว่าใครผิด เราควรตรวจสอบข้อเท็จจริง|gàwn dtàt-sǐn wâa khrai phìt rao khuan dtrùat-sàwp khâw-thét-jing|Before assigning blame, we should check the facts.|在判定誰有錯之前，應先查明事實。
U|วิธีนี้อาจแก้ปัญหาระยะสั้นแต่สร้างปัญหาระยะยาว|wí-thii níi àat gâe bpan-hǎa rá-yá-sân dtàe sâang bpan-hǎa rá-yá-yaao|This may solve the short-term issue but create a long-term one.|這方法可能解決眼前問題，卻造成長期問題。
U|เราควรกำหนดว่าเมื่อไรต้องส่งต่อให้ผู้เชี่ยวชาญ|rao khuan gam-nòt wâa mʉ̂ea-rai dtâwng sòng-dtàw hâi phûu-chîao-chaan|We should set a point at which to involve a specialist.|我們應訂出何時轉交專家處理。
U|ถ้าแต่ละฝ่ายยอมปรับเล็กน้อย เราอาจตกลงกันได้|thâa dtàe-lá fàai yawmm bpràp lék-nói rao àat dtòk-long gan dâi|If each side adjusts a little, we may reach agreement.|若各方稍作讓步，或許能達成共識。
U|ขอทบทวนข้อตกลงเพื่อให้แน่ใจว่าเข้าใจตรงกัน|khǎw thóp-thuan khâw-dtòk-long phʉ̂ea hâi nâe-jai wâa khâo-jai dtrong gan|Let's review the agreement to ensure we're aligned.|我們再確認協議，確保理解一致。
U|วิธีแก้ควรคำนึงถึงคนที่ได้รับผลกระทบมากที่สุด|wí-thii gâe khuan kham-nʉng thʉ̌ng khon thîi dâi-ráp phǒn-grà-thóp mâak thîi-sùt|The solution should consider those most affected.|解法應顧及受影響最深的人。
U|หากข้อมูลยังไม่ครบ เราควรเลื่อนการตัดสินใจ|hàak khâw-muun yang mâi khróp rao khuan lʉ̂ean gaan-dtàt-sǐn-jai|If the information is incomplete, we should postpone the decision.|若資訊尚不完整，應暫緩決定。
U|เราต้องติดตามผลหลังจากนำวิธีแก้นี้ไปใช้|rao dtâwng dtìt-dtaam phǒn lǎng-jàak nam wí-thii gâe níi pai chái|We need to follow up after applying this solution.|實施這項解法後還要追蹤成效。
`,
  culture: `
B|ถอดรองเท้าก่อนไหม|thàwt rawng-tháao gàwn mǎi|Should I take off my shoes first?|要先脫鞋嗎？
B|พูดเบา ๆ|phûut bao bao|Speak softly.|小聲一點。
B|ขออนุญาตถ่ายรูป|khǎw à-nú-yâat thàai-rûup|May I take a photo?|我可以拍照嗎？
B|ขอบคุณที่เชิญ|khàwp-khun thîi choen|Thank you for inviting me.|謝謝邀請。
I|ที่นี่มีธรรมเนียมอะไรที่ควรรู้|thîi-nîi mii tham-niiam à-rai thîi khuan rúu|Are there local customs I should know?|這裡有什麼習俗需要注意？
I|ควรแต่งตัวอย่างไรไปงานนี้|khuan dtàeng-dtua yàang-rai pai ngaan níi|How should I dress for this event?|參加這個活動該怎麼穿？
I|ฉันควรทักทายผู้ใหญ่ก่อนใช่ไหม|chǎn khuan thák-thaai phûu-yài gàwn châi mǎi|Should I greet the elders first?|我應該先向長輩打招呼，對嗎？
I|ฉันอยากรู้ที่มาของประเพณีนี้|chǎn yàak rúu thîi-maa khǎwng bprà-phee-nii níi|I'd like to know where this tradition comes from.|我想了解這項傳統的由來。
I|อาหารนี้กินในโอกาสพิเศษหรือเปล่า|aa-hǎan níi gin nai oo-gàat phí-sèet rʉ̌ʉ bplào|Is this food eaten on special occasions?|這道食物是在特殊日子吃的嗎？
I|งานนี้เริ่มด้วยพิธีอะไร|ngaan níi rôem dûai phí-thii à-rai|What ceremony starts the event?|這個活動以什麼儀式開始？
I|ฉันขอร่วมกิจกรรมได้ไหม|chǎn khǎw rûam gìt-jà-gam dâi mǎi|May I join the activity?|我可以參加嗎？
I|ควรใช้คำเรียกผู้ใหญ่แบบไหน|khuan chái kham rîiak phûu-yài bàep nǎi|How should I address an elder?|該怎麼稱呼長輩？
I|วันนี้เป็นวันหยุดทางศาสนาไหม|wan-níi bpen wan-yùt thaang sǎat-sà-nǎa mǎi|Is today a religious holiday?|今天是宗教節日嗎？
I|ขอให้ช่วยแนะนำมารยาทบนโต๊ะอาหาร|khǎw hâi chûai náe-nam maa-rá-yâat bon dtó aa-hǎan|Could you explain the table etiquette?|可以介紹餐桌禮儀嗎？
U|ฉันอยากเข้าใจความหมายมากกว่าแค่ทำตามขั้นตอน|chǎn yàak khâo-jai khwaam-mǎai mâak gwàa khâe tham dtaam khân-dtawn|I'd like to understand the meaning, not just follow the steps.|我想理解其意義，不只是照著做。
U|ประเพณีเดียวกันอาจต่างกันตามภูมิภาค|bprà-phee-nii diao gan àat dtàang gan dtaam phuum-mí-phâak|The same tradition may vary by region.|同一習俗可能因地區而不同。
U|ฉันไม่อยากเหมารวมวัฒนธรรมจากประสบการณ์ครั้งเดียว|chǎn mâi yàak mǎo-ruam wát-thá-ná-tham jàak bprà-sòp-gaan khráng diao|I don't want to generalize about a culture from one experience.|我不想憑一次經驗概括整個文化。
U|การถามก่อนถ่ายรูปเป็นการเคารพความเป็นส่วนตัว|gaan thǎam gàwn thàai-rûup bpen gaan khao-róp khwaam-bpen-sùan-dtua|Asking before taking photos respects privacy.|拍照前先詢問是尊重隱私。
U|สิ่งที่ถือว่าสุภาพอาจขึ้นอยู่กับสถานการณ์|sìng thîi thʉ̌ʉ wâa sù-phâap àat khʉ̂n-yùu gàp sà-thǎan-gaan|What counts as polite may depend on the situation.|禮貌與否可能取決於情境。
U|ฉันอยากฟังคนในพื้นที่เล่าเรื่องนี้ด้วยตนเอง|chǎn yàak fang khon nai phʉ́ʉn-thîi lâo rʉ̂eang níi dûai dton-eeng|I'd like to hear local people explain this in their own words.|我想聽在地人親自談這件事。
U|บางคำมีนัยทางวัฒนธรรมที่แปลตรงตัวไม่ได้|baang kham mii nai thaang wát-thá-ná-tham thîi bplae dtrong-dtua mâi dâi|Some words carry cultural meanings that can't be translated literally.|有些詞有無法直譯的文化意涵。
U|เราควรแยกความเชื่อส่วนตัวออกจากข้อเท็จจริง|rao khuan yâek khwaam-chʉ̂ea sùan-dtua àwk jàak khâw-thét-jing|We should distinguish personal beliefs from facts.|應把個人信念與事實分開。
U|หากฉันเข้าใจมารยาทผิด ช่วยบอกอย่างตรงไปตรงมา|hàak chǎn khâo-jai maa-rá-yâat phìt chûai bàwk yàang dtrong-pai-dtrong-maa|Please tell me directly if I misunderstand the etiquette.|如果我誤解禮節，請直接告訴我。
U|วัฒนธรรมเปลี่ยนไปตามเวลาและผู้คน|wát-thá-ná-tham bplìian pai dtaam wee-laa láe phûu-khon|Culture changes over time and among people.|文化會隨時間和人群而變化。
`,
  technology: `
B|เปิดไวไฟ|bpòet wai-fai|Turn on Wi-Fi.|開啟 Wi-Fi。
B|แบตหมด|bàet mòt|The battery is dead.|沒電了。
B|ลืมรหัสผ่าน|lʉʉm rá-hàt-phàan|I forgot the password.|我忘記密碼了。
B|เปิดกล้อง|bpòet glâwng|Turn on the camera.|開啟相機。
I|สัญญาณอินเทอร์เน็ตไม่เสถียร|sǎn-yaan in-thəə-nèt mâi sà-thǐian|The internet connection is unstable.|網路連線不穩。
I|ช่วยส่งลิงก์มาให้อีกครั้ง|chûai sòng ling maa hâi ìik khráng|Could you send me the link again?|可以再傳一次連結嗎？
I|ไฟล์นี้เปิดในโทรศัพท์ไม่ได้|fai níi bpòet nai thoo-rá-sàp mâi dâi|I can't open this file on my phone.|這份檔案在手機上打不開。
I|ฉันจะสำรองข้อมูลก่อนอัปเดต|chǎn jà sǎm-rawng khâw-muun gàwn áp-dèet|I'll back up my data before updating.|更新前我會先備份資料。
I|ขอรหัสยืนยันอีกครั้ง|khǎw rá-hàt yʉʉn-yan ìik khráng|Please send the verification code again.|請再傳一次驗證碼。
I|ฉันกดผิดไปเมื่อกี้|chǎn gòt phìt pai mʉ̂ea-gîi|I pressed the wrong button just now.|我剛才按錯了。
I|แอปนี้ขอสิทธิ์เข้าถึงตำแหน่ง|àep níi khǎw sìt khâo-thʉ̌ng dtam-nàeng|This app requests location access.|這個應用程式要求位置權限。
I|ปิดการแจ้งเตือนได้ที่ไหน|bpìt gaan-jâeng-dtʉʉan dâi thîi nǎi|Where can I turn off notifications?|通知在哪裡關閉？
I|ช่วยแชร์หน้าจอให้ดูได้ไหม|chûai chae nâa-jaw hâi duu dâi mǎi|Could you share your screen?|可以分享螢幕嗎？
I|บัญชีของฉันถูกล็อก|ban-chii khǎwng chǎn thùuk láwk|My account is locked.|我的帳號被鎖住了。
U|ฉันไม่แน่ใจว่าข้อความนี้เป็นการหลอกลวงหรือไม่|chǎn mâi nâe-jai wâa khâw-khwaam níi bpen gaan-làwk-luang rʉ̌ʉ mâi|I'm not sure whether this message is a scam.|我不確定這則訊息是否是詐騙。
U|ก่อนกดยืนยัน ควรตรวจสอบที่อยู่เว็บไซต์|gàwn gòt yʉʉn-yan khuan dtrùat-sàwp thîi-yùu wép-sai|Check the website address before confirming.|按下確認前應檢查網址。
U|แอปนี้เก็บข้อมูลส่วนตัวอะไรบ้าง|àep níi gèp khâw-muun sùan-dtua à-rai bâang|What personal data does this app collect?|這個應用程式收集哪些個資？
U|ฉันต้องการถอนความยินยอมในการใช้ข้อมูล|chǎn dtâwng-gaan thǎwn khwaam-yin-yawm nai gaan-chái khâw-muun|I want to withdraw consent for data use.|我想撤回資料使用同意。
U|หากระบบล่ม เรามีช่องทางติดต่อสำรองไหม|hàak rá-bòp lôm rao mii châwng-thaang dtìt-dtàw sǎm-rawng mǎi|If the system is down, do we have another contact channel?|系統當機時有備用聯絡方式嗎？
U|อาจมีปัญหาความเข้ากันได้ระหว่างอุปกรณ์|àat mii bpan-hǎa khwaam-khâo-gan-dâi rá-wàang ùp-bpà-gawn|There may be a device compatibility issue.|可能是裝置相容性問題。
U|ช่วยอธิบายว่าการตั้งค่านี้ส่งผลอะไร|chûai à-thí-baai wâa gaan-dtâng-khâa níi sòng-phǒn à-rai|Could you explain what this setting affects?|可以說明這項設定有什麼影響嗎？
U|ข้อมูลถูกลบถาวรหรือยังสามารถกู้คืนได้|khâw-muun thùuk lóp thǎa-wawn rʉ̌ʉ yang sǎa-mâat gûu-khʉʉn dâi|Was the data permanently deleted, or can it be recovered?|資料已永久刪除，還是能復原？
U|เราควรทดสอบกับผู้ใช้จริงก่อนเปิดใช้งาน|rao khuan thót-sàwp gàp phûu-chái jing gàwn bpòet chái-ngaan|We should test with real users before launch.|正式啟用前應先找真實使用者測試。
U|การอัปเดตนี้แก้ช่องโหว่ด้านความปลอดภัยหรือไม่|gaan áp-dèet níi gâe châwng-wòo dâan khwaam-bplàwt-phai rʉ̌ʉ mâi|Does this update fix a security vulnerability?|這次更新有修補安全漏洞嗎？
`,
  patterns: `
B|ได้ไหม|dâi mǎi|Can I / can we?|可以嗎？
B|ทำไมล่ะ|tham-mai lâ|Why, then?|為什麼呢？
B|อย่างนี้เอง|yàang-níi eeng|Oh, I see.|原來如此。
B|ไม่แน่ใจ|mâi nâe-jai|I'm not sure.|我不確定。
I|แล้วแต่คุณ|láew-dtàe khun|It's up to you.|由你決定。
I|ขออีกนิดหนึ่ง|khǎw ìik nít-nʉ̀ng|Just a little more, please.|請再多一點。
I|ไม่จำเป็นต้อง...|mâi jam-bpen dtâwng...|There's no need to...|不必……
I|ถ้าเป็นไปได้...|thâa bpen-pai-dâi...|If possible...|如果可以的話……
I|ไม่ใช่เพราะ...แต่เพราะ...|mâi châi phráw... dtàe phráw...|Not because... but because...|不是因為……而是因為……
I|ฉันหมายถึง...|chǎn mǎai-thʉ̌ng...|What I mean is...|我的意思是……
I|พูดอีกอย่างคือ...|phûut ìik yàang khʉʉ...|In other words...|換句話說……
I|เท่าที่ฉันรู้...|thâo thîi chǎn rúu...|As far as I know...|據我所知……
I|คงต้อง...|khong dtâwng...|We'll probably need to...|恐怕得……
I|ขอให้...ก่อน|khǎw hâi... gàwn|Please... first.|請先……
U|ไม่ว่าจะ...หรือ...|mâi wâa... rʉ̌ʉ...|Whether... or...|無論……或……
U|แม้ว่า...ก็...|máe wâa... gɔ̂ɔ...|Even though... still...|即使……也……
U|แทนที่จะ...ควร...|thaen thîi jà... khuan...|Instead of... we should...|與其……不如應該……
U|ภายใต้เงื่อนไขที่ว่า...|phaai-dtâi ngʉ̂an-khǎi thîi wâa...|On the condition that...|在……的條件下。
U|ในกรณีที่...|nai gaw-rá-nii thîi...|In the event that...|萬一……
U|ถึงอย่างนั้น...|thʉ̌ng yàang-nán...|Even so...|即便如此……
U|ส่วนหนึ่งเป็นเพราะ...|sùan-nʉ̀ng bpen phráw...|Partly because...|部分原因是……
U|กล่าวอีกนัยหนึ่ง...|glàao ìik nai nʉ̀ng...|Put another way...|換個角度說……
U|เมื่อคำนึงถึง...|mʉ̂ea kham-nʉng thʉ̌ng...|Taking... into account...|考慮到……
U|ไม่อาจสรุปได้ว่า...|mâi àat sà-rùp dâi wâa...|We cannot conclude that...|不能就此斷定……
`,
  time: `
B|วันก่อน|wan-gàwn|The other day.|前幾天。
B|มะรืนนี้|má-rʉʉn-níi|The day after tomorrow.|後天。
B|สัปดาห์หน้า|sàp-daa nâa|Next week.|下週。
B|ตรงเวลา|dtrong wee-laa|On time.|準時。
I|เราเริ่มก่อนเวลาได้ไหม|rao rôem gàwn wee-laa dâi mǎi|Can we start early?|我們可以提早開始嗎？
I|ฉันจะไปถึงประมาณบ่ายสาม|chǎn jà pai thʉ̌ng bprà-maan bàai-sǎam|I'll arrive around three p.m.|我大約下午三點到。
I|ขอเวลาอีกครึ่งชั่วโมง|khǎw wee-laa ìik khrʉ̂ng chûa-moong|I need another half hour.|我還需要半小時。
I|วันนั้นตรงกับวันหยุด|wan-nán dtrong gàp wan-yùt|That day falls on a holiday.|那天剛好是休假日。
I|เลื่อนนัดไปสัปดาห์หน้าได้ไหม|lʉ̂ean nát pai sàp-daa nâa dâi mǎi|Can we postpone the appointment until next week?|可以把約改到下週嗎？
I|ฉันมีเวลาแค่สิบห้านาที|chǎn mii wee-laa khâe sìp-hâa naa-thii|I only have fifteen minutes.|我只有十五分鐘。
I|กำหนดส่งคือสิ้นเดือน|gam-nòt sòng khʉʉ sîn-dʉan|The deadline is the end of the month.|期限是月底。
I|เราใช้เวลาน้อยกว่าที่คิด|rao chái wee-laa nói gwàa thîi khít|It took less time than expected.|花的時間比預想少。
I|ช่วงไหนสะดวกที่สุด|chûang nǎi sà-dùak thîi-sùt|When is most convenient?|哪個時段最方便？
I|ฉันจะยืนยันเวลาอีกครั้ง|chǎn jà yʉʉn-yan wee-laa ìik khráng|I'll confirm the time again.|我會再確認時間。
U|กำหนดการอาจเปลี่ยนตามสภาพอากาศ|gam-nòt-gaan àat bplìian dtaam sà-phâap aa-gàat|The schedule may change due to the weather.|行程可能因天氣而變動。
U|ถ้าไม่ทันวันนี้ เราควรแจ้งทุกคนก่อน|thâa mâi than wan-níi rao khuan jâeng thúk-khon gàwn|If we can't finish today, we should notify everyone first.|如果今天來不及，應先通知大家。
U|ฉันอยากเผื่อเวลาไว้สำหรับเรื่องที่คาดไม่ถึง|chǎn yàak phʉ̀ea wee-laa wái sǎm-ràp rʉ̂eang thîi khâat mâi thʉ̌ng|I'd like to leave time for the unexpected.|我想預留時間應付意外狀況。
U|เวลาที่เสนอทับซ้อนกับนัดเดิมของฉัน|wee-laa thîi sà-nǒe tháp-sáwn gàp nát doem khǎwng chǎn|The proposed time conflicts with my existing appointment.|提議的時間和我原本的約衝突。
U|เราควรตั้งเป้าหมายที่ทำได้ภายในเวลาที่มี|rao khuan dtâng bpâo-mǎai thîi tham dâi phaai-nai wee-laa thîi mii|We should set a goal achievable in the time available.|我們應設定在現有時間內做得到的目標。
U|ถ้าต้องเร่งงาน คุณภาพอาจได้รับผลกระทบ|thâa dtâwng rêng ngaan khun-ná-phâap àat dâi-ráp phǒn-grà-thóp|If we rush the work, quality may suffer.|趕工可能影響品質。
U|ขอให้กำหนดวันทบทวนความคืบหน้า|khǎw hâi gam-nòt wan thóp-thuan khwaam-khʉ̂p-nâa|Please set a date to review progress.|請訂一個檢視進度的日期。
U|เราอาจต้องแบ่งงานเป็นหลายช่วงเพื่อไม่ให้ล่าช้า|rao àat dtâwng bàeng ngaan bpen lǎai chûang phʉ̂ea mâi hâi lâa-cháa|We may need to split the work into stages to avoid delays.|可能得分階段做，才不會延誤。
U|เวลาของแต่ละคนมีข้อจำกัดไม่เหมือนกัน|wee-laa khǎwng dtàe-lá khon mii khâw-jam-gàt mâi mʉ̌ean gan|Everyone has different time constraints.|每個人的時間限制不同。
U|ฉันอยากให้ทุกฝ่ายตกลงเรื่องเวลาให้ตรงกัน|chǎn yàak hâi thúk fàai dtòk-long rʉ̂eang wee-laa hâi dtrong gan|I'd like everyone to agree on the timing.|我希望各方對時間安排達成共識。
`,
  education: `
B|ครูอยู่ไหน|khruu yùu nǎi|Where is the teacher?|老師在哪裡？
B|เปิดหนังสือ|bpòet nǎng-sʉ̌ʉ|Open the book.|打開書。
B|เขียนตรงนี้|khǐian dtrong-níi|Write here.|寫在這裡。
B|อ่านอีกครั้ง|àan ìik khráng|Read it again.|再讀一次。
I|ฉันอยากฝึกออกเสียงคำนี้|chǎn yàak fʉ̀k àwk-sǐiang kham níi|I'd like to practice pronouncing this word.|我想練習這個詞的發音。
I|ช่วยยกตัวอย่างในชีวิตจริง|chûai yók dtua-yàang nai chii-wít jing|Could you give a real-life example?|可以舉生活中的例子嗎？
I|บทเรียนวันนี้ยากกว่าที่คิด|bòt-riian wan-níi yâak gwàa thîi khít|Today's lesson was harder than expected.|今天的課比預想難。
I|ฉันอยากทบทวนเรื่องที่ยังไม่เข้าใจ|chǎn yàak thóp-thuan rʉ̂eang thîi yang mâi khâo-jai|I'd like to review what I don't understand.|我想複習還不懂的部分。
I|ขอคำแนะนำว่าจะเริ่มอ่านอะไรดี|khǎw kham-náe-nam wâa jà rôem àan à-rai dii|What would you suggest I read first?|請建議我先讀什麼。
I|ฉันจำคำศัพท์ได้แต่ยังใช้ไม่คล่อง|chǎn jam kham-sàp dâi dtàe yang chái mâi khlâwng|I remember the vocabulary but can't use it fluently yet.|我記得詞彙，但還不會熟練運用。
I|ช่วยแก้ประโยคนี้ให้เป็นธรรมชาติ|chûai gâe bprà-yòok níi hâi bpen tham-má-châat|Could you make this sentence sound natural?|能幫我把這句話改得更自然嗎？
I|ฉันต้องฝึกฟังสำเนียงหลายแบบ|chǎn dtâwng fʉ̀k fang sǎm-niiang lǎai bàep|I need to practice listening to different accents.|我需要練習聽不同口音。
I|มีเวลาถามหลังเลิกเรียนไหม|mii wee-laa thǎam lǎng lôek-riian mǎi|Is there time for questions after class?|下課後可以提問嗎？
I|ฉันจะจดคำใหม่ลงสมุด|chǎn jà jòt kham mài long sà-mùt|I'll write the new words in my notebook.|我會把新詞記在筆記本裡。
U|ฉันอยากฝึกอธิบายความคิดโดยไม่แปลในหัวก่อน|chǎn yàak fʉ̀k à-thí-baai khwaam-khít dooi mâi bplae nai hǔa gàwn|I'd like to explain ideas without translating in my head first.|我想練習不先在腦中翻譯就表達想法。
U|ฉันแยกใจความหลักออกจากรายละเอียดได้ยาก|chǎn yâek jai-khwaam làk àwk jàak raai-lá-ìiat dâi yâak|I struggle to separate the main point from details.|我很難分辨主旨與細節。
U|ช่วยบอกข้อผิดพลาดที่เกิดซ้ำบ่อยที่สุด|chûai bàwk khâw-phìt-phlâat thîi gə̀ət sám bɔ̀ɔi thîi-sùt|Please tell me which mistakes I repeat most often.|請指出我最常重複的錯誤。
U|ฉันต้องการข้อเสนอแนะที่นำไปปรับปรุงได้จริง|chǎn dtâwng-gaan khâw-sà-nǒe-náe thîi nam pai bpràp-bprung dâi jing|I'd like feedback I can act on.|我希望得到可以實際改進的回饋。
U|การพูดคล่องไม่ได้แปลว่าพูดถูกเสมอไป|gaan phûut khlâwng mâi dâi bplae wâa phûut thùuk sà-mə̌ə pai|Speaking fluently doesn't always mean speaking accurately.|說得流利不代表總是正確。
U|ฉันอยากเปรียบเทียบคำที่ความหมายใกล้กัน|chǎn yàak bprìiap-thîiap kham thîi khwaam-mǎai glâi gan|I'd like to compare words with similar meanings.|我想比較意思相近的詞。
U|เมื่อเจอคำที่ไม่รู้ ฉันพยายามเดาจากบริบท|mʉ̂ea joe kham thîi mâi rúu chǎn phá-yaa-yaam dao jàak baw-rí-bòt|When I meet an unknown word, I try to infer it from context.|遇到生詞時，我會試著從上下文推測。
U|ฉันอยากฝึกสรุปบทความด้วยคำของตัวเอง|chǎn yàak fʉ̀k sà-rùp bòt-khwaam dûai kham khǎwng dtua-eeng|I'd like to summarize articles in my own words.|我想練習用自己的話摘要文章。
U|ประโยคนี้เป็นภาษาพูดหรือภาษาเขียน|bprà-yòok níi bpen phaa-sǎa-phûut rʉ̌ʉ phaa-sǎa-khǐian|Is this sentence spoken or written language?|這句是口語還是書面語？
U|ฉันอยากรู้ว่าคำนี้เหมาะกับสถานการณ์แบบไหน|chǎn yàak rúu wâa kham níi mɔ̌ɔ gàp sà-thǎan-gaan bàep nǎi|In what situations is this word appropriate?|這個詞適合在哪些情境使用？
`,
  money: `
B|มีเงินทอนไหม|mii ngoen-thawn mǎi|Do you have change?|有零錢可以找嗎？
B|จ่ายคนละครึ่ง|jàai khon-lá khrʉ̂ng|Let's split it in half.|一人付一半。
B|ราคาลดแล้ว|raa-khaa lót láew|The price has been reduced.|已經降價了。
B|เงินไม่พอ|ngoen mâi phaw|I don't have enough money.|錢不夠。
I|ฉันตั้งงบไว้ไม่เกินพันบาท|chǎn dtâng ngóp wái mâi goen phan bàat|My budget is no more than a thousand baht.|我的預算不超過一千泰銖。
I|เดือนนี้มีค่าใช้จ่ายพิเศษ|dʉan-níi mii khâa-chái-jàai phí-sèet|I have extra expenses this month.|這個月有額外開銷。
I|ขอแบ่งจ่ายเป็นสองงวดได้ไหม|khǎw bàeng jàai bpen sǎawng ngûat dâi mǎi|Can I pay in two installments?|可以分兩期付嗎？
I|เงินโอนเข้าบัญชีแล้วหรือยัง|ngoen oon khâo ban-chii láew rʉ̌ʉ yang|Has the transfer reached the account yet?|匯款已入帳了嗎？
I|ฉันต้องกันเงินไว้จ่ายค่าเช่า|chǎn dtâwng gan ngoen wái jàai khâa-châo|I need to set money aside for rent.|我得留錢付房租。
I|ราคาเพิ่มขึ้นจากเดือนก่อน|raa-khaa phôem khʉ̂n jàak dʉan gàwn|The price rose from last month.|價格比上個月高。
I|ค่าใช้จ่ายนี้จำเป็นไหม|khâa-chái-jàai níi jam-bpen mǎi|Is this expense necessary?|這筆開支有必要嗎？
I|ช่วยคิดยอดรวมให้หน่อย|chûai khít yâwt-ruam hâi nòi|Could you calculate the total?|可以幫我算總額嗎？
I|ฉันอยากเปรียบเทียบราคาหลายร้าน|chǎn yàak bprìiap-thîiap raa-khaa lǎai ráan|I'd like to compare prices at several shops.|我想比較幾家店的價格。
I|เดือนหน้าต้องจ่ายค่าเช่าล่วงหน้า|dʉan-nâa dtâwng jàai khâa-châo lûang-nâa|I have to pay rent in advance next month.|下個月要預付房租。
U|เราควรคำนวณค่าใช้จ่ายทั้งหมดก่อนตกลง|rao khuan kham-nuan khâa-chái-jàai tháng-mòt gàwn dtòk-long|We should calculate the full cost before agreeing.|同意前應先算清全部費用。
U|ค่าใช้จ่ายที่ดูเล็กน้อยอาจสะสมเป็นจำนวนมาก|khâa-chái-jàai thîi duu lék-nói àat sà-sǒm bpen jam-nuan mâak|Small expenses can add up.|看似小額的開銷也可能累積成大筆金額。
U|ฉันอยากรู้ว่ามีค่าใช้จ่ายแฝงหรือไม่|chǎn yàak rúu wâa mii khâa-chái-jàai fǎeng rʉ̌ʉ mâi|I'd like to know whether there are hidden costs.|我想知道是否有隱藏費用。
U|งบประมาณนี้ต้องเผื่อความเสี่ยงเรื่องราคาที่เปลี่ยน|ngóp-bprà-maan níi dtâwng phʉ̀ea khwaam-sìiang rʉ̂eang raa-khaa thîi bplìian|This budget must allow for price changes.|這份預算得考慮價格變動風險。
U|เราควรแยกเงินส่วนตัวออกจากเงินของโครงการ|rao khuan yâek ngoen sùan-dtua àwk jàak ngoen khǎwng khroong-gaan|We should keep personal and project funds separate.|個人資金和專案資金應分開。
U|การจ่ายเป็นงวดอาจมีดอกเบี้ยเพิ่มเติม|gaan jàai bpen ngûat àat mii dàwk-bîia phôem-dtoem|Installment payments may include extra interest.|分期付款可能有額外利息。
U|ก่อนกู้เงิน ฉันอยากเข้าใจเงื่อนไขการชำระคืน|gàwn gûu ngoen chǎn yàak khâo-jai ngʉ̂an-khǎi gaan-cham-rá-khʉʉn|Before borrowing, I want to understand the repayment terms.|借錢前我想弄清還款條件。
U|รายรับไม่แน่นอน จึงต้องวางแผนอย่างระมัดระวัง|raai-ráp mâi nâe-nawn jʉng dtâwng waang-phǎen yàang rá-mát-rá-wang|My income is irregular, so I need to plan carefully.|收入不固定，所以得審慎規劃。
U|เราควรประเมินความคุ้มค่ามากกว่าดูแค่ราคา|rao khuan bprà-moən khwaam-khúm-khâa mâak gwàa duu khâe raa-khaa|We should judge value, not just price.|我們應評估整體價值，不能只看價格。
U|ขอให้ระบุข้อตกลงทางการเงินไว้ชัดเจน|khǎw hâi rá-bù khâw-dtòk-long thaang gaan-ngoen wái chát-jeen|Please put the financial agreement in clear terms.|請清楚寫下財務約定。
`,
  safety: `
B|ระวังรถ|rá-wang rót|Watch out for traffic.|小心車輛。
B|อย่าแตะ|yàa dtàe|Don't touch it.|別碰。
B|โทรหาตำรวจ|thoo hǎa dtam-rùat|Call the police.|打電話給警察。
B|ขอความช่วยเหลือ|khǎw khwaam-chûai-lʉ̌ea|Ask for help.|請求幫助。
I|ฉันไม่รู้สึกปลอดภัยที่นี่|chǎn mâi rúu-sʉ̀k bplàwt-phai thîi-nîi|I don't feel safe here.|我在這裡沒有安全感。
I|ทางหนีไฟอยู่ตรงไหน|thaang-nǐi-fai yùu dtrong nǎi|Where is the fire exit?|逃生出口在哪裡？
I|กระเป๋าของฉันหาย|grà-bpǎo khǎwng chǎn hǎai|My bag is missing.|我的包包不見了。
I|มีคนได้รับบาดเจ็บ|mii khon dâi-ráp bàat-jèp|Someone is injured.|有人受傷了。
I|ช่วยเรียกรถพยาบาล|chûai rîiak rót-phá-yaa-baan|Please call an ambulance.|請叫救護車。
I|ฉันต้องแจ้งของหายที่ไหน|chǎn dtâwng jâeng khǎwng hǎai thîi nǎi|Where do I report lost property?|遺失物品要去哪裡報案？
I|บริเวณนี้เดินคนเดียวตอนกลางคืนปลอดภัยไหม|baw-rí-ween níi doen khon diao dtawn glaang-khʉʉn bplàwt-phai mǎi|Is it safe to walk here alone at night?|這一帶晚上獨自行走安全嗎？
I|อย่าเปิดประตูให้คนแปลกหน้า|yàa bpòet bprà-dtuu hâi khon-bplàek-nâa|Don't open the door to strangers.|別替陌生人開門。
I|ช่วยอยู่เป็นเพื่อนจนกว่ารถจะมา|chûai yùu bpen phʉ̂ean jon-gwàa rót jà maa|Please stay with me until the car comes.|請陪我等到車來。
I|ฉันอยากไปในที่ที่มีคนมากกว่า|chǎn yàak pai nai thîi thîi mii khon mâak gwàa|I'd like to go somewhere with more people.|我想去人比較多的地方。
U|ถ้าเกิดเหตุฉุกเฉิน เราควรติดต่อใครก่อน|thâa gə̀ət hèet chùk-chəən rao khuan dtìt-dtàw khrai gàwn|Who should we contact first in an emergency?|發生緊急事件時應先聯絡誰？
U|ฉันขอให้เจ้าหน้าที่บันทึกเหตุการณ์นี้ไว้|chǎn khǎw hâi jâo-nâa-thîi ban-thʉ́k hèet-gaan níi wái|I'd like an official record of this incident.|我希望工作人員記錄這起事件。
U|ช่วยพาฉันไปยังสถานที่ที่ปลอดภัย|chûai phaa chǎn pai yang sà-thǎan-thîi thîi bplàwt-phai|Please take me somewhere safe.|請帶我去安全的地方。
U|หากพบสิ่งของต้องสงสัย อย่าเข้าไปใกล้|hàak phóp sìng-khǎwng dtâwng-sǒng-sǎi yàa khâo pai glâi|If you see a suspicious object, don't approach it.|發現可疑物品時不要靠近。
U|ฉันอยากทราบขั้นตอนแจ้งความอย่างเป็นทางการ|chǎn yàak sâap khân-dtawn jâeng-khwaam yàang bpen thaang-gaan|I'd like to know how to file a formal report.|我想了解正式報案程序。
U|เราควรซ้อมแผนอพยพก่อนเกิดเหตุจริง|rao khuan sáwm phǎen òp-phá-yóp gàwn gə̀ət hèet jing|We should practice an evacuation plan before an emergency.|應在真正出事前演練撤離計畫。
U|ข้อมูลตำแหน่งของฉันไม่ควรถูกเปิดเผยโดยไม่ได้รับอนุญาต|khâw-muun dtam-nàeng khǎwng chǎn mâi khuan thùuk bpòet-phǒei dooi mâi dâi-ráp à-nú-yâat|My location should not be shared without permission.|未經許可，不應公開我的位置。
U|ฉันต้องการล่ามเพื่ออธิบายเหตุการณ์ให้ถูกต้อง|chǎn dtâwng-gaan lâam phʉ̂ea à-thí-baai hèet-gaan hâi thùuk-dtâwng|I need an interpreter to explain what happened accurately.|我需要口譯員才能清楚說明事發經過。
U|หากเส้นทางนี้ถูกปิด มีจุดรวมพลที่ไหน|hàak sên-thaang níi thùuk bpìt mii jùt-ruam-phon thîi nǎi|If this route is closed, where is the assembly point?|這條路封閉時，集合地點在哪裡？
U|ช่วยยืนยันว่าผู้บาดเจ็บได้รับการดูแลแล้ว|chûai yʉʉn-yan wâa phûu-bàat-jèp dâi-ráp gaan-duu-lae láew|Please confirm the injured person is receiving care.|請確認傷者已獲得照顧。
`,
  community: `
B|มีห้องสมุดไหม|mii hâwng-sà-mùt mǎi|Is there a library?|這裡有圖書館嗎？
B|สวนอยู่ใกล้ไหม|sǔan yùu glâi mǎi|Is the park nearby?|公園近嗎？
B|ทิ้งขยะตรงไหน|thíng khà-yà dtrong nǎi|Where do I throw out the trash?|垃圾丟哪裡？
B|วันนี้มีตลาดไหม|wan-níi mii dtà-làat mǎi|Is there a market today?|今天有市集嗎？
I|ชุมชนนี้มีกิจกรรมอะไรบ้าง|chum-chon níi mii gìt-jà-gam à-rai bâang|What activities does this community have?|這個社區有哪些活動？
I|ฉันอยากเป็นอาสาสมัครในวันหยุด|chǎn yàak bpen aa-sǎa-sà-màk nai wan-yùt|I'd like to volunteer on my day off.|我想在假日做志工。
I|จุดรีไซเคิลอยู่ที่ไหน|jùt rii-sai-khəən yùu thîi nǎi|Where is the recycling point?|回收點在哪裡？
I|ถนนนี้มีไฟส่องสว่างไม่พอ|thà-nǒn níi mii fai sàwng-sà-wàang mâi phaw|This street is poorly lit.|這條街照明不足。
I|อยากเสนอเรื่องนี้ในการประชุมชุมชน|yàak sà-nǒe rʉ̂eang níi nai gaan-bprà-chum chum-chon|I'd like to raise this at the community meeting.|我想在社區會議提出這件事。
I|มีใครดูแลพื้นที่ส่วนกลาง|mii khrai duu-lae phʉ́ʉn-thîi sùan-glaang|Who looks after the common area?|公共空間由誰管理？
I|เราช่วยกันทำความสะอาดได้ไหม|rao chûai gan tham khwaam-sà-àat dâi mǎi|Can we clean up together?|我們可以一起打掃嗎？
I|ขอข้อมูลเส้นทางรถสาธารณะ|khǎw khâw-muun sên-thaang rót sǎa-thaa-rá-ná|Could I have information on public transport routes?|可以提供大眾運輸路線資訊嗎？
I|เสียงจากงานก่อสร้างดังมาก|sǐiang jàak ngaan-gàw-sâang dang mâak|The construction noise is very loud.|施工噪音很大。
I|ฉันอยากรู้กติกาการใช้สวน|chǎn yàak rúu gà-dtì-gaa gaan-chái sǔan|I'd like to know the park rules.|我想了解公園使用規則。
U|ก่อนเปลี่ยนการใช้พื้นที่ ควรรับฟังคนในชุมชน|gàwn bplìian gaan-chái phʉ́ʉn-thîi khuan ráp-fang khon nai chum-chon|Before changing use of the space, residents should be heard.|改變空間用途前應聽取居民意見。
U|การออกแบบทางเดินควรคำนึงถึงผู้สูงอายุด้วย|gaan-àwk-bàep thaang-doen khuan kham-nʉng thʉ̌ng phûu-sǔung-aa-yú dûai|Walkway design should consider older people too.|步道設計也應顧及長者。
U|ฉันอยากเห็นข้อมูลค่าใช้จ่ายของโครงการอย่างโปร่งใส|chǎn yàak hěn khâw-muun khâa-chái-jàai khǎwng khroong-gaan yàang bpròong-sǎi|I'd like transparent information on project spending.|我希望公開透明地了解專案支出。
U|เราจะทำให้คนที่ไม่มีอินเทอร์เน็ตได้รับข่าวสารอย่างไร|rao jà tham hâi khon thîi mâi mii in-thəə-nèt dâi-ráp khàao-sǎan yàang-rai|How will people without internet access get updates?|沒有網路的人要如何取得消息？
U|การแก้ปัญหาขยะต้องอาศัยความร่วมมือของทุกฝ่าย|gaan-gâe bpan-hǎa khà-yà dtâwng aa-sǎi khwaam-rûam-mʉʉ khǎwng thúk fàai|Solving waste problems requires everyone to cooperate.|解決垃圾問題需要各方合作。
U|ควรกำหนดช่องทางให้ผู้อยู่อาศัยส่งข้อเสนอแนะ|khuan gam-nòt châwng-thaang hâi phûu-yùu-aa-sǎi sòng khâw-sà-nǒe-náe|Residents should have a way to give feedback.|應設立居民提供意見的管道。
U|ฉันอยากให้มีกำหนดเวลาตอบกลับเรื่องร้องเรียน|chǎn yàak hâi mii gam-nòt wee-laa dtàwp-glàp rʉ̂eang-ráwng-riian|I'd like a time limit for responding to complaints.|我希望申訴有明確的回覆期限。
U|พื้นที่สาธารณะควรเอื้อต่อคนที่มีความต้องการต่างกัน|phʉ́ʉn-thîi sǎa-thaa-rá-ná khuan ʉ̂ea dtàw khon thîi mii khwaam-dtâwng-gaan dtàang gan|Public spaces should serve people with different needs.|公共空間應照顧不同需求的人。
U|ถ้าทดลองโครงการนี้ เราควรกำหนดวิธีวัดผล|thâa thót-lawng khroong-gaan níi rao khuan gam-nòt wí-thii wát-phǒn|If we pilot this project, we should decide how to measure results.|試行這項專案時應先定好成效指標。
U|การตัดสินใจควรตั้งอยู่บนข้อมูลที่ทุกคนเข้าถึงได้|gaan-dtàt-sǐn-jai khuan dtâng yùu bon khâw-muun thîi thúk-khon khâo-thʉ̌ng dâi|Decisions should be based on information everyone can access.|決策應根據人人可取得的資訊。
`,
  family: `
B|นี่คือแม่ของฉัน|nîi khʉʉ mâe khǎwng chǎn|This is my mother.|這是我媽媽。
B|ฉันมีพี่สาว|chǎn mii phîi-sǎao|I have an older sister.|我有一個姊姊。
B|เขาเป็นน้องชายของฉัน|khǎo bpen náwng-chaai khǎwng chǎn|He's my younger brother.|他是我弟弟。
B|ครอบครัวอยู่ที่ไหน|khrâwp-khrua yùu thîi nǎi|Where does your family live?|你的家人住在哪裡？
B|มีลูกไหม|mii lûuk mǎi|Do you have children?|有小孩嗎？
B|คิดถึงบ้าน|khít-thʉ̌ng bâan|I miss home.|我想家。
I|ฉันอยู่กับญาติช่วงนี้|chǎn yùu gàp yâat chûang-níi|I'm staying with relatives for now.|我最近住在親戚家。
I|เราเจอกันในวันหยุดบ่อย ๆ|rao joe gan nai wan-yùt bɔ̀ɔi bɔ̀ɔi|We often meet on days off.|我們常在休假日見面。
I|พ่อแม่ของคุณสบายดีไหม|phâw-mâe khǎwng khun sà-baai-dii mǎi|How are your parents?|你的父母還好嗎？
I|ฉันต้องไปรับลูกหลังเลิกเรียน|chǎn dtâwng pai ráp lûuk lǎng lôek-riian|I need to pick up my child after school.|我下課後得去接孩子。
I|คุณโตที่เมืองไหน|khun dtoo thîi mʉang nǎi|Which city did you grow up in?|你在哪個城市長大？
I|เราอยู่คนละจังหวัด|rao yùu khon-lá jang-wàt|We live in different provinces.|我們住在不同府。
I|ฉันจะโทรหายายคืนนี้|chǎn jà thoo hǎa yaai khʉʉn-níi|I'll call my grandmother tonight.|今晚我要打電話給外婆。
I|ครอบครัวเราชอบทำอาหารด้วยกัน|khrâwp-khrua rao châwp tham aa-hǎan dûai gan|Our family likes cooking together.|我們一家喜歡一起做飯。
I|ฉันต้องดูแลผู้สูงอายุที่บ้าน|chǎn dtâwng duu-lae phûu-sǔung-aa-yú thîi bâan|I care for an older family member at home.|我得照顧家中的長者。
I|เราแบ่งหน้าที่ดูแลเด็กกัน|rao bàeng nâa-thîi duu-lae dèk gan|We share childcare duties.|我們分擔照顧孩子的責任。
I|เขาเพิ่งย้ายมาอยู่ใกล้ครอบครัว|khǎo phêung yáai maa yùu glâi khrâwp-khrua|They recently moved closer to family.|他最近搬到家人附近。
I|ฉันอยากใช้เวลากับครอบครัวมากขึ้น|chǎn yàak chái wee-laa gàp khrâwp-khrua mâak khʉ̂n|I'd like to spend more time with family.|我想多陪陪家人。
U|การดูแลคนในครอบครัวควรแบ่งกันอย่างยุติธรรม|gaan-duu-lae khon nai khrâwp-khrua khuan bàeng gan yàang yút-dtì-tham|Family care should be shared fairly.|照顧家人的責任應公平分擔。
U|ฉันพยายามเคารพการตัดสินใจของคนในบ้าน|chǎn phá-yaa-yaam khao-róp gaan-dtàt-sǐn-jai khǎwng khon nai bâan|I try to respect decisions made by family members.|我試著尊重家人的決定。
U|เราอาจเห็นต่างเรื่องการเลี้ยงลูก แต่ยังคุยกันได้|rao àat hěn dtàang rʉ̂eang gaan-líiang-lûuk dtàe yang khui gan dâi|We may disagree about parenting, but we can discuss it.|我們對育兒可能意見不同，但仍能討論。
U|ญาติแต่ละคนมีบทบาทไม่เหมือนกันในครอบครัว|yâat dtàe-lá khon mii bòt-bàat mâi mʉ̌ean gan nai khrâwp-khrua|Relatives play different roles in a family.|每位親屬在家中扮演不同角色。
U|ฉันไม่อยากให้ใครรู้สึกว่าต้องรับภาระคนเดียว|chǎn mâi yàak hâi khrai rúu-sʉ̀k wâa dtâwng ráp phaa-rá khon diao|I don't want anyone to feel they carry the burden alone.|我不希望任何人覺得得獨自承擔。
U|เมื่ออยู่ไกลบ้าน การติดต่อสม่ำเสมอช่วยได้มาก|mʉ̂ea yùu glai bâan gaan-dtìt-dtàw sà-màm-sà-mə̌ə chûai dâi mâak|Staying in touch regularly helps when living far from home.|離家很遠時，定期聯絡很有幫助。
U|เราควรถามความต้องการของผู้สูงอายุก่อนตัดสินใจแทน|rao khuan thǎam khwaam-dtâwng-gaan khǎwng phûu-sǔung-aa-yú gàwn dtàt-sǐn-jai thaen|We should ask older people what they want before deciding for them.|替長者決定前應先問他們的意願。
U|ฉันอยากรักษาความสัมพันธ์แม้จะมีความขัดแย้ง|chǎn yàak rák-sǎa khwaam-sǎm-phan máe jà mii khwaam-khàt-yáeng|I want to preserve the relationship despite disagreements.|即使有衝突，我仍想維持關係。
U|การเปลี่ยนแปลงในครอบครัวอาจต้องใช้เวลาปรับตัว|gaan-bplìian-bplaeng nai khrâwp-khrua àat dtâwng chái wee-laa bpràp-dtua|Family changes may take time to adjust to.|家庭的變化可能需要時間適應。
U|ฉันอยากฟังทุกคนก่อนวางแผนเรื่องสำคัญ|chǎn yàak fang thúk-khon gàwn waang-phǎen rʉ̂eang sǎm-khan|I'd like to hear everyone before making major plans.|做重大規劃前我想先聽每個人的想法。
U|ขอบเขตส่วนตัวของสมาชิกแต่ละคนควรได้รับความเคารพ|khàwp-khèet sùan-dtua khǎwng sà-maa-chík dtàe-lá khon khuan dâi-ráp khwaam-khao-róp|Each family member's personal boundaries deserve respect.|每位家人的私人界線都應被尊重。
U|การอยู่ร่วมกันต้องอาศัยการสื่อสารอย่างเปิดใจ|gaan-yùu-rûam gan dtâwng aa-sǎi gaan-sʉ̀ʉ-sǎan yàang bpòet-jai|Living together requires open communication.|同住需要坦誠溝通。
`,
  weather: `
B|ฝนตก|fǒn dtòk|It's raining.|下雨了。
B|แดดแรง|dàet raeng|The sun is strong.|陽光很強。
B|อากาศร้อน|aa-gàat ráwn|It's hot.|天氣很熱。
B|ลมแรง|lom raeng|It's windy.|風很大。
B|ฟ้าครึ้ม|fáa khrʉ́m|The sky is overcast.|天空陰沉。
B|พกร่มด้วย|phók rôm dûai|Bring an umbrella.|記得帶傘。
I|ฝนจะตกช่วงบ่าย|fǒn jà dtòk chûang-bàai|It's going to rain this afternoon.|下午會下雨。
I|อากาศวันนี้ชื้นมาก|aa-gàat wan-níi chʉ́ʉn mâak|It's very humid today.|今天很潮濕。
I|พยากรณ์อากาศบอกว่าฝนจะหยุด|phá-yaa-gawn aa-gàat bàwk wâa fǒn jà yùt|The forecast says the rain will stop.|天氣預報說雨會停。
I|ถนนลื่นหลังฝนตก|thà-nǒn lʉ̂ʉn lǎng fǒn dtòk|The road is slippery after rain.|下雨後路很滑。
I|อากาศเย็นลงตอนกลางคืน|aa-gàat yen long dtawn glaang-khʉʉn|It gets cooler at night.|晚上天氣會變涼。
I|วันนี้มีฝุ่นเยอะไหม|wan-níi mii fùn yóe mǎi|Is there a lot of dust today?|今天空氣中的灰塵多嗎？
I|ฉันจะรอให้ฝนซาก่อน|chǎn jà raw hâi fǒn saa gàwn|I'll wait for the rain to ease.|我會等雨小一點再走。
I|ระดับน้ำในคลองสูงขึ้น|rá-dàp náam nai khlawng sǔung khʉ̂n|The water level in the canal has risen.|運河水位上升了。
I|พายุจะเข้าแถวนี้ไหม|phaa-yú jà khâo thǎew níi mǎi|Will the storm reach this area?|暴風雨會來這一帶嗎？
I|อากาศเปลี่ยนเร็วมาก|aa-gàat bplìian reo mâak|The weather changes quickly.|天氣變化很快。
I|วันนี้เหมาะกับการเดินเล่น|wan-níi mɔ̌ɔ gàp gaan-doen-lên|Today is good for a walk.|今天適合散步。
I|ช่วงนี้ฝนตกเกือบทุกวัน|chûang-níi fǒn dtòk gʉ̀eap thúk wan|It's been raining almost every day lately.|最近幾乎天天下雨。
U|ฝนตกหนักอาจทำให้การเดินทางล่าช้า|fǒn dtòk nàk àat tham hâi gaan-doen-thaang lâa-cháa|Heavy rain may delay travel.|豪雨可能造成交通延誤。
U|ควรตรวจประกาศเตือนก่อนออกเดินทาง|khuan dtrùat bprà-gàat dtʉʉan gàwn àwk doen-thaang|Check weather alerts before setting out.|出門前應查看天氣警報。
U|หากน้ำท่วมเส้นทางหลัก เราต้องหาทางอื่น|hàak náam-thûam sên-thaang làk rao dtâwng hǎa thaang ʉ̀ʉn|If the main route floods, we'll need another way.|主要道路淹水時，得找別的路。
U|อากาศร้อนจัดทำให้ทำงานกลางแจ้งลำบาก|aa-gàat ráwn jàt tham hâi tham-ngaan glaang-jâeng lam-bàak|Extreme heat makes outdoor work difficult.|酷熱使戶外工作很辛苦。
U|คุณภาพอากาศแย่ลงเมื่อมีควันจากไฟป่า|khun-ná-phâap aa-gàat yâe long mʉ̂ea mii khwan jàak fai-bpàa|Air quality worsens when there is wildfire smoke.|野火煙霧會讓空氣品質惡化。
U|แผนกิจกรรมควรมีทางเลือกเผื่อฝนตก|phǎen gìt-jà-gam khuan mii thaang-lʉ̂eak phʉ̀ea fǒn dtòk|The event plan should include a rainy-day alternative.|活動計畫應備有雨天方案。
U|สภาพอากาศไม่แน่นอน จึงควรเผื่อเวลา|sà-phâap aa-gàat mâi nâe-nawn jʉng khuan phʉ̀ea wee-laa|Weather is uncertain, so allow extra time.|天氣難預料，因此應多預留時間。
U|การตัดต้นไม้อาจทำให้พื้นที่ร้อนขึ้น|gaan-dtàt dtôn-máai àat tham hâi phʉ́ʉn-thîi ráwn khʉ̂n|Cutting trees may make the area hotter.|砍樹可能使這個區域更熱。
U|หากมีคำเตือนพายุ เราควรติดตามข้อมูลจากทางการ|hàak mii kham-dtʉʉan phaa-yú rao khuan dtìt-dtaam khâw-muun jàak thaang-gaan|If there's a storm warning, we should follow official updates.|若有暴風警報，應追蹤官方資訊。
U|ฤดูฝนอาจส่งผลต่อการเก็บเกี่ยวของเกษตรกร|rʉ́-duu fǒn àat sòng-phǒn dtàw gaan-gèp-gìao khǎwng gà-sèt-dtrà-gawn|The rainy season may affect farmers' harvests.|雨季可能影響農民收成。
U|เราควรเตรียมน้ำดื่มให้เพียงพอในวันที่ร้อนจัด|rao khuan dtriiam náam-dʉ̀ʉm hâi phiiang-phaw nai wan thîi ráwn jàt|We should prepare enough drinking water on very hot days.|酷熱天應準備足夠飲水。
U|ฝนที่ตกไม่สม่ำเสมอทำให้วางแผนเพาะปลูกยาก|fǒn thîi dtòk mâi sà-màm-sà-mə̌ə tham hâi waang-phǎen phaw-bplùuk yâak|Irregular rainfall makes planting plans difficult.|降雨不規律使耕作規劃困難。
`,
  emotions: `
B|ดีใจมาก|dii-jai mâak|I'm very happy.|我很開心。
B|เสียใจ|sǐia-jai|I'm sorry / sad.|我很難過。
B|กังวลนิดหน่อย|gang-won nít nòi|I'm a little worried.|我有點擔心。
B|ตื่นเต้น|dtʉ̀ʉn-dtên|I'm excited.|我很興奮。
B|เหนื่อยแล้ว|nʉ̀eai láew|I'm tired now.|我累了。
B|ใจเย็น ๆ|jai-yen yen|Take it easy.|冷靜一點。
I|ฉันรู้สึกโล่งใจขึ้น|chǎn rúu-sʉ̀k lôong-jai khʉ̂n|I feel relieved now.|我現在比較放心了。
I|ฉันเครียดเรื่องงาน|chǎn khrîiat rʉ̂eang ngaan|I'm stressed about work.|我因工作感到壓力。
I|วันนี้ฉันไม่มีสมาธิ|wan-níi chǎn mâi mii sà-maa-thí|I can't concentrate today.|我今天無法專心。
I|ขออยู่คนเดียวสักพัก|khǎw yùu khon diao sàk phák|I'd like some time alone.|我想獨處一下。
I|ฉันรู้สึกภูมิใจในตัวเอง|chǎn rúu-sʉ̀k phuum-jai nai dtua-eeng|I feel proud of myself.|我為自己感到驕傲。
I|ฉันผิดหวังแต่จะลองใหม่|chǎn phìt-wǎng dtàe jà lawng mài|I'm disappointed, but I'll try again.|我很失望，但會再試一次。
I|ฉันอยากคุยกับใครสักคน|chǎn yàak khui gàp khrai sàk khon|I'd like to talk to someone.|我想找人聊聊。
I|ขอบคุณที่อยู่เป็นเพื่อน|khàwp-khun thîi yùu bpen phʉ̂ean|Thank you for keeping me company.|謝謝你陪伴我。
I|เรื่องนี้ทำให้ฉันอึดอัด|rʉ̂eang níi tham hâi chǎn ʉ̀t-àt|This makes me uncomfortable.|這件事讓我不自在。
I|ฉันยังไม่พร้อมพูดเรื่องนี้|chǎn yang mâi phráwm phûut rʉ̂eang níi|I'm not ready to talk about this yet.|我還沒準備好談這件事。
I|ฉันต้องพักผ่อนให้มากขึ้น|chǎn dtâwng phák-phàwn hâi mâak khʉ̂n|I need more rest.|我需要多休息。
I|คุณอยากให้ฉันช่วยอย่างไร|khun yàak hâi chǎn chûai yàang-rai|How would you like me to help?|你希望我怎麼幫你？
U|ฉันรู้สึกสับสนเพราะได้ยินข้อมูลไม่ตรงกัน|chǎn rúu-sʉ̀k sàp-sǒn phráw dâi-yin khâw-muun mâi dtrong gan|I'm confused because I've heard conflicting information.|我聽到互相矛盾的資訊，感到困惑。
U|ฉันขอเวลาเรียบเรียงความรู้สึกก่อนตอบ|chǎn khǎw wee-laa rîiap-riiang khwaam-rúu-sʉ̀k gàwn dtàwp|I need time to sort out my feelings before answering.|回答前我需要時間整理感受。
U|แม้จะกังวล ฉันก็อยากลองทำสิ่งนี้|máe jà gang-won chǎn gɔ̂ɔ yàak lawng tham sìng níi|Although I'm nervous, I still want to try this.|雖然擔心，我仍想試試看。
U|ความกดดันสะสมทำให้ฉันพักผ่อนไม่พอ|khwaam-gòt-dan sà-sǒm tham hâi chǎn phák-phàwn mâi phaw|Accumulated pressure is affecting my rest.|累積的壓力讓我休息不足。
U|ฉันอยากบอกความรู้สึกโดยไม่โทษใคร|chǎn yàak bàwk khwaam-rúu-sʉ̀k dooi mâi thôot khrai|I want to express my feelings without blaming anyone.|我想表達感受，而不責怪任何人。
U|การได้พักสักช่วงช่วยให้ฉันคิดชัดขึ้น|gaan dâi phák sàk chûang chûai hâi chǎn khít chát khʉ̂n|Taking a break helps me think more clearly.|休息一會兒能讓我想得更清楚。
U|ฉันรู้สึกขอบคุณที่คุณให้พื้นที่กับฉัน|chǎn rúu-sʉ̀k khàwp-khun thîi khun hâi phʉ́ʉn-thîi gàp chǎn|I appreciate you giving me space.|謝謝你給我空間。
U|ฉันไม่อยากตัดสินใจตอนกำลังโกรธ|chǎn mâi yàak dtàt-sǐn-jai dtawn gam-lang gròot|I don't want to decide while I'm angry.|我不想在生氣時做決定。
U|ถ้าคุณไม่สะดวกเล่า ฉันจะไม่กดดัน|thâa khun mâi sà-dùak lâo chǎn jà mâi gòt-dan|If you don't want to share, I won't pressure you.|若你不方便說，我不會施壓。
U|ฉันอยากเรียนรู้วิธีรับมือกับความไม่แน่นอน|chǎn yàak riian-rúu wí-thii ráp-mʉʉ gàp khwaam-mâi-nâe-nawn|I want to learn how to cope with uncertainty.|我想學會面對不確定性。
U|ความรู้สึกสองอย่างอาจเกิดขึ้นพร้อมกันได้|khwaam-rúu-sʉ̀k sǎawng yàang àat gə̀ət khʉ̂n phráwm gan dâi|Two different feelings can exist at the same time.|兩種感受可以同時存在。
U|ฉันต้องการการสนับสนุนมากกว่าคำแนะนำตอนนี้|chǎn dtâwng-gaan gaan-sà-nàp-sà-nǔn mâak gwàa kham-náe-nam dtawn-níi|Right now, I need support more than advice.|我現在更需要支持，不是建議。
`,
  media: `
B|ดูข่าว|duu khàao|Watch the news.|看新聞。
B|ฟังวิทยุ|fang wít-thá-yú|Listen to the radio.|聽廣播。
B|อ่านบทความ|àan bòt-khwaam|Read an article.|讀文章。
B|มีข่าวใหม่ไหม|mii khàao mài mǎi|Is there any new information?|有新消息嗎？
B|ส่งลิงก์ให้หน่อย|sòng ling hâi nòi|Please send me the link.|請傳連結給我。
B|เรื่องนี้จริงไหม|rʉ̂eang níi jing mǎi|Is this true?|這是真的嗎？
I|ข่าวนี้มาจากแหล่งไหน|khàao níi maa jàak làeng nǎi|What is the source of this news?|這則新聞的來源是什麼？
I|ฉันยังไม่ได้อ่านรายละเอียด|chǎn yang mâi dâi àan raai-lá-ìiat|I haven't read the details yet.|我還沒讀詳細內容。
I|หัวข่าวอาจทำให้เข้าใจผิด|hǔa-khàao àat tham hâi khâo-jai phìt|The headline may be misleading.|標題可能讓人誤解。
I|มีใครยืนยันข้อมูลนี้หรือยัง|mii khrai yʉʉn-yan khâw-muun níi rʉ̌ʉ yang|Has anyone confirmed this information?|有人查證這項資訊了嗎？
I|ฉันอยากดูวันที่เผยแพร่ข่าว|chǎn yàak duu wan thîi phǒei-phráe khàao|I want to check when the news was published.|我想查這則新聞的發布日期。
I|บทความนี้แยกข่าวกับความเห็นไหม|bòt-khwaam níi yâek khàao gàp khwaam-hěn mǎi|Does this article separate reporting from opinion?|這篇文章有區分新聞和評論嗎？
I|ช่วยสรุปประเด็นสำคัญให้หน่อย|chûai sà-rùp bprà-den sǎm-khan hâi nòi|Could you summarize the main points?|可以幫我摘要重點嗎？
I|ตัวเลขนี้หมายถึงช่วงเวลาไหน|dtua-lêek níi mǎai-thʉ̌ng chûang-wee-laa nǎi|What time period does this figure cover?|這個數字指的是哪段時間？
I|ฉันอยากเปรียบเทียบหลายแหล่งข่าว|chǎn yàak bprìiap-thîiap lǎai làeng-khàao|I'd like to compare several news sources.|我想比較不同新聞來源。
I|เรื่องนี้ยังมีข้อมูลไม่ครบ|rʉ̂eang níi yang mii khâw-muun mâi khróp|The information on this is still incomplete.|這件事的資訊還不完整。
I|ฉันไม่อยากแชร์ก่อนตรวจสอบ|chǎn mâi yàak chae gàwn dtrùat-sàwp|I don't want to share it before checking.|查證前我不想轉傳。
I|ขออ่านต้นฉบับก่อนแสดงความคิดเห็น|khǎw àan dtôn-chà-bàp gàwn sà-daeng khwaam-khít-hěn|Let me read the original before commenting.|讓我先讀原文再評論。
U|แหล่งข้อมูลนี้มีหลักฐานรองรับข้อกล่าวอ้างหรือไม่|làeng khâw-muun níi mii làk-thǎan rawng-ráp khâw-glàao-âang rʉ̌ʉ mâi|Does this source provide evidence for its claims?|這個來源有證據支持其主張嗎？
U|การเลือกเฉพาะตัวเลขบางชุดอาจทำให้เข้าใจผิด|gaan-lʉ̂eak chà-pháw dtua-lêek baang chút àat tham hâi khâo-jai phìt|Choosing only certain numbers can mislead people.|只挑部分數字可能造成誤解。
U|ฉันอยากรู้ว่าใครเป็นผู้ให้ทุนการศึกษานี้|chǎn yàak rúu wâa khrai bpen phûu hâi thun gaan-sʉ̀k-sǎa níi|I'd like to know who funded this study.|我想知道這項研究由誰資助。
U|ข้อเท็จจริงกับการตีความควรแยกให้ชัด|khâw-thét-jing gàp gaan-dtii-khwaam khuan yâek hâi chát|Facts and interpretation should be clearly distinguished.|事實與詮釋應清楚區分。
U|ข้อความที่ตัดจากบริบทอาจเปลี่ยนความหมาย|khâw-khwaam thîi dtàt jàak baw-rí-bòt àat bplìian khwaam-mǎai|A quote taken out of context may change meaning.|斷章取義可能改變原意。
U|ฉันยังไม่เห็นหลักฐานเพียงพอที่จะเชื่อข้อสรุปนั้น|chǎn yang mâi hěn làk-thǎan phiiang-phaw thîi jà chʉ̂ea khâw-sà-rùp nán|I haven't seen enough evidence to accept that conclusion.|我還沒看到足夠證據相信那個結論。
U|ข่าวที่อัปเดตภายหลังอาจแก้ข้อมูลเดิม|khàao thîi áp-dèet phaai-lǎng àat gâe khâw-muun doem|Later updates to a story may correct earlier information.|後續更新的報導可能更正原先資訊。
U|เราควรดูว่าข้อมูลนี้เป็นปัจจุบันหรือไม่|rao khuan duu wâa khâw-muun níi bpen bpàt-jù-ban rʉ̌ʉ mâi|We should check whether this information is current.|我們應確認這項資訊是否仍然最新。
U|การรายงานที่รอบด้านควรรับฟังผู้ได้รับผลกระทบ|gaan-raai-ngaan thîi râwp-dâan khuan ráp-fang phûu dâi-ráp phǒn-grà-thóp|Balanced reporting should include those affected.|全面的報導應聽取受影響者的聲音。
U|ถ้าข้อมูลขัดแย้งกัน ฉันจะชะลอการสรุป|thâa khâw-muun khàt-yáeng gan chǎn jà chá-law gaan-sà-rùp|If information conflicts, I'll hold off on conclusions.|資訊矛盾時，我會暫緩下結論。
U|บทความนี้ระบุข้อจำกัดของข้อมูลไว้หรือเปล่า|bòt-khwaam níi rá-bù khâw-jam-gàt khǎwng khâw-muun wái rʉ̌ʉ bplào|Does this article state the data's limitations?|這篇文章有說明資料的限制嗎？
U|ฉันอยากตรวจว่าภาพนี้มาจากเหตุการณ์เดียวกันไหม|chǎn yàak dtrùat wâa phâap níi maa jàak hèet-gaan diao gan mǎi|I want to check whether this image is from the same event.|我想查這張圖片是否來自同一事件。
`,
};

Object.entries(THAI_MORE).forEach(([topic, text]) => {
  text
    .trim()
    .split('\n')
    .forEach((line, index) => {
      const fields = line.trim().split('|');
      if (![5, 6].includes(fields.length) || fields.slice(0, 5).some((field) => !field.trim())) {
        throw new Error(`Invalid additional Thai card: ${topic} #${index + 1}`);
      }
      const [code, term, reading, en, zh, breakdown = ''] = fields;
      const level = { B: 'beginner', I: 'intermediate', U: 'upper' }[code];
      if (!level) throw new Error(`Invalid additional Thai level: ${topic} #${index + 1}`);
      window.SEED_CARDS.push({
        id: `th-more-${topic}-${index + 1}`,
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

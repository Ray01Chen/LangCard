// Authoring input for catalog generation; not loaded by the website.
// English/Chinese → Thai vocabulary. Add one row per word:
// B/I/U | Thai word | English meaning | Traditional Chinese meaning | optional reading
// B = beginner, I = intermediate, U = upper intermediate.
// Keep meanings short and specific. Existing readings come from data-th-readings.js;
// for a new word, add the optional fifth field so the reading appears immediately.
const THAI_WORDS = {
  greetings: `
B|ชื่อ|name|名字
B|นามสกุล|surname|姓氏
I|แนะนำ|introduce; recommend|介紹；推薦
I|ทักทาย|greet|打招呼
I|คุ้นเคย|familiar|熟悉的
I|สุภาพ|polite|有禮貌的
I|กันเอง|informal; friendly|親切的；不拘束的
I|สนทนา|converse|交談
I|ต้อนรับ|welcome (verb)|歡迎
I|แขก|guest|客人
I|เจ้าของ|owner; host|主人；擁有者
I|โอกาส|opportunity|機會
I|นัดหมาย|appointment|約定；預約
I|บังเอิญ|by chance|碰巧
U|ความประทับใจ|impression|印象
U|ความจริงใจ|sincerity|真誠
U|ความเกรงใจ|consideration for others|體諒；顧及他人
U|การติดต่อ|contact; communication|聯絡
U|ความนอบน้อม|deference; respect|恭敬
U|ความเป็นมิตร|friendliness|友善
U|การแนะนำตัว|self-introduction|自我介紹
`,
  food: `
B|ผัก|vegetable|蔬菜
B|เนื้อ|meat|肉
B|ผลไม้|fruit|水果
I|วัตถุดิบ|ingredient|食材
I|ส่วนผสม|ingredient; mixture|配料；混合物
I|เครื่องปรุง|seasoning|調味料
I|รสชาติ|flavour|味道
I|หวาน|sweet|甜的
I|เปรี้ยว|sour|酸的
I|เค็ม|salty|鹹的
I|ขม|bitter|苦的
I|มัน|rich; oily|油膩的
I|สด|fresh|新鮮的
I|สุก|cooked; ripe|熟的
I|ดิบ|raw|生的
I|แพ้อาหาร|food allergy|食物過敏
I|มังสวิรัติ|vegetarian|素食的
I|ต้ม|boil|煮；燙
I|ทอด|fry|油炸
I|ย่าง|grill|烤
U|โภชนาการ|nutrition|營養
U|สารอาหาร|nutrient|營養素
U|ความสะอาด|cleanliness|衛生；清潔
U|การย่อย|digestion|消化
U|อาหารทะเล|seafood|海鮮
U|สารกันบูด|preservative|防腐劑
U|การปรุงอาหาร|cooking; food preparation|烹調
`,
  travel: `
B|ถนน|road|道路
B|สะพาน|bridge|橋
I|ทางแยก|intersection|交叉路口
I|ทางม้าลาย|pedestrian crossing|斑馬線
I|ทางเท้า|pavement; sidewalk|人行道
I|ป้าย|sign; stop|標誌；站牌
I|เส้นทาง|route|路線
I|ปลายทาง|destination|目的地
I|จุดหมาย|destination; goal|目的地；目標
I|การจราจร|traffic|交通
I|ค่าโดยสาร|fare|車資
I|ตั๋ว|ticket|票
I|สัมภาระ|luggage|行李
I|วีซ่า|visa|簽證
I|ด่านตรวจ|checkpoint|檢查站
I|ที่พัก|accommodation|住宿
U|การเดินทาง|journey; travel|旅程；旅行
U|การขนส่ง|transportation|運輸
U|ระบบขนส่ง|transport system|運輸系統
U|ความล่าช้า|delay|延誤
U|การยกเลิก|cancellation|取消
U|ข้อจำกัด|restriction|限制
U|การจองล่วงหน้า|advance booking|提前預訂
U|การต่อเครื่อง|connecting flight|轉機
U|ความแออัด|congestion; crowding|擁擠
`,
  daily: `
B|กุญแจ|key|鑰匙
B|โทรศัพท์|telephone|電話
I|กระเป๋า|bag|包包
I|กระเป๋าสตางค์|wallet|錢包
I|ร่ม|umbrella|雨傘
I|แก้ว|glass; cup|玻璃杯；杯子
I|จาน|plate|盤子
I|ช้อน|spoon|湯匙
I|ส้อม|fork|叉子
I|ผ้าเช็ดตัว|towel|毛巾
I|สบู่|soap|肥皂
I|แปรงสีฟัน|toothbrush|牙刷
I|เสื้อผ้า|clothes|衣服
I|ซัก|wash clothes|洗衣服
I|ล้าง|wash; rinse|清洗
I|เก็บ|put away; collect|收拾；收集
I|ทิ้ง|throw away|丟棄
I|หยิบ|pick up|拿起
I|วาง|put down; place|放下
U|กิจวัตร|routine|日常作息
U|ความสะดวก|convenience|便利
U|การจัดการ|management|管理；處理
U|ความเคยชิน|habit; familiarity|習慣
U|ความเรียบร้อย|tidiness; orderliness|整齊
`,
  social: `
B|เพื่อน|friend|朋友
I|เพื่อนร่วมงาน|colleague|同事
I|คนรู้จัก|acquaintance|認識的人
I|เพื่อนบ้าน|neighbour|鄰居
I|งานเลี้ยง|party; reception|聚會；宴會
I|คำเชิญ|invitation|邀請
I|เชิญ|invite|邀請
I|เข้าร่วม|participate|參加
I|ชวน|invite; suggest|邀請；約
I|นัด|arrange to meet|約見
I|พบ|meet|見面
I|เยี่ยม|visit|拜訪
I|แบ่งปัน|share|分享
I|ไว้ใจ|trust|信任
I|สนิท|close (relationship)|親密的
I|ขัดแย้ง|conflict|衝突
U|เครือข่าย|network|人脈；網絡
U|ความไว้วางใจ|trust (noun)|信任
U|ความร่วมมือ|cooperation|合作
U|ความเข้าใจผิด|misunderstanding|誤解
U|การประสานสัมพันธ์|building connections|維繫關係
U|ความขัดแย้ง|conflict|衝突
`,
  shopping: `
B|ราคา|price|價格
I|ส่วนลด|discount|折扣
I|ใบเสร็จ|receipt|收據
I|เงินทอน|change (money)|找零
I|ขนาด|size|尺寸
I|สี|colour|顏色
I|คุณภาพ|quality|品質
I|ยี่ห้อ|brand|品牌
I|สินค้า|goods; product|商品
I|ตัวอย่าง|sample; example|樣品；例子
I|รับประกัน|guarantee|保固；保證
I|คืนสินค้า|return goods|退貨
I|เปลี่ยนสินค้า|exchange goods|換貨
I|หมด|sold out; gone|售罄；用完
I|ลดราคา|reduce price; on sale|降價；特價
I|เปรียบเทียบ|compare|比較
I|คุ้มค่า|good value|划算
U|ข้อเสนอ|offer; proposal|優惠；提案
U|เงื่อนไข|terms; conditions|條件
U|นโยบายคืนเงิน|refund policy|退款政策
U|ผู้บริโภค|consumer|消費者
U|สิทธิผู้บริโภค|consumer rights|消費者權益
U|การรับประกัน|warranty|保固
`,
  housing: `
B|บ้าน|house; home|房子；家
I|อพาร์ตเมนต์|apartment|公寓
I|ห้องเช่า|rented room|出租房間
I|เจ้าของบ้าน|landlord; homeowner|房東；屋主
I|ผู้เช่า|tenant|房客
I|ค่าน้ำ|water bill|水費
I|ค่าไฟ|electricity bill|電費
I|เพื่อนร่วมห้อง|roommate|室友
I|เครื่องใช้ไฟฟ้า|appliance|電器
I|เฟอร์นิเจอร์|furniture|家具
I|ซ่อมแซม|repair|修理
I|ย้ายบ้าน|move house|搬家
U|พื้นที่ส่วนกลาง|shared area|公共空間
U|การบำรุงรักษา|maintenance|維護
U|ข้อบังคับ|regulation|規定
U|ความเป็นส่วนตัว|privacy|隱私
U|สัญญา|contract|契約
U|ความชำรุด|damage; defect|損壞；瑕疵
`,
  work: `
B|งาน|work; job|工作
I|บริษัท|company|公司
I|แผนก|department|部門
I|ตำแหน่ง|position|職位
I|หัวหน้า|supervisor|主管
I|ลูกค้า|client; customer|客戶
I|รายงาน|report|報告
I|โครงการ|project|專案
I|แผนงาน|work plan|工作計畫
I|กำหนดส่ง|deadline|截止日期
I|ประสานงาน|coordinate|協調工作
I|มอบหมาย|assign|指派
I|ปรับปรุง|improve|改進
I|ผลงาน|performance; work|工作成果
U|ประสิทธิภาพ|efficiency|效率
U|ประสิทธิผล|effectiveness|成效
U|การประเมิน|evaluation|評估
U|ความรับผิดชอบ|responsibility|責任
U|การเจรจา|negotiation|協商
U|กลยุทธ์|strategy|策略
U|ทรัพยากร|resources|資源
U|การมอบหมายงาน|task assignment|工作分派
U|การตัดสินใจ|decision making|決策
U|ความก้าวหน้า|progress; advancement|進展；晉升
`,
  health: `
B|ยา|medicine|藥
B|หมอ|doctor|醫生
I|พยาบาล|nurse|護理師
I|คลินิก|clinic|診所
I|อาการ|symptom|症狀
I|ไข้|fever|發燒
I|ไอ|cough|咳嗽
I|อักเสบ|inflamed|發炎
I|ใบสั่งยา|prescription|處方箋
I|ตรวจ|examine; test|檢查
I|รักษา|treat; heal|治療
I|ฟื้นตัว|recover|康復
U|การวินิจฉัย|diagnosis|診斷
U|ภูมิคุ้มกัน|immunity|免疫力
U|โรคประจำตัว|chronic condition|慢性病；既有疾病
U|การป้องกัน|prevention|預防
U|การติดเชื้อ|infection|感染
U|ภาวะแทรกซ้อน|complication|併發症
U|อาการแพ้|allergic reaction|過敏反應
`,
  services: `
B|ธนาคาร|bank|銀行
I|บัญชี|account|帳戶
I|เลขบัญชี|account number|帳號
I|บัตรประชาชน|identity card|身分證
I|แบบฟอร์ม|form|表格
I|ลายเซ็น|signature|簽名
I|สำเนา|copy|副本；影本
I|ใบรับรอง|certificate|證明書
I|สมัคร|apply; register|申請；報名
I|ยืนยัน|confirm|確認
I|ฝากเงิน|deposit money|存款
U|ขั้นตอน|procedure|程序；步驟
U|การอนุมัติ|approval|核准
U|การยืนยันตัวตน|identity verification|身分驗證
U|ข้อกำหนด|requirement|要求；規定
U|หน่วยงาน|agency; department|機關；單位
U|การลงทะเบียน|registration|登記
U|การต่ออายุ|renewal|續期
`,
  opinions: `
B|คิด|think|想；認為
I|เชื่อ|believe|相信
I|สงสัย|doubt; wonder|懷疑；納悶
I|คาดว่า|expect; assume|預期；推測
I|เหตุผล|reason|理由
I|ความคิดเห็น|opinion|意見
I|ข้อดี|advantage|優點
I|ข้อเสีย|disadvantage|缺點
I|ตัวเลือก|option|選項
I|ตัดสินใจ|decide|決定
I|พิจารณา|consider|考慮
I|สรุป|summarize|總結
U|ข้อสันนิษฐาน|assumption|假設
U|ข้อโต้แย้ง|counterargument|反駁論點
U|ความน่าเชื่อถือ|credibility|可信度
U|อคติ|bias|偏見
U|การตีความ|interpretation|詮釋
U|ข้อสรุป|conclusion|結論
U|เหตุผลสนับสนุน|supporting reason|支持理由
U|ความสมเหตุสมผล|reasonableness|合理性
U|ข้อยกเว้น|exception|例外
`,
  problems: `
B|ปัญหา|problem|問題
I|สาเหตุ|cause|原因
I|ความผิดพลาด|mistake; error|錯誤
I|ข้อผิดพลาด|error; flaw|錯誤；缺陷
I|อุปสรรค|obstacle|障礙
I|ความเสี่ยง|risk|風險
I|แก้ไข|fix; revise|修正；解決
I|ป้องกัน|prevent|預防
I|หลีกเลี่ยง|avoid|避免
I|ตรวจสอบ|check; verify|檢查；核對
I|แจ้ง|notify|通知
I|ร้องเรียน|complain|投訴
I|คืนเงิน|refund|退款
I|ชดเชย|compensate|補償
U|แนวทางแก้ไข|solution approach|解決方法
U|การแก้ปัญหา|problem solving|解決問題
U|ความเสียหาย|damage|損害
U|ความขัดข้อง|malfunction|故障
U|ความล้มเหลว|failure|失敗
U|การรับมือ|coping; handling|應對
U|ความบกพร่อง|deficiency; fault|缺失
U|การติดตามผล|follow-up|後續追蹤
`,
  culture: `
B|วัด|temple|寺廟
I|วัฒนธรรม|culture|文化
I|พิธี|ceremony|儀式
I|ศาสนา|religion|宗教
I|เคารพ|respect|尊重
I|แต่งกาย|dress|穿著
I|ธรรมเนียม|custom|習俗
I|ท้องถิ่น|local|當地的
I|เอกลักษณ์|distinctive identity|特色；獨特性
U|มรดก|heritage|遺產
U|ความหลากหลาย|diversity|多樣性
U|ความแตกต่าง|difference|差異
U|บริบท|context|背景；脈絡
U|การปรับตัว|adaptation|適應
U|ค่านิยม|values|價值觀
U|อัตลักษณ์|identity|身分認同；特性
U|การสืบทอด|passing down|傳承
`,
  technology: `
I|เว็บไซต์|website|網站
I|แอป|app|應用程式
I|บัญชีผู้ใช้|user account|使用者帳號
I|อีเมล|email|電子郵件
I|ข้อความ|message; text|訊息；文字
I|ข้อมูล|data; information|資料
I|ไฟล์|file|檔案
I|อัปโหลด|upload|上傳
I|ตั้งค่า|configure; set|設定
I|เชื่อมต่อ|connect|連線
I|สัญญาณ|signal|訊號
I|หน้าจอ|screen|螢幕
I|แบตเตอรี่|battery|電池
U|ความปลอดภัยไซเบอร์|cybersecurity|網路安全
U|ปัญญาประดิษฐ์|artificial intelligence|人工智慧
U|ระบบอัตโนมัติ|automation|自動化系統
U|การเข้ารหัส|encryption|加密
U|การอัปเดต|update|更新
U|การสำรองข้อมูล|data backup|資料備份
U|สิทธิการเข้าถึง|access permission|存取權限
U|ความเข้ากันได้|compatibility|相容性
`,
  patterns: `
B|ถ้า|if|如果
B|เพราะ|because|因為
I|แม้ว่า|although|雖然
I|นอกจากนี้|furthermore|此外
I|เพื่อ|in order to|為了
I|โดย|by; through|透過；由
I|ระหว่าง|between; during|之間；期間
I|ก่อน|before|之前
I|หลัง|after|之後
I|จนกว่า|until|直到
I|แทนที่|replace; instead of|取代；代替
U|ในกรณีที่|in the event that|萬一；在……情況下
U|ตราบใดที่|as long as|只要
U|ยกเว้น|except|除了
U|ตรงกันข้าม|on the contrary|相反地
U|โดยเฉพาะ|especially|尤其
U|โดยทั่วไป|generally|一般而言
U|กล่าวคือ|that is to say|也就是說
U|มิฉะนั้น|otherwise|否則
U|ในขณะเดียวกัน|meanwhile|同時
`,
  time: `
B|เช้า|morning|早上
B|เย็น|evening|傍晚
I|เที่ยง|noon|中午
I|เที่ยงคืน|midnight|午夜
I|สัปดาห์|week|週
I|เดือน|month|月
I|ปี|year|年
I|มะรืน|the day after tomorrow|後天
I|ล่วงหน้า|in advance|事先
I|กำหนดการ|schedule|時間表；行程
I|ระยะเวลา|duration|期間
I|ช่วงเวลา|period of time|時段
I|เลื่อน|postpone; move|延後；挪動
I|เปลี่ยนแปลง|change|改變
U|ความเร่งด่วน|urgency|急迫性
U|ความต่อเนื่อง|continuity|連續性
U|ระยะยาว|long term|長期
U|ระยะสั้น|short term|短期
U|ความตรงต่อเวลา|punctuality|守時
U|การเลื่อนกำหนด|rescheduling|改期
`,
  education: `
B|โรงเรียน|school|學校
I|มหาวิทยาลัย|university|大學
I|นักเรียน|pupil; student|學生
I|นักศึกษา|university student|大學生
I|ครู|teacher|老師
I|บทเรียน|lesson|課程
I|การบ้าน|homework|作業
I|แบบฝึกหัด|exercise|練習題
I|ข้อสอบ|exam question|考題
I|คะแนน|score|分數
I|อธิบาย|explain|解釋
I|ทบทวน|review|複習
I|ฝึกฝน|practice|練習
I|จดจำ|memorize|記住
I|แปล|translate|翻譯
I|ออกเสียง|pronounce|發音
I|คำศัพท์|vocabulary word|詞彙
U|ความรู้|knowledge|知識
U|ความสามารถ|ability|能力
U|ทักษะ|skill|技能
U|การวิจัย|research|研究
U|การวิเคราะห์|analysis|分析
U|การประยุกต์ใช้|application (of knowledge)|應用
U|การเรียนรู้ตลอดชีวิต|lifelong learning|終身學習
`,
  money: `
B|เงิน|money|錢
I|รายได้|income|收入
I|ค่าใช้จ่าย|expense|開支
I|เงินเดือน|salary|薪水
I|งบประมาณ|budget|預算
I|หนี้|debt|債務
I|ดอกเบี้ย|interest (finance)|利息
I|ภาษี|tax|稅
I|อัตราแลกเปลี่ยน|exchange rate|匯率
I|เงินสด|cash|現金
I|บัตรเครดิต|credit card|信用卡
I|ชำระ|pay; settle|支付
I|ประหยัด|save money; economical|節省；節儉
I|เก็บออม|save up|儲蓄
I|ลงทุน|invest|投資
U|ผลตอบแทน|return (investment)|投資報酬
U|เงินเฟ้อ|inflation|通貨膨脹
U|การเงิน|finance|財務
U|ความมั่นคงทางการเงิน|financial security|財務穩定
U|การจัดสรร|allocation|分配
U|การออม|saving (money)|儲蓄
U|สภาพคล่อง|liquidity|流動性
`,
  safety: `
B|ตำรวจ|police|警察
I|อันตราย|danger|危險
I|ปลอดภัย|safe|安全的
I|ฉุกเฉิน|emergency|緊急的
I|อุบัติเหตุ|accident|事故
I|บาดเจ็บ|injured|受傷
I|ไฟไหม้|fire|火災
I|ขโมย|steal; thief|偷竊；小偷
I|หาย|lost; missing|遺失；不見
I|แจ้งความ|report to the police|報案
I|ช่วยเหลือ|help; assist|協助
I|ระวัง|be careful|小心
I|เตือน|warn|提醒；警告
I|หนี|flee|逃離
I|ปฐมพยาบาล|first aid|急救
U|ความปลอดภัย|safety|安全
U|มาตรการ|measure; policy|措施
U|การคุ้มครอง|protection|保護
U|การอพยพ|evacuation|疏散
U|แผนฉุกเฉิน|emergency plan|緊急應變計畫
U|การปฐมพยาบาล|first aid (noun)|急救
`,
  community: `
B|ชุมชน|community|社區
I|ประชาชน|citizens; public|民眾
I|ผู้อยู่อาศัย|resident|居民
I|อาสาสมัคร|volunteer|志工
I|กิจกรรม|activity|活動
I|งานอีเวนต์|event|活動；盛事
I|สวนสาธารณะ|public park|公園
I|ห้องสมุด|library|圖書館
I|บริการสาธารณะ|public service|公共服務
I|สิ่งแวดล้อม|environment|環境
I|ขยะ|rubbish|垃圾
I|รีไซเคิล|recycle|回收
I|พัฒนา|develop|發展
I|มีส่วนร่วม|take part|參與
U|สาธารณะ|public|公共的
U|ความเท่าเทียม|equality|平等
U|ความยั่งยืน|sustainability|永續性
U|นโยบาย|policy|政策
U|ผลประโยชน์ส่วนรวม|public interest|公共利益
U|การมีส่วนร่วม|participation|參與
U|ความรับผิดชอบต่อสังคม|social responsibility|社會責任
U|การพัฒนาชุมชน|community development|社區發展
`,
  family: `
B|พ่อ|father|父親
B|แม่|mother|母親
I|พี่|older sibling|哥哥；姊姊
I|น้อง|younger sibling|弟弟；妹妹
I|ลูก|child|孩子
I|ญาติ|relative|親戚
I|คู่รัก|romantic partner|伴侶
I|คู่สมรส|spouse|配偶
I|แต่งงาน|marry|結婚
I|เลี้ยงดู|raise; care for|撫養；照顧
I|ดูแล|take care of|照顧
I|ปรึกษา|consult|商量；諮詢
I|ทะเลาะ|quarrel|吵架
I|คืนดี|reconcile|和好
I|เข้าใจ|understand|理解
I|สนับสนุน|support|支持
U|ความผูกพัน|bond; attachment|羈絆；依附
U|ความรับผิดชอบร่วมกัน|shared responsibility|共同責任
U|การประนีประนอม|compromise|妥協
U|ความคาดหวัง|expectation|期待
U|ความอบอุ่น|warmth; affection|溫暖；關愛
U|ความใกล้ชิด|closeness|親近
`,
  weather: `
B|ฝน|rain|雨
B|ลม|wind|風
I|เมฆ|cloud|雲
I|แดด|sunshine|陽光
I|พายุ|storm|暴風雨
I|น้ำท่วม|flood|水災
I|ภัยแล้ง|drought|乾旱
I|อุณหภูมิ|temperature|溫度
I|ความชื้น|humidity|濕度
I|ร้อน|hot|熱的
I|หนาว|cold|冷的
I|ชื้น|damp; humid|潮濕的
I|แห้ง|dry|乾燥的
I|ท้องฟ้า|sky|天空
I|ฤดู|season|季節
I|พยากรณ์อากาศ|weather forecast|天氣預報
U|สภาพอากาศ|weather conditions|天氣狀況
U|สภาพภูมิอากาศ|climate|氣候
U|ภาวะโลกร้อน|global warming|全球暖化
U|การเปลี่ยนแปลงสภาพภูมิอากาศ|climate change|氣候變遷
U|มลพิษทางอากาศ|air pollution|空氣污染
U|การอนุรักษ์|conservation|保育
`,
  emotions: `
B|ดีใจ|glad|開心
I|กังวล|worried|擔心
I|เครียด|stressed|有壓力的
I|ผิดหวัง|disappointed|失望
I|ประหม่า|nervous|緊張
I|อิจฉา|jealous|嫉妒
I|ภูมิใจ|proud|驕傲
I|โล่งใจ|relieved|鬆一口氣
I|เหนื่อยใจ|emotionally exhausted|心累
I|เหงา|lonely|寂寞
I|เบื่อ|bored|無聊；厭倦
I|สงบ|calm; peaceful|平靜的
I|ยอมรับ|accept|接受
I|ให้กำลังใจ|encourage|鼓勵
U|ความรู้สึก|feeling|感受
U|ความมั่นใจ|confidence|自信
U|ความวิตกกังวล|anxiety|焦慮
U|ความเห็นอกเห็นใจ|empathy|同理心
U|สุขภาพจิต|mental health|心理健康
U|การผ่อนคลาย|relaxation|放鬆
U|ความอดทน|patience; endurance|耐心；忍耐
`,
  media: `
B|ข่าว|news|新聞
I|บทความ|article|文章
I|รายงานข่าว|news report|新聞報導
I|หัวข้อ|topic; heading|主題；標題
I|หัวข่าว|headline|新聞標題
I|แหล่งข่าว|news source|新聞來源
I|แหล่งข้อมูล|source of information|資訊來源
I|ข้อเท็จจริง|fact|事實
I|ข่าวลือ|rumour|謠言
I|ข่าวปลอม|fake news|假新聞
I|เผยแพร่|publish; spread|發布；傳播
I|สัมภาษณ์|interview|採訪；面試
I|ติดตาม|follow; keep up with|追蹤
I|ตรวจสอบข้อเท็จจริง|fact-check|事實查核
U|สื่อมวลชน|mass media|大眾媒體
U|การรายงาน|reporting|報導
U|ความโปร่งใส|transparency|透明度
U|การบิดเบือน|distortion|扭曲
U|การเซ็นเซอร์|censorship|審查
U|การตรวจสอบข่าว|news verification|新聞查證
U|การสื่อสารสาธารณะ|public communication|公共傳播
`,
};

Object.entries(THAI_WORDS).forEach(([topic, source]) => {
  source
    .trim()
    .split('\n')
    .forEach((line, index) => {
      const fields = line.trim().split('|');
      if (![4, 5].includes(fields.length) || fields.slice(0, 4).some((field) => !field.trim()))
        throw new Error(`Invalid Thai word: ${topic} #${index + 1}`);
      const [code, term, en, zh, customReading = ''] = fields;
      const level = { B: 'beginner', I: 'intermediate', U: 'upper' }[code];
      if (!level || /\s/.test(term)) throw new Error(`Invalid Thai word: ${topic} #${index + 1}`);
      window.SEED_CARDS.push({
        id: `th-word-${topic}-${index + 1}`,
        lang: 'th',
        topic,
        level,
        kind: 'word',
        term,
        reading: customReading || window.THAI_READINGS?.[term] || '',
        translations: { en, zh },
        exampleTarget: '',
        exampleReading: '',
        exampleTranslations: { en: '', zh: '' },
      });
    });
});

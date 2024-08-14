const homeData = [
    {
        title: "Boult Audio W20 Truly Wireless in Ear Earbuds with 35H Playtime, Zen™ ENC Mic, 45ms Low Latency, 13mm Bass Drivers, Type-C Fast Charging, Made in India, Touch Control, IPX5 ear buds TWS (Glacier Blue)",
        description: ["  35H Playtime: With an impressive 35-hour battery life, the Boult W20 earbuds ensure you can enjoy your music, podcasts, and calls without frequent recharging. Whether you're on a long commute, working out, relaxing, these earbuds provide the power to keep your audio experience uninterrupted.",
            " Zen ENC Mic: Enjoy crystal-clear calls with Zen ENC (Environmental Noise Cancellation) Mic. This advanced technology effectively reduces background noise, allowing your voice to come through clearly and ensuring high-quality communication even in noisy environments.",
            " 45ms Low Latency: Experience the thrill of ultra-smooth, responsive audio with 45ms low latency. The Boult W20 earbuds minimize delay between your actions and the sound, providing a competitive edge in gaming and ensuring an immersive and enjoyable gameplay experience.",
            " 13mm bass drivers: Immerse yourself in rich, deep bass and high-quality audio with 13mm bass drivers. These earbuds deliver powerful sound that brings your music, movies, and games to life with superior clarity and depth, providing an exceptional audio experience.",
            " Type C Fast Charging: Equipped with Type C fast charging, enjoy hours of playtime with just a short charging session (10mins = 120mins), ensuring you spend less time waiting and more time listening with your bluetooth earbuds. ",
            " Bluetooth 5.3: Benefit from reliable and efficient Bluetooth 5.3 pairing. This latest Bluetooth technology offers a robust and seamless connection with your devices, ensuring your earbuds stay connected without interruptions, enhancing your overall listening experience.",
            " Water Resistant: With an IPX5 water-resistant rating, the Boult W20 earbuds are built to withstand sweat and splashes, making them perfect for workouts, outdoor activities, and daily use without worry. Enjoy your favourite music without worrying about sweat or splashes damaging.",],
        imgSrc: ' /assets/productsimage/14.png',
        imgsrcs: ['/assets/productsimage/26.png', '/assets/productsimage/2.jpg', '/assets/productsimage/1.jpg', '/assets/productsimage/2 (5).jpg'],
        id: 1002,
        price: 112,
        originalPrice: 2099,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
        // save:  this.originalPrice-this.price
    },
    {
        title: "Portronics MODESK Universal Mobile Holder Stand with Metal Body, Anti Skid Design, Light Weight for All Smartphones, Tablets, Kindle, iPad(Black)",
        // description: "About this item :- MoDesk - a Premium Quality Mobile Holders for your Ofﬁce Desks. It can hold, on your work desk, any type of smartphone & tablets with size up to 7 inches easily MoDesk is a Aluminum + ABS metallic body desk mobile holders which is rust and corrosion proofIt has angular design which gives perfect viewing angle of your smartphone on the desk so you can easily and privately see incoming calls, respond to messages without the risk of prying eyes The antiskid silicon pads on the body prevents accidental slips and protection from scratches For any issue Email customer support help@portronics.com" ,
        description: ["MoDesk - a Premium Quality Mobile Holders for your Ofﬁce Desks. It can hold, on your work desk, any type of smartphone & tablets with size up to 7 inches easily MoDesk is a Aluminum + ABS metallic body desk mobile holders which is rust and corrosion proofIt has angular design which gives perfect viewing angle of your smartphone on the desk so you can easily and privately see incoming calls, respond to messages without the risk of prying eyes ",
            "The antiskid silicon pads on the body prevents accidental slips and protection from scratches For any issue Email customer support help@portronics.com"],
        imgSrc: ' /assets/productsimage/13.png',
        imgsrcs: [' /assets/productsimage/25.png'],
        id: 1000,
        price: 699,
        originalPrice: 895,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "Apple Silicone Case for iPhone 11 Pro Max - Pink",
        //description: "About this item :- A soft microfiber lining on the inside helps protect your iPhone.On the outside, the silky, soft-touch finish of the silicone exterior feels great in your hand.And you can keep it on all the time, even when you’re charging wirelessly.Just like every Apple-designed case, it’s put through thousands of hours of testing throughout the design and manufacturing process. So not only does it look great, it’s built to protect your iPhone from scratches and drops. Compatibility: iPhone 11 Pro Max" ,
        description: ["A soft microfiber lining on the inside helps protect your iPhone.On the outside, the silky, soft-touch finish of the silicone exterior feels great in your hand.And you can keep it on all the time, even when you’re charging wirelessly.Just like every Apple-designed case, it’s put through thousands of hours of testing throughout the design and manufacturing process. So not only does it look great, it’s built to protect your iPhone from scratches and drops.",
            " Compatibility: iPhone 11 Pro Max"],
        imgSrc: ' /assets/productsimage/11.png',
        imgsrcs: ['/assets/productsimage/22.png'],
        id: 1003,
        price: 3510,
        originalPrice: 3900,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "Boult Audio UFO Truly Wireless in Ear Earbuds with 48H Playtime, Built-in App Support, 45ms Low Latency Gaming, 4 Mics ENC, Breathing LEDs, 13mm Bass Drivers Ear buds TWS, Made in India (Black Gloss)",
        description: ["48H Playtime: Enjoy an exceptional 48 hours of continuous playtime with these cutting-edge Bluetooth earbuds, ensuring your music, calls, and gaming sessions never miss a beat. ",
            "Low Latency Gaming: Elevate your gaming experience with our Bluetooth earbuds featuring an ultra-low latency of just 45ms, ensuring seamless synchronization between audio and visuals. Built in App Support: Take full control of your earbuds with the 'Boult Amp' Built in App Support, allowing you to switch between 6 Equalizer Modes, customize touch controls, rename earbuds, and more, all with ease and convenience.",
            " Quad Mic ENC: Seamless communication with 4 advanced Environmental Noise Cancellation microphones guarantees crystal-clear, interference-free calls, catering to professionals and daily conversationalists alike.",
            "Powerful 13mm Drivers: Immerse yourself in high-fidelity sound delivered by precision-tuned 13mm Rich Bass Audio drivers in our wireless ear buds, ensuring crystal-clear audio across all frequencies.",
            " Breathing Gaming LEDs: Immerse yourself in gaming glory with dynamic breathing LEDs on the Boult UFO TWS Earbuds. These vibrant lights sync with your gaming rhythm, creating a visual spectacle that enhances your gaming experience.", " Crafted in India: Proudly Made in India, these earbuds showcase local innovation and craftsmanship, offering a blend of quality and national pride that sets them apart in the Bluetooth earphones market."],
        imgSrc: ' /assets/productsimage/12.png',
        imgsrcs: [' /assets/productsimage/23.png', ' /assets/productsimage/12.png'],
        id: 1004,
        price: 1499,
        originalPrice: 3499,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours Playback, 1.75  Driver, IPX7 & TWS Feature(Black)",
        //description: "Stone 180 comes equipped with 1.75 Dynamic Drivers for powerful immersive sound Its power packed 800mAh battery ensures extended indulgence in musical bliss with up to 10 hours of play time, Charging Time : 1.5 Hours The speaker offers 5W of premium High Definition sound, Frequency Response - 70Hz-70kHz Stone 180 supports instant wireless connectivity with latest Bluetooth v5.0 Connect two Stone 180’s and turn the scene right around with double the volume at the same clarity level, get the party started anywhere, anytime with the boAt Stone 180It is IPX7 rated which offers protection against sweat and water.It offers dual connectivity via Bluetooth & AUX.1 year warranty from the date of purchase" ,
        description: ["Stone 180 comes equipped with 1.75 Dynamic Drivers for powerful immersive sound Its power packed 800mAh battery ensures extended indulgence in musical bliss with up to 10 hours of play time, Charging Time : 1.5 Hours The speaker offers 5W of premium High Definition sound, Frequency Response - 70Hz-70kHz Stone 180 supports instant wireless connectivity with latest Bluetooth v5.0 Connect two Stone 180’s and turn the scene right around with double the volume at the same clarity level, get the party started anywhere, anytime with the boAt Stone 180It is IPX7 rated which offers protection against sweat and water.",
            "It offers dual connectivity via Bluetooth & AUX.1 year warranty from the date of purchase"],
        imgSrc: ' /assets/productsimage/16.png',
        imgsrcs: ['/assets/productsimage/24.png', '/assets/productsimage/a.jpg', '/assets/productsimage/b.jpg'],
        id: 1005,
        price: 979,
        originalPrice: 2490,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "Zebronics ZEB-COUNTY 3W Wireless Bluetooth Portable Speaker With Supporting Carry Handle, USB, SD Card, AUX, FM & Call Function. (Black)",
        description: ["Zeb-county is a compact and handy portable speaker that comes with multi-connectivity options like wireless BT/USB/micro SD and AUX The speaker comes with a call function along with a built-in fm radio too Speaker impedance 4Ω Frequency response 120hz-15khz Charging time 2.5H Playback time approx. ", "10 hrs 1 Year warranty-from the date of purchase To connect to FM: Switch the speaker to FM mode and connect the micro USB cable to the micro USB port of the speaker and leave the other end free (this cable will act as the FM antenna)."],
        imgSrc: ' /assets/productsimage/c.png',
        imgsrcs: [' /assets/productsimage/21.png', ' /assets/productsimage/d.png'],
        id: 1006,
        price: 449,
        originalPrice: 999,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "Amazon Basics B10 10W RMS Bluetooth Speaker with 2000 mAh Battery | Up to 8 hrs of Playback | RGB | Bluetooth 5.3, AUX in, USB & Micro SD Card Connectivity | Type-C Charging (Black)",
        // description: "About this item Superior Sound Immersion: Immerse yourself in the exceptional sound of 10W wireless Bluetooth speakers. Whether you're streaming music, watching movies, enjoy crystal-clear sound and dynamic performance that brings every detail to life. Longer Playback: Enjoy non-stop entertainment with up to 8 hours of wireless playback, thanks to the robust 2000mAh Li-ion rechargeable battery. Bluetooth 5.3: Experience seamless connectivity with the advanced Bluetooth 5.3 technology. Enjoy faster pairing, extended range, and enhanced stability for uninterrupted streaming. Immersive Experience: Enjoy RGB effects that amp up your musical experience. Wide Compatibility: Experience the innovation like never before with this bluetooth speaker, compatible with both Android & ios. Enjoy seamless playback from your favorite gadgets. WARRANTY: 1 year limited warranty from the date of purchase on product (not on accessories) " ,
        description: ["About this item Superior Sound Immersion: Immerse yourself in the exceptional sound of 10W wireless Bluetooth speakers. Whether you're streaming music, watching movies, enjoy crystal-clear sound and dynamic performance that brings every detail to life.", " Longer Playback: Enjoy non-stop entertainment with up to 8 hours of wireless playback, thanks to the robust 2000mAh Li-ion rechargeable battery. ", "Bluetooth 5.3: Experience seamless connectivity with the advanced Bluetooth 5.3 technology. Enjoy faster pairing, extended range, and enhanced stability for uninterrupted streaming.", " Immersive Experience: Enjoy RGB effects that amp up your musical experience. ", "Wide Compatibility: Experience the innovation like never before with this bluetooth speaker, compatible with both Android & ios. Enjoy seamless playback from your favorite gadgets.", " WARRANTY: 1 year limited warranty from the date of purchase on product (not on accessories) "],
        imgSrc: ' /assets/productsimage/e.jpg',
        imgsrcs: [' /assets/productsimage/29 (1).png', ' /assets/productsimage/e.jpg'],
        id: 1007,
        price: 899,
        originalPrice: 2499,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "boAt Stone 620 Bluetooth Speaker with 12W RMS Stereo Sound, 10HRS Playtime, TWS Feature, IPX4, Multi-Compatibility Mode(Black)",
        // description: "Get ready to be enthralled by the 12W RMS stereo sound on Stone 620 portable wireless speaker. Frequency - 120Hz-20KHz;It supports TWS functionality, meaning you can connect two Stone 620s together and play music on both of them simultaneously for twice the impact. Charging time: 3h" ,
        description: ["Get ready to be enthralled by the 12W RMS stereo sound on Stone 620 portable wireless speaker.", " Frequency - 120Hz-20KHz;It supports TWS functionality, meaning you can connect two Stone 620s together and play music on both of them simultaneously for twice the impact. Charging time: 3h"],
        imgSrc: ' /assets/productsimage/g.jpg',
        imgsrcs: [' /assets/productsimage/28.png'],
        id: 1008,
        price: 1999,
        originalPrice: 3990,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "OnePlus Buds 3 Truly Wireless Bluetooth Earbuds with Upto 49dB Smart Adaptive Noise Cancellation,Hi-Res Sound Quality,Sliding Volume Control,10mins for 7Hours Fast Charging with Upto 44Hrs Playback",
        description: ["Best-in-class Sound Quality]: 10.4mm+6mm dynamic dual driver, LHDC5.0 Bluetooth CODEC and high resolution certification makes the product best in its sound quality with deeper bass, delicate treble and clear vocals",
            "Sliding Volume Control]: Slide on the surface of touch area of buds to adjust the volume.Sliding up increases the volume, while sliding down decreases the volume",
            "49dB Adaptive Nosie Cancellation]: Advanced noise-cancelling technology,coupled with a high-performance chip,elevates the depth of noise cancellation upto 49dB.This reduces noise and blocks out chaos and allows users to enjoy music immersively",
            "Dual Connection]:It can simulatenously connect to 2 devices such as Andriod/iOS/Windows smartphone, tablets or computers allowing for quick and seamless device switching",
            "[Battery Life]:It has 10mins of Fast Charging that give 7 hours of Playback time with total music playback upto 44 hours with ANC Off||[IP55 rating]: With IP55 Dust and water resistance there is no fear of sweating or rain"
        ],
        imgSrc: ' /assets/productsimage/0 (1).png',
        imgsrcs: [' /assets/productsimage/0 (1).png', ' /assets/productsimage/0 (3).png', ' /assets/productsimage/0.png'],
        id: 1009,
        price: 79,
        originalPrice: 6944,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
    {
        title: "Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | 5G Ready | 120Hz Bezel-Less AMOLED | 7.mm Slimmest Note Ever | 108MP Pro-Grade Camera",
        description: [" Display: 6.67 FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 1000nits peak brightness; Corning Gorilla Glass 5 Display Protection Processor:Mediatek Dimensity 6080 6nm Octa-core 5G processor for high performance ; Up to 2.4GHz; Upto 12GB RAM including 6GB Virtual RAM Camera: 108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 16MP Front camera Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 | Dual SIM (nano+nano) 5G "],
        imgSrc: '/assets/productsimage/15.png',
        imgsrcs: ['/assets/productsimage/29.png', '/assets/productsimage/15.png'],
        id: 1010,
        price: 20999,
        originalPrice: 26999,
        get discount() {
            return Math.round(((this.originalPrice - this.price) * 100) / this.price);
        },
        get save() {
            return Math.round((this.originalPrice - this.price));
        },
    },
]
export default homeData;

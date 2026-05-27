/**
 * Description: Data module for StreetBowl.
 * Contains hardcoded application data for categories and vendors.
 */

window.categories = ["All", "Suya", "Bole", "Akara", "Amala", "Small Chops", "Shawarma", "Jollof"];

window.vendors = [
    {
        id: 1,
        name: "Malam Rayo Suya Spot",
        location: "Yaba, Lagos",
        category: "Suya",
        rating: 4.6,
        reviewsCount: 128,
        image: "./img/suya (1).jpg",
        gallery: ["./img/suya (2).jpg", "./img/suya (1).jpg"],
        isOpen: true,
        menu: [
            { item: "Beef Suya", price: "₦2,000", desc: "Spicy roasted beef skewers" },
            { item: "Chicken Suya", price: "₦2,500", desc: "Tender chicken breasts roasted with yaji" }
        ],
        hours: [
            { days: "Mon - Fri", time: "4:00 PM - 11:00 PM" },
            { days: "Sat - Sun", time: "2:00 PM - 12:00 AM" }
        ],
        reviews: [
            { name: "Tunde O.", rating: 5, comment: "Ah! This suya dey burst brain. The yaji is too mad!" },
            { name: "Chisom M.", rating: 4, comment: "Omo, the meat soft well well. I no dey joke with this spot." },
            { name: "Kola W.", rating: 5, comment: "If you never chop Malam Rayo suya, you never start." }
        ]
    },
    {
        id: 2,
        name: "Bole Republic",
        location: "Port Harcourt",
        category: "Bole",
        rating: 4.7,
        reviewsCount: 94,
        image: "./img/bole (1).jpg",
        gallery: ["./img/bole (2).jpg"],
        isOpen: true,
        menu: [
            { item: "Bole & Fish", price: "₦3,500", desc: "Roasted plantain with spicy grilled croaker" }
        ],
        hours: [
            { days: "Everyday", time: "10:00 AM - 8:00 PM" }
        ],
        reviews: [
            { name: "Chidi N.", rating: 5, comment: "The fish sauce make sense die! Port Harcourt people no dey carry last." },
            { name: "Boma T.", rating: 5, comment: "See ehn, this bole and fish can cure heartbreak." },
            { name: "Seyi A.", rating: 4, comment: "Mad combo! The pepper enter the fish deep." }
        ]
    },
    {
        id: 3,
        name: "Akara Express",
        location: "Surulere, Lagos",
        category: "Akara",
        rating: 4.5,
        reviewsCount: 210,
        image: "./img/akara (1).jpg",
        gallery: ["./img/akara (2).jpg"],
        isOpen: false,
        menu: [
            { item: "Akara Bowl", price: "₦1,500", desc: "10 pieces of hot golden bean fritters" }
        ],
        hours: [
            { days: "Mon - Sat", time: "6:00 AM - 11:00 AM" }
        ],
        reviews: [
            { name: "Amina Y.", rating: 4, comment: "Perfect Saturday morning breakfast fix. E dey go well with pap!" },
            { name: "Nnamdi K.", rating: 5, comment: "This akara no dey soak oil at all. Pure enjoyment." },
            { name: "Folake R.", rating: 5, comment: "E sweet passing my ex! Very fluffy inside." }
        ]
    },
    {
        id: 4,
        name: "Amala Junction",
        location: "Ibadan",
        category: "Amala",
        rating: 4.9,
        reviewsCount: 532,
        image: "./img/amala (1).jpg",
        gallery: ["./img/amala (2).jpg"],
        isOpen: true,
        menu: [
            { item: "Amala & Ewedu", price: "₦2,500", desc: "Soft amala served with fresh green ewedu, gbegiri soup, and stewed beef" }
        ],
        hours: [
            { days: "Mon - Sun", time: "11:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Femi A.", rating: 5, comment: "You haven't been to Ibadan if you never chop this Amala. Top tier!" },
            { name: "Bisi D.", rating: 5, comment: "The gbegiri and ewedu blend na confirm. Correct local flavor." },
            { name: "Segun P.", rating: 5, comment: "Omo, I swallow three wraps before I know! It's too sweet." }
        ]
    },
    {
        id: 5,
        name: "Chops by Tolu",
        location: "Ikeja, Lagos",
        category: "Small Chops",
        rating: 4.4,
        reviewsCount: 88,
        image: "./img/smallchops (1).jpg",
        gallery: ["./img/smallchops (2).jpg"],
        isOpen: true,
        menu: [
            { item: "Party Box", price: "₦5,000", desc: "An assortment of puff-puff, crunchy Samosas, Spring rolls, and sweet peppered Mosa" }
        ],
        hours: [
            { days: "Tue - Sun", time: "12:00 PM - 10:00 PM" }
        ],
        reviews: [
            { name: "Joy E.", rating: 4, comment: "The puff-puff soft wella and the spring roll dey crunch! Valid spot." },
            { name: "Emeka U.", rating: 5, comment: "Party no scatter if this small chops no dey there. E choke!" },
            { name: "Anita O.", rating: 4, comment: "That peppered mosa na the real deal, no cap." }
        ]
    },
    {
        id: 6,
        name: "Mai Shayi Corner",
        location: "Kano",
        category: "Shawarma",
        rating: 4.8,
        reviewsCount: 156,
        image: "./img/shawarma (1).jpg",
        gallery: ["./img/shawarma (2).jpg"],
        isOpen: false,
        menu: [
            { item: "Beef Shawarma", price: "₦2,500", desc: "Spiced grilled beef wraps with extra sausages and rich local cream" }
        ],
        hours: [
            { days: "Everyday", time: "6:00 PM - 2:00 AM" }
        ],
        reviews: [
            { name: "Mustapha I.", rating: 5, comment: "The late night go-to spot. Their shawarma cream dey over-deliver." },
            { name: "Hassan S.", rating: 4, comment: "Walahi, the meat plenty inside! Worth the money." },
            { name: "Ibrahim T.", rating: 5, comment: "Na this shawarma dey save my life for midnight." }
        ]
    },
    {
        id: 7,
        name: "Iya Basil Jollof Spot",
        location: "Surulere, Lagos",
        category: "Jollof",
        rating: 4.8,
        reviewsCount: 340,
        image: "./img/jollof (1).jpg",
        gallery: ["./img/jollof (2).jpg"],
        isOpen: true,
        menu: [
            { item: "Firewood Jollof Single", price: "₦3,000", desc: "Smoky firewood-cooked Jollof rice served with golden fried plantains and peppered beef" },
            { item: "Smoky Jollof Hub Platter", price: "₦5,500", desc: "Double portion of party Jollof rice served with fresh coleslaw, moin-moin, and grilled quarter chicken" }
        ],
        hours: [
            { days: "Mon - Sat", time: "11:00 AM - 10:00 PM" }
        ],
        reviews: [
            { name: "Deji K.", rating: 5, comment: "Omo, the firewood smoke inside this Jollof na spiritual! Best in Surulere." },
            { name: "Bukky M.", rating: 5, comment: "This is real party Jollof! The bottom pot dey give me joy." },
            { name: "Kenneth O.", rating: 4, comment: "The plantain and meat complete the ministry. I go come again." }
        ]
    },
    {
        id: 8,
        name: "Suya Master",
        location: "Lekki, Lagos",
        category: "Suya",
        rating: 4.7,
        reviewsCount: 156,
        image: "./img/suya (4).jpg",
        gallery: ["./img/suya (5).jpg", "./img/suya (6).jpg"],
        isOpen: true,
        menu: [
            { item: "Premium Beef Suya", price: "₦2,500", desc: "Extra spicy premium cuts with house-special yaji blend" },
            { item: "Goat Meat Suya", price: "₦3,000", desc: "Tender goat meat seasoned to perfection" }
        ],
        hours: [
            { days: "Mon - Sun", time: "5:00 PM - 12:00 AM" }
        ],
        reviews: [
            { name: "Zainab M.", rating: 5, comment: "Best suya spot in Lekki, the yaji is addictive! E pass normal." },
            { name: "Ejiro O.", rating: 4, comment: "The goat meat suya make sense. No hard bone at all." },
            { name: "Yusuf K.", rating: 5, comment: "If you dey Lekki, just come here, no look elsewhere." }
        ]
    },
    {
        id: 9,
        name: "Bole Heaven",
        location: "Bariga, Lagos",
        category: "Bole",
        rating: 4.6,
        reviewsCount: 203,
        image: "./img/bole (3).jpg",
        gallery: ["./img/bole (4).jpg", "./img/bole (5).jpg"],
        isOpen: true,
        menu: [
            { item: "Bole & Pepper", price: "₦2,500", desc: "Golden roasted plantain with fresh scotch bonnet pepper" },
            { item: "Bole & Egg", price: "₦3,000", desc: "Crispy bole served with protein-rich fried eggs" }
        ],
        hours: [
            { days: "Mon - Sun", time: "7:00 AM - 10:00 PM" }
        ],
        reviews: [
            { name: "Kunle O.", rating: 5, comment: "Wake up early for this - worth every naira! Bariga to the world." },
            { name: "Tope F.", rating: 4, comment: "The pepper sauce will reset your brain. Pure fire!" },
            { name: "Rita A.", rating: 5, comment: "I swear, this bole plus egg na perfect combination." }
        ]
    },
    {
        id: 10,
        name: "Akara & Pap Corner",
        location: "Mushin, Lagos",
        category: "Akara",
        rating: 4.4,
        reviewsCount: 178,
        image: "./img/akara (3).jpg",
        gallery: ["./img/akara (4).jpg", "./img/akara (5).jpg"],
        isOpen: true,
        menu: [
            { item: "Akara with Pap", price: "₦800", desc: "Fresh akara with smooth corn pap" },
            { item: "Akara Special Box", price: "₦2,000", desc: "20 pieces with sauce and bread" }
        ],
        hours: [
            { days: "Mon - Sat", time: "5:30 AM - 12:00 PM" }
        ],
        reviews: [
            { name: "Mary C.", rating: 4, comment: "Perfect breakfast combo, never disappoints! Mushin people enjoy." },
            { name: "Daniel E.", rating: 5, comment: "The pap smooth well well, no lumps at all. Highly recommended." },
            { name: "Blessing U.", rating: 4, comment: "Bread and akara hits different from this spot. No cap." }
        ]
    },
    {
        id: 11,
        name: "Shawarma King Shomolu",
        location: "Shomolu, Lagos",
        category: "Shawarma",
        rating: 4.9,
        reviewsCount: 289,
        image: "./img/shawarma (3).jpg",
        gallery: ["./img/shawarma (4).jpg", "./img/shawarma (5).jpg"],
        isOpen: true,
        menu: [
            { item: "Beef Shawarma Deluxe", price: "₦3,000", desc: "Triple beef with extra vegetables and premium cream" },
            { item: "Chicken Shawarma", price: "₦2,500", desc: "Succulent chicken with all the fixings" }
        ],
        hours: [
            { days: "Everyday", time: "12:00 PM - 11:00 PM" }
        ],
        reviews: [
            { name: "Hassan K.", rating: 5, comment: "Shawarma doesn't get better than this - authentic and fresh! Shomolu pride." },
            { name: "Tobi M.", rating: 5, comment: "Omo, the cream inside this shawarma too much! Very juicy." },
            { name: "Sandra O.", rating: 4, comment: "No be small thing, this shawarma heavy for hand! Best value." }
        ]
    },
    {
        id: 12,
        name: "Small Chops Fest",
        location: "Victoria Island, Lagos",
        category: "Small Chops",
        rating: 4.8,
        reviewsCount: 267,
        image: "./img/smallchops (3).jpg",
        gallery: ["./img/smallchops (4).jpg", "./img/smallchops (5).jpg"],
        isOpen: true,
        menu: [
            { item: "Party Platter (30pcs)", price: "₦8,000", desc: "Assorted small chops including puff-puff, spring rolls, samosa & more" },
            { item: "Mini Starter Box", price: "₦3,500", desc: "Selection of 12 assorted pieces" }
        ],
        hours: [
            { days: "Mon - Sun", time: "10:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Angela B.", rating: 5, comment: "Perfect for events and gatherings - quality and taste guaranteed!" },
            { name: "Damilare J.", rating: 5, comment: "The samosa fill up with meat! Dem no dey use people play." },
            { name: "Stella I.", rating: 4, comment: "Puff-puff is always hot and soft. VI standard." }
        ]
    },
    {
        id: 13,
        name: "Jollof Grill House",
        location: "Ikoyi, Lagos",
        category: "Jollof",
        rating: 4.9,
        reviewsCount: 412,
        image: "./img/jollof (3).jpg",
        gallery: ["./img/jollof (4).jpg", "./img/jollof (5).jpg"],
        isOpen: true,
        menu: [
            { item: "Premium Jollof Combo", price: "₦4,500", desc: "Aromatic jollof with grilled chicken, coleslaw, and fried plantain" },
            { item: "Jollof Rice Bowl", price: "₦2,500", desc: "Generous portion of perfectly seasoned jollof rice" }
        ],
        hours: [
            { days: "Mon - Sat", time: "12:00 PM - 10:00 PM" }
        ],
        reviews: [
            { name: "Sophia O.", rating: 5, comment: "The taste of home! Best jollof experience in Ikoyi. No cap." },
            { name: "Ikenna E.", rating: 5, comment: "See the way the chicken soft? Walahi this place dey give." },
            { name: "Grace T.", rating: 4, comment: "Na real party jollof vibe. The spice level na confirm." }
        ]
    },
    {
        id: 14,
        name: "Amala & Soup Hub",
        location: "Ogba, Lagos",
        category: "Amala",
        rating: 4.7,
        reviewsCount: 198,
        image: "./img/amala (3).jpg",
        gallery: ["./img/amala (4).jpg", "./img/amala (5).jpg"],
        isOpen: true,
        menu: [
            { item: "Amala & Ewedu with Beef", price: "₦3,000", desc: "Premium soft amala with tender beef and rich soup" },
            { item: "Amala & Gbegiri", price: "₦2,500", desc: "Classic combination perfectly executed" }
        ],
        hours: [
            { days: "Mon - Sun", time: "11:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Tayo R.", rating: 5, comment: "Authentic taste, generous portions - truly satisfying! E enter well." },
            { name: "Kemi L.", rating: 4, comment: "The amala no dey draw anyhow, smooth operator! Ogba people winning." },
            { name: "Samuel W.", rating: 5, comment: "Ewedu fresh and the meat plenty. I go dey come back every Sunday." }
        ]
    },
    {
        id: 15,
        name: "Spicy Suya Hub",
        location: "Ajah, Lagos",
        category: "Suya",
        rating: 4.6,
        reviewsCount: 142,
        image: "./img/suya (7).jpg",
        gallery: ["./img/suya (3).jpg", "./img/suya (8).jpg"],
        isOpen: true,
        menu: [
            { item: "Fire Level Suya", price: "₦2,200", desc: "Super spicy for the brave ones" },
            { item: "Medium Heat Suya", price: "₦2,000", desc: "Perfect balance of spice and flavor" }
        ],
        hours: [
            { days: "Mon - Sun", time: "4:00 PM - 11:30 PM" }
        ],
        reviews: [
            { name: "Kingsley T.", rating: 5, comment: "This is what suya should taste like - crispy, spicy, and perfect! Ajah massive." },
            { name: "Adaeze P.", rating: 4, comment: "The pepper for the fire level no be here o. E clear my chest!" },
            { name: "Uche Y.", rating: 5, comment: "Yaji well mixed. Their suya dey always fresh." }
        ]
    },
    {
        id: 16,
        name: "Plantain & Protein Corner",
        location: "Ojota, Lagos",
        category: "Bole",
        rating: 4.5,
        reviewsCount: 165,
        image: "./img/bole (6).jpg",
        gallery: ["./img/bole (7).jpg", "./img/bole (8).jpg"],
        isOpen: true,
        menu: [
            { item: "Bole with Grilled Fish", price: "₦4,000", desc: "Crispy bole paired with fresh grilled tilapia" },
            { item: "Bole with Meat", price: "₦3,500", desc: "Golden plantain with succulent grilled beef" }
        ],
        hours: [
            { days: "Mon - Sun", time: "8:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Chioma E.", rating: 5, comment: "The combo is unbeatable - fresh ingredients and great taste! Ojota connect." },
            { name: "Tosin B.", rating: 4, comment: "Bole soft inside and crunchy outside. Highly recommended." },
            { name: "Emmanuela D.", rating: 5, comment: "The sauce na the real winner here. So rich." }
        ]
    },
    {
        id: 17,
        name: "Bean Fritters Express",
        location: "Ikeja, Lagos",
        category: "Akara",
        rating: 4.4,
        reviewsCount: 201,
        image: "./img/akara (6).jpg",
        gallery: ["./img/akara (7).jpg", "./img/akara (8).jpg"],
        isOpen: true,
        menu: [
            { item: "Fresh Akara Batch", price: "₦1,000", desc: "Just fried golden bean cakes" },
            { item: "Akara Combo Breakfast", price: "₦2,500", desc: "Akara with pap and fresh juice" }
        ],
        hours: [
            { days: "Mon - Sat", time: "5:00 AM - 1:00 PM" }
        ],
        reviews: [
            { name: "Linda N.", rating: 5, comment: "Crispy outside, soft inside - breakfast heaven! Ikeja boys know." },
            { name: "Dare O.", rating: 5, comment: "Their akara no dey soak oil. Clean job!" },
            { name: "Janet S.", rating: 4, comment: "Omo, the queue for here long but it's worth the wait!" }
        ]
    },
    {
        id: 18,
        name: "Late Night Shawarma Spot",
        location: "Oshodi, Lagos",
        category: "Shawarma",
        rating: 4.7,
        reviewsCount: 224,
        image: "./img/shawarma (6).jpg",
        gallery: ["./img/shawarma (7).jpg", "./img/bole (9).jpg"],
        isOpen: false,
        menu: [
            { item: "Night Owl Special", price: "₦2,800", desc: "Beef shawarma with extra toppings" },
            { item: "Mixed Shawarma", price: "₦3,200", desc: "Beef and chicken combo" }
        ],
        hours: [
            { days: "Everyday", time: "8:00 PM - 4:00 AM" }
        ],
        reviews: [
            { name: "Bola A.", rating: 5, comment: "Perfect midnight cravings solution - always fresh! Oshodi night life." },
            { name: "Seyi F.", rating: 4, comment: "The mix shawarma heavy! Meat everywhere." },
            { name: "Ngozi P.", rating: 5, comment: "No cap, this place has saved me countless times after club." }
        ]
    },
    {
        id: 19,
        name: "Premium Events Catering",
        location: "Lekki Phase 1, Lagos",
        category: "Small Chops",
        rating: 4.9,
        reviewsCount: 338,
        image: "./img/smallchops (6).jpg",
        gallery: ["./img/smallchops (7).jpg", "./img/smallchops (8).jpg"],
        isOpen: true,
        menu: [
            { item: "Full Event Catering", price: "₦50,000+", desc: "Customized packages for events" },
            { item: "Regular Small Chops Box", price: "₦5,000", desc: "Premium selection of fresh small chops" }
        ],
        hours: [
            { days: "Mon - Sun", time: "9:00 AM - 8:00 PM" }
        ],
        reviews: [
            { name: "Tunde A.", rating: 5, comment: "Professional catering with delicious options - highly recommended! No story." },
            { name: "Yewande O.", rating: 5, comment: "My wedding guests kept asking for their contact. Solid chops!" },
            { name: "Chinedu V.", rating: 5, comment: "Lekki standard. Clean packaging and it tastes fresh always." }
        ]
    },
    {
        id: 20,
        name: "Classic Jollof Rice Spot",
        location: "Yaba, Lagos",
        category: "Jollof",
        rating: 4.6,
        reviewsCount: 287,
        image: "./img/jollof (6).jpg",
        gallery: ["./img/jollof (7).jpg"],
        isOpen: true,
        menu: [
            { item: "Classic Jollof Meal", price: "₦3,500", desc: "Traditional jollof with chicken and plantain" },
            { item: "Jollof Rice Only", price: "₦2,000", desc: "Plain, perfectly seasoned jollof rice" }
        ],
        hours: [
            { days: "Mon - Sun", time: "12:00 PM - 9:30 PM" }
        ],
        reviews: [
            { name: "Foluke P.", rating: 5, comment: "Simple, authentic, and absolutely delicious! Unilag students know." },
            { name: "Gideon E.", rating: 4, comment: "The rice no dey gum together. Real party standard." },
            { name: "Bose Y.", rating: 5, comment: "E sweet so tey I bite my tongue. Too much flavor!" }
        ]
    }
];

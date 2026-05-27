/**
 * Description: Data module for StreetBowl.
 * Contains hardcoded application data for categories and vendors.
 */

window.categories = ["All", "Suya", "Boli", "Akara", "Amala", "Small Chops", "Shawarma", "Jollof"];

window.vendors = [
    {
        id: 1,
        name: "Malam Rayo Suya Spot",
        location: "Yaba, Lagos",
        category: "Suya",
        rating: 4.6,
        reviewsCount: 128,
        image: "./img/suya (1).jpg",
        gallery: [
            "./img/suya (2).jpg",
            "./img/suya (1).jpg"
        ],
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
            { name: "Tunde O.", rating: 5, comment: "Best Suya in Yaba hands down." }
        ]
    },
    {
        id: 2,
        name: "Boli Republic",
        location: "Port Harcourt",
        category: "Boli",
        rating: 4.7,
        reviewsCount: 94,
        image: "./img/bole (1).jpg",
        gallery: [
             "./img/bole (2).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Boli & Fish", price: "₦3,500", desc: "Roasted plantain with spicy grilled croaker" }
        ],
        hours: [
            { days: "Everyday", time: "10:00 AM - 8:00 PM" }
        ],
        reviews: [
            { name: "Chidi N.", rating: 5, comment: "The fish sauce is out of this world." }
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
        gallery: [
            "./img/akara (2).jpg"
        ],
        isOpen: false,
        menu: [
            { item: "Akara Bowl", price: "₦1,500", desc: "10 pieces of hot golden bean fritters" }
        ],
        hours: [
            { days: "Mon - Sat", time: "6:00 AM - 11:00 AM" }
        ],
        reviews: [
            { name: "Amina Y.", rating: 4, comment: "Perfect Saturday morning breakfast fix." }
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
        gallery: [
              "./img/amala (2).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Amala & Ewedu", price: "₦2,500", desc: "Soft amala served with fresh green ewedu, gbegiri soup, and stewed beef" }
        ],
        hours: [
            { days: "Mon - Sun", time: "11:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Femi A.", rating: 5, comment: "You haven't been to Ibadan if you haven't eaten here." }
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
        gallery: [
              "./img/smallchops (2).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Party Box", price: "₦5,000", desc: "An assortment of puff-puff, crunchy Samosas, Spring rolls, and sweet peppered Mosa" }
        ],
        hours: [
            { days: "Tue - Sun", time: "12:00 PM - 10:00 PM" }
        ],
        reviews: [
            { name: "Joy E.", rating: 4, comment: "Very crunchy spring rolls." }
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
        gallery: [
              "./img/shawarma (2).jpg"
        ],
        isOpen: false,
        menu: [
            { item: "Beef Shawarma", price: "₦2,500", desc: "Spiced grilled beef wraps with extra sausages and rich local cream" }
        ],
        hours: [
            { days: "Everyday", time: "6:00 PM - 2:00 AM" }
        ],
        reviews: [
            { name: "Mustapha I.", rating: 5, comment: "The late night go-to spot." }
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
        gallery: [
             "./img/jollof (2).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Firewood Jollof Single", price: "₦3,000", desc: "Smoky firewood-cooked Jollof rice served with golden fried plantains and peppered beef" },
            { item: "Smoky Jollof Hub Platter", price: "₦5,500", desc: "Double portion of party Jollof rice served with fresh coleslaw, moin-moin, and grilled quarter chicken" }
        ],
        hours: [
            { days: "Mon - Sat", time: "11:00 AM - 10:00 PM" }
        ],
        reviews: [
            { name: "Deji K.", rating: 5, comment: "Incredible smoky firewood aroma! Best Jollof in Surulere." }
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
        gallery: [
            "./img/suya (5).jpg",
            "./img/suya (6).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Premium Beef Suya", price: "₦2,500", desc: "Extra spicy premium cuts with house-special yaji blend" },
            { item: "Goat Meat Suya", price: "₦3,000", desc: "Tender goat meat seasoned to perfection" }
        ],
        hours: [
            { days: "Mon - Sun", time: "5:00 PM - 12:00 AM" }
        ],
        reviews: [
            { name: "Zainab M.", rating: 5, comment: "Best suya spot in Lekki, the yaji is addictive!" }
        ]
    },
    {
        id: 9,
        name: "Boli Heaven",
        location: "Bariga, Lagos",
        category: "Boli",
        rating: 4.6,
        reviewsCount: 203,
        image: "./img/bole (3).jpg",
        gallery: [
             "./img/bole (4).jpg",
             "./img/bole (5).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Boli & Pepper", price: "₦2,500", desc: "Golden roasted plantain with fresh scotch bonnet pepper" },
            { item: "Boli & Egg", price: "₦3,000", desc: "Crispy boli served with protein-rich fried eggs" }
        ],
        hours: [
            { days: "Mon - Sun", time: "7:00 AM - 10:00 PM" }
        ],
        reviews: [
            { name: "Kunle O.", rating: 5, comment: "Wake up early for this - worth every naira!" }
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
        gallery: [
            "./img/akara (4).jpg",
            "./img/akara (5).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Akara with Pap", price: "₦800", desc: "Fresh akara with smooth corn pap" },
            { item: "Akara Special Box", price: "₦2,000", desc: "20 pieces with sauce and bread" }
        ],
        hours: [
            { days: "Mon - Sat", time: "5:30 AM - 12:00 PM" }
        ],
        reviews: [
            { name: "Mary C.", rating: 4, comment: "Perfect breakfast combo, never disappoints!" }
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
        gallery: [
              "./img/shawarma (4).jpg",
              "./img/shawarma (5).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Beef Shawarma Deluxe", price: "₦3,000", desc: "Triple beef with extra vegetables and premium cream" },
            { item: "Chicken Shawarma", price: "₦2,500", desc: "Succulent chicken with all the fixings" }
        ],
        hours: [
            { days: "Everyday", time: "12:00 PM - 11:00 PM" }
        ],
        reviews: [
            { name: "Hassan K.", rating: 5, comment: "Shawarma doesn't get better than this - authentic and fresh!" }
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
        gallery: [
              "./img/smallchops (4).jpg",
              "./img/smallchops (5).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Party Platter (30pcs)", price: "₦8,000", desc: "Assorted small chops including puff-puff, spring rolls, samosa & more" },
            { item: "Mini Starter Box", price: "₦3,500", desc: "Selection of 12 assorted pieces" }
        ],
        hours: [
            { days: "Mon - Sun", time: "10:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Angela B.", rating: 5, comment: "Perfect for events and gatherings - quality and taste guaranteed!" }
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
        gallery: [
             "./img/jollof (4).jpg",
             "./img/jollof (5).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Premium Jollof Combo", price: "₦4,500", desc: "Aromatic jollof with grilled chicken, coleslaw, and fried plantain" },
            { item: "Jollof Rice Bowl", price: "₦2,500", desc: "Generous portion of perfectly seasoned jollof rice" }
        ],
        hours: [
            { days: "Mon - Sat", time: "12:00 PM - 10:00 PM" }
        ],
        reviews: [
            { name: "Sophia O.", rating: 5, comment: "The taste of home! Best jollof experience in Ikoyi." }
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
        gallery: [
              "./img/amala (4).jpg",
              "./img/amala (5).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Amala & Ewedu with Beef", price: "₦3,000", desc: "Premium soft amala with tender beef and rich soup" },
            { item: "Amala & Gbegiri", price: "₦2,500", desc: "Classic combination perfectly executed" }
        ],
        hours: [
            { days: "Mon - Sun", time: "11:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Tayo R.", rating: 5, comment: "Authentic taste, generous portions - truly satisfying!" }
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
        gallery: [
            "./img/suya (3).jpg",
            "./img/suya (8).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Fire Level Suya", price: "₦2,200", desc: "Super spicy for the brave ones" },
            { item: "Medium Heat Suya", price: "₦2,000", desc: "Perfect balance of spice and flavor" }
        ],
        hours: [
            { days: "Mon - Sun", time: "4:00 PM - 11:30 PM" }
        ],
        reviews: [
            { name: "Kingsley T.", rating: 5, comment: "This is what suya should taste like - crispy, spicy, and perfect!" }
        ]
    },
    {
        id: 16,
        name: "Plantain & Protein Corner",
        location: "Ojota, Lagos",
        category: "Boli",
        rating: 4.5,
        reviewsCount: 165,
        image: "./img/bole (6).jpg",
        gallery: [
             "./img/bole (7).jpg",
             "./img/bole (8).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Boli with Grilled Fish", price: "₦4,000", desc: "Crispy boli paired with fresh grilled tilapia" },
            { item: "Boli with Meat", price: "₦3,500", desc: "Golden plantain with succulent grilled beef" }
        ],
        hours: [
            { days: "Mon - Sun", time: "8:00 AM - 9:00 PM" }
        ],
        reviews: [
            { name: "Chioma E.", rating: 5, comment: "The combo is unbeatable - fresh ingredients and great taste!" }
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
        gallery: [
            "./img/akara (7).jpg",
            "./img/akara (8).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Fresh Akara Batch", price: "₦1,000", desc: "Just fried golden bean cakes" },
            { item: "Akara Combo Breakfast", price: "₦2,500", desc: "Akara with pap and fresh juice" }
        ],
        hours: [
            { days: "Mon - Sat", time: "5:00 AM - 1:00 PM" }
        ],
        reviews: [
            { name: "Linda N.", rating: 5, comment: "Crispy outside, soft inside - breakfast heaven!" }
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
        gallery: [
              "./img/shawarma (7).jpg",
              "./img/bole (9).jpg"
        ],
        isOpen: false,
        menu: [
            { item: "Night Owl Special", price: "₦2,800", desc: "Beef shawarma with extra toppings" },
            { item: "Mixed Shawarma", price: "₦3,200", desc: "Beef and chicken combo" }
        ],
        hours: [
            { days: "Everyday", time: "8:00 PM - 4:00 AM" }
        ],
        reviews: [
            { name: "Bola A.", rating: 5, comment: "Perfect midnight cravings solution - always fresh!" }
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
        gallery: [
              "./img/smallchops (7).jpg",
              "./img/smallchops (8).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Full Event Catering", price: "₦50,000+", desc: "Customized packages for events" },
            { item: "Regular Small Chops Box", price: "₦5,000", desc: "Premium selection of fresh small chops" }
        ],
        hours: [
            { days: "Mon - Sun", time: "9:00 AM - 8:00 PM" }
        ],
        reviews: [
            { name: "Tunde A.", rating: 5, comment: "Professional catering with delicious options - highly recommended!" }
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
        gallery: [
             "./img/jollof (7).jpg"
        ],
        isOpen: true,
        menu: [
            { item: "Classic Jollof Meal", price: "₦3,500", desc: "Traditional jollof with chicken and plantain" },
            { item: "Jollof Rice Only", price: "₦2,000", desc: "Plain, perfectly seasoned jollof rice" }
        ],
        hours: [
            { days: "Mon - Sun", time: "12:00 PM - 9:30 PM" }
        ],
        reviews: [
            { name: "Foluke P.", rating: 5, comment: "Simple, authentic, and absolutely delicious!" }
        ]
    }
];

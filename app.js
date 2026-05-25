/**
 * Description: Main JavaScript Controller. for all state management and DOM manipulation,
 * URL parameter routing, localStorage persistence for saved spots, and dynamic content rendering.
 *
 * APPLICATION STATE & DATA
 */


      const categories = ["All", "Suya", "Boli", "Akara", "Amala", "Small Chops", "Shawarma", "Jollof"];

      const vendors = [
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

      /**
 * Global application state initialization.
 * Synchronizes with URL parameters and localStorage to maintain
 * user preferences across separate page loads.
 */
let state = {
    activeCategory: new URLSearchParams(window.location.search).get('cat') || 'All',
    searchQuery: new URLSearchParams(window.location.search).get('q') || '',
    savedVendors: new Set(JSON.parse(localStorage.getItem('savedVendors') || '[]')),
    previousView: document.referrer || 'index.html'
};

/**
 * Main Initialization Hook
 * This actually determines which components to render based on the current HTML file's DOM.
 * This acts as the router for the multi-page architecture.
 */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();

    const badge = document.getElementById('saved-badge');
    if (badge && state.savedVendors.size > 0) {
        badge.classList.remove('hidden');
    }

    if (document.getElementById('explore-grid')) {
        initExploreFilters();
        renderExploreGrid();

        const searchInput = document.getElementById('explore-search');
        if (searchInput) {
            searchInput.value = state.searchQuery;
            searchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value;
                renderExploreGrid();
            });
        }
    }

    if (document.getElementById('categories-grid')) {
        setTimeout(renderCategoriesPage, 200);
    }

    if (document.getElementById('detail-container')) {
        const id = parseInt(new URLSearchParams(window.location.search).get('id'));
        renderDetailView(id);
    }

    if (document.getElementById('saved-grid')) {
        renderSaved();
    }

    // Add fuzzy search suggestions for home page inputs
    const homeLocInput = document.getElementById('home-loc-input');
    const homeFoodInput = document.getElementById('home-food-input');
    
    if (homeLocInput) {
        homeLocInput.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            if (value.length > 1) {
                const suggestions = findSuggestions(value, 'location');
                showSearchSuggestions(suggestions, 'home-loc-input', 'home-loc-suggestions');
            } else {
                hideSuggestions('home-loc-suggestions');
            }
        });
    }
    
    if (homeFoodInput) {
        homeFoodInput.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            if (value.length > 1) {
                const suggestions = findSuggestions(value, 'food');
                showSearchSuggestions(suggestions, 'home-food-input', 'home-food-suggestions');
            } else {
                hideSuggestions('home-food-suggestions');
            }
        });
    }

    initScrollAnimations();
});




/**
 * Displays search suggestions below an input field
 * @param {Array} suggestions - Array of suggested terms
 * @param {string} inputId - ID of the input field
 * @param {string} suggestionsId - ID of the suggestions container
 */
function showSearchSuggestions(suggestions, inputId, suggestionsId) {
    let container = document.getElementById(suggestionsId);
    
    if (!container) {
        container = document.createElement('div');
        container.id = suggestionsId;
        container.className = 'absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-200 rounded-2xl shadow-lg z-50 p-3 flex flex-col gap-2';
        
        const inputEl = document.getElementById(inputId);
        if (inputEl && inputEl.parentElement) {
            inputEl.parentElement.style.position = 'relative';
            inputEl.parentElement.appendChild(container);
        }
    }
    
    if (suggestions.length === 0) {
        container.classList.add('hidden');
        return;
    }
    
    container.innerHTML = suggestions.map(sug => `
        <button onclick="document.getElementById('${inputId}').value = '${sug}'; hideSuggestions('${suggestionsId}');" 
            class="text-left px-3 py-2 text-sm text-dark hover:bg-zinc-50 rounded-lg transition-colors cursor-pointer font-light">
            <span class="font-medium">${sug}</span>
        </button>
    `).join('');
    
    container.classList.remove('hidden');
}

/**
 * Hides the suggestions container
 * @param {string} suggestionsId - ID of the suggestions container
 */
function hideSuggestions(suggestionsId) {
    const container = document.getElementById(suggestionsId);
    if (container) {
        container.classList.add('hidden');
    }
}

/**
 * Navigates to the detailed view of a specific vendor.
 * @param {number|string} id - The unique identifier of the vendor.
 */
function viewVendor(id) { window.location.href = 'detail.html?id=' + id; }

/**
 * Fuzzy search implementation using Levenshtein distance algorithm
 * Calculates the minimum number of edits (insertions, deletions, substitutions) needed
 * to transform one string into another
 * @param {string} str1 - First string to compare
 * @param {string} str2 - Second string to compare
 * @returns {number} - Levenshtein distance
 */
function levenshteinDistance(str1, str2) {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    const len1 = s1.length;
    const len2 = s2.length;
    
    // Create a matrix
    const matrix = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(0));
    
    // Initialize first row and column
    for (let i = 0; i <= len1; i++) matrix[0][i] = i;
    for (let j = 0; j <= len2; j++) matrix[j][0] = j;
    
    // Fill the matrix
    for (let j = 1; j <= len2; j++) {
        for (let i = 1; i <= len1; i++) {
            const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,      // deletion
                matrix[j - 1][i] + 1,      // insertion
                matrix[j - 1][i - 1] + indicator  // substitution
            );
        }
    }
    
    return matrix[len2][len1];
}

/**
 * Calculates similarity score between 0 and 1
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Similarity score (0-1)
 */
function calculateSimilarity(str1, str2) {
    const distance = levenshteinDistance(str1, str2);
    const maxLen = Math.max(str1.length, str2.length);
    return maxLen === 0 ? 1 : 1 - (distance / maxLen);
}

/**
 * Finds suggestions for a misspelled search term
 * @param {string} searchTerm - The search term to find suggestions for
 * @param {string} searchType - Either 'food', 'location', or 'all'
 * @returns {Array} - Array of suggested terms
 */
function findSuggestions(searchTerm, searchType = 'all') {
    if (!searchTerm || searchTerm.length < 2) return [];
    
    const allLocations = [...new Set(vendors.map(v => v.location.split(',')[0].trim()))];
    const allCategories = categories.filter(c => c !== 'All');
    
    let searchPool = [];
    if (searchType === 'food' || searchType === 'all') {
        searchPool = searchPool.concat(allCategories);
    }
    if (searchType === 'location' || searchType === 'all') {
        searchPool = searchPool.concat(allLocations);
    }
    
    // Calculate similarity scores
    const suggestions = searchPool
        .map(term => ({
            term,
            similarity: calculateSimilarity(searchTerm, term),
            isExact: searchTerm.toLowerCase() === term.toLowerCase()
        }))
        .filter(item => item.similarity > 0.5 && !item.isExact)  // 50% similarity threshold
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3)  // Get top 3 suggestions
        .map(item => item.term);
    
    return suggestions;
}

/**
 * Performs fuzzy search on vendors
 * @param {string} searchTerm - The term to search for
 * @param {Array} vendorsList - List of vendors to search through
 * @returns {Array} - Filtered vendors sorted by relevance
 */
function fuzzySearchVendors(searchTerm, vendorsList = vendors) {
    if (!searchTerm || searchTerm.trim().length === 0) return vendorsList;
    
    const terms = searchTerm.trim().toLowerCase().split(/\s+/);
    
    const vendorScores = vendorsList.map(vendor => {
        let totalScore = 0;
        let matchCount = 0;
        
        terms.forEach(term => {
            const nameScore = calculateSimilarity(term, vendor.name.toLowerCase());
            const locationScore = calculateSimilarity(term, vendor.location.toLowerCase());
            const categoryScore = calculateSimilarity(term, vendor.category.toLowerCase());
            
            // Perfect matches get highest score, fuzzy matches get lower
            if (vendor.name.toLowerCase().includes(term)) totalScore += 10;
            else totalScore += nameScore * 3;
            
            if (vendor.location.toLowerCase().includes(term)) totalScore += 8;
            else totalScore += locationScore * 2;
            
            if (vendor.category.toLowerCase().includes(term)) totalScore += 10;
            else totalScore += categoryScore * 3;
            
            if (nameScore > 0.5 || locationScore > 0.5 || categoryScore > 0.5) {
                matchCount++;
            }
        });
        
        const averageScore = matchCount > 0 ? totalScore / terms.length : -1;
        
        return {
            vendor,
            score: averageScore
        };
    });
    
    return vendorScores
        .filter(item => item.score >= 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.vendor);
}

/**
 * Executes a compound search using both location and food type inputs.
 * Redirects to the explore page with the query URL parameter.
 */
function executeSearch() {
    const loc = document.getElementById('home-loc-input').value;
    const food = document.getElementById('home-food-input').value;
    const query = `${loc} ${food}`.trim();
    window.location.href = `explore.html?q=${encodeURIComponent(query)}`;
}

/**
 * Navigates directly to the explore page filtered by a specific category.
 * @param {string} category - The category to filter by (e.g., 'Suya', 'Boli').
 */
function quickSearch(category) {
    window.location.href = `explore.html?cat=${encodeURIComponent(category)}`;
}

/**
 * Renders the interactive category filter pill buttons on the Explore page.
 * Highlights the currently active category.
 */
function initExploreFilters() {
    const container = document.getElementById('category-filters');
    if (!container) return;
    container.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat}')"
                class="px-4 py-1.5 rounded-full whitespace-nowrap text-xs font-semibold transition-all duration-300 border cursor-pointer active:scale-95
                ${state.activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-md hover:bg-primary-hover'
                    : 'bg-white text-muted border-zinc-200 hover:text-dark hover:bg-zinc-50 hover:border-zinc-300 shadow-sm'}">
            ${cat}
        </button>
    `).join('');
}

/**
 * Updates the active category state and re-renders the explore grid.
 * @param {string} cat - The category to set as active.
 */
function setCategory(cat) {
    state.activeCategory = cat;
    initExploreFilters();
    renderExploreGrid();
}

/**
 * Clears all active search queries and category filters, resetting the explore view to show all spots.
 */
function clearFilters() {
    state.activeCategory = 'All';
    state.searchQuery = '';
    const searchInput = document.getElementById('explore-search');
    if (searchInput) searchInput.value = '';
    initExploreFilters();
    renderExploreGrid();
}

/**
 * Toggles the "saved/bookmarked" state of a vendor.
 * Updates localStorage, the navigation badge, and forces a re-render of the relevant view.
 * @param {number} id - The vendor ID to save or unsave.
 * @param {Event} event - The click event to stop propagation.
 */
function toggleSave(id, event) {
    event.stopPropagation();
    if (state.savedVendors.has(id)) {
        state.savedVendors.delete(id);
    } else {
        state.savedVendors.add(id);
    }
    
    localStorage.setItem('savedVendors', JSON.stringify([...state.savedVendors]));

    const badge = document.getElementById('saved-badge');
    if(badge) {
        if (state.savedVendors.size > 0) badge.classList.remove('hidden');
        else badge.classList.add('hidden');
    }

    if (document.getElementById('explore-grid')) renderExploreGrid();
    if (document.getElementById('detail-container')) renderDetailView(parseInt(new URLSearchParams(window.location.search).get('id')));
    if (document.getElementById('saved-grid')) renderSaved();
}




/**
 * Renders the grid of vendor cards on the Explore page based on current filters and search queries.
 * Displays an empty state graphic if no matches are found, with suggestions for typos.
 */
function renderExploreGrid() {
    const grid = document.getElementById('explore-grid');
    const emptyState = document.getElementById('explore-empty');
    const resultsText = document.getElementById('results-count');
    
    if (!grid) return;

    // Start with category filter
    let filtered = vendors;
    if (state.activeCategory !== 'All') {
        filtered = filtered.filter(v => v.category === state.activeCategory);
    }
    
    // Apply fuzzy search if there's a search query
    if (state.searchQuery && state.searchQuery.trim().length > 0) {
        filtered = fuzzySearchVendors(state.searchQuery, filtered);
    }

    if(resultsText) resultsText.textContent = `Showing ${filtered.length} spot${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        
        // Show enhanced empty search state
        if (state.searchQuery && state.searchQuery.trim().length > 0) {
            const suggestionDiv = emptyState.querySelector('#search-suggestions');
            if (suggestionDiv) {
                suggestionDiv.innerHTML = `
                    <div class="text-center max-w-sm mx-auto mt-2">
                        <div class="text-5xl mb-2">😔</div>
                        <h3 class="text-lg font-medium text-dark mb-1">
                            No street food spots found.
                        </h3>
                        <p class="text-sm text-muted font-light mb-4">
                            Try searching for:
                        </p>
                        <ul class="flex flex-col gap-2 text-left">
                            ${['Suya', 'Akara', 'Boli'].map(term => `
                                <li>
                                    <button onclick="state.searchQuery = '${term}'; renderExploreGrid();" 
                                        class="w-full px-4 py-2.5 text-left bg-white hover:bg-primary/5 border border-zinc-200 hover:border-primary/20 rounded-lg text-sm font-light text-dark transition-all hover:text-primary cursor-pointer flex items-center gap-2 group">
                                        <span class="text-muted group-hover:text-primary transition-colors">•</span>
                                        <span>${term}</span>
                                    </button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
                suggestionDiv.classList.remove('hidden');
            }
        } else {
            // Clear suggestions if no search query
            const suggestionDiv = emptyState.querySelector('#search-suggestions');
            if (suggestionDiv) {
                suggestionDiv.innerHTML = '';
                suggestionDiv.classList.add('hidden');
            }
        }
    } else {
        grid.classList.remove('hidden');
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');
        
        // Hide suggestions if there are results
        const suggestionDiv = document.getElementById('search-suggestions');
        if (suggestionDiv) suggestionDiv.classList.add('hidden');

        grid.innerHTML = filtered.map((v, index) => {
            const isSaved = state.savedVendors.has(v.id);
            return `
            <div onclick="viewVendor(${v.id})" class="group bg-white rounded-[1.5rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-subtle transition-all duration-300 cursor-pointer flex flex-col h-full scroll-animate scroll-stagger-${(index % 6) + 1}">
                <div class="relative h-48 overflow-hidden bg-zinc-100 p-2">
                    <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out">
                    <div class="absolute top-4 left-4">
                        ${v.isOpen
                            ? '<span class="px-2.5 py-1 glass-pill text-dark text-[10px] uppercase tracking-wider font-semibold rounded-full">Open</span>'
                            : '<span class="px-2.5 py-1 glass-pill-dark text-white text-[10px] uppercase tracking-wider font-semibold rounded-full">Closed</span>'}
                    </div>
                    <button onclick="toggleSave(${v.id}, event)" class="absolute top-4 right-4 w-8 h-8 glass-pill rounded-full flex items-center justify-center text-dark hover:text-primary transition-colors active:scale-95 cursor-pointer">
                        <iconify-icon icon="${isSaved ? 'solar:heart-bold' : 'solar:heart-linear'}" class="text-base ${isSaved ? 'text-primary' : ''}"></iconify-icon>
                    </button>
                </div>
                <div class="p-5 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="font-medium text-base tracking-tight text-dark group-hover:text-primary transition-colors line-clamp-1">${v.name}</h3>
                        <div class="flex items-center gap-1">
                            <iconify-icon icon="solar:star-bold" class="text-sm text-primary"></iconify-icon>
                            <span class="text-sm font-semibold text-dark">${v.rating}</span>
                        </div>
                    </div>
                    <p class="text-sm text-muted font-light flex items-center gap-1.5 mb-4">
                        <iconify-icon icon="solar:map-point-linear"></iconify-icon> ${v.location}
                    </p>
                    <div class="mt-auto pt-3 flex items-center justify-between">
                        <span class="text-xs text-muted font-semibold">${v.category}</span>
                        <span class="text-xs text-zinc-400 font-light">${v.reviewsCount} reviews</span>
                    </div>
                </div>
            </div>
        `}).join('');

        if (typeof initScrollAnimations === 'function') {
            setTimeout(() => initScrollAnimations(), 50);
        }
    }
}




/**
 * Renders the detailed profile view for a specific vendor on the Detail page.
 * Includes galleries, highlights, hours, directions, and reviews.
 * @param {number} id - The vendor ID to display.
 */
function renderDetailView(id) {
    const vendor = vendors.find(v => v.id === id);
    if (!vendor) {
        window.location.href = 'explore.html';
        return;
    }

    const container = document.getElementById('detail-container');
    if(!container) return;
    
    const isSaved = state.savedVendors.has(vendor.id);

    container.innerHTML = `
        <button onclick="window.history.length > 1 ? window.history.back() : window.location.href='explore.html'" class="flex items-center gap-2 text-muted hover:text-dark font-medium text-sm mb-8 transition-colors w-max group cursor-pointer bg-white px-4 py-2 rounded-full border border-zinc-200/60 shadow-sm hover:shadow-md">
            <iconify-icon icon="solar:arrow-left-linear" class="text-lg group-hover:-translate-x-1 transition-transform"></iconify-icon>
            Back
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-5 relative">
                <div class="sticky top-[110px] flex flex-col gap-4">
                    <div class="aspect-square rounded-[2rem] overflow-hidden bg-background shadow-sm border border-zinc-100 relative group p-2">
                        <img src="${vendor.image}" alt="${vendor.name}" class="w-full h-full object-cover rounded-[1.5rem]">
                        <button onclick="toggleSave(${vendor.id}, event)" class="absolute top-6 right-6 w-10 h-10 glass-pill rounded-full flex items-center justify-center text-dark hover:text-primary transition-colors active:scale-[0.98] cursor-pointer">
                            <iconify-icon icon="${isSaved ? 'solar:heart-bold' : 'solar:heart-linear'}" class="text-lg ${isSaved ? 'text-primary' : ''}"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 flex flex-col">
                <div class="border-b border-zinc-100 pb-8 mb-8">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="px-2.5 py-1 bg-zinc-100 text-dark text-[10px] uppercase tracking-widest font-semibold rounded-full">${vendor.category}</span>
                        ${vendor.isOpen
                            ? '<span class="px-2.5 py-1 bg-green-50 text-green-700 border border-green-100 text-[10px] uppercase tracking-widest font-semibold rounded-full flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-green-505 animate-pulse"></span> Open</span>'
                            : '<span class="px-2.5 py-1 bg-zinc-100 text-muted border border-zinc-200 text-[10px] uppercase tracking-widest font-semibold rounded-full">Closed</span>'}
                    </div>

                    <h1 class="text-4xl md:text-5xl font-medium tracking-tight text-dark mb-4">${vendor.name}</h1>

                    <div class="flex flex-wrap items-center gap-6 text-sm text-muted font-light">
                        <div class="flex items-center gap-2">
                            <iconify-icon icon="solar:map-point-linear" class="text-lg"></iconify-icon>
                            ${vendor.location}
                        </div>
                        <div class="flex items-center gap-2">
                            <iconify-icon icon="solar:star-bold" class="text-lg text-primary"></iconify-icon>
                            <span class="font-medium text-dark">${vendor.rating}</span>
                            <span>(${vendor.reviewsCount} reviews)</span>
                        </div>
                    </div>
                </div>

                <div class="mb-10">
                    <h2 class="text-xl font-medium tracking-tight text-dark mb-4 flex items-center gap-2">
                        <iconify-icon icon="solar:shop-minimalistic-linear" class="text-muted"></iconify-icon> Highlights
                    </h2>
                    <div class="flex flex-col gap-3">
                        ${vendor.menu.map(item => `
                            <div class="flex justify-between items-start p-4 rounded-2xl bg-background border border-zinc-100 hover:border-zinc-200 transition-colors">
                                <div>
                                    <h4 class="font-semibold text-sm text-dark mb-1">${item.item}</h4>
                                    <p class="text-xs text-muted font-light">${item.desc}</p>
                                </div>
                                <span class="font-semibold text-sm text-dark bg-white px-3 py-1 rounded-full border border-zinc-100 shadow-sm whitespace-nowrap">${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div class="bg-background p-6 rounded-2xl border border-zinc-100">
                        <h3 class="text-sm font-semibold tracking-tight text-dark mb-3 flex items-center gap-2">
                            <iconify-icon icon="solar:clock-circle-linear" class="text-muted"></iconify-icon> Hours
                        </h3>
                        <div class="flex flex-col gap-2">
                            ${vendor.hours.map(h => `
                                <div class="flex justify-between items-center text-xs">
                                    <span class="text-muted font-light">${h.days}</span>
                                    <span class="text-dark font-semibold">${h.time}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="bg-dark p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                        <div class="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white mb-3">
                            <iconify-icon icon="solar:routing-2-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Directions</h3>
                        <p class="text-xs text-zinc-400 font-light mb-4">Fastest route to ${vendor.name}</p>
                        <button class="px-5 py-2 bg-white text-dark rounded-full font-semibold text-xs hover:bg-zinc-100 transition-colors w-full active:scale-[0.98] cursor-pointer shadow-md">Open Maps</button>
                    </div>
                </div>

                <div>
                    <h2 class="text-xl font-medium tracking-tight text-dark mb-4 flex items-center gap-2">
                        <iconify-icon icon="solar:chat-round-line-linear" class="text-muted"></iconify-icon> Reviews
                    </h2>
                    <div class="flex flex-col gap-4">
                        ${vendor.reviews.map(rev => `
                            <div class="p-5 rounded-2xl border border-zinc-100 shadow-sm bg-white">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-background border border-zinc-200 text-dark flex items-center justify-center font-semibold text-xs">
                                            ${rev.name.charAt(0)}
                                        </div>
                                        <span class="font-semibold text-sm text-dark">${rev.name}</span>
                                    </div>
                                    <div class="flex items-center gap-0.5">
                                        ${Array(5).fill(0).map((_, i) => `
                                            <iconify-icon icon="solar:star-bold" class="text-xs ${i < rev.rating ? 'text-primary' : 'text-zinc-200'}"></iconify-icon>
                                        `).join('')}
                                    </div>
                                </div>
                                <p class="text-sm text-muted font-light leading-relaxed">"${rev.comment}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}





/**
 * Renders the grid of saved vendors on the Saved Spots page.
 * Loads dynamically from the user's localStorage state.
 */
function renderSaved() {
    const grid = document.getElementById('saved-grid');
    const empty = document.getElementById('saved-empty');
    if(!grid) return;
    
    const savedList = vendors.filter(v => state.savedVendors.has(v.id));

    if (savedList.length === 0) {
        grid.classList.add('hidden');
        empty.classList.remove('hidden');
        empty.classList.add('flex');
    } else {
        grid.classList.remove('hidden');
        empty.classList.add('hidden');
        empty.classList.remove('flex');
        grid.innerHTML = savedList.map((v, index) => `
            <div onclick="viewVendor(${v.id})" class="group bg-white rounded-[1.5rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-subtle transition-all duration-300 cursor-pointer flex flex-col h-full scroll-animate scroll-stagger-${(index % 6) + 1}">
                <div class="relative h-40 overflow-hidden bg-zinc-100 p-2">
                    <img src="${v.image}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500">
                    <button onclick="toggleSave(${v.id}, event); renderSaved();" class="absolute top-4 right-4 w-8 h-8 glass-pill rounded-full flex items-center justify-center text-primary active:scale-95 cursor-pointer">
                        <iconify-icon icon="solar:heart-bold" class="text-base"></iconify-icon>
                    </button>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-medium text-sm tracking-tight text-dark mb-1 group-hover:text-primary transition-colors">${v.name}</h3>
                    <p class="text-xs text-muted font-light flex items-center gap-1.5 mb-3"><iconify-icon icon="solar:map-point-linear"></iconify-icon> ${v.location}</p>
                    <div class="mt-auto pt-3 border-t border-zinc-50 flex justify-between items-center">
                        <span class="text-[10px] uppercase tracking-widest font-semibold text-muted">${v.category}</span>
                        <span class="text-xs font-semibold flex items-center gap-1 text-dark"><iconify-icon icon="solar:star-bold" class="text-primary"></iconify-icon> ${v.rating}</span>
                    </div>
                </div>
            </div>
        `).join('');

        if (typeof initScrollAnimations === 'function') {
            setTimeout(() => initScrollAnimations(), 50);
        }
    }
}




/**
 * Renders the larger category cards on the standalone Categories page.
 */
function renderCategoriesPage() {
    const grid = document.getElementById('categories-grid');
    if(grid) {
        const cats = categories.filter(c => c !== 'All');
        grid.innerHTML = cats.map((c, index) => `
            <div onclick="quickSearch('${c}')" class="group bg-white border border-zinc-100 rounded-[1.5rem] p-6 text-center cursor-pointer hover:shadow-subtle transition-all scroll-animate scroll-stagger-${(index % 6) + 1}">
                <div class="w-12 h-12 mx-auto bg-background rounded-full border border-zinc-100 flex items-center justify-center text-dark mb-3 group-hover:scale-105 transition-transform">
                    <iconify-icon icon="solar:shop-minimalistic-linear" class="text-xl"></iconify-icon>
                </div>
                <h3 class="text-sm font-semibold text-dark group-hover:text-primary transition-colors">${c}</h3>
            </div>
        `).join('');

        if (typeof initScrollAnimations === 'function') {
            setTimeout(() => initScrollAnimations(), 50);
        }
    }
}




/**
 * Initializes IntersectionObserver to trigger CSS animations when elements
 * scroll into the viewport. Targets elements with .scroll-animate classes.
 */
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-fade, .scroll-animate-scale');
    if (animateElements.length === 0) return;
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    animateElements.forEach(el => observer.observe(el));
}



function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if(!btn || !menu) return;
    let isOpen = false;
    btn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.remove('translate-x-full');
            btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl" style="color: black;"></iconify-icon>';
        } else {
            menu.classList.add('translate-x-full');
            btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl" style="color: black;"></iconify-icon>';
        }
    });
}

Object.assign(window, {
    viewVendor, executeSearch, quickSearch, setCategory, clearFilters, toggleSave, renderSaved, renderCategoriesPage,
    fuzzySearchVendors, findSuggestions, calculateSimilarity, levenshteinDistance
});

export const categoryDataMap: Record<string, any> = {
  "lighting": {
    header: {
      breadcrumbs: ["Home & Kitchen", "Indoor Lighting"],
      title: "Buy Lighting Solutions Online at Amazon India",
      description: "Explore the wide range of lighting solutions for your home at Amazon India. Shop from a wide range of lighting solutions from top brands like Wipro, SYSKA, PHILIPS, Halonix, Desidiya and many more at Amazon.in."
    },
    sidebar: {
      categories: [
        { name: "Home & Kitchen", href: "/category/home-kitchen" },
        { name: "Indoor Lighting", href: "/category/lighting", current: true, subcategories: [
          { name: "Ceiling Lighting", count: 120 },
          { name: "Ceiling-mounted lights", count: 85 },
          { name: "Desktop Lamp", count: 240 },
          { name: "Light Bulbs", count: 540 },
          { name: "Table Lamps", count: 320 }
        ]}
      ],
      brands: ["Philips", "Wipro", "Crompton", "Syska", "Halonix", "Havells"]
    },
    banners: [
      { id: 1, image: "https://m.media-amazon.com/images/G/31/IMG20/Home/2024/Lightingstore/Lighting_Header_Mob_3000x700._CB584759334_.gif" }
    ],
    products: [
      { 
        id: "lit-1", 
        name: "Philips 12W LED Bulb B22, Cool Day Light", 
        price: 199, 
        originalPrice: 299, 
        rating: 4.5, 
        reviewCount: 15280, 
        image: "https://m.media-amazon.com/images/I/51-mE6mXkML._SX679_.jpg", 
        isPrime: true, 
        delivery: "Tomorrow",
        technicalDetails: {
          "Brand": "Philips",
          "Light Type": "LED",
          "Wattage": "12 Watts",
          "Bulb Base": "B22",
          "Color Temperature": "6500 Kelvin"
        },
        aboutThisItem: [
          "Energy Efficient: Save up to 85% on your energy bills.",
          "Long Life: Up to 15,000 hours of light.",
          "High Brightness: 100 lumens per watt performance."
        ]
      },
      { 
        id: "lit-2", 
        name: "Wipro 10W Smart LED Bulb, 16M Colors", 
        price: 599, 
        originalPrice: 1299, 
        rating: 4.1, 
        reviewCount: 4200, 
        image: "https://m.media-amazon.com/images/I/51m+S5fM7GL._SX679_.jpg", 
        isPrime: true, 
        delivery: "Tomorrow",
        technicalDetails: {
          "Brand": "Wipro",
          "Smart Feature": "WiFi Enabled",
          "Compatible": "Alexa & Google Assistant",
          "Color": "16 Million Colors"
        },
        aboutThisItem: [
          "Voice Control: Works with Amazon Alexa and Google Assistant.",
          "16 Million Colors: Choose your mood with any color.",
          "Scheduling: Set timers to automatically turn on/off."
        ]
      }
    ]
  },
  "appliances": {
    header: {
      breadcrumbs: ["Home & Kitchen", "Appliances"],
      title: "Appliances for your home | Up to 55% off",
      description: "Upgrade your home with the latest appliances. Shop refrigerators, washing machines, air conditioners and more from top brands at deep discounts."
    },
    sidebar: {
      categories: [
        { name: "Home & Kitchen", href: "/category/home-kitchen" },
        { name: "Appliances", href: "/category/appliances", current: true, subcategories: [
          { name: "Air Conditioners", count: 450 },
          { name: "Refrigerators", count: 320 },
          { name: "Washing Machines", count: 540 },
          { name: "Microwaves", count: 210 }
        ]}
      ],
      brands: ["LG", "Samsung", "Whirlpool", "Haier", "Bosch"]
    },
    banners: [
      { id: 1, image: "https://m.media-amazon.com/images/G/31/IMG15/Appliances/XCM_PC_Hero_Appliances_3000x800._CB563914934_.jpg" }
    ],
    products: [
      { 
        id: "app-1", 
        name: "Samsung 253 L 3 Star Inverter Frost Free Refrigerator", 
        price: 24990, 
        originalPrice: 31990, 
        rating: 4.4, 
        reviewCount: 8500, 
        image: "https://m.media-amazon.com/images/I/71WpB2-Z2pL._SL1500_.jpg", 
        isPrime: true, 
        delivery: "Monday, Oct 2",
        technicalDetails: {
          "Capacity": "253 Liters",
          "Energy Rating": "3 Star",
          "Compressor": "Digital Inverter",
          "Freezer": "Frost Free"
        },
        aboutThisItem: [
          "Auto-Defrost function to prevent ice build-up.",
          "Digital Inverter Compressor for energy efficiency.",
          "Toughened Glass Shelves."
        ]
      },
      { 
        id: "app-2", 
        name: "LG 7 kg 5 Star Inverter Fully-Automatic Front Load", 
        price: 28990, 
        originalPrice: 42990, 
        rating: 4.5, 
        reviewCount: 12000, 
        image: "https://m.media-amazon.com/images/I/71r99R5y-dL._SL1500_.jpg", 
        isPrime: true, 
        delivery: "Tomorrow",
        technicalDetails: {
          "Capacity": "7.0 Kilograms",
          "Maximum Spin Speed": "1200 RPM",
          "Energy Rating": "5 Star",
          "Type": "Fully-automatic Front load"
        },
        aboutThisItem: [
          "6 Motion Direct Drive technology.",
          "Inverter Direct Drive Motor.",
          "Heater for deep cleaning."
        ]
      }
    ]
  },
  "automotive": {
    header: {
      breadcrumbs: ["Car & Motorbike", "Automotive Essentials"],
      title: "Automotive Essentials | Up to 60% off",
      description: "Everything your vehicle needs. From cleaning kits to high-performance accessories, find the best deals on car and bike essentials."
    },
    sidebar: {
      categories: [
        { name: "Car & Motorbike", href: "/category/automotive" },
        { name: "Automotive Essentials", href: "/category/automotive", current: true, subcategories: [
          { name: "Car Cleaning Kits", count: 85 },
          { name: "Motorcycle Accessories", count: 120 },
          { name: "Car Electronics", count: 50 },
          { name: "Helmets", count: 240 }
        ]}
      ],
      brands: ["Steelbird", "3M", "Vega", "Studds", "Skechers"]
    },
    banners: [
      { id: 1, image: "https://m.media-amazon.com/images/G/31/img22/Automotive/XCM_PC_Hero_Automotive_3000x800._CB563914934_.jpg" }
    ],
    products: [
      { 
        id: "auto-1", 
        name: "3M Car Care Large Liquid Wax (200ml)", 
        price: 349, 
        originalPrice: 450, 
        rating: 4.2, 
        reviewCount: 5600, 
        image: "https://m.media-amazon.com/images/I/61I+pInBq5L._SL1500_.jpg", 
        isPrime: true, 
        delivery: "Tomorrow",
        technicalDetails: { "Brand": "3M", "Item Form": "Liquid" },
        aboutThisItem: ["Easy to apply.", "Provides high gloss."]
      },
      { 
        id: "auto-2", 
        name: "Steelbird SBA-7 7Wings ISI Certified Helmet", 
        price: 1290, 
        originalPrice: 1799, 
        rating: 4.3, 
        reviewCount: 18900, 
        image: "https://m.media-amazon.com/images/I/61l6E4+80HL._SL1500_.jpg", 
        isPrime: true, 
        delivery: "Sunday",
        technicalDetails: { "Brand": "Steelbird", "Certification": "ISI Certified" },
        aboutThisItem: ["ABS Shell.", "Breathable Padding."]
      }
    ]
  },
  "home-kitchen": {
    header: {
      breadcrumbs: ["Home & Kitchen"],
      title: "Revamp your home in style",
      description: "Upgrade your living space with our curated collection of home decor, kitchenware, and furniture. Premium quality at Amazon prices."
    },
    sidebar: {
      categories: [
        { name: "Home & Kitchen", href: "/category/home-kitchen", current: true, subcategories: [
          { name: "Cookware & Bakeware", count: 540 },
          { name: "Home Decor", count: 820 },
          { name: "Home Furnishing", count: 1100 },
          { name: "Kitchen Storage", count: 450 }
        ]}
      ],
      brands: ["Prestige", "Pigeon", "Usha", "Solimo"]
    },
    banners: [
      { id: 1, image: "https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HomeRevamp/Hero_PC_3000x800._CB563914934_.jpg" }
    ],
    products: [
      { 
        id: "hk-1", 
        name: "Prestige Iris Plus 750 Watt Mixer Grinder", 
        price: 3299, 
        originalPrice: 6295, 
        rating: 4.1, 
        reviewCount: 45000, 
        image: "https://m.media-amazon.com/images/I/61S6h8-v3BL._SL1500_.jpg", 
        isPrime: true, 
        delivery: "Tomorrow",
        technicalDetails: { "Brand": "Prestige", "Wattage": "750 Watts" },
        aboutThisItem: ["Stainless Steel Jars.", "Powerful Motor."]
      },
      {
        id: "hk-scale",
        name: "ATOM ALISTON K1 Series Digital Kitchen Weighing Scale 10 kg, Electronic Weight Machine with LCD Display for Baking, Cooking, Food & Diet, SF-400/A121. 6Months Warranty (Colour May Vary)",
        price: 215,
        originalPrice: 599,
        rating: 4.8,
        reviewCount: 22207,
        boughtInLastMonth: "20K+",
        amazonChoice: true,
        image: "/products/scale-main.png",
        images: [
          "/products/scale-main.png",
          "/products/scale-context.png",
          "/products/scale-main.png",
          "/products/scale-context.png"
        ],
        isPrime: true,
        delivery: "Tuesday, 31 March",
        technicalDetails: {
          "Brand": "Aliston",
          "Manufacturer": "M/s Zhejiang Tiansheng Electronics Co. Ltd, China",
          "Model Name": "K1 Series",
          "Model Number": "SF400",
          "Capacity": "10kg / 1g Precision",
          "Units": "g, oz",
          "Battery Type": "2 x AA (Included)",
          "Net Quantity": "1.00 count",
          "Best Sellers Rank": "#1 in Digital Kitchen Scales",
          "ASIN": "B083C6XMKQ",
          "Country of Origin": "China"
        },
        offers: [
          { title: "Bank Offer", content: "Upto ₹1,000.00 discount on select Credit Cards", linkText: "15 offers >" },
          { title: "Cashback", content: "Get ₹6.00 cashback on Amazon Pay", linkText: "1 offer >" },
          { title: "Partner Offers", content: "Get GST invoice and save up to 18% on business purchases", linkText: "1 offer >" }
        ],
        services: [
          { icon: "pay-on-delivery", label: "Pay on Delivery" },
          { icon: "replacement", label: "10 days Replacement" },
          { icon: "amazon-delivered", label: "Amazon Delivered" },
          { icon: "warranty", label: "6 Months Warranty" },
          { icon: "top-brand", label: "Top Brand" }
        ],
        variations: [
          { name: "SF-400 (White)", price: 215, originalPrice: 599, image: "/products/scale-main.png", selected: true },
          { name: "SF-400A (Adapter Support)", price: 381, originalPrice: 999, image: "/products/scale-main.png" },
          { name: "A-225 (Steel Body)", price: 1245, originalPrice: 2199, image: "/products/scale-main.png" }
        ],
        aboutThisItem: [
          "High-Precision Sensors: Equipped with advanced sensors for quick and accurate measurements, ensuring precise results for recipes.",
          "Versatile Measurement Range: Measures in grams (g) and ounces (oz) with a broad range of 1g to 10,000g (10kg).",
          "TARE Functionality: Features a 'TARE' button to subtract the weight of an empty bowl or container, allowing for net weight calculation.",
          "10kg Capacity: Offers a high weight capacity suitable for various kitchen tasks, from measuring portions for a diet to tracking calories.",
          "Versatile & Multifunctional: Designed for kitchen use, food weighing, baking, and health/diet tracking.",
          "Clear LCD Display: Easy to read even in low light conditions with high contrast numbers.",
          "Compact & Portable: Minimalist design that fits perfectly on any kitchen counter and is easy to store."
        ],
        breadcrumbs: ["Home & Kitchen", "Kitchen & Home Appliances", "Small Kitchen Appliances", "Digital Kitchen Scales", "Digital Scales"]
      }
    ]
  },
  "home-essentials": {
    header: {
      breadcrumbs: ["Home & Kitchen", "Home Essentials"],
      title: "Deals on Home Essentials | Starting ₹49",
      description: "Daily needs and household essentials. Everything from cleaning supplies to bathroom accessories at the best prices."
    },
    sidebar: {
      categories: [
        { name: "Home & Kitchen", href: "/category/home-kitchen" },
        { name: "Home Essentials", href: "/category/home-essentials", current: true, subcategories: [
          { name: "Cleaning Supplies", count: 320 },
          { name: "Bathroom Accessories", count: 210 },
          { name: "Laundry Supplies", count: 150 }
        ]}
      ],
      brands: ["Vim", "Surf Excel", "Lizol", "Dettol"]
    },
    banners: [
      { id: 1, image: "https://m.media-amazon.com/images/G/31/IMG23/Home/Essentials/Hero_PC_3000x800._CB563914934_.jpg" }
    ],
    products: [
      { 
        id: "ess-1", 
        name: "Lizol Disinfectant Surface Cleaner, 2L", 
        price: 349, 
        originalPrice: 399, 
        rating: 4.6, 
        reviewCount: 88000, 
        image: "https://m.media-amazon.com/images/I/61-v8aK7SGL._SL1500_.jpg", 
        isPrime: true, 
        delivery: "Tomorrow",
        technicalDetails: { "Volume": "2 Litres", "Fragrance": "Citrus" },
        aboutThisItem: ["Kills 99.9% germs.", "India's #1 Surface Cleaner."]
      }
    ]
  },
  "electronics": {
    header: {
      breadcrumbs: ["Electronics", "Home Theater"],
      title: "Home Theater & Audio Systems",
      description: "Experience cinema at home with our premium collection of speakers and audio systems."
    },
    sidebar: {
      categories: [
        { name: "Electronics", href: "/category/electronics", current: true }
      ],
      brands: ["Philips", "Sony", "Bose"]
    },
    banners: [],
    products: [
      {
        id: "elec-1",
        name: "Premium Series 7.1 Digital 60W Bluetooth Home Theater System",
        price: 2563,
        originalPrice: 4000,
        rating: 4.3,
        reviewCount: 1200,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600",
        isPrime: true,
        delivery: "Wednesday",
        technicalDetails: { "Brand": "Tronica", "Power": "60W" },
        aboutThisItem: ["7.1 Digital Sound.", "Bluetooth Connectivity."]
      }
    ]
  },
  "fashion": {
    header: {
      breadcrumbs: ["Clothing", "Women's Fashion"],
      title: "Women's Clothing & Accessories",
      description: "Stay in style with our latest collection of apparel."
    },
    sidebar: {
      categories: [
        { name: "Fashion", href: "/category/fashion", current: true }
      ],
      brands: ["Bewakoof", "Adidas", "Levi's"]
    },
    banners: [],
    products: [
      {
        id: "fas-1",
        name: "Women's Graphic Printed Half Sleeve T-Shirt - Mickey Edition",
        price: 495,
        originalPrice: 1099,
        rating: 4.5,
        reviewCount: 850,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600",
        isPrime: true,
        delivery: "Tomorrow",
        technicalDetails: { "Brand": "Bewakoof", "Material": "Cotton" },
        aboutThisItem: ["Official Disney Merchandise.", "Comfortable Fit."]
      }
    ]
  },
  "furniture": {
    header: {
      breadcrumbs: ["Home", "Furniture"],
      title: "Furniture for every room",
      description: "Find the perfect pieces for your home."
    },
    sidebar: {
      categories: [
        { name: "Furniture", href: "/category/furniture", current: true }
      ],
      brands: ["Home Centre", "Nilkamal", "Wakefit"]
    },
    banners: [],
    products: [
      {
        id: "fur-1",
        name: "Solid Wood 4-Seater Dining Table - Dark Walnut",
        price: 15999,
        originalPrice: 25000,
        rating: 4.4,
        reviewCount: 450,
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
        isPrime: true,
        delivery: "Next Week",
        technicalDetails: { "Material": "Sheesham Wood" },
        aboutThisItem: ["Premium Quality.", "Classic Design."]
      },
      {
        id: "fur-2",
        name: "Modern 3-Seater Fabric Sofa Set - Grey",
        price: 28990,
        originalPrice: 45000,
        rating: 4.6,
        reviewCount: 920,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        isPrime: true,
        delivery: "Tomorrow",
        technicalDetails: { "Type": "Fabric" },
        aboutThisItem: ["Super Comfortable.", "Elegant Look."]
      }
    ]
  }
};

export const lightingCategoryData = categoryDataMap["lighting"];

// Global Product Lookup
export const findProductById = (id: string) => {
  for (const slug in categoryDataMap) {
    const product = categoryDataMap[slug].products.find((p: any) => p.id === id);
    if (product) return product;
  }
  return null;
};

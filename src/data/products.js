const products = [
  // 1-10: Gents Shirts
  { id: 1, name: "Oxford Button-Down Shirt", category: "Shirts", price: 2149, rating: 4.8, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80" },
  { id: 2, name: "Striped Pure Linen Shirt", category: "Shirts", price: 1999, rating: 4.6, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Mandarin Collar Casual Shirt", category: "Shirts", price: 1849, rating: 4.5, image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=80" },
  { id: 4, name: "Classic Navy Denim Shirt", category: "Shirts", price: 2299, rating: 4.7, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80" },
  { id: 5, name: "Long Sleeve Waffle Henley Shirt", category: "Shirts", price: 1749, rating: 4.4, image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=80" },
  { id: 6, name: "Tailored Royal Blue Formal Shirt", category: "Shirts", price: 2499, rating: 4.8, image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&auto=format&fit=crop&q=80" },
  { id: 7, name: "Textured Cotton Chambray Shirt", category: "Shirts", price: 1899, rating: 4.5, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&auto=format&fit=crop&q=80" },
  { id: 8, name: "Camp Collar Summer Resort Shirt", category: "Shirts", price: 1699, rating: 4.3, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80" },
  { id: 9, name: "Brushed Cotton Plaid Flannel", category: "Shirts", price: 2199, rating: 4.7, image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=600&auto=format&fit=crop&q=80" },
  { id: 10, name: "Executive Slim Fit White Shirt", category: "Shirts", price: 2399, rating: 4.9, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80" },

  // 11-20: Gents T-Shirts & Polos
  { id: 11, name: "Supima Cotton Crew Neck Tee", category: "T-Shirts", price: 1599, rating: 4.8, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80" },
  { id: 12, name: "Pique Cotton Slim Fit Polo", category: "T-Shirts", price: 1799, rating: 4.6, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&auto=format&fit=crop&q=80" },
  { id: 13, name: "Heavyweight Graphic Drop-Shoulder Tee", category: "T-Shirts", price: 1649, rating: 4.4, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80" },
  { id: 14, name: "Minimalist Patterned Jacquard Tee", category: "T-Shirts", price: 1549, rating: 4.3, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=80" },
  { id: 15, name: "Organic Cotton Ribbed T-Shirt", category: "T-Shirts", price: 1500, rating: 4.5, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=80" },
  { id: 16, name: "Athletic Performance Crew Tee", category: "T-Shirts", price: 1699, rating: 4.5, image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=80" },
  { id: 17, name: "Vintage Wash Oversized Street Tee", category: "T-Shirts", price: 1749, rating: 4.6, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80" },
  { id: 18, name: "Luxury Interlock Knit Crew Neck", category: "T-Shirts", price: 1899, rating: 4.7, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80" },
  { id: 19, name: "Typography Printed Designer Tee", category: "T-Shirts", price: 1599, rating: 4.2, image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=80" },
  { id: 20, name: "Breathable Modal Blend Polo", category: "T-Shirts", price: 1849, rating: 4.6, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80" },

  // 21-30: Gents Jeans & Trousers
  { id: 21, name: "Raw Selvage Denim Jeans", category: "Jeans & Trousers", price: 2799, rating: 4.9, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80" },
  { id: 22, name: "Slim Fit Stretch Chino Trousers", category: "Jeans & Trousers", price: 2199, rating: 4.7, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=80" },
  { id: 23, name: "Tailored Corduroy Pleated Pants", category: "Jeans & Trousers", price: 2299, rating: 4.5, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80" },
  { id: 24, name: "Athletic Fit Cuffed Joggers", category: "Jeans & Trousers", price: 1999, rating: 4.4, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80" },
  { id: 25, name: "Straight Cut Vintage Dark Jeans", category: "Jeans & Trousers", price: 2599, rating: 4.8, image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&auto=format&fit=crop&q=80" },
  { id: 26, name: "Multi-Pocket Utility Cargo Pants", category: "Jeans & Trousers", price: 2399, rating: 4.5, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80" },
  { id: 27, name: "Cropped Ankle-Length Chinos", category: "Jeans & Trousers", price: 2099, rating: 4.3, image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop&q=80" },
  { id: 28, name: "Regular Fit Tapered Blue Jeans", category: "Jeans & Trousers", price: 2499, rating: 4.6, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&auto=format&fit=crop&q=80" },
  { id: 29, name: "Linen Blend Relaxed Trousers", category: "Jeans & Trousers", price: 2199, rating: 4.5, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=80" },
  { id: 30, name: "Distressed Streetwear Denim", category: "Jeans & Trousers", price: 2699, rating: 4.6, image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&auto=format&fit=crop&q=80" },

  // 31-40: Gents Jackets & Blazers
  { id: 31, name: "Vintage Sherpa Trucker Denim Jacket", category: "Jackets & Blazers", price: 2899, rating: 4.9, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80" },
  { id: 32, name: "Classic Suede Bomber Jacket", category: "Jackets & Blazers", price: 2749, rating: 4.7, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=80" },
  { id: 33, name: "Quilted Thermal Puffer Vest", category: "Jackets & Blazers", price: 2499, rating: 4.5, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80" },
  { id: 34, name: "Formal Waistcoat & Vest", category: "Jackets & Blazers", price: 2299, rating: 4.6, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80" },
  { id: 35, name: "Biker Faux Leather Jacket", category: "Jackets & Blazers", price: 2999, rating: 4.8, image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80" },
  { id: 36, name: "Windbreaker Zip Lightweight Jacket", category: "Jackets & Blazers", price: 2399, rating: 4.4, image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=600&auto=format&fit=crop&q=80" },
  { id: 37, name: "Double-Breasted Wool Blend Overcoat", category: "Jackets & Blazers", price: 2999, rating: 4.9, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&auto=format&fit=crop&q=80" },
  { id: 38, name: "Structured Navy Single-Breasted Blazer", category: "Jackets & Blazers", price: 2950, rating: 4.9, image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80" },
  { id: 39, name: "Executive Charcoal Formal Suit Blazer", category: "Jackets & Blazers", price: 2899, rating: 4.8, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80" },
  { id: 40, name: "Heritage Harrington Utility Jacket", category: "Jackets & Blazers", price: 2699, rating: 4.6, image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&auto=format&fit=crop&q=80" },

  // 41-46: Gents Hoodies & Sweatshirts
  { id: 41, name: "Heavyweight Fleece Pullover Hoodie", category: "Hoodies & Sweatshirts", price: 2399, rating: 4.6, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80" },
  { id: 42, name: "Full-Zip French Terry Hoodie", category: "Hoodies & Sweatshirts", price: 2649, rating: 4.7, image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&auto=format&fit=crop&q=80" },
  { id: 43, name: "Relaxed Fit Embroidered Hoodie", category: "Hoodies & Sweatshirts", price: 2299, rating: 4.5, image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&auto=format&fit=crop&q=80" },
  { id: 44, name: "Urban Street Drawstring Hoodie", category: "Hoodies & Sweatshirts", price: 2149, rating: 4.3, image: "https://images.unsplash.com/photo-1614495039153-e9cd13240469?w=600&auto=format&fit=crop&q=80" },
  { id: 45, name: "Cozy Knit Crewneck Sweater", category: "Hoodies & Sweatshirts", price: 2499, rating: 4.7, image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?w=600&auto=format&fit=crop&q=80" },
  { id: 46, name: "Colorblock Sport Training Sweatshirt", category: "Hoodies & Sweatshirts", price: 1999, rating: 4.4, image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&auto=format&fit=crop&q=80" },

  // 47-50: Gents Ethnic Wear
  { id: 47, name: "Royal Textured Silk Kurta", category: "Ethnic Wear", price: 2499, rating: 4.8, image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&auto=format&fit=crop&q=80" },
  { id: 48, name: "Mandarin Collar Festive Nehru Jacket", category: "Ethnic Wear", price: 2699, rating: 4.9, image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&auto=format&fit=crop&q=80" },
  { id: 49, name: "Executive Tailored Bandhgala Suit", category: "Ethnic Wear", price: 2999, rating: 4.9, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80" },
  { id: 50, name: "Embroidered Festive Men Kurta", category: "Ethnic Wear", price: 2249, rating: 4.7, image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=80" }
];

export default products;

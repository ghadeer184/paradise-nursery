# 🌱 Paradise Nursery

A simple, responsive e-commerce web app for browsing and purchasing houseplants.  
Built with **vanilla HTML, CSS, and JavaScript**—no frameworks or build tools required.

---

## ✨ Features

- **Landing Page**  
  - Full-width plant background image  
  - Company name *Paradise Nursery* and intro paragraph  
  - “Get Started” button linking to the shop

- **Shopping Page**  
  - Product grid of six unique houseplants  
  - Each product shows image, name, price, and **Add to Cart** button  
  - Cart icon updates live with total item count  
  - Add-to-Cart button disables after selection

- **Shopping Cart**  
  - Lists selected plants with images, price, and quantity  
  - **Increment / Decrement** buttons to adjust quantity  
  - **Delete** button to remove an item  
  - Total cost calculated automatically  
  - **Checkout** button triggers a “Coming Soon” pop-up  
  - **Continue Shopping** button returns to the shop  
  - Cart state saved in `localStorage`

---

## 🛠️ Tech Stack

- **HTML5** – semantic structure  
- **CSS3** – responsive grid/flexbox layout  
- **Vanilla JavaScript (ES6)** – dynamic cart logic and DOM manipulation

---

## 📂 Project Structure

```

paradise-nursery/
├─ index.html        # Landing page
├─ shop.html         # Main shopping interface (if separated)
├─ style.css         # All styling
└─ script.js         # Cart and UI logic

````

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghadeer184/paradise-nursery.git
   cd paradise-nursery
````

2. **Open in a browser**
   Simply open `index.html` (or `shop.html`) in any modern browser.
   No build step is required.

---

## 🌐 Deployment

The site can be hosted for free on **GitHub Pages**:

1. Go to **Settings → Pages** in this repo.
2. Under **Source**, select the `main` branch and `/ (root)`.
3. Save — GitHub will provide a live URL like:

   ```
   https://ghadeer184.github.io/paradise-nursery/
   ```

---

## 🤝 Contributing

Pull requests and suggestions are welcome!
Fork the repo and create a new branch for any changes.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

````

**How to use:**  
1. Create a file named `README.md` in the root of your repository.  
2. Paste the text above.  
3. Commit and push:
   ```bash
   git add README.md
   git commit -m "Add README"
   git push

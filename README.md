
# 💼 Dynamics 365 Custom CRM Form (Web Resource Template)

This is a customizable HTML + JavaScript form UI designed for Dynamics 365 CRM.  
It enhances the user experience with a clean interface, conditional logic, and responsive layout.

---

## 📂 What's Included

- `form.html` – The main HTML interface
- `Style.css` – Styling for the form
- `logic.js` – JavaScript for dynamic behavior

---

## ⚙️ How to Use in Dynamics 365

1. Go to **Advanced Settings** → **Customization** → **Customize the System**
2. Under **Web Resources**, click **New**
3. Create the following resources:
   - Upload `Style.css` as a CSS resource
   - Upload `logic.js` as a Script (JavaScript) resource
   - Upload `form.html` as a Web Page (HTML) resource
4. In the HTML file, make sure the paths match the names of your CRM Web Resources
   - Example: replace `Style.css` with `$/new_/Style.css`
5. Add the HTML Web Resource to your CRM form or dashboard
6. (Optional) Use the `Xrm.Page` or `formContext` object to interact with CRM fields if needed

---

## 🧠 Features

- Clean and modern UI
- Responsive layout
- Logic-based field behavior using JavaScript
- Easily extendable and maintainable

---

## 💡 Author

Created by a CRM professional with real-world experience supporting organizations in KSA.

Feel free to modify, extend, and integrate!


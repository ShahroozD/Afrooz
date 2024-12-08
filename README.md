
# Afrooz

- [English Version](#english)
- [نسخه فارسی](#فارسی)

---

<a name="english"></a>

## English

**Afrooz** is a project template designed for building static HTML/CSS web pages using React. It leverages React's component-based architecture to make development structured, maintainable, and scalable while generating optimized static files for deployment.

---

## Features

- **Component-Based Development**: Utilize React's power to create reusable and maintainable UI components.
- **Static HTML Generation**: Convert React components into static HTML for fast-loading web pages.
- **CSS and Assets Handling**: Easily include and manage CSS and assets like images in your projects.
- **Automation**: Automated rendering, folder structure handling, and build-cleanup processes for efficiency.

---

## Getting Started

Follow these steps to set up and start using **Afrooz**.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm or yarn (comes with Node.js)
- A text editor (e.g., [VS Code](https://code.visualstudio.com/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShahroozD/Afrooz.git
   cd Afrooz
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

### Folder Structure

```plaintext
Afrooz/
├── src/
│   ├── Pages/
│   │   ├── main/
│   │   │   ├── index.jsx
│   │   │   ├── render.jsx
│   │   ├── 404/
│   │       ├── index.jsx
│   │       ├── render.jsx
│   ├── utils/
│   │   ├── renderUtils.js
│   │   ├── pathHelpers.js
├── public/
├── webpack.config.js
├── package.json
```

### Build and Render

1. **Build the Render Files**:
   Run Webpack to compile the render scripts:

   ```bash
   npm run build
   ```

   This will create static HTML files in the `public/` directory.

   And remove the temporary `dist/` directory after render.


---

## Creating New Pages

1. Add a new folder under `src/Pages/`, e.g., `AboutPage/`.
2. Create your React component in `index.jsx`.
3. Create a `render.js` file in the same folder:

   ```javascript
    import path from "path";
    import { renderPage } from "../../utils/renderUtils";
    import { resolveFromRoot } from "../../utils/pathHelpers";
    import Page from ".";

    const scriptName = path.basename(__filename, '-render.js');
    const folderName = scriptName;

    const outputPath = resolveFromRoot("public", `${folderName}.html`);

    renderPage(Page, outputPath);
   ```

4. Run the build and render steps to generate the new page.

---

## Deployment

After generating the static files, you can deploy the contents of the `public/` folder to any static hosting service, such as:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Contributing

Contributions are welcome! If you have ideas for improvement or want to report issues:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy building amazing static sites with **Afrooz**! 🚀


---
<a name="فارسی"></a>

## فارسی


# پروژه افروز

**افروز** یک قالب پروژه برای ساخت صفحات وب استاتیک HTML و CSS است که از ری‌اکت استفاده می‌کند. این پروژه از معماری مبتنی بر کامپوننت ری‌اکت بهره می‌برد تا توسعه را ساختارمند، قابل نگهداری و مقیاس‌پذیر کند، و در نهایت فایل‌های استاتیک بهینه‌سازی شده برای استقرار تولید می‌کند.

---

## ویژگی‌ها

- **توسعه مبتنی بر کامپوننت**: از قدرت ری‌اکت برای ایجاد کامپوننت‌های UI قابل استفاده مجدد و قابل نگهداری استفاده کنید.
- **تولید HTML استاتیک**: کامپوننت‌های ری‌اکت را به HTML استاتیک تبدیل کنید تا صفحات وب سریع‌العمل بسازید.
- **مدیریت CSS و منابع**: به‌راحتی فایل‌های CSS و منابعی مانند تصاویر را در پروژه‌های خود بگنجانید و مدیریت کنید.
- **اتوماتیک‌سازی**: رندر، مدیریت ساختار پوشه‌ها و فرآیندهای پاکسازی را برای کارایی بیشتر اتوماتیک‌سازی کنید.

---

## شروع به کار

مراحل زیر را برای راه‌اندازی و استفاده از **افروز** دنبال کنید.

### پیش‌نیازها

- [Node.js](https://nodejs.org/) (نسخه 14 یا جدیدتر)
- npm یا yarn (همراه Node.js نصب می‌شود)
- یک ویرایشگر متن (مثل [VS Code](https://code.visualstudio.com/))

### نصب

1. مخزن را کلون کنید:

   ```bash
   git clone https://github.com/ShahroozD/Afrooz.git
   cd Afrooz
   ```

2. وابستگی‌ها را نصب کنید:

   ```bash
   npm install
   ```

---

## استفاده

### ساختار پوشه

```plaintext
Afrooz/
├── src/
│   ├── Pages/
│   │   ├── main/
│   │   │   ├── index.jsx
│   │   │   ├── render.jsx
│   │   ├── 404/
│   │       ├── index.jsx
│   │       ├── render.jsx
│   ├── utils/
│   │   ├── renderUtils.js
│   │   ├── pathHelpers.js
├── public/
├── webpack.config.js
├── package.json
```

### ساخت و رندر

**ساخت فایل‌های رندر**:
   با اجرای Webpack فایل‌های رندر را کامپایل کنید:

   ```bash
   npm run build
   ```

   این کار فایل‌های استاتیک HTML را در پوشه `public/` ایجاد می‌کند.
   
   و سپس پوشه موقت `dist/` را بعد از رندر حذف میکند


---


## ایجاد صفحات جدید

1. یک پوشه جدید در `src/Pages/` اضافه کنید، مثلاً `AboutPage/`.
2. کامپوننت ری‌اکت خود را در `index.jsx` ایجاد کنید.
3. یک فایل `render.js` در همان پوشه ایجاد کنید:

   ```javascript
    import path from "path";
    import { renderPage } from "../../utils/renderUtils";
    import { resolveFromRoot } from "../../utils/pathHelpers";
    import Page from ".";

    const scriptName = path.basename(__filename, '-render.js');
    const folderName = scriptName;

    const outputPath = resolveFromRoot("public", `${folderName}.html`);

    renderPage(Page, outputPath);
   ```

4. مراحل ساخت و رندر را اجرا کنید تا صفحه جدید تولید شود.

---

## استقرار

پس از ایجاد فایل‌های استاتیک، می‌توانید محتوای پوشه `public/` را به هر سرویس میزبانی استاتیک مثل زیر منتقل کنید:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

---

## مشارکت

مشارکت‌ها استقبال می‌شود! اگر ایده‌ای برای بهبود دارید یا می‌خواهید مشکلات را گزارش کنید:

1. مخزن را فورک کنید.
2. یک شاخه جدید ایجاد کنید (`git checkout -b feature/your-feature`).
3. تغییرات خود را اعمال کنید و کامیت کنید (`git commit -m 'Add your feature'`).
4. شاخه را پوش کنید (`git push origin feature/your-feature`).
5. یک درخواست کشش باز کنید.

---

## مجوز

این پروژه تحت مجوز MIT منتشر شده است - برای جزئیات به فایل [LICENSE](LICENSE) مراجعه کنید.

از توسعه صفحات استاتیک با **افروز** لذت ببرید! 🚀

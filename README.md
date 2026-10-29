# Personal Portfolio Website

A responsive, single-page portfolio built with plain **HTML, CSS and JavaScript** — no frameworks, no build step. All content is driven from a single data object, so updating the site takes minutes.

🔗 **Live demo:** _add your GitHub Pages link here_

## ✨ Features

- **Data-driven content** — edit one `DATA` object in `script.js` and every section updates automatically
- **Light / dark theme** — follows the system preference, with a manual toggle
- **Fully responsive** — mobile-friendly layout with a collapsible navigation menu
- **Polished interactions** — typing effect for the role, animated stat counters, scroll-reveal animations, scroll progress bar, active nav-link highlighting and a back-to-top button
- **Contact form** — opens the visitor's email client with a pre-filled message (no backend required)
- **Safe rendering** — all text is HTML-escaped before being inserted into the page

## 📂 Project Structure

```
.
├── index.html   # Page skeleton and section containers
├── style.css    # Styling, theming (CSS variables) and responsive rules
├── script.js    # Portfolio data + rendering and interaction logic
└── photo.jpg    # Your profile picture (add this yourself)
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. **Add your profile photo** as `photo.jpg` in the project root.
3. **Open `index.html`** in your browser — or serve it locally:
   ```bash
   python -m http.server 8000
   # then visit http://localhost:8000
   ```

## 🛠️ Customization

Open `script.js` and edit the `DATA` object at the top of the file:

| Field          | Description                                       |
| -------------- | ------------------------------------------------- |
| `name`, `short`| Full name and the short name used in the logo     |
| `role`         | Job title shown with the typing animation         |
| `tagline`, `about`, `objective` | Intro, bio and career objective text |
| `email`        | Address used by the contact form and email links  |
| `social`       | `[label, url]` pairs for GitHub, LinkedIn, etc.   |
| `skills`, `learning` | Lists of chips shown in Skills / Currently Learning |
| `projects`     | `[title, description, tag]`                       |
| `education`    | `[period, degree, institution, score]`            |
| `certs`        | `[title, provider]`                               |
| `services`     | `[emoji, title, description]`                     |
| `achievements` | `[emoji, title, description]` — leave empty to hide the section |

To change colors, edit the CSS variables at the top of `style.css` (`--accent`, `--accent2`, etc.).

> **Note:** The "Current CGPA" stat in `script.js` is currently hard-coded (`7.1`). Update it when your CGPA changes.

## 🌐 Deploying to GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## 🧰 Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (ES6+, IntersectionObserver)

## 📬 Contact

**D Hariharan** — [hariharan2662@gmail.com](mailto:hariharan2662@gmail.com)

- GitHub: [Hariharan1972](https://github.com/Hariharan1972)
- LinkedIn: [hariharan-dharumaraj](https://www.linkedin.com/in/hariharan-dharumaraj-037b15442?)

## 📄 License

This project is licensed under the [MIT License](LICENSE) — © 2026 D Hariharan.

You're free to use, copy, modify and share this template. A link back to the original repository is appreciated but not required.

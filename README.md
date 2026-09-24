# High Alt Travel

The website for **High Alt Travel**: curated, bespoke journeys for the modern woman, designed by founder and travel advisor Victoria Lamy.

The site is plain HTML, CSS and a little JavaScript. There's no framework, no build step and nothing to install, so any file you change is exactly what visitors get.

## Pages

| Page | File | What's on it |
| --- | --- | --- |
| Home | `index.html` | Hero, philosophy, featured destinations, how it works, client stories, newsletter signup and Discord invite |
| Plan My Trip | `contact.html` | Trip inquiry form, email and social links |
| About Us | `about.html` | Victoria's portrait, founder story and values |
| Destinations | `europe.html`, `asia.html`, `africa.html`, `americas.html`, `oceania.html` | Destination highlights with suggested stay length and best time to go |
| Press | `press.html` | Media inquiries and fast facts |
| Careers | `careers.html` | Open roles and what we value |
| Packing Guides | `packing-guides.html` | Packing lists for cities, islands and adventure trips |
| Visa Info | `visa-info.html` | Passport and entry-requirement guidance, with links to official government sources |
| Travel Insurance | `travel-insurance.html` | What to look for in a policy |
| FAQs | `faq.html` | Common questions about planning a trip |

## Project structure

```
index.html            Homepage
*.html                All other pages (listed above)
styles.css            All styling for every page
script.js             Nav shadow on scroll, mobile menu, scroll-in animations
logo.png              Logo, favicon and footer logo
hero-image.png        Victoria's portrait (About page)
almafi-coast.jpg      ┐
marakesh.jpg          │
kyoto.jpg             ├ Homepage destination card photos
patagonia.jpg         │
maldives.jpg          ┘
```

Every page repeats the same navigation bar and footer. If you change a link in either one, update it on all pages.

## Connected services

| Service | Used for | Where it's set up |
| --- | --- | --- |
| [Brevo](https://www.brevo.com/) | "The Altitude Edit" newsletter signup | The `#newsletter` section of `index.html` (the form's styles are in `<head>` and its scripts are at the bottom of the page) |
| [Formspree](https://formspree.io/) | Trip inquiry form submissions | The `<form>` in `contact.html` |
| [Discord](https://discord.gg/ZkwFzh2a78) | "The View from High Alt" community | The Discord box on the homepage, the contact page and every footer |
| [beehiiv](https://view-from-high-alt.beehiiv.com/) | Travel Journal | Footer "Travel Journal" link |
| [Instagram](https://www.instagram.com/highalttravel) | @highalttravel | Contact page and every footer |

## Preview locally

Open `index.html` in any browser. Or, to click between pages the way visitors will, run a small local server from the project folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deployment

The site is hosted on [Vercel](https://vercel.com/) and connected to this GitHub repository:

- **Merging into `main`** publishes the change to the live site automatically.
- **Every pull request** gets its own preview link, posted by the Vercel bot as a comment on the pull request, so you can check changes before they go live.

## Common edits

- **Swap a homepage destination photo:** replace the image file, or change the file name in the matching `.d1` to `.d5` rule in `styles.css`. Use file names without spaces or accents so they load reliably online.
- **Change brand colors:** edit the variables at the top of `styles.css` (`--teal`, `--bronze`, `--gold`, `--cream` and so on).
- **Update the About photo:** replace `hero-image.png`. It's cropped to a circle automatically.
- **Add a Pinterest or LinkedIn link:** replace the `href="#"` on those links in the footer of each page.

## Contact

Victoria Lamy · [Victoria.lamy@fora.travel](mailto:Victoria.lamy@fora.travel)

© 2026 High Alt Travel. All rights reserved.

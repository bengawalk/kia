import{m as d,r as e,L as m}from"./index-331c6ccd.js";import{i as p,S as g}from"./i18n-c849e786.js";import{M as h}from"./index.modern-f7acbc94.js";const a="/assets/install_android_1-1df71918.webp",s="/assets/install_android_2-db96f1b0.webp",n="/assets/install_ios_1-f83f7c7f.webp",i="/assets/install_ios_2-96a7ec7f.webp",o="/assets/install_ios_3-f47ff182.webp",l="/assets/install_desktop-e368c155.webp",r={en:`
# Install app
The application is a [Progressive Web App(PWA)](https://en.wikipedia.org/wiki/Progressive_web_app) and hence, can be installed and used on any mobile/desktop device.  
On installation, it behaves like a native app accessible from the Home screen launcher. This gives a faster, and more convenient experience while always staying up-to-date.

## Installation instructions
### Android
- Click on the menu icon beside the address bar
- Select "Install App" or "Add to Home screen" and confirm

<img src="${a}" alt="" width="250px" />
<img src="${s}" alt="" width="250px" />

### iOS
- Open the site in Safari
- Click the share icon at the bottom
- Click on "Add to Home Screen"

<img src="${n}" alt="" width="250px" />
<img src="${i}" alt="" width="250px" />
<img src="${o}" alt="" width="250px" />

### Chrome
- Click the install icon on the address bar and confirm

<img src="${l}" alt="" width="750px" />
`,kn:`
# ಅಪ್ಲಿಕೇಶನ್ ಇನ್ಸ್ಟಾಲ್ ಮಾಡಿ
ಅಪ್ಲಿಕೇಶನ್ ಒಂದು [ಪ್ರಗತಿಶೀಲ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್(PWA)](https://en.wikipedia.org/wiki/Progressive_web_app) ಮತ್ತು ಆದ್ದರಿಂದ, ಯಾವುದೇ ಮೊಬೈಲ್/ಡೆಸ್ಕ್‌ಟಾಪ್ ಸಾಧನದಲ್ಲಿ ಸ್ಥಾಪಿಸಬಹುದು ಮತ್ತು ಬಳಸಬಹುದು.
ಅನುಸ್ಥಾಪನೆಯ ಸಮಯದಲ್ಲಿ, ಇದು ಹೋಮ್ ಸ್ಕ್ರೀನ್ ಲಾಂಚರ್‌ನಿಂದ ಪ್ರವೇಶಿಸಬಹುದಾದ ಸ್ಥಳೀಯ ಅಪ್ಲಿಕೇಶನ್‌ನಂತೆ ವರ್ತಿಸುತ್ತದೆ. ಯಾವಾಗಲೂ ನವೀಕೃತವಾಗಿರುವಾಗ ಇದು ವೇಗವಾದ ಮತ್ತು ಹೆಚ್ಚು ಅನುಕೂಲಕರ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ.

## ಅನುಸ್ಥಾಪನಾ ಸೂಚನೆಗಳು
### ಆಂಡ್ರಾಯ್ಡ್
- ವಿಳಾಸ ಪಟ್ಟಿಯ ಪಕ್ಕದಲ್ಲಿರುವ ಮೆನು ಐಕಾನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ
- "ಮುಖಪುಟ ಪರದೆಗೆ ಸೇರಿಸು" ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ

<img src="${a}" alt="" width="250px" />
<img src="${s}" alt="" width="250px" />

### ಐಒಎಸ್
- ಸಫಾರಿಯಲ್ಲಿ ಸೈಟ್ ತೆರೆಯಿರಿ
- ಕೆಳಭಾಗದಲ್ಲಿರುವ ಹಂಚಿಕೆ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ
- "ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಸೇರಿಸು" ಕ್ಲಿಕ್ ಮಾಡಿ

<img src="${n}" alt="" width="250px" />
<img src="${i}" alt="" width="250px" />
<img src="${o}" alt="" width="250px" />

### ಕ್ರೋಮ್
- ವಿಳಾಸ ಪಟ್ಟಿಯಲ್ಲಿರುವ ಇನ್‌ಸ್ಟಾಲ್ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ

<img src="${l}" alt="" width="750px" />
`},w=()=>{const[t,c]=e.useState(localStorage.getItem("lang")||m[0].code);return e.useEffect(()=>{localStorage.setItem("lang",t),document.documentElement.setAttribute("lang",t),p.changeLanguage(t)},[t]),e.createElement(e.Fragment,null,e.createElement(g,{setLang:c}),e.createElement(h,null,r[t]||r.en))},b=d(document.getElementById("root"));b.render(e.createElement(w,null));
//# sourceMappingURL=install-6aa41858.js.map

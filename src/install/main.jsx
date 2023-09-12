import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import i18n from "i18next";
import Markdown from 'markdown-to-jsx';

import ImageAndroid1 from "../assets/screenshots/install_android_1.webp";
import ImageAndroid2 from "../assets/screenshots/install_android_2.webp";

import ImageIos1 from "../assets/screenshots/install_ios_1.webp";
import ImageIos2 from "../assets/screenshots/install_ios_2.webp";
import ImageIos3 from "../assets/screenshots/install_ios_3.webp";

import ImageDesktop from "../assets/screenshots/install_desktop.webp";

import "../utils/i18n";
import { LANGUAGES } from "../utils/constants";
import SideMenu from "../components/side-menu";

const content = {
  en: `
# Install app
The application is a [Progressive Web App(PWA)](https://en.wikipedia.org/wiki/Progressive_web_app) and hence, can be installed and used on any mobile/desktop device.  
On installation, it behaves like a native app accessible from the Home screen launcher. This gives a faster, and more convenient experience while always staying up-to-date.

## Installation instructions
### Android
- Click on the menu icon beside the address bar
- Select "Install App" or "Add to Home screen" and confirm

<img src="${ImageAndroid1}" alt="" width="250px" />
<img src="${ImageAndroid2}" alt="" width="250px" />

### iOS
- Open the site in Safari
- Click the share icon at the bottom
- Click on "Add to Home Screen"

<img src="${ImageIos1}" alt="" width="250px" />
<img src="${ImageIos2}" alt="" width="250px" />
<img src="${ImageIos3}" alt="" width="250px" />

### Chrome
- Click the install icon on the address bar and confirm

<img src="${ImageDesktop}" alt="" width="750px" />
`,
  kn: `
# ಅಪ್ಲಿಕೇಶನ್ ಇನ್ಸ್ಟಾಲ್ ಮಾಡಿ
ಅಪ್ಲಿಕೇಶನ್ ಒಂದು [ಪ್ರಗತಿಶೀಲ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್(PWA)](https://en.wikipedia.org/wiki/Progressive_web_app) ಮತ್ತು ಆದ್ದರಿಂದ, ಯಾವುದೇ ಮೊಬೈಲ್/ಡೆಸ್ಕ್‌ಟಾಪ್ ಸಾಧನದಲ್ಲಿ ಸ್ಥಾಪಿಸಬಹುದು ಮತ್ತು ಬಳಸಬಹುದು.
ಅನುಸ್ಥಾಪನೆಯ ಸಮಯದಲ್ಲಿ, ಇದು ಹೋಮ್ ಸ್ಕ್ರೀನ್ ಲಾಂಚರ್‌ನಿಂದ ಪ್ರವೇಶಿಸಬಹುದಾದ ಸ್ಥಳೀಯ ಅಪ್ಲಿಕೇಶನ್‌ನಂತೆ ವರ್ತಿಸುತ್ತದೆ. ಯಾವಾಗಲೂ ನವೀಕೃತವಾಗಿರುವಾಗ ಇದು ವೇಗವಾದ ಮತ್ತು ಹೆಚ್ಚು ಅನುಕೂಲಕರ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ.

## ಅನುಸ್ಥಾಪನಾ ಸೂಚನೆಗಳು
### ಆಂಡ್ರಾಯ್ಡ್
- ವಿಳಾಸ ಪಟ್ಟಿಯ ಪಕ್ಕದಲ್ಲಿರುವ ಮೆನು ಐಕಾನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ
- "ಮುಖಪುಟ ಪರದೆಗೆ ಸೇರಿಸು" ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ

<img src="${ImageAndroid1}" alt="" width="250px" />
<img src="${ImageAndroid2}" alt="" width="250px" />

### ಐಒಎಸ್
- ಸಫಾರಿಯಲ್ಲಿ ಸೈಟ್ ತೆರೆಯಿರಿ
- ಕೆಳಭಾಗದಲ್ಲಿರುವ ಹಂಚಿಕೆ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ
- "ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಸೇರಿಸು" ಕ್ಲಿಕ್ ಮಾಡಿ

<img src="${ImageIos1}" alt="" width="250px" />
<img src="${ImageIos2}" alt="" width="250px" />
<img src="${ImageIos3}" alt="" width="250px" />

### ಕ್ರೋಮ್
- ವಿಳಾಸ ಪಟ್ಟಿಯಲ್ಲಿರುವ ಇನ್‌ಸ್ಟಾಲ್ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ

<img src="${ImageDesktop}" alt="" width="750px" />
`,
};

const InstallApp = () => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || LANGUAGES[0].code,
  );
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <>
      <SideMenu setLang={setLang} />
      <Markdown>
        {content[lang] || content.en}
      </Markdown>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<InstallApp />);

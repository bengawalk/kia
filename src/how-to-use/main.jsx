import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import i18n from "i18next";
import Markdown from 'markdown-to-jsx';

import "../utils/i18n";
import { LANGUAGES } from "../utils/constants";
import SideMenu from "../components/side-menu";

import ImageHowto1 from "../assets/screenshots/howto_1.webp";
import ImageHowto2 from "../assets/screenshots/howto_2.webp";
import ImageHowto3 from "../assets/screenshots/howto_3.webp";
import appStorage from "../utils/storage";

const content = {
  en: `
# How to use
If the user gives permission for location, the application automatically chooses the best available bus to reach the airport.  
If not, you could manually find the closest bus and all relevant details in 3 simple steps
1. Search for a landmark/location in the input box at the top of the page.
2. Adjust the pin on the map a more accurate selection.
3. See the starting point on the map and the timings in the list for a selected bus.

<img src="${ImageHowto1}" alt="" width="250px" />
<img src="${ImageHowto2}" alt="" width="250px" />
<img src="${ImageHowto3}" alt="" width="250px" />

### Other features
The boarding location and contact details are available under the timings in the expanded view for a selected bus. Clicking on these opens the location in Google maps and calls the mobile listed respectively.

## General information
### Boarding point
The bus can be boarded anywhere along the route although it's recommended to board at the starting location since the time varies significantly for the stops in between.
### Fare details
The fare ranges from ₹200 to ₹350 based on the boarding point and distance to the airport. 

`,
  kn: `
# ಬಳಸುವುದು ಹೇಗೆ
ಬಳಕೆದಾರರು ಸ್ಥಳಕ್ಕಾಗಿ ಅನುಮತಿಯನ್ನು ನೀಡಿದರೆ, ಅಪ್ಲಿಕೇಶನ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವಿಮಾನ ನಿಲ್ದಾಣವನ್ನು ತಲುಪಲು ಲಭ್ಯವಿರುವ ಅತ್ಯುತ್ತಮ ಬಸ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.
ಇಲ್ಲದಿದ್ದರೆ, ನೀವು 3 ಸರಳ ಹಂತಗಳಲ್ಲಿ ಹತ್ತಿರದ ಬಸ್ ಮತ್ತು ಎಲ್ಲಾ ಸಂಬಂಧಿತ ವಿವರಗಳನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ಕಂಡುಹಿಡಿಯಬಹುದು
1. ಪುಟದ ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ಇನ್‌ಪುಟ್ ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್/ಸ್ಥಳಕ್ಕಾಗಿ ಹುಡುಕಿ.
2. ನಕ್ಷೆಯಲ್ಲಿ ಪಿನ್ ಅನ್ನು ಹೆಚ್ಚು ನಿಖರವಾದ ಆಯ್ಕೆಯನ್ನು ಹೊಂದಿಸಿ.
3. ನಕ್ಷೆಯಲ್ಲಿನ ಆರಂಭಿಕ ಹಂತವನ್ನು ಮತ್ತು ಆಯ್ದ ಬಸ್‌ಗಾಗಿ ಪಟ್ಟಿಯಲ್ಲಿರುವ ಸಮಯಗಳನ್ನು ನೋಡಿ.

<img src="${ImageHowto1}" alt="" width="250px" />
<img src="${ImageHowto2}" alt="" width="250px" />
<img src="${ImageHowto3}" alt="" width="250px" />

### ಇತರ ವೈಶಿಷ್ಟ್ಯಗಳು
ಬೋರ್ಡಿಂಗ್ ಸ್ಥಳ ಮತ್ತು ಸಂಪರ್ಕ ವಿವರಗಳು ಆಯ್ದ ಬಸ್‌ಗಾಗಿ ವಿಸ್ತರಿಸಿದ ವೀಕ್ಷಣೆಯಲ್ಲಿ ಸಮಯದ ಅಡಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಇವುಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ Google ನಕ್ಷೆಗಳಲ್ಲಿ ಸ್ಥಳವನ್ನು ತೆರೆಯುತ್ತದೆ ಮತ್ತು ಕ್ರಮವಾಗಿ ಪಟ್ಟಿ ಮಾಡಲಾದ ಮೊಬೈಲ್‌ಗೆ ಕರೆ ಮಾಡುತ್ತದೆ.

## ಸಾಮಾನ್ಯ ಮಾಹಿತಿ
### ಬೋರ್ಡಿಂಗ್ ಪಾಯಿಂಟ್
ಬಸ್ ಅನ್ನು ಮಾರ್ಗದ ಉದ್ದಕ್ಕೂ ಎಲ್ಲಿ ಬೇಕಾದರೂ ಹತ್ತಬಹುದು, ಆದರೂ ಮಧ್ಯದಲ್ಲಿ ನಿಲುಗಡೆಗೆ ಸಮಯವು ಗಮನಾರ್ಹವಾಗಿ ಬದಲಾಗುವುದರಿಂದ ಪ್ರಾರಂಭದ ಸ್ಥಳದಲ್ಲಿ ಹತ್ತಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.
### ದರದ ವಿವರಗಳು
ಬೋರ್ಡಿಂಗ್ ಪಾಯಿಂಟ್ ಮತ್ತು ವಿಮಾನ ನಿಲ್ದಾಣದ ದೂರವನ್ನು ಆಧರಿಸಿ ದರವು ₹200 ರಿಂದ ₹350 ರಷ್ಟಿರುತ್ತದೆ.
`,
};

const PrivacyPolicy = () => {
  const [lang, setLang] = useState(
    appStorage.getItem("lang") || LANGUAGES[0].code,
  );
  useEffect(() => {
    appStorage.setItem("lang", lang);
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
root.render(<PrivacyPolicy />);

import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import i18n from "i18next";
import Markdown from 'markdown-to-jsx';

import "../utils/i18n";
import { LANGUAGES } from "../utils/constants";
import SideMenu from "../components/side-menu";

const content = {
  en: `
# Help and Support
## Immediate help
For information on bus status, next available bus, timings, and issues with current bus please reach out to the BMTC Vayu Vajra helpline at [77609 91269](tel:7760991269)
## Community help
Join the Friends of BMTC [Telegram group](bit.ly/friendsofbmtc) for any queries, and doubts that other active members of the community can help with.
## Technical help
In case of bugs, issues or feature requests for the application, reach out to us on [Twitter](https://twitter.com/bengawalk) or [Github](https://github.com/bengawalk/kia)
`,
  kn: `
# ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ
## ತಕ್ಷಣದ ಸಹಾಯ
ಬಸ್ ಸ್ಥಿತಿ, ಮುಂದಿನ ಲಭ್ಯವಿರುವ ಬಸ್, ಸಮಯ ಮತ್ತು ಪ್ರಸ್ತುತ ಬಸ್‌ನ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು BMTC ವಾಯು ವಜ್ರ ಸಹಾಯವಾಣಿಯನ್ನು [77609 91269](ದೂರವಾಣಿ:7760991269) ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ
## ಸಮುದಾಯ ಸಹಾಯ
ಸಮುದಾಯದ ಇತರ ಸಕ್ರಿಯ ಸದಸ್ಯರು ಸಹಾಯ ಮಾಡಬಹುದಾದ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಅನುಮಾನಗಳಿಗಾಗಿ BMTC [ಟೆಲಿಗ್ರಾಮ್ ಗುಂಪು](bit.ly/friendsofbmtc) ನ ಸ್ನೇಹಿತರನ್ನು ಸೇರಿ.
## ತಾಂತ್ರಿಕ ಸಹಾಯ
ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ದೋಷಗಳು, ಸಮಸ್ಯೆಗಳು ಅಥವಾ ವೈಶಿಷ್ಟ್ಯದ ವಿನಂತಿಗಳ ಸಂದರ್ಭದಲ್ಲಿ, ನಮ್ಮನ್ನು [ಟ್ವಿಟರ್](https://twitter.com/bengawalk) ಅಥವಾ [ಗಿಥಬ್](https://github.com/bengawalk/kia) ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ
`,
};

const HelpSupport = () => {
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
      <Markdown>{content[lang] || content.en}</Markdown>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<HelpSupport />);

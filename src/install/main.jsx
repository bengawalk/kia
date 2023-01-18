import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import i18n from "i18next";
import ReactMarkdown from "react-markdown";

import "../utils/i18n";
import { LANGUAGES } from "../utils/constants";
import SideMenu from "../components/side-menu";

const content = {
  en: `
# Install app
`,
  kn: `
# Kannada Install app
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
      <ReactMarkdown>{content[lang] || content.en}</ReactMarkdown>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<InstallApp />);

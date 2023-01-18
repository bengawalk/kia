import React, { useState } from "react";
import i18n from "i18next";

import IconHamburger from "../assets/icon-hamburger.svg";
import IconClose from "../assets/icon-close.svg";
import IconLanguage from "../assets/icon-language.svg";
import IconHelp from "../assets/icon-help.svg";
import IconInstall from "../assets/icon-install.svg";
import IconCode from "../assets/icon-code.svg";
import IconPrivacy from "../assets/icon-privacy.svg";
import IconSupport from "../assets/icon-support.svg";
import IconBus from "../assets/icon-bus.svg";

import { stopPropagation } from "../utils";
import { LANGUAGES } from "../utils/constants";
import { Trans, withTranslation } from "react-i18next";

const SideMenu = ({ setLang, t }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button id="hamburger" onClick={() => setOpen(true)}>
        <img src={IconHamburger} alt="" />
      </button>
      {open && (
        <div id="side-menu" onClick={() => setOpen(false)}>
          <div id="side-menu-contents" onClick={stopPropagation}>
            <div className="side-menu-item" onClick={() => setOpen(false)}>
              <img src={IconClose} className="side-menu-icon" alt="" />{" "}
              <Trans t={t} i18nKey="Close" />
            </div>
            <hr className="side-menu-separator" />
            <a className="side-menu-item" href="/">
              <img src={IconBus} className="side-menu-icon" alt="" />{" "}
              <Trans t={t} i18nKey="Buses routes and timings" />
            </a>
            <div className="side-menu-item">
              <img src={IconLanguage} className="side-menu-icon" alt="" />{" "}
              <div>
                <Trans t={t} i18nKey="Language" />
                {LANGUAGES.map((l) => (
                  <React.Fragment key={l.code}>
                    <div
                      className={`sidebar-language ${
                        l.code === i18n.language ? "selected" : ""
                      }`}
                      onClick={() => setLang(l.code)}
                    >
                      {l.text}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <a className="side-menu-item" href="/how-to-use/">
              <img src={IconHelp} className="side-menu-icon" alt="" />{" "}
              <Trans t={t} i18nKey="How to use" />
            </a>
            <a className="side-menu-item" href="/install/">
              <img src={IconInstall} className="side-menu-icon" alt="" />{" "}
              <Trans t={t} i18nKey="Install app" />
            </a>
            <a
              className="side-menu-item"
              href="https://github.com/bengawalk/kia"
            >
              <img src={IconCode} className="side-menu-icon" alt="" />{" "}
              <Trans t={t} i18nKey="Github repository" />
            </a>
            <a className="side-menu-item" href="/privacy-policy/">
              <img src={IconPrivacy} className="side-menu-icon" alt="" />{" "}
              <Trans t={t} i18nKey="Privacy policy" />
            </a>
            <a className="side-menu-item" href="/help-support/">
              <img src={IconSupport} className="side-menu-icon" alt="" />
              <Trans t={t} i18nKey="Help and support" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default withTranslation()(SideMenu);

export const TABS = [
  {
    text: "To airport",
    id: "ta",
  },
  {
    text: "From airport",
    id: "fa",
  },
];

export const LANGUAGES = [
  {
    code: "en",
    text: "English",
  },
  {
    code: "kn",
    text: "ಕನ್ನಡ",
  },
];

export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

export const HELPLINE_NUMBER = "77609 91269";

export const APP_SCREENS = {
  INITIAL: "INITIAL", // Screen with the map and list of buses. Default screen as soon as the app opens
  LOCATION_TEXT: "LOCATION_TEXT", // Search input for setting location
  LOCATION_MAP: "LOCATION_MAP", // Map screen to set the to/from location
};

export const LOCATION_STATES = {
  PENDING: "PENDING", // Initial state when the app opens and before requesting permission
  UNAVAILABLE: "UNAVAILABLE", // Device doesn't support getting the user's location
  DENIED: "DENIED", // User doesn't want to give location or accidentally clicks deny
  APPROVED: "APPROVED", // Successfully got user's permission
};

export const API_CALL_STATUSES = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
}

const PHONE_CONTACTS = {
  jp_nagar: {
    text: "J P Nagar 5th phase",
    phone: "7760991265",
  },
  kempegowda: {
    text: "Kempegowda Bus Station",
    phone: "7760991170",
  },
  ecity: {
    text: "Electronic City(Infosys Main Gate)",
    phone: "7760991268",
  },
  hsr: {
    text: "H.S.R BDA Complex",
    phone: "7760991267",
  },
  mysore_road: {
    text: "Mysore road Satellite Bus Station",
    phone: "7760991262",
  },
  hal: {
    text: "H.A.L Main Gate",
    phone: "7760991264",
  },
  airport: {
    text: "International Airport",
    phone: "7760991269",
  },
  bmtc: {
    text: "BMTC helpline",
    phone: "1800 425 1663",
  },
};

export const STOPS_DATA = {
  majestic: {
    name: "Majestic Bus Stand",
    loc: [12.977529081680132, 77.57247169985196],
    contact: "7760991170",
  },
  silk_institute: {
    name: "Silk Institute Metro Station",
    loc: [12.862231132000229, 77.53020557184188],
    contact: "7760991267",
  },
  airport: {
    name: "Airport Bus Stand",
    loc: [13.199110535079635, 77.70822021568426],
    phone: "7760991269",
  },
  hal: {
    name: "HAL Main Gate",
    loc: [12.958498117866407, 77.66518619680876],
    contact: "7760991264",
  },
  hebbal: {
    name: "Hebbal Bus Depot",
    loc: [13.042313, 77.593773],
  },
  whitefield: {
    name: "Whitefield TTMC",
    loc: [12.976874051754933, 77.72680679219907],
    contact: "7760991125",
  },
  banashankari: {
    name: "Banashankari TTMC",
    loc: [12.917668361661741, 77.5729031044554],
  },
  kadugodi: {
    name: "Kadugodi Bus Stop",
    loc: [12.995682104394492, 77.75933511787484],
    contact: "7760991266",
  },
  hsr: {
    name: "HSR BDA Shopping Complex",
    loc: [12.912696250372736, 77.63815235881127],
  },
  hsr_keb: {
    name: "HSR KEB Bus stand",
    loc: [12.903498259883314, 77.64980288742859],
  },
  ecity: {
    name: "Electronic City Bus Stop",
    loc: [12.846820291920075, 77.67194606999932],
    contact: "7760991268",
  },
  btm: {
    name: "BTM Layout Kuvempu Nagar TTMC",
    loc: [12.916077213466505, 77.61613653753079],
  },
  chandapura: {
    name: "Chandapura Circle",
    loc: [12.802273131607688, 77.70456150337426],
  },
  sarjapur: {
    name: "Sarjapur Road Wipro Gate",
    loc: [12.910761671396754, 77.68409625549441],
  },
  ecity_wipro: {
    name: "Electronic City Wipro Gate Depot",
    loc: [12.836107341675932, 77.65779655065786],
  },
  mysore_road: {
    name: "Mysore Road Satellite Bus Stand",
    loc: [12.953555019494152, 77.54382623524201],
    contact: "7760991262",
  },
  royal_meenakshi: {
    name: "Royal Meenakshi Mall",
    loc: [12.876412761573464, 77.59560880964153],
  },
  kengeri: {
    name: "Kengeri Bus Terminal",
    loc: [12.913656066139644, 77.48714794975331],
  },
  beml_5: {
    name: "BEML Layout 5th Stage",
    loc: [12.906722494018258, 77.5216914426631],
  },
  brigade_meadows: {
    name: "Brigade meadows, Kanakapura road",
    loc: [12.813044601197065, 77.50773351136493],
  },
};

const TELEGRAM_GROUPS = {
  "4/4A": "https://t.me/+7ga4_hAxGUE2NWI1",
  "6/6A": "https://t.me/+KZpw98bVQP1hYTE9",
}

export const BUS_DATA = {
  to: [
    {
      name: "KIA-4",
      routename: "KIA-4 UP",
      route:
        "ka`yMg`bnAiA~A}@JGwCHiCVsA|AmCxBgCzDuGxHmMfCwDjAuBL@zDMpi@qDtLiAfNeBfGk@JSb@{CnBiQ\\_HHeDZyMNgFpDDrBB`UTtRVpYVfGFvCIdFUjF[zDGjAjAf@TrAp@`Al@VVvAfCbD|Er@r@dDlBhFjChCvAxCrAlElA|BTbCLBiBAaBF_@@_AIeC_@{CEy@?]B{FD{BMy@Uo@g@_AUOmBe@o@e@y@uBaBcFaAeAsAoAFML_@rAuJHqCM_P?[LUf@YdABtIz@r@j@d@~@r@_@^_@NSn@]xCyAfBqAfBmAx@m@`BcAv@_@pDgBbJkEvB}@bA[zB_@zBm@hAe@~A}@lDcCpCgB`AYtEKh@ExA_@fEgAfDeAzJoClCg@v@I@Sf@gAx@wAzAgEf@wArCaHt@yBh@cCv@aERk@RSrAcApCsAzHyCtQ{Lh@Gl@sBtC{F|JsQnCwE`BiCzA}BlCiDn@i@zCgAvAYvE]bEG~AF`@?ASGwF@k@Aa@OQH_N@sFGsBmA_Hg@aEAg@e@}CsAaIIm@HSEa@WeBk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKkN?{BEcCL{JNsAJuGBoBB_Fb@cN~@i]FkFCyFwAs^SsGEaBu@wEaEkN_BgEcCsHsCoJo@gDOsAu@oIY_BcBuHuBgHuBkHw@cD}BmMaBcK_@eBSo@Yy@o@{B}@uBmE{IyBuEyEgJuHuNiPe[oGqNcEmKaFyMiI_U_@u@u@w@oDqJcCwGi@{AcCuGgCaH{AyEs@_DKeAA}AFqGNQNkDFeTCyAQiEu@kMg@{CW}@}GePkA{CwB_FeBaEy@yAqC}EgFuIwDiFyGqJ_HgK}HeKwFiIc@u@{AuDsFkO}CoImAgDmByFcAgDe@{Am@sAqCeEwBuCu@UcGoJ_Ww_@uKuP_IwLVMKOsHeL[c@mD_DiA[}CcCcHqF_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqIuBsB{@uAo@cB{AiIe@cAm@k@{@]aAIoANgAn@oBlCyFzI_CdCsAz@iC|@}B^gDJw|@ZgYQe@K[Uc@Ic@HSTo@PkRJccBZy@_@_@Oa@BWNw@X}YHgAa@i@q@Yy@aAq@oKCg@a@",
      start: STOPS_DATA.hal,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-4A",
      routename: "KIA-4A UP",
      route:
        "k_lyM{penAFdBr@CvAIxNs@`Uw@xT{@^JlF[dAi@zEYnRkA~BPb@T{C|LmFvSgBhG{@zCqChIw@jBi@p@aA^qGToEPqCv@cBx@q@p@u@nA]`CJ`Bv@fC`ChFzApCp@|Cl@vFlCjLpBjHn@|CaHj@D^`IGdEWpAKtOm@tc@{AbSq@zFQjEOvADzMrAxGn@~a@hEzLhA~]zAjKR~@IvBq@pG_C`RkHdKaDhDa@~Ic@bJKdBMZK?VzCEbDWRAEs@?cAAwCZoBj@qApE_GpMuT~BuDhAoBL@RAlAGdF[dL_ArRsAvOiAtMgBhJ_A\\gBd@{D`A}H`@uEZwHn@oWf^^bi@j@dJJjHWvMk@fA?NGIO{AgCgBsCaD_EsAmAcAw@l@@tCP~B?xFm@pEg@fD[nCFfHb@bCLxBn@h@gArAuJHqCM_PLq@f@YdABtIz@r@j@d@~@r@_@^_@~@q@`GkD~CyBxBsAhD_BpKgFfCgAxE}@pDwArGgE|BwAhASzEI~Cw@zIkC|IaC`Eo@Nw@rA{BpC_IlCqG~AsGn@{Cf@_ArAcAzBgA|EkBhE{BfL}HvA{@h@Gl@sBvBmEtIuOvHmMhFgHtA_A~C_AdGi@bH?`@?ASGwF?mAOQFyIDoFEgE_@uC}@{Fa@kE_CoN@aAUyAqAwG_D_KcEoLgB_Fg@kDc@eCgA_Ew@gCOcCMqHM{@QEgB}NcAaFy@iCu@qBw@iCc@{CMiBG}@SuBoCsHiBiFU{A?_@DYu@kEmA_JB_DTcG?yOKuNL{J^yMZaPH[VkGt@mZDuG_@_Om@_Oc@qMe@oDcAgEgBgGsCiIeF}OaBmHeAcLy@iEoByHiC{IqAsE{@mE_FcY}AeFcB_EwF_LqKwSaLaTkKoSmKoWuOkb@_@u@u@w@oDqJcCwGi@{AcCuGcF{Ns@_DMcDFqGNQFg@NcUCsCq@sOk@{GUy@{FmNcEcK{CcHkC_F{IoNaI_LyIsMqGqI_JqMyIqUgIcU{BqHm@sAqCeEwBuCu@UcRqY_LuPiCmEaAeC}NwT{IyMaC}B}@c@k@IgAaAeEyCsAaAcCqBkAq@aFuBuLaHiB_AeAg@Ua@e@WmFaDsFcDmBaBqBgDq@oCs@kEu@iBs@k@aAY_AE_ANgAn@qA`BsHhLkAnAyAdAsBx@}Bd@eDRuL@ui@T_a@Le@?_@p@e@~AeCdKeA`Am@Vg@ToC?uKDq[Hi]Lon@NqJHeBG{@QgAq@c@i@{DcIYuAGmBCi@[cBgAcBsAgBeFDiA?AdA",
      start: STOPS_DATA.whitefield,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5",
      routename: "KIA-5 UP",
      route:
        "i~mxMo}ymAaBC?UAWOJ?XKjBEfD?jCFpA\\zE|AnJHxCGzFQnIs@lIFp@O?kD?kIDcN@cZNcAKwODFe@DoAGiI@uJBqEOcFCwF?{IBkA^?`FU`AIzAK?_CDe@Bc@AoHIeMKcI?_C?MO@qEHuEBMwQa@{@e@yDPgBZeAd@c@hG?hDAOsDIeOE}F_@uJ?gBHwDcEAAACCEAQw\\CyIF_AHI?YUM_@qCa@gAcAwAu@k@oC}@s@[cDo@yCKwEMsAeAcDwCoFmBsDuBsAs@[t@{AzDWx@yA~BoCdCc@\\s@qAyJgOzC_DpB{AnEmDpCoC}AsAwAyAjAcAnCcCxDuC|CkCvB_BRIK]IWIc@cC}ImCqIuDwMWm@m@i@{DyCcAaAcBsCm@gBg@{Ag@i@yC{BwAuAiAy@sCcCkFmDeAi@uBkA{C_CoI}EcC}@XcAhAcENWjD{A|F]bCSTk@y@yLC}@~CuCrAAfFEZiAzIwU~@aBVK~D_AdJsBxB_@nD_Ap@[Pa@D]dCs@zOqFbBi@h@i@e@gA{@}CScAFm@FGxAsAxKuIx@}@Vy@d@cFL_Cr@gITw@^u@FgAYy@TcCv@{F|@cHTmBpAeJ]mC?oCDsHOoDf@eWVsOEaKOkPC}JJqNMoGuAkIa@kEu@cEiAkHHWMkA[cBg@aCe@cCqBeGyCiJaCqGmA}DQuBk@oC}BgIUyJCu@Mg@CAWuA}@_IiBaJoCcIu@kFKkAGeAMaA[wAsCwHuAoESsAHO?_@iByKYmDJoDPiFDsIMyOAiIHuDZiJFuHHuCf@{Ov@u[?qDK}HsAq\\UmGUqCcAgEgBgGsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsE{@mEkD_SS}A_@eBY{@cAiDcB_EwF_LqKwSaLaTeF}JoEaJsJeVqOcb@iAoAuGiQqAqDaGaPwBgHc@wCDoJTc@PyRIyJ_@eHa@uGg@{CmCeHaFqLoFiMmFiJyFeJ_EyFcIeLuEeHgLsOuCmEuF_OgGwPyD{KgAuDg@qAgAqBcDmEw@kAQCc@QgBmCmMcSyPkW{KyPmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFkA_@uM}HoCyBqBgDq@oCeA}Fc@w@s@k@aAYcB?oAf@eBrBqFtImCbDyAdAsBx@}Bd@eDRmd@PaUD_\\Kw@Ia@Wo@Ke@RILw@PwuBf@kAe@u@I]Nm@Xk@ByY?w@c@o@sAc@g@u@]{J@i@a@A?",
      start: STOPS_DATA.banashankari,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5D",
      routename: "KIA-5D UP",
      route:
        "qbaxMixemAeA%60%40aAVkAb%40iA%5CeAZuAZgANoAJqABuAAiA%3FkA%3FcA%3FFwDNiCn%40kCd%40uBd%40iCe%40sCmAqE%7D%40oCaAuB%7D%40q%40wBIoBSy%40k%40i%40kBCoBZwAf%40gBh%40yAH%7BBF%7DBVuBj%40mCh%40kCt%40iCj%40aC%60%40sBZaBg%40_Di%40yCe%40cCk%40%7DCe%40yCc%40oDm%40gCk%40%7DBcAqBmBkB%7BAqAmAyA%7D%40sCw%40%7DBq%40uBi%40mBWaCe%40oDY%7DC%7D%40kDgAcCaCeDwB%7BCiBoCkA%7BBgAaCy%40%7BBaBqCoAgBwAaCQ_DI%7DCMcD%5BaCq%40eC_BcC%7DBkBuBwByBwBmBmBeBqBuBmB_BiBoBwCyA%7DBuAeCaCaF%7BBaEgBqDyDiCiC_B_CcBqBgCaB%7BByAsByB%7DCkBkC_ByBkCcEmDqEoDwEiDmEcEeFwDaDwEcBcEoAmDkCwBeFuBsGkBoGqAkFyCcIuCiCoLuBcLsBkNiCcMqCgJ_CsJ%7DBoK%7BGaI%7BGuHcHyG%7BG%7DIkIaIyHwF%7BHkDwEyA%7BCcBaIg%40eHf%40qGIsFHeG_KAgKBeJD_I%3FkIBcILcK%3FDkH%3F_IHwII%7DJIqGEyH%3FaF%7CL%3FIuHCaJM%7BFBkF%3FiGM%7BEBiE~%40iCSmEy%40%7BBwEDaFBCeFEsGDsI%7CFCtDEIuHBoFIgE_FH%3FoGIgHIiI%3FyFEsGu%40eFaDwCyFuA_Fe%40aFOkDaDmEqBgEwBaDcBgAhCs%40~BiAhBiBlBiB~AyBnAoAx%40cDkF%7DAeCoAkBwA%7BBvCcCpDsCjC%7DBlBiBxBgBpBeBjBcBbBsAdBoAlDmAiByHvBoBqAuFiB%7BGuAwEmAeE_AwDsAyDiD%7DBgCaCqAaCy%40mCrCQdBmBbBsDj%40mF%60%40%7BDj%40eEd%40cDd%40qDf%40mDqCeD%7BBcCaCiBeDcCoCoBeDwBcEkCzBuGzAiEhAgDfBoEl%40iEO%7DClHiB%7CFuApDy%40vCo%40fA~Dp%40PjBeBzDwEtCqDhFaFjFyDpFoEpAwBjAoLl%40iHl%40eGx%40cIr%40cFt%40sFT%7BFDkFx%40ur%40I%7DYMoMLkWOoEoBgM%5B%7BCq%40mDm%40%7DD%3FaAOyAkA%7DFeD%7DKyCeJyDcLaAoGuAyEe%40_CQaJSuA_%40uBgA%7BI%7BAmH%7BCeJu%40%7BGKsAw%40kDcDqIi%40iBBu%40YeADY%7BAgJg%40cEB_DZgPKkNE_GL%7BJ%5EyMB_Fb%40cN~%40i%5DBeNwAs%5ESsGEaBu%40wEaEkNcF%7BNsCoJ_A%7BFoAoLcBuHuBgHmDoM_FqYmAoEmBqFmE%7BIsI%7DPuHuNiPe%5BoGqNcEmKaFyMiI_U_%40u%40u%40w%40oDqJcCwGi%40%7BAgJqWs%40_DMcDVcHNkDB_WgAuS_AyE%7DGePcE%7BJ_D%7BGqC%7DE_L_QyGqJ_HgK%7DHeKwFiI_CkFqK%7BY%7BDaLwCwIiG%7BIu%40UcGoJ_Ww_%40iCmE_%40eA%7DKiQuLsQ_CkCgBiAk%40IgAaAeEyCsDyC_E%7DByEkBwLgHeBy%40e%40i%40aJoFgDqBuBsBkByDa%40kBsAqGsAkAaCUcATgAv%40qHfLeDvDsAz%40iC%7C%40%7DB%5EgDJyp%40VqMB%7BXHmCtIk%40nCi%40hAy%40p%40iAd%40wLB%7Dc%40Lku%40Rc_%40NeCm%40kB_CaDeHOkAMyCk%40yBo%40_%40o%40AiIPOeA",
      start: STOPS_DATA.brigade_meadows,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6",
      routename: "KIA-6 UP",
      route:
        "qeryMcfinAd%40KLf%40HX~%40tCz%40%7CCPjBXjAjDxEjEdGzBhEbD~KlF~PpAnEd%40dClB%7CPnEt_%40tBb%5B%5EjEt%40xGdFjV~C%60OBx%40nAhD%7CE%60LzAjEnApAlAh%40z%40%40nDe%40tCKrKEfLE%60IGnCFl%5BtCxKd%40fLZp%5CP~RJvOB%7CBDrAMxOc%40dOe%40vQq%40ba%40oApG_%40WgBE%7BCMuGwAgPy%40eJa%40yLf%40wD~%40wClPy%5BbGiL%7CHuNnMcWvN%7BXfK_SjCgFdBiCjBwCpGsJpLuQnCqE%60JwPb%40c%40d%40%5Bj%40IhEItEDzGEvB%60%40%60GpBbQrG%7CM%60FvAXVAl%40%5CrBv%40vNlEdAH~%40EvAs%40f%40u%40dDuGlBcE%60Aq%60%40FqDh%40wFpAaQp%40uTh%40yQLsB%5CoA%5C_%40%7CAk%40rRmGzQcGbDw%40zJ%7BCh%5DeLt_%40gMnOaFvOcBzEs%40bF%7D%40rCw%40hH%7BBdB%7B%40l%40_A%7CDaLtKoXdFeL%7CA%7BAdEeCzAkA%60GiJ%60BsBx%40o%40%60Bc%40xAIdPLdOZbEg%40fB%5BfG%7BApCoAzScDHPfHkApJgAxIK%60QJfLIdCHnARr%40Zj%40%5CzEbDtCrAfBRxFAxFM%60A%5BlE_AtGgAr%40E~ADv%40Qq%40eBq%40sBMsCQeCg%40qBsA%7BCyF%7DOU%7BA%3F_%40DY%7BAgJg%40cEB_DTcGDcHKiPE%7DH%5CsITmSf%40cO~%40y%5EAwJmB_h%40YiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FgAkF%7DEsYaAyCgCoGiFeK_JkQoZ%7Dk%40mKoWwFiOgHwR%7B%40gA_AwB_CmGqCsH%5D%7D%40iEiLmDsKg%40oCCmELuEHMN_LAiOc%40wJw%40eKwAkEcHmP%7DDmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC%7DD_MyAkDmC%7BDoBcCUEsBkCyDkGqWo%60%40iLqQcBeCcDcFVMmE%7DGqBwCmAuAwC%7DBm%40KgAaAyG%7BEgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40%7DAMqAVgAv%40uB~C%7DFzI%7BBtB%7DCxAgEr%40ig%40Vg%5BHeWSs%40a%40i%40Go%40%60%40w%40PmFBulARga%40J%7B%40c%40q%40GYJq%40%5CsZHiAi%40a%40s%40%5Du%40i%40a%40_%40MkFBwCCc%40_%40",
      start: STOPS_DATA.kadugodi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6A",
      routename: "KIA-6A UP",
      route: `qeryMcfinALE%5EbAPA%5CjA%5EbAZ%7C%40d%40~BPrBp%40hAfFdH~DbGx%40vBlAdEzDbMzDtMFNL%3FzA%5DjJsBbM%7BCjKsC~Bq%40fJ%7DAtGaA%7CKcB~O%3FdE%40bEKbIy%40bKw%40~P%7DA%7COwBz%40UdCuAtAg%40dI_B~Bg%40zBg%40~CsAbHkDbCKpE%40bIIv%40Rb%40Z%60C%7CBxEvDpA%60AvFrC%7C%40n%40h%40r%40lClAv%40PlAV~%40d%40fAh%40nAv%40l%40z%40nArChApDNrA%40N%60%40%3FZsAvCiNrBiJlAsFnB%7BIBYZ%3Fx%40CbAIjB%5DxJeBzIaBxEq%40lHeBfEo%40xDQpDc%40jDcAdF_BzA%5DlJ%7DB%7CH_DrBy%40xAgAbBqBjAiA%7C%40o%40~BgAjASzBMfJYpPIVD%60%40L%7C%40CbCEzB%3FvCHzFGxA%5ElAf%40lBl%40lCx%40jG%7CB%60WlJz%40BjBz%40xMdEnBf%40rA%40dAUbAgA~CgGzAwCXo%40Ls%40D%7DBf%40yUXoKtAwN%5EkFR%7BHh%40qRVwHL%7BCXoBVg%40f%40%5DvNyElVcIxJeCvi%40sQ%7Ce%40aPrC%7B%40bAMpKiAvEm%40hHoAvNoEdA%7B%40fBgF%7CKoYtE_LpBcEr%40u%40zBcBzD_CtEcHrBwCdAkApAq%40pBUzB%3FnW%5CxDJvAIzCg%40zEiAbBc%40hB%7B%40xAc%40tLgBrDk%40FA%40RfHkAnEi%40bGg%40xODfUEdCHnARjAj%40vBtAvBzAnBdAd%40LfBRvKCzAKj%40GTSlE_AlCe%40jDg%40n%40FvBScByEQwD_%40aDyAmD_FsMi%40iBU%7BA%3F_%40DKGk%40kAeHa%40oCOcD%5C%7DK%3FwKGaGEiFHkJRiDLgIDuG%60%40gM%7C%40g%5CHsNu%40%7BSu%40%7BRIuBS%7DBScAuAiF%7DAkFmJiYuAmGoAoMwAgH%7DAcF_CcIoA%7BE_CoMkB%7DKYqBOWa%40oAoAyDcD%7DGgIqPkJiQwOiZmEeJgHeQsD%7BJ%7BJeXa%40iAs%40u%40_AwByFmOk%40%7DAkImUkAgEYmCBkCBiEHKHMBSNoUCsCIqDg%40aJk%40%7BGUy%40aAqCyD%7BIyBsFsAaD%7DCeHuCkFyIiNyJkN%7DGaK%7DHiK_GqIkA%7BBwLi%5CmE_McC%7BHgCcE%7BByCg%40m%40UEWM%7BA%7DBsA%7DB%7BKuPsLmQmIsMgF%7DHcDcFVMmE%7DGqBwCmAuAwAsA_Ai%40m%40KgAaAyG%7BEgCsBwC_ByEmBs%40a%40_%40i%40uIiFiBaAeCqA%7BMeImB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40cAMkBVgAv%40sJzN%7BBtBoAt%40sCz%40aCZ_u%40%5CqMBeWSiAi%40e%40D%5BVc%40PcGF%7DnB%5EkAk%40w%40Hu%40%5EsZHs%40Ym%40m%40g%40kAiAo%40%7BJ%40YQQO`,
      start: STOPS_DATA.kadugodi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7",
      routename: "KIA-7 UP",
      route:
        "%7B~%7CxMqfwmAoAQg%40%5Bg%40k%40%5DgAUm%40Om%40So%40Mo%40Ik%40K%7D%40Iy%40G%7B%40KiAMgASy%40QkAKaAKcAG_AAq%40Au%40%40iA%40gA%3F%7B%40%3FaA%3FcA%40%7B%40HsA%40%5D~A%3FbBB%7CA%3FtA%40fA%3FfABxA%40jA%3F~A%40%7C%40%3FbAChBI~%40GbAEbAE%7C%40CbDG~AGpB%3FdBCjA%3FpAA~%40AnCElB%3FlBEvBAnBAhBAjAAA%7B%40K%7BCG%7BDFM%40sCEwCGaD_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzAnMpApIl%40lB%40vAM%60%40MxHaCtRqGfQqFf%5CcJdCq%40d%40Bx%40FFO~B_ErA%7BCnAwA%60DcC~QkMzD%7DBfDgBpAa%40hEiAlAKdNgAxTcBbCo%40%60By%40ZG%7C%40mApB_DpAmDVwCt%40wN%7C%40oHZy%40%60%40_%40nBoA~Ay%40%7BBcEcEcGsBaDjAqAjDsCnAoAvB_B~%40w%40rAoAZ%5BYS%7BCyCfB%7DA%60DoCrFkEbCsB%7C%40e%40Mc%40a%40%7DAaEqNuCwJiBkGS_%40iBqAcDoCeBkCk%40qA_%40gAk%40%7BA_EaDMQwAaAmAiA%7BGkFeE%7BBmAo%40qHmFkDgBcC%7D%40dAqDb%40aBTSlD%7BAlGW%60BOJGNm%40_AoNjDuCvGIV%40%3FQ~BkGvEqMtAiCtCy%40pEeAfCk%40mFsGiGwETo%40jI_KlJuMvAaBt%40w%40h%40p%40tAfBl%40h%40zGzIjGdGrCxCNRZ%5Be%40gAq%40aC%5DyADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40OYAYbCmQx%40cIt%40_EKaBQ%7B%40%40%7B%40AqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUGsBO%7D%40%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwGiBqFu%40mCcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGe%40%7BDc%40qBs%40uDaA_DsBcHwA_FgAkFeCmNwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEcHmPm%40_BoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsB%7B%40uAo%40cBiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40PKLo%40PkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.hsr_keb,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7A",
      routename: "KIA-7A UP",
      route:
        "%7DuzxMa%60ymA%5CAJ%7CAG_AImC%40%7DIMyH_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzANBBSP_CdAuUZ%7BFl%40oC%60%40%7B%40vCuCpIoItSiTcCeBgBy%40iBs%40aDo%40oFEiG%3F_D%40%7BE%3FqAK%7BA%5D_CaAiBqAeAoAoDmG_LcTiDyGcCaFUsAR_BVi%40z%40%7B%40nD_Dn%40yAHiAYuAkAyC%7BDuHiC%7DF%5DsMFiF%40m%40%40a%40%5ECnG%5BlH_%40MmAw%40wJGc%40fBKtBOfGk%40dGw%40bDS~%40DdGtAv%40HbDu%40pEiA~FeAlCc%40rAg%40%60HiDv%40%7BArEeLT%5BfG_CxDgAzCWrANjDjATFFMj%40i%40%5Eu%40j%40%7BCf%40yGd%40oHPgDDqCtBApG%7B%40tRkCdc%40sGjBYRCAUs%40aDU%7D%40eAkDxK_CvXmGTEGWg%40_BeBmHQu%40i%40yBDe%40Z_B%3FOy%40sESUPAlAWTp%40f%40hAZdBEF_AZUT%5C~ArFcAlHyAcAcDhBo%40h%40YdEf%40lBRdC%40p%40%40v%40j%40HdCIpAR%60CPN%7CAx%40xAn%40jLgCdFmAv%40YTWJo%40tS_HxA%5Db%40_%40Z%5B%5Ds%40k%40qBQm%40YoADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40Qs%40bCmQx%40cIt%40_EKaBOwBAqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUWqD%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwG_D_KcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHyJkZsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FmEyUwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEqImSoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsBkByDiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40P%7B%40%5EkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.hsr,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8",
      routename: "KIA-8 UP",
      route:
        "efayMoblmAOKd@s@hA_B~BeCdU_[zYma@bc@ql@lZoa@tEuGjFoG|LsNjDeFdEcI`Ra^fUec@|N}Xr[em@`GcLhC{EPm@fSa`@dQw\\h@g@lC{F~BcF{Ce@uIi@wBDaKhBwEv@gCHkHV_HTgPn@wCHqKt@oA?uBUkDaAkAo@kDkCoEwEgNaRsA{AaHgGmA_AaCkAkCi@yF_@wDKgCF}N|AyGp@mGbAcYbHiS`DeAb@iEd@gAAg@c@qAg@k@Yq@EaLkEqX{JoKuDgHsCsJsDiVwIuQmHeEiCoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNnMcWvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItEDzGEvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@EvAs@f@u@dDuGlBcE`Aq`@FqDh@wFpAaQp@uTh@yQLsB\\oA\\_@|Ak@rRmGzQcGbDw@zJ{Ch]eLt_@gMnOaFvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{AdEeCzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZbEg@fB[fG{ApCoAzScDHPfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDtCrAfBRxFAxFM`A[lE_AtGgAr@E~ADv@Qq@eBq@sBMsCQeCg@qBsA{CyF}OU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}H\\sITmSf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGiAmHs@uDaA_DsBcHwA_FgAkF}EsYaAyCgCoGiFeK_JkQoZ}k@mKoWwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmELuEHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@iLqQcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.ecity,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8A",
      routename: "KIA-8A UP",
      route:
        "wlvxMyuymA_BH%7DACyACoAAeA%3F_A%3FgAAeAA%7D%40GaAM_AOw%40OcAU_AS%7B%40Sg%40Kq%40Qw%40Uw%40U%7B%40SiA%5BuIi%40wBDaKhBwEv%40gCHkHV_HTgPn%40wCHqKt%40oA%3FuBUkDaAkAo%40kDkCoEwEgNaRsA%7BAaHgGmA_AaCkAkCi%40yF_%40wDKgCF%7DN%7CAyGp%40mGbAcYbHiS%60DeAb%40iEd%40gAAg%40c%40qAg%40k%40Yq%40EaLkEqX%7BJoKuDgHsCsJsDiVwIuQmHeEiCoG_F%7BOgNuTyRcJoJiB%7BC%7DFwKqB_EgAcEkGgWaAiGiAqLeA%7DH%7BBaOiAuFQoCE%7BCMuGwAgPy%40eJa%40yLf%40wD~%40wClPy%5BbGiL%7CHuNnMcWvN%7BXfK_SjCgFdBiCjBwCpGsJpLuQnCqE%60JwPb%40c%40d%40%5Bj%40IhEItEDzGEvB%60%40%60GpBbQrG%7CM%60FvAXVAl%40%5CrBv%40vNlEdAH~%40EvAs%40f%40u%40dDuGlBcE%60Aq%60%40FqDh%40wFpAaQp%40uTh%40yQLsB%5CoA%5C_%40%7CAk%40rRmGzQcGbDw%40zJ%7BCh%5DeLt_%40gMnOaFvOcBzEs%40bF%7D%40rCw%40hH%7BBdB%7B%40l%40_A%7CDaLtKoXdFeL%7CA%7BAdEeCzAkA%60GiJ%60BsBx%40o%40%60Bc%40xAIdPLdOZbEg%40fB%5BfG%7BApCoAzScDHPfHkApJgAxIK%60QJfLIdCHnARr%40Zj%40%5CzEbDtCrAfBRxFAxFM%60A%5BlE_AtGgAr%40E~ADv%40Qq%40eBq%40sBMsCQeCg%40qBsA%7BCyF%7DOU%7BA%3F_%40DY%7BAgJg%40cEB_DTcGDcHKiPE%7DH%5CsITmSf%40cO~%40y%5EAwJmB_h%40YiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FgAkF%7DEsYaAyCgCoGiFeK_JkQoZ%7Dk%40mKoWwFiOgHwR%7B%40gA_AwB_CmGqCsH%5D%7D%40iEiLmDsKg%40oCCmELuEHMN_LAiOc%40wJw%40eKwAkEcHmP%7DDmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC%7DD_MyAkDmC%7BDoBcCUEsBkCyDkGqWo%60%40iLqQcBeCcDcFVMmE%7DGqBwCmAuAwC%7DBm%40KgAaAyG%7BEgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40%7DAMqAVgAv%40uB~C%7DFzI%7BBtB%7DCxAgEr%40ig%40Vg%5BHeWSs%40a%40i%40Go%40%60%40w%40PmFBulARga%40J%7B%40c%40q%40GYJq%40%5CsZHiAi%40a%40s%40%5Du%40i%40a%40_%40MkFBwCCc%40_%40",
      start: STOPS_DATA.btm,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8C",
      routename: "KIA-8C UP",
      route:
        "_tgyM}lcmATKlC_@zEeApAe@nC}AxAoAbA_Bxk@_w@pRkWpG_Jr\\m^rFiIrE_LdBkHfAkFdCuLhBiHlFwR~@cCvBmDrUe\\|L_Q~A_CzBkCbBuBbQ{UdMkQfLwOh]ae@bPsTxOeTpKyNfNcPtDaF|DeHzJkRh]gp@pl@{hAvKqSPm@lKaSfVme@`CqDlC{F~BcF{Ce@uIi@wBDyQ`D{d@`ByLj@yFXwAKyDaAkAi@iDgCcE_EaCeD}IsLwCgDcI_HgCsAoFcA}HWwAAiGd@uN~AuFp@iQjEkJvBgKzAcC`@_Dl@YTyDj@iA@c@A]YSUcBk@q@MaX{JmWaJuKkEgWiJoPqGiL}EaHiF}P{NkE{DcOuMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGeB}NyBaOs@sDk@eESqLgC}Ye@cHM_GXcC`AqDjHqNzJuRjHgNfG}K`D_H`HsM|EsJhV{d@zPsWjLkQrHkNxBsDp@a@nDOvJHfEKt@JzCfAfGnBtYxKfDbAz@LdBv@~InChFtApAAjAc@xBgDdEsIRcA^oQb@uQfBiSr@wQf@sSX_I`@mB\\g@vGwBhZwJlHyBzF_BzVoIjO_FpRqG~N_FvDsAxBi@dEa@lHw@hDe@~JoBzGuBxCgAt@{@dBmF~G{PlDmJfFoLbAcBn@k@bDwBdC_BtAoB|F{I`A}@|Ao@lBMzC@zYf@jDQrK{BhDwAfBa@jOyBbAS@RdCc@pHeAbD_@zGUdLFnVExBNfAZ|@d@pCjBpChBnAd@rBRrLCbBQbD_ApFaApC_@dAFhAOLCg@gAy@kCEi@SaE_@aCkEwKaCuGk@aDJWe@aDyAuJEuBZkH@yOMwOL{J^yMZaPj@uRf@aVWuNoAg[MeFu@wEqB_HoAkEcF{NsCoJ_A{FoAoLcBuHkFsQw@cD}BmMaBcKs@uCYy@mBqFgIqPyZkl@_EwHoGqNcGwOkOea@u@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CwG{NyJsPoTg[wRkX_CkFsFkOkEqLiDaKmAaEm@sAqCeEwBuCu@UcRqYub@cp@VMKOsHeLeDiDmBu@mG{EsDyCoBkA}I_EkBgBwIaFaD}A_K_GoCyBqBgDwBmKc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@uL@si@Te_@KiASUQi@G_@NOPw@PmFBulARga@J{Am@s@TaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.chandapura,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8D",
      routename: "KIA-8D UP",
      route:
        "stcyMk|xmAjArC\\fAFPKB_B`@HRK[~Aa@hE{AlN_GrGkCvGgBlEu@dBg@jH{DbAaA~@uAf@wBB?DC@C`Ae@`GgCnDyAjCq@vHgBpH}C~D}AdCm@b@ICu@]YSUcBk@q@MmHoCyZ_LkMoEgHsCsJsDiVwIuQmHuBiAoA_AoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNxDyHtGiMvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItED|@B|EIvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@En@Qf@a@f@u@dDuGrAgCX{@RyIRsJXcJFqDh@wFbAkLLuCRgH\\mKh@yQLsB\\oA\\_@|Ak@xDkAxLaEzQcGbDw@zJ{Ch]eLt_@gMtFkBxGuBvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{ApA}@rBgAzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZvAIjB]fB[fG{ApCoAzScDFA@RfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDnBdAd@LfBRxFAxFMj@GTSlE_AtGgAr@E^F~@Av@Qq@eBq@sBMsCQeCg@qBsA{CoCsHiBiFU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}HHiDRiDRsO@yBf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkF}EsY]{@c@}AgCoGiFeK_JkQoZ}k@uFwMwCwHwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmEBiEHKHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@uIiFmAu@kA_@aJoFoEsCmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.sarjapur,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8E",
      routename: "KIA-8E UP",
      route:
        "il~xMmajmAaAB`@bA`@Oa@Na@cAo@_B}AcDcC_GMe@y@]{@m@o@iCiBiJMkBJ_Cb@_KGc@SCk@KgDs@cFCmSDiESaGmAwFuBqGyCKa@x@{A|L}P|P{U~D{FfHaKfFgH^_AhHsJpPcUpV}\\jJiMhUuXnEuGrNuX`Yki@vVoe@hx@{{AbAeB`FsJrS{`@@w@u@MmHc@sGFqNhCoXhAmTv@qKt@eEUwFqBkDkCoEwE{A{ByMeQeJ}HiEwB_HcBkDJYTkABqDT{Q|BuFp@iQjEkJvBgKzAqIzA}Dh@cBUyEsAoYuKeRoGeJqDwHyCuUoIwPwGmIyD_LwImRuPyNmMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGyCgVcDoRSgLoBmV_A_MKqGx@yE`AeCvOwZ`Q_\\nMcW`NwWrJaRdE_IpDqFjGmJ~LmRpKiR~BaEp@e@pJSvCHzFGtGtBxKvD`WlJz@BjBz@vLvDbCr@jADfAMlAaA|CcG|BqETaCh@qVXgLnBmTl@cRd@uQf@cJ|@sAhc@sNtGmBzF_BzVoIjO_FpRqG~N_FvDsA~HkAlHw@tDo@pIiBfI_Cf@Um@{@Y_@w@cA{BeCwLoNqIiHkG}G{D_HiBkBsBoASe@_@gEKsLY}Ca@wAuAaG}@oBuDqE}BiE{@qD]sCa@iAeAiAyAeCKkBOiF]uFmBcLgBwGiBwDoBqCmAiAq@mBWsBO}Kk@qIq@wAgEoHwBk@mCc@o@k@G{HbAcb@AsPKmCa@aBoE}H}CuCg@w@SqBdBmNGsA}AyFcAeEYqC{@}Iu@}DOcBH{@`@{Cf@mDCkBKoCW{A[aDf@y@r@e@NmAi@}Nw@qCuB{CgDkDeAaC{CgHoDmG_DeEwBsGgFoK{@o@qKz@uIXs@_AcA{CwKyf@aF{UUaEXaDd@}EVqLU_IVgBv@sCXwD\\{A|AgB|AuEJuEh@cIc@aDm@aE`@kEuBkDk@a@y@Ms@[u@_Hg@qAyCiCeEsImDyNsAeDuGkHQ]aAqJcBqHsC{GeEaIoGqKwAeBePeMsD{DqNeU{KmSeNsZgBqBmFaHcDwL}@{D_AiCc@mBkE_Pi@uH}@mHw@kAs@sC}@yCcG_IgCwCu@q@XOLCbDg@hJq@rEVfLXh@DdEdAnXh@vI\\vBI`FHZ@xFAp@OBo@y@aNaA{FuAeUo@iIA{JNmA`DkMl@sBRw@[i@{@AuAl@kvBTeBi@_Bt@i[EqAeBg@q@aCmAeAsA{GABfB",
      start: STOPS_DATA.ecity_wipro,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9",
      routename: "KIA-9 UP",
      route:
        "wvmxMutenAB\\~C?@hCEh@If@GlABh@V|Af@hBZCCQ_@cA]eAMy@Ao@R{AR_C@o@?mAKcEUmEGa@@GCUKGq@M_DOeFi@_Fg@}@[[Wg@w@{@uBYe@[c@}BuB[MwAiA}AiA{@W{Bg@iAKcAC}Id@gA@[C_@Ks@_@uAu@Fs@Pi@lBsBpA{@IW~A_Et@_CgAoBS]yAsCkDqHeBeDcC{DeBqCw@iA{@cAe@c@UMI?oACGOCEEQTyB^oCVkBr@oEHsAJkA`@uDHIHa@d@uC?OIcASiA@}AA}DDuDKs@CmB?[?{ALuCH_Fb@yQFeJQwNMoMFyNDqGG{CEi@Ki@e@{Cc@eC[uCEu@[iBoAiHS{AHWUeBoAoGQ_AcAwCkAsDm@uBi@cBeAsCeCuGg@oBK}@MuAc@qBo@_C_A{CMk@E_AEmDImB?o@IaAKKI?MuA]aD_@}CUqAo@iDc@eBa@qA_AiCm@gBe@gCW_DGs@QcBCc@Ws@oAcDaCuGWmASsAJWAWc@iCu@mEc@gDEgA?m@ZkH@mBDeHEeCGgF?mBE{B?aEHiDBuANsALgIDuGTuH`@uMf@cRHoE?cHOkFqAk\\I_CIuB@SUiBScAUcA_AeD}AkFY_Aq@gBm@_By@qC_DmJYaAy@eD[gBi@sGe@{DwAgH}EgPo@{B_@_Bg@kCwAcIm@iD}@sFYqBOWa@oAOq@_AgCgAgC{AuCsDwHsCyFeGcLmMmVoDaHqCsF{@qByDeJmB_FgAwC{FqOmGaQs@u@OOo@gB_CmGyB_Gk@}AaBkEqBqFwBoGu@cCUcAQkAGaABkCBiEHKHMBSFoCB{FBcICsCIqDg@aJUmDUmBUy@aAqCyD{IyBsFsAaD}CeHgAuBmAuBsCuE}BwD[a@k@y@gCmDiAeBgDwE_AmAaCuD{A}BeBaCwEgG_GqIc@s@g@gAuFeO{F{OeB}EaA}CoAiE_@}@m@kAyAwB{ByC_@k@GAUEWM{A}BsA}B{KuPsLmQoCkEeLeQcDcFVMmE}GqBwC[c@{A{AqAcA[Om@K}CcCwCuBkC{B_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqImAeAg@m@{@uAo@cBa@kBy@}Ee@cAm@k@{@]aAI]@q@L]Ni@^k@n@cA|AyFzIaAlA}@v@sAz@o@XyAb@}B^gDJgRHoi@PkHA{OOe@K[Uc@Ic@HSTo@PkRJaaALaa@Le@Qs@]a@BWNw@X}YHa@Ie@Wi@q@Yy@g@c@YMOEoA?oH@g@c@?@",
      start: STOPS_DATA.majestic,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9H",
      routename: "KIA-9H UP",
      route:
        "wjqxMoornAI%5BScAKq%40GiAEy%40OeBGe%40Kg%40Q%5DUi%40O%5DISMSMGOEWkAGQw%40uBUi%40Uo%40Ui%40%5D%7D%40Um%40IUIUIYWcAIc%40Km%40DO%3F%3FBIDUOk%40GYYmB%5DqBMq%40Im%40Ms%40Ea%40Ec%40Eu%40Ao%40%3Fi%40%40c%40Bi%40%40c%40NyDDaB%40yA%3FaA%3FqAAy%40%40gA%40s%40%3Fs%40%40%7BB%3Fi%40Aq%40Cq%40A%7D%40%3F%7B%40%3Fw%40%40yD%3FYDaCFeE%40i%40Bu%40%40i%40JcD%40g%40%3Fi%40%3Fu%40%40wA%3Fs%40%40gABmAD%7D%40%3F%3FD_AB_%40B%5D%40U%40_%40NqDBo%40%40%5D%3FgAD_B%40%5D%5E_NDcBFoB%40e%40%40i%40%40%7D%40%3FeC%3FeACsAIuCC%7B%40Cu%40MyBE%7D%40IwBEw%40Cy%40OuDMiDIaDAc%40Eo%40A%5BCWE%5DG%7B%40C%5BEWG%5BI_%40o%40cCi%40kB%5BiAQk%40w%40mC%3F%3F%5BeA%7B%40oCw%40qBoByFiAwDm%40mBQs%40Os%40Ou%40Ic%40Ku%40OiAg%40%7DFEq%40CWEYEUOk%40I%5BI%5BYqAIa%40Mm%40Kk%40Kg%40GYKc%40Me%40Oa%40%5B%7B%40s%40uBiBcGOa%40CKOk%40Mk%40YyAc%40mCKs%40G_%40QaAUuAW_BW%7BA%5D_CKm%40Ie%40UsAIe%40GUIWIY%3F%3F%3F%3FIWSk%40EMEKEIEOQu%40EMKYK%5BQ_%40OY%5Bq%40IQUe%40eA%7DB%5Ds%40cCsEe%40%7D%40y%40%7DA_%40u%40KSc%40%7B%40gAwBUa%40u%40yA%5Do%40Yk%40c%40y%40S_%40%3F%3F%3F%3FYi%40y%40_B%7D%40cBg%40eAmBuDwAmCi%40cAe%40%7D%40_%40q%40wBaEMUi%40aAa%40s%40Wk%40Yk%40Ui%40%7BAsDyAgDw%40gBSc%40Yo%40%5B%7B%40Oa%40_%40eAUq%40Ma%40EKQg%40GQK%5DSm%40k%40%7BA%5B%7B%40gD_JeCwG%5By%40O_%40g%40sAO_%40O%5DIMOSOMQMs%40wBiC_H%7D%40cCe%40oAIU%3F%3FSi%40O_%40Si%40GQs%40mBg%40sAiA_DgAsC_%40eAm%40oBq%40%7BBSu%40Ke%40G%5BE%5BCYAQC_%40AY%3F_%40%3Fi%40%40e%40%40iB%3FY%3Fs%40HUFSDWB%5DBo%40%40y%40JaLBeB%3Fy%40%3FeA%3Fc%40Aq%40Ak%40I_CCe%40AWGw%40KuAC_%40%3F%3FEy%40OwBGaAMwAIq%40Mq%40Qo%40K_%40Um%40Sg%40wCeHa%40_A%5Dw%40Qc%40Qa%40%5Dy%40g%40mAg%40kAO_%40ISKSQ%5Dg%40kA%5By%40c%40cAm%40qA%5Bm%40We%40_%40o%40%7DAeCYe%40wAwB%5Bg%40OYIOe%40%7B%40Wa%40_%40m%40_%40k%40IK%3F%3FU%5DmAeBc%40k%40a%40k%40k%40w%40SWe%40q%40%5Bc%40a%40k%40c%40m%40OSQU%7D%40oAe%40s%40_A%7DAa%40q%40U%5DU_%40Y_%40c%40o%40aAqAiCeDW_%40Ye%40e%40m%40gCmDs%40cAm%40_Ai%40%7D%40Sa%40m%40%7BAYq%40%7BAcEcAsCOc%40M%5By%40%7DBcAoCQe%40Ys%40_%40eAa%40eAc%40gAWu%40GOy%40iCOa%40GSSo%40%3F%3FK%5B%5BaAUo%40So%40Oc%40_%40cASg%40Wa%40Q%5BWa%40_AsA%5Dg%40Y_%40%7B%40iA_%40e%40QU%5BA%7D%40wAo%40_A%7D%40sA%7DAaCi%40s%40aF%7DHW%5DYc%40g%40w%40sDwFuDwFg%40w%40cAaBg%40%7B%40k%40_AESEMISCKAQy%40oA%7D%40sAa%40o%40Wa%40k%40%7B%40QYU%5Dk%40y%40_%40i%40k%40_AmC%7BDkAgBSYwA%7DBYe%40e%40q%40_%40o%40%5Ba%40MO%3F%3FUYSWk%40k%40_%40_%40YW_%40Y%5BU%5DS%5BQYMWIWG_CyAcAm%40oAs%40_BcAm%40%5D%3F%3F_%40UqA%7B%40qA%7B%40i%40%5DyAy%40oAs%40%7DA_Ak%40%5BkAq%40mAo%40kAm%40YOQK%3F%3F%3F%3FU%5BKOMMeBuAq%40c%40YS%7BCiBqCaBy%40e%40%7D%40i%40g%40_%40_%40%5D%5D_%40%5Dc%40U%5BS_%40Yo%40Um%40Oi%40Oq%40QaAMw%40O_AMm%40Mc%40Ug%40W%5BYWSO_%40O_%40I_%40Ea%40Ag%40BYBc%40Ne%40T%5DXWX_%40f%40eA%60BGJMP%5Dh%40U%5Ca%40n%40Wb%40OTy%40rAg%40%7C%40_%40j%40k%40h%40o%40f%40a%40Te%40Ti%40Vg%40Pc%40Lk%40Lk%40Hm%40Fs%40D%7BADiH%40q%40%3FcJ%40%7BG%40%5B%3FmF%40qA%3FeLDO%3FU%3F%7D%40%40uEB%7DGBmIDwA%3FOSGMEOCSCWEe%40p%40eCDQ%3F%3F%3F%3Fa%40IUE%5BCs%40%3Fe%40%3F_%40%3Fo%40%3FS%3FyI%40%3F%3F%3F%3FcB%3Fg%40%3FaAAcC%3Fa%40%3F_%40%3FiA%3Fe%40%3FQ%3FeE%40%7BH%40uD%40U%3FgB%40oG%40%5B%3FoB%40g%40%3Fa%40%3FaC%40aB%3FoG%40iA%3Fs%40%3Fg%40%3FoA%40uA%3F%3F%3F%3F%3FwA%40%7DA%40o%40%3Fg%40%3FS%3Fe%40%3FkA%3FuC%40m%40%3FoB%40i%40%3Fq%40%40wA%40QB%40jA%3FX%3F%5CCNGLQJOBY%40o%40%3FS%3F%5B%40SBMFGJAN%40XBZDRHPHHPDR%40h%40%40n%40%3FFLFFHTNXLT%3FjC%3FZ%40dB%3FbC%40jCiHB%7DFF%7BB%3F%5BC_%40EUEOE_%40O%5DS%5BW%5Da%40%5Bk%40a%40w%40c%40%7B%40_%40w%40Yk%40OYIQEOEOAM%3FMBY%5BoCC_%40Io%40Qm%40%7D%40%7DAsH%40%3F%3F%3F%3F",
      start: STOPS_DATA.hebbal,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-10",
      routename: "KIA-10 UP",
      route:
        "ufhxM}w`nArAeG~Bf@tAl@dEjDzEpClD`CdA`@bCf@`An@n@WTaAdCaL`@_Ab@QnB{AlEoEj@qAz@uF|AuFz@_CdBiFNm@FoAKoAiBcGsEkNyAeEiCaHuBiGqBwHqCwKMa@a@cAg@s@yAuAaA_@cCe@gJmAoJgA}D[{GAyEAeDE_AWo@m@kAeBs@gA[}@OkAG{@AmOCwIC_NAiFSaCw@uEqA{Fs@gD_CuKg@qCOsBCiABMG}@GgE?{B`CwQjAgIbBwO\\{C\\iDz@eJJiBVaDNcBBsA[{GMoA_@aBaAcCK[iAoAkAqAiAkAoBy@kMeF[Wa@m@]o@QQKi@CcALuCFeAPuAOEMMMYE_@F}Bd@gETaATCa@vBI|@InBEz@Yl@[\\k@\\]FuA@w@Mw@[eBiAs@{@e@aABM?CQi@yByEaAuBq@S]A_@HmCrAw@f@OVeAj@sKdFcEhBgHrDcAl@O?ODqD`BgAb@]B}JSqTm@}FSiKWyDGmHAiSN{NVqCFYKy@o@AyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kEu@cEiAkHHWGi@UyAk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKiPE{B?aEHiDRiDRsO@yBf@cO~@y^AwJ{A{_@QcGEk@S}Bi@gCwBmHe@cBkAgDgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkFeCmNwAeJ]{@c@}A_AgCgAgCiFeK}B}EaFmJaJ_QmO}YuFwMwCwHwFiOgHwR{@gAOOo@gB_CmGqCsH]}@iEiLwBoGu@cCg@oCGaABkCBiEHKHMBSJkK@oLCyAc@wJKiBk@{GwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuUyD}KcAiDa@mAw@}AmC{DgAuAg@m@UEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@kA}@iGkDiBaAo@SuA}@{MeImB{Bw@_B[eAiAuGc@qAk@q@}@c@cAM}@Dm@PgAv@eDbFmEvG{BtBoAt@sCz@aCZqOF_s@XeWSc@Ue@Se@D[Vc@PcGFulARga@Jq@[YOw@Hu@^sZHs@Ym@m@g@kAiAo@{J@YQQO",
      start: STOPS_DATA.mysore_road,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-14",
      routename: "KIA-14 UP",
      route:
        "}jrxMk|qmADObBIi@gFi@iEg@yEs@sCMmD@[RHWm@M{ASwBs@wHoAmPYeA_@mCiAaEyCkJkA{Dk@oD{AcLAmAUiAm@qC]g@eBaIqAuF{@sIc@wG{A_Jm@}CAmAf@oAbFyGd@iBLcATk@j@iMSAB]HoAX{IHaBCoDOcA@gHU}Oi@wUk@}WIsJ@i@S{@GuDFiBMcCCu@Pu@I_De@sDyAgKCqBSq@q@oEk@qCu@qF{AaRm@gF?aF\\wCXgEjC{@xDcA~@QTn@dGaBfBg@vAcAhEuBtB{CdD}GlAqC~IqIjBqAzBy@|EkA}BcIgAeEuDqMiEePu@sB@Y?Qq@SgAg@aEqDgB}Ck@kBn@Ch@CVCnAm@n@mAjAqBZ{@z@sAzBwBdBs@fCe@rEe@x@@`HfAbDJvBd@hA^x@`Av@l@b@CXWHOP{B|CcErTqQrFqEhAu@jBu@eDmFqBgDgFeHgByC_GgMgEqHqByDsAwDoDkJiAeDi@qB@}@LM@QYYE_A^}Kf@cKC{BWeCo@kCu@wCqAmDUiAHUd@iAhIuDtE}CpA_@vHi@|DD~AFpAMb@O`CcC@?D@B?HEFSQIIBABA@}CeCiCQo@_@Qc@KqAOwBAqAB{GI{ACeF|@y_@?cNOwJIaOJsUWmDeBwLa@_DoAiHS{AHWOuAkA}Fu@}CoB_GyCeJiB_FmA}DQuBk@oC}BgIUyJQ}ACAWuA?{@aA_Ia@wBoAyF]{@NGa@aBWq@SaE_@aCmImTk@aDJWe@aDyAuJEuBZkH@yOMqMHkJRiDLgIDuGTuH`@uMp@iX?qDK}HsAq\\KuCAu@Fc@Lc@@m@eBoHOqAEkCm@ePg@eRe@{PQcJ_@@IGcKwNiHsLmFeK{DeIs@q@cAiDcB_EqJqRqJyQmPk[eDqGuFwMaEsKeGcPeGaPu@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CiFuLiHaMwKgPiJ{MiC{DgLsOuCmEuF_OgGuP_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@gBqC@Q_@}@_FeI}DcGcI{LiE{FsBeBgAU}CcCcHqF_E}ByEkBwLgHuOkIwIeFaMyGuW{NwCsByK_LUPD\\LX~F|GdEdDbOvIh@x@VrAE`A_@dAqB`C}AnAeE|AyF\\sKR{g@T{P@mPQs@a@i@Go@`@w@Pmc@Jem@Bwc@Do@WSK}@Bk@^m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.royal_meenakshi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-15",
      routename: "KIA-15 UP",
      route:
        "k_lyM{penA}@BEuBMyGKkGq@mDe@oEk@qAsAyC}@iBy@uAsAaBsCwC}@i@uFsCWOFOH[Bq@B{E?QUDwBP_Gf@}Gd@sDLcDDaAAWYGE]?}E?IDWV{@AyEDeC\\wXnEqGvA}QbFwJ`CmARwCr@[FUw@e@eBGOa@sBu@aCkDgLqBcGwAcDiDgFwGaJ_@cDsByHa@qDQaCPyBbBwOvBePj@}EN}A@kB[gD_@kAuBeEqLmWuF}Lu@gCeAyE_AyIEoA\\G?i@QKO?CgA?wBNyLdAkRXaDnA{GjAgDrAyC`DiHxAeDjAgD^iDDgCOoB_AwH{CoS_B{Km@oEIcBJkHR{FGiGEoDSkGy@sHuEuUCe@@I@Sf@ThAh@fHbDpPbIxNrIrTrNtBrAFYlAcDrAaDd@q@bDsHlOo\\tBwEdJuRnI_QlEgDbC{BpCuD`FkHhAwCb@mB`@cCXeE`@qOXqJXqKf@sMJgDYsEiA_DmBoEmBoEgBiEQcAWwDUyCkBwH}@iG}BiHcDoLc@iBiAyDeAwBcAoCm@uCSoAM{B?cCIsBw@_Eo@cHc@_Fc@uFi@sM_@gGgBiPWuDAwF_@eXO_USeM@oBn@{A`C_GxA}Ej@yCVcDK_BwAuJkAmHo@cD{@kCcAoESoBQq@y@AkBRc@EOWYsA}@cH]iAQWWqBOqDRe@\\IzIgBdF}@h@Ix@o@`AgApBwA`DaBjCkA|DyAxGgBjCi@rCc@lCq@`I}BpH_BrUsEtD{@f@a@Pg@GcECaETs@hBcDVw@LgJ?sJGcFAm@XaAHWX{@~@aB|EgGnEqFpFuGn@_BZ_BF}CZwA@q@_@_I@u@hC_F~@sBlAoE~DsIbD}HrAiHt@wAxAkA~@mAv@aB~@cC`CqIb@cAPKt@kAxFaJXq@ASNuCdAqGn@eDxAgEx@_CxA`@|C|@dCn@~@DTK\\q@h@[pBa@hBORMDWBIjASdEo@~CYrFm@xA}A`AaAbCmArAq@xA_ARi@?mAbHIpE[~BEpAG`F}@dImAbCYp@]|Bq@x@LR^bApBn@dBd@r@f@SbDg@tDe@rDKrEVfFV~D@X@NBrA^pBd@bBFzLNfRn@pGMbBNdCGvB@v@GJSeAaMcB{Ks@_Mi@iNMaKNmAnA}EpAmFZ}APURw@Oa@a@Os@NOPw@Pmc@Jem@Bwc@Do@Wu@QgAh@m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.whitefield,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-17",
      routename: "KIA-17 UP",
      route:
        "q%7CcxMe%7BwmAvAJ%40uA%3Fw%40%3FcA%40%7B%40%40kA%40kA%40sAB%7BAD%7DABmA%40_BL_DJ_DJuCDsCJkCP%7BCFyCDiCHiDD_CFuBDcBhCM%7CCQnCOnBKtBInBIzBO%7CBO%60BQ%60Be%40%5DuAQwBC%7DB%5CcB%5CqBImBSyBWcCM%7BBK_AN_ArCDvCAlC%3F%60C%40vB%40Hc%40Sy%40O%7BAAcAAy%40%7BCHoBH%7DBBiBDyB%40JeCi%40gDw%40sCsAoEmB_EiCaEqByCoBqCmBeCk%40cCKwBsEi%40oDw%40uBgB_BeB%7BBsAyBqA_CiBgCuCoCgEwCaFqC%7BDeDmEqDaEuAcAvGcBvHcCbFaEfFuHpEqGnEkGxDsGfAqJh%40qK~AcEbKmDbHuCrJ%7DC%60FuCf%40_NWoP_%40gOW_PaCoNgD%7DLyCyJqFiJkFsIiFqJgByJq%40cIiFuVk%40qAg%40yBs%40wCiAoDcNa_%40oKoYsAcEa%40wBKiBAmD%40%7BFQ_Hq%40mDuA%7DC%7BEiFkB_C%7DCgFqBmEgAqDuBoJmAmGu%40aGk%40cGmAgGuA%7BDsFaLmNyYiAcCO%5BOHoBn%40aA%60%40iItD_%40J%5Bw%40sBuRiCeS%7DA%7BMWy%40%7BLkKcBgA%7DDmAuI_CyNiDuK_CmIkBcDm%40%7B%40MSSo%40EmHf%40e%40ESa%40%60%40eCr%40gBBADEBMIM%5B%40q%40%60Cm%40lB%7B%40jA%5BZq%40JkLJkFKqAQaE%7BB_%40C%7BL%7DH_DoAmAU%7DKq%40sLo%40mNa%40%3FMcEGsACsCI%7DDI%7DDSwH%5B%7BBT_%40LFNsA%5C%5BPg%40XkJ%7CGqCvB%7BGtD_FpCyBp%40kOhBqADeC_%40qDy%40c%40QKQ%40%3FHZS%40i%40NgAVNv%40%40Nq%40FEWr%40E~ADv%40Qq%40eBq%40sBMsCQeCg%40qBcFoMiBiFU%7BA%3F_%40DYu%40kEmA_JB_DTcG%3F_QKkQ%5CsIRsOXeLx%40aYVsOa%40yQiAyYE_BYiDaDuLyJkZsAgFeA%7BJiAmHuBuIkEcOmEyUwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_EeKqCsHgFgNmDsKg%40oCCmELuEHMN_L%40oLg%40qMw%40eKwAkEqImSoCmGkCqF%7BJePkImLgJeNqGqI_JqMgPic%40sD%7DKkAsDeEyGoBcCUEsBkCyDkGyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCmAuAwC%7DBm%40KgAaAyG%7BEgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40%7DAMqAVgAv%40uB~C%7DFzI%7BBtB%7DCxAgEr%40ig%40Vg%5BHeWSiAi%40%7D%40V%7D%40Zmc%40JiqAZaA%5BMKq%40GkAh%40sZHiAi%40_AiBi%40a%40_%40MkFBwCCc%40_%40",
      start: STOPS_DATA.beml_5,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
  ],
  from: [
    {
      name: "KIA-4",
      routename: "KIA-4 DOWN",
      route:
        "ka`yMg`bnAiA~A}@JGwCHiCVsA|AmCxBgCzDuGxHmMfCwDjAuBL@zDMpi@qDtLiAfNeBfGk@JSb@{CnBiQ\\_HHeDZyMNgFpDDrBB`UTtRVpYVfGFvCIdFUjF[zDGjAjAf@TrAp@`Al@VVvAfCbD|Er@r@dDlBhFjChCvAxCrAlElA|BTbCLBiBAaBF_@@_AIeC_@{CEy@?]B{FD{BMy@Uo@g@_AUOmBe@o@e@y@uBaBcFaAeAsAoAFML_@rAuJHqCM_P?[LUf@YdABtIz@r@j@d@~@r@_@^_@NSn@]xCyAfBqAfBmAx@m@`BcAv@_@pDgBbJkEvB}@bA[zB_@zBm@hAe@~A}@lDcCpCgB`AYtEKh@ExA_@fEgAfDeAzJoClCg@v@I@Sf@gAx@wAzAgEf@wArCaHt@yBh@cCv@aERk@RSrAcApCsAzHyCtQ{Lh@Gl@sBtC{F|JsQnCwE`BiCzA}BlCiDn@i@zCgAvAYvE]bEG~AF`@?ASGwF@k@Aa@OQH_N@sFGsBmA_Hg@aEAg@e@}CsAaIIm@HSEa@WeBk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKkN?{BEcCL{JNsAJuGBoBB_Fb@cN~@i]FkFCyFwAs^SsGEaBu@wEaEkN_BgEcCsHsCoJo@gDOsAu@oIY_BcBuHuBgHuBkHw@cD}BmMaBcK_@eBSo@Yy@o@{B}@uBmE{IyBuEyEgJuHuNiPe[oGqNcEmKaFyMiI_U_@u@u@w@oDqJcCwGi@{AcCuGgCaH{AyEs@_DKeAA}AFqGNQNkDFeTCyAQiEu@kMg@{CW}@}GePkA{CwB_FeBaEy@yAqC}EgFuIwDiFyGqJ_HgK}HeKwFiIc@u@{AuDsFkO}CoImAgDmByFcAgDe@{Am@sAqCeEwBuCu@UcGoJ_Ww_@uKuP_IwLVMKOsHeL[c@mD_DiA[}CcCcHqF_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqIuBsB{@uAo@cB{AiIe@cAm@k@{@]aAIoANgAn@oBlCyFzI_CdCsAz@iC|@}B^gDJw|@ZgYQe@K[Uc@Ic@HSTo@PkRJccBZy@_@_@Oa@BWNw@X}YHgAa@i@q@Yy@aAq@oKCg@a@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hal,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-4A",
      routename: "KIA-4A DOWN",
      route:
        "k_lyM{penAFdBr@CvAIxNs@`Uw@xT{@^JlF[dAi@zEYnRkA~BPb@T{C|LmFvSgBhG{@zCqChIw@jBi@p@aA^qGToEPqCv@cBx@q@p@u@nA]`CJ`Bv@fC`ChFzApCp@|Cl@vFlCjLpBjHn@|CaHj@D^`IGdEWpAKtOm@tc@{AbSq@zFQjEOvADzMrAxGn@~a@hEzLhA~]zAjKR~@IvBq@pG_C`RkHdKaDhDa@~Ic@bJKdBMZK?VzCEbDWRAEs@?cAAwCZoBj@qApE_GpMuT~BuDhAoBL@RAlAGdF[dL_ArRsAvOiAtMgBhJ_A\\gBd@{D`A}H`@uEZwHn@oWf^^bi@j@dJJjHWvMk@fA?NGIO{AgCgBsCaD_EsAmAcAw@l@@tCP~B?xFm@pEg@fD[nCFfHb@bCLxBn@h@gArAuJHqCM_PLq@f@YdABtIz@r@j@d@~@r@_@^_@~@q@`GkD~CyBxBsAhD_BpKgFfCgAxE}@pDwArGgE|BwAhASzEI~Cw@zIkC|IaC`Eo@Nw@rA{BpC_IlCqG~AsGn@{Cf@_ArAcAzBgA|EkBhE{BfL}HvA{@h@Gl@sBvBmEtIuOvHmMhFgHtA_A~C_AdGi@bH?`@?ASGwF?mAOQFyIDoFEgE_@uC}@{Fa@kE_CoN@aAUyAqAwG_D_KcEoLgB_Fg@kDc@eCgA_Ew@gCOcCMqHM{@QEgB}NcAaFy@iCu@qBw@iCc@{CMiBG}@SuBoCsHiBiFU{A?_@DYu@kEmA_JB_DTcG?yOKuNL{J^yMZaPH[VkGt@mZDuG_@_Om@_Oc@qMe@oDcAgEgBgGsCiIeF}OaBmHeAcLy@iEoByHiC{IqAsE{@mE_FcY}AeFcB_EwF_LqKwSaLaTkKoSmKoWuOkb@_@u@u@w@oDqJcCwGi@{AcCuGcF{Ns@_DMcDFqGNQFg@NcUCsCq@sOk@{GUy@{FmNcEcK{CcHkC_F{IoNaI_LyIsMqGqI_JqMyIqUgIcU{BqHm@sAqCeEwBuCu@UcRqY_LuPiCmEaAeC}NwT{IyMaC}B}@c@k@IgAaAeEyCsAaAcCqBkAq@aFuBuLaHiB_AeAg@Ua@e@WmFaDsFcDmBaBqBgDq@oCs@kEu@iBs@k@aAY_AE_ANgAn@qA`BsHhLkAnAyAdAsBx@}Bd@eDRuL@ui@T_a@Le@?_@p@e@~AeCdKeA`Am@Vg@ToC?uKDq[Hi]Lon@NqJHeBG{@QgAq@c@i@{DcIYuAGmBCi@[cBgAcBsAgBeFDiA?AdA",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5",
      routename: "KIA-5 DOWN",
      route:
        "i~mxMo}ymAaBC?UAWOJ?XKjBEfD?jCFpA\\zE|AnJHxCGzFQnIs@lIFp@O?kD?kIDcN@cZNcAKwODFe@DoAGiI@uJBqEOcFCwF?{IBkA^?`FU`AIzAK?_CDe@Bc@AoHIeMKcI?_C?MO@qEHuEBMwQa@{@e@yDPgBZeAd@c@hG?hDAOsDIeOE}F_@uJ?gBHwDcEAAACCEAQw\\CyIF_AHI?YUM_@qCa@gAcAwAu@k@oC}@s@[cDo@yCKwEMsAeAcDwCoFmBsDuBsAs@[t@{AzDWx@yA~BoCdCc@\\s@qAyJgOzC_DpB{AnEmDpCoC}AsAwAyAjAcAnCcCxDuC|CkCvB_BRIK]IWIc@cC}ImCqIuDwMWm@m@i@{DyCcAaAcBsCm@gBg@{Ag@i@yC{BwAuAiAy@sCcCkFmDeAi@uBkA{C_CoI}EcC}@XcAhAcENWjD{A|F]bCSTk@y@yLC}@~CuCrAAfFEZiAzIwU~@aBVK~D_AdJsBxB_@nD_Ap@[Pa@D]dCs@zOqFbBi@h@i@e@gA{@}CScAFm@FGxAsAxKuIx@}@Vy@d@cFL_Cr@gITw@^u@FgAYy@TcCv@{F|@cHTmBpAeJ]mC?oCDsHOoDf@eWVsOEaKOkPC}JJqNMoGuAkIa@kEu@cEiAkHHWMkA[cBg@aCe@cCqBeGyCiJaCqGmA}DQuBk@oC}BgIUyJCu@Mg@CAWuA}@_IiBaJoCcIu@kFKkAGeAMaA[wAsCwHuAoESsAHO?_@iByKYmDJoDPiFDsIMyOAiIHuDZiJFuHHuCf@{Ov@u[?qDK}HsAq\\UmGUqCcAgEgBgGsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsE{@mEkD_SS}A_@eBY{@cAiDcB_EwF_LqKwSaLaTeF}JoEaJsJeVqOcb@iAoAuGiQqAqDaGaPwBgHc@wCDoJTc@PyRIyJ_@eHa@uGg@{CmCeHaFqLoFiMmFiJyFeJ_EyFcIeLuEeHgLsOuCmEuF_OgGwPyD{KgAuDg@qAgAqBcDmEw@kAQCc@QgBmCmMcSyPkW{KyPmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFkA_@uM}HoCyBqBgDq@oCeA}Fc@w@s@k@aAYcB?oAf@eBrBqFtImCbDyAdAsBx@}Bd@eDRmd@PaUD_\\Kw@Ia@Wo@Ke@RILw@PwuBf@kAe@u@I]Nm@Xk@ByY?w@c@o@sAc@g@u@]{J@i@a@A?",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.banashankari,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-5D",
      routename: "KIA-5D DOWN",
      route:
        "qbaxMixemAeA%60%40aAVkAb%40iA%5CeAZuAZgANoAJqABuAAiA%3FkA%3FcA%3FFwDNiCn%40kCd%40uBd%40iCe%40sCmAqE%7D%40oCaAuB%7D%40q%40wBIoBSy%40k%40i%40kBCoBZwAf%40gBh%40yAH%7BBF%7DBVuBj%40mCh%40kCt%40iCj%40aC%60%40sBZaBg%40_Di%40yCe%40cCk%40%7DCe%40yCc%40oDm%40gCk%40%7DBcAqBmBkB%7BAqAmAyA%7D%40sCw%40%7DBq%40uBi%40mBWaCe%40oDY%7DC%7D%40kDgAcCaCeDwB%7BCiBoCkA%7BBgAaCy%40%7BBaBqCoAgBwAaCQ_DI%7DCMcD%5BaCq%40eC_BcC%7DBkBuBwByBwBmBmBeBqBuBmB_BiBoBwCyA%7DBuAeCaCaF%7BBaEgBqDyDiCiC_B_CcBqBgCaB%7BByAsByB%7DCkBkC_ByBkCcEmDqEoDwEiDmEcEeFwDaDwEcBcEoAmDkCwBeFuBsGkBoGqAkFyCcIuCiCoLuBcLsBkNiCcMqCgJ_CsJ%7DBoK%7BGaI%7BGuHcHyG%7BG%7DIkIaIyHwF%7BHkDwEyA%7BCcBaIg%40eHf%40qGIsFHeG_KAgKBeJD_I%3FkIBcILcK%3FDkH%3F_IHwII%7DJIqGEyH%3FaF%7CL%3FIuHCaJM%7BFBkF%3FiGM%7BEBiE~%40iCSmEy%40%7BBwEDaFBCeFEsGDsI%7CFCtDEIuHBoFIgE_FH%3FoGIgHIiI%3FyFEsGu%40eFaDwCyFuA_Fe%40aFOkDaDmEqBgEwBaDcBgAhCs%40~BiAhBiBlBiB~AyBnAoAx%40cDkF%7DAeCoAkBwA%7BBvCcCpDsCjC%7DBlBiBxBgBpBeBjBcBbBsAdBoAlDmAiByHvBoBqAuFiB%7BGuAwEmAeE_AwDsAyDiD%7DBgCaCqAaCy%40mCrCQdBmBbBsDj%40mF%60%40%7BDj%40eEd%40cDd%40qDf%40mDqCeD%7BBcCaCiBeDcCoCoBeDwBcEkCzBuGzAiEhAgDfBoEl%40iEO%7DClHiB%7CFuApDy%40vCo%40fA~Dp%40PjBeBzDwEtCqDhFaFjFyDpFoEpAwBjAoLl%40iHl%40eGx%40cIr%40cFt%40sFT%7BFDkFx%40ur%40I%7DYMoMLkWOoEoBgM%5B%7BCq%40mDm%40%7DD%3FaAOyAkA%7DFeD%7DKyCeJyDcLaAoGuAyEe%40_CQaJSuA_%40uBgA%7BI%7BAmH%7BCeJu%40%7BGKsAw%40kDcDqIi%40iBBu%40YeADY%7BAgJg%40cEB_DZgPKkNE_GL%7BJ%5EyMB_Fb%40cN~%40i%5DBeNwAs%5ESsGEaBu%40wEaEkNcF%7BNsCoJ_A%7BFoAoLcBuHuBgHmDoM_FqYmAoEmBqFmE%7BIsI%7DPuHuNiPe%5BoGqNcEmKaFyMiI_U_%40u%40u%40w%40oDqJcCwGi%40%7BAgJqWs%40_DMcDVcHNkDB_WgAuS_AyE%7DGePcE%7BJ_D%7BGqC%7DE_L_QyGqJ_HgK%7DHeKwFiI_CkFqK%7BY%7BDaLwCwIiG%7BIu%40UcGoJ_Ww_%40iCmE_%40eA%7DKiQuLsQ_CkCgBiAk%40IgAaAeEyCsDyC_E%7DByEkBwLgHeBy%40e%40i%40aJoFgDqBuBsBkByDa%40kBsAqGsAkAaCUcATgAv%40qHfLeDvDsAz%40iC%7C%40%7DB%5EgDJyp%40VqMB%7BXHmCtIk%40nCi%40hAy%40p%40iAd%40wLB%7Dc%40Lku%40Rc_%40NeCm%40kB_CaDeHOkAMyCk%40yBo%40_%40o%40AiIPOeA",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.brigade_meadows,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6",
      routename: "KIA-6 DOWN",
      route:
        "qeryMcfinAd@KLf@HX~@tCz@|CPjBXjAjDxEjEdGzBhEbD~KlF~PpAnEd@dClB|PnEt_@tBb[^jEt@xGdFjV~C`OBx@nAhD|E`LzAjEnApAlAh@z@@nDe@tCKrKEfLE`IGnCFl[tCxKd@fLZp\\P~RJvOB|BDrAMxOc@dOe@vQq@ba@oAtK_@jEOvADzMrAtTxBtU~BlJbA|H\\f`@|A`CO|FoBnZkLhFyAvDi@|F[nOWbAW?V`AA~DOpAMnDe@|Cg@tJuAjGi@x@AnGp@`L[vJWjOU`Vw@pWyApP_AbDOdAU`CE~SoAlOcBbDS~@DdGtAv@HbDu@pEiA~FeAlCc@rAg@`HiDv@{ArEeLT[fG_CxDgAzCWrANjDjATFFMj@i@^u@j@{Cf@yGd@oHPgDDqC@WYCm@GUCKAO@FeFQoFYaCBa@IaAL_GAwAcAqCi@[mBg@i@i@aBaFy@wBmCiCX}@rA_KBkEK_NTe@j@SlF`@jDd@TPx@rAfAq@Za@hEwBbEsCdBsAlIeElMaGxE}@lBm@`DgBrHaFhASzEItJgCnGqBrEkA`Eo@Nw@rA{BpC_IlCqG~AsGv@qDf@o@hBoAfCmArDsArBy@tAaAnKkHfAq@`Aa@NAf@eBL_@tDkHzEwIfIqNzEyGpBkBnDiAnD]|DS`DB`A@EuAAyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kE_CoNHWMkA[cBmAeG}DaMoE_MmA}DQuBk@oCyAcFc@cBKmFMaEMg@CAWuA}@_Ii@wC_AiEmAsDaAoCu@kFSqCMaA[wAsCwHuAoESsAHO?_@_AqFi@gDYmD\\yKEsSCcPHuDZiJFuH\\uL~@e\\J}KK}Hg@{Lw@kSIwBUqCkDoMsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsEgFmYs@cEY{@cAiDcB_EqJqRqJyQmPk[oEaJ_GsNmEmLoJmWgAyCiAoAqIiUwGsQwBgHc@wCDoJTc@PyRA{Eg@cMa@uGg@{CmCeHuHwQ{CcHkC_F{IoNaI_LgJcNoHyJ}HiLmMm]mEcMkCiIgAqBcDmEw@kAQCc@QgBmCmMcS}GcKmLsQiGmJmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFaD}A_K_GoCyBqBgDmAaGi@kCc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@iw@Ve_@KiASUQi@Go@`@w@PmFBulARga@Js@]g@Oc@FOLaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kadugodi,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-6A",
      routename: "KIA-6A DOWN",
      route: `qeryMcfinALE%5EbAPA%5CjA%5EbAZ%7C%40d%40~BPrBp%40hAfFdH~DbGx%40vBlAdEzDbMzDtMFNL%3FzA%5DjJsBbM%7BCjKsC~Bq%40fJ%7DAtGaA%7CKcB~O%3FdE%40bEKbIy%40bKw%40~P%7DA%7COwBz%40UdCuAtAg%40dI_B~Bg%40zBg%40~CsAbHkDbCKpE%40bIIv%40Rb%40Z%60C%7CBxEvDpA%60AvFrC%7C%40n%40h%40r%40lClAv%40PlAV~%40d%40fAh%40nAv%40l%40z%40nArChApDNrA%40N%60%40%3FZsAvCiNrBiJlAsFnB%7BIBYZ%3Fx%40CbAIjB%5DxJeBzIaBxEq%40lHeBfEo%40xDQpDc%40jDcAdF_BzA%5DlJ%7DB%7CH_DrBy%40xAgAbBqBjAiA%7C%40o%40~BgAjASzBMfJYpPIVD%60%40L%7C%40CbCEzB%3FvCHzFGxA%5ElAf%40lBl%40lCx%40jG%7CB%60WlJz%40BjBz%40xMdEnBf%40rA%40dAUbAgA~CgGzAwCXo%40Ls%40D%7DBf%40yUXoKtAwN%5EkFR%7BHh%40qRVwHL%7BCXoBVg%40f%40%5DvNyElVcIxJeCvi%40sQ%7Ce%40aPrC%7B%40bAMpKiAvEm%40hHoAvNoEdA%7B%40fBgF%7CKoYtE_LpBcEr%40u%40zBcBzD_CtEcHrBwCdAkApAq%40pBUzB%3FnW%5CxDJvAIzCg%40zEiAbBc%40hB%7B%40xAc%40tLgBrDk%40FA%40RfHkAnEi%40bGg%40xODfUEdCHnARjAj%40vBtAvBzAnBdAd%40LfBRvKCzAKj%40GTSlE_AlCe%40jDg%40n%40FvBScByEQwD_%40aDyAmD_FsMi%40iBU%7BA%3F_%40DKGk%40kAeHa%40oCOcD%5C%7DK%3FwKGaGEiFHkJRiDLgIDuG%60%40gM%7C%40g%5CHsNu%40%7BSu%40%7BRIuBS%7DBScAuAiF%7DAkFmJiYuAmGoAoMwAgH%7DAcF_CcIoA%7BE_CoMkB%7DKYqBOWa%40oAoAyDcD%7DGgIqPkJiQwOiZmEeJgHeQsD%7BJ%7BJeXa%40iAs%40u%40_AwByFmOk%40%7DAkImUkAgEYmCBkCBiEHKHMBSNoUCsCIqDg%40aJk%40%7BGUy%40aAqCyD%7BIyBsFsAaD%7DCeHuCkFyIiNyJkN%7DGaK%7DHiK_GqIkA%7BBwLi%5CmE_McC%7BHgCcE%7BByCg%40m%40UEWM%7BA%7DBsA%7DB%7BKuPsLmQmIsMgF%7DHcDcFVMmE%7DGqBwCmAuAwAsA_Ai%40m%40KgAaAyG%7BEgCsBwC_ByEmBs%40a%40_%40i%40uIiFiBaAeCqA%7BMeImB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40cAMkBVgAv%40sJzN%7BBtBoAt%40sCz%40aCZ_u%40%5CqMBeWSiAi%40e%40D%5BVc%40PcGF%7DnB%5EkAk%40w%40Hu%40%5EsZHs%40Ym%40m%40g%40kAiAo%40%7BJ%40YQQO`,
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kadugodi,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7",
      routename: "KIA-7 DOWN",
      route:
        "%7B~%7CxMqfwmAoAQg%40%5Bg%40k%40%5DgAUm%40Om%40So%40Mo%40Ik%40K%7D%40Iy%40G%7B%40KiAMgASy%40QkAKaAKcAG_AAq%40Au%40%40iA%40gA%3F%7B%40%3FaA%3FcA%40%7B%40HsA%40%5D~A%3FbBB%7CA%3FtA%40fA%3FfABxA%40jA%3F~A%40%7C%40%3FbAChBI~%40GbAEbAE%7C%40CbDG~AGpB%3FdBCjA%3FpAA~%40AnCElB%3FlBEvBAnBAhBAjAAA%7B%40K%7BCG%7BDFM%40sCEwCGaD_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzAnMpApIl%40lB%40vAM%60%40MxHaCtRqGfQqFf%5CcJdCq%40d%40Bx%40FFO~B_ErA%7BCnAwA%60DcC~QkMzD%7DBfDgBpAa%40hEiAlAKdNgAxTcBbCo%40%60By%40ZG%7C%40mApB_DpAmDVwCt%40wN%7C%40oHZy%40%60%40_%40nBoA~Ay%40%7BBcEcEcGsBaDjAqAjDsCnAoAvB_B~%40w%40rAoAZ%5BYS%7BCyCfB%7DA%60DoCrFkEbCsB%7C%40e%40Mc%40a%40%7DAaEqNuCwJiBkGS_%40iBqAcDoCeBkCk%40qA_%40gAk%40%7BA_EaDMQwAaAmAiA%7BGkFeE%7BBmAo%40qHmFkDgBcC%7D%40dAqDb%40aBTSlD%7BAlGW%60BOJGNm%40_AoNjDuCvGIV%40%3FQ~BkGvEqMtAiCtCy%40pEeAfCk%40mFsGiGwETo%40jI_KlJuMvAaBt%40w%40h%40p%40tAfBl%40h%40zGzIjGdGrCxCNRZ%5Be%40gAq%40aC%5DyADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40OYAYbCmQx%40cIt%40_EKaBQ%7B%40%40%7B%40AqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUGsBO%7D%40%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwGiBqFu%40mCcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGe%40%7BDc%40qBs%40uDaA_DsBcHwA_FgAkFeCmNwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEcHmPm%40_BoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsB%7B%40uAo%40cBiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40PKLo%40PkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.hsr_keb,
      end: STOPS_DATA.hsr_keb,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-7A",
      routename: "KIA-7A DOWN",
      route:
        "%7DuzxMa%60ymA%5CAJ%7CAG_AImC%40%7DIMyH_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzANBBSP_CdAuUZ%7BFl%40oC%60%40%7B%40vCuCpIoItSiTcCeBgBy%40iBs%40aDo%40oFEiG%3F_D%40%7BE%3FqAK%7BA%5D_CaAiBqAeAoAoDmG_LcTiDyGcCaFUsAR_BVi%40z%40%7B%40nD_Dn%40yAHiAYuAkAyC%7BDuHiC%7DF%5DsMFiF%40m%40%40a%40%5ECnG%5BlH_%40MmAw%40wJGc%40fBKtBOfGk%40dGw%40bDS~%40DdGtAv%40HbDu%40pEiA~FeAlCc%40rAg%40%60HiDv%40%7BArEeLT%5BfG_CxDgAzCWrANjDjATFFMj%40i%40%5Eu%40j%40%7BCf%40yGd%40oHPgDDqCtBApG%7B%40tRkCdc%40sGjBYRCAUs%40aDU%7D%40eAkDxK_CvXmGTEGWg%40_BeBmHQu%40i%40yBDe%40Z_B%3FOy%40sESUPAlAWTp%40f%40hAZdBEF_AZUT%5C~ArFcAlHyAcAcDhBo%40h%40YdEf%40lBRdC%40p%40%40v%40j%40HdCIpAR%60CPN%7CAx%40xAn%40jLgCdFmAv%40YTWJo%40tS_HxA%5Db%40_%40Z%5B%5Ds%40k%40qBQm%40YoADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40Qs%40bCmQx%40cIt%40_EKaBOwBAqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUWqD%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwG_D_KcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHyJkZsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FmEyUwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEqImSoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsBkByDiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40P%7B%40%5EkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hsr,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8",
      routename: "KIA-8 DOWN",
      route:
        "efayMoblmAOKd@s@hA_B~BeCdU_[zYma@bc@ql@lZoa@tEuGjFoG|LsNjDeFdEcI`Ra^fUec@|N}Xr[em@`GcLhC{EPm@fSa`@dQw\\h@g@lC{F~BcF{Ce@uIi@wBDaKhBwEv@gCHkHV_HTgPn@wCHqKt@oA?uBUkDaAkAo@kDkCoEwEgNaRsA{AaHgGmA_AaCkAkCi@yF_@wDKgCF}N|AyGp@mGbAcYbHiS`DeAb@iEd@gAAg@c@qAg@k@Yq@EaLkEqX{JoKuDgHsCsJsDiVwIuQmHeEiCoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNnMcWvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItEDzGEvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@EvAs@f@u@dDuGlBcE`Aq`@FqDh@wFpAaQp@uTh@yQLsB\\oA\\_@|Ak@rRmGzQcGbDw@zJ{Ch]eLt_@gMnOaFvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{AdEeCzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZbEg@fB[fG{ApCoAzScDHPfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDtCrAfBRxFAxFM`A[lE_AtGgAr@E~ADv@Qq@eBq@sBMsCQeCg@qBsA{CyF}OU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}H\\sITmSf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGiAmHs@uDaA_DsBcHwA_FgAkF}EsYaAyCgCoGiFeK_JkQoZ}k@mKoWwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmELuEHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@iLqQcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.ecity,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8A",
      routename: "KIA-8A DOWN",
      route:
        "wlvxMyuymA_BH%7DACyACoAAeA%3F_A%3FgAAeAA%7D%40GaAM_AOw%40OcAU_AS%7B%40Sg%40Kq%40Qw%40Uw%40U%7B%40SiA%5BuIi%40wBDaKhBwEv%40gCHkHV_HTgPn%40wCHqKt%40oA%3FuBUkDaAkAo%40kDkCoEwEgNaRsA%7BAaHgGmA_AaCkAkCi%40yF_%40wDKgCF%7DN%7CAyGp%40mGbAcYbHiS%60DeAb%40iEd%40gAAg%40c%40qAg%40k%40Yq%40EaLkEqX%7BJoKuDgHsCsJsDiVwIuQmHeEiCoG_F%7BOgNuTyRcJoJiB%7BC%7DFwKqB_EgAcEkGgWaAiGiAqLeA%7DH%7BBaOiAuFQoCE%7BCMuGwAgPy%40eJa%40yLf%40wD~%40wClPy%5BbGiL%7CHuNnMcWvN%7BXfK_SjCgFdBiCjBwCpGsJpLuQnCqE%60JwPb%40c%40d%40%5Bj%40IhEItEDzGEvB%60%40%60GpBbQrG%7CM%60FvAXVAl%40%5CrBv%40vNlEdAH~%40EvAs%40f%40u%40dDuGlBcE%60Aq%60%40FqDh%40wFpAaQp%40uTh%40yQLsB%5CoA%5C_%40%7CAk%40rRmGzQcGbDw%40zJ%7BCh%5DeLt_%40gMnOaFvOcBzEs%40bF%7D%40rCw%40hH%7BBdB%7B%40l%40_A%7CDaLtKoXdFeL%7CA%7BAdEeCzAkA%60GiJ%60BsBx%40o%40%60Bc%40xAIdPLdOZbEg%40fB%5BfG%7BApCoAzScDHPfHkApJgAxIK%60QJfLIdCHnARr%40Zj%40%5CzEbDtCrAfBRxFAxFM%60A%5BlE_AtGgAr%40E~ADv%40Qq%40eBq%40sBMsCQeCg%40qBsA%7BCyF%7DOU%7BA%3F_%40DY%7BAgJg%40cEB_DTcGDcHKiPE%7DH%5CsITmSf%40cO~%40y%5EAwJmB_h%40YiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FgAkF%7DEsYaAyCgCoGiFeK_JkQoZ%7Dk%40mKoWwFiOgHwR%7B%40gA_AwB_CmGqCsH%5D%7D%40iEiLmDsKg%40oCCmELuEHMN_LAiOc%40wJw%40eKwAkEcHmP%7DDmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC%7DD_MyAkDmC%7BDoBcCUEsBkCyDkGqWo%60%40iLqQcBeCcDcFVMmE%7DGqBwCmAuAwC%7DBm%40KgAaAyG%7BEgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40%7DAMqAVgAv%40uB~C%7DFzI%7BBtB%7DCxAgEr%40ig%40Vg%5BHeWSs%40a%40i%40Go%40%60%40w%40PmFBulARga%40J%7B%40c%40q%40GYJq%40%5CsZHiAi%40a%40s%40%5Du%40i%40a%40_%40MkFBwCCc%40_%40",
      end: STOPS_DATA.btm,
      start: STOPS_DATA.airport,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8C",
      routename: "KIA-8C DOWN",
      route:
        "_tgyM}lcmATKlC_@zEeApAe@nC}AxAoAbA_Bxk@_w@pRkWpG_Jr\\m^rFiIrE_LdBkHfAkFdCuLhBiHlFwR~@cCvBmDrUe\\|L_Q~A_CzBkCbBuBbQ{UdMkQfLwOh]ae@bPsTxOeTpKyNfNcPtDaF|DeHzJkRh]gp@pl@{hAvKqSPm@lKaSfVme@`CqDlC{F~BcF{Ce@uIi@wBDyQ`D{d@`ByLj@yFXwAKyDaAkAi@iDgCcE_EaCeD}IsLwCgDcI_HgCsAoFcA}HWwAAiGd@uN~AuFp@iQjEkJvBgKzAcC`@_Dl@YTyDj@iA@c@A]YSUcBk@q@MaX{JmWaJuKkEgWiJoPqGiL}EaHiF}P{NkE{DcOuMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGeB}NyBaOs@sDk@eESqLgC}Ye@cHM_GXcC`AqDjHqNzJuRjHgNfG}K`D_H`HsM|EsJhV{d@zPsWjLkQrHkNxBsDp@a@nDOvJHfEKt@JzCfAfGnBtYxKfDbAz@LdBv@~InChFtApAAjAc@xBgDdEsIRcA^oQb@uQfBiSr@wQf@sSX_I`@mB\\g@vGwBhZwJlHyBzF_BzVoIjO_FpRqG~N_FvDsAxBi@dEa@lHw@hDe@~JoBzGuBxCgAt@{@dBmF~G{PlDmJfFoLbAcBn@k@bDwBdC_BtAoB|F{I`A}@|Ao@lBMzC@zYf@jDQrK{BhDwAfBa@jOyBbAS@RdCc@pHeAbD_@zGUdLFnVExBNfAZ|@d@pCjBpChBnAd@rBRrLCbBQbD_ApFaApC_@dAFhAOLCg@gAy@kCEi@SaE_@aCkEwKaCuGk@aDJWe@aDyAuJEuBZkH@yOMwOL{J^yMZaPj@uRf@aVWuNoAg[MeFu@wEqB_HoAkEcF{NsCoJ_A{FoAoLcBuHkFsQw@cD}BmMaBcKs@uCYy@mBqFgIqPyZkl@_EwHoGqNcGwOkOea@u@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CwG{NyJsPoTg[wRkX_CkFsFkOkEqLiDaKmAaEm@sAqCeEwBuCu@UcRqYub@cp@VMKOsHeLeDiDmBu@mG{EsDyCoBkA}I_EkBgBwIaFaD}A_K_GoCyBqBgDwBmKc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@uL@si@Te_@KiASUQi@G_@NOPw@PmFBulARga@J{Am@s@TaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.chandapura,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8D",
      routename: "KIA-8D DOWN",
      route:
        "stcyMk|xmAjArC\\fAFPKB_B`@HRK[~Aa@hE{AlN_GrGkCvGgBlEu@dBg@jH{DbAaA~@uAf@wBB?DC@C`Ae@`GgCnDyAjCq@vHgBpH}C~D}AdCm@b@ICu@]YSUcBk@q@MmHoCyZ_LkMoEgHsCsJsDiVwIuQmHuBiAoA_AoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNxDyHtGiMvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItED|@B|EIvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@En@Qf@a@f@u@dDuGrAgCX{@RyIRsJXcJFqDh@wFbAkLLuCRgH\\mKh@yQLsB\\oA\\_@|Ak@xDkAxLaEzQcGbDw@zJ{Ch]eLt_@gMtFkBxGuBvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{ApA}@rBgAzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZvAIjB]fB[fG{ApCoAzScDFA@RfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDnBdAd@LfBRxFAxFMj@GTSlE_AtGgAr@E^F~@Av@Qq@eBq@sBMsCQeCg@qBsA{CoCsHiBiFU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}HHiDRiDRsO@yBf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkF}EsY]{@c@}AgCoGiFeK_JkQoZ}k@uFwMwCwHwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmEBiEHKHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@uIiFmAu@kA_@aJoFoEsCmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.sarjapur,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-8E",
      routename: "KIA-8E DOWN",
      route:
        "il~xMmajmAaAB`@bA`@Oa@Na@cAo@_B}AcDcC_GMe@y@]{@m@o@iCiBiJMkBJ_Cb@_KGc@SCk@KgDs@cFCmSDiESaGmAwFuBqGyCKa@x@{A|L}P|P{U~D{FfHaKfFgH^_AhHsJpPcUpV}\\jJiMhUuXnEuGrNuX`Yki@vVoe@hx@{{AbAeB`FsJrS{`@@w@u@MmHc@sGFqNhCoXhAmTv@qKt@eEUwFqBkDkCoEwE{A{ByMeQeJ}HiEwB_HcBkDJYTkABqDT{Q|BuFp@iQjEkJvBgKzAqIzA}Dh@cBUyEsAoYuKeRoGeJqDwHyCuUoIwPwGmIyD_LwImRuPyNmMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGyCgVcDoRSgLoBmV_A_MKqGx@yE`AeCvOwZ`Q_\\nMcW`NwWrJaRdE_IpDqFjGmJ~LmRpKiR~BaEp@e@pJSvCHzFGtGtBxKvD`WlJz@BjBz@vLvDbCr@jADfAMlAaA|CcG|BqETaCh@qVXgLnBmTl@cRd@uQf@cJ|@sAhc@sNtGmBzF_BzVoIjO_FpRqG~N_FvDsA~HkAlHw@tDo@pIiBfI_Cf@Um@{@Y_@w@cA{BeCwLoNqIiHkG}G{D_HiBkBsBoASe@_@gEKsLY}Ca@wAuAaG}@oBuDqE}BiE{@qD]sCa@iAeAiAyAeCKkBOiF]uFmBcLgBwGiBwDoBqCmAiAq@mBWsBO}Kk@qIq@wAgEoHwBk@mCc@o@k@G{HbAcb@AsPKmCa@aBoE}H}CuCg@w@SqBdBmNGsA}AyFcAeEYqC{@}Iu@}DOcBH{@`@{Cf@mDCkBKoCW{A[aDf@y@r@e@NmAi@}Nw@qCuB{CgDkDeAaC{CgHoDmG_DeEwBsGgFoK{@o@qKz@uIXs@_AcA{CwKyf@aF{UUaEXaDd@}EVqLU_IVgBv@sCXwD\\{A|AgB|AuEJuEh@cIc@aDm@aE`@kEuBkDk@a@y@Ms@[u@_Hg@qAyCiCeEsImDyNsAeDuGkHQ]aAqJcBqHsC{GeEaIoGqKwAeBePeMsD{DqNeU{KmSeNsZgBqBmFaHcDwL}@{D_AiCc@mBkE_Pi@uH}@mHw@kAs@sC}@yCcG_IgCwCu@q@XOLCbDg@hJq@rEVfLXh@DdEdAnXh@vI\\vBI`FHZ@xFAp@OBo@y@aNaA{FuAeUo@iIA{JNmA`DkMl@sBRw@[i@{@AuAl@kvBTeBi@_Bt@i[EqAeBg@q@aCmAeAsA{GABfB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.ecity_wipro,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9",
      routename: "KIA-9 DOWN",
      route:
        "wvmxMutenAB\\~C?@hCEh@If@GlABh@V|Af@hBZCCQ_@cA]eAMy@Ao@R{AR_C@o@?mAKcEUmEGa@@GCUKGq@M_DOeFi@_Fg@}@[[Wg@w@{@uBYe@[c@}BuB[MwAiA}AiA{@W{Bg@iAKcAC}Id@gA@[C_@Ks@_@uAu@Fs@Pi@lBsBpA{@IW~A_Et@_CgAoBS]yAsCkDqHeBeDcC{DeBqCw@iA{@cAe@c@UMI?oACGOCEEQTyB^oCVkBr@oEHsAJkA`@uDHIHa@d@uC?OIcASiA@}AA}DDuDKs@CmB?[?{ALuCH_Fb@yQFeJQwNMoMFyNDqGG{CEi@Ki@e@{Cc@eC[uCEu@[iBoAiHS{AHWUeBoAoGQ_AcAwCkAsDm@uBi@cBeAsCeCuGg@oBK}@MuAc@qBo@_C_A{CMk@E_AEmDImB?o@IaAKKI?MuA]aD_@}CUqAo@iDc@eBa@qA_AiCm@gBe@gCW_DGs@QcBCc@Ws@oAcDaCuGWmASsAJWAWc@iCu@mEc@gDEgA?m@ZkH@mBDeHEeCGgF?mBE{B?aEHiDBuANsALgIDuGTuH`@uMf@cRHoE?cHOkFqAk\\I_CIuB@SUiBScAUcA_AeD}AkFY_Aq@gBm@_By@qC_DmJYaAy@eD[gBi@sGe@{DwAgH}EgPo@{B_@_Bg@kCwAcIm@iD}@sFYqBOWa@oAOq@_AgCgAgC{AuCsDwHsCyFeGcLmMmVoDaHqCsF{@qByDeJmB_FgAwC{FqOmGaQs@u@OOo@gB_CmGyB_Gk@}AaBkEqBqFwBoGu@cCUcAQkAGaABkCBiEHKHMBSFoCB{FBcICsCIqDg@aJUmDUmBUy@aAqCyD{IyBsFsAaD}CeHgAuBmAuBsCuE}BwD[a@k@y@gCmDiAeBgDwE_AmAaCuD{A}BeBaCwEgG_GqIc@s@g@gAuFeO{F{OeB}EaA}CoAiE_@}@m@kAyAwB{ByC_@k@GAUEWM{A}BsA}B{KuPsLmQoCkEeLeQcDcFVMmE}GqBwC[c@{A{AqAcA[Om@K}CcCwCuBkC{B_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqImAeAg@m@{@uAo@cBa@kBy@}Ee@cAm@k@{@]aAI]@q@L]Ni@^k@n@cA|AyFzIaAlA}@v@sAz@o@XyAb@}B^gDJgRHoi@PkHA{OOe@K[Uc@Ic@HSTo@PkRJaaALaa@Le@Qs@]a@BWNw@X}YHa@Ie@Wi@q@Yy@g@c@YMOEoA?oH@g@c@?@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.majestic,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-9H",
      routename: "KIA-9H DOWN",
      route:
        "knhyMk%7BpoAaAB%3FL%3FH%3Ff%40B%5C%3F%5C%3F%60%40A%60%40%3Ff%40%40lB%3FbAFJVLh%40VzAA~A%3Ff%40%3Fd%40Ab%40%3FxA%3FhAEZMVMPKPO%40A%3F%3FPUXe%40N%5DFUBGNy%40BQ%3FSAYAi%40KYa%40k%40YAmD%40uCBsDPA%5EkC%40sCC%7DBB_ACyAKi%40Wc%40SOKc%40a%40Oa%40Qq%40Su%40GWGMIYQQ_%40QWEc%40Ag%40A%7B%40%40q%40%3FwA%40iCA_AHYCc%40ZQPKXEX%3FvA%3F~%40%3F%3FAtB%3FRB%7CD%40RB%5EHPLTXJ%5EDLF%40%60%40R%40XApF%40hE%3F~%40Cl%40Ir%40%40fCE%5E%40p%40Ev%40%40%60B%3Ft%40%3FbA%3Fp%40%3Fd%40%3FR%3FzAA~A%3Ff%40%3Fd%40Ab%40%3FxA%3FhAEZMVMPKPORWXe%40N%5DFUBGNKROn%40a%40PG%5CI%60E%3F~OWbCC%40JBJFLFFRHR%40NARIJMTMTG%5ECxB%3FhDAd%5DE~LCjZEtZItCAbEEVBLHVXPBVBV%40Pm%40zADdB%3FdK%40TLTDT%40lCAhBA%7CDAT%3FL%3FxICpAApA%3FlFCT%3FhKEpEBvF%40tAAtAAdACh%40Cn%40Gf%40Gl%40Mh%40Oz%40Wl%40W%5EQZS%5CU%5EYl%40i%40p%40o%40z%40w%40b%40%5BZSVKTINEPCPCPA%5EAb%40%40XBTDTFXJZLbEvBbAj%40XN~FfDdDfBvFvCr%40%5Ep%40%60%40%3F%3FjGlD~ChBfEtCfCnBvAbAj%40%5C%3F%3F%60%40TtAt%40vDtB%7CA%7C%40%7CAdAh%40%5Cd%40Z%5CT%5EX%5CXdAbANPPPFH%3F%3FrAfB%60%40l%40j%40z%40l%40~%40T%5CxA~BtJfO%5Cj%40%5Ej%40nAjBT%5CXHPFPNv%40bAvAtBVb%40V%5CdJpNl%40%7C%40%5Ch%40~F~If%40x%40lBtC~AhCXn%40JVJVZb%40DH%40H%3FLLPfCrDl%40%60Ad%40t%40j%40jA%60%40fANb%40HTJZVv%40FN%3F%3FFPBJJ%5CL%60%40Pf%40N%5Er%40xBn%40%60B~%40hClAjDJ%5C%7C%40%60CHPL%5EN%60%40FPz%40~B~%40hC%7C%40~BPb%40Xv%40Th%40Vd%40R%5CRZT%5CHLxAvB%7CAxBpAbBRXp%40x%40rAfBx%40bAV%5CX%60%40V%5CT%5EtAzBd%40v%40%60%40l%40%60%40l%40d%40p%40RXRZdAzAh%40p%40l%40x%40dA%7CAb%40n%40Xb%40b%40l%40V%5Ch%40t%40%3F%3FRX%5Cf%40lApB~%40%7CAtCvEPZZf%40%60%40t%40Vf%40NZP%5ETf%40Rd%40JVNZ%5Cz%40LZVp%40Xp%40%5Cx%40r%40%60BP%60%40hAnC%60%40%7C%40fBdEh%40vA%60%40dATr%40Rp%40RbAHh%40Dh%40Dt%40HxADp%40T~CBb%40%40R%3F%3F%3F%3FDx%40Bf%40Bl%40%40~%40%40z%40%3F%7CAG%60JAx%40%3FtBA%7C%40%3FZ%3FT%40XBXGVA%5CGpF%60%40%3F%3F%5EA%5C%3Fx%40%40V%40%5EDb%40BTFb%40Hb%40Nh%40Pl%40b%40%7CAt%40zB%5C~%40bAjCvAxD%60AdCZp%40Rf%40CV%40PDVHV%3F%3F%3F%3FHZRj%40vAzD%60CrHJXlAdDzA%60EJXvAvDtC%7CH%60AdCnAnCHPTf%40FPp%40hB~%40pCZz%40r%40jBdAbClBlE%5Cx%40P%5EZr%40R%60%40HP%5Cp%40l%40hAtAjCb%40v%40dBdDR%60%40Zp%40b%40v%40R%60%40fAvBR%5ETf%40Zj%40b%40z%40Vd%40Vf%40Vd%40T%60%40R%5ET%5EHL%3F%3Fh%40bANZ~HlO%7C%40lBbAhBx%40zAfAvBVd%40Td%40R%60%40P%60%40Rd%40JVn%40hBVv%40BF%3F%3FHXHVBFDLDTJt%40XbBFf%40RbA%60%40zBPfAjAxGHb%40%5EpB%5CbBFXV~%40Jb%40JZNh%40jAnEd%40lAJ%5E%60%40pA%5EvALb%40FTJb%40Np%40Hf%40Hd%40TnBTtBHn%40Jv%40J%60AJx%40Nt%40Jf%40Nt%40FZ%5ClBJ%60%40FVLd%40Pn%40h%40hBj%40jBHTNb%40Tr%40t%40vB%3F%3Fh%40zApBlGnAlEpAlEz%40pCNh%40Jd%40F%5ED%5CFn%40BVB%60%40%40%5CD%7CCdA%7CUFlAHtBFx%40Bl%40%3Fh%40BvCElCA%5EAVCt%40O%60EEdAAp%40a%40%60NGlB%3Fl%40Cn%40A%60%40Ep%40En%40GbACx%40%3F%3FAPG%60DG~BEbDAt%40CzACjBA%60%40CtBATAZMrGAr%40Ar%40%3FnA%3FdA%3Ft%40BpA%3FdB%3FT%40l%40%40rA%3FT%3Fl%40AZ%40X%40XBr%40%40b%40%3Ff%40CxAM%7CECd%40Q%7CF%3Fb%40%40Z%40%60%40Dd%40B%5CZ~BLz%40TtAPpAD%60%40n%40MJl%40DX%3F%3F%3F%3FDTJj%40Hd%40Jn%40TbAFVFRFPHVJXHRJVXr%40Tj%40h%40vA%5E~%40Tj%40JZTbAWr%40LRFLBH%40J%40NFbADj%40HxABb%40BTBZ%3FN%3FRDLDLFPl%40~%40Xl%40N%5CHRQDKDUJ_%40AS%40UBQBOBsBf%40cB%5C%3F%3F%3F%3F",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hebbal,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-10",
      routename: "KIA-10 DOWN",
      route:
        "ufhxM}w`nArAeG~Bf@tAl@dEjDzEpClD`CdA`@bCf@`An@n@WTaAdCaL`@_Ab@QnB{AlEoEj@qAz@uF|AuFz@_CdBiFNm@FoAKoAiBcGsEkNyAeEiCaHuBiGqBwHqCwKMa@a@cAg@s@yAuAaA_@cCe@gJmAoJgA}D[{GAyEAeDE_AWo@m@kAeBs@gA[}@OkAG{@AmOCwIC_NAiFSaCw@uEqA{Fs@gD_CuKg@qCOsBCiABMG}@GgE?{B`CwQjAgIbBwO\\{C\\iDz@eJJiBVaDNcBBsA[{GMoA_@aBaAcCK[iAoAkAqAiAkAoBy@kMeF[Wa@m@]o@QQKi@CcALuCFeAPuAOEMMMYE_@F}Bd@gETaATCa@vBI|@InBEz@Yl@[\\k@\\]FuA@w@Mw@[eBiAs@{@e@aABM?CQi@yByEaAuBq@S]A_@HmCrAw@f@OVeAj@sKdFcEhBgHrDcAl@O?ODqD`BgAb@]B}JSqTm@}FSiKWyDGmHAiSN{NVqCFYKy@o@AyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kEu@cEiAkHHWGi@UyAk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKiPE{B?aEHiDRiDRsO@yBf@cO~@y^AwJ{A{_@QcGEk@S}Bi@gCwBmHe@cBkAgDgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkFeCmNwAeJ]{@c@}A_AgCgAgCiFeK}B}EaFmJaJ_QmO}YuFwMwCwHwFiOgHwR{@gAOOo@gB_CmGqCsH]}@iEiLwBoGu@cCg@oCGaABkCBiEHKHMBSJkK@oLCyAc@wJKiBk@{GwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuUyD}KcAiDa@mAw@}AmC{DgAuAg@m@UEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@kA}@iGkDiBaAo@SuA}@{MeImB{Bw@_B[eAiAuGc@qAk@q@}@c@cAM}@Dm@PgAv@eDbFmEvG{BtBoAt@sCz@aCZqOF_s@XeWSc@Ue@Se@D[Vc@PcGFulARga@Jq@[YOw@Hu@^sZHs@Ym@m@g@kAiAo@{J@YQQO",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.mysore_road,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-14",
      routename: "KIA-14 DOWN",
      route:
        "}jrxMk|qmADObBIi@gFi@iEg@yEs@sCMmD@[RHWm@M{ASwBs@wHoAmPYeA_@mCiAaEyCkJkA{Dk@oD{AcLAmAUiAm@qC]g@eBaIqAuF{@sIc@wG{A_Jm@}CAmAf@oAbFyGd@iBLcATk@j@iMSAB]HoAX{IHaBCoDOcA@gHU}Oi@wUk@}WIsJ@i@S{@GuDFiBMcCCu@Pu@I_De@sDyAgKCqBSq@q@oEk@qCu@qF{AaRm@gF?aF\\wCXgEjC{@xDcA~@QTn@dGaBfBg@vAcAhEuBtB{CdD}GlAqC~IqIjBqAzBy@|EkA}BcIgAeEuDqMiEePu@sB@Y?Qq@SgAg@aEqDgB}Ck@kBn@Ch@CVCnAm@n@mAjAqBZ{@z@sAzBwBdBs@fCe@rEe@x@@`HfAbDJvBd@hA^x@`Av@l@b@CXWHOP{B|CcErTqQrFqEhAu@jBu@eDmFqBgDgFeHgByC_GgMgEqHqByDsAwDoDkJiAeDi@qB@}@LM@QYYE_A^}Kf@cKC{BWeCo@kCu@wCqAmDUiAHUd@iAhIuDtE}CpA_@vHi@|DD~AFpAMb@O`CcC@?D@B?HEFSQIIBABA@}CeCiCQo@_@Qc@KqAOwBAqAB{GI{ACeF|@y_@?cNOwJIaOJsUWmDeBwLa@_DoAiHS{AHWOuAkA}Fu@}CoB_GyCeJiB_FmA}DQuBk@oC}BgIUyJQ}ACAWuA?{@aA_Ia@wBoAyF]{@NGa@aBWq@SaE_@aCmImTk@aDJWe@aDyAuJEuBZkH@yOMqMHkJRiDLgIDuGTuH`@uMp@iX?qDK}HsAq\\KuCAu@Fc@Lc@@m@eBoHOqAEkCm@ePg@eRe@{PQcJ_@@IGcKwNiHsLmFeK{DeIs@q@cAiDcB_EqJqRqJyQmPk[eDqGuFwMaEsKeGcPeGaPu@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CiFuLiHaMwKgPiJ{MiC{DgLsOuCmEuF_OgGuP_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@gBqC@Q_@}@_FeI}DcGcI{LiE{FsBeBgAU}CcCcHqF_E}ByEkBwLgHuOkIwIeFaMyGuW{NwCsByK_LUPD\\LX~F|GdEdDbOvIh@x@VrAE`A_@dAqB`C}AnAeE|AyF\\sKR{g@T{P@mPQs@a@i@Go@`@w@Pmc@Jem@Bwc@Do@WSK}@Bk@^m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.royal_meenakshi,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-15",
      routename: "KIA-15 DOWN",
      route:
        "k_lyM{penA}@BEuBMyGKkGq@mDe@oEk@qAsAyC}@iBy@uAsAaBsCwC}@i@uFsCWOFOH[Bq@B{E?QUDwBP_Gf@}Gd@sDLcDDaAAWYGE]?}E?IDWV{@AyEDeC\\wXnEqGvA}QbFwJ`CmARwCr@[FUw@e@eBGOa@sBu@aCkDgLqBcGwAcDiDgFwGaJ_@cDsByHa@qDQaCPyBbBwOvBePj@}EN}A@kB[gD_@kAuBeEqLmWuF}Lu@gCeAyE_AyIEoA\\G?i@QKO?CgA?wBNyLdAkRXaDnA{GjAgDrAyC`DiHxAeDjAgD^iDDgCOoB_AwH{CoS_B{Km@oEIcBJkHR{FGiGEoDSkGy@sHuEuUCe@@I@Sf@ThAh@fHbDpPbIxNrIrTrNtBrAFYlAcDrAaDd@q@bDsHlOo\\tBwEdJuRnI_QlEgDbC{BpCuD`FkHhAwCb@mB`@cCXeE`@qOXqJXqKf@sMJgDYsEiA_DmBoEmBoEgBiEQcAWwDUyCkBwH}@iG}BiHcDoLc@iBiAyDeAwBcAoCm@uCSoAM{B?cCIsBw@_Eo@cHc@_Fc@uFi@sM_@gGgBiPWuDAwF_@eXO_USeM@oBn@{A`C_GxA}Ej@yCVcDK_BwAuJkAmHo@cD{@kCcAoESoBQq@y@AkBRc@EOWYsA}@cH]iAQWWqBOqDRe@\\IzIgBdF}@h@Ix@o@`AgApBwA`DaBjCkA|DyAxGgBjCi@rCc@lCq@`I}BpH_BrUsEtD{@f@a@Pg@GcECaETs@hBcDVw@LgJ?sJGcFAm@XaAHWX{@~@aB|EgGnEqFpFuGn@_BZ_BF}CZwA@q@_@_I@u@hC_F~@sBlAoE~DsIbD}HrAiHt@wAxAkA~@mAv@aB~@cC`CqIb@cAPKt@kAxFaJXq@ASNuCdAqGn@eDxAgEx@_CxA`@|C|@dCn@~@DTK\\q@h@[pBa@hBORMDWBIjASdEo@~CYrFm@xA}A`AaAbCmArAq@xA_ARi@?mAbHIpE[~BEpAG`F}@dImAbCYp@]|Bq@x@LR^bApBn@dBd@r@f@SbDg@tDe@rDKrEVfFV~D@X@NBrA^pBd@bBFzLNfRn@pGMbBNdCGvB@v@GJSeAaMcB{Ks@_Mi@iNMaKNmAnA}EpAmFZ}APURw@Oa@a@Os@NOPw@Pmc@Jem@Bwc@Do@Wu@QgAh@m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-15A",
      routename: "KIA-15A DOWN",
      route:
        "k_lyM%7BpenAFdBr%40CvAIxNs%40%60Uw%40xT%7B%40%5EJlF%5BdAi%40zEYnRkA~BPb%40T%7BC%7CLmFvSgBhG%7B%40zCqChIw%40jBi%40p%40aA%5EqGToEPqCv%40cBx%40q%40p%40u%40nA%5D%60CJ%60Bv%40fC%60ChFzApCp%40%7CCl%40vFlCjLpBjHn%40%7CC%60%40~%40s%5E%40_SKq%5CQgL%5ByKe%40m%5BuCoCGaIFgLDsKDuCJoDd%40%7B%40AmAi%40oAqA%7BAkE%7DEaLoAiDCy%40_DaOeFkVu%40yG_%40kEuBc%5BoEu_%40mB%7DPe%40eCAs%40Uw%40e%40eBGOa%40sBu%40aCkDgLqBcGwAcDiDgFwGaJ_%40cDsByHa%40qDQaCPyBbBwOvBePj%40%7DEN%7DA%40kB%5BgD_%40kAuBeEqLmWuF%7DLu%40gCeAyE_AyIEoA%5CG%3Fi%40QKO%3FCgA%3FwBNyLdAkRXaDnA%7BGjAgDrAyC%60DiHxAeDjAgD%5EiDDgCOoB_AwH%7BCoS_B%7BKm%40oEIcBJkHR%7BFGiGEoDSkGy%40sHuEuUCe%40%40I%40Sf%40ThAh%40fHbDpPbIxNrIrTrNtBrAFYlAcDrAaDd%40q%40bDsHlOo%5CtBwEdJuRnI_QlEgDbC%7BBpCuD%60FkHhAwCb%40mB%60%40cCXeE%60%40qOXqJXqKf%40sMJgDYsEiA_DmBoEmBoEgBiEQcAWwDUyCkBwH%7D%40iG%7DBiHcDoLc%40iBiAyDeAwBcAoCm%40uCSoAM%7BB%3FcCIsBw%40_Eo%40cHc%40_Fc%40uFi%40sM_%40gGgBiPWuDAwF_%40eXO_USeM%40oBn%40%7BA%60C_GxA%7DEj%40yCVcDK_BwAuJkAmHo%40cD%7B%40kCcAoESoBQq%40y%40AkBRc%40EOWYsA%7D%40cH%5DiAQWWqBOqDRe%40%5CIzIgBdF%7D%40h%40Ix%40o%40%60AgApBwA%60DaBjCkA%7CDyAxGgBjCi%40rCc%40lCq%40%60I%7DBpH_BrUsEtD%7B%40f%40a%40Pg%40GcECaETs%40hBcDVw%40LgJ%3FsJGcFAm%40XaAHWX%7B%40~%40aB%7CEgGnEqFpFuGn%40_BZ_BF%7DCZwA%40q%40_%40_I%40u%40hC_F~%40sBlAoE~DsIbD%7DHrAiHt%40wAxAkA~%40mAv%40aB~%40cC%60CqIb%40cAPKt%40kAxFaJXq%40ASNuCdAqGn%40eDxAgEx%40_CxA%60%40%7CC%7C%40dCn%40~%40DTK%5Cq%40h%40%5BpBa%40hBORMDWBIjASdEo%40~CYrFm%40xA%7DA%60AaAbCmArAq%40xA_ARi%40%3FmAbHIpE%5B~BEpAG%60F%7D%40dImAbCYp%40%5D%7CBq%40x%40LR%5EbApBn%40dBd%40r%40f%40SbDg%40tDe%40rDKrEVfFV~D%40X%40NBrA%5EpBd%40bBFzLNfRn%40pGMbBNdCGvB%40v%40GJSeAaMcB%7BKs%40_Mi%40iNMaKNmAnA%7DEpAmFZ%7DAPURw%40Oa%40a%40Os%40NOPw%40Pmc%40Jem%40Bwc%40Do%40Wu%40QgAh%40m%40NsZBKYw%40%7B%40%5Bu%40aAo%40yAw%40eAyAyG%40%40hB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
    },
    {
      name: "KIA-17",
      routename: "KIA-17 DOWN",
      route:
        "q%7CcxMe%7BwmAvAJ%40uA%3Fw%40%3FcA%40%7B%40%40kA%40kA%40sAB%7BAD%7DABmA%40_BL_DJ_DJuCDsCJkCP%7BCFyCDiCHiDD_CFuBDcBhCM%7CCQnCOnBKtBInBIzBO%7CBO%60BQ%60Be%40%5DuAQwBC%7DB%5CcB%5CqBImBSyBWcCM%7BBK_AN_ArCDvCAlC%3F%60C%40vB%40Hc%40Sy%40O%7BAAcAAy%40%7BCHoBH%7DBBiBDyB%40JeCi%40gDw%40sCsAoEmB_EiCaEqByCoBqCmBeCk%40cCKwBsEi%40oDw%40uBgB_BeB%7BBsAyBqA_CiBgCuCoCgEwCaFqC%7BDeDmEqDaEuAcAvGcBvHcCbFaEfFuHpEqGnEkGxDsGfAqJh%40qK~AcEbKmDbHuCrJ%7DC%60FuCf%40_NWoP_%40gOW_PaCoNgD%7DLyCyJqFiJkFsIiFqJgByJq%40cIiFuVk%40qAg%40yBs%40wCiAoDcNa_%40oKoYsAcEa%40wBKiBAmD%40%7BFQ_Hq%40mDuA%7DC%7BEiFkB_C%7DCgFqBmEgAqDuBoJmAmGu%40aGk%40cGmAgGuA%7BDsFaLmNyYiAcCO%5BOHoBn%40aA%60%40iItD_%40J%5Bw%40sBuRiCeS%7DA%7BMWy%40%7BLkKcBgA%7DDmAuI_CyNiDuK_CmIkBcDm%40%7B%40MSSo%40EmHf%40e%40ESa%40%60%40eCr%40gBBADEBMIM%5B%40q%40%60Cm%40lB%7B%40jA%5BZq%40JkLJkFKqAQaE%7BB_%40C%7BL%7DH_DoAmAU%7DKq%40sLo%40mNa%40%3FMcEGsACsCI%7DDI%7DDSwH%5B%7BBT_%40LFNsA%5C%5BPg%40XkJ%7CGqCvB%7BGtD_FpCyBp%40kOhBqADeC_%40qDy%40c%40QKQ%40%3FHZS%40i%40NgAVNv%40%40Nq%40FEWr%40E~ADv%40Qq%40eBq%40sBMsCQeCg%40qBcFoMiBiFU%7BA%3F_%40DYu%40kEmA_JB_DTcG%3F_QKkQ%5CsIRsOXeLx%40aYVsOa%40yQiAyYE_BYiDaDuLyJkZsAgFeA%7BJiAmHuBuIkEcOmEyUwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_EeKqCsHgFgNmDsKg%40oCCmELuEHMN_L%40oLg%40qMw%40eKwAkEqImSoCmGkCqF%7BJePkImLgJeNqGqI_JqMgPic%40sD%7DKkAsDeEyGoBcCUEsBkCyDkGyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCmAuAwC%7DBm%40KgAaAyG%7BEgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40%7DAMqAVgAv%40uB~C%7DFzI%7BBtB%7DCxAgEr%40ig%40Vg%5BHeWSiAi%40%7D%40V%7D%40Zmc%40JiqAZaA%5BMKq%40GkAh%40sZHiAi%40_AiBi%40a%40_%40MkFBwCCc%40_%40",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.beml_5,
      stops: [],
      contact: "",
    },
  ],
};

const COLOR_HIGHLIGHT = "#4264fb";
const COLOR_MUTED = "#aaaaaa";

export const MAP_STYPE_STOP = {
  type: "circle",
  paint: {
    "circle-color": "#ffffff",
    "circle-radius": 8,
    "circle-stroke-width": 3,
    "circle-stroke-color": COLOR_HIGHLIGHT,
  },
};

export const MAP_STYPE_ROUTE = {
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": COLOR_MUTED,
    "line-width": {
      type: "exponential",
      base: 1,
      stops: [
        [10, 3],
        [14, 8],
        [18, 3],
      ],
    },
  },
};

export const MAP_STYLE_HIGHLIGHTED_ROUTE = {
  ...MAP_STYPE_ROUTE,
  paint: {
    ...MAP_STYPE_ROUTE.paint,
    "line-color": COLOR_HIGHLIGHT,
  },
};

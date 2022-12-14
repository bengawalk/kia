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
  },
  silk_institute: {
    name: "Silk Institute Metro Station",
    loc: [12.862231132000229, 77.53020557184188],
  },
  airport: {
    name: "Airport Bus Stand",
    loc: [13.199110535079635, 77.70822021568426],
    phone: "7760991269",
  },
  hal: {
    name: "HAL Main Gate",
    loc: [12.958498117866407, 77.66518619680876],
  },
  whitefield: {
    name: "Whitefield TTMC",
    loc: [12.976874051754933, 77.72680679219907],
  },
  banashankari: {
    name: "Banashankari TTMC",
    loc: [12.917668361661741, 77.5729031044554],
  },
  kadugodi: {
    name: "Kadugodi Bus Stop",
    loc: [12.995682104394492, 77.75933511787484],
  },
  hsr: {
    name: "HSR BDA Shopping Complex",
    loc: [12.912696250372736, 77.63815235881127],
  },
  ecity: {
    name: "Electronic City Bus Stop",
    loc: [12.846820291920075, 77.67194606999932],
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
  },
  royal_meenakshi: {
    name: "Royal Meenakshi Mall",
    loc: [12.876412761573464, 77.59560880964153],
  },
  kengeri: {
    name: "Kengeri Bus Terminal",
    loc: [12.913656066139644, 77.48714794975331],
  },
};

export const BUS_DATA = {
  to: [
    {
      name: "KIA-4",
      route:
        "ka`yMg`bnAiA~A}@JGwCHiCVsA|AmCxBgCzDuGxHmMfCwDjAuBL@zDMpi@qDtLiAfNeBfGk@JSb@{CnBiQ\\_HHeDZyMNgFpDDrBB`UTtRVpYVfGFvCIdFUjF[zDGjAjAf@TrAp@`Al@VVvAfCbD|Er@r@dDlBhFjChCvAxCrAlElA|BTbCLBiBAaBF_@@_AIeC_@{CEy@?]B{FD{BMy@Uo@g@_AUOmBe@o@e@y@uBaBcFaAeAsAoAFML_@rAuJHqCM_P?[LUf@YdABtIz@r@j@d@~@r@_@^_@NSn@]xCyAfBqAfBmAx@m@`BcAv@_@pDgBbJkEvB}@bA[zB_@zBm@hAe@~A}@lDcCpCgB`AYtEKh@ExA_@fEgAfDeAzJoClCg@v@I@Sf@gAx@wAzAgEf@wArCaHt@yBh@cCv@aERk@RSrAcApCsAzHyCtQ{Lh@Gl@sBtC{F|JsQnCwE`BiCzA}BlCiDn@i@zCgAvAYvE]bEG~AF`@?ASGwF@k@Aa@OQH_N@sFGsBmA_Hg@aEAg@e@}CsAaIIm@HSEa@WeBk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKkN?{BEcCL{JNsAJuGBoBB_Fb@cN~@i]FkFCyFwAs^SsGEaBu@wEaEkN_BgEcCsHsCoJo@gDOsAu@oIY_BcBuHuBgHuBkHw@cD}BmMaBcK_@eBSo@Yy@o@{B}@uBmE{IyBuEyEgJuHuNiPe[oGqNcEmKaFyMiI_U_@u@u@w@oDqJcCwGi@{AcCuGgCaH{AyEs@_DKeAA}AFqGNQNkDFeTCyAQiEu@kMg@{CW}@}GePkA{CwB_FeBaEy@yAqC}EgFuIwDiFyGqJ_HgK}HeKwFiIc@u@{AuDsFkO}CoImAgDmByFcAgDe@{Am@sAqCeEwBuCu@UcGoJ_Ww_@uKuP_IwLVMKOsHeL[c@mD_DiA[}CcCcHqF_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqIuBsB{@uAo@cB{AiIe@cAm@k@{@]aAIoANgAn@oBlCyFzI_CdCsAz@iC|@}B^gDJw|@ZgYQe@K[Uc@Ic@HSTo@PkRJccBZy@_@_@Oa@BWNw@X}YHgAa@i@q@Yy@aAq@oKCg@a@",
      start: STOPS_DATA.hal,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        180, 240, 300, 330, 360, 390, 420, 450, 480, 540, 600, 630, 690, 795,
        1020, 1065, 1140, 1170, 1200, 1270, 1330, 1390,
      ],
    },
    {
      name: "KIA-4A",
      route:
        "k_lyM{penAFdBr@CvAIxNs@`Uw@xT{@^JlF[dAi@zEYnRkA~BPb@T{C|LmFvSgBhG{@zCqChIw@jBi@p@aA^qGToEPqCv@cBx@q@p@u@nA]`CJ`Bv@fC`ChFzApCp@|Cl@vFlCjLpBjHn@|CaHj@D^`IGdEWpAKtOm@tc@{AbSq@zFQjEOvADzMrAxGn@~a@hEzLhA~]zAjKR~@IvBq@pG_C`RkHdKaDhDa@~Ic@bJKdBMZK?VzCEbDWRAEs@?cAAwCZoBj@qApE_GpMuT~BuDhAoBL@RAlAGdF[dL_ArRsAvOiAtMgBhJ_A\\gBd@{D`A}H`@uEZwHn@oWf^^bi@j@dJJjHWvMk@fA?NGIO{AgCgBsCaD_EsAmAcAw@l@@tCP~B?xFm@pEg@fD[nCFfHb@bCLxBn@h@gArAuJHqCM_PLq@f@YdABtIz@r@j@d@~@r@_@^_@~@q@`GkD~CyBxBsAhD_BpKgFfCgAxE}@pDwArGgE|BwAhASzEI~Cw@zIkC|IaC`Eo@Nw@rA{BpC_IlCqG~AsGn@{Cf@_ArAcAzBgA|EkBhE{BfL}HvA{@h@Gl@sBvBmEtIuOvHmMhFgHtA_A~C_AdGi@bH?`@?ASGwF?mAOQFyIDoFEgE_@uC}@{Fa@kE_CoN@aAUyAqAwG_D_KcEoLgB_Fg@kDc@eCgA_Ew@gCOcCMqHM{@QEgB}NcAaFy@iCu@qBw@iCc@{CMiBG}@SuBoCsHiBiFU{A?_@DYu@kEmA_JB_DTcG?yOKuNL{J^yMZaPH[VkGt@mZDuG_@_Om@_Oc@qMe@oDcAgEgBgGsCiIeF}OaBmHeAcLy@iEoByHiC{IqAsE{@mE_FcY}AeFcB_EwF_LqKwSaLaTkKoSmKoWuOkb@_@u@u@w@oDqJcCwGi@{AcCuGcF{Ns@_DMcDFqGNQFg@NcUCsCq@sOk@{GUy@{FmNcEcK{CcHkC_F{IoNaI_LyIsMqGqI_JqMyIqUgIcU{BqHm@sAqCeEwBuCu@UcRqY_LuPiCmEaAeC}NwT{IyMaC}B}@c@k@IgAaAeEyCsAaAcCqBkAq@aFuBuLaHiB_AeAg@Ua@e@WmFaDsFcDmBaBqBgDq@oCs@kEu@iBs@k@aAY_AE_ANgAn@qA`BsHhLkAnAyAdAsBx@}Bd@eDRuL@ui@T_a@Le@?_@p@e@~AeCdKeA`Am@Vg@ToC?uKDq[Hi]Lon@NqJHeBG{@QgAq@c@i@{DcIYuAGmBCi@[cBgAcBsAgBeFDiA?AdA",
      start: STOPS_DATA.whitefield,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [505, 735, 760, 815, 855, 870, 940, 970, 1040, 1090, 1110],
    },
    {
      name: "KIA-5",
      route:
        "i~mxMo}ymAaBC?UAWOJ?XKjBEfD?jCFpA\\zE|AnJHxCGzFQnIs@lIFp@O?kD?kIDcN@cZNcAKwODFe@DoAGiI@uJBqEOcFCwF?{IBkA^?`FU`AIzAK?_CDe@Bc@AoHIeMKcI?_C?MO@qEHuEBMwQa@{@e@yDPgBZeAd@c@hG?hDAOsDIeOE}F_@uJ?gBHwDcEAAACCEAQw\\CyIF_AHI?YUM_@qCa@gAcAwAu@k@oC}@s@[cDo@yCKwEMsAeAcDwCoFmBsDuBsAs@[t@{AzDWx@yA~BoCdCc@\\s@qAyJgOzC_DpB{AnEmDpCoC}AsAwAyAjAcAnCcCxDuC|CkCvB_BRIK]IWIc@cC}ImCqIuDwMWm@m@i@{DyCcAaAcBsCm@gBg@{Ag@i@yC{BwAuAiAy@sCcCkFmDeAi@uBkA{C_CoI}EcC}@XcAhAcENWjD{A|F]bCSTk@y@yLC}@~CuCrAAfFEZiAzIwU~@aBVK~D_AdJsBxB_@nD_Ap@[Pa@D]dCs@zOqFbBi@h@i@e@gA{@}CScAFm@FGxAsAxKuIx@}@Vy@d@cFL_Cr@gITw@^u@FgAYy@TcCv@{F|@cHTmBpAeJ]mC?oCDsHOoDf@eWVsOEaKOkPC}JJqNMoGuAkIa@kEu@cEiAkHHWMkA[cBg@aCe@cCqBeGyCiJaCqGmA}DQuBk@oC}BgIUyJCu@Mg@CAWuA}@_IiBaJoCcIu@kFKkAGeAMaA[wAsCwHuAoESsAHO?_@iByKYmDJoDPiFDsIMyOAiIHuDZiJFuHHuCf@{Ov@u[?qDK}HsAq\\UmGUqCcAgEgBgGsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsE{@mEkD_SS}A_@eBY{@cAiDcB_EwF_LqKwSaLaTeF}JoEaJsJeVqOcb@iAoAuGiQqAqDaGaPwBgHc@wCDoJTc@PyRIyJ_@eHa@uGg@{CmCeHaFqLoFiMmFiJyFeJ_EyFcIeLuEeHgLsOuCmEuF_OgGwPyD{KgAuDg@qAgAqBcDmEw@kAQCc@QgBmCmMcSyPkW{KyPmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFkA_@uM}HoCyBqBgDq@oCeA}Fc@w@s@k@aAYcB?oAf@eBrBqFtImCbDyAdAsBx@}Bd@eDRmd@PaUD_\\Kw@Ia@Wo@Ke@RILw@PwuBf@kAe@u@I]Nm@Xk@ByY?w@c@o@sAc@g@u@]{J@i@a@A?",
      start: STOPS_DATA.banashankari,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        240, 300, 330, 360, 390, 420, 480, 510, 540, 570, 600, 630, 665, 690,
        720, 750, 780, 825, 855, 885, 915, 930, 945, 960, 975, 1005, 1035, 1065,
        1095, 1125, 1155, 1185, 1215, 1245, 1275, 1380,
      ],
    },
    {
      name: "KIA-5D",
      route:
        "ihexMwsnmASJOW_@y@eBaEcBuCw@yBwA{A_JmFiCiC_D_EkI{LcDaF}TwYiBoBgBsA}Aq@{EcB}DyAmBkByAiDJo@}AqEo@m@Uu@wDiMkCuI{@oAwAy@iO}BoTmEyRiEiOgDaFkBiHkEwFwEyEyE{QmOmLkLkLcOqByCgAkBu@_CgAuEi@cEDuC`@}FCoAQuFHwAn@cJ^iPBcEe@{FqAaIW}GF{DBoAhA@zACBiAEkBMIs@Ia@h@sAp@UpJNtDp@pHlA|H@nBYtPs@lIFp@O?aB?cGBiN@g_@HcQ@JaBGqH@sKMiRAwC@sHNk@fCIjGc@FyNUiWEgSv@yE?}Bc@oCSo@OsDIeOE}F_@}MHwDcEAAAAAECGyCKkd@Nc@_@eBmAoEaA{@gF_BmFy@oFImAQ}@y@cDwCkIaDcCqB]Be@t@e@lAaC}@kN}FoDgDvRwPbJmH\\If@p@XpAn@dBx@b@vAc@}@iEmB_IaCcIgC_KoDeM}Ao@sE{DoC_GNSj@El@KnAm@vC{FvCqD|@m@~Bq@|Hy@|Cb@dFh@jBHvDbApBnBL@f@QP[P{BdA}AbE}DlDsCfIaHlGiFtEkCVKa@m@wBiDeJcNgByCuGmNsFqJyEwLwBsFy@uC]yADs@JMxLqJ|BeCf@cEhAcOr@mBBkBQs@bCmQx@cIt@_EIyAQaDA}DDuDO}Dz@k`@I}YMoMLkWOoEoBgM[{Cq@mDm@}D?aAOyAkA}FeD}KyCeJyDcLaAoGuAyEe@_CQaJSuA_@uBgA{I{AmH{CeJu@{GKsAw@kDcDqIi@iBBu@YeADY{AgJg@cEB_DZgPKkNE_GL{J^yMB_Fb@cN~@i]BeNwAs^SsGEaBu@wEaEkNcF{NsCoJ_A{FoAoLcBuHuBgHmDoM_FqYmAoEmBqFmE{IsI}PuHuNiPe[oGqNcEmKaFyMiI_U_@u@u@w@oDqJcCwGi@{AgJqWs@_DMcDVcHNkDB_WgAuS_AyE}GePcE{J_D{GqC}E_L_QyGqJ_HgK}HeKwFiI_CkFqK{Y{DaLwCwIiG{Iu@UcGoJ_Ww_@iCmE_@eA}KiQuLsQ_CkCgBiAk@IgAaAeEyCsDyC_E}ByEkBwLgHeBy@e@i@aJoFgDqBuBsBkByDa@kBsAqGsAkAaCUcATgAv@qHfLeDvDsAz@iC|@}B^gDJyp@VqMB{XHmCtIk@nCi@hAy@p@iAd@wLB}c@Lku@Rc_@NeCm@kB_CaDeHOkAMyCk@yBo@_@o@AiIPOeA",
      start: STOPS_DATA.silk_institute,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [245, 430, 1155, 615, 1005, 1200, 1270, 1330],
    },
    {
      name: "KIA-6",
      route:
        "qeryMcfinAd@KLf@HX~@tCz@|CPjBXjAjDxEjEdGzBhEbD~KlF~PpAnEd@dClB|PnEt_@tBb[^jEt@xGdFjV~C`OBx@nAhD|E`LzAjEnApAlAh@z@@nDe@tCKrKEfLE`IGnCFl[tCxKd@fLZp\\P~RJvOB|BDrAMxOc@dOe@vQq@ba@oAtK_@jEOvADzMrAtTxBtU~BlJbA|H\\f`@|A`CO|FoBnZkLhFyAvDi@|F[nOWbAW?V`AA~DOpAMnDe@|Cg@tJuAjGi@x@AnGp@`L[vJWjOU`Vw@pWyApP_AbDOdAU`CE~SoAlOcBbDS~@DdGtAv@HbDu@pEiA~FeAlCc@rAg@`HiDv@{ArEeLT[fG_CxDgAzCWrANjDjATFFMj@i@^u@j@{Cf@yGd@oHPgDDqC@WYCm@GUCKAO@FeFQoFYaCBa@IaAL_GAwAcAqCi@[mBg@i@i@aBaFy@wBmCiCX}@rA_KBkEK_NTe@j@SlF`@jDd@TPx@rAfAq@Za@hEwBbEsCdBsAlIeElMaGxE}@lBm@`DgBrHaFhASzEItJgCnGqBrEkA`Eo@Nw@rA{BpC_IlCqG~AsGv@qDf@o@hBoAfCmArDsArBy@tAaAnKkHfAq@`Aa@NAf@eBL_@tDkHzEwIfIqNzEyGpBkBnDiAnD]|DS`DB`A@EuAAyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kE_CoNHWMkA[cBmAeG}DaMoE_MmA}DQuBk@oCyAcFc@cBKmFMaEMg@CAWuA}@_Ii@wC_AiEmAsDaAoCu@kFSqCMaA[wAsCwHuAoESsAHO?_@_AqFi@gDYmD\\yKEsSCcPHuDZiJFuH\\uL~@e\\J}KK}Hg@{Lw@kSIwBUqCkDoMsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsEgFmYs@cEY{@cAiDcB_EqJqRqJyQmPk[oEaJ_GsNmEmLoJmWgAyCiAoAqIiUwGsQwBgHc@wCDoJTc@PyRA{Eg@cMa@uGg@{CmCeHuHwQ{CcHkC_F{IoNaI_LgJcNoHyJ}HiLmMm]mEcMkCiIgAqBcDmEw@kAQCc@QgBmCmMcS}GcKmLsQiGmJmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFaD}A_K_GoCyBqBgDmAaGi@kCc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@iw@Ve_@KiASUQi@Go@`@w@PmFBulARga@Js@]g@Oc@FOLaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.kadugodi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        300, 360, 405, 470, 540, 720, 960, 1005, 1050, 1080, 1170, 1230, 1290,
        1380,
      ],
    },
    {
      name: "KIA-6A",
      route: `qeryMcfinALE%5EbAPA%5CjA%5EbAZ%7C%40d%40~BPrBp%40hAfFdH~DbGx%40vBlAdEzDbMzDtMFNL%3FzA%5DjJsBbM%7BCjKsC~Bq%40fJ%7DAtGaA%7CKcB~O%3FdE%40bEKbIy%40bKw%40~P%7DA%7COwBz%40UdCuAtAg%40dI_B~Bg%40zBg%40~CsAbHkDbCKpE%40bIIv%40Rb%40Z%60C%7CBxEvDpA%60AvFrC%7C%40n%40h%40r%40lClAv%40PlAV~%40d%40fAh%40nAv%40l%40z%40nArChApDNrA%40N%60%40%3FZsAvCiNrBiJlAsFnB%7BIBYZ%3Fx%40CbAIjB%5DxJeBzIaBxEq%40lHeBfEo%40xDQpDc%40jDcAdF_BzA%5DlJ%7DB%7CH_DrBy%40xAgAbBqBjAiA%7C%40o%40~BgAjASzBMfJYpPIVD%60%40L%7C%40CbCEzB%3FvCHzFGxA%5ElAf%40lBl%40lCx%40jG%7CB%60WlJz%40BjBz%40xMdEnBf%40rA%40dAUbAgA~CgGzAwCXo%40Ls%40D%7DBf%40yUXoKtAwN%5EkFR%7BHh%40qRVwHL%7BCXoBVg%40f%40%5DvNyElVcIxJeCvi%40sQ%7Ce%40aPrC%7B%40bAMpKiAvEm%40hHoAvNoEdA%7B%40fBgF%7CKoYtE_LpBcEr%40u%40zBcBzD_CtEcHrBwCdAkApAq%40pBUzB%3FnW%5CxDJvAIzCg%40zEiAbBc%40hB%7B%40xAc%40tLgBrDk%40FA%40RfHkAnEi%40bGg%40xODfUEdCHnARjAj%40vBtAvBzAnBdAd%40LfBRvKCzAKj%40GTSlE_AlCe%40jDg%40n%40FvBScByEQwD_%40aDyAmD_FsMi%40iBU%7BA%3F_%40DKGk%40kAeHa%40oCOcD%5C%7DK%3FwKGaGEiFHkJRiDLgIDuG%60%40gM%7C%40g%5CHsNu%40%7BSu%40%7BRIuBS%7DBScAuAiF%7DAkFmJiYuAmGoAoMwAgH%7DAcF_CcIoA%7BE_CoMkB%7DKYqBOWa%40oAoAyDcD%7DGgIqPkJiQwOiZmEeJgHeQsD%7BJ%7BJeXa%40iAs%40u%40_AwByFmOk%40%7DAkImUkAgEYmCBkCBiEHKHMBSNoUCsCIqDg%40aJk%40%7BGUy%40aAqCyD%7BIyBsFsAaD%7DCeHuCkFyIiNyJkN%7DGaK%7DHiK_GqIkA%7BBwLi%5CmE_McC%7BHgCcE%7BByCg%40m%40UEWM%7BA%7DBsA%7DB%7BKuPsLmQmIsMgF%7DHcDcFVMmE%7DGqBwCmAuAwAsA_Ai%40m%40KgAaAyG%7BEgCsBwC_ByEmBs%40a%40_%40i%40uIiFiBaAeCqA%7BMeImB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40cAMkBVgAv%40sJzN%7BBtBoAt%40sCz%40aCZ_u%40%5CqMBeWSiAi%40e%40D%5BVc%40PcGF%7DnB%5EkAk%40w%40Hu%40%5EsZHs%40Ym%40m%40g%40kAiAo%40%7BJ%40YQQO`,
      start: STOPS_DATA.kadugodi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [210, 330, 660, 740, 990, 1110],
    },
    {
      name: "KIA-7",
      route:
        "%7DuzxMa%60ymA%5CA%40%7CAH%3FAaAE%40ImCG%7BDFM%40sCEwCGaD_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzAnMpApIl%40lB%40vAM%60%40MxHaCtRqGfQqFf%5CcJdCq%40d%40Bx%40FFO~B_ErA%7BCnAwA%60DcC~QkMzD%7DBfDgBpAa%40hEiAlAKdNgAxTcBbCo%40%60By%40ZG%7C%40mApB_DpAmDVwCt%40wN%7C%40oHZy%40%60%40_%40nBoA~Ay%40%7BBcEcEcGsBaDjAqAjDsCnAoAvB_B~%40w%40rAoAZ%5BYS%7BCyCfB%7DA%60DoCrFkEbCsB%7C%40e%40Mc%40a%40%7DAaEqNuCwJiBkGS_%40iBqAcDoCeBkCk%40qA_%40gAk%40%7BA_EaDMQwAaAmAiA%7BGkFeE%7BBmAo%40qHmFkDgBcC%7D%40dAqDb%40aBTSlD%7BAlGW%60BOJGNm%40_AoNjDuCvGIV%40%3FQ~BkGvEqMtAiCtCy%40pEeAfCk%40mFsGiGwETo%40jI_KlJuMvAaBt%40w%40h%40p%40tAfBl%40h%40zGzIjGdGrCxCNRZ%5Be%40gAq%40aC%5DyADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40OYAYbCmQx%40cIt%40_EKaBQ%7B%40%40%7B%40AqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUGsBO%7D%40%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwGiBqFu%40mCcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGe%40%7BDc%40qBs%40uDaA_DsBcHwA_FgAkFeCmNwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEcHmPm%40_BoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsB%7B%40uAo%40cBiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40PKLo%40PkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.hsr,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        365, 450, 510, 620, 710, 770, 950, 1035, 1100, 1210, 1295, 1360,
      ],
    },
    {
      name: "KIA-7A",
      route:
        "%7DuzxMa%60ymA%5CAJ%7CAG_AImC%40%7DIMyH_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzANBBSP_CdAuUZ%7BFl%40oC%60%40%7B%40vCuCpIoItSiTcCeBgBy%40iBs%40aDo%40oFEiG%3F_D%40%7BE%3FqAK%7BA%5D_CaAiBqAeAoAoDmG_LcTiDyGcCaFUsAR_BVi%40z%40%7B%40nD_Dn%40yAHiAYuAkAyC%7BDuHiC%7DF%5DsMFiF%40m%40%40a%40%5ECnG%5BlH_%40MmAw%40wJGc%40fBKtBOfGk%40dGw%40bDS~%40DdGtAv%40HbDu%40pEiA~FeAlCc%40rAg%40%60HiDv%40%7BArEeLT%5BfG_CxDgAzCWrANjDjATFFMj%40i%40%5Eu%40j%40%7BCf%40yGd%40oHPgDDqCtBApG%7B%40tRkCdc%40sGjBYRCAUs%40aDU%7D%40eAkDxK_CvXmGTEGWg%40_BeBmHQu%40i%40yBDe%40Z_B%3FOy%40sESUPAlAWTp%40f%40hAZdBEF_AZUT%5C~ArFcAlHyAcAcDhBo%40h%40YdEf%40lBRdC%40p%40%40v%40j%40HdCIpAR%60CPN%7CAx%40xAn%40jLgCdFmAv%40YTWJo%40tS_HxA%5Db%40_%40Z%5B%5Ds%40k%40qBQm%40YoADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40Qs%40bCmQx%40cIt%40_EKaBOwBAqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUWqD%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwG_D_KcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHyJkZsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FmEyUwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEqImSoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsBkByDiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40P%7B%40%5EkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.hsr,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        60, 270, 330, 380, 420, 480, 530, 560, 590, 640, 680, 740, 805, 855,
        915, 965, 1005, 1060, 1080, 1110, 1140, 1170, 1200, 1220, 1260, 1320,
        1350, 1380,
      ],
    },
    {
      name: "KIA-8",
      route:
        "efayMoblmAOKd@s@hA_B~BeCdU_[zYma@bc@ql@lZoa@tEuGjFoG|LsNjDeFdEcI`Ra^fUec@|N}Xr[em@`GcLhC{EPm@fSa`@dQw\\h@g@lC{F~BcF{Ce@uIi@wBDaKhBwEv@gCHkHV_HTgPn@wCHqKt@oA?uBUkDaAkAo@kDkCoEwEgNaRsA{AaHgGmA_AaCkAkCi@yF_@wDKgCF}N|AyGp@mGbAcYbHiS`DeAb@iEd@gAAg@c@qAg@k@Yq@EaLkEqX{JoKuDgHsCsJsDiVwIuQmHeEiCoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNnMcWvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItEDzGEvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@EvAs@f@u@dDuGlBcE`Aq`@FqDh@wFpAaQp@uTh@yQLsB\\oA\\_@|Ak@rRmGzQcGbDw@zJ{Ch]eLt_@gMnOaFvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{AdEeCzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZbEg@fB[fG{ApCoAzScDHPfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDtCrAfBRxFAxFM`A[lE_AtGgAr@E~ADv@Qq@eBq@sBMsCQeCg@qBsA{CyF}OU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}H\\sITmSf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGiAmHs@uDaA_DsBcHwA_FgAkF}EsYaAyCgCoGiFeK_JkQoZ}k@mKoWwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmELuEHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@iLqQcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.ecity,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        5, 40, 80, 120, 140, 160, 200, 240, 295, 325, 370, 410, 445, 490, 520,
        565, 610, 620, 650, 680, 730, 770, 820, 860, 1080, 1095, 1130, 1180,
        1210, 1260, 1280, 1320, 1340, 1360, 1410,
      ],
    },
    // {
    //   name: 'KIA-8A',
    //   start: STOPS_DATA.btm,
    //   end: STOPS_DATA.airport,
    //   stops: [],
    //   contact: "",
    //   timings: [
    //     500,580,630,660,720,760,830,880,1000,1020,1080,1090,1120,1140,1160,
    //   ],
    // },
    {
      name: "KIA-8C",
      route:
        "_tgyM}lcmATKlC_@zEeApAe@nC}AxAoAbA_Bxk@_w@pRkWpG_Jr\\m^rFiIrE_LdBkHfAkFdCuLhBiHlFwR~@cCvBmDrUe\\|L_Q~A_CzBkCbBuBbQ{UdMkQfLwOh]ae@bPsTxOeTpKyNfNcPtDaF|DeHzJkRh]gp@pl@{hAvKqSPm@lKaSfVme@`CqDlC{F~BcF{Ce@uIi@wBDyQ`D{d@`ByLj@yFXwAKyDaAkAi@iDgCcE_EaCeD}IsLwCgDcI_HgCsAoFcA}HWwAAiGd@uN~AuFp@iQjEkJvBgKzAcC`@_Dl@YTyDj@iA@c@A]YSUcBk@q@MaX{JmWaJuKkEgWiJoPqGiL}EaHiF}P{NkE{DcOuMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGeB}NyBaOs@sDk@eESqLgC}Ye@cHM_GXcC`AqDjHqNzJuRjHgNfG}K`D_H`HsM|EsJhV{d@zPsWjLkQrHkNxBsDp@a@nDOvJHfEKt@JzCfAfGnBtYxKfDbAz@LdBv@~InChFtApAAjAc@xBgDdEsIRcA^oQb@uQfBiSr@wQf@sSX_I`@mB\\g@vGwBhZwJlHyBzF_BzVoIjO_FpRqG~N_FvDsAxBi@dEa@lHw@hDe@~JoBzGuBxCgAt@{@dBmF~G{PlDmJfFoLbAcBn@k@bDwBdC_BtAoB|F{I`A}@|Ao@lBMzC@zYf@jDQrK{BhDwAfBa@jOyBbAS@RdCc@pHeAbD_@zGUdLFnVExBNfAZ|@d@pCjBpChBnAd@rBRrLCbBQbD_ApFaApC_@dAFhAOLCg@gAy@kCEi@SaE_@aCkEwKaCuGk@aDJWe@aDyAuJEuBZkH@yOMwOL{J^yMZaPj@uRf@aVWuNoAg[MeFu@wEqB_HoAkEcF{NsCoJ_A{FoAoLcBuHkFsQw@cD}BmMaBcKs@uCYy@mBqFgIqPyZkl@_EwHoGqNcGwOkOea@u@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CwG{NyJsPoTg[wRkX_CkFsFkOkEqLiDaKmAaEm@sAqCeEwBuCu@UcRqYub@cp@VMKOsHeLeDiDmBu@mG{EsDyCoBkA}I_EkBgBwIaFaD}A_K_GoCyBqBgDwBmKc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@uL@si@Te_@KiASUQi@G_@NOPw@PmFBulARga@J{Am@s@TaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.chandapura,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [310, 355, 460, 505, 990, 1055, 1140, 1190],
    },
    {
      name: "KIA-8D",
      route:
        "stcyMk|xmAjArC\\fAFPKB_B`@HRK[~Aa@hE{AlN_GrGkCvGgBlEu@dBg@jH{DbAaA~@uAf@wBB?DC@C`Ae@`GgCnDyAjCq@vHgBpH}C~D}AdCm@b@ICu@]YSUcBk@q@MmHoCyZ_LkMoEgHsCsJsDiVwIuQmHuBiAoA_AoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNxDyHtGiMvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItED|@B|EIvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@En@Qf@a@f@u@dDuGrAgCX{@RyIRsJXcJFqDh@wFbAkLLuCRgH\\mKh@yQLsB\\oA\\_@|Ak@xDkAxLaEzQcGbDw@zJ{Ch]eLt_@gMtFkBxGuBvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{ApA}@rBgAzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZvAIjB]fB[fG{ApCoAzScDFA@RfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDnBdAd@LfBRxFAxFMj@GTSlE_AtGgAr@E^F~@Av@Qq@eBq@sBMsCQeCg@qBsA{CoCsHiBiFU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}HHiDRiDRsO@yBf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkF}EsY]{@c@}AgCoGiFeK_JkQoZ}k@uFwMwCwHwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmEBiEHKHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@uIiFmAu@kA_@aJoFoEsCmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.sarjapur,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [550, 585, 960, 1070, 1380],
    },
    {
      name: "KIA-8E",
      route:
        "il~xMmajmAaAB`@bA`@Oa@Na@cAo@_B}AcDcC_GMe@y@]{@m@o@iCiBiJMkBJ_Cb@_KGc@SCk@KgDs@cFCmSDiESaGmAwFuBqGyCKa@x@{A|L}P|P{U~D{FfHaKfFgH^_AhHsJpPcUpV}\\jJiMhUuXnEuGrNuX`Yki@vVoe@hx@{{AbAeB`FsJrS{`@@w@u@MmHc@sGFqNhCoXhAmTv@qKt@eEUwFqBkDkCoEwE{A{ByMeQeJ}HiEwB_HcBkDJYTkABqDT{Q|BuFp@iQjEkJvBgKzAqIzA}Dh@cBUyEsAoYuKeRoGeJqDwHyCuUoIwPwGmIyD_LwImRuPyNmMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGyCgVcDoRSgLoBmV_A_MKqGx@yE`AeCvOwZ`Q_\\nMcW`NwWrJaRdE_IpDqFjGmJ~LmRpKiR~BaEp@e@pJSvCHzFGtGtBxKvD`WlJz@BjBz@vLvDbCr@jADfAMlAaA|CcG|BqETaCh@qVXgLnBmTl@cRd@uQf@cJ|@sAhc@sNtGmBzF_BzVoIjO_FpRqG~N_FvDsA~HkAlHw@tDo@pIiBfI_Cf@Um@{@Y_@w@cA{BeCwLoNqIiHkG}G{D_HiBkBsBoASe@_@gEKsLY}Ca@wAuAaG}@oBuDqE}BiE{@qD]sCa@iAeAiAyAeCKkBOiF]uFmBcLgBwGiBwDoBqCmAiAq@mBWsBO}Kk@qIq@wAgEoHwBk@mCc@o@k@G{HbAcb@AsPKmCa@aBoE}H}CuCg@w@SqBdBmNGsA}AyFcAeEYqC{@}Iu@}DOcBH{@`@{Cf@mDCkBKoCW{A[aDf@y@r@e@NmAi@}Nw@qCuB{CgDkDeAaC{CgHoDmG_DeEwBsGgFoK{@o@qKz@uIXs@_AcA{CwKyf@aF{UUaEXaDd@}EVqLU_IVgBv@sCXwD\\{A|AgB|AuEJuEh@cIc@aDm@aE`@kEuBkDk@a@y@Ms@[u@_Hg@qAyCiCeEsImDyNsAeDuGkHQ]aAqJcBqHsC{GeEaIoGqKwAeBePeMsD{DqNeU{KmSeNsZgBqBmFaHcDwL}@{D_AiCc@mBkE_Pi@uH}@mHw@kAs@sC}@yCcG_IgCwCu@q@XOLCbDg@hJq@rEVfLXh@DdEdAnXh@vI\\vBI`FHZ@xFAp@OBo@y@aNaA{FuAeUo@iIA{JNmA`DkMl@sBRw@[i@{@AuAl@kvBTeBi@_Bt@i[EqAeBg@q@aCmAeAsA{GABfB",
      start: STOPS_DATA.ecity_wipro,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [180, 260, 390, 430, 950, 975, 1150, 1230],
    },
    {
      name: "KIA-9",
      route:
        "wvmxMutenAB\\~C?@hCEh@If@GlABh@V|Af@hBZCCQ_@cA]eAMy@Ao@R{AR_C@o@?mAKcEUmEGa@@GCUKGq@M_DOeFi@_Fg@}@[[Wg@w@{@uBYe@[c@}BuB[MwAiA}AiA{@W{Bg@iAKcAC}Id@gA@[C_@Ks@_@uAu@Fs@Pi@lBsBpA{@IW~A_Et@_CgAoBS]yAsCkDqHeBeDcC{DeBqCw@iA{@cAe@c@UMI?oACGOCEEQTyB^oCVkBr@oEHsAJkA`@uDHIHa@d@uC?OIcASiA@}AA}DDuDKs@CmB?[?{ALuCH_Fb@yQFeJQwNMoMFyNDqGG{CEi@Ki@e@{Cc@eC[uCEu@[iBoAiHS{AHWUeBoAoGQ_AcAwCkAsDm@uBi@cBeAsCeCuGg@oBK}@MuAc@qBo@_C_A{CMk@E_AEmDImB?o@IaAKKI?MuA]aD_@}CUqAo@iDc@eBa@qA_AiCm@gBe@gCW_DGs@QcBCc@Ws@oAcDaCuGWmASsAJWAWc@iCu@mEc@gDEgA?m@ZkH@mBDeHEeCGgF?mBE{B?aEHiDBuANsALgIDuGTuH`@uMf@cRHoE?cHOkFqAk\\I_CIuB@SUiBScAUcA_AeD}AkFY_Aq@gBm@_By@qC_DmJYaAy@eD[gBi@sGe@{DwAgH}EgPo@{B_@_Bg@kCwAcIm@iD}@sFYqBOWa@oAOq@_AgCgAgC{AuCsDwHsCyFeGcLmMmVoDaHqCsF{@qByDeJmB_FgAwC{FqOmGaQs@u@OOo@gB_CmGyB_Gk@}AaBkEqBqFwBoGu@cCUcAQkAGaABkCBiEHKHMBSFoCB{FBcICsCIqDg@aJUmDUmBUy@aAqCyD{IyBsFsAaD}CeHgAuBmAuBsCuE}BwD[a@k@y@gCmDiAeBgDwE_AmAaCuD{A}BeBaCwEgG_GqIc@s@g@gAuFeO{F{OeB}EaA}CoAiE_@}@m@kAyAwB{ByC_@k@GAUEWM{A}BsA}B{KuPsLmQoCkEeLeQcDcFVMmE}GqBwC[c@{A{AqAcA[Om@K}CcCwCuBkC{B_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqImAeAg@m@{@uAo@cBa@kBy@}Ee@cAm@k@{@]aAI]@q@L]Ni@^k@n@cA|AyFzIaAlA}@v@sAz@o@XyAb@}B^gDJgRHoi@PkHA{OOe@K[Uc@Ic@HSTo@PkRJaaALaa@Le@Qs@]a@BWNw@X}YHa@Ie@Wi@q@Yy@g@c@YMOEoA?oH@g@c@?@",
      start: STOPS_DATA.majestic,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        5, 25, 50, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 305,
        320, 340, 360, 375, 390, 405, 425, 445, 465, 480, 495, 510, 525, 540,
        555, 570, 585, 600, 620, 640, 660, 680, 690, 705, 720, 740, 760, 780,
        790, 800, 810, 820, 830, 840, 855, 870, 885, 900, 915, 930, 945, 955,
        965, 975, 990, 1005, 1020, 1035, 1050, 1065, 1080, 1090, 1100, 1115,
        1130, 1140, 1155, 1170, 1185, 1200, 1215, 1230, 1245, 1260, 1275, 1290,
        1305, 1320, 1340, 1360, 1380, 1400, 1420,
      ],
    },
    {
      name: "KIA-10",
      route:
        "ufhxM}w`nArAeG~Bf@tAl@dEjDzEpClD`CdA`@bCf@`An@n@WTaAdCaL`@_Ab@QnB{AlEoEj@qAz@uF|AuFz@_CdBiFNm@FoAKoAiBcGsEkNyAeEiCaHuBiGqBwHqCwKMa@a@cAg@s@yAuAaA_@cCe@gJmAoJgA}D[{GAyEAeDE_AWo@m@kAeBs@gA[}@OkAG{@AmOCwIC_NAiFSaCw@uEqA{Fs@gD_CuKg@qCOsBCiABMG}@GgE?{B`CwQjAgIbBwO\\{C\\iDz@eJJiBVaDNcBBsA[{GMoA_@aBaAcCK[iAoAkAqAiAkAoBy@kMeF[Wa@m@]o@QQKi@CcALuCFeAPuAOEMMMYE_@F}Bd@gETaATCa@vBI|@InBEz@Yl@[\\k@\\]FuA@w@Mw@[eBiAs@{@e@aABM?CQi@yByEaAuBq@S]A_@HmCrAw@f@OVeAj@sKdFcEhBgHrDcAl@O?ODqD`BgAb@]B}JSqTm@}FSiKWyDGmHAiSN{NVqCFYKy@o@AyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kEu@cEiAkHHWGi@UyAk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKiPE{B?aEHiDRiDRsO@yBf@cO~@y^AwJ{A{_@QcGEk@S}Bi@gCwBmHe@cBkAgDgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkFeCmNwAeJ]{@c@}A_AgCgAgCiFeK}B}EaFmJaJ_QmO}YuFwMwCwHwFiOgHwR{@gAOOo@gB_CmGqCsH]}@iEiLwBoGu@cCg@oCGaABkCBiEHKHMBSJkK@oLCyAc@wJKiBk@{GwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuUyD}KcAiDa@mAw@}AmC{DgAuAg@m@UEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@kA}@iGkDiBaAo@SuA}@{MeImB{Bw@_B[eAiAuGc@qAk@q@}@c@cAM}@Dm@PgAv@eDbFmEvG{BtBoAt@sCz@aCZqOF_s@XeWSc@Ue@Se@D[Vc@PcGFulARga@Jq@[YOw@Hu@^sZHs@Ym@m@g@kAiAo@{J@YQQO",
      start: STOPS_DATA.mysore_road,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        5, 60, 240, 300, 330, 360, 390, 420, 480, 510, 540, 570, 600, 630, 660,
        690, 750, 780, 810, 855, 885, 915, 945, 975, 1005, 1035, 1065, 1095,
        1125, 1155, 1170, 1185, 1215, 1230, 1245, 1275, 1320, 1380,
      ],
    },
    // {
    //   name: "KIA-12",
    //   route:
    //     "okvxMwrymAGoAVApCO~GWrZOzt@_@b@AlBA@N@f@AXCbBEdCCzAJd@LjMOjF_@vHWvFk@tC[l@aD|Ds@dA]jAJNVk@bAgBrA}AnBeCX@c@CRy@L_ABc@Zk@h@aMZ}FFuBB}@SCDcABw@AyDN_HEsCGa@tEC~GGtAA`EGfOAdROpCE?Y?wAIyEGsKDeAAqHCqLEoN?AfBaBp@SjDKx@Yp@y@Ru@^QxFShG?hDAOsDIeOE}F_@uJ?gBHwDcEAAACCEAQw\\CyIF_AHI?YUM_@qCa@gAcAwAu@k@oC}@s@[cDo@yCKwEMsAeAcDwCoFmBsDuBsAs@[t@{AzDWx@yA~BoCdCc@\\s@qAyJgOzC_DpB{AnEmDpCoC}AsAwAyAjAcAnCcCxDuC|CkCvB_BRIK]IWIc@cC}IcCoIgCqJaA}C@WUOcBu@aEqDgB}Ck@kBn@C~@Eh@Qp@m@`BmCt@oBhA_BlAgAx@i@hCq@hEk@hBIvCb@vAXlCNjBHvDbApBnBL@f@QP[P{BdA}AvAeBjBwAlDsCfIaHhGgFdCcBjBu@aBkCsBkDwGoJuBeDcGoMgEqHqByDsAwDoDkJwAiE[mA@}@LMnI{GzEgEd@kCr@}Jp@_Gb@y@HkBUo@`CeQv@uIRk@d@eDIcASiA@}AA}DDuDO}Dz@k`@FeJQwNMoMLkWG{CQsAeBwLa@_DoAiHS{AHWUeBoAoGaDkK}CmJeCuGs@mDMuAsAqF_A{CSkBO{G?]S@KaB_AeJkByJoB{Fw@iCc@{CMiB[sDyF}OU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}H\\sITmSf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGiAmHs@uDaA_DsBcHwA_FgAkF}EsYaAyCgCoGiFeK_JkQoZ}k@mKoWwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmELuEHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@iLqQcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFiBaAeCqA{MeImB{BsAeDiAuGc@qAk@q@}@c@cAMkBVgAv@eDbFmEvG{BtBoAt@sCz@aCZqOF_s@XeWSc@Ue@Se@D_Ah@ytAZga@Jq@[YOw@Hu@^sZHs@Ym@m@g@kAiAo@{J@YQQO",
    //   start: STOPS_DATA.btm,
    //   end: STOPS_DATA.airport,
    //   stops: [],
    //   contact: "",
    //   timings: [340, 400, 460, 590, 650, 710, 925, 985, 1045, 1175, 1235, 1315],
    // },
    {
      name: "KIA-14",
      route:
        "}jrxMk|qmADObBIi@gFi@iEg@yEs@sCMmD@[RHWm@M{ASwBs@wHoAmPYeA_@mCiAaEyCkJkA{Dk@oD{AcLAmAUiAm@qC]g@eBaIqAuF{@sIc@wG{A_Jm@}CAmAf@oAbFyGd@iBLcATk@j@iMSAB]HoAX{IHaBCoDOcA@gHU}Oi@wUk@}WIsJ@i@S{@GuDFiBMcCCu@Pu@I_De@sDyAgKCqBSq@q@oEk@qCu@qF{AaRm@gF?aF\\wCXgEjC{@xDcA~@QTn@dGaBfBg@vAcAhEuBtB{CdD}GlAqC~IqIjBqAzBy@|EkA}BcIgAeEuDqMiEePu@sB@Y?Qq@SgAg@aEqDgB}Ck@kBn@Ch@CVCnAm@n@mAjAqBZ{@z@sAzBwBdBs@fCe@rEe@x@@`HfAbDJvBd@hA^x@`Av@l@b@CXWHOP{B|CcErTqQrFqEhAu@jBu@eDmFqBgDgFeHgByC_GgMgEqHqByDsAwDoDkJiAeDi@qB@}@LM@QYYE_A^}Kf@cKC{BWeCo@kCu@wCqAmDUiAHUd@iAhIuDtE}CpA_@vHi@|DD~AFpAMb@O`CcC@?D@B?HEFSQIIBABA@}CeCiCQo@_@Qc@KqAOwBAqAB{GI{ACeF|@y_@?cNOwJIaOJsUWmDeBwLa@_DoAiHS{AHWOuAkA}Fu@}CoB_GyCeJiB_FmA}DQuBk@oC}BgIUyJQ}ACAWuA?{@aA_Ia@wBoAyF]{@NGa@aBWq@SaE_@aCmImTk@aDJWe@aDyAuJEuBZkH@yOMqMHkJRiDLgIDuGTuH`@uMp@iX?qDK}HsAq\\KuCAu@Fc@Lc@@m@eBoHOqAEkCm@ePg@eRe@{PQcJ_@@IGcKwNiHsLmFeK{DeIs@q@cAiDcB_EqJqRqJyQmPk[eDqGuFwMaEsKeGcPeGaPu@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CiFuLiHaMwKgPiJ{MiC{DgLsOuCmEuF_OgGuP_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@gBqC@Q_@}@_FeI}DcGcI{LiE{FsBeBgAU}CcCcHqF_E}ByEkBwLgHuOkIwIeFaMyGuW{NwCsByK_LUPD\\LX~F|GdEdDbOvIh@x@VrAE`A_@dAqB`C}AnAeE|AyF\\sKR{g@T{P@mPQs@a@i@Go@`@w@Pmc@Jem@Bwc@Do@WSK}@Bk@^m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.royal_meenakshi,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        95, 210, 240, 280, 330, 310, 390, 420, 450, 480, 510, 540, 580, 615,
        660, 690, 735, 780, 930, 950, 1055, 1070, 1090, 1120, 1185, 1240, 1270,
        1310, 1340, 1410,
      ],
    },
    {
      name: "KIA-15",
      route:
        "k_lyM{penA}@BEuBMyGKkGq@mDe@oEk@qAsAyC}@iBy@uAsAaBsCwC}@i@uFsCWOFOH[Bq@B{E?QUDwBP_Gf@}Gd@sDLcDDaAAWYGE]?}E?IDWV{@AyEDeC\\wXnEqGvA}QbFwJ`CmARwCr@[FUw@e@eBGOa@sBu@aCkDgLqBcGwAcDiDgFwGaJ_@cDsByHa@qDQaCPyBbBwOvBePj@}EN}A@kB[gD_@kAuBeEqLmWuF}Lu@gCeAyE_AyIEoA\\G?i@QKO?CgA?wBNyLdAkRXaDnA{GjAgDrAyC`DiHxAeDjAgD^iDDgCOoB_AwH{CoS_B{Km@oEIcBJkHR{FGiGEoDSkGy@sHuEuUCe@@I@Sf@ThAh@fHbDpPbIxNrIrTrNtBrAFYlAcDrAaDd@q@bDsHlOo\\tBwEdJuRnI_QlEgDbC{BpCuD`FkHhAwCb@mB`@cCXeE`@qOXqJXqKf@sMJgDYsEiA_DmBoEmBoEgBiEQcAWwDUyCkBwH}@iG}BiHcDoLc@iBiAyDeAwBcAoCm@uCSoAM{B?cCIsBw@_Eo@cHc@_Fc@uFi@sM_@gGgBiPWuDAwF_@eXO_USeM@oBn@{A`C_GxA}Ej@yCVcDK_BwAuJkAmHo@cD{@kCcAoESoBQq@y@AkBRc@EOWYsA}@cH]iAQWWqBOqDRe@\\IzIgBdF}@h@Ix@o@`AgApBwA`DaBjCkA|DyAxGgBjCi@rCc@lCq@`I}BpH_BrUsEtD{@f@a@Pg@GcECaETs@hBcDVw@LgJ?sJGcFAm@XaAHWX{@~@aB|EgGnEqFpFuGn@_BZ_BF}CZwA@q@_@_I@u@hC_F~@sBlAoE~DsIbD}HrAiHt@wAxAkA~@mAv@aB~@cC`CqIb@cAPKt@kAxFaJXq@ASNuCdAqGn@eDxAgEx@_CxA`@|C|@dCn@~@DTK\\q@h@[pBa@hBORMDWBIjASdEo@~CYrFm@xA}A`AaAbCmArAq@xA_ARi@?mAbHIpE[~BEpAG`F}@dImAbCYp@]|Bq@x@LR^bApBn@dBd@r@f@SbDg@tDe@rDKrEVfFV~D@X@NBrA^pBd@bBFzLNfRn@pGMbBNdCGvB@v@GJSeAaMcB{Ks@_Mi@iNMaKNmAnA}EpAmFZ}APURw@Oa@a@Os@NOPw@Pmc@Jem@Bwc@Do@Wu@QgAh@m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.whitefield,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [
        255, 315, 375, 435, 495, 555, 615, 675, 810, 870, 930, 990, 1050, 1110,
        1170, 1230,
      ],
    },
    // 15-A
    {
      name: "KIA-17",
      route:
        "}e}wM{eymAw@VFRJZx@CdCq@b@AdC|B~@fAbCxJf@p@bBp@nFK~BDjDfAjE|@f@\\lFlAb@SFa@Y_@oGsBQi@Cm@BUDg@YaAk@qBiBuGkDiMiBkG}EwQoE}PkAmFOg@e@{BmCwJaDaMgEwRq@aCm@k@g@MqKlBc@Cy@eAoAiBq@cBy@iCgAmBi@}EUgB_A}Mu@iHaCmIqAsDaD_HmCmEwE_JaB_JeByCyEwCaCcBYeBi@_CwAwCmA_C_FsGaDuFiBeFsGqToAkI[sBCsB`@oCHmFUcCy@sCeFsOw@wCsAeCcGiKuBcEiA_D{AqFcBwJwAoJm@iDGeFGcENq@Ru@PoAF{CU{Ay@{Aq@mAaAwB_A}CcA}DaGh@oD?}E_AgBc@kAEoBTgJbCqA`@qFmUk@qAg@yBs@wCiAoDcNa_@oKoYsAcEa@wBKiBAmD@{FQ_Hq@mDuA}C{EiFkB_C}CgFqBmEgAqDuBoJmAmGu@aGk@cGmAgGuA{DsFaLmNyYiAcCO[OHoBn@aA`@iItD_@J[w@sBuRiCeS}A{MWy@{LkKcBgA}DmAuI_CyNiDuK_CmIkBcDm@{@MSSo@EmHf@e@ESa@`@eCr@gBBADEBMIM[@q@`Cm@lB{@jA[Zq@JkLJkFKqAQaE{B_@C{L}H_DoAmAU}Kq@sLo@mNa@?McEGsACsCI}DI}DSwH[{BT_@LFNsA\\[Pg@XkJ|GqCvB{GtD_FpCyBp@kOhBqADeC_@qDy@c@QKQ@?HZS@i@NgAVNv@@Nq@FEWr@E~ADv@Qq@eBq@sBMsCQeCg@qBcFoMiBiFU{A?_@DYu@kEmA_JB_DTcG?_QKkQ\\sIRsOXeLx@aYVsOa@yQiAyYE_BYiDaDuLyJkZsAgFeA{JiAmHuBuIkEcOmEyUwAeJ]{@c@}AgCoGgJcR}[cn@sDgHuFwMuE}LsJsWmBgF{@gA_EeKqCsHgFgNmDsKg@oCCmELuEHMN_L@oLg@qMw@eKwAkEqImSoCmGkCqF{JePkImLgJeNqGqI_JqMgPic@sD}KkAsDeEyGoBcCUEsBkCyDkGyLyQaOcU_GcJcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSiAi@}@V}@Zmc@JiqAZaA[MKq@GkAh@sZHiAi@_AiBi@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.kengeri,
      end: STOPS_DATA.airport,
      stops: [],
      contact: "",
      timings: [430, 600, 690, 725, 1065, 1200, 1270, 1320],
    },
  ],
  from: [
    {
      name: "KIA-4",
      route:
        "ka`yMg`bnAiA~A}@JGwCHiCVsA|AmCxBgCzDuGxHmMfCwDjAuBL@zDMpi@qDtLiAfNeBfGk@JSb@{CnBiQ\\_HHeDZyMNgFpDDrBB`UTtRVpYVfGFvCIdFUjF[zDGjAjAf@TrAp@`Al@VVvAfCbD|Er@r@dDlBhFjChCvAxCrAlElA|BTbCLBiBAaBF_@@_AIeC_@{CEy@?]B{FD{BMy@Uo@g@_AUOmBe@o@e@y@uBaBcFaAeAsAoAFML_@rAuJHqCM_P?[LUf@YdABtIz@r@j@d@~@r@_@^_@NSn@]xCyAfBqAfBmAx@m@`BcAv@_@pDgBbJkEvB}@bA[zB_@zBm@hAe@~A}@lDcCpCgB`AYtEKh@ExA_@fEgAfDeAzJoClCg@v@I@Sf@gAx@wAzAgEf@wArCaHt@yBh@cCv@aERk@RSrAcApCsAzHyCtQ{Lh@Gl@sBtC{F|JsQnCwE`BiCzA}BlCiDn@i@zCgAvAYvE]bEG~AF`@?ASGwF@k@Aa@OQH_N@sFGsBmA_Hg@aEAg@e@}CsAaIIm@HSEa@WeBk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKkN?{BEcCL{JNsAJuGBoBB_Fb@cN~@i]FkFCyFwAs^SsGEaBu@wEaEkN_BgEcCsHsCoJo@gDOsAu@oIY_BcBuHuBgHuBkHw@cD}BmMaBcK_@eBSo@Yy@o@{B}@uBmE{IyBuEyEgJuHuNiPe[oGqNcEmKaFyMiI_U_@u@u@w@oDqJcCwGi@{AcCuGgCaH{AyEs@_DKeAA}AFqGNQNkDFeTCyAQiEu@kMg@{CW}@}GePkA{CwB_FeBaEy@yAqC}EgFuIwDiFyGqJ_HgK}HeKwFiIc@u@{AuDsFkO}CoImAgDmByFcAgDe@{Am@sAqCeEwBuCu@UcGoJ_Ww_@uKuP_IwLVMKOsHeL[c@mD_DiA[}CcCcHqF_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqIuBsB{@uAo@cB{AiIe@cAm@k@{@]aAIoANgAn@oBlCyFzI_CdCsAz@iC|@}B^gDJw|@ZgYQe@K[Uc@Ic@HSTo@PkRJccBZy@_@_@Oa@BWNw@X}YHgAa@i@q@Yy@aAq@oKCg@a@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hal,
      stops: [],
      contact: "",
      timings: [
        240, 300, 330, 360, 405, 440, 510, 620, 900, 960, 990, 1020, 1080, 1110,
        1140, 1170, 1200, 1230, 1260, 1315, 1380,
      ],
    },
    {
      name: "KIA-4A",
      route:
        "k_lyM{penAFdBr@CvAIxNs@`Uw@xT{@^JlF[dAi@zEYnRkA~BPb@T{C|LmFvSgBhG{@zCqChIw@jBi@p@aA^qGToEPqCv@cBx@q@p@u@nA]`CJ`Bv@fC`ChFzApCp@|Cl@vFlCjLpBjHn@|CaHj@D^`IGdEWpAKtOm@tc@{AbSq@zFQjEOvADzMrAxGn@~a@hEzLhA~]zAjKR~@IvBq@pG_C`RkHdKaDhDa@~Ic@bJKdBMZK?VzCEbDWRAEs@?cAAwCZoBj@qApE_GpMuT~BuDhAoBL@RAlAGdF[dL_ArRsAvOiAtMgBhJ_A\\gBd@{D`A}H`@uEZwHn@oWf^^bi@j@dJJjHWvMk@fA?NGIO{AgCgBsCaD_EsAmAcAw@l@@tCP~B?xFm@pEg@fD[nCFfHb@bCLxBn@h@gArAuJHqCM_PLq@f@YdABtIz@r@j@d@~@r@_@^_@~@q@`GkD~CyBxBsAhD_BpKgFfCgAxE}@pDwArGgE|BwAhASzEI~Cw@zIkC|IaC`Eo@Nw@rA{BpC_IlCqG~AsGn@{Cf@_ArAcAzBgA|EkBhE{BfL}HvA{@h@Gl@sBvBmEtIuOvHmMhFgHtA_A~C_AdGi@bH?`@?ASGwF?mAOQFyIDoFEgE_@uC}@{Fa@kE_CoN@aAUyAqAwG_D_KcEoLgB_Fg@kDc@eCgA_Ew@gCOcCMqHM{@QEgB}NcAaFy@iCu@qBw@iCc@{CMiBG}@SuBoCsHiBiFU{A?_@DYu@kEmA_JB_DTcG?yOKuNL{J^yMZaPH[VkGt@mZDuG_@_Om@_Oc@qMe@oDcAgEgBgGsCiIeF}OaBmHeAcLy@iEoByHiC{IqAsE{@mE_FcY}AeFcB_EwF_LqKwSaLaTkKoSmKoWuOkb@_@u@u@w@oDqJcCwGi@{AcCuGcF{Ns@_DMcDFqGNQFg@NcUCsCq@sOk@{GUy@{FmNcEcK{CcHkC_F{IoNaI_LyIsMqGqI_JqMyIqUgIcU{BqHm@sAqCeEwBuCu@UcRqY_LuPiCmEaAeC}NwT{IyMaC}B}@c@k@IgAaAeEyCsAaAcCqBkAq@aFuBuLaHiB_AeAg@Ua@e@WmFaDsFcDmBaBqBgDq@oCs@kEu@iBs@k@aAY_AE_ANgAn@qA`BsHhLkAnAyAdAsBx@}Bd@eDRuL@ui@T_a@Le@?_@p@e@~AeCdKeA`Am@Vg@ToC?uKDq[Hi]Lon@NqJHeBG{@QgAq@c@i@{DcIYuAGmBCi@[cBgAcBsAgBeFDiA?AdA",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
      timings: [5, 90, 420, 480, 540, 570, 600, 660, 720, 750, 810, 860, 915],
    },
    {
      name: "KIA-5",
      route:
        "i~mxMo}ymAaBC?UAWOJ?XKjBEfD?jCFpA\\zE|AnJHxCGzFQnIs@lIFp@O?kD?kIDcN@cZNcAKwODFe@DoAGiI@uJBqEOcFCwF?{IBkA^?`FU`AIzAK?_CDe@Bc@AoHIeMKcI?_C?MO@qEHuEBMwQa@{@e@yDPgBZeAd@c@hG?hDAOsDIeOE}F_@uJ?gBHwDcEAAACCEAQw\\CyIF_AHI?YUM_@qCa@gAcAwAu@k@oC}@s@[cDo@yCKwEMsAeAcDwCoFmBsDuBsAs@[t@{AzDWx@yA~BoCdCc@\\s@qAyJgOzC_DpB{AnEmDpCoC}AsAwAyAjAcAnCcCxDuC|CkCvB_BRIK]IWIc@cC}ImCqIuDwMWm@m@i@{DyCcAaAcBsCm@gBg@{Ag@i@yC{BwAuAiAy@sCcCkFmDeAi@uBkA{C_CoI}EcC}@XcAhAcENWjD{A|F]bCSTk@y@yLC}@~CuCrAAfFEZiAzIwU~@aBVK~D_AdJsBxB_@nD_Ap@[Pa@D]dCs@zOqFbBi@h@i@e@gA{@}CScAFm@FGxAsAxKuIx@}@Vy@d@cFL_Cr@gITw@^u@FgAYy@TcCv@{F|@cHTmBpAeJ]mC?oCDsHOoDf@eWVsOEaKOkPC}JJqNMoGuAkIa@kEu@cEiAkHHWMkA[cBg@aCe@cCqBeGyCiJaCqGmA}DQuBk@oC}BgIUyJCu@Mg@CAWuA}@_IiBaJoCcIu@kFKkAGeAMaA[wAsCwHuAoESsAHO?_@iByKYmDJoDPiFDsIMyOAiIHuDZiJFuHHuCf@{Ov@u[?qDK}HsAq\\UmGUqCcAgEgBgGsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsE{@mEkD_SS}A_@eBY{@cAiDcB_EwF_LqKwSaLaTeF}JoEaJsJeVqOcb@iAoAuGiQqAqDaGaPwBgHc@wCDoJTc@PyRIyJ_@eHa@uGg@{CmCeHaFqLoFiMmFiJyFeJ_EyFcIeLuEeHgLsOuCmEuF_OgGwPyD{KgAuDg@qAgAqBcDmEw@kAQCc@QgBmCmMcSyPkW{KyPmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFkA_@uM}HoCyBqBgDq@oCeA}Fc@w@s@k@aAYcB?oAf@eBrBqFtImCbDyAdAsBx@}Bd@eDRmd@PaUD_\\Kw@Ia@Wo@Ke@RILw@PwuBf@kAe@u@I]Nm@Xk@ByY?w@c@o@sAc@g@u@]{J@i@a@A?",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.banashankari,
      stops: [],
      contact: "",
      timings: [
        50, 360, 420, 460, 480, 500, 520, 560, 580, 600, 640, 680, 700, 720,
        735, 750, 780, 810, 840, 870, 900, 960, 1000, 1020, 1040, 1080, 1100,
        1140, 1200, 1230, 1260, 1280, 1320, 1340, 1380, 1400,
      ],
    },
    {
      name: "KIA-5D",
      route:
        "ihexMwsnmASJOW_@y@eBaEcBuCw@yBwA{A_JmFiCiC_D_EkI{LcDaF}TwYiBoBgBsA}Aq@{EcB}DyAmBkByAiDJo@}AqEo@m@Uu@wDiMkCuI{@oAwAy@iO}BoTmEyRiEiOgDaFkBiHkEwFwEyEyE{QmOmLkLkLcOqByCgAkBu@_CgAuEi@cEDuC`@}FCoAQuFHwAn@cJ^iPBcEe@{FqAaIW}GF{DBoAhA@zACBiAEkBMIs@Ia@h@sAp@UpJNtDp@pHlA|H@nBYtPs@lIFp@O?aB?cGBiN@g_@HcQ@JaBGqH@sKMiRAwC@sHNk@fCIjGc@FyNUiWEgSv@yE?}Bc@oCSo@OsDIeOE}F_@}MHwDcEAAAAAECGyCKkd@Nc@_@eBmAoEaA{@gF_BmFy@oFImAQ}@y@cDwCkIaDcCqB]Be@t@e@lAaC}@kN}FoDgDvRwPbJmH\\If@p@XpAn@dBx@b@vAc@}@iEmB_IaCcIgC_KoDeM}Ao@sE{DoC_GNSj@El@KnAm@vC{FvCqD|@m@~Bq@|Hy@|Cb@dFh@jBHvDbApBnBL@f@QP[P{BdA}AbE}DlDsCfIaHlGiFtEkCVKa@m@wBiDeJcNgByCuGmNsFqJyEwLwBsFy@uC]yADs@JMxLqJ|BeCf@cEhAcOr@mBBkBQs@bCmQx@cIt@_EIyAQaDA}DDuDO}Dz@k`@I}YMoMLkWOoEoBgM[{Cq@mDm@}D?aAOyAkA}FeD}KyCeJyDcLaAoGuAyEe@_CQaJSuA_@uBgA{I{AmH{CeJu@{GKsAw@kDcDqIi@iBBu@YeADY{AgJg@cEB_DZgPKkNE_GL{J^yMB_Fb@cN~@i]BeNwAs^SsGEaBu@wEaEkNcF{NsCoJ_A{FoAoLcBuHuBgHmDoM_FqYmAoEmBqFmE{IsI}PuHuNiPe[oGqNcEmKaFyMiI_U_@u@u@w@oDqJcCwGi@{AgJqWs@_DMcDVcHNkDB_WgAuS_AyE}GePcE{J_D{GqC}E_L_QyGqJ_HgK}HeKwFiI_CkFqK{Y{DaLwCwIiG{Iu@UcGoJ_Ww_@iCmE_@eA}KiQuLsQ_CkCgBiAk@IgAaAeEyCsDyC_E}ByEkBwLgHeBy@e@i@aJoFgDqBuBsBkByDa@kBsAqGsAkAaCUcATgAv@qHfLeDvDsAz@iC|@}B^gDJyp@VqMB{XHmCtIk@nCi@hAy@p@iAd@wLB}c@Lku@Rc_@NeCm@kB_CaDeHOkAMyCk@yBo@_@o@AiIPOeA",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.silk_institute,
      stops: [],
      contact: "",
      timings: [110, 300, 390, 440, 820, 1060, 1120, 1170],
    },
    {
      name: "KIA-6",
      route:
        "qeryMcfinAd@KLf@HX~@tCz@|CPjBXjAjDxEjEdGzBhEbD~KlF~PpAnEd@dClB|PnEt_@tBb[^jEt@xGdFjV~C`OBx@nAhD|E`LzAjEnApAlAh@z@@nDe@tCKrKEfLE`IGnCFl[tCxKd@fLZp\\P~RJvOB|BDrAMxOc@dOe@vQq@ba@oAtK_@jEOvADzMrAtTxBtU~BlJbA|H\\f`@|A`CO|FoBnZkLhFyAvDi@|F[nOWbAW?V`AA~DOpAMnDe@|Cg@tJuAjGi@x@AnGp@`L[vJWjOU`Vw@pWyApP_AbDOdAU`CE~SoAlOcBbDS~@DdGtAv@HbDu@pEiA~FeAlCc@rAg@`HiDv@{ArEeLT[fG_CxDgAzCWrANjDjATFFMj@i@^u@j@{Cf@yGd@oHPgDDqC@WYCm@GUCKAO@FeFQoFYaCBa@IaAL_GAwAcAqCi@[mBg@i@i@aBaFy@wBmCiCX}@rA_KBkEK_NTe@j@SlF`@jDd@TPx@rAfAq@Za@hEwBbEsCdBsAlIeElMaGxE}@lBm@`DgBrHaFhASzEItJgCnGqBrEkA`Eo@Nw@rA{BpC_IlCqG~AsGv@qDf@o@hBoAfCmArDsArBy@tAaAnKkHfAq@`Aa@NAf@eBL_@tDkHzEwIfIqNzEyGpBkBnDiAnD]|DS`DB`A@EuAAyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kE_CoNHWMkA[cBmAeG}DaMoE_MmA}DQuBk@oCyAcFc@cBKmFMaEMg@CAWuA}@_Ii@wC_AiEmAsDaAoCu@kFSqCMaA[wAsCwHuAoESsAHO?_@_AqFi@gDYmD\\yKEsSCcPHuDZiJFuH\\uL~@e\\J}KK}Hg@{Lw@kSIwBUqCkDoMsCiIeF}OaBmHeAcLy@iEcAkEk@mBiC{IqAsEgFmYs@cEY{@cAiDcB_EqJqRqJyQmPk[oEaJ_GsNmEmLoJmWgAyCiAoAqIiUwGsQwBgHc@wCDoJTc@PyRA{Eg@cMa@uGg@{CmCeHuHwQ{CcHkC_F{IoNaI_LgJcNoHyJ}HiLmMm]mEcMkCiIgAqBcDmEw@kAQCc@QgBmCmMcS}GcKmLsQiGmJmE}GVMKOsHeL[c@iCeCmBu@aMuJ{FyCqEqBkBgBwIaFaD}A_K_GoCyBqBgDmAaGi@kCc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@iw@Ve_@KiASUQi@Go@`@w@PmFBulARga@Js@]g@Oc@FOLaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kadugodi,
      stops: [],
      contact: "",
      timings: [
        60, 125, 180, 390, 450, 525, 585, 630, 690, 875, 930, 975, 1050, 1095,
        1155, 1230, 1330, 1370,
      ],
    },
    {
      name: "KIA-6A",
      route: `qeryMcfinALE%5EbAPA%5CjA%5EbAZ%7C%40d%40~BPrBp%40hAfFdH~DbGx%40vBlAdEzDbMzDtMFNL%3FzA%5DjJsBbM%7BCjKsC~Bq%40fJ%7DAtGaA%7CKcB~O%3FdE%40bEKbIy%40bKw%40~P%7DA%7COwBz%40UdCuAtAg%40dI_B~Bg%40zBg%40~CsAbHkDbCKpE%40bIIv%40Rb%40Z%60C%7CBxEvDpA%60AvFrC%7C%40n%40h%40r%40lClAv%40PlAV~%40d%40fAh%40nAv%40l%40z%40nArChApDNrA%40N%60%40%3FZsAvCiNrBiJlAsFnB%7BIBYZ%3Fx%40CbAIjB%5DxJeBzIaBxEq%40lHeBfEo%40xDQpDc%40jDcAdF_BzA%5DlJ%7DB%7CH_DrBy%40xAgAbBqBjAiA%7C%40o%40~BgAjASzBMfJYpPIVD%60%40L%7C%40CbCEzB%3FvCHzFGxA%5ElAf%40lBl%40lCx%40jG%7CB%60WlJz%40BjBz%40xMdEnBf%40rA%40dAUbAgA~CgGzAwCXo%40Ls%40D%7DBf%40yUXoKtAwN%5EkFR%7BHh%40qRVwHL%7BCXoBVg%40f%40%5DvNyElVcIxJeCvi%40sQ%7Ce%40aPrC%7B%40bAMpKiAvEm%40hHoAvNoEdA%7B%40fBgF%7CKoYtE_LpBcEr%40u%40zBcBzD_CtEcHrBwCdAkApAq%40pBUzB%3FnW%5CxDJvAIzCg%40zEiAbBc%40hB%7B%40xAc%40tLgBrDk%40FA%40RfHkAnEi%40bGg%40xODfUEdCHnARjAj%40vBtAvBzAnBdAd%40LfBRvKCzAKj%40GTSlE_AlCe%40jDg%40n%40FvBScByEQwD_%40aDyAmD_FsMi%40iBU%7BA%3F_%40DKGk%40kAeHa%40oCOcD%5C%7DK%3FwKGaGEiFHkJRiDLgIDuG%60%40gM%7C%40g%5CHsNu%40%7BSu%40%7BRIuBS%7DBScAuAiF%7DAkFmJiYuAmGoAoMwAgH%7DAcF_CcIoA%7BE_CoMkB%7DKYqBOWa%40oAoAyDcD%7DGgIqPkJiQwOiZmEeJgHeQsD%7BJ%7BJeXa%40iAs%40u%40_AwByFmOk%40%7DAkImUkAgEYmCBkCBiEHKHMBSNoUCsCIqDg%40aJk%40%7BGUy%40aAqCyD%7BIyBsFsAaD%7DCeHuCkFyIiNyJkN%7DGaK%7DHiK_GqIkA%7BBwLi%5CmE_McC%7BHgCcE%7BByCg%40m%40UEWM%7BA%7DBsA%7DB%7BKuPsLmQmIsMgF%7DHcDcFVMmE%7DGqBwCmAuAwAsA_Ai%40m%40KgAaAyG%7BEgCsBwC_ByEmBs%40a%40_%40i%40uIiFiBaAeCqA%7BMeImB%7BBsAeDiAuGc%40qAk%40q%40%7D%40c%40cAMkBVgAv%40sJzN%7BBtBoAt%40sCz%40aCZ_u%40%5CqMBeWSiAi%40e%40D%5BVc%40PcGF%7DnB%5EkAk%40w%40Hu%40%5EsZHs%40Ym%40m%40g%40kAiAo%40%7BJ%40YQQO`,
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kadugodi,
      stops: [],
      contact: "",
      timings: [770, 830, 890],
    },
    {
      name: "KIA-7",
      route:
        "%7DuzxMa%60ymA%5CA%40%7CAH%3FAaAE%40ImCG%7BDFM%40sCEwCGaD_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzAnMpApIl%40lB%40vAM%60%40MxHaCtRqGfQqFf%5CcJdCq%40d%40Bx%40FFO~B_ErA%7BCnAwA%60DcC~QkMzD%7DBfDgBpAa%40hEiAlAKdNgAxTcBbCo%40%60By%40ZG%7C%40mApB_DpAmDVwCt%40wN%7C%40oHZy%40%60%40_%40nBoA~Ay%40%7BBcEcEcGsBaDjAqAjDsCnAoAvB_B~%40w%40rAoAZ%5BYS%7BCyCfB%7DA%60DoCrFkEbCsB%7C%40e%40Mc%40a%40%7DAaEqNuCwJiBkGS_%40iBqAcDoCeBkCk%40qA_%40gAk%40%7BA_EaDMQwAaAmAiA%7BGkFeE%7BBmAo%40qHmFkDgBcC%7D%40dAqDb%40aBTSlD%7BAlGW%60BOJGNm%40_AoNjDuCvGIV%40%3FQ~BkGvEqMtAiCtCy%40pEeAfCk%40mFsGiGwETo%40jI_KlJuMvAaBt%40w%40h%40p%40tAfBl%40h%40zGzIjGdGrCxCNRZ%5Be%40gAq%40aC%5DyADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40OYAYbCmQx%40cIt%40_EKaBQ%7B%40%40%7B%40AqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUGsBO%7D%40%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwGiBqFu%40mCcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHqBkGgG_RsAgF%5BgBi%40sGe%40%7BDc%40qBs%40uDaA_DsBcHwA_FgAkFeCmNwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEcHmPm%40_BoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsB%7B%40uAo%40cBiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40PKLo%40PkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hsr,
      stops: [],
      contact: "",
      timings: [45, 490, 580, 630, 750, 840, 900, 1080, 1165, 1230, 1375, 1420],
    },
    {
      name: "KIA-7A",
      route:
        "%7DuzxMa%60ymA%5CAJ%7CAG_AImC%40%7DIMyH_%40sS%7B%40gEe%40qB_DkIo%40sBlBm%40dCw%40j%40UxAaAnB_AfAWfAGtQzANBBSP_CdAuUZ%7BFl%40oC%60%40%7B%40vCuCpIoItSiTcCeBgBy%40iBs%40aDo%40oFEiG%3F_D%40%7BE%3FqAK%7BA%5D_CaAiBqAeAoAoDmG_LcTiDyGcCaFUsAR_BVi%40z%40%7B%40nD_Dn%40yAHiAYuAkAyC%7BDuHiC%7DF%5DsMFiF%40m%40%40a%40%5ECnG%5BlH_%40MmAw%40wJGc%40fBKtBOfGk%40dGw%40bDS~%40DdGtAv%40HbDu%40pEiA~FeAlCc%40rAg%40%60HiDv%40%7BArEeLT%5BfG_CxDgAzCWrANjDjATFFMj%40i%40%5Eu%40j%40%7BCf%40yGd%40oHPgDDqCtBApG%7B%40tRkCdc%40sGjBYRCAUs%40aDU%7D%40eAkDxK_CvXmGTEGWg%40_BeBmHQu%40i%40yBDe%40Z_B%3FOy%40sESUPAlAWTp%40f%40hAZdBEF_AZUT%5C~ArFcAlHyAcAcDhBo%40h%40YdEf%40lBRdC%40p%40%40v%40j%40HdCIpAR%60CPN%7CAx%40xAn%40jLgCdFmAv%40YTWJo%40tS_HxA%5Db%40_%40Z%5B%5Ds%40k%40qBQm%40YoADs%40JMBItLgJ%7CAsA%5Eq%40f%40cEhAcOPu%40%60%40w%40JcAGg%40Qs%40bCmQx%40cIt%40_EKaBOwBAqAB%7BGI%7BACeF%7C%40y_%40%3FcNOwJIaOJsUWqD%7D%40aFi%40iFyB_NIm%40HSEa%40WeBqAwG_D_KcEoLgB_FYoAM%7BAc%40eCgA_Ew%40gCOcCMqHM%7B%40QE_AeJg%40wCcAaFy%40iCu%40qBw%40iCc%40%7BCMiBG%7D%40SuBoCsHiBiFU%7BA%3F_%40DYu%40kEe%40%7BCg%40cEB_DTcGDcHE%7BGKkQHiDRiDRsOXeLx%40aYVsOCsF%5DeJiAyYE_BYiDi%40gCwBmHyJkZsAgF%5BgBi%40sGiAmHs%40uDaA_DsBcHwA_FmEyUwAeJ%5D%7B%40c%40%7DAgCoGgJcR%7D%5Bcn%40sDgHuFwMuE%7DLsJsWmBgF%7B%40gA_AwB_CmGqCsHgFgNmDsKg%40oCCmEBiEHKHMN_L%40oLCyAc%40wJw%40eKwAkEqImSoCmGkCqF%7BJePkImLgJeNqGqI_JqMsDoJ%7DF%7BOuB%7DFsD%7DKkAsDw%40%7DAmC%7BDoBcCUEWM%7BA%7DBsA%7DBeBmCyLyQaOcU_GcJcBeCcDcFVMmE%7DGqBwCwB_CqAcAiA%5BuHyFkC%7BBkBiAeFwB%7BBiA_%40i%40iKoGoAe%40_PkJuBsBkByDiAsGa%40yAi%40w%40uAq%40_BGoA%5CuAnA%7DHxLeBnB%7DCjBkCr%40qCViUL%7Br%40NsPSc%40Yi%40Mk%40P%7B%40%5EkRJccBZiAi%40%7D%40Bk%40Zm%40H%7BYBs%40%5Di%40q%40Yy%40g%40c%40i%40SqJBs%40e%40A%40",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.hsr,
      stops: [],
      contact: "",
      timings: [
        5, 60, 120, 180, 390, 450, 500, 540, 600, 660, 690, 720, 770, 810, 870,
        930, 980, 1040, 1090, 1130, 1185, 1205, 1235, 1265, 1295, 1340, 1360,
        1385,
      ],
    },
    {
      name: "KIA-8",
      route:
        "efayMoblmAOKd@s@hA_B~BeCdU_[zYma@bc@ql@lZoa@tEuGjFoG|LsNjDeFdEcI`Ra^fUec@|N}Xr[em@`GcLhC{EPm@fSa`@dQw\\h@g@lC{F~BcF{Ce@uIi@wBDaKhBwEv@gCHkHV_HTgPn@wCHqKt@oA?uBUkDaAkAo@kDkCoEwEgNaRsA{AaHgGmA_AaCkAkCi@yF_@wDKgCF}N|AyGp@mGbAcYbHiS`DeAb@iEd@gAAg@c@qAg@k@Yq@EaLkEqX{JoKuDgHsCsJsDiVwIuQmHeEiCoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNnMcWvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItEDzGEvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@EvAs@f@u@dDuGlBcE`Aq`@FqDh@wFpAaQp@uTh@yQLsB\\oA\\_@|Ak@rRmGzQcGbDw@zJ{Ch]eLt_@gMnOaFvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{AdEeCzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZbEg@fB[fG{ApCoAzScDHPfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDtCrAfBRxFAxFM`A[lE_AtGgAr@E~ADv@Qq@eBq@sBMsCQeCg@qBsA{CyF}OU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}H\\sITmSf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGiAmHs@uDaA_DsBcHwA_FgAkF}EsYaAyCgCoGiFeK_JkQoZ}k@mKoWwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmELuEHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@iLqQcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.ecity,
      stops: [],
      contact: "",
      timings: [
        5, 20, 60, 100, 140, 180, 220, 255, 300, 315, 330, 360, 380, 410, 430,
        440, 460, 485, 500, 520, 560, 575, 600, 625, 800, 815, 845, 875, 890,
        915, 945, 960, 990, 1020, 1035, 1065, 1280, 1320, 1360, 1400,
      ],
    },
    // {
    //   name: 'KIA-8A',
    //   start: STOPS_DATA.airport,
    //   end: STOPS_DATA.whitefield,
    //   stops: [],
    //   contact: "",
    //   timings: [
    //     345,
    //     390,
    //     400,
    //     420,
    //     475,
    //     540,
    //     590,
    //     610,
    //     650,
    //     735,
    //     900,
    //     970,
    //     1050,
    //     1180,
    //     1260,
    //     1300,
    //   ],
    // },
    {
      name: "KIA-8C",
      route:
        "_tgyM}lcmATKlC_@zEeApAe@nC}AxAoAbA_Bxk@_w@pRkWpG_Jr\\m^rFiIrE_LdBkHfAkFdCuLhBiHlFwR~@cCvBmDrUe\\|L_Q~A_CzBkCbBuBbQ{UdMkQfLwOh]ae@bPsTxOeTpKyNfNcPtDaF|DeHzJkRh]gp@pl@{hAvKqSPm@lKaSfVme@`CqDlC{F~BcF{Ce@uIi@wBDyQ`D{d@`ByLj@yFXwAKyDaAkAi@iDgCcE_EaCeD}IsLwCgDcI_HgCsAoFcA}HWwAAiGd@uN~AuFp@iQjEkJvBgKzAcC`@_Dl@YTyDj@iA@c@A]YSUcBk@q@MaX{JmWaJuKkEgWiJoPqGiL}EaHiF}P{NkE{DcOuMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGeB}NyBaOs@sDk@eESqLgC}Ye@cHM_GXcC`AqDjHqNzJuRjHgNfG}K`D_H`HsM|EsJhV{d@zPsWjLkQrHkNxBsDp@a@nDOvJHfEKt@JzCfAfGnBtYxKfDbAz@LdBv@~InChFtApAAjAc@xBgDdEsIRcA^oQb@uQfBiSr@wQf@sSX_I`@mB\\g@vGwBhZwJlHyBzF_BzVoIjO_FpRqG~N_FvDsAxBi@dEa@lHw@hDe@~JoBzGuBxCgAt@{@dBmF~G{PlDmJfFoLbAcBn@k@bDwBdC_BtAoB|F{I`A}@|Ao@lBMzC@zYf@jDQrK{BhDwAfBa@jOyBbAS@RdCc@pHeAbD_@zGUdLFnVExBNfAZ|@d@pCjBpChBnAd@rBRrLCbBQbD_ApFaApC_@dAFhAOLCg@gAy@kCEi@SaE_@aCkEwKaCuGk@aDJWe@aDyAuJEuBZkH@yOMwOL{J^yMZaPj@uRf@aVWuNoAg[MeFu@wEqB_HoAkEcF{NsCoJ_A{FoAoLcBuHkFsQw@cD}BmMaBcKs@uCYy@mBqFgIqPyZkl@_EwHoGqNcGwOkOea@u@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CwG{NyJsPoTg[wRkX_CkFsFkOkEqLiDaKmAaEm@sAqCeEwBuCu@UcRqYub@cp@VMKOsHeLeDiDmBu@mG{EsDyCoBkA}I_EkBgBwIaFaD}A_K_GoCyBqBgDwBmKc@w@s@k@aAYcB?oAf@eBrBqFtI{BrCqCjBsCz@}E`@uL@si@Te_@KiASUQi@G_@NOPw@PmFBulARga@J{Am@s@TaAX{YD_@KaA{@Wu@c@g@u@]{J@i@c@A@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.chandapura,
      stops: [],
      contact: "",
      timings: [80, 160, 240, 285, 765, 860, 930, 1005],
    },
    {
      name: "KIA-8D",
      route:
        "stcyMk|xmAjArC\\fAFPKB_B`@HRK[~Aa@hE{AlN_GrGkCvGgBlEu@dBg@jH{DbAaA~@uAf@wBB?DC@C`Ae@`GgCnDyAjCq@vHgBpH}C~D}AdCm@b@ICu@]YSUcBk@q@MmHoCyZ_LkMoEgHsCsJsDiVwIuQmHuBiAoA_AoG_F{OgNuTyRcJoJiB{C}FwKqB_EgAcEkGgWaAiGiAqLeA}H{BaOiAuFQoCE{CMuGwAgPy@eJa@yLf@wD~@wClPy[bGiL|HuNxDyHtGiMvN{XfK_SjCgFdBiCjBwCpGsJpLuQnCqE`JwPb@c@d@[j@IhEItED|@B|EIvB`@`GpBbQrG|M`FvAXVAl@\\rBv@vNlEdAH~@En@Qf@a@f@u@dDuGrAgCX{@RyIRsJXcJFqDh@wFbAkLLuCRgH\\mKh@yQLsB\\oA\\_@|Ak@xDkAxLaEzQcGbDw@zJ{Ch]eLt_@gMtFkBxGuBvOcBzEs@bF}@rCw@hH{BdB{@l@_A|DaLtKoXdFeL|A{ApA}@rBgAzAkA`GiJ`BsBx@o@`Bc@xAIdPLdOZvAIjB]fB[fG{ApCoAzScDFA@RfHkApJgAxIK`QJfLIdCHnARr@Zj@\\zEbDnBdAd@LfBRxFAxFMj@GTSlE_AtGgAr@E^F~@Av@Qq@eBq@sBMsCQeCg@qBsA{CoCsHiBiFU{A?_@DY{AgJg@cEB_DTcGDcHKiPE}HHiDRiDRsO@yBf@cO~@y^AwJmB_h@YiDi@gCwBmHqBkGgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkF}EsY]{@c@}AgCoGiFeK_JkQoZ}k@uFwMwCwHwFiOgHwR{@gA_AwB_CmGqCsH]}@iEiLmDsKg@oCCmEBiEHKHMN_LAiOc@wJw@eKwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuU_AgC}D_MyAkDmC{DoBcCUEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@uIiFmAu@kA_@aJoFoEsCmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSs@a@i@Go@`@w@PmFBulARga@J{@c@q@GYJq@\\sZHiAi@a@s@]u@i@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.sarjapur,
      stops: [],
      contact: "",
      timings: [370, 450, 690, 750, 1220],
    },
    {
      name: "KIA-8E",
      route:
        "il~xMmajmAaAB`@bA`@Oa@Na@cAo@_B}AcDcC_GMe@y@]{@m@o@iCiBiJMkBJ_Cb@_KGc@SCk@KgDs@cFCmSDiESaGmAwFuBqGyCKa@x@{A|L}P|P{U~D{FfHaKfFgH^_AhHsJpPcUpV}\\jJiMhUuXnEuGrNuX`Yki@vVoe@hx@{{AbAeB`FsJrS{`@@w@u@MmHc@sGFqNhCoXhAmTv@qKt@eEUwFqBkDkCoEwE{A{ByMeQeJ}HiEwB_HcBkDJYTkABqDT{Q|BuFp@iQjEkJvBgKzAqIzA}Dh@cBUyEsAoYuKeRoGeJqDwHyCuUoIwPwGmIyD_LwImRuPyNmMyJ_K}DcHqGyLwA}EiEcQyBoKm@kGyCgVcDoRSgLoBmV_A_MKqGx@yE`AeCvOwZ`Q_\\nMcW`NwWrJaRdE_IpDqFjGmJ~LmRpKiR~BaEp@e@pJSvCHzFGtGtBxKvD`WlJz@BjBz@vLvDbCr@jADfAMlAaA|CcG|BqETaCh@qVXgLnBmTl@cRd@uQf@cJ|@sAhc@sNtGmBzF_BzVoIjO_FpRqG~N_FvDsA~HkAlHw@tDo@pIiBfI_Cf@Um@{@Y_@w@cA{BeCwLoNqIiHkG}G{D_HiBkBsBoASe@_@gEKsLY}Ca@wAuAaG}@oBuDqE}BiE{@qD]sCa@iAeAiAyAeCKkBOiF]uFmBcLgBwGiBwDoBqCmAiAq@mBWsBO}Kk@qIq@wAgEoHwBk@mCc@o@k@G{HbAcb@AsPKmCa@aBoE}H}CuCg@w@SqBdBmNGsA}AyFcAeEYqC{@}Iu@}DOcBH{@`@{Cf@mDCkBKoCW{A[aDf@y@r@e@NmAi@}Nw@qCuB{CgDkDeAaC{CgHoDmG_DeEwBsGgFoK{@o@qKz@uIXs@_AcA{CwKyf@aF{UUaEXaDd@}EVqLU_IVgBv@sCXwD\\{A|AgB|AuEJuEh@cIc@aDm@aE`@kEuBkDk@a@y@Ms@[u@_Hg@qAyCiCeEsImDyNsAeDuGkHQ]aAqJcBqHsC{GeEaIoGqKwAeBePeMsD{DqNeU{KmSeNsZgBqBmFaHcDwL}@{D_AiCc@mBkE_Pi@uH}@mHw@kAs@sC}@yCcG_IgCwCu@q@XOLCbDg@hJq@rEVfLXh@DdEdAnXh@vI\\vBI`FHZ@xFAp@OBo@y@aNaA{FuAeUo@iIA{JNmA`DkMl@sBRw@[i@{@AuAl@kvBTeBi@_Bt@i[EqAeBg@q@aCmAeAsA{GABfB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.ecity_wipro,
      stops: [],
      contact: "",
      timings: [40, 120, 200, 270, 790, 830, 980, 1080],
    },
    {
      name: "KIA-9",
      route:
        "wvmxMutenAB\\~C?@hCEh@If@GlABh@V|Af@hBZCCQ_@cA]eAMy@Ao@R{AR_C@o@?mAKcEUmEGa@@GCUKGq@M_DOeFi@_Fg@}@[[Wg@w@{@uBYe@[c@}BuB[MwAiA}AiA{@W{Bg@iAKcAC}Id@gA@[C_@Ks@_@uAu@Fs@Pi@lBsBpA{@IW~A_Et@_CgAoBS]yAsCkDqHeBeDcC{DeBqCw@iA{@cAe@c@UMI?oACGOCEEQTyB^oCVkBr@oEHsAJkA`@uDHIHa@d@uC?OIcASiA@}AA}DDuDKs@CmB?[?{ALuCH_Fb@yQFeJQwNMoMFyNDqGG{CEi@Ki@e@{Cc@eC[uCEu@[iBoAiHS{AHWUeBoAoGQ_AcAwCkAsDm@uBi@cBeAsCeCuGg@oBK}@MuAc@qBo@_C_A{CMk@E_AEmDImB?o@IaAKKI?MuA]aD_@}CUqAo@iDc@eBa@qA_AiCm@gBe@gCW_DGs@QcBCc@Ws@oAcDaCuGWmASsAJWAWc@iCu@mEc@gDEgA?m@ZkH@mBDeHEeCGgF?mBE{B?aEHiDBuANsALgIDuGTuH`@uMf@cRHoE?cHOkFqAk\\I_CIuB@SUiBScAUcA_AeD}AkFY_Aq@gBm@_By@qC_DmJYaAy@eD[gBi@sGe@{DwAgH}EgPo@{B_@_Bg@kCwAcIm@iD}@sFYqBOWa@oAOq@_AgCgAgC{AuCsDwHsCyFeGcLmMmVoDaHqCsF{@qByDeJmB_FgAwC{FqOmGaQs@u@OOo@gB_CmGyB_Gk@}AaBkEqBqFwBoGu@cCUcAQkAGaABkCBiEHKHMBSFoCB{FBcICsCIqDg@aJUmDUmBUy@aAqCyD{IyBsFsAaD}CeHgAuBmAuBsCuE}BwD[a@k@y@gCmDiAeBgDwE_AmAaCuD{A}BeBaCwEgG_GqIc@s@g@gAuFeO{F{OeB}EaA}CoAiE_@}@m@kAyAwB{ByC_@k@GAUEWM{A}BsA}B{KuPsLmQoCkEeLeQcDcFVMmE}GqBwC[c@{A{AqAcA[Om@K}CcCwCuBkC{B_E{BqCeA{BiA_@i@kA}@}HqE{B_AsNqImAeAg@m@{@uAo@cBa@kBy@}Ee@cAm@k@{@]aAI]@q@L]Ni@^k@n@cA|AyFzIaAlA}@v@sAz@o@XyAb@}B^gDJgRHoi@PkHA{OOe@K[Uc@Ic@HSTo@PkRJaaALaa@Le@Qs@]a@BWNw@X}YHa@Ie@Wi@q@Yy@g@c@YMOEoA?oH@g@c@?@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.majestic,
      stops: [],
      contact: "",
      timings: [
        10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 220, 240, 260, 280, 300,
        320, 340, 360, 380, 400, 420, 435, 450, 465, 480, 495, 510, 525, 540,
        555, 570, 585, 600, 610, 620, 630, 640, 655, 670, 685, 700, 715, 730,
        745, 760, 775, 790, 805, 820, 835, 850, 865, 880, 895, 910, 925, 940,
        960, 980, 1000, 1020, 1040, 1060, 1080, 1100, 1120, 1140, 1160, 1175,
        1190, 1205, 1220, 1235, 1250, 1265, 1280, 1295, 1310, 1325, 1340, 1355,
        1370, 1385, 1400, 1415, 1430,
      ],
    },
    {
      name: "KIA-10",
      route:
        "ufhxM}w`nArAeG~Bf@tAl@dEjDzEpClD`CdA`@bCf@`An@n@WTaAdCaL`@_Ab@QnB{AlEoEj@qAz@uF|AuFz@_CdBiFNm@FoAKoAiBcGsEkNyAeEiCaHuBiGqBwHqCwKMa@a@cAg@s@yAuAaA_@cCe@gJmAoJgA}D[{GAyEAeDE_AWo@m@kAeBs@gA[}@OkAG{@AmOCwIC_NAiFSaCw@uEqA{Fs@gD_CuKg@qCOsBCiABMG}@GgE?{B`CwQjAgIbBwO\\{C\\iDz@eJJiBVaDNcBBsA[{GMoA_@aBaAcCK[iAoAkAqAiAkAoBy@kMeF[Wa@m@]o@QQKi@CcALuCFeAPuAOEMMMYE_@F}Bd@gETaATCa@vBI|@InBEz@Yl@[\\k@\\]FuA@w@Mw@[eBiAs@{@e@aABM?CQi@yByEaAuBq@S]A_@HmCrAw@f@OVeAj@sKdFcEhBgHrDcAl@O?ODqD`BgAb@]B}JSqTm@}FSiKWyDGmHAiSN{NVqCFYKy@o@AyFEOKK@uADiHDgEAkCKcCWoA}@{Fa@kEu@cEiAkHHWGi@UyAk@yCe@}BiBqFu@mCyAsEqE{LYoAM{Ac@eC_CgIK_ACcAMeG?k@M{@QE_AeJg@wCcAaFy@iCu@qBw@iCc@{CMiB[sDoCsH_A_Ci@iBU{A?_@DY{AgJg@cEB_DTcGDcHKiPE{B?aEHiDRiDRsO@yBf@cO~@y^AwJ{A{_@QcGEk@S}Bi@gCwBmHe@cBkAgDgG_RsAgF[gBi@sGe@{Dc@qBs@uDaA_DsBcHwA_FgAkFeCmNwAeJ]{@c@}A_AgCgAgCiFeK}B}EaFmJaJ_QmO}YuFwMwCwHwFiOgHwR{@gAOOo@gB_CmGqCsH]}@iEiLwBoGu@cCg@oCGaABkCBiEHKHMBSJkK@oLCyAc@wJKiBk@{GwAkEcHmP}DmJkCqFsCwEgFmIsDgFqHkKkGqJkIyKgFwHsDoJsIuUyD}KcAiDa@mAw@}AmC{DgAuAg@m@UEWM{A}BsA}BeBmCyLyQwIuMiLqQcBeCcDcFVMmE}GqBwCmAuAwAsA_Ai@m@KgAaAyG{EgCsBwC_ByEmBs@a@_@i@kA}@iGkDiBaAo@SuA}@{MeImB{Bw@_B[eAiAuGc@qAk@q@}@c@cAM}@Dm@PgAv@eDbFmEvG{BtBoAt@sCz@aCZqOF_s@XeWSc@Ue@Se@D[Vc@PcGFulARga@Jq@[YOw@Hu@^sZHs@Ym@m@g@kAiAo@{J@YQQO",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.mysore_road,
      stops: [],
      contact: "",
      timings: [
        5, 40, 120, 180, 360, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690,
        720, 750, 780, 810, 840, 870, 900, 960, 990, 1020, 1050, 1080, 1110,
        1140, 1170, 1200, 1230, 1260, 1290, 1305, 1320, 1350, 1365, 1380, 1410,
      ],
    },
    {
      name: "KIA-14",
      route:
        "}jrxMk|qmADObBIi@gFi@iEg@yEs@sCMmD@[RHWm@M{ASwBs@wHoAmPYeA_@mCiAaEyCkJkA{Dk@oD{AcLAmAUiAm@qC]g@eBaIqAuF{@sIc@wG{A_Jm@}CAmAf@oAbFyGd@iBLcATk@j@iMSAB]HoAX{IHaBCoDOcA@gHU}Oi@wUk@}WIsJ@i@S{@GuDFiBMcCCu@Pu@I_De@sDyAgKCqBSq@q@oEk@qCu@qF{AaRm@gF?aF\\wCXgEjC{@xDcA~@QTn@dGaBfBg@vAcAhEuBtB{CdD}GlAqC~IqIjBqAzBy@|EkA}BcIgAeEuDqMiEePu@sB@Y?Qq@SgAg@aEqDgB}Ck@kBn@Ch@CVCnAm@n@mAjAqBZ{@z@sAzBwBdBs@fCe@rEe@x@@`HfAbDJvBd@hA^x@`Av@l@b@CXWHOP{B|CcErTqQrFqEhAu@jBu@eDmFqBgDgFeHgByC_GgMgEqHqByDsAwDoDkJiAeDi@qB@}@LM@QYYE_A^}Kf@cKC{BWeCo@kCu@wCqAmDUiAHUd@iAhIuDtE}CpA_@vHi@|DD~AFpAMb@O`CcC@?D@B?HEFSQIIBABA@}CeCiCQo@_@Qc@KqAOwBAqAB{GI{ACeF|@y_@?cNOwJIaOJsUWmDeBwLa@_DoAiHS{AHWOuAkA}Fu@}CoB_GyCeJiB_FmA}DQuBk@oC}BgIUyJQ}ACAWuA?{@aA_Ia@wBoAyF]{@NGa@aBWq@SaE_@aCmImTk@aDJWe@aDyAuJEuBZkH@yOMqMHkJRiDLgIDuGTuH`@uMp@iX?qDK}HsAq\\KuCAu@Fc@Lc@@m@eBoHOqAEkCm@ePg@eRe@{PQcJ_@@IGcKwNiHsLmFeK{DeIs@q@cAiDcB_EqJqRqJyQmPk[eDqGuFwMaEsKeGcPeGaPu@w@oDqJcCwGmDqJcF{Ns@_DMcDFqGNQNkDFeTUcHu@kMg@{CW}@}GePkA{CiFuLiHaMwKgPiJ{MiC{DgLsOuCmEuF_OgGuP_AgC}D_MyAkDmC{DoBcCUEsBkCyDkGqWo`@gBqC@Q_@}@_FeI}DcGcI{LiE{FsBeBgAU}CcCcHqF_E}ByEkBwLgHuOkIwIeFaMyGuW{NwCsByK_LUPD\\LX~F|GdEdDbOvIh@x@VrAE`A_@dAqB`C}AnAeE|AyF\\sKR{g@T{P@mPQs@a@i@Go@`@w@Pmc@Jem@Bwc@Do@WSK}@Bk@^m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.royal_meenakshi,
      stops: [],
      contact: "",
      timings: [
        25, 200, 300, 350, 380, 440, 470, 500, 540, 590, 620, 660, 740, 800,
        920, 940, 980, 1040, 1070, 1090, 1120, 1160, 1180, 1200, 1220, 1250,
        1270, 1300, 1360, 1425,
      ],
    },
    {
      name: "KIA-15",
      route:
        "k_lyM{penA}@BEuBMyGKkGq@mDe@oEk@qAsAyC}@iBy@uAsAaBsCwC}@i@uFsCWOFOH[Bq@B{E?QUDwBP_Gf@}Gd@sDLcDDaAAWYGE]?}E?IDWV{@AyEDeC\\wXnEqGvA}QbFwJ`CmARwCr@[FUw@e@eBGOa@sBu@aCkDgLqBcGwAcDiDgFwGaJ_@cDsByHa@qDQaCPyBbBwOvBePj@}EN}A@kB[gD_@kAuBeEqLmWuF}Lu@gCeAyE_AyIEoA\\G?i@QKO?CgA?wBNyLdAkRXaDnA{GjAgDrAyC`DiHxAeDjAgD^iDDgCOoB_AwH{CoS_B{Km@oEIcBJkHR{FGiGEoDSkGy@sHuEuUCe@@I@Sf@ThAh@fHbDpPbIxNrIrTrNtBrAFYlAcDrAaDd@q@bDsHlOo\\tBwEdJuRnI_QlEgDbC{BpCuD`FkHhAwCb@mB`@cCXeE`@qOXqJXqKf@sMJgDYsEiA_DmBoEmBoEgBiEQcAWwDUyCkBwH}@iG}BiHcDoLc@iBiAyDeAwBcAoCm@uCSoAM{B?cCIsBw@_Eo@cHc@_Fc@uFi@sM_@gGgBiPWuDAwF_@eXO_USeM@oBn@{A`C_GxA}Ej@yCVcDK_BwAuJkAmHo@cD{@kCcAoESoBQq@y@AkBRc@EOWYsA}@cH]iAQWWqBOqDRe@\\IzIgBdF}@h@Ix@o@`AgApBwA`DaBjCkA|DyAxGgBjCi@rCc@lCq@`I}BpH_BrUsEtD{@f@a@Pg@GcECaETs@hBcDVw@LgJ?sJGcFAm@XaAHWX{@~@aB|EgGnEqFpFuGn@_BZ_BF}CZwA@q@_@_I@u@hC_F~@sBlAoE~DsIbD}HrAiHt@wAxAkA~@mAv@aB~@cC`CqIb@cAPKt@kAxFaJXq@ASNuCdAqGn@eDxAgEx@_CxA`@|C|@dCn@~@DTK\\q@h@[pBa@hBORMDWBIjASdEo@~CYrFm@xA}A`AaAbCmArAq@xA_ARi@?mAbHIpE[~BEpAG`F}@dImAbCYp@]|Bq@x@LR^bApBn@dBd@r@f@SbDg@tDe@rDKrEVfFV~D@X@NBrA^pBd@bBFzLNfRn@pGMbBNdCGvB@v@GJSeAaMcB{Ks@_Mi@iNMaKNmAnA}EpAmFZ}APURw@Oa@a@Os@NOPw@Pmc@Jem@Bwc@Do@Wu@QgAh@m@NsZBKYw@{@[u@aAo@yAw@eAyAyG@@hB",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.whitefield,
      stops: [],
      contact: "",
      timings: [375, 435, 495, 555, 615, 675, 735, 795, 945, 1005, 1065, 1125],
    },
    // {
    //   name: 'KIA-15A',
    //   start: STOPS_DATA.airport,
    //   end: STOPS_DATA.whitefield,
    //   stops: [],
    //   contact: "",
    //   timings: [
    //     1185,
    //     1245,
    //     1290,
    //     1350,
    //   ],
    // },
    {
      name: "KIA-17",
      route:
        "}e}wM{eymAw@VFRJZx@CdCq@b@AdC|B~@fAbCxJf@p@bBp@nFK~BDjDfAjE|@f@\\lFlAb@SFa@Y_@oGsBQi@Cm@BUDg@YaAk@qBiBuGkDiMiBkG}EwQoE}PkAmFOg@e@{BmCwJaDaMgEwRq@aCm@k@g@MqKlBc@Cy@eAoAiBq@cBy@iCgAmBi@}EUgB_A}Mu@iHaCmIqAsDaD_HmCmEwE_JaB_JeByCyEwCaCcBYeBi@_CwAwCmA_C_FsGaDuFiBeFsGqToAkI[sBCsB`@oCHmFUcCy@sCeFsOw@wCsAeCcGiKuBcEiA_D{AqFcBwJwAoJm@iDGeFGcENq@Ru@PoAF{CU{Ay@{Aq@mAaAwB_A}CcA}DaGh@oD?}E_AgBc@kAEoBTgJbCqA`@qFmUk@qAg@yBs@wCiAoDcNa_@oKoYsAcEa@wBKiBAmD@{FQ_Hq@mDuA}C{EiFkB_C}CgFqBmEgAqDuBoJmAmGu@aGk@cGmAgGuA{DsFaLmNyYiAcCO[OHoBn@aA`@iItD_@J[w@sBuRiCeS}A{MWy@{LkKcBgA}DmAuI_CyNiDuK_CmIkBcDm@{@MSSo@EmHf@e@ESa@`@eCr@gBBADEBMIM[@q@`Cm@lB{@jA[Zq@JkLJkFKqAQaE{B_@C{L}H_DoAmAU}Kq@sLo@mNa@?McEGsACsCI}DI}DSwH[{BT_@LFNsA\\[Pg@XkJ|GqCvB{GtD_FpCyBp@kOhBqADeC_@qDy@c@QKQ@?HZS@i@NgAVNv@@Nq@FEWr@E~ADv@Qq@eBq@sBMsCQeCg@qBcFoMiBiFU{A?_@DYu@kEmA_JB_DTcG?_QKkQ\\sIRsOXeLx@aYVsOa@yQiAyYE_BYiDaDuLyJkZsAgFeA{JiAmHuBuIkEcOmEyUwAeJ]{@c@}AgCoGgJcR}[cn@sDgHuFwMuE}LsJsWmBgF{@gA_EeKqCsHgFgNmDsKg@oCCmELuEHMN_L@oLg@qMw@eKwAkEqImSoCmGkCqF{JePkImLgJeNqGqI_JqMgPic@sD}KkAsDeEyGoBcCUEsBkCyDkGyLyQaOcU_GcJcBeCcDcFVMmE}GqBwCmAuAwC}Bm@KgAaAyG{EgCsBwC_ByEmBsAkAuIiFyCuAqPcKmB{BsAeDiAuGc@qAk@q@}@c@}AMqAVgAv@uB~C}FzI{BtB}CxAgEr@ig@Vg[HeWSiAi@}@V}@Zmc@JiqAZaA[MKq@GkAh@sZHiAi@_AiBi@a@_@MkFBwCCc@_@",
      start: STOPS_DATA.airport,
      end: STOPS_DATA.kengeri,
      stops: [],
      contact: "",
      timings: [280, 450, 545, 580, 915, 1055, 1130, 1175],
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

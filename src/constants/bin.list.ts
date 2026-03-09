import type { TBin } from "@/types";
import { PaymentMethodNetwork } from "@hsrcpay/prisma";

// ---------------------------------------------------------
// SANDBOX DATA
// Toplam 50 farklı Issuer (Kurum), Her biri için 5 BIN = 250 Kayıt
// ---------------------------------------------------------

// prettier-ignore
export const SandboxBinList: TBin[] = [
  // 0.1. Phine Up LLC (US - Headquarters) - Teknoloji ve Yazılım Odaklı
  { prefix: "499100", iin: 499100, phone: "+13025550199", type: "CREDIT", brand: "PHINEUP ELITE", country: "US", issuer: "Phine Up LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "499101", iin: 499101, phone: "+13025550199", type: "DEBIT", brand: "PHINE CHECKING", country: "US", issuer: "Phine Up LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "599102", iin: 599102, phone: "+13025550199", type: "CREDIT", brand: "PHINEUP CORPORATE", country: "US", issuer: "Phine Up LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "379103", iin: 379103, phone: "+13025550199", type: "CREDIT", brand: "PHINEUP FOUNDER", country: "US", issuer: "Phine Up LLC", network: PaymentMethodNetwork.AMEX},
  { prefix: "609104", iin: 609104, phone: "+13025550199", type: "CREDIT", brand: "DISCOVER TECH", country: "US", issuer: "Phine Up LLC", network: PaymentMethodNetwork.DISCOVER},
  
  // 0.2. PhineUp Yazılım ve Teknoloji A.Ş. (TR) - Türkiye Yapılanması
  { prefix: "499200", iin: 499200, phone: "+902129998877", type: "DEBIT", brand: "PHINE CÜZDAN", country: "TR", issuer: "PhineUp Yazılım A.Ş.", network: PaymentMethodNetwork.VISA},
  { prefix: "499201", iin: 499201, phone: "+902129998877", type: "PREPAID", brand: "PHINE SANAL", country: "TR", issuer: "PhineUp Yazılım A.Ş.", network: PaymentMethodNetwork.VISA},
  { prefix: "599202", iin: 599202, phone: "+902129998877", type: "CREDIT", brand: "PHINE BUSINESS TR", country: "TR", issuer: "PhineUp Yazılım A.Ş.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "599203", iin: 599203, phone: "+902129998877", type: "CREDIT", brand: "YAZILIMCI KART", country: "TR", issuer: "PhineUp Yazılım A.Ş.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "979204", iin: 979204, phone: "+902129998877", type: "DEBIT", brand: "TROY PHINE (Simulated)", country: "TR", issuer: "PhineUp Yazılım A.Ş.", network: PaymentMethodNetwork.TROY}, // Troy altyapısı Visa simülasyonu

  // 0.3. PhineUp Payments Ltd (UK) - Avrupa/Fintech Merkezi
  { prefix: "499300", iin: 499300, phone: "+442071234567", type: "DEBIT", brand: "UP-WALLET GBP", country: "GB", issuer: "PhineUp Payments Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "499301", iin: 499301, phone: "+442071234567", type: "CREDIT", brand: "LONDON STARTUP", country: "GB", issuer: "PhineUp Payments Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "599302", iin: 599302, phone: "+442071234567", type: "CREDIT", brand: "WORLD ACCESS", country: "GB", issuer: "PhineUp Payments Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "599303", iin: 599303, phone: "+442071234567", type: "PREPAID", brand: "TRAVEL UP", country: "GB", issuer: "PhineUp Payments Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "379304", iin: 379304, phone: "+442071234567", type: "CREDIT", brand: "AMEX UK PHINE", country: "GB", issuer: "PhineUp Payments Ltd", network: PaymentMethodNetwork.AMEX},

  // 0.4. PhineUp Solutions GmbH (DE) - Avrupa Operasyonları
  { prefix: "599400", iin: 599400, phone: "+49309876543", type: "DEBIT", brand: "GIRO PHINE", country: "DE", issuer: "PhineUp Solutions GmbH", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "599401", iin: 599401, phone: "+49309876543", type: "CREDIT", brand: "BERLIN TECH", country: "DE", issuer: "PhineUp Solutions GmbH", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "499402", iin: 499402, phone: "+49309876543", type: "CREDIT", brand: "EURO BUSINESS", country: "DE", issuer: "PhineUp Solutions GmbH", network: PaymentMethodNetwork.VISA},
  { prefix: "499403", iin: 499403, phone: "+49309876543", type: "PREPAID", brand: "VIRTUAL EURO", country: "DE", issuer: "PhineUp Solutions GmbH", network: PaymentMethodNetwork.VISA},

  // 0.5. PhineUp Global Services (Offshore/International)
  { prefix: "309500", iin: 309500, phone: "+18005559999", type: "CREDIT", brand: "DINERS PHINE CLUB", country: "US", issuer: "PhineUp Global Services", network: PaymentMethodNetwork.DINERS},
  { prefix: "629501", iin: 629501, phone: "+18005559999", type: "DEBIT", brand: "UNIONPAY CONNECT", country: "US", issuer: "PhineUp Global Services", network: PaymentMethodNetwork.UNIONPAY},
  { prefix: "599502", iin: 599502, phone: "+18005559999", type: "CREDIT", brand: "DEVELOPER PRO", country: "US", issuer: "PhineUp Global Services", network: PaymentMethodNetwork.MASTERCARD},

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 1. HSRCPAY Ödeme Hizmetleri A.Ş. (TR) - Fintech Odaklı
  { prefix: "405950", iin: 405950, phone: "+902129990001", type: "DEBIT", brand: "H-WALLET BASIC", country: "TR", issuer: "HSRCPAY Ödeme Hizmetleri A.Ş.", network: PaymentMethodNetwork.VISA},
  { prefix: "405951", iin: 405951, phone: "+902129990001", type: "PREPAID", brand: "H-WALLET VIRTUAL", country: "TR", issuer: "HSRCPAY Ödeme Hizmetleri A.Ş.", network: PaymentMethodNetwork.VISA},
  { prefix: "535952", iin: 535952, phone: "+902129990001", type: "CREDIT", brand: "H-PREMIUM BLACK", country: "TR", issuer: "HSRCPAY Ödeme Hizmetleri A.Ş.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "535953", iin: 535953, phone: "+902129990001", type: "CREDIT", brand: "H-COMMERCIAL", country: "TR", issuer: "HSRCPAY Ödeme Hizmetleri A.Ş.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "405954", iin: 405954, phone: "+902129990001", type: "DEBIT", brand: "H-STUDENT", country: "TR", issuer: "HSRCPAY Ödeme Hizmetleri A.Ş.", network: PaymentMethodNetwork.VISA},

  // 2. HSRC Wallet, Inc. (US) - Teknoloji Devi Stili
  { prefix: "411111", iin: 411111, phone: "+14155550100", type: "CREDIT", brand: "SILICON VALLEY ELITE", country: "US", issuer: "HSRC Wallet, Inc.", network: PaymentMethodNetwork.VISA},
  { prefix: "411112", iin: 411112, phone: "+14155550100", type: "CREDIT", brand: "INFINITE TECH", country: "US", issuer: "HSRC Wallet, Inc.", network: PaymentMethodNetwork.VISA},
  { prefix: "511113", iin: 511113, phone: "+14155550100", type: "DEBIT", brand: "PAYROLL PLUS", country: "US", issuer: "HSRC Wallet, Inc.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "371114", iin: 371114, phone: "+14155550100", type: "CREDIT", brand: "AMEX PLATINUM H-EDITION", country: "US", issuer: "HSRC Wallet, Inc.", network: PaymentMethodNetwork.AMEX},
  { prefix: "601115", iin: 601115, phone: "+14155550100", type: "CREDIT", brand: "DISCOVER H-REWARDS", country: "US", issuer: "HSRC Wallet, Inc.", network: PaymentMethodNetwork.DISCOVER},

  // 3. H. Nova Payment Solutions GmbH (DE) - Alman Disiplini
  { prefix: "522220", iin: 522220, phone: "+4930123456", type: "DEBIT", brand: "GIRO-H CONNECT", country: "DE", issuer: "H. Nova Payment Solutions GmbH", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "522221", iin: 522221, phone: "+4930123456", type: "CREDIT", brand: "EURO ELITE", country: "DE", issuer: "H. Nova Payment Solutions GmbH", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "422222", iin: 422222, phone: "+4930123456", type: "PREPAID", brand: "TRAVEL EURO", country: "DE", issuer: "H. Nova Payment Solutions GmbH", network: PaymentMethodNetwork.VISA},
  { prefix: "422223", iin: 422223, phone: "+4930123456", type: "CREDIT", brand: "AUTOBAHN BUSINESS", country: "DE", issuer: "H. Nova Payment Solutions GmbH", network: PaymentMethodNetwork.VISA},
  { prefix: "522224", iin: 522224, phone: "+4930123456", type: "DEBIT", brand: "STUDENTEN KONTO", country: "DE", issuer: "H. Nova Payment Solutions GmbH", network: PaymentMethodNetwork.MASTERCARD},

  // 4. hsrc Digital Payments Ltd (UK) - İngiliz Fintech
  { prefix: "433330", iin: 433330, phone: "+442079460000", type: "DEBIT", brand: "POUND SAVER", country: "GB", issuer: "hsrc Digital Payments Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "433331", iin: 433331, phone: "+442079460000", type: "CREDIT", brand: "LONDON GOLD", country: "GB", issuer: "hsrc Digital Payments Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "533332", iin: 533332, phone: "+442079460000", type: "CREDIT", brand: "ROYAL H-CARD", country: "GB", issuer: "hsrc Digital Payments Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "533333", iin: 533333, phone: "+442079460000", type: "PREPAID", brand: "OYSTER CONNECT", country: "GB", issuer: "hsrc Digital Payments Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "433334", iin: 433334, phone: "+442079460000", type: "CREDIT", brand: "CORPORATE UK", country: "GB", issuer: "hsrc Digital Payments Ltd", network: PaymentMethodNetwork.VISA},

  // 5. HsRc Global Corp (US) - Yatırım Bankası
  { prefix: "375001", iin: 375001, phone: "+12125550199", type: "CREDIT", brand: "INVESTOR BLACK", country: "US", issuer: "HsRc Global Corp", network: PaymentMethodNetwork.AMEX},
  { prefix: "375002", iin: 375002, phone: "+12125550199", type: "CREDIT", brand: "WALLSTREET PREFERRED", country: "US", issuer: "HsRc Global Corp", network: PaymentMethodNetwork.AMEX},
  { prefix: "475003", iin: 475003, phone: "+12125550199", type: "DEBIT", brand: "ASSET ACCESS", country: "US", issuer: "HsRc Global Corp", network: PaymentMethodNetwork.VISA},
  { prefix: "575004", iin: 575004, phone: "+12125550199", type: "CREDIT", brand: "WEALTH MANAGEMENT", country: "US", issuer: "HsRc Global Corp", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "305005", iin: 305005, phone: "+12125550199", type: "CREDIT", brand: "DINERS EXCLUSIVE", country: "US", issuer: "HsRc Global Corp", network: PaymentMethodNetwork.DINERS},

  // 6. HSRC NeoBank NV (NL) - Hollanda Dijital Banka
  { prefix: "510060", iin: 510060, phone: "+31201234567", type: "DEBIT", brand: "DUTCH ORANGE", country: "nl", issuer: "HSRC NeoBank NV", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "510061", iin: 510061, phone: "+31201234567", type: "CREDIT", brand: "EURO TRAVELER", country: "nl", issuer: "HSRC NeoBank NV", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "410062", iin: 410062, phone: "+31201234567", type: "DEBIT", brand: "BIKE & PAY", country: "nl", issuer: "HSRC NeoBank NV", network: PaymentMethodNetwork.VISA},
  { prefix: "410063", iin: 410063, phone: "+31201234567", type: "PREPAID", brand: "E-COM VIRTUAL", country: "nl", issuer: "HSRC NeoBank NV", network: PaymentMethodNetwork.VISA},
  { prefix: "510064", iin: 510064, phone: "+31201234567", type: "CREDIT", brand: "GREEN SUSTAINABLE", country: "nl", issuer: "HSRC NeoBank NV", network: PaymentMethodNetwork.MASTERCARD},

  // 7. HSRCPAY Asia Pte Ltd (SG) - Singapur Merkezli
  { prefix: "450070", iin: 450070, phone: "+6561234567", type: "CREDIT", brand: "ASIAN TIGER", country: "sg", issuer: "HSRCPAY Asia Pte Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "620071", iin: 620071, phone: "+6561234567", type: "DEBIT", brand: "UNIONPAY CONNECT", country: "sg", issuer: "HSRCPAY Asia Pte Ltd", network: PaymentMethodNetwork.UNIONPAY},
  { prefix: "620072", iin: 620072, phone: "+6561234567", type: "CREDIT", brand: "DRAGON GOLD", country: "sg", issuer: "HSRCPAY Asia Pte Ltd", network: PaymentMethodNetwork.UNIONPAY},
  { prefix: "550073", iin: 550073, phone: "+6561234567", type: "DEBIT", brand: "SMART CITY", country: "sg", issuer: "HSRCPAY Asia Pte Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "450074", iin: 450074, phone: "+6561234567", type: "PREPAID", brand: "TOURIST PASS", country: "sg", issuer: "HSRCPAY Asia Pte Ltd", network: PaymentMethodNetwork.VISA},

  // 8. HSRC Finansal Teknolojiler A.Ş. (TR)
  { prefix: "408080", iin: 408080, phone: "+908501112233", type: "CREDIT", brand: "TEKNO KART", country: "TR", issuer: "HSRC Finansal Teknolojiler A.Ş.", network: PaymentMethodNetwork.VISA},
  { prefix: "408081", iin: 408081, phone: "+908501112233", type: "DEBIT", brand: "MAAŞ KART", country: "TR", issuer: "HSRC Finansal Teknolojiler A.Ş.", network: PaymentMethodNetwork.VISA},
  { prefix: "508082", iin: 508082, phone: "+908501112233", type: "CREDIT", brand: "TAKSİT PLUS", country: "TR", issuer: "HSRC Finansal Teknolojiler A.Ş.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "508083", iin: 508083, phone: "+908501112233", type: "PREPAID", brand: "OYUN KART", country: "TR", issuer: "HSRC Finansal Teknolojiler A.Ş.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "408084", iin: 408084, phone: "+908501112233", type: "CREDIT", brand: "PLATINUM BUSINESS", country: "TR", issuer: "HSRC Finansal Teknolojiler A.Ş.", network: PaymentMethodNetwork.VISA},

  // 9. H-Pay Systems B.V. (NL)
  { prefix: "490090", iin: 490090, phone: "+31209998877", type: "CREDIT", brand: "SHOPPER CHOICE", country: "nl", issuer: "H-Pay Systems B.V.", network: PaymentMethodNetwork.VISA},
  { prefix: "490091", iin: 490091, phone: "+31209998877", type: "DEBIT", brand: "DIRECT PAY", country: "nl", issuer: "H-Pay Systems B.V.", network: PaymentMethodNetwork.VISA},
  { prefix: "590092", iin: 590092, phone: "+31209998877", type: "CREDIT", brand: "GLOBETROTTER", country: "nl", issuer: "H-Pay Systems B.V.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "590093", iin: 590093, phone: "+31209998877", type: "PREPAID", brand: "GIFT H-CARD", country: "nl", issuer: "H-Pay Systems B.V.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "490094", iin: 490094, phone: "+31209998877", type: "CREDIT", brand: "CORPORATE FLEX", country: "nl", issuer: "H-Pay Systems B.V.", network: PaymentMethodNetwork.VISA},

  // 10. NovaHSRC Solutions LLC (US)
  { prefix: "400100", iin: 400100, phone: "+13055551010", type: "CREDIT", brand: "MIAMI HEAT", country: "US", issuer: "NovaHSRC Solutions LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "601101", iin: 601101, phone: "+13055551010", type: "CREDIT", brand: "DISCOVER SUNSHINE", country: "US", issuer: "NovaHSRC Solutions LLC", network: PaymentMethodNetwork.DISCOVER},
  { prefix: "400102", iin: 400102, phone: "+13055551010", type: "DEBIT", brand: "CHECKING PLUS", country: "US", issuer: "NovaHSRC Solutions LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "500103", iin: 500103, phone: "+13055551010", type: "CREDIT", brand: "WORLD REWARDS", country: "US", issuer: "NovaHSRC Solutions LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "370104", iin: 370104, phone: "+13055551010", type: "CREDIT", brand: "AMEX GOLD NOVA", country: "US", issuer: "NovaHSRC Solutions LLC", network: PaymentMethodNetwork.AMEX},

  // 11. HSRC Nordic AB (SE) - İsveç
  { prefix: "551110", iin: 551110, phone: "+46855512345", type: "DEBIT", brand: "KLARNA STYLE", country: "se", issuer: "HSRC Nordic AB", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "551111", iin: 551111, phone: "+46855512345", type: "CREDIT", brand: "VIKING GOLD", country: "se", issuer: "HSRC Nordic AB", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "451112", iin: 451112, phone: "+46855512345", type: "DEBIT", brand: "STOCKHOLM PASS", country: "se", issuer: "HSRC Nordic AB", network: PaymentMethodNetwork.VISA},
  { prefix: "451113", iin: 451113, phone: "+46855512345", type: "PREPAID", brand: "ICE BLUE", country: "se", issuer: "HSRC Nordic AB", network: PaymentMethodNetwork.VISA},
  { prefix: "551114", iin: 551114, phone: "+46855512345", type: "CREDIT", brand: "SCANDIC ELITE", country: "se", issuer: "HSRC Nordic AB", network: PaymentMethodNetwork.MASTERCARD},

  // 12. HSRC Brasil Ltda (BR) - Brezilya
  { prefix: "461220", iin: 461220, phone: "+551133334444", type: "CREDIT", brand: "SAMBA PLATINUM", country: "br", issuer: "HSRC Brasil Ltda", network: PaymentMethodNetwork.VISA},
  { prefix: "461221", iin: 461221, phone: "+551133334444", type: "DEBIT", brand: "REAL SAVE", country: "br", issuer: "HSRC Brasil Ltda", network: PaymentMethodNetwork.VISA},
  { prefix: "561222", iin: 561222, phone: "+551133334444", type: "CREDIT", brand: "AMAZON BLACK", country: "br", issuer: "HSRC Brasil Ltda", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "561223", iin: 561223, phone: "+551133334444", type: "CREDIT", brand: "CARNAVAL GOLD", country: "br", issuer: "HSRC Brasil Ltda", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "461224", iin: 461224, phone: "+551133334444", type: "DEBIT", brand: "RIO CONNECT", country: "br", issuer: "HSRC Brasil Ltda", network: PaymentMethodNetwork.VISA},

  // 13. H.S.R.C. Capital Group (UK)
  { prefix: "471330", iin: 471330, phone: "+442078889999", type: "CREDIT", brand: "HEDGE FUND", country: "GB", issuer: "H.S.R.C. Capital Group", network: PaymentMethodNetwork.VISA},
  { prefix: "471331", iin: 471331, phone: "+442078889999", type: "CREDIT", brand: "STERLING ELITE", country: "GB", issuer: "H.S.R.C. Capital Group", network: PaymentMethodNetwork.VISA},
  { prefix: "571332", iin: 571332, phone: "+442078889999", type: "CREDIT", brand: "PRIVATE BANKING", country: "GB", issuer: "H.S.R.C. Capital Group", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "371333", iin: 371333, phone: "+442078889999", type: "CREDIT", brand: "AMEX CENTURION FAKE", country: "GB", issuer: "H.S.R.C. Capital Group", network: PaymentMethodNetwork.AMEX},
  { prefix: "571334", iin: 571334, phone: "+442078889999", type: "DEBIT", brand: "CAPITAL ACCESS", country: "GB", issuer: "H.S.R.C. Capital Group", network: PaymentMethodNetwork.MASTERCARD},

  // 14. Hsrc Payment Gateway Corp (US)
  { prefix: "421440", iin: 421440, phone: "+18005556666", type: "DEBIT", brand: "E-CHECK", country: "US", issuer: "Hsrc Payment Gateway Corp", network: PaymentMethodNetwork.VISA},
  { prefix: "421441", iin: 421441, phone: "+18005556666", type: "PREPAID", brand: "MERCHANT PAY", country: "US", issuer: "Hsrc Payment Gateway Corp", network: PaymentMethodNetwork.VISA},
  { prefix: "521442", iin: 521442, phone: "+18005556666", type: "CREDIT", brand: "BUSINESS FLOW", country: "US", issuer: "Hsrc Payment Gateway Corp", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "601443", iin: 601443, phone: "+18005556666", type: "CREDIT", brand: "DISCOVER NETWORK", country: "US", issuer: "Hsrc Payment Gateway Corp", network: PaymentMethodNetwork.DISCOVER},
  { prefix: "421444", iin: 421444, phone: "+18005556666", type: "CREDIT", brand: "GATEWAY GOLD", country: "US", issuer: "Hsrc Payment Gateway Corp", network: PaymentMethodNetwork.VISA},

  // 15. H-Wallet Innovations Sp. z o.o. (PL) - Polonya
  { prefix: "531550", iin: 531550, phone: "+48221234567", type: "DEBIT", brand: "ZLOTY PAY", country: "pl", issuer: "H-Wallet Innovations Sp. z o.o.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "531551", iin: 531551, phone: "+48221234567", type: "CREDIT", brand: "WARSAW BUSINESS", country: "pl", issuer: "H-Wallet Innovations Sp. z o.o.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "431552", iin: 431552, phone: "+48221234567", type: "DEBIT", brand: "STUDENT PL", country: "pl", issuer: "H-Wallet Innovations Sp. z o.o.", network: PaymentMethodNetwork.VISA},
  { prefix: "431553", iin: 431553, phone: "+48221234567", type: "PREPAID", brand: "VIRTUAL PL", country: "pl", issuer: "H-Wallet Innovations Sp. z o.o.", network: PaymentMethodNetwork.VISA},
  { prefix: "531554", iin: 531554, phone: "+48221234567", type: "CREDIT", brand: "TECH POLAND", country: "pl", issuer: "H-Wallet Innovations Sp. z o.o.", network: PaymentMethodNetwork.MASTERCARD},

  // 16. HSRC Italia S.r.l. (IT) - İtalya
  { prefix: "441660", iin: 441660, phone: "+390612345678", type: "CREDIT", brand: "ROMA PLATINUM", country: "IT", issuer: "HSRC Italia S.r.l.", network: PaymentMethodNetwork.VISA},
  { prefix: "441661", iin: 441661, phone: "+390612345678", type: "DEBIT", brand: "MILANO STYLE", country: "IT", issuer: "HSRC Italia S.r.l.", network: PaymentMethodNetwork.VISA},
  { prefix: "541662", iin: 541662, phone: "+390612345678", type: "CREDIT", brand: "AZZURRI GOLD", country: "IT", issuer: "HSRC Italia S.r.l.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "541663", iin: 541663, phone: "+390612345678", type: "PREPAID", brand: "PREPAID EURO", country: "IT", issuer: "HSRC Italia S.r.l.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "441664", iin: 441664, phone: "+390612345678", type: "CREDIT", brand: "BUSINESS IT", country: "IT", issuer: "HSRC Italia S.r.l.", network: PaymentMethodNetwork.VISA},

  // 17. HSRC Canada Inc. (CA) - Kanada
  { prefix: "451770", iin: 451770, phone: "+14165551234", type: "CREDIT", brand: "MAPLE LEAF", country: "ca", issuer: "HSRC Canada Inc.", network: PaymentMethodNetwork.VISA},
  { prefix: "451771", iin: 451771, phone: "+14165551234", type: "DEBIT", brand: "INTERAC H-LINK", country: "ca", issuer: "HSRC Canada Inc.", network: PaymentMethodNetwork.VISA},
  { prefix: "551772", iin: 551772, phone: "+14165551234", type: "CREDIT", brand: "TORONTO ELITE", country: "ca", issuer: "HSRC Canada Inc.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "551773", iin: 551773, phone: "+14165551234", type: "DEBIT", brand: "SNOW SAVER", country: "ca", issuer: "HSRC Canada Inc.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "371774", iin: 371774, phone: "+14165551234", type: "CREDIT", brand: "AMEX CANADA H", country: "ca", issuer: "HSRC Canada Inc.", network: PaymentMethodNetwork.AMEX},

  // 18. hsrc smart pay AG (CH) - İsviçre
  { prefix: "461880", iin: 461880, phone: "+41441234567", type: "CREDIT", brand: "SWISS GOLD", country: "CH", issuer: "hsrc smart pay AG", network: PaymentMethodNetwork.VISA},
  { prefix: "461881", iin: 461881, phone: "+41441234567", type: "DEBIT", brand: "FRANC CONNECT", country: "CH", issuer: "hsrc smart pay AG", network: PaymentMethodNetwork.VISA},
  { prefix: "561882", iin: 561882, phone: "+41441234567", type: "CREDIT", brand: "ALPS INFINITE", country: "CH", issuer: "hsrc smart pay AG", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "561883", iin: 561883, phone: "+41441234567", type: "CREDIT", brand: "ZURICH PRIVATE", country: "CH", issuer: "hsrc smart pay AG", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "461884", iin: 461884, phone: "+41441234567", type: "DEBIT", brand: "SECURE PAY", country: "CH", issuer: "hsrc smart pay AG", network: PaymentMethodNetwork.VISA},

  // 19. HSRC Middle East FZ-LLC (AE) - Dubai
  { prefix: "471990", iin: 471990, phone: "+97141234567", type: "CREDIT", brand: "DESERT FALCON", country: "AE", issuer: "HSRC Middle East FZ-LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "471991", iin: 471991, phone: "+97141234567", type: "DEBIT", brand: "DUBAI SHOPPER", country: "AE", issuer: "HSRC Middle East FZ-LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "571992", iin: 571992, phone: "+97141234567", type: "CREDIT", brand: "EMIRATES ELITE", country: "AE", issuer: "HSRC Middle East FZ-LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "571993", iin: 571993, phone: "+97141234567", type: "PREPAID", brand: "WORKER PAY", country: "AE", issuer: "HSRC Middle East FZ-LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "471994", iin: 471994, phone: "+97141234567", type: "CREDIT", brand: "LUXURY BLACK", country: "AE", issuer: "HSRC Middle East FZ-LLC", network: PaymentMethodNetwork.VISA},

  // 20. H-Nova Credit Union (AU) - Avustralya
  { prefix: "482000", iin: 482000, phone: "+61212345678", type: "DEBIT", brand: "AUSSIE SAVER", country: "AU", issuer: "H-Nova Credit Union", network: PaymentMethodNetwork.VISA},
  { prefix: "482001", iin: 482001, phone: "+61212345678", type: "CREDIT", brand: "SURF GOLD", country: "AU", issuer: "H-Nova Credit Union", network: PaymentMethodNetwork.VISA},
  { prefix: "582002", iin: 582002, phone: "+61212345678", type: "CREDIT", brand: "SYDNEY SELECT", country: "AU", issuer: "H-Nova Credit Union", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "582003", iin: 582003, phone: "+61212345678", type: "DEBIT", brand: "KANGAROO CASH", country: "AU", issuer: "H-Nova Credit Union", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "482004", iin: 482004, phone: "+61212345678", type: "CREDIT", brand: "PACIFIC REWARDS", country: "AU", issuer: "H-Nova Credit Union", network: PaymentMethodNetwork.VISA},

  // 21. HSRC Pacific Pty Ltd (NZ) - Yeni Zelanda
  { prefix: "492110", iin: 492110, phone: "+6491234567", type: "CREDIT", brand: "KIWI SILVER", country: "NZ", issuer: "HSRC Pacific Pty Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "492111", iin: 492111, phone: "+6491234567", type: "DEBIT", brand: "AUCKLAND ACC", country: "NZ", issuer: "HSRC Pacific Pty Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "592112", iin: 592112, phone: "+6491234567", type: "CREDIT", brand: "ALL BLACKS ED.", country: "NZ", issuer: "HSRC Pacific Pty Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "592113", iin: 592113, phone: "+6491234567", type: "DEBIT", brand: "ISLAND PAY", country: "NZ", issuer: "HSRC Pacific Pty Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "492114", iin: 492114, phone: "+6491234567", type: "CREDIT", brand: "BUSINESS NZ", country: "NZ", issuer: "HSRC Pacific Pty Ltd", network: PaymentMethodNetwork.VISA},

  // 22. Hsrc Direct Bank (FR) - Fransa
  { prefix: "412220", iin: 412220, phone: "+33123456789", type: "DEBIT", brand: "CARTE BLEUE H", country: "FR", issuer: "Hsrc Direct Bank", network: PaymentMethodNetwork.VISA},
  { prefix: "412221", iin: 412221, phone: "+33123456789", type: "CREDIT", brand: "PARIS PREMIER", country: "FR", issuer: "Hsrc Direct Bank", network: PaymentMethodNetwork.VISA},
  { prefix: "512222", iin: 512222, phone: "+33123456789", type: "CREDIT", brand: "RIVIERA GOLD", country: "FR", issuer: "Hsrc Direct Bank", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "512223", iin: 512223, phone: "+33123456789", type: "DEBIT", brand: "EURO CHECK", country: "FR", issuer: "Hsrc Direct Bank", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "412224", iin: 412224, phone: "+33123456789", type: "CREDIT", brand: "FASHION WEEK", country: "FR", issuer: "Hsrc Direct Bank", network: PaymentMethodNetwork.VISA},

  // 23. H.S.R.C. Fintech Solutions (JP) - Japonya
  { prefix: "422330", iin: 422330, phone: "+81312345678", type: "CREDIT", brand: "TOKYO PLATINUM", country: "jp", issuer: "H.S.R.C. Fintech Solutions", network: PaymentMethodNetwork.VISA},
  { prefix: "352331", iin: 352331, phone: "+81312345678", type: "CREDIT", brand: "JCB H-LINK (Fake)", country: "jp", issuer: "H.S.R.C. Fintech Solutions", network: PaymentMethodNetwork.JCB}, // JCB genellikle 35 ile başlar ama Visa altyapısında simüle ediyoruz
  { prefix: "522332", iin: 522332, phone: "+81312345678", type: "CREDIT", brand: "SAMURAI BLACK", country: "jp", issuer: "H.S.R.C. Fintech Solutions", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "522333", iin: 522333, phone: "+81312345678", type: "DEBIT", brand: "YEN SAVER", country: "jp", issuer: "H.S.R.C. Fintech Solutions", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "422334", iin: 422334, phone: "+81312345678", type: "PREPAID", brand: "ANIME FAN", country: "jp", issuer: "H.S.R.C. Fintech Solutions", network: PaymentMethodNetwork.VISA},

  // 24. HSRCPAY Mexico S.A. de C.V. (MX)
  { prefix: "432440", iin: 432440, phone: "+525512345678", type: "CREDIT", brand: "PESO ORO", country: "mx", issuer: "HSRCPAY Mexico S.A. de C.V.", network: PaymentMethodNetwork.VISA},
  { prefix: "432441", iin: 432441, phone: "+525512345678", type: "DEBIT", brand: "CANCUN DEBIT", country: "mx", issuer: "HSRCPAY Mexico S.A. de C.V.", network: PaymentMethodNetwork.VISA},
  { prefix: "532442", iin: 532442, phone: "+525512345678", type: "CREDIT", brand: "AZTEC ELITE", country: "mx", issuer: "HSRCPAY Mexico S.A. de C.V.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "532443", iin: 532443, phone: "+525512345678", type: "DEBIT", brand: "FIESTA PAY", country: "mx", issuer: "HSRCPAY Mexico S.A. de C.V.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "432444", iin: 432444, phone: "+525512345678", type: "CREDIT", brand: "NEGOCIOS MX", country: "mx", issuer: "HSRCPAY Mexico S.A. de C.V.", network: PaymentMethodNetwork.VISA},

  // 25. HSRC Private Banking Corp (US)
  { prefix: "372550", iin: 372550, phone: "+18881234567", type: "CREDIT", brand: "AMEX BLACK HSRC", country: "US", issuer: "HSRC Private Banking Corp", network: PaymentMethodNetwork.AMEX},
  { prefix: "372551", iin: 372551, phone: "+18881234567", type: "CREDIT", brand: "AMEX PLATINUM HSRC", country: "US", issuer: "HSRC Private Banking Corp", network: PaymentMethodNetwork.AMEX},
  { prefix: "472552", iin: 472552, phone: "+18881234567", type: "CREDIT", brand: "VISA INFINITE PRIV", country: "US", issuer: "HSRC Private Banking Corp", network: PaymentMethodNetwork.VISA},
  { prefix: "572553", iin: 572553, phone: "+18881234567", type: "CREDIT", brand: "WORLD ELITE MC", country: "US", issuer: "HSRC Private Banking Corp", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "602554", iin: 602554, phone: "+18881234567", type: "CREDIT", brand: "DISCOVER PRIVATE", country: "US", issuer: "HSRC Private Banking Corp", network: PaymentMethodNetwork.DISCOVER},

  // 26. HSRC Africa Ltd (ZA) - Güney Afrika
  { prefix: "482660", iin: 482660, phone: "+27111234567", type: "CREDIT", brand: "CAPE TOWN GOLD", country: "za", issuer: "HSRC Africa Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "482661", iin: 482661, phone: "+27111234567", type: "DEBIT", brand: "SAFARI SAVE", country: "za", issuer: "HSRC Africa Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "582662", iin: 582662, phone: "+27111234567", type: "CREDIT", brand: "RAND REWARDS", country: "za", issuer: "HSRC Africa Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "582663", iin: 582663, phone: "+27111234567", type: "DEBIT", brand: "JOBURG CONNECT", country: "za", issuer: "HSRC Africa Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "482664", iin: 482664, phone: "+27111234567", type: "PREPAID", brand: "UBUNTU CARD", country: "za", issuer: "HSRC Africa Ltd", network: PaymentMethodNetwork.VISA},

  // 27. HSRC Digital India Pvt Ltd (IN) - Hindistan
  { prefix: "492770", iin: 492770, phone: "+912212345678", type: "CREDIT", brand: "MUMBAI PLATINUM", country: "in", issuer: "HSRC Digital India Pvt Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "492771", iin: 492771, phone: "+912212345678", type: "DEBIT", brand: "RUPEE LINK", country: "in", issuer: "HSRC Digital India Pvt Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "592772", iin: 592772, phone: "+912212345678", type: "CREDIT", brand: "TECH CITY GOLD", country: "in", issuer: "HSRC Digital India Pvt Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "592773", iin: 592773, phone: "+912212345678", type: "DEBIT", brand: "BOLLYWOOD PAY", country: "in", issuer: "HSRC Digital India Pvt Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "492774", iin: 492774, phone: "+912212345678", type: "CREDIT", brand: "CRICKET CLUB", country: "in", issuer: "HSRC Digital India Pvt Ltd", network: PaymentMethodNetwork.VISA},

  // 28. H. Nova Spain S.A. (ES) - İspanya
  { prefix: "412880", iin: 412880, phone: "+34911234567", type: "CREDIT", brand: "MADRID REAL", country: "es", issuer: "H. Nova Spain S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "412881", iin: 412881, phone: "+34911234567", type: "DEBIT", brand: "SIESTA DEBIT", country: "es", issuer: "H. Nova Spain S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "512882", iin: 512882, phone: "+34911234567", type: "CREDIT", brand: "IBIZA PARTY", country: "es", issuer: "H. Nova Spain S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "512883", iin: 512883, phone: "+34911234567", type: "PREPAID", brand: "TAPAS CARD", country: "es", issuer: "H. Nova Spain S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "412884", iin: 412884, phone: "+34911234567", type: "CREDIT", brand: "BARCELONA BIZ", country: "es", issuer: "H. Nova Spain S.A.", network: PaymentMethodNetwork.VISA},

  // 29. HSRC Russia LLC (RU) - Rusya
  { prefix: "422990", iin: 422990, phone: "+74951234567", type: "CREDIT", brand: "MOSCOW ELITE", country: "ru", issuer: "HSRC Russia LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "422991", iin: 422991, phone: "+74951234567", type: "DEBIT", brand: "RUBLE DIRECT", country: "ru", issuer: "HSRC Russia LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "522992", iin: 522992, phone: "+74951234567", type: "CREDIT", brand: "SIBERIA GOLD", country: "ru", issuer: "HSRC Russia LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "522993", iin: 522993, phone: "+74951234567", type: "DEBIT", brand: "MIR COMPATIBLE", country: "ru", issuer: "HSRC Russia LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "422994", iin: 422994, phone: "+74951234567", type: "PREPAID", brand: "RED SQUARE", country: "ru", issuer: "HSRC Russia LLC", network: PaymentMethodNetwork.VISA},

  // 30. HSRC Hong Kong Ltd (HK)
  { prefix: "433000", iin: 433000, phone: "+85212345678", type: "CREDIT", brand: "HK DOLLAR GOLD", country: "hk", issuer: "HSRC Hong Kong Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "623001", iin: 623001, phone: "+85212345678", type: "DEBIT", brand: "UNION PAY HK", country: "hk", issuer: "HSRC Hong Kong Ltd", network: PaymentMethodNetwork.UNIONPAY},
  { prefix: "533002", iin: 533002, phone: "+85212345678", type: "CREDIT", brand: "VICTORIA HARBOUR", country: "hk", issuer: "HSRC Hong Kong Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "533003", iin: 533003, phone: "+85212345678", type: "DEBIT", brand: "DIM SUM PAY", country: "hk", issuer: "HSRC Hong Kong Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "433004", iin: 433004, phone: "+85212345678", type: "CREDIT", brand: "FINANCE HUB", country: "hk", issuer: "HSRC Hong Kong Ltd", network: PaymentMethodNetwork.VISA},

  // 31. hsrc Korea Inc. (KR) - Güney Kore
  { prefix: "443110", iin: 443110, phone: "+82212345678", type: "CREDIT", brand: "SEOUL STYLE", country: "kr", issuer: "hsrc Korea Inc.", network: PaymentMethodNetwork.VISA},
  { prefix: "443111", iin: 443111, phone: "+82212345678", type: "DEBIT", brand: "K-POP FAN", country: "kr", issuer: "hsrc Korea Inc.", network: PaymentMethodNetwork.VISA},
  { prefix: "543112", iin: 543112, phone: "+82212345678", type: "CREDIT", brand: "GANGNAM ELITE", country: "kr", issuer: "hsrc Korea Inc.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "543113", iin: 543113, phone: "+82212345678", type: "DEBIT", brand: "WON WALLET", country: "kr", issuer: "hsrc Korea Inc.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "443114", iin: 443114, phone: "+82212345678", type: "PREPAID", brand: "GAMING KR", country: "kr", issuer: "hsrc Korea Inc.", network: PaymentMethodNetwork.VISA},

  // 32. HSRC Argentina S.A. (AR)
  { prefix: "453220", iin: 453220, phone: "+541112345678", type: "CREDIT", brand: "TANGO GOLD", country: "ar", issuer: "HSRC Argentina S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "453221", iin: 453221, phone: "+541112345678", type: "DEBIT", brand: "BUENOS AIRES", country: "ar", issuer: "HSRC Argentina S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "553222", iin: 553222, phone: "+541112345678", type: "CREDIT", brand: "PAMPAS CLUB", country: "ar", issuer: "HSRC Argentina S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "553223", iin: 553223, phone: "+541112345678", type: "DEBIT", brand: "PESO ARG", country: "ar", issuer: "HSRC Argentina S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "453224", iin: 453224, phone: "+541112345678", type: "CREDIT", brand: "LATAM BIZ", country: "ar", issuer: "HSRC Argentina S.A.", network: PaymentMethodNetwork.VISA},

  // 33. HSRC Belgium NV (BE)
  { prefix: "463330", iin: 463330, phone: "+3221234567", type: "CREDIT", brand: "BRUSSELS EU", country: "be", issuer: "HSRC Belgium NV", network: PaymentMethodNetwork.VISA},
  { prefix: "463331", iin: 463331, phone: "+3221234567", type: "DEBIT", brand: "CHOCO PAY", country: "be", issuer: "HSRC Belgium NV", network: PaymentMethodNetwork.VISA},
  { prefix: "563332", iin: 563332, phone: "+3221234567", type: "CREDIT", brand: "DIAMOND CUT", country: "be", issuer: "HSRC Belgium NV", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "563333", iin: 563333, phone: "+3221234567", type: "DEBIT", brand: "WAFFLE SAVE", country: "be", issuer: "HSRC Belgium NV", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "463334", iin: 463334, phone: "+3221234567", type: "PREPAID", brand: "STUDENT BE", country: "be", issuer: "HSRC Belgium NV", network: PaymentMethodNetwork.VISA},

  // 34. H-Cloud Bank Corp (US) - Tam Dijital
  { prefix: "473440", iin: 473440, phone: "+1800CLOUD99", type: "CREDIT", brand: "SERVER BLACK", country: "US", issuer: "H-Cloud Bank Corp", network: PaymentMethodNetwork.VISA},
  { prefix: "473441", iin: 473441, phone: "+1800CLOUD99", type: "DEBIT", brand: "DATA STREAM", country: "US", issuer: "H-Cloud Bank Corp", network: PaymentMethodNetwork.VISA},
  { prefix: "573442", iin: 573442, phone: "+1800CLOUD99", type: "CREDIT", brand: "UPLINK GOLD", country: "US", issuer: "H-Cloud Bank Corp", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "603443", iin: 603443, phone: "+1800CLOUD99", type: "CREDIT", brand: "DISCOVER CLOUD", country: "US", issuer: "H-Cloud Bank Corp", network: PaymentMethodNetwork.DISCOVER},
  { prefix: "473444", iin: 473444, phone: "+1800CLOUD99", type: "DEBIT", brand: "BIT-PAY", country: "US", issuer: "H-Cloud Bank Corp", network: PaymentMethodNetwork.VISA},

  // 35. HSRC Saudi Arabia LLC (SA)
  { prefix: "483550", iin: 483550, phone: "+966112345678", type: "CREDIT", brand: "RIYADH ROYAL", country: "sa", issuer: "HSRC Saudi Arabia LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "483551", iin: 483551, phone: "+966112345678", type: "DEBIT", brand: "ARABIAN GULF", country: "sa", issuer: "HSRC Saudi Arabia LLC", network: PaymentMethodNetwork.VISA},
  { prefix: "583552", iin: 583552, phone: "+966112345678", type: "CREDIT", brand: "OIL GOLD", country: "sa", issuer: "HSRC Saudi Arabia LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "583553", iin: 583553, phone: "+966112345678", type: "DEBIT", brand: "SAND PAY", country: "sa", issuer: "HSRC Saudi Arabia LLC", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "483554", iin: 483554, phone: "+966112345678", type: "PREPAID", brand: "HAJJ CARD", country: "sa", issuer: "HSRC Saudi Arabia LLC", network: PaymentMethodNetwork.VISA},

  // 36. HSRC Portugal S.A. (PT)
  { prefix: "493660", iin: 493660, phone: "+351211234567", type: "CREDIT", brand: "LISBON SUN", country: "pt", issuer: "HSRC Portugal S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "493661", iin: 493661, phone: "+351211234567", type: "DEBIT", brand: "PORTO WINE", country: "pt", issuer: "HSRC Portugal S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "593662", iin: 593662, phone: "+351211234567", type: "CREDIT", brand: "ATLANTIC GOLD", country: "pt", issuer: "HSRC Portugal S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "593663", iin: 593663, phone: "+351211234567", type: "DEBIT", brand: "IBERIAN DEBIT", country: "pt", issuer: "HSRC Portugal S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "493664", iin: 493664, phone: "+351211234567", type: "CREDIT", brand: "FADO CLASSIC", country: "pt", issuer: "HSRC Portugal S.A.", network: PaymentMethodNetwork.VISA},

  // 37. H. Nova Greece S.A. (GR)
  { prefix: "413770", iin: 413770, phone: "+302101234567", type: "CREDIT", brand: "ATHENS ACROPOLIS", country: "gr", issuer: "H. Nova Greece S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "413771", iin: 413771, phone: "+302101234567", type: "DEBIT", brand: "ISLAND HOPPER", country: "gr", issuer: "H. Nova Greece S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "513772", iin: 513772, phone: "+302101234567", type: "CREDIT", brand: "OLYMPUS GOLD", country: "gr", issuer: "H. Nova Greece S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "513773", iin: 513773, phone: "+302101234567", type: "DEBIT", brand: "EURO GREECE", country: "gr", issuer: "H. Nova Greece S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "413774", iin: 413774, phone: "+302101234567", type: "PREPAID", brand: "SUMMER GR", country: "gr", issuer: "H. Nova Greece S.A.", network: PaymentMethodNetwork.VISA},

  // 38. HSRC Ireland Ltd (IE)
  { prefix: "423880", iin: 423880, phone: "+35311234567", type: "CREDIT", brand: "DUBLIN TECH", country: "ie", issuer: "HSRC Ireland Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "423881", iin: 423881, phone: "+35311234567", type: "DEBIT", brand: "SHAMROCK SAVE", country: "ie", issuer: "HSRC Ireland Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "523882", iin: 523882, phone: "+35311234567", type: "CREDIT", brand: "CELTIC TIGER", country: "ie", issuer: "HSRC Ireland Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "523883", iin: 523883, phone: "+35311234567", type: "DEBIT", brand: "EURO GREEN", country: "ie", issuer: "HSRC Ireland Ltd", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "423884", iin: 423884, phone: "+35311234567", type: "CREDIT", brand: "BUSINESS IE", country: "ie", issuer: "HSRC Ireland Ltd", network: PaymentMethodNetwork.VISA},

  // 39. HSRC Egypt SAE (EG)
  { prefix: "433990", iin: 433990, phone: "+20212345678", type: "CREDIT", brand: "PHARAOH GOLD", country: "eg", issuer: "HSRC Egypt SAE", network: PaymentMethodNetwork.VISA},
  { prefix: "433991", iin: 433991, phone: "+20212345678", type: "DEBIT", brand: "NILE DIRECT", country: "eg", issuer: "HSRC Egypt SAE", network: PaymentMethodNetwork.VISA},
  { prefix: "533992", iin: 533992, phone: "+20212345678", type: "CREDIT", brand: "PYRAMID ELITE", country: "eg", issuer: "HSRC Egypt SAE", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "533993", iin: 533993, phone: "+20212345678", type: "DEBIT", brand: "CAIRO CASH", country: "eg", issuer: "HSRC Egypt SAE", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "433994", iin: 433994, phone: "+20212345678", type: "PREPAID", brand: "RED SEA PASS", country: "eg", issuer: "HSRC Egypt SAE", network: PaymentMethodNetwork.VISA},

  // 40. H-Mobile Pay Systems (TR) - GSM Operatörü Bazlı Kurgu
  { prefix: "409000", iin: 409000, phone: "+905321112233", type: "PREPAID", brand: "H-CELL CÜZDAN", country: "TR", issuer: "H-Mobile Pay Systems", network: PaymentMethodNetwork.VISA},
  { prefix: "409001", iin: 409001, phone: "+905321112233", type: "DEBIT", brand: "H-CELL GENÇ", country: "TR", issuer: "H-Mobile Pay Systems", network: PaymentMethodNetwork.VISA},
  { prefix: "509002", iin: 509002, phone: "+905321112233", type: "PREPAID", brand: "H-CELL HEDİYE", country: "TR", issuer: "H-Mobile Pay Systems", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "509003", iin: 509003, phone: "+905321112233", type: "CREDIT", brand: "FATURA KART", country: "TR", issuer: "H-Mobile Pay Systems", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "409004", iin: 409004, phone: "+905321112233", type: "DEBIT", brand: "DİJİTAL BAKİYE", country: "TR", issuer: "H-Mobile Pay Systems", network: PaymentMethodNetwork.VISA},

  // 41. HSRC Austria GmbH (AT)
  { prefix: "444110", iin: 444110, phone: "+4311234567", type: "CREDIT", brand: "VIENNA WALTZ", country: "at", issuer: "HSRC Austria GmbH", network: PaymentMethodNetwork.VISA},
  { prefix: "444111", iin: 444111, phone: "+4311234567", type: "DEBIT", brand: "ALPINE CASH", country: "at", issuer: "HSRC Austria GmbH", network: PaymentMethodNetwork.VISA},
  { prefix: "544112", iin: 544112, phone: "+4311234567", type: "CREDIT", brand: "OPERA GOLD", country: "at", issuer: "HSRC Austria GmbH", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "544113", iin: 544113, phone: "+4311234567", type: "DEBIT", brand: "SKI PASS PAY", country: "at", issuer: "HSRC Austria GmbH", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "444114", iin: 444114, phone: "+4311234567", type: "CREDIT", brand: "BUSINESS AT", country: "at", issuer: "HSRC Austria GmbH", network: PaymentMethodNetwork.VISA},

  // 42. HSRC Denmark ApS (DK)
  { prefix: "454220", iin: 454220, phone: "+4512345678", type: "CREDIT", brand: "COPENHAGEN ROYAL", country: "dk", issuer: "HSRC Denmark ApS", network: PaymentMethodNetwork.VISA},
  { prefix: "454221", iin: 454221, phone: "+4512345678", type: "DEBIT", brand: "DANKORT H", country: "dk", issuer: "HSRC Denmark ApS", network: PaymentMethodNetwork.VISA},
  { prefix: "554222", iin: 554222, phone: "+4512345678", type: "CREDIT", brand: "VIKING PLUS", country: "dk", issuer: "HSRC Denmark ApS", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "554223", iin: 554223, phone: "+4512345678", type: "DEBIT", brand: "LEGO LAND PAY", country: "dk", issuer: "HSRC Denmark ApS", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "454224", iin: 454224, phone: "+4512345678", type: "PREPAID", brand: "HYGGE CARD", country: "dk", issuer: "HSRC Denmark ApS", network: PaymentMethodNetwork.VISA},

  // 43. HSRC Norway AS (NO)
  { prefix: "464330", iin: 464330, phone: "+4721234567", type: "CREDIT", brand: "OSLO FJORD", country: "no", issuer: "HSRC Norway AS", network: PaymentMethodNetwork.VISA},
  { prefix: "464331", iin: 464331, phone: "+4721234567", type: "DEBIT", brand: "KRONE CONNECT", country: "no", issuer: "HSRC Norway AS", network: PaymentMethodNetwork.VISA},
  { prefix: "564332", iin: 564332, phone: "+4721234567", type: "CREDIT", brand: "NORTHERN LIGHTS", country: "no", issuer: "HSRC Norway AS", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "564333", iin: 564333, phone: "+4721234567", type: "DEBIT", brand: "OIL FUND", country: "no", issuer: "HSRC Norway AS", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "464334", iin: 464334, phone: "+4721234567", type: "CREDIT", brand: "SCANDINAVIA BIZ", country: "no", issuer: "HSRC Norway AS", network: PaymentMethodNetwork.VISA},

  // 44. H. Nova Finland Oy (FI)
  { prefix: "474440", iin: 474440, phone: "+35891234567", type: "CREDIT", brand: "HELSINKI ICE", country: "fi", issuer: "H. Nova Finland Oy", network: PaymentMethodNetwork.VISA},
  { prefix: "474441", iin: 474441, phone: "+35891234567", type: "DEBIT", brand: "SAUNA DEBIT", country: "fi", issuer: "H. Nova Finland Oy", network: PaymentMethodNetwork.VISA},
  { prefix: "574442", iin: 574442, phone: "+35891234567", type: "CREDIT", brand: "NOKIA HERITAGE", country: "fi", issuer: "H. Nova Finland Oy", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "574443", iin: 574443, phone: "+35891234567", type: "DEBIT", brand: "LAPLAND PAY", country: "fi", issuer: "H. Nova Finland Oy", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "474444", iin: 474444, phone: "+35891234567", type: "PREPAID", brand: "STUDENT FI", country: "fi", issuer: "H. Nova Finland Oy", network: PaymentMethodNetwork.VISA},

  // 45. HSRC Romania S.A. (RO)
  { prefix: "484550", iin: 484550, phone: "+40211234567", type: "CREDIT", brand: "BUCHAREST GOLD", country: "ro", issuer: "HSRC Romania S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "484551", iin: 484551, phone: "+40211234567", type: "DEBIT", brand: "LEU DIRECT", country: "ro", issuer: "HSRC Romania S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "584552", iin: 584552, phone: "+40211234567", type: "CREDIT", brand: "TRANSYLVANIA", country: "ro", issuer: "HSRC Romania S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "584553", iin: 584553, phone: "+40211234567", type: "DEBIT", brand: "ROMANIAN PAY", country: "ro", issuer: "HSRC Romania S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "484554", iin: 484554, phone: "+40211234567", type: "CREDIT", brand: "BUSINESS RO", country: "ro", issuer: "HSRC Romania S.A.", network: PaymentMethodNetwork.VISA},

  // 46. HSRC Hungary Zrt. (HU)
  { prefix: "494660", iin: 494660, phone: "+3611234567", type: "CREDIT", brand: "BUDAPEST PEARL", country: "hu", issuer: "HSRC Hungary Zrt.", network: PaymentMethodNetwork.VISA},
  { prefix: "494661", iin: 494661, phone: "+3611234567", type: "DEBIT", brand: "FORINT SAVE", country: "hu", issuer: "HSRC Hungary Zrt.", network: PaymentMethodNetwork.VISA},
  { prefix: "594662", iin: 594662, phone: "+3611234567", type: "CREDIT", brand: "DANUBE BLUE", country: "hu", issuer: "HSRC Hungary Zrt.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "594663", iin: 594663, phone: "+3611234567", type: "DEBIT", brand: "MAGYAR PAY", country: "hu", issuer: "HSRC Hungary Zrt.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "494664", iin: 494664, phone: "+3611234567", type: "PREPAID", brand: "SPA CARD", country: "hu", issuer: "HSRC Hungary Zrt.", network: PaymentMethodNetwork.VISA},

  // 47. HSRC Czech Republic a.s. (CZ)
  { prefix: "414770", iin: 414770, phone: "+420212345678", type: "CREDIT", brand: "PRAGUE CASTLE", country: "cz", issuer: "HSRC Czech Republic a.s.", network: PaymentMethodNetwork.VISA},
  { prefix: "414771", iin: 414771, phone: "+420212345678", type: "DEBIT", brand: "KORUNA CHECK", country: "cz", issuer: "HSRC Czech Republic a.s.", network: PaymentMethodNetwork.VISA},
  { prefix: "514772", iin: 514772, phone: "+420212345678", type: "CREDIT", brand: "BOHEMIA GOLD", country: "cz", issuer: "HSRC Czech Republic a.s.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "514773", iin: 514773, phone: "+420212345678", type: "DEBIT", brand: "CZECH POINT", country: "cz", issuer: "HSRC Czech Republic a.s.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "414774", iin: 414774, phone: "+420212345678", type: "CREDIT", brand: "BUSINESS CZ", country: "cz", issuer: "HSRC Czech Republic a.s.", network: PaymentMethodNetwork.VISA},

  // 48. H. Nova Chile SpA (CL)
  { prefix: "424880", iin: 424880, phone: "+56221234567", type: "CREDIT", brand: "ANDES PLATINUM", country: "cl", issuer: "H. Nova Chile SpA", network: PaymentMethodNetwork.VISA},
  { prefix: "424881", iin: 424881, phone: "+56221234567", type: "DEBIT", brand: "SANTIAGO PAY", country: "cl", issuer: "H. Nova Chile SpA", network: PaymentMethodNetwork.VISA},
  { prefix: "524882", iin: 524882, phone: "+56221234567", type: "CREDIT", brand: "CHILE GOLD", country: "cl", issuer: "H. Nova Chile SpA", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "524883", iin: 524883, phone: "+56221234567", type: "DEBIT", brand: "PESO CL", country: "cl", issuer: "H. Nova Chile SpA", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "424884", iin: 424884, phone: "+56221234567", type: "CREDIT", brand: "PACIFIC COAST", country: "cl", issuer: "H. Nova Chile SpA", network: PaymentMethodNetwork.VISA},

  // 49. HSRC Colombia S.A. (CO)
  { prefix: "434990", iin: 434990, phone: "+5712345678", type: "CREDIT", brand: "BOGOTA ELITE", country: "co", issuer: "HSRC Colombia S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "434991", iin: 434991, phone: "+5712345678", type: "DEBIT", brand: "COFFEE SAVER", country: "co", issuer: "HSRC Colombia S.A.", network: PaymentMethodNetwork.VISA},
  { prefix: "534992", iin: 534992, phone: "+5712345678", type: "CREDIT", brand: "EMERALD CARD", country: "co", issuer: "HSRC Colombia S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "534993", iin: 534993, phone: "+5712345678", type: "DEBIT", brand: "PESO CO", country: "co", issuer: "HSRC Colombia S.A.", network: PaymentMethodNetwork.MASTERCARD},
  { prefix: "434994", iin: 434994, phone: "+5712345678", type: "PREPAID", brand: "CARIBBEAN", country: "co", issuer: "HSRC Colombia S.A.", network: PaymentMethodNetwork.VISA},

  // 50. HSRC Investment Bank Ltd (Global) - Offshore/Uluslararası
  { prefix: "405000", iin: 405000, phone: "+13459998888", type: "CREDIT", brand: "OFFSHORE BLACK", country: "US", issuer: "HSRC Investment Bank Ltd", network: PaymentMethodNetwork.VISA},
  { prefix: "375001", iin: 375001, phone: "+13459998888", type: "CREDIT", brand: "AMEX INTERNATIONAL", country: "US", issuer: "HSRC Investment Bank Ltd", network: PaymentMethodNetwork.AMEX},
  { prefix: "305002", iin: 305002, phone: "+13459998888", type: "CREDIT", brand: "DINERS CLUB INTL", country: "US", issuer: "HSRC Investment Bank Ltd", network: PaymentMethodNetwork.DINERS},
  { prefix: "605003", iin: 605003, phone: "+13459998888", type: "CREDIT", brand: "DISCOVER GLOBAL", country: "US", issuer: "HSRC Investment Bank Ltd", network: PaymentMethodNetwork.DISCOVER},
  { prefix: "555004", iin: 555004, phone: "+13459998888", type: "CREDIT", brand: "WORLD SIGNIA H", country: "US", issuer: "HSRC Investment Bank Ltd", network: PaymentMethodNetwork.MASTERCARD},
];

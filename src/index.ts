const userAgentContains_ = (key: string): boolean => {
  const userAgent = window.navigator.userAgent || "";
  return userAgent.includes(key);
};

export const DeviceUtil = {
  isToshiba: (): boolean => {
    return userAgentContains_("Toshiba") || userAgentContains_("TSBNetTV");
  },
  isSony: (): boolean => {
    return userAgentContains_("Sony"); //CEBrowser
  },
  isWebOS: (): boolean => {
    return userAgentContains_("Web0S");
  },
  isEdge: (): boolean => {
    return userAgentContains_("Edg/");
  },
  isIE: (): boolean => {
    return userAgentContains_("Trident/");
  },
  isTizen: (): boolean => {
    return userAgentContains_("Tizen");
  },
  isTizenVersion: (version: number | string = 0): boolean => {
    if (version < 2) return false;
    return userAgentContains_("Tizen " + parseInt("" + version, 10));
  },
  isVideoFutur: (): boolean => {
    return userAgentContains_("VITIS");
  },
  isTiVo: (): boolean => {
    return userAgentContains_("TiVo");
  },
  isChromecast: (): boolean => {
    return userAgentContains_("CrKey");
  },
  isChrome: (): boolean => {
    return userAgentContains_("Chrome") && !DeviceUtil.isEdge();
  },
  isApple: (): boolean => {
    return (
      !!navigator.vendor &&
      navigator.vendor.includes("Apple") &&
      !DeviceUtil.isTizen()
    );
  },
};

export const PlatformName = {
  tizen: "tizen",
  webOS: "webOS",
  sony: "sony",
  panasonic: "panasonic",
  apple: "apple",
  tivo: "tivo",
  toshiba: "toshiba",
  browser: "browser",
  ios: "ios",
  android: "android",
};

export type TypePlatformName = typeof PlatformName[keyof typeof PlatformName];

export class Platform {
  public PlatformName = PlatformName;
  private platformName: string = "";
  constructor() {
    this._init();
  }
  private _init() {
    this.platformName = DeviceUtil.isTizen()
      ? PlatformName.tizen
      : DeviceUtil.isWebOS()
      ? PlatformName.webOS
      : DeviceUtil.isSony()
      ? PlatformName.sony
      : PlatformName.browser;
  }
  public getPlatformName(): string {
    return this.platformName;
  }
  public isTizen(): boolean {
    return DeviceUtil.isTizen();
  }
  public isWebOS(): boolean {
    return DeviceUtil.isWebOS();
  }
  public isSmartTV(): boolean {
    return DeviceUtil.isTizen() || DeviceUtil.isWebOS();
  }
  public isApple(): boolean {
    return DeviceUtil.isApple();
  }
  public isChrome(): boolean {
    return DeviceUtil.isChrome();
  }
}

export const PlatformInstance: Platform = new Platform();

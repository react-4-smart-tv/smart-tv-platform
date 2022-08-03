export declare const DeviceUtil: {
    isToshiba: () => boolean;
    isSony: () => boolean;
    isWebOS: () => boolean;
    isEdge: () => boolean;
    isIE: () => boolean;
    isTizen: () => boolean;
    isTizenVersion: (version?: number | string) => boolean;
    isVideoFutur: () => boolean;
    isTiVo: () => boolean;
    isChromecast: () => boolean;
    isChrome: () => boolean;
    isApple: () => boolean;
};
export declare const PlatformName: {
    tizen: string;
    webOS: string;
    sony: string;
    panasonic: string;
    apple: string;
    tivo: string;
    toshiba: string;
    browser: string;
    ios: string;
    android: string;
};
export declare type TypePlatformName = typeof PlatformName[keyof typeof PlatformName];
export declare class Platform {
    PlatformName: {
        tizen: string;
        webOS: string;
        sony: string;
        panasonic: string;
        apple: string;
        tivo: string;
        toshiba: string;
        browser: string;
        ios: string;
        android: string;
    };
    private platformName;
    constructor();
    private _init;
    getPlatformName(): string;
    isTizen(): boolean;
    isWebOS(): boolean;
    isSmartTV(): boolean;
    isApple(): boolean;
    isChrome(): boolean;
}
export declare const PlatformInstance: Platform;

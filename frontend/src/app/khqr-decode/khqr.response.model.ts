export interface KhqrResponse {
    data: KhqrResponseData;
    message: string;
    code: number;
}

export interface KhqrResponseData {
    khqrSdkData: KhqrData
    emvSdkData: any
}

export interface KhqrData {
    data: Data;
    khqrstatus: Khqrstatus;
}

export interface Khqrstatus {
    code: number;
    errorCode?: any;
    message?: any;
}

export interface Data {
    payloadFormatIndicator: string;
    pointOfInitiationMethod: string;
    bakongAccountID: string;
    merchantId?: string;
    acquiringBank?: string;
    merchantType: string;
    transactionCurrency: string;
    merchantName: string;
    transactionAmount?: string;
    merchantCategoryCode: string;
    countryCode: string;
    merchantCity: string;
    billNumber?: string;
    storeLabel?: string;
    terminalLabel?: string;
    mobileNumber?: string;
    timestamp: string;
    crc: string;
}
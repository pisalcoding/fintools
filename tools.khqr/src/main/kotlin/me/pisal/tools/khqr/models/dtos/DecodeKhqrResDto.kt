package me.pisal.tools.khqr.models.dtos

import com.mastercard.mpqr.pushpayment.model.PushPaymentData
import kh.org.nbc.bakong_khqr.model.KHQRDecodeData
import kh.org.nbc.bakong_khqr.model.KHQRResponse

data class DecodeKhqrResDto(
    val khqrSdkData: KHQRResponse<KHQRDecodeData>,
    val emvSdkData: PushPaymentData
)
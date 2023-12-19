package me.pisal.tools.khqr.services

import com.mastercard.mpqr.pushpayment.model.PushPaymentData
import me.pisal.tools.khqr.common.TResult
import me.pisal.tools.khqr.models.dtos.DecodeKhqrReqDto
import me.pisal.tools.khqr.models.dtos.DecodeKhqrResDto
import org.springframework.web.multipart.MultipartFile

interface IKhqrService {
    fun decodeKhqr(khqr: DecodeKhqrReqDto): TResult<DecodeKhqrResDto>

    fun decodeKhqr(file: MultipartFile): TResult<DecodeKhqrResDto>

    fun decodeEmv(qr: DecodeKhqrReqDto): TResult<PushPaymentData>
}

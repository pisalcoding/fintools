package me.pisal.tools.khqr.services

import com.google.zxing.BinaryBitmap
import com.google.zxing.MultiFormatReader
import com.google.zxing.NotFoundException
import com.google.zxing.client.j2se.BufferedImageLuminanceSource
import com.google.zxing.common.HybridBinarizer
import com.mastercard.mpqr.pushpayment.exception.*
import com.mastercard.mpqr.pushpayment.model.PushPaymentData
import com.mastercard.mpqr.pushpayment.parser.Parser
import kh.org.nbc.bakong_khqr.BakongKHQR
import me.pisal.tools.khqr.common.TResult
import me.pisal.tools.khqr.models.dtos.DecodeKhqrReqDto
import me.pisal.tools.khqr.models.dtos.DecodeKhqrResDto
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.ByteArrayInputStream
import java.io.IOException
import javax.imageio.ImageIO


@Service
class KhqrService : IKhqrService {

    override fun decodeKhqr(khqr: DecodeKhqrReqDto): TResult<DecodeKhqrResDto> {
        return when (val emvResult = decodeEmv(khqr)) {
            is TResult.Failure -> TResult.Failure(emvResult.message, emvResult.code)
            is TResult.Success -> {
                val khqrResult = BakongKHQR.decode(khqr.qrContent)
                val responseData = DecodeKhqrResDto(khqrResult, emvResult.data!!, khqr.qrContent)
                TResult.Success(responseData, "KHQR decoded (${khqr.qrContent})", 0)
            }
        }
    }

    override fun decodeKhqr(file: MultipartFile): TResult<DecodeKhqrResDto> {
        try {
            val byteArrayInputStream = ByteArrayInputStream(file.bytes)
            val bufferedImage = ImageIO.read(byteArrayInputStream)
            val bufferedImageLuminanceSource = BufferedImageLuminanceSource(bufferedImage)
            val hybridBinarizer = HybridBinarizer(bufferedImageLuminanceSource)
            val binaryBitmap = BinaryBitmap(hybridBinarizer)
            val multiFormatReader = MultiFormatReader()
            val result = multiFormatReader.decode(binaryBitmap)

            return decodeKhqr(DecodeKhqrReqDto(qrContent = result.text))
        } catch (e: NotFoundException) {
            return TResult.Failure(e.message, 1)
        } catch (e: IOException) {
            return TResult.Failure(e.message, 1)
        }
    }

    override fun decodeEmv(qr: DecodeKhqrReqDto): TResult<PushPaymentData> {
        val errMessage: String
        try {
            val data = Parser.parse(qr.qrContent)
            println(data.dumpData())
            return TResult.Success(data, "Emv decoded successfully", 0)
        } catch (e: ConflictiveTagException) {
            println("ConflictiveTagException : $e")
            errMessage = e.localizedMessage
        } catch (e: InvalidTagValueException) {
            println("InvalidTagValueException : $e")
            errMessage = e.localizedMessage
        } catch (e: MissingTagException) {
            println("MissingTagException : $e")
            errMessage = e.localizedMessage
        } catch (e: UnknownTagException) {
            println("UnknownTagException : $e")
            errMessage = e.localizedMessage
        } catch (e: FormatException) {
            println("FormatException : $e")
            errMessage = e.localizedMessage
        }
        return TResult.Failure(errMessage, 1)
    }
}
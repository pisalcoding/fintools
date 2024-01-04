package me.pisal.tools.khqr.controllers.rest

import me.pisal.tools.khqr.common.TResult
import me.pisal.tools.khqr.models.dtos.DecodeKhqrReqDto
import me.pisal.tools.khqr.models.dtos.DecodeKhqrResDto
import me.pisal.tools.khqr.services.IKhqrService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@Validated
@RequestMapping("api/v1/khqr")
@CrossOrigin(
    origins = [
        "http://localhost:8100",
        "http://172.17.0.1:8100",
        "http://frontend",
        "https://fintool.net:8100",
        "https://fintool.net",
        "http://www.fintool.net",
    ]
)
class KhqrController(
    private val khqrService: IKhqrService
) {

    @PostMapping("/decode")
    @ResponseBody
    fun decodeKhqr(@RequestBody khqr: DecodeKhqrReqDto): ResponseEntity<TResult<DecodeKhqrResDto>> {
        try {
            khqrService.decodeKhqr(khqr).run {
                return ResponseEntity(this, HttpStatus.OK)
            }
        } catch (t: Throwable) {
            return ResponseEntity(TResult.Failure("Failed to decode KHQR (${khqr.qrContent})", 1), HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @PostMapping(
        "/decode-image",
        consumes = [MediaType.MULTIPART_FORM_DATA_VALUE],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    @ResponseBody
    fun decodeKhqrImage(
        @Validated
        @RequestParam("file") file: MultipartFile
    ): ResponseEntity<TResult<DecodeKhqrResDto>> {
        try {
            khqrService.decodeKhqr(file).run {
                return ResponseEntity(this, HttpStatus.OK)
            }
        } catch (t: Throwable) {
            return ResponseEntity(TResult.Failure("Failed to decode file", 1), HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
package me.pisal.tools.khqr.common

sealed class TResult<out T> {

    data class Success<out T>(val data: T?, val message: String?, val code: Int?): TResult<T>()
    data class Failure<out T>(val message: String?, val code: Int?): TResult<T>()
}
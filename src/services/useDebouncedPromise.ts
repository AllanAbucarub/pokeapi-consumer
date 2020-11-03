import { useRef } from 'react'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export default function useDebouncedPromise(fn: AxiosInstance, delay: number) {
  let timoutRef = useRef(0)

  function handler<T>(params: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>((resolve, reject) => {
      if (timoutRef.current) {
        clearTimeout(timoutRef.current!)
      }

      timoutRef.current = window.setTimeout(async () => {
        try {
          const response = await fn.get<T>(params.url!, params)
          resolve(response)
        } catch (e) {
          reject(e)
        }
      }, delay)
    })
  }
  return handler
}

import { useRef } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios'

export default function useDebouncedPromise(fn: AxiosInstance, delay: number) {
  let timoutRef = useRef(0)
  let cancelToken: CancelTokenSource;

  function handler<T>(params: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>((resolve, reject) => {
      if (timoutRef.current) {
        if (typeof cancelToken != typeof undefined) {
          cancelToken.cancel("Operation canceled due to new request.");
        }
        clearTimeout(timoutRef.current!)
      }
  
      //Save the cancel token for the current request
      cancelToken = axios.CancelToken.source();

      timoutRef.current = window.setTimeout(async () => {
        try {
          const response = await fn.get<T>(params.url!, { ...params, cancelToken: cancelToken.token })
          resolve(response)
        } catch (e) {
          console.log('teste');
          if(!e.message.includes('Operation canceled')) {
            reject(e)
          }
        }
      }, delay)
    })
  }
  return handler
}

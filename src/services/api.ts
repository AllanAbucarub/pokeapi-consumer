import { useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import useDebouncedPromise from './useDebouncedPromise'

interface Config extends AxiosRequestConfig {
  debounced?: boolean
  debouncedDelay?: number
  updateRequestInfo?: (prop1: any, prop2: any) => any
}

type RequestType<T> = {
  error: string,
  data: T | null
}

export default function useApi<T>(
  config: Config
): [(par: Config) => void, { error: string; data: T | null } | null, () => void] {

  const initialRequestInfo: RequestType<T> = {
    error: '',
    data: null,
  }

  const [requestInfo, setRequestInfo] = useState<RequestType<T>>( initialRequestInfo )
  const debouncedAxios = useDebouncedPromise(axios, config.debouncedDelay || 0)

  async function call(localConfig: Config) {
    let response: AxiosResponse<T>

    const finalConfig: Config = {
      baseURL: 'https://pokeapi.co/api/v2/',
      updateRequestInfo: (newInfo: RequestType<T>, prevInfo: RequestType<T>) => newInfo,
      ...config,
      ...localConfig,
    }

    const fn = finalConfig.debounced ? debouncedAxios : axios
    try {
      response = await fn<T>(finalConfig)

      const newRequestInfo: RequestType<T> = {
        ...initialRequestInfo,
        data: response.data,
      }

      finalConfig.updateRequestInfo && setRequestInfo(finalConfig.updateRequestInfo(newRequestInfo, requestInfo))
    } catch (error) {
      console.log(error);
      finalConfig.updateRequestInfo &&
        setRequestInfo(
          finalConfig.updateRequestInfo(
            {
              ...initialRequestInfo,
              error,
            },
            requestInfo
          )
        )
    }
  }

  function clearResults() :void {
    setRequestInfo( initialRequestInfo ) ;
  }

  return [call, requestInfo, clearResults]
}

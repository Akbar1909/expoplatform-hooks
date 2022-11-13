import { useRef, useEffect, useCallback } from 'react'

function createAbortController() {
  return new AbortController()
}

const useAbortController = (isAbortonUnMount = true) => {
  const controllerRef = useRef<AbortController>(createAbortController())

  useEffect(() => {
    return () => {
      if (isAbortonUnMount) {
        controllerRef.current.abort()
      }
    }
  }, [isAbortonUnMount])

  const abort = useCallback(() => {
    controllerRef.current.abort()
    regenerateController()
  }, [controllerRef])

  const regenerateController = useCallback(() => {
    controllerRef.current = createAbortController()
  }, [])

  return {
    signal: controllerRef.current.signal,
    abort,
    regenerateController,
  }
}

export default useAbortController

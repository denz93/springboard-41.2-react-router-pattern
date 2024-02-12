import {useState, useEffect, useCallback} from 'react'
import {useOutletContext} from 'react-router-dom'
/**
 * @typedef {Object} Color
 * @property {string} name
 * @property {string} value
 * 
 * @typedef {CallableFunction} SetColorCallback
 * @param {Color[]}
 * @returns {void}
 * 
 * @type {React.Context<[Color[], SetColorCallback]>}
 */
export function useColors() {
  return useStorage('colors', [])
}

export function useColorsContext() {
  return useOutletContext()
}

export function useStorage(key, defaultValue) {
  const [state, setState] = useState(defaultValue)
  const setValue = useCallback((val) => {
    setKey(key, val)
    setState(val)
  }, [key])
  useEffect(() => {
    const val = getKey(key)
    if (val !== null) {
      setState(val)

    } else {
      setKey(key, defaultValue)
    }
  }, [key])
  return [state, setValue]
}

export function getKey(key) {
  const item = window.localStorage.getItem(key)
  try {
    return JSON.parse(item)
  } catch(e) {
    return null
  }
}

export function setKey(key, val) {
  window.localStorage.setItem(key, JSON.stringify(val))
}
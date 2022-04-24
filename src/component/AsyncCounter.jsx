import { useState } from "react"

export function AsyncCounter() {
  const [count, setCount] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const handler = () => {
    setLoading(true)
    setTimeout(() => {
      setCount(count + 1)
      setLoading(false)
    }, 1000)
  }
  return (
    <>
      <div>AsyncCount: {count}</div>
      <div>
        {isLoading && <span>...Loading</span>}
        <button onClick={handler} disabled={isLoading}>
          AsyncIncrement
        </button>
      </div>
    </>
  )
}

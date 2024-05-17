import { useRef, useState } from "react"

const Dashboard = () => {
    const [count, setCount] = useState(0)
    const refCount = useRef<number>(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const focusRefInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    const handleCount = () => {
        setCount((prevCount) => {
            const newCount = prevCount + 1
            refCount.current = newCount
            console.log('current count:', count)
            console.log('ref count:', refCount.current)
            return newCount
        })
    }
    return (
        <div>
            <label htmlFor="name">
                <input ref={inputRef} type="text" name="name" />
            </label>
            <div className="">count: {count} </div>
            <button onClick={focusRefInput}>focus the input</button>
            <button onClick={handleCount}>Increment</button>
        </div>
    )
}

export default Dashboard

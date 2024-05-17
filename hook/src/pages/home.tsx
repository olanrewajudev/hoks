import { useCallback, useState } from "react"

interface Item {
    id: number
    name: string
}
const Home = () => {
    const [items, setItems] = useState<Item[]>([])
    const [inputValue, setInputValue] = useState('')

    //with usecallback
    const AddItem = useCallback(() => {
        setItems((prevItem) => [
            ...items,
            { id: prevItem.length + 1, name: inputValue }
        ])
        console.log(inputValue)
    }, [inputValue])

    //without usecallback
    // const AddItem = () => {
    //     setItems((prevItem) => [
    //         ...items,
    //         { id: prevItem.length + 1, name: inputValue }
    //     ])
    //     console.log(inputValue)
    // }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={AddItem}>Add Items</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home

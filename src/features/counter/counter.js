import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react"


export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    return (
        <div>
            <div>
                <h1>
                    The count is {count}
                </h1>
                <button onClick={() => dispatch(increment())}>plus</button>
                <button onClick={() => dispatch(decrement())}>minus</button>
                <div>
                    <input type='text' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                </div>  
                <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
                <button onClick={resetAll}>Reset</button>
                </div>              
            </div>
        </div>
    )
}
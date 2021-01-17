import { useState } from 'react'

export const useForm = (initialState) => {
    const [inputValue, setInputValue] = useState(initialState)
    return [
        inputValue,
        e => {
            return setInputValue({
                ...inputValue,
                [e.target.name]: e.target.value
            })
        }
    ]
}
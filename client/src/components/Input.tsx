import React from 'react'

interface Props {
    label?: string,
    placeholder?: string,
    required?: boolean,
    value?: string,
    name?: string,
    onChange?: (val: string) => void,
    type?: 'email' | 'password'
}

export default function Input(props: Props) {
    return (
        <div className='form-group mt-3'>
            {props.label && <label >{props.label}</label>}
            <input name={props.name} className='form-control' required={props.required} type={props.type}
                value={props.value} placeholder={props.placeholder} onChange={e => props.onChange?.(e.currentTarget.value)} />

        </div>
    )
}

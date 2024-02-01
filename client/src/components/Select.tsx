import React from 'react'

interface Props {
    label?: string,
    required?: boolean,
    value?: string,
    onChange?: (val: string) => void,
    emptyLabel?: string;
    data: { value: any, label: any }[]
}
export default function Select(props: Props) {
    return (
        <div className='form-group mt-3'>
            {props.label && <label >{props.label}</label>}
            <select className='form-control' required={props.required}
                value={props.value} onChange={e => props.onChange?.(e.currentTarget.value)} >
                <option value="">{props.emptyLabel}</option>
                {
                    props.data.map(element => {
                        return (
                            <option key={element.value} value={element.value}>{element.label}</option>
                        )
                    })
                }
            </select>

        </div>
    )
}

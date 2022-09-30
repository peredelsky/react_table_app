import s from './dropdown.module.css'

import React, { useState } from 'react'

function Dropdown({selected, setSelected, data}) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={s.dropdown}>
            <div onClick={() => setIsActive(!isActive)} className={s.dropdown_btn}>
                {selected}
                <span className={isActive? `${s.triangle} + ${s.triangleActive}` : s.triangle}></span>
            </div>
            {isActive && (
            <div className={s.dropdown_content}>
                {data.map(elem => (
                    <div onClick={() => {
                            setSelected(elem)
                            setIsActive(false)
                        }} 
                        className={s.dropdown_item} key={elem}>{elem}
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Dropdown

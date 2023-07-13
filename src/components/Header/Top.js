import React from 'react'
import {ImArrowUp} from 'react-icons/im';
const Top = () => {
    const goto = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <div className='top-btn mt-3' onClick={goto}>
            <ImArrowUp style={{ fontSize: "40px", float: "right", color: "#fff" }} />
        </div>
    )
}

export default Top;

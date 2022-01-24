import React, { useState }      from 'react';

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div dangerouslySetInnerHTML={ { __html: title } }></div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content" dangerouslySetInnerHTML={ { __html: content } }></div>}
        </div>
    )
}

export default Accordion;
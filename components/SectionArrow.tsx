import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { downChevAnimation } from './Animations'

interface ISectionArrowProps {
    up?: boolean
}

const SectionArrow = (p: ISectionArrowProps) => {
    const IconComponent = p.up ? FaChevronUp : FaChevronDown
    const ClickHandler = p.up
        ? globalThis.moveSectionUp
        : globalThis.moveSectionDown

    return (
        <div {...downChevAnimation}>
            <div
                style={{
                    position: 'absolute',
                    top: 100,
                    left: 0,
                    right: 0,
                }}
            >
                <IconComponent
                    className="feature-icon hov-scale"
                    onClick={ClickHandler}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                    }}
                />
            </div>
        </div>
    )
}

export default SectionArrow

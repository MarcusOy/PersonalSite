import * as React from 'react'

/**
 *
 *
 * @interface Props
 */
interface Props {
    /**
     * Indicates the size of the spacer
     *
     * @type {number}
     * @memberof Props
     */
    size: number
    /**
     * Decides whether the spacer has a height (false) or a width (true)
     *
     * @type {boolean)}
     * @memberof Props
     */
    horizontal?: boolean

    /**
     * Ignores size prop and uses flexGrow instead
     *
     * @type {boolean}
     * @memberof Props
     */
    grow?: boolean
}

const Spacer = (props: Props) => {
    return (
        <div
            style={{
                flexGrow: props.grow ? 1 : 0,
                width: props.horizontal && !props.grow ? props.size : 0,
                height: !props.horizontal && !props.grow ? props.size : 0,
            }}
        />
    )
}

Spacer.defaultProps = {
    size: 10,
    horizontal: false,
}

export default Spacer

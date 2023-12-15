import * as React from 'react';
import Classname from '../../types/classname';
import cn from '../../utils/className';

interface Heading2Props extends React.PropsWithChildren, Classname {}

const Heading2: React.FC<Heading2Props> = (props) => {
    const defaultClassName = "font-normal text-[28px] text-[#C2C2C2] leading-[normal] md:text-[36px]";
    const className = props.className ? cn(defaultClassName, props.className) : defaultClassName;
    return (
        <h2 className={className}>{props.children}</h2>
    )
}

export default Heading2;

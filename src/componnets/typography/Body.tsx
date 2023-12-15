import * as React from 'react';
import Classname from '../../types/classname';
import joinClassName from '../../utils/className';

interface Body1Props extends React.PropsWithChildren, Classname {}

const Body1: React.FC<Body1Props> = (props) => {
    const defaultClassName = "font-normal text-[15px] text-[#000] leading-[normal] md:text-[18px] md:leading-[28px] lg:text-[20px]";
    const className = props.className ? joinClassName(defaultClassName, props.className) : defaultClassName;
    return (
        <h2 className={className}>{props.children}</h2>
    )
}

export default Body1;

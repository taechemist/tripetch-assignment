import * as React from 'react';
import Classname from '../../types/classname';
import cn from '../../utils/className';

interface Heading1Props extends React.PropsWithChildren, Classname {}

const Heading1: React.FC<Heading1Props> = (props) => {
    const defaultClassName = "font-normal text-[50px] text-[#E7E7E7] leading-[normal] md:text-[90px]";
    const className = props.className ? cn(defaultClassName, props.className) : defaultClassName;
    return (
        <h1 className={className}>{props.children}</h1>
    );
}

export default Heading1;

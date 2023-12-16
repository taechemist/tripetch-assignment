import * as React from 'react';
import Classname from '../types/classname';
import cn from '../utils/className';
import footballerLg from '../assets/footballer-lg.png';
import footballerMd from '../assets/footballer-md.png';
import footballerSm from '../assets/footballer-sm.png';

interface FootballerImageProps extends Classname {}

const FootballerImage: React.FC<FootballerImageProps> = (props) => {
    const defaultClassName = "absolute left flex w-full justify-center md:block md2:pl-[175px]";
    const className = props.className ? cn(defaultClassName, props.className) : defaultClassName;
    return (
        <div className={className}>
            <img src={footballerLg} className="hidden md2:block w-[33vw] min-w-[557px] max-w-[633px] h-auto" />
            <img src={footballerMd} className="hidden md:block md2:hidden" />
            <img src={footballerSm} className="block md:hidden mt-[74px]" />
        </div>
    )
}

export default FootballerImage;

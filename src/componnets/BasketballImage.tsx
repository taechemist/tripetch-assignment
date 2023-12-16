import * as React from 'react';
import Classname from '../types/classname';
import cn from '../utils/className';
import basketballerSm from '../assets/basketballer-sm.png';
import basketballerMd from '../assets/basketballer-md.png';
import basketballerLg from '../assets/basketballer-Lg.png';

interface BasketballImageProps extends Classname {}

const BasketballImage: React.FC<BasketballImageProps> = (props) => {
    const defaultClassName = "absolute flex w-full justify-center md:justify-end";
    const className = props.className ? cn(defaultClassName, props.className) : defaultClassName;
    return (
        <div className={className}>
            <img src={basketballerLg} className="hidden md2:block w-[50vw] h-auto mt-[-90px] mr-[5%]" />
            <img src={basketballerMd} className="hidden md:block md2:hidden mt-[-19px]" />
            <img src={basketballerSm} className="block md:hidden mt-[74px]" />
        </div>
    )
}

export default BasketballImage;

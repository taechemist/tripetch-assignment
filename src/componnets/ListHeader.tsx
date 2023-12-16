import * as React from 'react';
import Heading2 from './typography/Heading2';
import Classname from './../types/classname';
import cn from './../utils/className';
import { ListStyles } from '../types/types';

interface ListPointProps extends React.PropsWithChildren, Classname {
    number: string;
    light?: boolean;
    style?: ListStyles;
}

const ListPointTextStyle: {[key in ListStyles]: string} = {
    "athlete": "md:text-[#000]",
    "player": "md:text-[#8F6BE8]"
}

const ListPoint: React.FC<ListPointProps> = (props) => {
    const defaultClassName = "flex flex-col";
    const numberLightColor = props.style && ListPointTextStyle[props.style];
    return (
        <div className={cn(defaultClassName, props.className)}>
            <p className={cn("font-normal text-[14px] text-[#000] leading-[normal] tracking-[1.5px] mb-[1px] md:text-[18px] md:mb-[4px]", props.light && numberLightColor)}>
                {props.number}
            </p>
            <div className={cn("w-full h-[4px] rounded-[2.5px] md:h-[5px]", props.light ? "bg-[#FFF]" : "bg-[#603EBE]")} />
        </div>
    );
};

interface ListHeaderProps extends React.PropsWithChildren, Classname {
    number: string;
    light?: boolean;
    style?: ListStyles;
}

const ListHeader: React.FC<ListHeaderProps> = (props) => {
    const defaultClassName = "flex flex-row items-center";
     return (
        <div className={cn(defaultClassName, props.className)}>
            <ListPoint style={props.style} light={props.light} number={props.number} className="mr-[10px]" />
            <Heading2>{props.children}</Heading2>
        </div>
    )
};

export default ListHeader;

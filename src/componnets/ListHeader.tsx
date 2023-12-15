import * as React from 'react';
import Heading2 from './typography/Heading2';
import Classname from './../types/classname';
import cn from './../utils/className';

interface ListPointProps extends React.PropsWithChildren, Classname {
    number: string;
    light?: boolean;
}

const ListPoint: React.FC<ListPointProps> = (props) => {
    const defaultClassName = "flex flex-col";

    return (
        <div className={cn(defaultClassName, props.className)}>
            <p className="font-normal text-[14px] text-[#000] leading-[normal] tracking-[1.5px] mb-[1px] md:text-[18px] md:mb-[4px]">
                {props.number}
            </p>
            <div className={cn("w-full h-[4px] rounded-[2.5px] md:h-[5px]", props.light ? "bg-[#FFF]" : "bg-[#603EBE]")} />
        </div>
    );
};

interface ListHeaderProps extends React.PropsWithChildren, Classname {
    number: string;
}

const ListHeader: React.FC<ListHeaderProps> = (props) => {
    const defaultClassName = "flex flex-row items-center";
     return (
        <div className={cn(defaultClassName, props.className)}>
            <ListPoint number={props.number} className="mr-[10px]" />
            <Heading2>{props.children}</Heading2>
        </div>
    )
};

export default ListHeader;

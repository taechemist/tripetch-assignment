import * as React from 'react';
import ListHeader from './ListHeader';
import Body1 from './typography/Body';
import { ListItem } from '../types/types';
import Classname from '../types/classname';
import cn from '../utils/className';

type ListStyles = "athlete" | "player";

interface ListProps extends Classname {
    items: ListItem[];
    style: ListStyles;
}

interface Style {
    bg: string;
    light: boolean;
}

const athleteStyle: Style[] = [
    {
        bg: "bg-[#FFF]",
        light: false,
    },
    {
        bg: "bg-[#F5F4F9]",
        light: false,
    },
    {
        bg: "bg-[#5E3DB3]",
        light: true,
    }
];

const playerStyle: Style[] = [
    {
        bg: "bg-[#FFF]",
        light: false,
    },
    {
        bg: "bg-[#F5F4F9]",
        light: false,
    },
    {
        bg: "bg-[#090C35]",
        light: true,
    }
];

const List: React.FC<ListProps> = (props) => {

    const items = props.items.map((item, index) => {
        const number = index + 1;
        const numberText = number < 10 ? "0" + number.toString() : number.toString();
        const bgColor = props.style === "athlete" ? athleteStyle[index].bg : playerStyle[index].bg;
        return (
            <div
                key={`${item.title}-${index}`}
                className={cn("md:p-[30px] lg:p-[60px]", bgColor)}
            >
                <div className="pb-[10px]">
                    <ListHeader number={numberText}>{item.title}</ListHeader>
                </div>
                <Body1>{item.text}</Body1>
            </div>
        );
    })

    return (
        <div className={cn(props.className)}>
            {items}
        </div>
    )
}

export default List;

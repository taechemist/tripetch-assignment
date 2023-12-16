import * as React from 'react';
import ListHeader from './ListHeader';
import Body1 from './typography/Body';
import { ListItem, ListStyles } from '../types/types';
import Classname from '../types/classname';
import cn from '../utils/className';

interface ListProps extends Classname {
    items: ListItem[];
    style: ListStyles;
}

interface Style {
    bg: string;
    light: boolean;
}

const listStyle: { [key in ListStyles]: Style[] } = {
    "athlete" : [
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
    ],
    "player": [
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
    ],
}

const listPaddingStyle: { [key in ListStyles]: string } = {
    "athlete": "p-[30px] pl-[40%] md2:p-[60px] md2:pl-[50%]",
    "player": "p-[30px] md2:pl-[18%]",
}

const bodyStyle : { [key in ListStyles]: string } = {
    "athlete": "md:max-w-[717px]",
    "player": "md:max-w-[60%] md2:max-w-[500px] lg:max-w-[717px]",
}

const List: React.FC<ListProps> = (props) => {

    const items = props.items.map((item, index) => {
        const number = index + 1;
        const numberText = number < 10 ? "0" + number.toString() : number.toString();
        const style = listStyle[props.style][index]
        return (
            <div
                key={`${item.title}-${index}`}
                className={cn(listPaddingStyle[props.style], style.bg)}
            >
                <div className="pb-[10px]">
                    <ListHeader style={props.style} light={style.light} number={numberText}>{item.title}</ListHeader>
                </div>
                <Body1 className={cn(bodyStyle[props.style], style.light && "md:text-[#FFF]")}>{item.text}</Body1>
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

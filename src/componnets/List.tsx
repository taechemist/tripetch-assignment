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

const List: React.FC<ListProps> = (props) => {

    const items = props.items.map((item, index) => {
        const number = index + 1;
        const numberText = number < 10 ? "0" + number.toString() : number.toString();
        return (
            <div key={`${item.title}-${index}`} >
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

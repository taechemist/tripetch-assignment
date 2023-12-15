import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import ListHeader from './ListHeader';
import Body1 from './typography/Body';
import { ListItem } from '../types/types';
import Classname from '../types/classname';
import cn from '../utils/className';

interface IndicatorProps extends Classname {
    length: number;
    index: number;
}

const Indicator: React.FC<IndicatorProps> = (props) => {
    let items: JSX.Element[] = [];
    for(let i = 0; i < props.length; i++) {
        const hasNext = i + 1 < props.length;
        const active = i === props.index;
        items.push((
            <div className={cn("w-[11px] h-[11px] rounded-[100%]", hasNext && "mr-[12px]", active ? "bg-[#5C3CAF]" : "bg-[#D8D8D8]")}/>
        ))
    }

    return (
        <div className={cn("flex flex-row self-center", props.className)}>
            {items}
        </div>
    );
};

interface CarouselProps extends Classname {
    items: ListItem[];
}

const Carousel: React.FC<CarouselProps> = (props) => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onChangeIndexHandler = (index: number) => {
        setCurrentIndex(index);
    }

    const items = props.items.map((item, index) => {
        const number = index + 1;
        const numberText = number < 10 ? "0" + number.toString() : number.toString();
        const hasNext = index + 1 < props.items.length;
        return (
            <div 
                key={`${item.title}-${index}`} 
                className={cn("px-[20px]", hasNext && "mr-[20px]")}
            >
                <div className="pb-[10px]">
                    <ListHeader number={numberText}>{item.title}</ListHeader>
                </div>
                <Body1>{item.text}</Body1>
            </div>
        );
    })

    return (
        <div className={cn("flex flex-col pt-[60px] bg-[#F5F4F9]", props.className)}>
            <SwipeableViews index={currentIndex} onChangeIndex={onChangeIndexHandler} enableMouseEvents>
                {items}
            </SwipeableViews>
            <Indicator className="my-[25px]" index={currentIndex} length={props.items.length} />
        </div>
    )
}

export default Carousel;

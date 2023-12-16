import BasketballImage from "./componnets/BasketballImage";
import Carousel from "./componnets/Carousel";
import FootballerImage from "./componnets/FootballerImage";
import List from "./componnets/List";
import Heading1 from "./componnets/typography/Heading1";
import { ListItem } from "./types/types";

const athleteList: ListItem[] = [
    {
        title: "CONNECTION",
        text: "Connect with coaches directly, you can ping coaches to view profile.",
    },
    {
        title: "COLLABORATION",
        text: "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
    },
    {
        title: "GROWTH",
        text: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
    }
];

const playerList: ListItem[] = [
    {
        title: "CONNECTION",
        text: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
    },
    {
        title: "COLLABORATION",
        text: "Work with recruiter to increase your chances of finding talented athlete.",
    },
    {
        title: "GROWTH",
        text: "Save your time, recruit proper athlets for your team.",
    }
];

const App: React.FC = () => {
    return (
        <>
            {/* ATHLETS Section */}
            <section>
                <FootballerImage />
                <Heading1 className="mt-[20px] ml-[20px] mb-[251px] md:mt-[50px] md:ml-[0] md:mb-[15px] md:pl-[40%] md2:pl-[50%] md2:mt-[100px]">
                    ATHLETS
                </Heading1>
            </section>
            <section>
                <List items={athleteList} style="athlete" className="hidden md:block" />
                <Carousel items={athleteList} className="md:hidden" />
            </section>

            {/* Player Section */}
            <section>
                <BasketballImage />
                <Heading1 className="mt-[20px] ml-[20px] mb-[220px] md:mt-[50px] md:ml-[30px] md:mb-[15px] md2:mt-[100px] md2:mb-[20px] md2:ml-[18%]">
                    PLAYERS
                </Heading1>
            </section>
            <section>
                <List items={playerList} style="player" className="hidden md:block" />
                <Carousel items={playerList} className="md:hidden" />
            </section>
        </>
    )
};
  
export default App;

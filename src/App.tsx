import ListHeader from "./componnets/ListHeader";
import Body1 from "./componnets/typography/Body";
import Heading1 from "./componnets/typography/Heading1";
import Heading2 from "./componnets/typography/Heading2";

const App: React.FC = () => {
    return (
        <>
            {/* ATHLETS Section */}
            <section className="h-[330px]">
                <Heading1 className="m-5">ATHLETS</Heading1>
            </section>
            <section className="h-[258px] bg-[#F5F4F9]">
                <div className="pt-[60px] px-[20px]">
                    <div className="pb-[10px]">
                        <ListHeader number="01">COLLABORATION</ListHeader>
                    </div>
                    <Body1>Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</Body1>
                </div>
            </section>

            {/* Player Section */}
            <section className="h-[299px]">
                <Heading1 className="m-5">PLAYERS</Heading1>
            </section>
            <section className="h-[204px] bg-[#F5F4F9]">
                <div className="pt-[60px] px-[20px]">
                    <div className="pb-[10px]">
                        <ListHeader number="02">GROWTH</ListHeader>
                    </div>
                    <Body1>Save your time, recruit proper athlets for your team.</Body1>
                </div>
            </section>
        </>
    )
};
  
export default App;

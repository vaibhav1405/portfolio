import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

import { useState } from "react";
import {
  LinkToQuestion,
  NavMainContainer,
} from "../../styled/component/NavigationHome";

interface NavigationHomeProps {
  setSelectVal: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationHome: React.FC<NavigationHomeProps> = ({ setSelectVal }) => {
  const [clickbutton, setClickbutton] = useState<string>("");

  const handleClick = (keyVal: string) => {
    setSelectVal(keyVal);
    setClickbutton(keyVal);
  };

  return (
    <NavMainContainer>
      <LinkToQuestion
        style={{
          border:
            clickbutton === "Q1" ? "2px solid #3f51b5" : "1px solid black",
        }}
        onClick={() => handleClick("Q1")}
      >
        Q1
      </LinkToQuestion>
      <LinkToQuestion
        style={{
          border:
            clickbutton === "Q2" ? "2px solid #3f51b5" : "1px solid black",
        }}
        onClick={() => handleClick("Q2")}
      >
        Q2
      </LinkToQuestion>
      <LinkToQuestion
        style={{
          border:
            clickbutton === "Q3" ? "2px solid #3f51b5" : "1px solid black",
        }}
        onClick={() => handleClick("Q3")}
      >
        Q3
      </LinkToQuestion>
    </NavMainContainer>
  );
};

export default NavigationHome;

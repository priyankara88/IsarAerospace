import { SyntheticEvent } from "react";
import {
  LinkToQuestion,
  NavMainContainer,
} from "../../styled/component/NavigationHome";

interface NavigationHomeProps {
  setSelectVal: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationHome: React.FC<NavigationHomeProps> = ({ setSelectVal }) => {
  const handleClick = (event: SyntheticEvent) => {
    const target = event.target.innerHTML;
    console.log("target", target);
    setSelectVal(target);
  };

  return (
    <NavMainContainer>
      <LinkToQuestion onClick={handleClick}>Q1</LinkToQuestion>
      <LinkToQuestion onClick={handleClick}>Q2</LinkToQuestion>
      <LinkToQuestion onClick={handleClick}>Q3</LinkToQuestion>
    </NavMainContainer>
  );
};

export default NavigationHome;

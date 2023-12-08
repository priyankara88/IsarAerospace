// import { NavMainContainer } from "../styled/Pages/component/NavigationHome";

import {
  LinkToQuestion,
  NavMainContainer,
} from "../../styled/component/NavigationHome";

const NavigationHome = () => {
  return (
    <NavMainContainer>
      <LinkToQuestion>Q1</LinkToQuestion>
      <LinkToQuestion>Q2</LinkToQuestion>
      <LinkToQuestion>Q3</LinkToQuestion>
    </NavMainContainer>
  );
};

export default NavigationHome;

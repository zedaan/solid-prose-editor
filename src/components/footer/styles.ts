import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    cursor: pointer;
    background: #ffffff;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    border-radius: 3px;

    &:first-child {
      border-radius: 50%;
    }

    > span {
      height: 17px;
    }

    svg {
      path {
        color: #18120a;
      }
    }
  }

  .input--wrapper {
    position: relative;
    cursor: pointer;

    input {
      position: absolute;
      cursor: pointer;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
`;

export default Wrapper;

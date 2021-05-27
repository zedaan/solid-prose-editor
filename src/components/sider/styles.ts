import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  position: fixed;
  width: 65px;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }

  .draft {
    background: #f0efe9;
    font-size: 12px;
    line-height: 13px;
    color: #141000;
    height: 30px;
    line-height: 30px;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }

  .img {
    position: relative;
    text-align: center;
    z-index: 3;

    img {
      height: 30px;
      width: 30px;
      margin: auto;
    }

    &:nth-child(2),
    &:nth-child(3) {
      margin-top: -15px;
      z-index: 2;
    }

    &:nth-child(3) {
      z-index: 1;
    }
  }

  .img-wrapper,
  .users--count {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 30px;
      width: 2px;
      background: #44ba76;
    }
  }

  .avatar {
    margin-top: 15px;

    &:before {
      background: #ffd100;
    }
  }


  .actions--bottom {
    align-self: flex-end;
    margin-top: auto;

    > div {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      svg {
        cursor: pointer;
      }
    }

    .arrow {
      background: #FFD100;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin: auto;
      margin-bottom: 72px;
      margin-top: 20px;
      cursor: pointer;
    }
  }

`;

export default Wrapper;

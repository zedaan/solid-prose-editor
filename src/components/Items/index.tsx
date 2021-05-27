import { styled } from 'solid-styled-components'
import SvgIcon from '../SvgIcon';
// @ts-ignore
import PlusIcon from '../../assets/icons/plus.svg';
// @ts-ignore
import Image from '../../assets/images/img.png';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 40px;

  .item {
    display: flex;
    cursor: pointer;
    background: #FFFFFF;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;  
      
    border-radius: 50%;

    > span {
      height: 17px;
    }
  }

  .new--line {
    background: #E5E4DD;
    height: 35px;
    flex: 1;
    border-radius: 5px;
  }

  .img {
    margin-left: 10px;
  }

`;

const Items = () => {
  return (
    <Wrapper>
      <div className="item">
        {SvgIcon(PlusIcon)}
      </div>
      <div className="new--line"></div>
      <div className="img">
        <img src={Image} />
      </div>
    </Wrapper>    
  )
}

export default Items;

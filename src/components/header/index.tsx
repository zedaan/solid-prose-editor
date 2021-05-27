import { styled } from 'solid-styled-components';
// @ts-ignore
import MenuIcon from '../../assets/icons/menu.svg';
import SvgIcon from '../SvgIcon';

const Wrapper = styled('div')`
  .menu--icon {
    position: absolute;
    height: 30px;
    width: 30px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 10px;
    top: 10px;
    box-shadow: 0px 7px 40px rgba(137, 134, 118, 0.45);
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="menu--icon">
        {SvgIcon(MenuIcon)}
      </div>
    </Wrapper>
  )
}

export default Header;

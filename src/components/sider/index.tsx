import { For } from "solid-js";
// @ts-ignore
import Image from "../../assets/images/img.png";
// @ts-ignore
import Settings from "../../assets/icons/settings.svg";
// @ts-ignore
import Share from "../../assets/icons/share.svg";
// @ts-ignore
import Arrow from "../../assets/icons/arrow-right.svg";
import SvgIcon from "../SvgIcon";
import Wrapper from './styles';

const Sider = () => {
  return (
    <Wrapper>
      <div>
        <div className="draft">Draft</div>
      </div>
      <div className="users--count">
        <For each={[0, 1, 2]}>
          {() => (
            <div className="img">
              <img src={Image} />
            </div>
          )}
        </For>
      </div>
      <div className="img-wrapper avatar">
        <div className="img">
          <img src={Image} />
        </div>
      </div>

      <div className="actions--bottom">
        <div>{SvgIcon(Share)}</div>
        <div>{SvgIcon(Settings)}</div>
        <div className="arrow">{SvgIcon(Arrow)}</div>
      </div>
    </Wrapper>
  );
};

export default Sider;

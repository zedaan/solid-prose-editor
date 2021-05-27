import { Component } from 'solid-js';
import SvgIcon from '../SvgIcon';
// @ts-ignore
import PlusIcon from '../../assets/icons/plus.svg';
// @ts-ignore
import ImgIcon from '../../assets/icons/img.svg';
// @ts-ignore
import ChainIcon from '../../assets/icons/chain.svg';
import { TextField, openPrompt } from "../prompt";
import { NodeSelection } from "prosemirror-state";
import Wrapper from './styles';

const Actions: Component<any> = (props) => {

  const onInsertImage = () => {
    let nodeType = props.view?.schema?.nodes?.image;
    let { from, to } = props.view.state.selection,
        attrs = null;
      if (
        props.view.state.selection instanceof NodeSelection &&
        props.view.state.selection.node.type == nodeType
      )
        attrs = props.state.selection.node.attrs;
      openPrompt({
        title: "Insert image",
        fields: {
          src: new TextField({
            label: "Location",
            required: true,
            value: attrs && attrs.src,
          }),
          title: new TextField({ label: "Title", value: attrs && attrs.title }),
          alt: new TextField({
            label: "Description",
            value: attrs ? attrs.alt : props.state?.doc.textBetween(from, to, " "),
          }),
        },
        callback(attrs: any) {
          props.view.dispatch(
            props.view.state.tr.replaceSelectionWith(nodeType.createAndFill(attrs))
          );
          props.view.focus();
        },
      });
  }

  return (
    <Wrapper>
      <div>
        {SvgIcon(PlusIcon)}
      </div>
      <div className="input--wrapper">
        <input type="file" />
        {SvgIcon(ImgIcon)}
      </div>
      <div>
        {SvgIcon(ChainIcon)}
      </div>
    </Wrapper>
  )
}

export default Actions;

import { MenuItem } from "prosemirror-menu";

import { toggleMark } from "prosemirror-commands";
// @ts-ignore
import { wrapInList } from "prosemirror-schema-list";
import { TextField, openPrompt } from "../prompt";
// @ts-ignore
import LinkIcon from "../../assets/icons/link.svg";
import svgIcon from "../SvgIcon";

export function cmdItem(cmd: any, options: any) {
  let passedOptions: any = {
    label: options.title,
    run: cmd,
  };
  for (let prop in options) passedOptions[prop] = options[prop];
  if ((!options.enable || options.enable === true) && !options.select)
    passedOptions[options.enable ? "enable" : "select"] = (state: any) =>
      cmd(state);

  return new MenuItem(passedOptions);
}

export function markActive(state: any, type: any) {
  let { from, $from, to, empty } = state.selection;
  if (empty) return type.isInSet(state.storedMarks || $from.marks());
  else return state.doc.rangeHasMark(from, to, type);
}

export function linkItem(markType: any) {
  return new MenuItem({
    title: "Add or remove link",
    icon: { dom: svgIcon(LinkIcon) },
    active(state) {
      return markActive(state, markType);
    },
    enable(state) {
      return !state.selection.empty;
    },
    run(state, dispatch, view) {
      if (markActive(state, markType)) {
        toggleMark(markType)(state, dispatch);
        return true;
      }
      openPrompt({
        title: "Create a link",
        fields: {
          href: new TextField({
            label: "Link target",
            required: true,
          }),
          title: new TextField({ label: "Title" }),
        },
        callback(attrs: any) {
          toggleMark(markType, attrs)(view.state, view.dispatch);
          view.focus();
        },
      });
    },
  });
}

export function wrapListItem(nodeType: any, options: any) {
  return cmdItem(wrapInList(nodeType, options.attrs), options);
}

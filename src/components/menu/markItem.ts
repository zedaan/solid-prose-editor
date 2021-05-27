import { markActive, cmdItem } from './index';
import { toggleMark } from "prosemirror-commands";

export function markItem(markType: any, options: any) {
  let passedOptions: any = {
    active(state: any) {
      return markActive(state, markType);
    },
    enable: true,
  };
  for (let prop in options) passedOptions[prop] = options[prop];
  return cmdItem(toggleMark(markType), passedOptions);
}

import { keymap } from "prosemirror-keymap";
import { history } from "prosemirror-history";
import { baseKeymap } from "prosemirror-commands";
import { Plugin } from "prosemirror-state";
import { buildMenuItems } from "./menu";
import { buildKeymap } from "./keymap";
import { toolTip } from "./Selection";
import { buildInputRules } from "./inputrules";

export { buildMenuItems, buildKeymap, buildInputRules };

export function setup(options: any) {
  let plugins = [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema, options.mapKeys) as any),
    keymap(baseKeymap),
    toolTip(options.schema),
  ];
  if (options.history !== false) plugins.push(history());

  return plugins.concat(
    new Plugin({
      props: {
        attributes: { class: "ProseMirror-example-setup-style" },
      },
    })
  );
}

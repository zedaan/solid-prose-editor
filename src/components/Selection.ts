import { renderGrouped } from "prosemirror-menu";
import { Plugin } from "prosemirror-state";
import { buildMenuItems } from "./menu";

export default class SelectionTooltip {
  tooltip: any;

  constructor(view: any, schema: any) {
    this.tooltip = document.createElement("div");
    this.tooltip.className = "tooltip";
    view.dom.parentNode.appendChild(this.tooltip);
    let { dom } = renderGrouped(view, buildMenuItems(schema).fullMenu);
    this.tooltip.appendChild(dom);
    this.update(view, null);
  }

  update(view: any, lastState: any) {
    let state = view.state;
    if (
      lastState &&
      lastState.doc.eq(state.doc) &&
      lastState.selection.eq(state.selection)
    )
      return;

    if (state.selection.empty) {
      this.tooltip.style.display = "none";
      return;
    }

    this.tooltip.style.display = "";
    let { from, to } = state.selection;
    let start = view.coordsAtPos(from),
      end = view.coordsAtPos(to);
    let box = this.tooltip.offsetParent.getBoundingClientRect();
    let left = Math.max((start.left + end.left) / 2, start.left + 3);
    this.tooltip.style.left = left - box.left + "px";
    this.tooltip.style.bottom = box.bottom - (start.top + 15) + "px";
  }

  destroy() {
    this.tooltip.remove();
  }
}

export function toolTip(schema: any) {
  return new Plugin({
    view(editorView: any) {
      return new SelectionTooltip(editorView, schema);
    },
  });
}

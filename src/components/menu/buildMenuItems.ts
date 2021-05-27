import { wrapItem, blockTypeItem, Dropdown, icons } from "prosemirror-menu";
import svgIcon from "../SvgIcon";
// @ts-ignore
import BoldIcon from "../../assets/icons/bold.svg";
// @ts-ignore
import Italic from "../../assets/icons/italic.svg";
// @ts-ignore
import QuoteIcon from "../../assets/icons/quote.svg";
import { markItem, linkItem, insertImageItem, wrapListItem } from "./index";

export function buildMenuItems(schema: any) {
  let r: any = {},
    type;
  if ((type = schema.marks.strong))
    r.toggleStrong = markItem(type, {
      title: "Toggle strong style",
      icon: { dom: svgIcon(BoldIcon) },
    });
  if ((type = schema.marks.em))
    r.toggleEm = markItem(type, {
      title: "Toggle emphasis",
      icon: {
        dom: svgIcon(Italic),
      },
    });

  if ((type = schema.marks.link)) r.toggleLink = linkItem(type);

  if ((type = schema.nodes.image)) r.insertImage = insertImageItem(type);
  if ((type = schema.nodes.bullet_list))
    r.wrapBulletList = wrapListItem(type, {
      title: "Wrap in bullet list",
      icon: icons.bulletList,
    });
  if ((type = schema.nodes.ordered_list))
    r.wrapOrderedList = wrapListItem(type, {
      title: "Wrap in ordered list",
      icon: icons.orderedList,
    });
  if ((type = schema.nodes.blockquote))
    r.wrapBlockQuote = wrapItem(type, {
      title: "Wrap in block quote",
      icon: { dom: svgIcon(QuoteIcon) },
    });
  if ((type = schema.nodes.paragraph))
    r.makeParagraph = blockTypeItem(type, {
      title: "Change to paragraph",
      label: "Plain",
    });
  if ((type = schema.nodes.code_block))
    r.makeCodeBlock = blockTypeItem(type, {
      title: "Change to code block",
      label: "Code",
    });
  if ((type = schema.nodes.heading))
    for (let i = 1; i <= 10; i++)
      r["makeHead" + i] = blockTypeItem(type, {
        title: "Change to heading " + i,
        label: "Heading " + i,
        attrs: { level: i },
      });

  let cut = (arr: any) => arr.filter((x: any) => x);
  r.insertMenu = new Dropdown(cut([r.insertImage, r.insertHorizontalRule]), {
    label: "Insert",
  });
  r.typeMenu = new Dropdown(
    cut([
      r.makeHead1,
      r.makeHead2,
      r.makeHead3,
      r.makeHead4,
      r.makeHead5,
      r.makeHead6,
      r.makeParagraph,
    ]),
    {
      label: "H1",
    }
  );

  r.inlineMenu = [cut([r.toggleStrong, r.toggleEm, r.toggleLink])];

  r.blockMenu = [cut([r.typeMenu, r.wrapBlockQuote])];

  r.fullMenu = r.inlineMenu.concat(r.blockMenu);

  return r;
}

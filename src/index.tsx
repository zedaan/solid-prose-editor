import { createSignal, onMount } from "solid-js";
import { render } from "solid-js/web";
import "./main.css";
import { ThemeProvider } from "solid-styled-components";
import { themes } from "./utils/themeConfig";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
// @ts-ignore
import { addListNodes } from "prosemirror-schema-list";
import { setup } from "./components";
import Footer from "./components/footer";
import Items from './components/Items';
import Header from './components/header';
import Sider from './components/sider';

const App = () => {
  let editor: any;
  let content: any;
  const [view, setView] = createSignal<any>(null);

  onMount(() => {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks,
    });

    setView(
      new EditorView(editor, {
        state: EditorState.create({
          doc: DOMParser.fromSchema(mySchema).parse(content),
          plugins: setup({ schema: mySchema }),
        }),
      })
    );

    setTimeout(() => {
      view().focus();
    });
  });

  return (
    <div className="editor--wrapper">
      <Header />
      <Sider />
      <div ref={editor} className="editor" />
      <div ref={content} />
    </div>
  );
};

render(
  () => (
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  ),
  document.getElementById("root") as any
);

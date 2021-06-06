import { createSignal, onMount, createResource, Show } from "solid-js";
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
import Header from "./components/header";
import Sider from "./components/sider";
import { debounce } from "./utils/debounce";
import { CREATE_PAGE_MUTATION } from "./api/queries";
import https from "./utils/https";

const App = () => {
  let editor: any;
  let defaultContent: any = [];

  const [view, setView] = createSignal<any>(null),
    [isSaved, setIsSaved] = createSignal(false),
    [isFailed, setIsFailed] = createSignal(false);

  const handleInputChange = (e: any) => {
    const [title, ...content]: any = e.state.doc.content.content;
    https({
      query: CREATE_PAGE_MUTATION,
      variables: {
        input: {
          content: JSON.stringify(content),
          slug: JSON.stringify(title),
          title: JSON.stringify(title),
          userId: 1,
        },
      },
    })
      .then(() => {
        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
        }, 2000)
      })
      .catch((err: any) => {
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 2000)
      });
  };

  onMount(() => {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks,
    });

    setView(
      new EditorView(editor, {
        state: EditorState.create({
          doc: DOMParser.fromSchema(mySchema).parse(defaultContent),
          plugins: setup({ schema: mySchema }),
        }),
        handleTextInput: (e: any) => {
          debounce(() => handleInputChange(e));
          return false;
        },
      })
    );

    setTimeout(() => {
      view().focus();
    });
  });

  return (
    <div className="editor--wrapper">
      <Show when={isSaved()}>
        <div className="successMessage">Post Saved Successfully!</div>
      </Show>
      <Show when={isFailed()}>
        <div className="errorMessage">Could Not Create Post!</div>
      </Show>
      <Header />
      <Sider />
      <div ref={editor} className="editor" />
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

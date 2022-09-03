import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  });

  return (
    <div className="min-h-[300px] w-full rounded-lg border-2 border-black p-2">
      <EditorContent editor={editor} className="h-full" />
    </div>
  );
};

export default function NewLitter() {
  return (
    <div className="container mx-auto flex h-full w-full items-center">
      <Tiptap content={"<h2>hello world</h2>"} />
    </div>
  );
}

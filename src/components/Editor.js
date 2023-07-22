import React, { useEffect, useState } from "react";
import { Global, css } from "@emotion/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonBlockEditor from "ckeditor5-custom-build/build/ckeditor";
import MyCustomUploadAdapterPlugin from "@/adapter/MyCustomeAdapter";

const TinyMceEditor = ({ setbData }) => {
  const ckWrapperStyle = css`
    position: relative;
    z-index: 1;
    &::before {
      color: rgba(192, 192, 192, 1);
      content: attr(data-placeholder);
      padding: 0 11px;
      position: absolute;
      margin: var(--ck-spacing-large) 0;
      top: 0;
      z-index: -1;
    }
  `;

  return (
    <div
      className="ckeditor-wrapper"
      css={css`
        ${ckWrapperStyle}
      `}
    >
      <Global
        styles={css`
          :root {
            --ck-border-radius: 4px;
            --ck-color-focus-border: rgba(96, 103, 113, 0.8);
            --ck-color-shadow-inner: rgba(69, 79, 99, 0.2);
            --ck-inner-shadow: 0 0 0 2px var(--ck-color-shadow-inner);
            --ck-spacing-large: var(--ck-spacing-standard);
          }
          .ck.ck-editor__editable_inline {
            border: 1px solid rgba(217, 217, 217, 1);
            transition: all 0.3s;
            &:hover {
              border-color: rgba(96, 102, 112, 1);
              border-right-width: 1px !important;
            }
          }
          .ck-editor__editable.ck-read-only {
            background-color: rgba(245, 245, 245, 1);
            opacity: 1;
            cursor: not-allowed;
            color: rgba(0, 0, 0, 0.25);
            &:hover {
              border-color: rgba(217, 217, 217, 1);
            }
          }
        `}
      />
      <CKEditor
        editor={BalloonBlockEditor}
        data=""
        config={{
          placeholder: "Type the content hereasd !",

          toolbar: {
            items: [
              "bold",
              "italic",
              "underline",
              "link",
              "|",
              "heading",
              "|",
              "code",

              "blockQuote",
            ],
          },
          language: "en",
          blockToolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "imageUpload",
            "imageInsert",
            "mediaEmbed",
            "code",
            "blockQuote",
            "|",
            "insertTable",
            "numberedList",
            "bulletedList",
            "outdent",
            "indent",
          ],

          image: {
            toolbar: [
              "imageTextAlternative",
              "toggleImageCaption",
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
            ],
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
          initialData: "",
          extraPlugins: [MyCustomUploadAdapterPlugin],
        }}
        onChange={(e, editor) => {
          const data = editor.getData();
          setbData(data);
        }}
        react
      />
    </div>
  );
};

export default TinyMceEditor;

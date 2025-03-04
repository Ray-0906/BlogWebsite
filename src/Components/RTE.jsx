import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { Controller } from 'react-hook-form'

const RTE = ({ name, control, defaultValue = "", label }) => {
   
//it will provide a realtime editor component .. can be imported in any form 
  return (
    <>
      <div className='w-full'>
        {label && <label className='inline-block text-blue-200 font-semibold mb-1 pl-1'>{label}</label>}
        <Controller
          name={name || "content"}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Editor
             apiKey='hr0qyt2svdqgrzjfckqipcr9xyf9tzot204ru3gcla4ldbvo'
              initialValue={defaultValue}
              onEditorChange={onChange}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
              }}
            />
          )}
        />
      </div>
    </>
  )
}

export default RTE
import React from 'react'
import Markdown from 'markdown-to-jsx'

const MarkdownText = ({children}) => {
  return (
    <div  className="mx-[16px] mt-[25px] lg:mt-[40px] mb-[80px] lg:mx-[300px]">
        
          <Markdown
          options={{
            overrides: {
              img: {
                props: {
                  className: "w-full",
                },
              },
            },
          }}
        >
          {children}
        </Markdown>
    </div>
  )
}

export default MarkdownText
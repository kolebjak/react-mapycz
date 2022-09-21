import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import React from 'react'

interface Props {
  children: string;
}

const BashSyntaxHighlighter = ({ children }: Props) => {
  return  (
    <SyntaxHighlighter customStyle={{ border: '1px solid #D2D2D2', borderRadius: '2px' }} language="bash" style={githubGist}>
      {children}
    </SyntaxHighlighter>
  )
}

export default BashSyntaxHighlighter;

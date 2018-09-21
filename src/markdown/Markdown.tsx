import * as React from 'react'
import styled from 'styled-components'
import marked, { getSanitizer } from './marked'
import { quoteStatic } from './quote-static'

export interface IMarkdownProps {
    /**
     * Markdown content which will be parsed to HTML
     */
    content: string,
    blockQuoteRendered?: (content: string) => string
}

// we can put styles for markdown in here
// for example table tr td { border: 1 px solid #000; }
const Styled = styled.div`
  padding: 5rem;
`

export const Markdown: React.SFC<IMarkdownProps> = ({ content, blockQuoteRendered = quoteStatic }) => {
    const customRendered = new marked.Renderer({
        sanitize: true,
    })
    customRendered.blockquote = blockQuoteRendered
    return (
        <Styled
            dangerouslySetInnerHTML={{
                __html: marked(content, {
                    renderer: customRendered,
                    sanitizer: getSanitizer(),
                }),
            }}
        />
    )
}
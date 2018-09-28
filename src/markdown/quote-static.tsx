import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled from 'styled-components'
import { Quote } from '../ui/Quote'

const QuoteContainer = styled(Quote)`
  width: 50%;
  text-align: center;
  margin: 0 auto;
`

export const quoteStatic = (quote: string) => {
    /**
     *  if 'quote' contains content being relatively HTML in format: <p>Quote</p>
     *  it would end up being escaped when just rendering to static markup.
     *  This is, quote is literally "<p>Quote</p>", not the pure text itself.
     */
    return renderToStaticMarkup(<QuoteContainer dangerouslySetInnerHTML={{ __html: quote }}/>)
}
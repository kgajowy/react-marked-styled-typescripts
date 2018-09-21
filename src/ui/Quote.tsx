import styled from 'styled-components'

export const Quote = styled.blockquote`
  position : relative;
  padding-top: 3.5rem;
  margin: 0;
  opacity: 0.6;
  &:before {
    position: absolute;
    content: open-quote;
    font-size: 4rem;
    left: 0;
    right: 0;
    margin-top: -3.5rem;
    opacity: 0.5;
  }
    &:after {
    content: '';
    padding-top: 1rem;
    position: relative;
    display: block;
    margin: auto;
    height: 1px;
    width: 32%;
    border-bottom: 1px solid rgba(151,151,151,0.50);
    opacity: 1;
  }
`
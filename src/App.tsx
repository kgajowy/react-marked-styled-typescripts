import * as React from 'react'
import { Markdown } from './markdown/Markdown'

const markupText = `
Ut congue porta volutpat. Nullam molestie commodo elit, nec varius ante mattis non. Maecenas et dui urna. Curabitur dictum orci et neque mollis, eget dictum tortor imperdiet. Phasellus eu nisl odio. Cras id blandit odio, eget rhoncus urna. Nullam varius vitae nunc vitae aliquam. Phasellus porta in nisl eget varius. Cras feugiat posuere dui eu mollis.
> Facebook internal JS development experience for web is so different from what I see in open source (or at other companies). Some things feel behind, others are so much ahead. Probably same for all large companies.

(c) Dan Abramov`

class App extends React.Component {
    public render() {
        return (
            <Markdown content={markupText}/>
        )
    }
}

export default App

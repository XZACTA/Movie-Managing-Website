import React from 'react'

export default function TestPage() {
    let [postedData, setPostedData] = React.useState('')
    const form = React.useRef()

    
    return (
        <div style={{margin:'30px'}}>
            
            <div dangerouslySetInnerHTML={{__html: postedData}}></div>
        </div>
    )
}
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        {/* <Primeiro />
        <ComParamentro
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
        <ComParamentro
            titulo="Opa"
            subtitulo="Epa" /> */}
    </>,
    document.getElementById('root')
)
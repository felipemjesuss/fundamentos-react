import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'

ReactDOM.render(
    <>
        <Primeiro />
        <ComParamentro
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
    </>,
    document.getElementById('root')
)
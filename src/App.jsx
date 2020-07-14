import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default props => 
    <div className="App">
        <Card
            titulo="Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card
            titulo="Componente Com Parâmentro">
            <ComParamentro
                titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
        </Card>
        <Card
            titulo="Primeiro Componente">
            <Primeiro />
        </Card>
        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos> */}
        {/* <Primeiro />
        <ComParamentro
            titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
        <ComParamentro
            titulo="Opa"
            subtitulo="Epa" /> */}
    </div>
import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import MegaSena from './components/megasena/MegaSena'

export default props => 
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card
                titulo="#11 - Mega-Sena"
                color="#28BE9B">
                <MegaSena quantidadeNumero={6} />
            </Card>
            <Card
                titulo="#10 - Contador"
                color="#FB6648">
                <Contador 
                    passo={10}
                    valor={100} />
            </Card>
            <Card
                titulo="#09 - Input"
                color="#8C6954">
                <Input />
            </Card>
            <Card
                titulo="#08 - Comunicação Indireta"
                color="#9B539C">
                <Super />
            </Card>
            <Card
                titulo="#07 - Comunicação Direta"
                color="#E1D041">
                <Pai sobrenome="Freitas" />
            </Card>
            <Card
                titulo="#06 - Condicional v2"
                color="#FA6900">
                <CondicionalComIf 
                    numero={10} />
            </Card>
            <Card
                titulo="#05 - Condicional v1"
                color="#E94C6F">
                <Condicional 
                    numero={11} />
            </Card>
            <Card
                titulo="#04 - Repetição"
                color="#008BBA">
                <Repeticao />
            </Card>
            <Card
                titulo="#03 - Componente Com Filhos"
                color="#D96459">
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
                titulo="#02 - Componente Com Parâmentro"
                color="#FF85CB">
                <ComParamentro
                    titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />
            </Card>
            <Card
                titulo="#01 - Primeiro Componente"
                color="#92B06A">
                <Primeiro />
            </Card>
        </div>
    </div>
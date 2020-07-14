import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <Filho sobrenome="Silva"><strong>João</strong></Filho>
        <Filho sobrenome="Silva">Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>
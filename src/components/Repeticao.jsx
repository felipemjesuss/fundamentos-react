import React from 'react'

import produtos from '../data/produtos'

export default props => {

    function getProdutosListItem() {
        return produtos.map(produto => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} -> R$ {produto.preco}
            </li>
        })
    }

    return (
        <>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </>
    )
}
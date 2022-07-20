import React from "react";
import {ContainerCard,ContItens,Tipos,ContImg,Botoes,} from './styled'

export const Card = (props) => {
    return (
        <ContainerCard>
        <ContItens>
          <div>
            <p>#{props.order}</p>
            <h3>{props.name}</h3>
            <Tipos>
              <p>tipo1</p>
              <p>tipo2</p>
            </Tipos>
          </div>

          <ContImg>
            <ImgPoke src={props.img} alt="" />
            <Fundo src={props.fundo} alt="" />
          </ContImg>
        </ContItens>
S
        <Botoes>
          <button>button</button>
          <button>button</button>
        </Botoes>
      </ContainerCard>
    )
}
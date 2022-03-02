import React from 'react';
import { DivMenu, LinkDecoration, LinkSpaces, Line } from './styles';
import { FaHome, FaPeopleArrows } from "react-icons/fa";

export const SideMenu = ({ mostra }: any) => {
  return (
    <DivMenu className={mostra}>
      <p>Menu</p>
      <LinkSpaces>
      <Line/>
      <FaHome style={{marginRight: '3px'}}/>
        <LinkDecoration to="/">Home</LinkDecoration>
        <Line style={{opacity: '0.5', width:'100px'}}/>
      </LinkSpaces>
      <LinkSpaces>
      <FaPeopleArrows style={{marginRight: '3px'}}/>
        <LinkDecoration to="/tabela">Tabela</LinkDecoration>
        <Line style={{opacity: '0.5', width:'100px'}}/>
      </LinkSpaces>
    </DivMenu>
  );
};

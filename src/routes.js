import React from 'react';
import { Switch, Route } from 'react-router-dom'; //YARN ADD REACT-ROUTER-DOM serve para tratar as rotas 

import Feed from './pages/Feed';
import New from './pages/New';

function Routes(){// Função para retornar as rotas da aplicação
    return( //swith é usado para não dar conflito em abrir o caminho. Pois se tem / ele só ve se tem nos dois caminhos e abre todos que tem / no caminho
        //usando swith com exact ele compara para ver se o caminho é exatamente igual ao caminho passado
        <Switch>  
        <Route path="/" exact component={Feed} /> {/*Se o usuario esta na pagina inicial, abrir a pagina feed*/}
        <Route path="/new" component={New} />{/*Se o usuario acessar a pagina /new acessar o componet new*/}
        </Switch>
    );
}

export default Routes;
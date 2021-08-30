import React, {Component}  from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

//пример использования styled-components
const AppBlock = styled.div` 
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label: 'I need a break ...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
    }

        deleteItem(id) {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
               /*  //state напрямую изменять нельзя!!! данные будут мутированы
                data.splice(index, 1); 
                return {
                    data: data
                } */

                const before = data.slice(0, index) //массив данных который будет до того элемента при клике на корзинку
                const after = data.slice(index + 1) //вторая часть массива, часть которая будет после того элемента на который мы кликаем по корзине
                
                const newArr = [...before, ...after]; //склейка массива

                return {
                    data: newArr
                }
            });
        }

        addItem(body) {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }


       render () {
        return (
            //AppBlock - это компонент
                 <AppBlock> 
                     <AppHeader/>
                     <div className="search-panel d-flex">
                         <SearchPanel/>
                 <       PostStatusFilter/>
             </div>
                     <PostList
                        posts={this.state.data}
                        onDelete={this.deleteItem}/>
                     <PostAddForm
                        onAdd={this.addItem}/>
                 </AppBlock>
             )
       }
}



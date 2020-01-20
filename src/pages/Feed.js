//importação dos componentes
import React, {Component} from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';

//importação de imagens
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';


class Feed extends Component{ //Quando criamos componente nesse formato o metodo Render é obrigatorio
    //Quando um componente é criado em formato de classe ele tem acesso ao metodo componentDidMount
    state = { //Quando usamos classe precisamos criar um estado - ele é uma variavel para armazenar informações
    feed: [],        
    };
    
    async componentDidMount(){ //é usado automatico quando o componente é carregado em tela
        this.registerToSocket();
        const response = await api.get('posts'); // chamada da api - caso der certo response recebera um componete 'data' com todos as informações
        this.setState({feed: response.data});//Quando este valor se alterar ele fazer o reneder novamente da pagina

    }

    registerToSocket = () =>{
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({feed: [newPost, ...this.state.feed]});
        })

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post =>
                    post.id === likedPost.id ? likedPost : post)
            })
        });
    }

    handleLike = id =>{
        api.post(`/posts/${id}/like`);
    }

    render(){
        return(
            <section id="post-list">
            {this.state.feed.map(post => ( //o map() serve para percorrer cada post- adiciono para variavel post
                // e ele retorna um html
            <article key={post._id}>{/*Faz o react encontrar os posts muito mais rapido*/}
                <header>
                    <div class="user-info">
                        <span>{post.author}</span>
                        <span className="place">{post.place}</span>
                    </div>
                    <img src={more} alt="Mais" />
                </header>
                <img src={`http://localhost:3333/files/${post.image}`} alt=""></img>
                <footer>
                    <div className="actions">
                        <button type="button"onClick={() => this.handleLike(post._id)/*Usado arrowfunction para passar a função*/}> 
                            <img src={like} alt=""></img>
                        </button>
                        <img src={comment} alt=""></img>
                        <img src={send} alt=""></img>
                    </div>
                    <strong>{post.likes} curtidas</strong>
                    <p> {post.description} <span> {post.hashtags}</span></p>
                </footer>
            </article>
            ))}
                
            </section>
        );
    }
}
export default Feed;
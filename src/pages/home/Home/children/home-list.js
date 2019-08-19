import React, { Component } from 'react'
import './style.scss'
export default class HomeList extends Component {

    render() {
      let{title,author,url,imgurl} = this.props;
        return (
            <div className="home-wrap">
                <div className="home-list-con">
                   <div className="box">
                    <p>{title}</p>
                    <p>{author}</p>
                    <img src={imgurl} alt=""/>
                   </div>
                  <img src={url} alt=""/>  
                  
                </div>
                
            </div>
        )
    }
}

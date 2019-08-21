import React, { Component } from 'react'
import './style.scss'
export default class HomeList extends Component {

    render() {
      let{title,author,url,imgurl} = this.props;
        return (
            <div className="home-wrap">
                <div className="home-list-con">
                   <div className="box">
                    <p onClick={this.changeFoodAction}>{title}</p>
                    <p>{author}</p>
                    <img src={imgurl} alt="" onClick={this.intoUserdetailAction}/>
                   </div>
                  <img src={url} alt=""/>  
                  
                </div>
                
            </div>
        )
    }
    intoUserdetailAction=()=>{
        console.log('执行了');
        
        this.props.history.push('/home/userinfo');
    }
    changeFoodAction=()=>{
        this.props.history.push('/home/detail');
    }
}

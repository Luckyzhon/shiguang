import React, { Component } from 'react'

export default class ArticleList extends Component {

    render() {
        let {title,descript,img} = this.props;
        return (
            <div  className="item-wrap">
          
                      <div className="box" >
                      <div className="item-listh3"><h3 >{title}</h3></div>
                      <div className="item-listh4"><h4 >{descript}</h4></div>
                      </div>

                      <div className="item-listimg"><img src={img}/></div>

            </div>
        )
    }

}


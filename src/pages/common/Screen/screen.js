import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header';
import './style.scss'

export default class screen extends Component {
    render() {
        return (
            <div className="page subpage" id="scree">
               <AppHeader title="食光" right="筛选" left={
                <span className="iconfont icon-arrow-right
                "></span>
            } leftClick={this.props.history.goBack}/>
            </div>
        )
    }
}




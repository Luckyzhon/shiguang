import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header';
import ScreenList from './children/screen-list'
import './style.scss'

export default class screen extends Component {
    state={
        isshow:false
    }
    render() {    
        return (
            <div className="page subpage" id="scree">
               <AppHeader title="食光" right="筛选" left={
                <span className="iconfont icon-arrow-right
                "></span>
            } leftClick={this.props.history.goBack} rightClick={this.toggleShow}/>

             {this.state.isshow ?  <ScreenList/> : ''}
             <div className="scree-img">
             <img src="/images/Home.jpg" alt=""/>
             </div>
            </div>
        )
    }
    toggleShow = ()=>{
        this.setState({
            isshow:!this.state.isshow
        })
    }
}




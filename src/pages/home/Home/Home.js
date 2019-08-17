import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import './style.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="page" id="home">
                <AppHeader title="食光" right="筛选" rightClick={()=>{
                    this.props.history.push('/home/screen');
                }} />
              
                <AppScroll>

                </AppScroll>
            </div>
        )
    }
}




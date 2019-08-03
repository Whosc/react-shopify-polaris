import React from 'react'
import { Icon } from '@shopify/polaris';
import {  ArrowRightMinor} from '@shopify/polaris-icons';
import './index.css'
/*
SEO Score 样式
 */
export default function SEOScore(props) {
    const score = props.score;
    if(!score){
        return <Icon source={ArrowRightMinor} color="indigo" />
    }

    if(score==100){
        return <span className="seoscore success">{props.score}%</span>
    }

    if(score < 100){
        return <span className="seoscore error">{props.score}%</span>
    }
  
}
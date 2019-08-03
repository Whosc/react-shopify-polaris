import React from 'react'
import './index.css'
/*
SEO Score 样式
 */
export default function SEOScore(props) {
    const score = props.score;
    if(score < 100){
        return <span className="seoscore error">{props.score}%</span>
    }else{
        return <span className="seoscore success">{props.score}%</span>
    }
  
}
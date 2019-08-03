import React from 'react'
import './index.css'
/*
SEO Score 样式
 */
export default function SEOIssues(props) {
    const issues = props.issues;
    const text   = props.text;
    if(issues > 0){
        return <div><span className="seoissues">{issues}</span> {text?text:'warnings'}</div>
    }else{
        return <span className="welldone">well done</span>
    }
  
}
import React, { Component } from "react";
import { css } from "emotion";
import {
  skeletonClass,
  defaultBaseColor,
  defaultHighlightColor,
  defaultHeight,
  defaultWidth
} from "../../skeleton";

export default class SkeletonGraphTheme extends Component {
 static defaultProps = {
   color: defaultBaseColor,
   highlightColor: defaultHighlightColor,
   height: defaultHeight,
   width: defaultWidth
 };

 constructor(props) {
   super(props);

   this.themeGraphClass = css`
     .${skeletonClass} {
       border: 1px solid ${props.color};
       background-color: ${props.color};
       height: ${props.height};
       width: ${props.width};
       background-image: linear-gradient(
         90deg,
         ${props.color},
         ${props.highlightColor},
         ${props.color}
       );
       margin: 0 auto;
       position: relative;
       text-align: center;
     }
     
   `;
 }

 render() {
   return <div className={this.themeGraphClass}>{this.props.children}</div>;
 }
}

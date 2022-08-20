import React from 'react';
import '@willyfontenelle/dsc-design-system/dist/components/card';
import '@willyfontenelle/dsc-design-system/dist/components/tag';
import '@willyfontenelle/dsc-design-system/dist/components/typography';
import './style.scss';



export const CardContent = ({
    tagContent,
    headingContent,
    paragraphContent
  }) => {
    return (
      <dsc-card class='card-content'>
  
        <dsc-tag>{tagContent}</dsc-tag>
        <dsc-typography variant="h2" component="heading" size="lg">{headingContent}</dsc-typography>
        <dsc-typography component="paragraph">{paragraphContent}</dsc-typography>
  
      </dsc-card>
    )
  }
  
  
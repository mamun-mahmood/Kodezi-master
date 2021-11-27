// import React from 'react'
// import './ExplainCode.scss'
// import ImgWithText from '../common/img-with-text/ImgWithText'

// const ExplainCodeSubHeader = ({ imgUrl, heading, subHeading }) => {
//   return (
//     <div className="sub-header">
//       <ImgWithText imgUrl={imgUrl} heading={heading} subHeading={subHeading} />
//     </div>
//   )
// }

// export default ExplainCodeSubHeader
import React from 'react'
import ImgWithText from '../common/img-with-text/ImgWithText'
import './ExplainCode.scss'

const ExplainCodeSubHeader = ({ imgUrl, heading, subHeading }) => {
  return (
    <div className="sub-header">
      <div className="section_container">
        <ImgWithText
          imgUrl={imgUrl}
          heading={heading}
          subHeading={subHeading}
        />
      </div>
    </div>
  )
}

export default ExplainCodeSubHeader

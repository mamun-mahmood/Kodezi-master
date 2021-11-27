import styled from 'styled-components'

export const ContainerMain = styled.div`
  /* transition: background-color 0.25s ease-in-out; */
  /* background-color: ${(props) => (props.color ? props.color : '#ffffff')}; */
  /* background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage}) ` : ''}; */

  /* .page-width { */
  /* margin-right: auto;
    margin-left: auto; */
  ${'' /* padding-top: 200px; */}
  ${'' /* padding: 0 50px; */}

    /* @media (max-width: 767px) {
      padding: 0 20px;
    } */
  /* } */

  &.with-background-image {
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 1600px) {
    .page-width {
      ${'' /* width:1170px; */}
      ${
        '' /* padding-right: 387px;
      padding-left: 387px; */
      }
    }
  }
`

import { request, gql } from 'graphql-request'

const Master_url='https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clssip8871rxw01w9krnviqw2/master'

const sliderData=async()=>{
    const document = gql`
    query GetSliderData {
        sliders {
          id
          sliderName
          imageUrl {
            url
          }
        }
      }
`
const result = await request(Master_url, document)
return result
}

export default{
    sliderData,
}


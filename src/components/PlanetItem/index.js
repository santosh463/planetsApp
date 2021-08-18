// Write your code here
import {AppContainer, PlantsImage, Title, Description} from './styledComponents'

const PlanetItem = props => {
  const {planetsData} = props
  const {name, imageUrl, description} = planetsData

  return (
    <AppContainer>
      <PlantsImage src={imageUrl} alt={`planet ${name}`} />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </AppContainer>
  )
}

export default PlanetItem

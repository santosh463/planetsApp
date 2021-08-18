// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlantsImage = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 292px;
  }
`
export const Title = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
`
export const Description = styled.p`
  color: #f1f5f9;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 30px;
  text-align: center;
`

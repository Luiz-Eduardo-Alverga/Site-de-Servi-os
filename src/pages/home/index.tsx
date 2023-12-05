import { Asidebar } from '../../components/Sidebar'
import { ContentContainer, HomeContainer } from './style'
import scene2 from '../../assets/Scenes02.svg'

export function HomePage() {
  return (
    <div>
      <Asidebar />

      <HomeContainer>
        <ContentContainer>
          <img src={scene2} alt="" />
          <span>Aqui você encontra os melhores serviços</span>
          <p>
            Um site para te disponibilizar os melhores serviços disponiveis da
            sua regiao,onde você pode encotrar vários tipos de Serviços de
            acordo com sua necessidade
          </p>
        </ContentContainer>
      </HomeContainer>
    </div>
  )
}

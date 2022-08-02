import * as S from './styles'

const Main = ({
  title = 'Três Luas',
  description = 'Projeto Feito com NextJS da Loja Três Luas Moda Feminina'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="imagem da Lua e Loja três Luas" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="imagem da Lua e Loja três Luas"
    />
  </S.Wrapper>
)

export default Main

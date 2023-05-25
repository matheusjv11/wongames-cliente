import Button from 'components/Button'
import * as S from './styles'

type HighlightProps = {
  title: string,
  subtitle: string,
  buttonLabel: string,
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as='a' href={buttonLink} >{buttonLabel}</Button>
    </S.Content>
  </S.Wrapper>
)
export default Highlight

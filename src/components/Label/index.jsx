import { Container } from './styles';

export function Label({label, title, max, ...rest}) {
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <input id={label} {...rest} />
    </Container>
  )
}
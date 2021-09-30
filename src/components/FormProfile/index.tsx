import Link from 'next/link'

import TextField from '../TextField'
import Heading from '../Heading'
import Button from '../Button'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        label="E-mail"
        disabled
        initialValue={email}
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button size="medium" minimal as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile

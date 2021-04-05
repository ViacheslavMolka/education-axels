import styled from 'styled-components';

const LoginWrapper = styled.div`
display: flex;
flex-direction: column;
width: 300px;
& form .line div {
    width: 300px;
}
& form .password {
    margin-top: 16px;
}
& form .password input[placeholder] {
    color: #000;
}
& form .password div div{
    width: 40px;
}
`

export default LoginWrapper;

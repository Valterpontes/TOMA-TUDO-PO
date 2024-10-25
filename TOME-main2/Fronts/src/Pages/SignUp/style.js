import styled from "styled-components"
import BackgroundImg from "../../Assets/background.jpg"

export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;

` 

export const Form = styled.form`

    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #4e35fc;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`

export const Background = styled.div`

    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;

`
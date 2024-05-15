import React from "react";
import {DivPrincipal, Div, Title, SubTitulo, Paragrafo, Div2, Button, Title2, Preco, Paragrafo2, Title3, Div3,Paragrafo3, DivDosDois } from "../Styles/Page";
const Page = () => {
    return (<>
        <DivPrincipal>
            <Div>
                <Title>Join our community</Title>
                <SubTitulo>30-day, hassle-free money back guarantee</SubTitulo>
                <Paragrafo>Gain access to our full library of tutorials along with expert code raviews. Perfect for any developers who are serious about horing their skills.</Paragrafo>
            </Div>
             <DivDosDois>
            <Div2>
                <Title2>Monthly Subscription</Title2>
                <Preco>$29</Preco>
                <Paragrafo2>Full access for less than $1 a day</Paragrafo2>
                <Button>Sign Up</Button>
            </Div2>


            <Div3>
                <Title3>Why Us</Title3>
                <Paragrafo3>Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Aut eius molestias quia! Excepturi facilis assumenda
                    eligendi aliquid tempore? Enim, doloremque. Porro nobis
                </Paragrafo3>
            </Div3>
            </DivDosDois>

        </DivPrincipal>


    </>
    )
}
export default Page;
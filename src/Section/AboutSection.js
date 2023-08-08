import React from 'react'

import { styled } from "styled-components";


const Section = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`


export default function AboutSection() {
  return (
    <Section>AboutSection</Section>
  )
}

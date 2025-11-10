import React from "react"
import { Helmet } from "react-helmet"

export default function Seo({ title }) {
  return (
    <Helmet>
      <title>{title} | Pesca Extrema Mundial</title>
      <meta name="description" content="Blog de pesca extrema: tucunaré, truchas y GTs" />
      <meta name="theme-color" content="#3182ce" />
    </Helmet>
  )
}

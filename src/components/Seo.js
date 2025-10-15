// Seo.js
import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, url, image }) => {
  // JSON-LD structured data for a personal portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Uday Venkat",
    "url": url,
    "sameAs": [
      "https://www.linkedin.com/in/uday-venkat-07a177221/",
      "https://github.com/Udayvenkat4578",
      "https://www.behance.net/udayvenkat",
      "https://dribbble.com/uday_venkat__",
      "https://medium.com/@udayvenkat4578"
    ],
    "jobTitle": "Web Developer & UI/UX Designer",
    "image": image,
    "description": description,
    "mainEntityOfPage": url
  };

  return (
    <Helmet>
      {/* 🔹 Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* 🔹 Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* 🔹 Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yourtwitterhandle" />

      {/* 🔹 JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* 🔹 Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default Seo;

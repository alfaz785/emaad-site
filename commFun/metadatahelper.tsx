// metadataHelper.ts (utility file for metadata)

import { Metadata } from "next";

export const generateMetadata = (pageName: string): Metadata => {
  const baseTitle =
    "Top Mobile App & Software Development Company in Gujarat, India | Emaad Infotech";
  const baseDescription = `Emaad Infotech is India's top-rated digital marketing company providing. We use white-hat and ethical strategies in SEO, PPC, Social Media, and more.`;

  return {
    title: baseTitle,
    description: baseDescription,
    keywords:
      "Emaad Infotech, NGO Website, Software Development Company, Himmatnagar Gujarat India, Top software Maker, mobile friendly website, Housing Society Website, SEO Expert, Himmatnagar 2020, Online Pharmacy, how to create online pharmacy website, online pharmacy website template, online pharmacy system",
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `https://www.emaadinfotech.com/${pageName}`,
      siteName: "Emaad Infotech",
      images: [
        {
          url: "https://www.emaadinfotech.com/assets/images/emaadlogo.png",
          width: 560,
          height: 315,
          alt: "Emaad Infotech Logo",
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description:
        "We Provides Mobile Friendly Website, Android/iOS app Design, Logo Creation, Digital Marketing, Website Migration, Domain Hosting / Bulk SMS Services, SSL Certificates and more..",
      site: "@EmaadInfotech",
      creator: "@EmaadInfotech",
      images: "https://www.emaadinfotech.com/assets/images/emaadlogo.png",
    },
  };
};

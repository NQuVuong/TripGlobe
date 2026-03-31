import React from 'react'
import HeaderBg from '../assets/signup-bg.jpg'

const termsData = [
    {
        title: "Privacy Policy",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Information Collection and Use",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Log Data",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Cookies",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Service Providers",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Security",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Links to Other Sites",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    },
    {
        title: "Contact Us",
        content: [
            "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection, use, and disclosure of Personal Information if anyone decided to",
            "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
            "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Triptopia unless otherwise defined in this Privacy Policy."
        ]
    }
]

const TermsAndCondition = () => {
    return (
        <main className="w-full bg-white">

            {/* 1. Header Banner */}
            <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src={HeaderBg} alt="Terms and Condition" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
                </div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide uppercase">Terms & Condition</h1>
                    <p className="text-[13px] font-bold text-white/90">
                        Home <span className="text-[#ff6b35] mx-1.5">•</span> TERMS & CONDITION
                    </p>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-10">

                    <div className="flex flex-col gap-12">
                        {termsData.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">

                                <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a365d] mb-2 tracking-wide">
                                    {section.title}
                                </h2>

                                <div className="flex flex-col gap-5">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p
                                            key={pIndex}
                                            className="text-slate-500 text-[15px] leading-[1.8] font-normal"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    )
}

export default TermsAndCondition
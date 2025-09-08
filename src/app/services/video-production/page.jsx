"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Play, Camera, Edit3, Zap, CheckCircle, Star, ArrowRight, Sparkles, Video, Film, Mic } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function VideoProduction() {
    const [openFAQ, setOpenFAQ] = useState(null)

    const videoTypes = [
        {
            title: "TV Commercials",
            description: "Stand out on screen with powerful TV commercial production that grabs attention. We deliver cinematic visuals and compelling scripts to make your brand unforgettable.",
            icon: "📺"
        },
        {
            title: "Brand Films",
            description: "Showcase your identity with creative brand film production. From startups to enterprises, we craft branded videos that build trust and inspire engagement.",
            icon: "🎬"
        },
        {
            title: "Corporate Films",
            description: "Professional corporate video production for company profiles, training videos, and internal communication—designed to reflect your brand's values and vision.",
            icon: "🏢"
        },
        {
            title: "Documentary Films",
            description: "As a leading documentary film production company, we create visually rich, impactful narratives for NGOs, CSR projects, and educational purposes.",
            icon: "📽️"
        },
        {
            title: "Music Videos",
            description: "Our music video production services deliver cinematic storytelling for artists and bands, syncing visuals perfectly with your sound and style.",
            icon: "🎵"
        },
        {
            title: "Short Films",
            description: "From festival entries to branded storytelling, we produce creative short films that resonate with your audience and leave a lasting impression.",
            icon: "🎭"
        },
        {
            title: "Product Video Shoots",
            description: "Highlight your products with high-quality product video production that drives sales and elevates your brand's digital presence.",
            icon: "📦"
        },
        {
            title: "Promotional & Reels Videos",
            description: "Create buzz with engaging promotional videos and Instagram reels that capture attention and boost brand visibility on social media.",
            icon: "📱"
        },
        {
            title: "Testimonial Videos",
            description: "Build trust with authentic testimonial video production, showcasing real customer experiences to strengthen your credibility and brand reputation.",
            icon: "💬"
        },
        {
            title: "Event Coverage",
            description: "Comprehensive event video production for conferences, launches, and celebrations—capturing every key moment with precision and creativity.",
            icon: "🎉"
        },
        {
            title: "Interview Videos",
            description: "Professional interview video production for leaders, influencers, or brand representatives—delivering authentic and engaging on-camera conversations.",
            icon: "🎤"
        },
        {
            title: "Training & Educational Videos",
            description: "Deliver impactful training and educational videos that enhance learning, streamline onboarding, and empower your workforce effectively.",
            icon: "📚"
        }
    ]

    const processSteps = [
        {
            step: "01",
            title: "Pre-Production",
            description: "Every powerful video begins with a solid plan. We brainstorm concepts, conduct research, finalize scripts, select ideal locations, and craft detailed storyboards to ensure clear creative direction.",
            icon: Edit3,
            color: "from-blue-500 to-purple-600",
            bgColor: "bg-blue-50"
        },
        {
            step: "02", 
            title: "Production",
            description: "Lights. Camera. Action. Our expert crew handles shooting with high-end cameras, professional lighting, and sound equipment to deliver exceptional quality with cinematic precision.",
            icon: Camera,
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-50"
        },
        {
            step: "03",
            title: "Post-Production", 
            description: "Here's where the magic happens. Our skilled editors bring visuals, audio, sound effects, and dynamic graphics together to create a seamless, engaging final product.",
            icon: Zap,
            color: "from-pink-500 to-red-600",
            bgColor: "bg-pink-50"
        }
    ]

    const whyChooseUs = [
        "Creative-led video production agency with marketing insight",
        "End-to-end video making company with in-house crew and equipment", 
        "Timely delivery and client-first approach",
        "Extensive experience across industries",
        "Advanced technology and latest filming techniques",
        "Delhi NCR-based, proudly delivering projects nationwide",
        "Expertise in creating both promotional and long-form content",
        "Dedicated post-production team ensuring high-quality final edits"
    ]

    const faqs = [
        {
            question: "What types of videos do you produce?",
            answer: "We specialize in live ad shoots, TV commercials, brand films, music videos, corporate videos, short films, and documentaries."
        },
        {
            question: "Do you offer scriptwriting and concept development?",
            answer: "Absolutely! Our team takes care of everything—from developing the script and storyboard to scouting locations and managing casting."
        },
        {
            question: "What is the typical timeline for the video production process?",
            answer: "It varies depending on the project. A simple ad shoot may take a few days, while a brand film or documentary may take several weeks."
        },
        {
            question: "Can I be involved in the creative process?",
            answer: "Absolutely! We encourage collaboration during all stages—especially in pre-production and editing."
        },
        {
            question: "Do you offer animation and motion graphics?",
            answer: "Yes, we provide 2D/3D animation, motion graphics, and visual effects as part of our video services."
        },
        {
            question: "Are your services available outside Delhi NCR?",
            answer: "Yes, while we're based in Delhi NCR, we offer pan-India video production support based on project scope."
        },
        {
            question: "What's your pricing model?",
            answer: "We offer flexible, project-based pricing depending on video type, duration, and production complexity. Get in touch for a custom quote."
        },
        {
            question: "Do you handle post-production only?",
            answer: "Yes, if you already have footage, we offer standalone post-production services including editing, color grading, and sound design."
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Minimal Hero Section */}
            <section className="relative pt-20 pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">

                        
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            Videos That 
                            <span className="text-[#B944EA]"> Speak</span>.<br />
                            Stories That 
                            <span className="text-[#00B7FF]"> Sell</span>.
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            High-quality live video production for brands, businesses, and events <br /> crafted to inspire and engage.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-200 hover:opacity-90" style={{background: 'linear-gradient(to right, #B944EA, #00B7FF)'}}>
                                Start Your Project
                            </button>
                            <button className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-all duration-200">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story, Our Lens</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Welcome to <span className="font-semibold text-[#B944EA]">Kusum Innovations</span> – a leading video production company in Delhi NCR that transforms real moments into unforgettable visual stories. As a full-service live shoot video production agency, we specialize in creating high-quality videos that connect with your audience, build trust, and amplify your brand presence.
                            </p>
                            <p>
                                From corporate films, product launch videos, brand commercials, event coverage, and testimonial videos to social media ads and promotional campaigns, we handle everything – concept, scripting, shooting, editing, and final delivery – under one roof.
                            </p>
                            <p>
                                At Kusum Innovations, we combine creative storytelling, cinematic visuals, and advanced production technology to craft videos that do more than just look good – they deliver results. With industry-standard equipment, a skilled crew, and years of experience, we ensure your video stands out in today's competitive digital space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Types */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Video Production Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive video solutions tailored to your brand's unique needs and objectives.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoTypes.map((service, index) => (
                            <div key={index} className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#B944EA]/30 hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#B944EA] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Process */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full text-sm font-semibold text-[#B944EA] mb-6">
                            <Zap className="h-4 w-4" />
                            OUR METHODOLOGY
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">From Vision to Video</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A streamlined approach that ensures every project delivers exceptional results and exceeds expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Connection Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-6 z-0">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                )}

                                <div className={`relative z-10 p-8 ${step.bgColor} rounded-3xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}>
                                    {/* Step Number */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-xl mb-6 shadow-lg`}>
                                        {step.step}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className={`h-8 w-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#B944EA] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] rounded-full flex items-center justify-center">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-gray-900">Ready to start your project?</p>
                                <p className="text-sm text-gray-600">Let's bring your vision to life</p>
                            </div>
                            <button className="px-6 py-3 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner with Kusum Innovations?</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                At Kusum Innovations, we're more than just a video production company—we're your creative partner in bringing ideas to life.
                            </p>
                            <div className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-[#B944EA] flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-gradient-to-br from-[#B944EA]/10 to-[#00B7FF]/10 rounded-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <Star className="h-10 w-10 text-[#B944EA]" />
                                    </div>
                                    <p className="text-gray-600 font-medium">Your Vision, Our Expertise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about our video production services.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    {openFAQ === index ? (
                                        <ChevronUp className="h-5 w-5 text-[#B944EA]" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                                {openFAQ === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B944EA]/10 via-transparent to-[#00B7FF]/10"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Searching for a Professional Video Production Company in Delhi?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Look no further. Kusum Innovations brings your vision to life through expertly executed live shoots—from brand films and corporate videos to product promos—crafted to captivate your audience and elevate your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(to right, #B944EA, #00B7FF)'}}>
                            <Sparkles className="h-5 w-5" />
                            Get Free Quote
                        </button>
                        <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#B944EA] hover:text-[#B944EA] transition-all duration-300">
                            Schedule Consultation
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-medium text-[#B944EA] mb-2">
                            "Lights, camera, action—your story deserves to be told."
                        </p>
                        <p className="text-gray-600">Contact us today for a free quote.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
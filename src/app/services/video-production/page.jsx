"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Play, Camera, Edit3, Zap, CheckCircle, Star, ArrowRight, Sparkles, Video, Film, Mic, Award, Users, Clock, Target, Quote, Instagram, Youtube, Facebook, Twitter } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function VideoProduction() {
    const [openFAQ, setOpenFAQ] = useState(null)
    const [activeService, setActiveService] = useState(0)

    // Auto-change tabs every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % 6)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const videoTypes = [
        {
            title: "TV Commercials",
            description: "Stand out on screen with powerful TV commercial production that grabs attention. We deliver cinematic visuals and compelling scripts to make your brand unforgettable.",
            icon: "📺",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Brand Films",
            description: "Showcase your identity with creative brand film production. From startups to enterprises, we craft branded videos that build trust and inspire engagement.",
            icon: "🎬",
            image: "https://images.unsplash.com/photo-1489599804151-0e4d0b0b5b5b?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Corporate Films",
            description: "Professional corporate video production for company profiles, training videos, and internal communication—designed to reflect your brand's values and vision.",
            icon: "🏢",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Documentary Films",
            description: "As a leading documentary film production company, we create visually rich, impactful narratives for NGOs, CSR projects, and educational purposes.",
            icon: "📸",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Music Videos",
            description: "Our music video production services deliver cinematic storytelling for artists and bands, syncing visuals perfectly with your sound and style.",
            icon: "🎵",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Short Films",
            description: "From festival entries to branded storytelling, we produce creative short films that resonate with your audience and leave a lasting impression.",
            icon: "🎭",
            image: "https://images.unsplash.com/photo-1489599804151-0e4d0b0b5b5b?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Product Video Shoots",
            description: "Highlight your products with high-quality product video production that drives sales and elevates your brand's digital presence.",
            icon: "📦",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Promotional & Reels Videos",
            description: "Create buzz with engaging promotional videos and Instagram reels that capture attention and boost brand visibility on social media.",
            icon: "📱",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Testimonial Videos",
            description: "Build trust with authentic testimonial video production, showcasing real customer experiences to strengthen your credibility and brand reputation.",
            icon: "💬",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Event Coverage",
            description: "Comprehensive event video production for conferences, launches, and celebrations—capturing every key moment with precision and creativity.",
            icon: "🎉",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Interview Videos",
            description: "Professional interview video production for leaders, influencers, or brand representatives—delivering authentic and engaging on-camera conversations.",
            icon: "🎤",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
        },
        {
            title: "Training & Educational Videos",
            description: "Deliver impactful training and educational videos that enhance learning, streamline onboarding, and empower your workforce effectively.",
            icon: "📚",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
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

    const stats = [
        { number: "500+", label: "Projects Completed", icon: Award },
        { number: "50+", label: "Happy Clients", icon: Users },
        { number: "5+", label: "Years Experience", icon: Clock },
        { number: "100%", label: "Client Satisfaction", icon: Target }
    ]

    const testimonials = [
        {
            quote: "Kusum Innovations transformed our brand story into a compelling visual narrative. Their attention to detail and creative vision exceeded our expectations.",
            author: "Sarah Johnson",
            role: "Marketing Director, TechCorp",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        {
            quote: "Professional, creative, and reliable. They delivered our corporate video on time and within budget. Highly recommended!",
            author: "Michael Chen",
            role: "CEO, StartupXYZ",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
            quote: "The team's expertise in video production is unmatched. They brought our product launch to life with stunning visuals.",
            author: "Emily Rodriguez",
            role: "Product Manager, InnovateLab",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
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
            
            {/* Modern Professional Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-[#00B7FF]/10 to-[#B944EA]/10 rounded-full blur-xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                           
                            
                            {/* Main Headline */}
                            <div>
                                <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight mb-6">
                                    Stories That
                                    <span className="block bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">
                                        Move Mountains
                                    </span>
                                </h1>
                            </div>
                            
                            {/* Subtitle */}
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                                    We craft <span className="font-semibold text-[#B944EA]">cinematic experiences</span> that captivate, inspire, and drive results.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    From concept to final cut, we bring your vision to life with unmatched creativity and precision.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] text-white font-semibold rounded-full hover:bg-[#A03BD6] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <Play className="h-5 w-5" />
                                    Start Your Project
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#B944EA] hover:text-[#B944EA] transition-all duration-300">
                                    <Video className="h-5 w-5" />
                                    View Our Work
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <img 
                                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=450&fit=crop&crop=center" 
                                        alt="Video Production Team" 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Single Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=450&fit=crop&crop=center" 
                                    alt="Our Story - Video Production Team" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Our Story, 
                                <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent"> Our Lens</span>
                            </h2>
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
                </div>
            </section>

            {/* Services Section with Interactive Tabs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full text-sm font-semibold text-[#B944EA] mb-6">
                            <Video className="h-4 w-4" />
                            OUR SERVICES
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Video Production Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive video solutions tailored to your brand's unique needs and objectives.
                        </p>
                    </div>

                    {/* Service Tabs */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-4">
                            {videoTypes.slice(0, 6).map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeService === index
                                            ? 'bg-[#B944EA] text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Service Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-4xl mb-6 flex items-center gap-2 ">{videoTypes[activeService].icon}
                            <h3 className="text-3xl font-bold text-gray-900">
                                {videoTypes[activeService].title}
                            </h3>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {videoTypes[activeService].description}
                            </p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#B944EA] text-white font-semibold rounded-full hover:bg-[#A03BD6] transition-all duration-300">
                                Learn More
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src={videoTypes[activeService].image} 
                                    alt={videoTypes[activeService].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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

                    {/* Process Steps with Content Left, Image Right Layout */}
                    <div className="space-y-24">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                {/* Content - Left for even, Right for odd */}
                                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="space-y-6">
                                        {/* Step Number and Icon */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-xl shadow-lg`}>
                                                {step.step}
                                            </div>
                                            
                                        {/* Title */}
                                        <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                                            {step.title}
                                        </h3>
                                        </div>


                                        {/* Description */}
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Key Features */}
                                        <div className="space-y-3">
                                            {index === 0 && (
                                                <>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Concept Development & Brainstorming</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Script Writing & Storyboarding</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Location Scouting & Casting</span>
                                                    </div>
                                                </>
                                            )}
                                            {index === 1 && (
                                                <>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Professional Camera Equipment</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Cinematic Lighting Setup</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">High-Quality Audio Recording</span>
                                                    </div>
                                                </>
                                            )}
                                            {index === 2 && (
                                                <>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Professional Video Editing</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Color Grading & Visual Effects</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">Sound Design & Music Integration</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-4">
                                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#B944EA] text-white font-semibold rounded-full hover:bg-[#A03BD6] transition-all duration-300 transform hover:scale-105">
                                                Learn More
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Image - Right for even, Left for odd */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <div className="relative group">
                                        {/* Main Image */}
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                            <img 
                                                src={
                                                    index === 0 
                                                        ? "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
                                                        : index === 1
                                                        ? "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&crop=center"
                                                        : "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center"
                                                }
                                                alt={step.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Connection Lines for Mobile */}
                    <div className="lg:hidden mt-12 flex justify-center">
                        <div className="flex flex-col items-center space-y-8">
                            {processSteps.slice(0, -1).map((_, index) => (
                                <div key={index} className="w-0.5 h-16 bg-gradient-to-b from-[#B944EA] to-[#00B7FF]"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full text-sm font-semibold text-[#B944EA] mb-6">
                            <Quote className="h-4 w-4" />
                            TESTIMONIALS
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full text-sm font-semibold text-[#B944EA] mb-6">
                                <Star className="h-4 w-4" />
                                WHY CHOOSE US
                            </div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Partner with Kusum Innovations?</h2>
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
                            <div className="aspect-video bg-gradient-to-br from-[#B944EA]/10 to-[#00B7FF]/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop&crop=center" 
                                    alt="Our Team" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="relative z-10 text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Star className="h-10 w-10 text-white" />
                                    </div>
                                    <p className="text-xl font-medium">Your Vision, Our Expertise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full text-sm font-semibold text-[#B944EA] mb-6">
                            <ChevronDown className="h-4 w-4" />
                            FAQ
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about our video production services.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <button
                                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                >
                                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                    {openFAQ === index ? (
                                        <ChevronUp className="h-6 w-6 text-[#B944EA]" />
                                    ) : (
                                        <ChevronDown className="h-6 w-6 text-gray-400" />
                                    )}
                                </button>
                                {openFAQ === index && (
                                    <div className="px-8 pb-6">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B944EA]/10 via-transparent to-[#00B7FF]/10"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full text-sm font-semibold text-[#B944EA] mb-6">
                        <Sparkles className="h-4 w-4" />
                        GET STARTED
                    </div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-8">
                        Ready to Create Something Amazing?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        Let's bring your vision to life through expertly executed video production. 
                        From concept to final cut, we're here to make your story unforgettable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] text-white font-semibold rounded-full hover:bg-[#A03BD6] transition-all duration-300 transform hover:scale-105">
                            <Sparkles className="h-5 w-5" />
                            Get Free Quote
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#B944EA] hover:text-[#B944EA] transition-all duration-300">
                            <Video className="h-5 w-5" />
                            Schedule Consultation
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-medium text-[#B944EA] mb-2">
                            "Lights, camera, action—your story deserves to be told."
                        </p>
                        <p className="text-gray-600">Contact us today for a free consultation.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Kusum Innovations</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                A leading video production company in Delhi NCR, transforming ideas into compelling visual stories that captivate and inspire.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B944EA] transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B944EA] transition-colors">
                                    <Youtube className="h-5 w-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B944EA] transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B944EA] transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">TV Commercials</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Brand Films</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Corporate Videos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Music Videos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Delhi NCR, India</li>
                                <li>+91 98765 43210</li>
                                <li>hello@kusuminnovations.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Kusum Innovations. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
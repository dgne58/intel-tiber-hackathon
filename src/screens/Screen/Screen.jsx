import React, { useState, useEffect } from "react";
import { ArrowRightIcon, Upload } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Simple SVG Loading Spinner Component
const LoadingSpinner = ({ className = "h-10 w-10" }) => (
  <svg
    className={`animate-spin text-white ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// SVG Gauge Meter Component (you can hook this up where needed)
const GaugeMeter = ({ percentage, size = 140, strokeWidth = 16 }) => {
  const validPercentage = Math.min(100, Math.max(0, percentage || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.75; // 270 degrees
  const offset = arcLength * (1 - validPercentage / 100);
  const center = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="transform -rotate-[135deg]"
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth={strokeWidth}
        strokeDasharray={`${arcLength} ${circumference - arcLength}`} 
        strokeLinecap="round"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeDasharray={`${arcLength} ${circumference - arcLength}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
      />
    </svg>
  );
};

// Main Screen Component (export default)
export default function Screen() {
  const [confidenceScore, setConfidenceScore] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchConfidenceScore = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.obscura.ai/confidence');
      if (!response.ok) throw new Error(`API request failed: ${response.status}`);
      const data = await response.json();
      setConfidenceScore(
        typeof data.score === 'number' && data.score >= 0 && data.score <= 100
          ? data.score
          : 98
      );
    } catch (error) {
      console.error(error);
      setConfidenceScore(98);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!['image/png','image/jpeg'].includes(file.type)) {
      alert('Please upload a PNG or JPG image file.');
      return;
    }
    fetchConfidenceScore();
  };

  useEffect(() => {
    fetchConfidenceScore();
  }, []);

  useEffect(() => {
    if (isLoading || confidenceScore === 0) {
      setAnimatedScore(isLoading ? 0 : 0);
      return;
    }
    let current = 0;
    const target = confidenceScore;
    const timer = setInterval(() => {
      current++;
      setAnimatedScore(current);
      if (current >= target) clearInterval(timer);
    }, 1000 / target);
    return () => clearInterval(timer);
  }, [isLoading, confidenceScore]);

    const socialLinks = [
        { icon: "https://c.animaapp.com/KiVzG1Ou/img/image--mx-auto-.svg", alt: "Social media icon" },
        { icon: "https://c.animaapp.com/KiVzG1Ou/img/image--mx-auto--1.svg", alt: "Social media icon" },
        { bgImage: "https://c.animaapp.com/KiVzG1Ou/img/clip-path-group-6@2x.png", alt: "Social media icon" },
    ];

    return (
        <main
            className="bg-white flex flex-row justify-center w-full"
            data-model-id="1:2"
        >
            <div className="bg-white overflow-hidden w-full max-w-[1425px] h-[2233px]"> {/* Adjusted height or make it dynamic */}
                <section className="relative h-[2257px]"> {/* Adjusted height or make it dynamic */}
                    <div className="absolute w-full h-full top-0 left-0 bg-white overflow-hidden"> {/* Use h-full */}
                        <div className="relative h-full"> {/* Use h-full */}
                            <div className="flex flex-col h-full items-start left-0 [background:linear-gradient(180deg,rgba(27,27,29,1)_0%,rgba(7,7,8,1)_100%)] w-full absolute top-0">
                                {/* Header/Navigation */}
                                <header className="relative w-full h-[73px] border-b [border-bottom-style:solid] border-[#ffffff0f]">
                                    <nav className="flex w-[950px] h-8 items-start gap-[302.16px] pl-2 pr-[64.5px] py-0 relative top-5 left-1/2 transform -translate-x-1/2">
                                        <div className="relative w-[458.85px] h-8">
                                            <div className="flex w-[325px] h-8 items-start gap-6 pl-0 pr-[341.09px] py-0 absolute top-0 left-[134px]">
                                                <div className="relative w-[84.82px] h-8 mr-[-101.06px] rounded-lg">
                                                    <div className="absolute h-6 top-1 left-1 [font-family:'Helvetica-Regular',Helvetica] font-normal text-slate-300 text-base tracking-[0] leading-6 whitespace-nowrap">
                                                        Features
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                className="absolute w-[110px] h-5 top-1.5 left-0"
                                                alt="Obscura logo"
                                                src="https://c.animaapp.com/KiVzG1Ou/img/icon.svg"
                                            />
                                        </div>
                                    </nav>
                                </header>

                                <div className="relative w-full flex-grow"> {/* Use flex-grow for main content area */}
                                    <div className="relative w-[1446px] h-full top-[-79px] left-[-13px]"> {/* Use h-full */}
                                        {/* Vertical guide lines */}
                                        <div className="left-[130px] absolute w-px h-full top-0 [background:linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(31,31,31,1)_10%)]" /> {/* Use h-full */}
                                        <div className="left-[1320px] absolute w-px h-full top-0 [background:linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(31,31,31,1)_10%)]" /> {/* Use h-full */}

                                        {/* Footer */}
                                        <footer className="absolute w-[1423px] h-[120px] top-[1100px] left-0.5"> {/* Keep footer positioning as is for now */}
                                            <div className="relative h-[120px]">
                                                <div className="absolute w-[1423px] h-px top-[57px] left-0 border-b [border-bottom-style:solid] border-[#1f1f1f]" />
                                                <div className="absolute w-[1423px] h-px top-20 left-0 border-b [border-bottom-style:solid] border-[#1f1f1f]" />
                                                <div className="absolute w-[1174px] h-[120px] top-0 left-1/2 transform -translate-x-1/2">
                                                    <div className="relative w-[1188px] h-[488px]">
                                                        <div className="h-[488px] overflow-hidden">
                                                            <div className="relative w-[1188px] h-[488px] left-0.5">
                                                                <div className="w-[1186px] h-[170px] bg-[url(https://c.animaapp.com/KiVzG1Ou/img/vector-6.svg)] bg-[100%_100%]">
                                                                    <div className="relative w-[454px] h-[83px] top-[33px] left-[89px]">
                                                                        <img
                                                                            className="absolute w-[110px] h-5 top-0 left-0"
                                                                            alt="Obscura logo"
                                                                            src="https://c.animaapp.com/KiVzG1Ou/img/icon-1.svg"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-[983px] h-[23px] items-start gap-[405.03px] pl-0 pr-[46.75px] py-0 absolute top-[57px] left-1/2 transform -translate-x-1/2">
                                                    <div className="relative w-[422.47px] h-16 mb-[-41.08px] opacity-60">
                                                        <div className="absolute h-6 top-5 left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                                                            Copyright © 2025 Obscura. All rights reserved.
                                                        </div>
                                                    </div>
                                                    <div className="flex w-[168px] h-16 items-start pl-0 pr-[987.25px] py-0 relative mb-[-41.08px] mr-[-58.83px]">
                                                        {socialLinks.map((link, index) => (
                                                            <div
                                                                key={index}
                                                                className="relative w-14 h-16 mr-[-875.25px] border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#1f1f1f]"
                                                                style={{
                                                                    borderLeft: index === 0 ? "1px solid #1f1f1f" : "none",
                                                                    marginRight: index === 0 ? "-875.25px" : index === 1 ? "-931.25px" : "-987.25px",
                                                                }}
                                                            >
                                                                {link.icon ? (
                                                                    <img className="absolute w-6 h-6 top-5 left-4" alt={link.alt} src={link.icon} />
                                                                ) : (
                                                                    <div className="relative w-6 h-6 top-5 left-4" style={{ backgroundImage: `url(${link.bgImage})`, backgroundSize: "100% 100%" }} />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>

                                        {/* Horizontal dividers - Adjust their 'top' if content height changes */}
                                        <div className="top-[2691px] left-1.5 absolute w-[1440px] h-px border-b [border-bottom-style:solid] border-[#1f1f1f]" />
                                        <div className="top-[3359px] left-1.5 absolute w-[1440px] h-px border-b [border-bottom-style:solid] border-[#1f1f1f]" />
                                        <div className="top-[4648px] left-1.5 absolute w-[1440px] h-px border-b [border-bottom-style:solid] border-[#1f1f1f]" />

                                        {/* Hero Section */}
                                        <div className="absolute w-full h-[1058px] top-[79px] left-[13px]">
                                            <div className="relative w-[1440px] h-[1137px] top-[-79px] -left-2">
                                                <div className="h-[1058px] left-2 w-full absolute top-0">
                                                    <div className="relative w-[1426px] h-[1565px] top-[-125px]">
                                                        <div className="absolute w-[1426px] h-[1434px] top-[131px] left-0 bg-[url(https://c.animaapp.com/KiVzG1Ou/img/image--noise-texture-.png)] bg-cover bg-[60%_40%] opacity-95" />
                                                        <div className="absolute w-[691px] h-[818px] top-[125px] left-[101px] mix-blend-overlay opacity-80"><img className="absolute w-[691px] h-[812px] top-1.5 left-0 mix-blend-overlay" alt="Background effect" src="https://c.animaapp.com/KiVzG1Ou/img/group-4.png" /></div>
                                                        <div className="absolute w-[519px] h-[724px] top-[125px] left-[907px] mix-blend-overlay opacity-80"><img className="absolute w-[518px] h-[718px] top-1.5 left-0 mix-blend-overlay" alt="Background effect" src="https://c.animaapp.com/KiVzG1Ou/img/group-5.png" /></div>
                                                        <div className="absolute w-[182px] h-[129px] top-[245px] left-[420px] mix-blend-overlay opacity-90"><img className="absolute w-[180px] h-32 top-px left-px mix-blend-overlay" alt="Background effect" src="https://c.animaapp.com/KiVzG1Ou/img/group-6@2x.png" /></div>
                                                        <div className="w-[110px] h-[38px] top-[504px] left-[1025px] bg-white rounded-[55.15px] rotate-[-25.10deg] blur-lg opacity-[0.12] absolute mix-blend-overlay" />
                                                        <div className="absolute w-[1365px] h-[705px] top-[204px] left-[18px]"><img className="absolute w-[1251px] h-[705px] top-0 left-[114px]" alt="Background effect" src="https://c.animaapp.com/KiVzG1Ou/img/group-7.png" /></div>
                                                        <div className="w-[572px] h-[572px] top-0 left-[526px] bg-[#9cedff] rounded-[286px] blur-3xl opacity-90 brightness-100 saturation-0 absolute mix-blend-overlay" />
                                                    </div>
                                                </div>
                                                <div className="absolute w-px h-[1137px] top-0 left-[244px] [background:linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(31,31,31,1)_30%)]" />
                                                <div className="absolute w-[839px] h-[1137px] top-0 left-[356px] brightness-110 overflow-hidden"><div className="relative w-[840px] h-[568px] top-[-27px] left-[-234px]"><img className="absolute w-[390px] h-[535px] top-[33px] left-[234px]" alt="Background effect" src="https://c.animaapp.com/KiVzG1Ou/img/clip-path-group-7.png" /></div></div>
                                                <div className="absolute w-px h-[1137px] top-0 left-[1195px] [background:linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(31,31,31,1)_60%)]" />
                                                <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#ffffff0a] rounded-full flex items-center gap-2 backdrop-blur-md">
                                                    <img src="https://c.animaapp.com/KiVzG1Ou/img/icon.svg" alt="Obscura logo" className="w-[14px] h-[14px]" />
                                                    <span className="text-sm text-[#ffffffcc] font-normal [font-family:'Inter',Helvetica]">Obscura is currently in beta</span>
                                                    <img src="https://c.animaapp.com/KiVzG1Ou/img/chevron-right-1@2x.png" alt="chevron" className="w-[6px] h-[10px] opacity-70" />
                                                </div>
                                                <div className="absolute w-[633px] h-[380px] top-[171px] left-1/2 transform -translate-x-1/2">
                                                    <div className="absolute h-[70px] top-16 left-1/2 transform -translate-x-1/2 text-center font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#bababa] text-[64px] tracking-[-3.69px] leading-[65px] whitespace-nowrap [font-family:'Inter',Helvetica]">detect. distinguish.</div>
                                                    <div className="absolute h-[63px] top-[143px] left-1/2 transform -translate-x-1/2 text-center font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#bababa] text-[64px] tracking-[-3.69px] leading-[65px] whitespace-nowrap [font-family:'Inter',Helvetica]">decide.</div>
                                                    <div className="flex flex-col w-[629px] items-center justify-center absolute top-[238px] left-0">
                                                        <p className="text-[#ffffff80] text-xl text-center font-normal leading-[26px] [font-family:'Inter',Helvetica]">Obscura detects AI-generated images with confidence and speed.</p>
                                                        <p className="text-[#ffffff80] text-xl text-center font-normal leading-[26px] [font-family:'Inter',Helvetica]">Expose what's real in a world of fakes.</p>
                                                    </div>
                                                    <Button variant="outline" className="absolute w-[136px] h-[39px] top-[325px] left-1/2 transform -translate-x-1/2 rounded-[26px] border border-solid border-white shadow-[0px_1px_3px_#00000029] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"><span className="text-sm font-medium text-[#09090a]">Get Started</span></Button>
                                                </div>
                                                <div className="absolute w-[1440px] h-[506px] top-[632px] left-0">
                                                    <div className="top-[505px] left-0 absolute w-[1440px] h-px border-b [border-bottom-style:solid] border-[#1f1f1f]" />
                                                    <div className="top-0 left-0 absolute w-[1440px] h-px border-b [border-bottom-style:solid] border-[#1f1f1f]" />
                                                </div>
                                            </div>
                                        </div>
                                        <img className="absolute w-[364px] h-56 top-[79px] left-1/2 transform -translate-x-1/2" alt="Icon" src="https://c.animaapp.com/KiVzG1Ou/img/icon-3.svg" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating action button */}
                            <div className="absolute w-10 h-[47px] top-[2246px] left-[1360px] rounded-[5px]"> {/* Adjust 'top' if main content height changes */}
                                <div className="relative h-10 top-[827px] bg-[#070708] rounded-[100px]"> {/* This top value also seems very large */}
                                    <div className="w-10 h-10 rounded-[100px] bg-[url(https://c.animaapp.com/KiVzG1Ou/img/image--fab-icon-@2x.png)] bg-cover bg-[50%_50%]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upload image card */}
                    <label htmlFor="image-upload">
                        <input id="image-upload" type="file" accept=".png,.jpg,.jpeg" className="hidden" onChange={handleFileUpload} />
                        <Card
                            className="flex flex-col w-[726px] h-[299px] items-center justify-center absolute top-[590px] left-1/2 transform -translate-x-1/2 bg-colors-background-gray rounded-[22.5px] overflow-hidden border-[0.75px] border-solid border-colors-container-border shadow-[0px_22.5px_45px_#0000001a,0px_11.25px_22.5px_#0000000d,0px_3.75px_7.5px_#0000000d,inset_0px_37.5px_75px_#ffffff26] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] mix-blend-screen cursor-pointer hover:opacity-90 transition-opacity"
                            data-colors-mode="dark"
                        >
                            <CardContent className="inline-flex flex-col items-center justify-center p-0">
                                <Upload className="w-[87px] h-[87px] text-white" />
                                <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#bababa] text-5xl tracking-[-3.69px] leading-[62.7px] font-medium whitespace-nowrap [font-family:'Inter',Helvetica]">upload image</h2>
                                <p className="text-[#ffffff80] text-xl leading-[26px] font-normal [font-family:'Inter',Helvetica]">.png or .jpg</p>
                            </CardContent>
                        </Card>
                    </label>

                    {/* Confidence score circle - Using your existing structure */}
                    <div className="absolute w-[181px] h-[179px] top-[927px] left-[420px]">
                        <div className="relative w-[179px] h-[179px] rounded-[89.5px] border border-solid border-[#ffffff12] shadow-[0px_20px_20px_#0000001a,0px_5px_10px_#0000000d,0px_2px_4px_#0000000d,inset_0px_30px_60px_#ffffff26] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] flex items-center justify-center">
                            {/* Circle base track - Using placeholder for now */}
                            <div className="absolute w-[137px] h-[139px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#333333]" />

                            <div className="absolute w-[179px] h-[179px] -top-px -left-px flex items-center justify-center">
                                <div className="relative w-[166px] h-[166px]">
                                    {/* Circular progress indicator - Custom implementation */}
                                    {!isLoading && (
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <svg className="w-36 h-36 -rotate-90" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50" cy="50" r="38"
                                                    fill="none"
                                                    stroke="#333333"
                                                    strokeWidth="12"
                                                />
                                                <circle
                                                    cx="50" cy="50" r="38"
                                                    fill="none"
                                                    stroke="white"
                                                    strokeWidth="12"
                                                    strokeDasharray="239.5"
                                                    strokeDashoffset={(100 - confidenceScore) / 100 * 239.5}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Percentage Text */}
                            <div className="absolute font-headings-heading-1 font-[number:var(--headings-heading-1-font-weight)] text-white text-[length:var(--headings-heading-1-font-size)] text-center tracking-[var(--headings-heading-1-letter-spacing)] leading-[var(--headings-heading-1-line-height)] [font-style:var(--headings-heading-1-font-style)]">
                                {isLoading ? <LoadingSpinner className="h-12 w-12" /> : `${confidenceScore}%`}
                            </div>
                        </div>
                    </div>

                    {/* Results card - UPDATED SECTION */}
                    <Card className="flex flex-col w-[340px] h-auto min-h-[216px] items-start gap-2.5 px-10 py-5 absolute top-[909px] left-[742px] bg-neutral-900/90 rounded-[40px] overflow-hidden border border-solid border-[#ffffff26] shadow-[0px_30px_60px_#00000033,0px_15px_30px_#0000000d,0px_5px_10px_#0000000d,inset_0px_0px_100px_#ccd7ff40] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                        <CardContent className="flex flex-col w-full items-start gap-4 px-0 py-4 relative">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                                <div
                                    className="relative self-stretch mt-[-1.00px] text-white font-semibold text-lg leading-snug"
                                >
                                    Our detector says that
                                </div>

                                <div
                                    className="relative self-stretch font-normal text-neutral-300 text-sm leading-relaxed"
                                >
                                    {isLoading
                                        ? "Analyzing image..."
                                        : `This is likely AI generated with ${confidenceScore}% confidence.`
                                    }
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="!bg-transparent border border-white text-white
             inline-flex items-center justify-center gap-2
             pt-[var(--spacing-button-vertical-padding)]
             pr-[var(--spacing-button-horizontal-padding)]
             pb-[var(--spacing-button-vertical-padding)]
             pl-[var(--spacing-button-horizontal-padding)]
             rounded-[var(--spacing-button-corner-radius)]
             hover:bg-white/10 active:bg-white/20
             transition-colors"
                                onClick={fetchConfidenceScore}
                            >
                                <span className="text-sm font-medium whitespace-nowrap">
                                    Analyze
                                </span>
                                <ArrowRightIcon className="relative w-4 h-4" />
                            </Button>

                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
};
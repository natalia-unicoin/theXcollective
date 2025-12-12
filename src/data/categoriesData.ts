import type { CategoriesData } from '@/types';

export const categoriesData: CategoriesData = {
    creator: {
        id: 'creator',
        title: 'Creator',
        headline: 'Create the Future.',
        description: 'Artists, writers, musicians, and content creators who want to own their work and their audience.',
        image: 'assets/creator-main.jpg',
        color: '#EBE563', // Yellow
        textColor: 'text-[#EBE563]',
        bgColor: 'bg-[#EBE563]',
        heroVideo: 'assets/videos/creator-hero.mp4', // Placeholder
        scrollText: [
            "Ownership is the new standard.",
            "Your audience, your rules.",
            "Monetize from day one.",
            "Join the creative revolution."
        ],
        bentoGrid: [
            {
                title: "Direct Ownership",
                subtitle: "Control your IP.",
                description: "Mint your work as NFTs and retain full rights forever.",
                size: "large", // large (2x2), tall (1x2), wide (2x1), small (1x1)
                image: "assets/bento/creator-1.jpg",
                theme: "dark"
            },
            {
                title: "Creator Fund",
                subtitle: "$10M Allocation",
                description: "Access grants to kickstart your next big project.",
                size: "tall",
                color: "bg-[#EBE563]",
                theme: "light"
            },
            {
                title: "Global Reach",
                subtitle: "No Borders",
                description: "Connect with fans from Tokyo to Toronto instantly.",
                size: "wide",
                image: "assets/bento/creator-2.jpg",
                theme: "dark"
            },
            {
                title: "Community",
                subtitle: "Collaborate",
                size: "small",
                color: "bg-zinc-900",
                theme: "dark"
            },
            {
                title: "Tools",
                subtitle: "Pro Suite",
                size: "small",
                color: "bg-zinc-800",
                theme: "dark"
            }
        ],
        carousel: [
            {
                title: "The Visionary",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                author: "John Doe",
                image: "assets/carousel/creator-1.jpg"
            },
            {
                title: "The Musician",
                quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                author: "Jane Smith",
                image: "assets/carousel/creator-2.jpg"
            },
            {
                title: "The Writer",
                quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                author: "Alex Johnson",
                image: "assets/carousel/creator-3.jpg"
            }
        ],
        tiers: [
            {
                name: "Member",
                price: "Free",
                features: ["Community Access", "Basic Tools", "Weekly Newsletter"]
            },
            {
                name: "Pro",
                price: "100 $XCOLL",
                features: ["Priority Support", "Advanced Analytics", "Grant Eligibility", "Voting Rights"]
            }
        ],
        longDescription: "We believe that creativity is the ultimate form of value creation. For too long, platforms have extracted value from creators. TheXCollective flips the script. Here, you own your data, your audience, and your upside. We provide the tools, the network, and the capital to help you turn your passion into a thriving economy.",
        benefits: [
            "Direct ownership of your content and audience",
            "Access to the Creator Fund for project financing",
            "Collaboration opportunities with top-tier builders",
            "Tokenized rewards for community engagement"
        ],
        steps: [
            {
                title: "Submit Your Portfolio",
                description: "Show us what you've created. We're looking for unique voices and original perspectives."
            },
            {
                title: "Join the Discord",
                description: "Connect with other creators and start collaborating on community challenges."
            },
            {
                title: "Launch Your Project",
                description: "Use our tools to mint your work and start earning $XCOLL tokens immediately."
            }
        ]
    },
    builder: {
        id: 'builder',
        title: 'Builder',
        headline: 'Build the Infrastructure.',
        description: 'Developers, engineers, and architects building the decentralized tools of tomorrow.',
        image: 'assets/builder-main.jpg',
        color: '#2992A3', // Teal
        textColor: 'text-[#2992A3]',
        bgColor: 'bg-[#2992A3]',
        heroVideo: 'assets/videos/builder-hero.mp4',
        scrollText: [
            "Code is law.",
            "Decentralize everything.",
            "Ship faster, scale harder.",
            "Architect the new web."
        ],
        bentoGrid: [
            {
                title: "Open Source",
                subtitle: "Contribution",
                description: "Get paid to contribute to core protocols.",
                size: "large",
                image: "assets/bento/builder-1.jpg",
                theme: "dark"
            },
            {
                title: "Tech Stack",
                subtitle: "Next Gen",
                description: "Rust, Solidity, ZK-Rollups. The bleeding edge.",
                size: "wide",
                color: "bg-[#2992A3]",
                theme: "light"
            },
            {
                title: "Hackathons",
                subtitle: "Monthly",
                description: "Compete for prizes and glory.",
                size: "tall",
                image: "assets/bento/builder-2.jpg",
                theme: "dark"
            },
            {
                title: "API",
                subtitle: "Access",
                size: "small",
                color: "bg-zinc-900",
                theme: "dark"
            },
            {
                title: "Docs",
                subtitle: "Library",
                size: "small",
                color: "bg-zinc-800",
                theme: "dark"
            }
        ],
        carousel: [
            {
                title: "The Protocol Dev",
                quote: "Building the rails for the next billion users.",
                author: "Alex K.",
                image: "assets/carousel/builder-1.jpg"
            },
            {
                title: "The Frontend Wiz",
                quote: "UI so smooth it feels like magic.",
                author: "Maria S.",
                image: "assets/carousel/builder-2.jpg"
            },
            {
                title: "The Security Researcher",
                quote: "Finding bugs before they find us.",
                author: "James T.",
                image: "assets/carousel/builder-3.jpg"
            }
        ],
        tiers: [
            {
                name: "Contributor",
                price: "Free",
                features: ["Repo Access", "Dev Discord", "Bounties"]
            },
            {
                name: "Architect",
                price: "500 $XCOLL",
                features: ["Core Dev Calls", "Grant Voting", "Audits", "Cloud Credits"]
            }
        ],
        benefits: [
            "Grant funding for open-source contributions",
            "Technical mentorship from industry leaders",
            "Early access to new protocols and APIs",
            "Governance rights in the Builder DAO"
        ]
    },
    investor: {
        id: 'investor',
        title: 'Investor',
        headline: 'Fuel the Ecosystem.',
        description: 'Visionaries who provide the capital and strategic guidance to scale our impact.',
        image: 'assets/investor-main.jpg',
        color: '#BEE3EE', // Light Blue
        textColor: 'text-[#BEE3EE]',
        bgColor: 'bg-[#BEE3EE]',
        heroVideo: 'assets/videos/investor-hero.mp4',
        scrollText: [
            "Capital with conscience.",
            "Invest in the future.",
            "High risk, higher reward.",
            "Shape the economy."
        ],
        bentoGrid: [
            {
                title: "Deal Flow",
                subtitle: "Exclusive",
                description: "First look at the most promising projects.",
                size: "large",
                image: "assets/bento/investor-1.jpg",
                theme: "dark"
            },
            {
                title: "Network",
                subtitle: "Elite",
                description: "Connect with other high-conviction backers.",
                size: "tall",
                color: "bg-[#BEE3EE]",
                theme: "light"
            },
            {
                title: "Analytics",
                subtitle: "Deep Dive",
                description: "Institutional-grade data at your fingertips.",
                size: "wide",
                image: "assets/bento/investor-2.jpg",
                theme: "dark"
            },
            {
                title: "Reports",
                subtitle: "Weekly",
                size: "small",
                color: "bg-zinc-900",
                theme: "dark"
            },
            {
                title: "Advisory",
                subtitle: "Board",
                size: "small",
                color: "bg-zinc-800",
                theme: "dark"
            }
        ],
        carousel: [
            {
                title: "The Angel",
                quote: "Backing founders who dare to dream.",
                author: "Priya M.",
                image: "assets/carousel/investor-1.jpg"
            },
            {
                title: "The VC",
                quote: "Scaling the infrastructure of tomorrow.",
                author: "David L.",
                image: "assets/carousel/investor-2.jpg"
            },
            {
                title: "The Strategist",
                quote: "More than just capital. Guidance.",
                author: "Sophie B.",
                image: "assets/carousel/investor-3.jpg"
            }
        ],
        tiers: [
            {
                name: "Scout",
                price: "1000 $XCOLL",
                features: ["Deal Flow Lite", "Community Calls", "Newsletter"]
            },
            {
                name: "Partner",
                price: "10000 $XCOLL",
                features: ["Priority Allocation", "Board Seats", "Private Events", "Direct Access"]
            }
        ],
        benefits: [
            "Exclusive deal flow and early investment opportunities",
            "Strategic advisory roles in portfolio companies",
            "Networking with high-net-worth individuals",
            "Priority access to token sales"
        ]
    },
    connector: {
        id: 'connector',
        title: 'Connector',
        headline: 'Connect the Dots.',
        description: 'Community managers, event organizers, and influencers who bring people together.',
        image: 'assets/connector-main.jpg',
        color: '#E2622B', // Orange
        textColor: 'text-[#E2622B]',
        bgColor: 'bg-[#E2622B]',
        heroVideo: 'assets/videos/connector-hero.mp4',
        scrollText: [
            "People are the platform.",
            "Bridge the gaps.",
            "Amplify the signal.",
            "Community is currency."
        ],
        bentoGrid: [
            {
                title: "Events",
                subtitle: "Global",
                description: "Host and attend exclusive gatherings worldwide.",
                size: "large",
                image: "assets/bento/connector-1.jpg",
                theme: "dark"
            },
            {
                title: "Influence",
                subtitle: "Reach",
                description: "Grow your personal brand within the ecosystem.",
                size: "wide",
                color: "bg-[#E2622B]",
                theme: "light"
            },
            {
                title: "Rewards",
                subtitle: "Bounties",
                description: "Earn for every successful introduction.",
                size: "tall",
                image: "assets/bento/connector-2.jpg",
                theme: "dark"
            },
            {
                title: "Social",
                subtitle: "Media",
                size: "small",
                color: "bg-zinc-900",
                theme: "dark"
            },
            {
                title: "Viral",
                subtitle: "Growth",
                size: "small",
                color: "bg-zinc-800",
                theme: "dark"
            }
        ],
        carousel: [
            {
                title: "The Host",
                quote: "Creating spaces where magic happens.",
                author: "Marcus R.",
                image: "assets/carousel/connector-1.jpg"
            },
            {
                title: "The Influencer",
                quote: "Sharing the story of the collective.",
                author: "Chloe K.",
                image: "assets/carousel/connector-2.jpg"
            },
            {
                title: "The Bridge",
                quote: "Connecting talent with opportunity.",
                author: "Liam N.",
                image: "assets/carousel/connector-3.jpg"
            }
        ],
        tiers: [
            {
                name: "Member",
                price: "Free",
                features: ["Event Access", "Community Discord", "Referral Links"]
            },
            {
                name: "Ambassador",
                price: "200 $XCOLL",
                features: ["Event Budget", "Merch Swag", "Speaking Slots", "VIP Access"]
            }
        ],
        benefits: [
            "Rewards for successful intros",
            "Community leadership roles",
            "Exclusive networking events",
            "Curate the collective"
        ]
    }
};

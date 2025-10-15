export interface IMenuItem {
    text: string;
    url: string;
}

export interface IService {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPortfolioItem {
    title: string;
    description: string;
    imageSrc: string;
    demoUrl: string;
}

export interface IPricingPlan {
    name: string;
    price: string;
}

export interface IPricingFeature {
    name: string;
    availability: Record<string, boolean>;
}

export interface IPricing {
    title: string;
    description: string;
    plans: IPricingPlan[];
    features: IPricingFeature[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    telegram?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

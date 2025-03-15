import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
    name: "Toonily",
    description: "Extension that pulls content from Toonily.com",
    version: "1.0.0-alpha.2",
    icon: "icon.png",
    language: "en",
    contentRating: ContentRating.ADULT,
    badges: [
        {
            label: "NSFW",
            textColor: "#FFFFFF",
            backgroundColor: "#FF0000",
        },
        {
            label: "English",
            textColor: "#000000",
            backgroundColor: "#00ffff",
        },
        {
            label: "Aggregator",
            textColor: "#FFFFFF",
            backgroundColor: "#1d4ed8", // blue-700
        },
        {
            label: "Manga",
            textColor: "#FFFFFF",
            backgroundColor: "#4c1d95", // purple-900
        },
        {
            label: "Webtoon",
            textColor: "#FFFFFF",
            backgroundColor: "#5b21b6", // purple-800
        },
        {
            label: "Regular Release",
            textColor: "#000000",
            backgroundColor: "#fbbf24", // amber-400
        },
        {
            label: "Good Images",
            textColor: "#000000",
            backgroundColor: "#fbbf24", // amber-400
        },
        {
            label: "Average Translations",
            textColor: "#000000",
            backgroundColor: "#fbbf24", // amber-400
        },
    ],
    capabilities: [
        SourceIntents.DISCOVER_SECIONS,
        SourceIntents.MANGA_SEARCH,
        SourceIntents.MANGA_CHAPTERS,
    ],
    developers: [
        {
            name: "Egwau",
        },
    ],
} satisfies SourceInfo;

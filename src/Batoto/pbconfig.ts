import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
    name: "Bato",
    description: "Extension that pulls content from Bato.to",
    version: "1.0.0-alpha.1",
    icon: "icon.png",
    language: "en",
    contentRating: ContentRating.ADULT,
    capabilities: [
        SourceIntents.SETTINGS_UI,
        SourceIntents.DISCOVER_SECIONS,
        SourceIntents.MANGA_SEARCH,
        SourceIntents.MANGA_CHAPTERS,
    ],
    badges: [],
    developers: [
        {
            name: "Egwau",
        },
    ],
} satisfies SourceInfo;

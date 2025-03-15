interface Language {
    name: string;
    MDCode: string;
    flagCode: string;
    default?: boolean;
}

class BTLanguagesClass {
    Languages: Language[] = [
        // Existing languages
        { name: "اَلْعَرَبِيَّةُ", MDCode: "ar", flagCode: "🇦🇪" },
        { name: "български", MDCode: "bg", flagCode: "🇧🇬" },
        { name: "বাংলা", MDCode: "bn", flagCode: "🇧🇩" },
        { name: "Català", MDCode: "ca", flagCode: "🇪🇸" },
        { name: "Čeština", MDCode: "cs", flagCode: "🇨🇿" },
        { name: "Dansk", MDCode: "da", flagCode: "🇩🇰" },
        { name: "Deutsch", MDCode: "de", flagCode: "🇩🇪" },
        { name: "English", MDCode: "en", flagCode: "🇬🇧", default: true },
        { name: "Español", MDCode: "es", flagCode: "🇪🇸" },
        { name: "Español (Latinoamérica)", MDCode: "es-la", flagCode: "🇪🇸" },
        { name: "فارسی", MDCode: "fa", flagCode: "🇮🇷" },
        { name: "Suomi", MDCode: "fi", flagCode: "🇫🇮" },
        { name: "Français", MDCode: "fr", flagCode: "🇫🇷" },
        { name: "עִבְרִית", MDCode: "he", flagCode: "🇮🇱" },
        { name: "हिन्दी", MDCode: "hi", flagCode: "🇮🇳" },
        { name: "Magyar", MDCode: "hu", flagCode: "🇭🇺" },
        { name: "Indonesia", MDCode: "id", flagCode: "🇮🇩" },
        { name: "Italiano", MDCode: "it", flagCode: "🇮🇹" },
        { name: "日本語", MDCode: "ja", flagCode: "🇯🇵" },
        { name: "한국어", MDCode: "ko", flagCode: "🇰🇷" },
        { name: "Lietuvių", MDCode: "lt", flagCode: "🇱🇹" },
        { name: "монгол", MDCode: "mn", flagCode: "🇲🇳" },
        { name: "Melayu", MDCode: "ms", flagCode: "🇲🇾" },
        { name: "မြန်မာဘာသာ", MDCode: "my", flagCode: "🇲🇲" },
        { name: "Nederlands", MDCode: "nl", flagCode: "🇳🇱" },
        { name: "Norsk", MDCode: "no", flagCode: "🇳🇴" },
        { name: "Polski", MDCode: "pl", flagCode: "🇵🇱" },
        { name: "Português", MDCode: "pt", flagCode: "🇵🇹" },
        { name: "Português (Brasil)", MDCode: "pt-br", flagCode: "🇧🇷" },
        { name: "Română", MDCode: "ro", flagCode: "🇷🇴" },
        { name: "Pусский", MDCode: "ru", flagCode: "🇷🇺" },
        { name: "Cрпски", MDCode: "sr", flagCode: "🇷🇸" },
        { name: "Svenska", MDCode: "sv", flagCode: "🇸🇪" },
        { name: "ไทย", MDCode: "th", flagCode: "🇹🇭" },
        { name: "Filipino", MDCode: "tl", flagCode: "🇵🇭" },
        { name: "Türkçe", MDCode: "tr", flagCode: "🇹🇷" },
        { name: "Yкраї́нська", MDCode: "uk", flagCode: "🇺🇦" },
        { name: "Tiếng Việt", MDCode: "vi", flagCode: "🇻🇳" },
        { name: "中文 (简化字)", MDCode: "zh", flagCode: "🇨🇳" },
        { name: "中文 (繁體字)", MDCode: "zh-hk", flagCode: "🇭🇰" },

        // New languages from the HTML
        { name: "Afrikaans", MDCode: "af", flagCode: "🇿🇦" },
        { name: "Albanian", MDCode: "sq", flagCode: "🇦🇱" },
        { name: "Amharic", MDCode: "am", flagCode: "🇪🇹" },
        { name: "Armenian", MDCode: "hy", flagCode: "🇦🇲" },
        { name: "Azerbaijani", MDCode: "az", flagCode: "🇦🇿" },
        { name: "Belarusian", MDCode: "be", flagCode: "🇧🇾" },
        { name: "Bosnian", MDCode: "bs", flagCode: "🇧🇦" },
        { name: "Burmese", MDCode: "my", flagCode: "🇲🇲" },
        { name: "Cambodian", MDCode: "km", flagCode: "🇰🇭" },
        { name: "Cebuano", MDCode: "ceb", flagCode: "🇵🇭" },
        { name: "Chinese (繁)", MDCode: "zh-hant", flagCode: "🇹🇼" },
        { name: "Chinese (粵)", MDCode: "yue", flagCode: "🇭🇰" },
        { name: "Croatian", MDCode: "hr", flagCode: "🇭🇷" },
        { name: "Estonian", MDCode: "et", flagCode: "🇪🇪" },
        { name: "Faroese", MDCode: "fo", flagCode: "🇫🇴" },
        { name: "Georgian", MDCode: "ka", flagCode: "🇬🇪" },
        { name: "Greek", MDCode: "el", flagCode: "🇬🇷" },
        { name: "Guarani", MDCode: "gn", flagCode: "🇵🇾" },
        { name: "Gujarati", MDCode: "gu", flagCode: "🇮🇳" },
        { name: "Haitian Creole", MDCode: "ht", flagCode: "🇭🇹" },
        { name: "Hausa", MDCode: "ha", flagCode: "🇳🇪" },
        { name: "Icelandic", MDCode: "is", flagCode: "🇮🇸" },
        { name: "Igbo", MDCode: "ig", flagCode: "🇳🇬" },
        { name: "Irish", MDCode: "ga", flagCode: "🇮🇸" },
        { name: "Javanese", MDCode: "jv", flagCode: "🇮🇩" },
        { name: "Kannada", MDCode: "kn", flagCode: "🇮🇳" },
        { name: "Kazakh", MDCode: "kk", flagCode: "🇰🇿" },
        { name: "Kurdish", MDCode: "ku", flagCode: "🇮🇶" },
        { name: "Kyrgyz", MDCode: "ky", flagCode: "🇰🇬" },
        { name: "Laothian", MDCode: "lo", flagCode: "🇱🇦" },
        { name: "Latvian", MDCode: "lv", flagCode: "🇱🇻" },
        { name: "Luxembourgish", MDCode: "lb", flagCode: "🇱🇺" },
        { name: "Macedonian", MDCode: "mk", flagCode: "🇲🇰" },
        { name: "Malagasy", MDCode: "mg", flagCode: "🇲🇬" },
        { name: "Malayalam", MDCode: "ml", flagCode: "🇮🇳" },
        { name: "Maltese", MDCode: "mt", flagCode: "🇲🇹" },
        { name: "Maori", MDCode: "mi", flagCode: "🇳🇿" },
        { name: "Marathi", MDCode: "mr", flagCode: "🇮🇳" },
        { name: "Moldavian", MDCode: "mo", flagCode: "🇲🇩" },
        { name: "Nepali", MDCode: "ne", flagCode: "🇳🇵" },
        { name: "Nyanja", MDCode: "ny", flagCode: "🇲🇼" },
        { name: "Pashto", MDCode: "ps", flagCode: "🇦🇫" },
        { name: "Persian", MDCode: "fa", flagCode: "🇮🇷" },
        { name: "Portuguese (BR)", MDCode: "pt-br", flagCode: "🇧🇷" },
        { name: "Romansh", MDCode: "rm", flagCode: "🇨🇭" },
        { name: "Samoan", MDCode: "sm", flagCode: "🇼🇸" },
        { name: "Serbo-Croatian", MDCode: "sh", flagCode: "🇷🇸" },
        { name: "Sesotho", MDCode: "st", flagCode: "🇱🇸" },
        { name: "Shona", MDCode: "sn", flagCode: "🇿🇼" },
        { name: "Sindhi", MDCode: "sd", flagCode: "🇵🇰" },
        { name: "Sinhalese", MDCode: "si", flagCode: "🇱🇰" },
        { name: "Slovak", MDCode: "sk", flagCode: "🇸🇰" },
        { name: "Slovenian", MDCode: "sl", flagCode: "🇸🇮" },
        { name: "Somali", MDCode: "so", flagCode: "🇸🇴" },
        { name: "Spanish (LA)", MDCode: "es-la", flagCode: "🇲🇽" },
        { name: "Swahili", MDCode: "sw", flagCode: "🇰🇪" },
        { name: "Tajik", MDCode: "tg", flagCode: "🇹🇯" },
        { name: "Tamil", MDCode: "ta", flagCode: "🇱🇰" },
        { name: "Telugu", MDCode: "te", flagCode: "🇮🇳" },
        { name: "Tigrinya", MDCode: "ti", flagCode: "🇪🇷" },
        { name: "Tonga", MDCode: "to", flagCode: "🇹🇴" },
        { name: "Turkmen", MDCode: "tk", flagCode: "🇹🇲" },
        { name: "Urdu", MDCode: "ur", flagCode: "🇵🇰" },
        { name: "Uzbek", MDCode: "uz", flagCode: "🇺🇿" },
        { name: "Yoruba", MDCode: "yo", flagCode: "🇳🇬" },
        { name: "Zulu", MDCode: "zu", flagCode: "🇿🇦" },
        { name: "Other", MDCode: "other", flagCode: "🏳️‍🌈" },
    ];

    constructor() {
        // Sorts the languages based on name
        this.Languages = this.Languages.sort((a, b) =>
            a.name > b.name ? 1 : -1,
        );
    }

    getMDCodeList(): string[] {
        return this.Languages.map((Language) => Language.MDCode);
    }

    getName(MDCode: string): string {
        return (
            this.Languages.filter((Language) => Language.MDCode == MDCode)[0]
                ?.name ?? "Unknown"
        );
    }

    getFlagCode(MDCode: string): string {
        return (
            this.Languages.filter((Language) => Language.MDCode == MDCode)[0]
                ?.flagCode ?? "_unknown"
        );
    }

    getDefault(): string[] {
        return this.Languages.filter((Language) => Language.default).map(
            (Language) => Language.MDCode,
        );
    }
}

export const BTLanguages = new BTLanguagesClass();

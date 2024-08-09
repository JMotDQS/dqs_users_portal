var search_array = [];

/***** Special Character Replacement Arrays Global Variables */
const g_SEARCH_ENTITIES = ["Ø", "°",
    "\"", "\'",
    "©", "®", "™",
    "à", "á", "À", "Á",
    "è", "é", "È", "É"];
const g_REPLACE_ENTITIES = ["&Oslash;", "&deg;",
    "&quot;", "&apos;",
    "&copy;", "&reg;", "&trade;",
    "&agrave;", "&aacute;", "&Agrave;", "&Aacute;",
    "&egrave;", "&eacute;", "&Egrave;", "&Eacute;"];
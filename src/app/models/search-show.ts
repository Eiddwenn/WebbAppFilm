export interface searchShow {
    score: number;
    show:  Show;
}

export interface Show {
    id:             number;
    url:            string;
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    status:         string;
    runtime:        null;
    averageRuntime: null;
    premiered:      null;
    ended:          null;
    officialSite:   null;
    schedule:       Schedule;
    rating:         Rating;
    weight:         number;
    network:        Network;
    webChannel:     null;
    dvdCountry:     null;
    externals:      Externals;
    image:          Image;
    summary:        string;
    updated:        number;
    _links:         Links;
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Externals {
    tvrage:  null;
    thetvdb: number;
    imdb:    string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:           number;
    name:         string;
    country:      Country;
    officialSite: null;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number;
}

export interface Schedule {
    time: string;
    days: any[];
}
# Kitsu API

## Import Files

```js
const Kitsu = require('search-kitsu');
// or
import Kitsu from 'search-kitsu';
```

## Usage

```js
const API = new Kitsu();

// Search Anime

API.searchAnime(query, options);

// Search Manga

API.searchManga(query, options);
```

## Examples

```js
// Get anime using title
API.searchAnime('One Piece').then(data => {
  console.log(data[0]);
});

// Get anime using (title/options)

API.searchAnime('My Hero Academia', { seasonYear: 2018 }).then(data => {
  console.log(data[0]);
});
```

## Returns

```
createdAt: string;
updatedAt: string;
slug: string;
synopsis: string;
titles: {
	[key: string]: string;
	en: string;
	en_jp: string;
	ja_jp: string;
};
canonicalTitle: string;
abbreviatedTitles: string[];
averageRating: string;
startDate: string;
endDate: string;
status: string;
posterImage: {
	[key: string]: string
	tiny: string;
	small: string;
	medium: string;
	large: string;
	original: string;
};
coverImage: {
	[key: string]: string;
	tiny: string;
	small: string;
	medium: string;
	large: string;
	original: string;
};
[ANIME ONLY]
episodeCount: number | null;
episodeLength: number | null;
showType: 'TV' | 'Special' | 'ONA' | 'OVA' | 'Movie' | 'Music';
nsfw: boolean;
[MANGA ONLY]
chapterCount: number;
volumeCount: number;
serialization: string;
mangaType: string;
```

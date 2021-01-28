"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : new P(function(resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise");
const Anime_1 = require("./lib/anime");
const Manga_1 = require("./lib/manga");
class KitsuSearch {
  constructor() {
    this.path = "https://kitsu.io/api/edge/";
    this.header = "application/vnd.api+json";
  }
  searchAnime(text, filter) {
    return __awaiter(this, void 0, void 0, function*() {
      let query = `${this.path}anime`;
      try {
        query = this.parseAnimeURL(query, text, filter);
        const response = yield this.query(query);
        return response.map(anime => new Anime_1(anime.id, anime.attributes));
      } catch (error) {
        throw new Error(error);
      }
    });
  }
  searchManga(text, filter) {
    return __awaiter(this, void 0, void 0, function*() {
      let query = `${this.path}manga`;
      try {
        query = this.parseMangaURL(query, text, filter);
        const response = yield this.query(query);
        return response.map(manga => new Manga_1(manga.id, manga.attributes));
      } catch (error) {
        throw new Error(error);
      }
    });
  }
  query(query) {
    return __awaiter(this, void 0, void 0, function * () {
      try {
        const { data } = yield request(query, {
          json: true,
          headers: { Accept: this.header, "Content-Type": this.header }
        });
        if (data.length < 1)
          throw new Error("There were no results for your query");
        return data;
      } catch (error) {
        throw new Error(error);
      }
    });
  }
  parseAnimeURL(query, text, filter) {
    if (text) query += `?filter%5Btext%5D=${text}`;
    if (filter) {
      if (filter.rating) query += `&filter%5Brating%5D=${filter.rating}`;
      if (filter.season) query += `&filter%5Bseason%5D=${filter.season}`;
      if (filter.seasonYear) query += `&filter%5BseasonYear%5D=${filter.seasonYear}`;
      if (filter.streamers) query += `&filter%5Bstreamers%5D=${filter.streamers}`;
    }
    if (text) query += "&page%5Blimit%5D=20";
    if (!text) query += "?page%5Blimit%5D=20";
    return query;
  }
  parseMangaURL(query, text, filter) {
    if (text) query += `?filter%5Btext%5D=${text}`;
    if (filter) {
      if (filter.chapterCount)
        query += `&filter%5BchapterCount%5D=${filter.chapterCount}`;
    }
    return query;
  }
}

module.exports = KitsuSearch;

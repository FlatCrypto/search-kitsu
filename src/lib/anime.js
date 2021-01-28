const request = require('request-promise');

class anime {
  constructor(id, attr, query) {
    this.id = id;
    this.attributes = attr;
    this.createdAt = attr.createdAt || null;
    this.updatedAt = attr.updatedAt || null;
    this.slug = attr.slug || null;
    this.synopsis = attr.synopsis || null;
    this.titles = attr.titles;
    this.canonTitle = attr.canonicalTitle || null;
    this.abbreviatedTitles = attr.abbreviatedTitles;
    this.avgRating = attr.averageRating || null;
    this.startDate = attr.startDate || null;
    this.endDate = attr.endDate || null;
    this.status = attr.status || null;
    this.posterImage = attr.posterImage || null;
    this.coverImage = attr.coverImage || null;
    this.epCount = attr.episodeCount || null;
    this.showType = attr.showType || null;
    this.nsfw = attr.nsfw;
  }
}

module.exports = anime;

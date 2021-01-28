class manga {
  constructor(id, attr) {
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
    this.chapterCount = attr.chapterCount || null;
    this.volumeCount = attr.volumeCount || null;
    this.serialization = attr.serialization || null;
    this.mangaType = attr.mangaType || null;
  }
}

module.exports = manga;

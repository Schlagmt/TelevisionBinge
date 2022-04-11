using System.Collections.Generic;

namespace TelevisionBinge.Models
{
    public class AdvancedSearchData
    {
        public string QueryString { get; set; }
        public List<AdvancedSearchResult> Results { get; set; }
        public string ErrorMessage { get; set; }
    }

    public class AdvancedSearchResult
    {
        public string Id { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string RuntimeStr { set; get; }
        public string Genres { set; get; }
        public List<KeyValueItem> GenreList { get; set; }
        public string ContentRating { get; set; }
        public string IMDbRating { get; set; }
        public string IMDbRatingVotes { get; set; }
        public string MetacriticRating { set; get; }
        public string Plot { set; get; }
        public string Stars { set; get; }
        public List<StarShort> StarList { get; set; }
    }
}

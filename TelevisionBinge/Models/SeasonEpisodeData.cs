using System.Collections.Generic;

namespace TelevisionBinge.Models
{
    public class SeasonEpisodeData
    {
        public string IMDbId { get; set; }
        public string Title { get; set; }
        public int Season { get; set; }
        public string FullTitle { get; set; }
        public string Type { get; set; }
        public string Year { get; set; }
        public List<EpisodeShortDetail> Episodes { get; set; }
        public string ErrorMessage { get; set; }
    }

    public class EpisodeShortDetail
    {
        public string Id { get; set; }
        public string SeasonNumber { get; set; }
        public string EpisodeNumber { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Year { set; get; }
        public string Released { set; get; }
        public string Plot { set; get; }
        public string IMDbRating { get; set; }
        public string IMDbRatingCount { get; set; }
    }
}

using System.Collections.Generic;

namespace TelevisionBinge.WebAPI.Models
{
    public class TelevisionShowData
    {
        public TitleData Title { get; set; }
        public List<SeasonEpisodeData> SeasonEpisodeDataList { get; set; }
    }
}

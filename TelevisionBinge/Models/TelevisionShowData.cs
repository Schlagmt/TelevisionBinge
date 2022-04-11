using System.Collections.Generic;

namespace TelevisionBinge.Models
{
    public class TelevisionShowData
    {
        public TitleData Title { get; set; }
        public List<SeasonEpisodeData> SeasonEpisodeDataList { get; set; }
    }
}

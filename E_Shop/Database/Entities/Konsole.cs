using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Dto;

namespace E_Shop.Database.Entities
{
    public class Konsole
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        
        public string city { get; set; }
        [ForeignKey("location")]
        public virtual city location { get; set; }
        public HardwareList HardwareList { get; set; }
        public string phonenumber { get; set; }
        public int quantity { get; set; }

    }



    public enum HardwareList
    {
        PLAY_STATION_3_FAT,
        PLAY_STATION_3_SLIM,
        PLAY_STATION_3_ULTRASLIM,
        PLAY_STATION_4_FAT,
        PLAY_STATION_4_SLIM,
        PLAY_STATION_4_PRO,
        XBOX_360,
        XBOX_360_SLIM,
        XBOX_360_SUPERSLIM,
        XBOX_ONE,
        XBOX_ONE_SLIM,
        XBOX_ONE_X,
        NINTENDO_3DS,
        NINTENDO_3DS_XL,
        NINTENDO_3DS_NEW,
        NINTENDO_3DS_NEW_XL,
        NINTENDO_2DS,
        NINTENDO_2DS_NEW,
        NINTENDO_SWITCH
    }

}

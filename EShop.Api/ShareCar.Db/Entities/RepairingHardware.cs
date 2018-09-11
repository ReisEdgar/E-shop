using EShop.Db.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EShop.Db.Entities
{
    public class RepairingHardware
    {
        public HardwareStatus HardwareStatus { get;set;}
        public HardwareCategory HardwareCategory { get; set; }
        public User Owner { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string AdditionalMessage { get; set; }

    }
    public internal enum HardwareStatus
    {
        WAITING,
        REPARING,
        REPAIRED,
        WAITING_FOR_PARTS_DELIVERY

    }
    public internal enum HardwareCategory
    {
        PC,
        LAPTOP,
        PLAY_STATION,
        XBOX,
        NINTENDO,
        KINECT,
        WII,
        PSP

    }
}

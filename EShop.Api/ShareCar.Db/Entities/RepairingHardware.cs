using ShareCar.Db.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EShop.Db.Entities
{
    class RepairingHardware
    {
        public HardwareStatus HardwareStatus { get;set;}
        public HardwareCategory HardwareCategory { get; set; }
        public User Owner { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string AdditionalMessage { get; set; }

    }
    internal enum HardwareStatus
    {
        WAITING,
        REPARING,
        REPAIRED,
        WAITING_FOR_PARTS_DELIVERY

    }
    internal enum HardwareCategory
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

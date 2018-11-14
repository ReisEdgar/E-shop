using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class HardwareDto
    {
        public int ?Id;
        public HardwareStatus Status { get; set; }
        public HardwareCategory Category { get; set; }
        public string Owner { get; set; }
        public string StartDate { get; set; }
        public string AdditionalMessage { get; set; }

    }/*
    public enum HardwareStatus
    {
        WAITING,
        REPARING,
        REPAIRED,
        WAITING_FOR_PARTS_DELIVERY

    }
    public enum HardwareCategory
    {
        PC,
        LAPTOP,
        PLAY_STATION,
        XBOX,
        NINTENDO,
        KINECT,
        WII,
        PSP

    }*/
}

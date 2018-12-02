﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class Hardware
    {
        public int Id { get; set; }
        public HardwareStatus Status { get; set; }
        public HardwareCategory Category { get; set; }
        public string Owner { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string AdditionalMessage { get; set; }

    }
    public enum HardwareStatus
    {
        Laukia,
        Taisoma,
        Sutaisyta//,
      //  Laukiama daliu pristatymo

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

    }
}
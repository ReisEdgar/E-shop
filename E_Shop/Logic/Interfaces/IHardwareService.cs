﻿using E_Shop.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic.Interfaces
{
    public interface IHardwareService
    {
        void EditHardwareItem(HardwareDto hadwareItem);
        HardwareDto GetHardwareItemById(int id);
        List<HardwareDto> GetHardware();
        List<HardwareDto> GetHardwareByUser(string owner);
        void DeleteHardware(int id);

    }
}

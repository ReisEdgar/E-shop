using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class HardwareRequestDto
    {
        public List<HardwareStatus> Statuses { get; set; }
        public List<HardwareCategory> Categories { get; set; }
        public string Owner { get; set; }
    }
}

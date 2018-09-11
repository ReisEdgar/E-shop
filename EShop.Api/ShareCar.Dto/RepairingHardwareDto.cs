using EShop.Dto.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace EShop.Dto
{
    public class RepairingHardwareDto    
     {
        public HardwareStatus HardwareStatus { get; set; }
    public HardwareCategory HardwareCategory { get; set; }
    public UserDto Owner { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string AdditionalMessage { get; set; }

}
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

}
}
+}

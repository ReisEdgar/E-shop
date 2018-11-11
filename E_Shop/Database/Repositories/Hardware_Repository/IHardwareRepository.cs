using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Repositories.Hardware_Repository
{
    interface IHardwareRepository
    {
        void CreateNewItem(Hardware repairingHardware);
        void DeleteItem( int recordId);
        void ModifyItem();
        Hardware GetItemByCode(string code);
        Hardware GetItemById(int id);
        Hardware GetItemByFilterParameters(List<HardwareStatus> statuses, List<HardwareCategory> categories, string owner);
    }
}

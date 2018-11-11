using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Database.Entities;

namespace E_Shop.Database.Repositories.Hardware_Repository
{
    public class HardwareRepository : IHardwareRepository
    {
        private readonly DatabaseContext _databaseContext;

        public void CreateNewItem(Hardware repairingHardware)
        {
            _databaseContext.HardwareRecords.Add(repairingHardware);
        }

        public void DeleteItem(int recordId)
        {
            throw new NotImplementedException();
        }

        public Hardware GetItemByCode(string code)
        {
            throw new NotImplementedException();
        }

        public Hardware GetItemByFilterParameters(List<HardwareStatus> statuses, List<HardwareCategory> categories, string owner)
        {
            throw new NotImplementedException();
        }

        public Hardware GetItemById(int id)
        {
            throw new NotImplementedException();
        }

        public Hardware GetRecordByUser(string user)
        {
            throw new NotImplementedException();
        }

        public void ModifyItem()
        {
            throw new NotImplementedException();
        }
    }
}
